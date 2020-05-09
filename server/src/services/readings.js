import mongoose from 'mongoose';

import Reading from '../models/Reading';

export const countReadings = async (filters) => {
    const totalReadings = await Reading.countDocuments(filters);
    return { count: totalReadings };
};

export const createReading = async (readingInfo) => {
    const cardsIDs = readingInfo.cards.map(
        (card) => new mongoose.Types.ObjectId(card)
    );

    const newReading = await Reading.create({
        ...readingInfo,
        cards: cardsIDs,
    });

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

export const updateReading = async (readingID, readingInfo) => {
    const cardsIDs = readingInfo.cards.map(
        (card) => new mongoose.Types.ObjectId(card)
    );

    const updatedReading = await Reading.findByIdAndUpdate(
        readingID,
        { ...readingInfo, cards: cardsIDs },
        {
            new: true,
        }
    );

    return updatedReading;
};
