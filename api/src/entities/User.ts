import {Column, Entity, PrimaryColumn} from "typeorm";

@Entity()
export class User {
    @PrimaryColumn()
    id: number
    @Column()
    login: string
    @Column()
    password: string
}