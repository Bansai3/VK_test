import {Column, Entity, PrimaryColumn, Unique} from "typeorm"

@Entity()
export class CatImageLike {
    @PrimaryColumn()
    catImage_id: string
    @Column()
    height: number
    @Column()
    width: number
    @Column()
    url: string
    @Column()
    created_at: string;
}