import {Body, Controller, Post} from '@nestjs/common';
import {UserDto} from "./Dto/UserDto";
import {UserService} from "./user.service";

@Controller('user')
export class UserController {

    constructor(private readonly userService: UserService) {}

    @Post()
    async addUser(@Body() dto: UserDto) {
        return await this.userService.addUser(dto);
    }
}
