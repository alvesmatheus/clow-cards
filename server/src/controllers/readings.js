import fs from 'fs';
import _ from 'lodash';

import { applyPagination, equalsIgnoreCase } from '../utils';

const rawData = fs.readFileSync('./src/data/readings.json');
const readings = JSON.parse(rawData);

export const createReading = (req, res) => {
    req.body.id = readings.length + 1;
    readings.push(req.body);

    return res.status('201').json(req.body);
};

export const deleteReading = (req, res) => {
    const deletedReading = readings.splice(req.params.id - 1, 1);

    return res.status('200').json(deletedReading);
};

export const getReading = (req, res) => {
    res.status('200').json(
        _.filter(readings, { id: parseInt(req.params.id, 10) })
    );
};

export const getReadingsList = (req, res) => {
    const query = {
        filter: {
            type: req.query.type,
            dateFrom: req.query.from,
            dateTo: req.query.to,
        },
        page: {
            offset: req.query.offset,
            limit: req.query.limit,
        },
    };

    let readingsList = readings;

    if (query.filter.type) {
        readingsList = readingsList.filter((reading) =>
            equalsIgnoreCase(reading.type, query.filter.type)
        );
    }

    if (query.filter.dateFrom && query.filter.dateTo) {
        const dateFrom = new Date(query.filter.dateFrom);
        const dateTo = new Date(query.filter.dateTo);

        readingsList = readingsList.filter(
            (reading) =>
                new Date(reading.date) >= dateFrom &&
                new Date(reading.date) <= dateTo
        );
    }

    readingsList = _.orderBy(readingsList, ['date', 'id'], ['desc', 'desc']);
    readingsList = applyPagination(
        readingsList,
        query.page.offset,
        query.page.limit
    );

    return res.status('200').json(readingsList);
};

export const updateReading = (req, res) => {
    req.body.id = req.params.id;
    readings.splice(req.params.id - 1, 1, req.body);

    return res.status('200').json(req.body);
};
