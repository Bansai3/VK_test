import {Injectable} from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {CatImageDto} from "./dto/CatImageDto";
import {CatImagesData} from "./dto/LikesData";
import {CreateLikeDto} from "./dto/CreateLikeDto";
import {CatImageLike} from "../entities/CatImageLike";
import {TheCatAPI} from "@thatapicompany/thecatapi";
import * as process from "process";

@Injectable()
export class CatService {

    constructor(
        @InjectRepository(CatImageLike)
        private catImageRepository: Repository<CatImageLike>,
    ) {}

    async getCatFromApi(catImage_id: string) {
        const apiKey = process.env.API_KEY;
        const CatAPI = new TheCatAPI(`${apiKey}`, {host: "https://api.thecatapi.com/v1"})
        try {
            return await CatAPI.images.getImage(catImage_id);
        } catch (error) {
            throw new Error('Кошки с указанным id не существует!');
        }
    }

    async createCatImageLike(createLikeDto: CreateLikeDto): Promise<CreateLikeDto> {
        if (await this.checkLikeExist(createLikeDto.cat_id) == true) {
            throw new Error('Картинка с кошкой уже лайкнута!');
        }

        const catImage = await this.getCatFromApi(createLikeDto.cat_id);

        const catImageLike = new CatImageLike();
        catImageLike.created_at = createLikeDto.created_at;
        catImageLike.catImage_id = catImage.id;
        catImageLike.height = catImage.height;
        catImageLike.width = catImage.width;
        catImageLike.url = catImage.url;


        const savedLike = await this.catImageRepository.save(catImageLike);
        return new CreateLikeDto(String(savedLike.catImage_id), savedLike.created_at);
    }

    async getLikes() {
        const catImages = await this.catImageRepository.find();
        const likeDtos = catImages.map(catImage => new CatImageDto(catImage.catImage_id, catImage.height, catImage.width, catImage.url));
        return new CatImagesData(likeDtos);
    }

    async checkLikeExist(catImageId: string) {
        const catImage = await this.catImageRepository.findOneBy({ catImage_id: catImageId });
        return catImage != null;
    }

    async deleteLike(catImageId: string) {
        if (await this.checkLikeExist(catImageId) == false) {
            throw new Error('У картинки с кошкой нет лайка! Лайк нельзя удалить!');
        }
        return this.catImageRepository.delete({ catImage_id: catImageId });
    }
}
