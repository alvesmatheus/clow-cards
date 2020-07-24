import jwt from 'jsonwebtoken';

import config from '../config';

const { secret } = config.jwt;

export const createToken = (data) => {
    return jwt.sign(data, secret, { expiresIn: '12h' });
};
