import { Injectable } from '@nestjs/common';
import {InjectRepository} from "@nestjs/typeorm";
import {Repository} from "typeorm";
import {User} from "../entities/User";
import {UserDto} from "./Dto/UserDto";

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
    ) {}

    async addUser(dto: UserDto) {
        if (await this.checkUserExist(dto.login)) {
            throw new Error('Пользователь с логином ' + dto.login + ' ' + 'уже существует!');
        }
        const user = new User();
        user.login = dto.login;
        user.password = dto.password;
        return this.userRepository.create(user);
    }

    async checkUserExist(login: string) {
        const user = this.userRepository.findOneBy({login: login});
        return user != null;
    }
}
