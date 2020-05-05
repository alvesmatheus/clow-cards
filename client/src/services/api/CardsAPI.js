import axios from 'axios';

import config from '../../config';

const cardsAPI = axios.create({
    baseURL: `${config.api.baseURL}/cards`,
    headers: { 'Content-Type': 'application/json' },
    timeout: 3000,
});

const evaluateOffset = (pagination) => {
    return pagination.page * pagination.perPage;
};

export const getCards = (filters, sorting, pagination) => {
    return cardsAPI
        .get('', {
            params: {
                ...filters,
                ...sorting,
                offset: evaluateOffset(pagination),
                limit: pagination.perPage,
            },
        })
        .then((response) => response.data)
        .catch((error) => console.error(error));
};

export const getCardByID = (cardID) => {
    return cardsAPI
        .get(`/${cardID}`)
        .then((response) => response.data)
        .catch((error) => console.error(error));
};

export const getCardImageURL = (cardURI) => {
    return `${config.api.staticFilesURL}/${cardURI}`;
};

export const getTotalCards = () => {
    return cardsAPI
        .get('/count')
        .then((response) => response.data.count)
        .catch((error) => console.error(error));
};
