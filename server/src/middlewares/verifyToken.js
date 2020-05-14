import jwt from 'jsonwebtoken';

import config from '../config';

const { secret } = config.jwt;

const verifyToken = (req, res, next) => {
    try {
        const decodedData = jwt.verify(req.body.token, secret);
        req.body.id = decodedData.id;
        return next();
    } catch (error) {
        return res.status('400').json({ error: `Invalid token provided.` });
    }
};

export default verifyToken;
