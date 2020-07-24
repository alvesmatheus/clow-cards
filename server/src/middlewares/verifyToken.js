import { BAD_REQUEST } from 'http-status-codes';
import jwt from 'jsonwebtoken';

import config from '../config';

const { secret } = config.jwt;

const verifyToken = (req, res, next) => {
    try {
        const decodedData = jwt.verify(req.header('Authorization'), secret);
        req.body.user = decodedData.user;
        return next();
    } catch (error) {
        return res
            .status(BAD_REQUEST)
            .json({ error: 'Invalid token provided.' });
    }
};

export default verifyToken;
