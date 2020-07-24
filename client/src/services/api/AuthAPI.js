import axios from 'axios';

import config from '../../config';

const authAPI = axios.create({
    baseURL: `${config.api.baseURL}/users`,
    headers: { 'Content-Type': 'application/json' },
    timeout: 3000,
});

export const getUser = (userId, token) => {
    return authAPI
        .get(`/${userId}`, { headers: { Authorization: token } })
        .then((response) => response.data)
        .catch((error) => error.response.data);
};

export const register = (registerInfo) => {
    return authAPI
        .post('/register', registerInfo)
        .then((response) => response.data)
        .catch((error) => error.response.data);
};

export const signIn = (signInInfo) => {
    return authAPI
        .post('/signin', signInInfo)
        .then((response) => response.data)
        .catch((error) => error.response.data);
};
