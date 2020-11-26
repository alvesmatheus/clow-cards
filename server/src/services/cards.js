import { INTERNAL_SERVER_ERROR } from 'http-status-codes';
import createError from 'http-errors';

import Card from '../models/Card';

import { validators, validate } from '../utils/validation';

export const getCollectionInfo = async (filters) => {
    try {
        const totalCards = await Card.countDocuments(filters);
        return { totalDocuments: totalCards };
    } catch (error) {
        throw createError(INTERNAL_SERVER_ERROR, error.message);
    }
};

export const createCard = async (cardInfo) => {
    try {
        const card = await validate(cardInfo, validators.create.CARD);
        return Card.create({ ...card });
    } catch (error) {
        throw createError(error.status || INTERNAL_SERVER_ERROR, error.message);
    }
};

export const deleteCard = async (cardId) => {
    try {
        const id = await validate(cardId, validators.check.ID);
        return Card.findByIdAndDelete(id);
    } catch (error) {
        throw createError(error.status || INTERNAL_SERVER_ERROR, error.message);
    }
};

export const getCard = async (cardId) => {
    try {
        const id = await validate(cardId, validators.check.ID);
        return Card.findById(id);
    } catch (error) {
        throw createError(error.status || INTERNAL_SERVER_ERROR, error.message);
    }
};

export const getCardsList = (query) => {
    try {
        return Card.find(query.filters)
            .sort(query.sorting)
            .skip(query.skip)
            .limit(query.limit);
    } catch (error) {
        throw createError(INTERNAL_SERVER_ERROR, error.message);
    }
};

export const updateCard = async (cardId, cardInfo) => {
    try {
        const id = await validate(cardId, validators.check.ID);
        const card = await validate(cardInfo, validators.update.CARD);
        return Card.findByIdAndUpdate(id, card, { new: true });
    } catch (error) {
        throw createError(error.status || INTERNAL_SERVER_ERROR, error.message);
    }
};
