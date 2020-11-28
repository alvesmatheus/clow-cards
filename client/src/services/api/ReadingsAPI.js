import axios from 'axios';

import config from '../../config';

import { getData } from '../../utils/localStorage';

const readingsAPI = axios.create({
    baseURL: `${config.api.baseURL}/readings`,
    headers: { 'Content-Type': 'application/json' },
    timeout: 3000,
});

export const createNewReading = () => {
    const userToken = getData('token');

    return readingsAPI
        .post(
            '',
            {},
            {
                headers: { Authorization: userToken },
            }
        )
        .then((response) => response.data)
        .catch((error) => error.response.data);
};

export const editReading = (readingId, comments) => {
    const userToken = getData('token');

    return readingsAPI
        .patch(
            `/${readingId}`,
            { comments },
            {
                headers: { Authorization: userToken },
            }
        )
        .then((response) => response.data)
        .catch((error) => error.response.data);
};

export const getReadings = (sorting, displayedReadings) => {
    const userToken = getData('token');

    return readingsAPI
        .get('', {
            headers: { Authorization: userToken },
            params: {
                ...sorting,
                limit: displayedReadings,
            },
        })
        .then((response) => response.data)
        .catch((error) => error.response.data);
};

export const getReadingById = (readingId) => {
    const userToken = getData('token');

    return (
        readingsAPI.get(`/${readingId}`),
        {
            headers: { Authorization: userToken },
        }
            .then((response) => response.data)
            .catch((error) => error.response.data)
    );
};

export const getTotalReadings = () => {
    const userToken = getData('token');

    return readingsAPI
        .get('/info', {
            headers: { Authorization: userToken },
        })
        .then((response) => response.data.totalDocuments)
        .catch((error) => error.response.data);
};
