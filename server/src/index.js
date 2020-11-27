import cookieParser from 'cookie-parser';
import cors from 'cors';
import express from 'express';
import logger from 'morgan';
import mongoose from 'mongoose';
import path from 'path';

import config from './config';
import seedDatabase from './seed';
import { cardsRouter, readingsRouter, usersRouter } from './routes';

const app = express();
const { databaseURI } = config.mongoDB;
const { port } = config.server;

mongoose.connect(databaseURI, {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', (error) => console.log(error));
db.once('open', () => {
    console.log('Successfully connected to database!');
    seedDatabase();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, '../public')));

app.use(cors());
app.use(cookieParser());
app.use(logger('dev'));

app.use('/cards', cardsRouter);
app.use('/readings', readingsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});

export default app;
