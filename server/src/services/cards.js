import Card from '../models/Card';

import { checkMissingKeys, checkUndefinedValue } from '../utils';

export const countCards = async (filters) => {
    try {
        const totalCards = await Card.countDocuments(filters);
        return { count: totalCards };
    } catch (error) {
        throw new Error(error.message);
    }
};

export const createCard = async (cardInfo) => {
    const expectedKeys = ['name', 'sign', 'origin'];
    const missingKeys = checkMissingKeys(cardInfo, expectedKeys);
    if (missingKeys) {
        throw new Error(missingKeys);
    }

    try {
        const newCard = await Card.create({ ...cardInfo });
        return newCard;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteCard = async (cardID) => {
    const missingValue = checkUndefinedValue(cardID, 'Card ID');
    if (missingValue) {
        throw new Error(missingValue);
    }

    try {
        const deletedCard = await Card.findByIdAndDelete(cardID);
        return deletedCard;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getCard = async (cardID) => {
    const missingValue = checkUndefinedValue(cardID, 'Card ID');
    if (missingValue) {
        throw new Error(missingValue);
    }

    try {
        const card = await Card.findById(cardID);
        return card;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getCardsList = async (query) => {
    try {
        const cards = await Card.find(query.filters)
            .sort(query.sorting)
            .skip(query.skip)
            .limit(query.limit);

        return cards;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const updateCard = async (cardID, cardInfo) => {
    const expectedKeys = ['name', 'sign', 'origin', 'image', 'meaning'];
    const missingKeys = checkMissingKeys(cardInfo, expectedKeys);
    if (missingKeys) {
        throw new Error(missingKeys);
    }

    try {
        const updatedCard = await Card.findByIdAndUpdate(cardID, cardInfo, {
            new: true,
        });

        return updatedCard;
    } catch (error) {
        throw new Error(error.message);
    }
};
