import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../..', '.env') });

const config = {
    mongoDB: {
        DATABASE_URI: process.env.DATABASE_URI,
    },

    server: {
        baseURI: process.env.SERVER_BASE_URI || 'http://localhost',
        port: process.env.SERVER_PORT || 3001,
    },
};

export default config;
