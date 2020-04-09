import Card from '../models/Card';

export const createCard = async (name, sign, origin, meaning) => {
    const newCard = await Card.create({
        name,
        sign,
        origin,
        meaning,
    });

    return newCard;
};

export const deleteCard = async (cardID) => {
    const deletedCard = await Card.findByIdAndDelete(cardID);
    return deletedCard;
};

export const getCard = async (cardID) => {
    const card = await Card.findById(cardID);
    return card;
};

export const getCardsList = async (query) => {
    const cards = await Card.find(query.filters)
        .sort(query.sorting)
        .skip(query.skip)
        .limit(query.limit);

    return cards;
};

export const updateCard = async (cardID, name, sign, origin, meaning) => {
    const updatedCard = await Card.findByIdAndUpdate(cardID, {
        name,
        sign,
        origin,
        meaning,
    });

    return updatedCard;
};