import { INTERNAL_SERVER_ERROR } from 'http-status-codes';
import createError from 'http-errors';
import mongoose from 'mongoose';
import _ from 'lodash';

import Reading from '../models/Reading';
import Card from '../models/Card';

import { validators, validate } from '../utils/validation';

const newReading = async () => {
    const allCards = await Card.find();
    const cards = _.sampleSize(allCards, 9);

    return cards.map((card) => new mongoose.Types.ObjectId(card._id));
};

export const getCollectionInfo = async (filters) => {
    try {
        const totalReadings = await Reading.countDocuments({ ...filters });
        return { totalDocuments: totalReadings };
    } catch (error) {
        throw createError(INTERNAL_SERVER_ERROR, error.message);
    }
};

export const createReading = async (userId) => {
    try {
        const user = await validate(userId, validators.check.ID);
        const cards = await newReading();

        return Reading.create({
            user: new mongoose.Types.ObjectId(user),
            date: new Date(),
            cards,
        }).then((reading) => reading.populate('cards').execPopulate());
    } catch (error) {
        throw createError(error.status || INTERNAL_SERVER_ERROR, error.message);
    }
};

export const deleteReading = async (readingId, userId) => {
    try {
        const reading = await validate(readingId, validators.check.ID);
        const user = await validate(userId, validators.check.ID);
        return Reading.findOneAndDelete({ _id: reading, user }).populate(
            'cards'
        );
    } catch (error) {
        throw createError(error.status || INTERNAL_SERVER_ERROR, error.message);
    }
};

export const getReading = async (readingId, userId) => {
    try {
        const reading = await validate(readingId, validators.check.ID);
        const user = await validate(userId, validators.check.ID);
        return Reading.findOne({ _id: reading, user }).populate('cards');
    } catch (error) {
        throw createError(error.status || INTERNAL_SERVER_ERROR, error.message);
    }
};

export const getReadingsList = async (query) => {
    try {
        return await Reading.find(query.filters)
            .populate('cards')
            .sort(query.sorting)
            .skip(query.skip)
            .limit(query.limit);
    } catch (error) {
        throw createError(INTERNAL_SERVER_ERROR, error.message);
    }
};

export const updateReading = async (readingId, userId, readingInfo) => {
    try {
        const reading = await validate(readingId, validators.check.ID);
        const user = await validate(userId, validators.check.ID);
        const info = await validate(readingInfo, validators.update.READING);

        const originalReading = await Reading.findOne({ _id: reading, user });
        return await Reading.findByIdAndUpdate(
            reading,
            { ...originalReading.doc, comments: info.comments },
            {
                new: true,
            }
        ).populate('cards');
    } catch (error) {
        throw createError(error.status || INTERNAL_SERVER_ERROR, error.message);
    }
};
