import cookieParser from 'cookie-parser';
import express from 'express';
import logger from 'morgan';
import path from 'path';

import routers from './routes';

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use(cookieParser());
app.use(logger('dev'));

app.use('/cards', routers.cardsRouter);
app.use('/readings', routers.readingsRouter);
app.use('/users', routers.usersRouter);

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});

export default app;
