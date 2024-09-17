interface CatImageDto {
    id: string;
    url: string;
    width: number;
    height: number;
}

export class CatImagesData {
    data: CatImageDto[]

    constructor(data: CatImageDto[]) {
        this.data = data;
    }
}