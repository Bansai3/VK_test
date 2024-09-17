export class CatImageDto {
    id: string
    height: number
    width: number
    url: string

    constructor(id: string, height: number, width: number, url: string ) {
        this.id = id;
        this.height = height;
        this.width = width;
        this.url = url;
    }
}