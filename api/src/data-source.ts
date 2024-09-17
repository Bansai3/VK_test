import {Post} from "@nestjs/common";
import {CatImageLike} from "./entities/CatImageLike";
import {DataSource} from "typeorm";
import {User} from "./entities/User";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "rootroot",
    database: "VK_test_db",
    synchronize: true,
    logging: true,
    entities: [CatImageLike, User],
    subscribers: [],
    migrations: [],
})
