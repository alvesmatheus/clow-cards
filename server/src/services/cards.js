import Card from '../models/Card';

import { verifyRequestData } from '../utils/validation';

export const countCards = async (filters) => {
    try {
        const totalCards = await Card.countDocuments(filters);
        return { count: totalCards };
    } catch (error) {
        throw new Error(error.message);
    }
};

export const createCard = async (cardInfo) => {
    const expectedProps = ['name', 'sign', 'origin'];
    const errorMsg = verifyRequestData(cardInfo, expectedProps);
    if (errorMsg) throw new Error(errorMsg);

    try {
        const newCard = await Card.create({ ...cardInfo });
        return newCard;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteCard = async (cardID) => {
    const expectedProps = ['id'];
    const errorMsg = verifyRequestData({ id: cardID }, expectedProps);
    if (errorMsg) throw new Error(errorMsg);

    try {
        const deletedCard = await Card.findByIdAndDelete(cardID);
        return deletedCard;
    } catch (error) {
        throw new Error(error.message);
    }
};

export const getCard = async (cardID) => {
    const expectedProps = ['id'];
    const errorMsg = verifyRequestData({ id: cardID }, expectedProps);
    if (errorMsg) throw new Error(errorMsg);

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
    const expectedProps = ['id', 'name', 'sign', 'origin', 'image', 'meaning'];
    const errorMsg = verifyRequestData(
        { id: cardID, ...cardInfo },
        expectedProps
    );
    if (errorMsg) throw new Error(errorMsg);

    try {
        const updatedCard = await Card.findByIdAndUpdate(cardID, cardInfo, {
            new: true,
        });

        return updatedCard;
    } catch (error) {
        throw new Error(error.message);
    }
};
