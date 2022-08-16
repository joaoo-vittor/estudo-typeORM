import "reflect-metadata"
import { DataSource } from "typeorm"
import { Users } from "../entity/user"
import { Products } from "../entity/product"

const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5433,
    username: "postgres",
    password: "mysecretpassword",
    database: "postgres",
    synchronize: true,
    logging: false,
    entities: [
       Users, Products
    ],
    migrations: [
        'src/infra/database/migration/*.ts',
    ],
})

AppDataSource.initialize()
    .then(() => console.log('Connected database'))
    .catch(() => console.log('Not connected database'))


export default AppDataSource;
