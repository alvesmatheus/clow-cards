import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(__dirname, '../..', '.env') });

const config = {
    api: {
        baseURL: process.env.SERVER_BASE_URL || 'http://localhost:3001',
        staticFilesURL:
            process.env.SERVER_STATIC_URL || 'http://localhost:3001/static/',
    },
};

export default config;
