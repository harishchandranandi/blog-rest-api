import dotenv from 'dotenv';
dotenv.config();

export const {
    APP_PORT,
    DEBUG_MODE,
    APP_HOST,
    APP_URL,
    DB_NAME,
    DB_USERNAME,
    DB_PASSWORD,
    JWT_SECRET,
} = process.env;