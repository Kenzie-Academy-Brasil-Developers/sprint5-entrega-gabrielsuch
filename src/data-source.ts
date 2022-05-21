import { DataSource } from "typeorm";

import {User} from "./entities/user/user.entity"

import dotenv from "dotenv"

dotenv.config()


export const AppDataSource = new DataSource ({
    type: "postgres",
    host: "localhost",
    port: 5432,

    username: String(process.env.USERNAME),
    password: String(process.env.PASSWORD),
    database: String(process.env.DATABASE),

    synchronize: false,
    logging: true,
    entities: [User],
    migrations: ["src/migrations/*.ts"]
})

AppDataSource.initialize()
.then(() => console.log("DataSource initialized"))
.catch((err) => console.error("Error during DataSource initialization", err))