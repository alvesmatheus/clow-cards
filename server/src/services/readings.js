import mongoose from 'mongoose';

import Reading from '../models/Reading';

import { checkMissingKeys, checkUndefinedValue } from '../utils';

export const countReadings = async (filters) => {
    try {
        const totalReadings = await Reading.countDocuments(filters);
        return { count: totalReadings };
    } catch (error) {
        throw new Error(error.message);
    }
};

export const createReading = async (readingInfo) => {
    const expectedKeys = ['date', 'cards'];
    const missingKeys = checkMissingKeys(readingInfo, expectedKeys);
    if (missingKeys) {
        throw new Error(missingKeys);
    }

    try {
        const cardsIDs = readingInfo.cards.map(
            (card) => new mongoose.Types.ObjectId(card)
        );

        const newReading = await Reading.create({
            ...readingInfo,
            cards: cardsIDs,
        });

        return newReading;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteReading = async (readingID) => {
    const missingValue = checkUndefinedValue(readingID, 'Reading ID');
    if (missingValue) {
        throw new Error(missingValue);
    }

    try {
        const deletedReading = await Reading.findByIdAndDelete(readingID);
        return deletedReading;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getReading = async (readingID) => {
    const missingValue = checkUndefinedValue(readingID, 'Reading ID');
    if (missingValue) {
        throw new Error(missingValue);
    }

    try {
        const reading = await Reading.findById(readingID);
        return reading;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getReadingsList = async (query) => {
    try {
        const readings = await Reading.find(query.filters)
            .sort(query.sorting)
            .skip(query.skip)
            .limit(query.limit);

        return readings;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const updateReading = async (readingID, readingInfo) => {
    const expectedKeys = ['method', 'date', 'cards', 'comments'];
    const missingKeys = checkMissingKeys(readingInfo, expectedKeys);
    if (missingKeys) {
        throw new Error(missingKeys);
    }

    try {
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
    } catch (error) {
        throw new Error(error.message);
    }
};
