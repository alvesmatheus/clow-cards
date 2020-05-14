import mongoose from 'mongoose';

import Reading from '../models/Reading';

import { verifyRequestData } from '../utils/validation';

export const countReadings = async (filters) => {
    try {
        const totalReadings = await Reading.countDocuments(filters);
        return { count: totalReadings };
    } catch (error) {
        throw new Error(error.message);
    }
};

export const createReading = async (readingInfo) => {
    const expectedProps = ['date', 'cards'];
    const errorMsg = verifyRequestData(readingInfo, expectedProps);
    if (errorMsg) throw new Error(errorMsg);

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
    const expectedProps = ['id'];
    const errorMsg = verifyRequestData({ id: readingID }, expectedProps);
    if (errorMsg) throw new Error(errorMsg);

    try {
        const deletedReading = await Reading.findByIdAndDelete(readingID);
        return deletedReading;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getReading = async (readingID) => {
    const expectedProps = ['id'];
    const errorMsg = verifyRequestData({ id: readingID }, expectedProps);
    if (errorMsg) throw new Error(errorMsg);

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
    const expectedProps = ['id', 'method', 'date', 'cards', 'comments'];
    const errorMsg = verifyRequestData(
        { id: readingID, ...readingInfo },
        expectedProps
    );
    if (errorMsg) throw new Error(errorMsg);

    try {
        const cardIDs = readingInfo.cards.map(
            (card) => new mongoose.Types.ObjectId(card)
        );

        const updatedReading = await Reading.findByIdAndUpdate(
            readingID,
            { ...readingInfo, cards: cardIDs },
            {
                new: true,
            }
        );

        return updatedReading;
    } catch (error) {
        throw new Error(error.message);
    }
};
