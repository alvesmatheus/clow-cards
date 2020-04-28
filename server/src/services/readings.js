import Reading from '../models/Reading';

export const countReadings = async () => {
    const totalReadings = await Reading.countDocuments();
    return { count: totalReadings };
};

export const createReading = async (method, date, cards, comments) => {
    const newReading = await Reading.create({ method, date, cards, comments });

    return newReading;
};

export const deleteReading = async (readingID) => {
    const deletedReading = await Reading.findByIdAndDelete(readingID);
    return deletedReading;
};

export const getReading = async (readingID) => {
    const reading = await Reading.findById(readingID);
    return reading;
};

export const getReadingsList = async (query) => {
    const readings = await Reading.find(query.filters)
        .sort(query.sorting)
        .skip(query.skip)
        .limit(query.limit);

    return readings;
};

export const updateReading = async (
    readingID,
    method,
    date,
    cards,
    comments
) => {
    const updatedReading = await Reading.findByIdAndUpdate(readingID, {
        method,
        date,
        cards,
        comments,
    });

    return updatedReading;
};
