import Card from '../models/Card';

export const countCards = async (filters) => {
    const totalCards = await Card.countDocuments(filters);
    return { count: totalCards };
};

export const createCard = async (cardInfo) => {
    const newCard = await Card.create({ ...cardInfo });
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

export const updateCard = async (cardID, cardInfo) => {
    const updatedCard = await Card.findByIdAndUpdate(cardID, cardInfo, {
        new: true,
    });

    return updatedCard;
};
