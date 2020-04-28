import * as service from '../services/readings';

export const countReadings = async (req, res) => {
    const totalReadings = await service.countReadings();
    return res.status('200').json(totalReadings);
};

export const createReading = async (req, res) => {
    const { method, date, cards, comments } = req.body;
    const newReading = await service.createReading(
        method,
        date,
        cards,
        comments
    );

    return res.status('201').json(newReading);
};

export const deleteReading = async (req, res) => {
    const readingID = req.params.id;
    const deletedReading = await service.deleteReading(readingID);
    return res.status('200').json(deletedReading);
};

export const getReading = async (req, res) => {
    const readingID = req.params.id;
    const reading = await service.getReading(readingID);
    return res.status('200').json(reading);
};

export const getReadingsList = async (req, res) => {
    const query = {
        filters: {
            method: new RegExp(req.query.method || '.+', 'i'),
            date: {
                $gte: req.query.from,
                $lte: req.query.to,
            },
        },
        sorting: {
            data: 'desc',
        },
        skip: parseInt(req.query.offset, 10) || 0,
        limit: parseInt(req.query.limit, 10) || 20,
    };

    if (!query.filters.date.$gte || !query.filters.date.$lte)
        delete query.filters.date;

    const readingsList = await service.getReadingsList(query);
    return res.status('200').json(readingsList);
};

export const updateReading = async (req, res) => {
    const readingID = req.params.id;
    const { method, date, cards, comments } = req.body;
    const updatedReading = await service.updateReading(
        readingID,
        method,
        date,
        cards,
        comments
    );

    return res.status('200').json(updatedReading);
};
