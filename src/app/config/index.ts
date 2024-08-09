import dotenv from "dotenv"
import path from "path"
dotenv.config({path:path.join(process.cwd(),".env")})
export default {
    port:process.env.PORT,
    database_url:process.env.DATABASE_URL,
    salt_round:process.env.SALT_ROUND,
    default_password:process.env.DEFAULT_PASSWORD,
    NODE_ENV:process.env.NODE_ENV,
    JWT_SECREATE:process.env.jWT_SECREAT,
    jwt_refresh_screate:process.env.JWT_REFRESH_SCREAT,
    jwt_refresh_expire_in:process.env.JWT_ACCESS_EXPIRE_IN,
    jwt_access_expire_in:process.env.JWT_REFRESH_EXPIRE_IN,
}