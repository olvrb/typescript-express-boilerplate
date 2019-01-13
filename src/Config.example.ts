import { ConnectionOptions } from "typeorm";
export class Configuration {
    public static Web = {
        Port: 3224 || process.env.PORT
    };
    public static Database: ConnectionOptions = {
        type: "postgres",
        host: "localhost",
        port: 5432,
        database: "placeholder",
        synchronize: true,
        username: "postgres",
        password: "123"
    };
}
