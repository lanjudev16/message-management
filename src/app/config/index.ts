import dotenv from "dotenv"
import path from "path"
dotenv.config({path:path.join(process.cwd(),".env")})
export default {
    port:process.env.PORT,
    database_url:process.env.DATABASE_URL,
    salt_round:process.env.SALT_ROUND,
    default_password:process.env.DEFAULT_PASSWORD,
    NODE_ENV:process.env.NODE_ENV
}