import {CatImageDto} from "./CatImageDto";

export class CatImagesData {
    data: CatImageDto[]

    constructor(data: CatImageDto[]) {
        this.data = data;
    }
}