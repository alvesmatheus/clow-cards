import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import mongoose from 'mongoose';
import path from 'path';

import config from './config';
import { cardsRouter, readingsRouter } from './routes';

const app = express();
const { port } = config.server;

mongoose.connect(config.mongoDB.DATABASE_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.once('open', () => console.log('Successfully connected to database!'));
db.on('error', (error) => console.log(error));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, '../public')));

app.use(cors());
app.use(cookieParser());
app.use(logger('dev'));

app.use('/cards', cardsRouter);
app.use('/readings', readingsRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});

export default app;
