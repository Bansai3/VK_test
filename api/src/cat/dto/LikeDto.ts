export class LikeDto {
    id: number;
    catImageId: string;
    created_at: Date;

    constructor(id: number, catImageId: string, created_at: Date) {
        this.id = id;
        this.catImageId = catImageId;
        this.created_at = created_at;
    }
}