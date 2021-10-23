import dotenv from 'dotenv'
import { Sequelize } from 'sequelize'

dotenv.config()

const sequelize = new Sequelize(
    String(process.env.DB_NAME),
    String(process.env.DB_USERNAME),
    String(process.env.DB_PASS),
    {
        host: process.env.DB_HOST,
        dialect: 'mysql',
        port: Number(process.env.DB_PORT),
    }
)
export default sequelize