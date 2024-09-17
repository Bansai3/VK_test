import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import "reflect-metadata"
import {AppDataSource} from "./data-source";
import * as dotenv from 'dotenv';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  AppDataSource.initialize()
      .then(() => {
      })
      .catch((error) => console.log(error))
    dotenv.config();
  await app.listen(3000);
}
bootstrap();
