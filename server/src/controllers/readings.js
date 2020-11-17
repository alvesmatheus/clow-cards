import { OK, CREATED } from 'http-status-codes';

import * as service from '../services/readings';

export const countReadings = (req, res) => {
    const { from, to } = req.query;
    const filters = {
        user: req.body.user,
    };

    if (from && to) filters.date = { $gte: new Date(from), $lte: new Date(to) };

    return service
        .countReadings(filters)
        .then((totalReadings) => res.status(OK).json(totalReadings))
        .catch((error) =>
            res.status(error.status).json({ error: error.message })
        );
};

export const createReading = (req, res) => {
    const { user } = req.body;

    return service
        .createReading(user)
        .then((newReading) => res.status(CREATED).json(newReading))
        .catch((error) =>
            res.status(error.status).json({ error: error.message })
        );
};

export const deleteReading = (req, res) => {
    const readingId = req.params.id;
    const userId = req.body.user;

    return service
        .deleteReading(readingId, userId)
        .then((deletedReading) => res.status(OK).json(deletedReading))
        .catch((error) =>
            res.status(error.status).json({ error: error.message })
        );
};

export const getReading = (req, res) => {
    const readingId = req.params.id;
    const userId = req.body.user;

    return service
        .getReading(readingId, userId)
        .then((reading) => res.status(OK).json(reading))
        .catch((error) =>
            res.status(error.status).json({ error: error.message })
        );
};

export const getReadingsList = (req, res) => {
    const { from, to, offset, limit } = req.query;
    const query = {
        filters: {
            user: req.body.user,
        },
        sorting: {
            date: req.query.order || 'desc',
        },
        skip: parseInt(offset, 10) || 0,
        limit: parseInt(limit, 10) || 20,
    };

    if (from && to)
        query.filters.date = { $gte: new Date(from), $lte: new Date(to) };

    return service
        .getReadingsList(query)
        .then((readingsList) => res.status(OK).json(readingsList))
        .catch((error) =>
            res.status(error.status).json({ error: error.message })
        );
};

export const updateReading = (req, res) => {
    const readingId = req.params.id;
    const userId = req.body.user;
    const readingInfo = { comments: req.body.comments };

    return service
        .updateReading(readingId, userId, readingInfo)
        .then((updatedReading) => res.status(OK).json(updatedReading))
        .catch((error) =>
            res.status(error.status).json({ error: error.message })
        );
};
