import { Module } from '@nestjs/common';
import {CatService} from "./cat.service";
import {CatController} from "./cat.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CatImageLike} from "../entities/CatImageLike";
import {Repository} from "typeorm";

@Module({
    imports: [TypeOrmModule.forFeature([CatImageLike])],
    exports: [TypeOrmModule],
    controllers: [CatController],
    providers: [CatService]
})
export class CatModule {
}
