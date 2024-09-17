export class CreateLikeDto {
    cat_id: string;
    created_at: string;

    constructor(cat_id: string, created_at: string) {
        this.cat_id = cat_id;
        this.created_at = created_at;
    }
}