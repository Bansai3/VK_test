import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatController } from './cat/cat.controller';
import { CatService } from './cat/cat.service';
import { CatModule } from './cat/cat.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import {TypeOrmModule} from "@nestjs/typeorm";
import {AppDataSource} from "./data-source";

@Module({
  imports: [CatModule, UserModule, TypeOrmModule.forRoot(AppDataSource.options)],
  controllers: [AppController, CatController, UserController],
  providers: [AppService, CatService, UserService],
})
export class AppModule {}
