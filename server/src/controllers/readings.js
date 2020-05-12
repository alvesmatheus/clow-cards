import * as service from '../services/readings';

export const countReadings = async (req, res) => {
    const filters = {
        method: req.query.method,
        date: {
            $gte: req.query.from,
            $lte: req.query.to,
        },
    };

    try {
        const totalReadings = await service.countReadings(filters);
        return res.status('200').json(totalReadings);
    } catch (error) {
        return res.status('400').json({ error: error.message });
    }
};

export const createReading = async (req, res) => {
    const { method, date, cards, comments } = req.body;
    const readingInfo = { method, date, cards, comments };

    try {
        const newReading = await service.createReading(readingInfo);
        return res.status('201').json(newReading);
    } catch (error) {
        return res.status('400').json({ error: error.message });
    }
};

export const deleteReading = async (req, res) => {
    const readingID = req.params.id;

    try {
        const deletedReading = await service.deleteReading(readingID);
        return res.status('200').json(deletedReading);
    } catch (error) {
        return res.status('400').json({ error: error.message });
    }
};

export const getReading = async (req, res) => {
    const readingID = req.params.id;
    try {
        const reading = await service.getReading(readingID);
        return res.status('200').json(reading);
    } catch (error) {
        return res.status('400').json({ error: error.message });
    }
};

export const getReadingsList = async (req, res) => {
    const query = {
        filters: {
            method: req.query.method,
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

    try {
        const readingsList = await service.getReadingsList(query);
        return res.status('200').json(readingsList);
    } catch (error) {
        return res.status('400').json({ error: error.message });
    }
};

export const updateReading = async (req, res) => {
    const readingID = req.params.id;
    const { method, date, cards, comments } = req.body;
    const readingInfo = { method, date, cards, comments };

    try {
        const updatedReading = await service.updateReading(
            readingID,
            readingInfo
        );
        return res.status('200').json(updatedReading);
    } catch (error) {
        return res.status('400').json({ error: error.message });
    }
};
