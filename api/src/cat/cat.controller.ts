import {Body, Controller, Delete, Get, Param, Post} from '@nestjs/common';
import {CatService} from "./cat.service";
import {CreateLikeDto} from "./dto/CreateLikeDto";

@Controller()
export class CatController {
    constructor(private readonly catService: CatService) {}

    @Get('likes')
    async getAllLikes() {
        return await this.catService.getLikes();
    }

    @Post('likes')
    async addLike(@Body() dto: CreateLikeDto) {
        return await this.catService.createCatImageLike(dto);
    }

    @Delete('likes/cat_id')
    async deleteLike(@Param('cat_id') cat_id: string) {
        return await this.catService.deleteLike(cat_id);
    }
}
