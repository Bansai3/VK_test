import { Module } from '@nestjs/common';
import {CatController} from "../cat/cat.controller";
import {CatService} from "../cat/cat.service";
import {UserController} from "./user.controller";
import {UserService} from "./user.service";
import {TypeOrmModule} from "@nestjs/typeorm";
import {CatImageLike} from "../entities/CatImageLike";
import {User} from "../entities/User";

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    exports: [TypeOrmModule],
    controllers: [UserController],
    providers: [UserService]
})
export class UserModule {}
