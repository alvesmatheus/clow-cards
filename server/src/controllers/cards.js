import { OK, CREATED } from 'http-status-codes';

import * as service from '../services/cards';

export const getCollectionInfo = (req, res) => {
    const filters = {
        name: new RegExp(req.query.name || '.+', 'i'),
        sign: new RegExp(req.query.sign || '.+', 'i'),
        origin: new RegExp(req.query.origin || '.+', 'i'),
    };

    return service
        .getCollectionInfo(filters)
        .then((totalCards) => res.status(OK).json(totalCards))
        .catch((error) =>
            res.status(error.status).json({ error: error.message })
        );
};

export const createCard = (req, res) => {
    const { name, sign, origin, image, meaning } = req.body;
    const cardInfo = { name, sign, origin, image, meaning };

    return service
        .createCard(cardInfo)
        .then((newCard) => res.status(CREATED).json(newCard))
        .catch((error) =>
            res.status(error.status).json({ error: error.message })
        );
};

export const deleteCard = (req, res) => {
    const cardId = req.params.id;

    return service
        .deleteCard(cardId)
        .then((deletedCard) => res.status(OK).json(deletedCard))
        .catch((error) =>
            res.status(error.status).json({ error: error.message })
        );
};

export const getCard = (req, res) => {
    const cardId = req.params.id;

    return service
        .getCard(cardId)
        .then((card) => res.status(OK).json(card))
        .catch((error) =>
            res.status(error.status).json({ error: error.message })
        );
};

export const getCardsList = (req, res) => {
    const query = {
        filters: {
            name: new RegExp(req.query.name || '.+', 'i'),
            sign: new RegExp(req.query.sign || '.+', 'i'),
            origin: new RegExp(req.query.origin || '.+', 'i'),
        },
        sorting: {},
        skip: parseInt(req.query.offset, 10) || 0,
        limit: parseInt(req.query.limit, 10) || 20,
    };

    const order = req.query.order || 'asc';
    const orderBy = req.query.orderBy || 'name';
    query.sorting[orderBy] = order;

    return service
        .getCardsList(query)
        .then((cardsList) => res.status(OK).json(cardsList))
        .catch((error) =>
            res.status(error.status).json({ error: error.message })
        );
};

export const getDailyCard = (req, res) => {
    return service
        .getDailyCard()
        .then((dailyCard) => res.status(OK).json(dailyCard))
        .catch((error) =>
            res.status(error.status).json({ error: error.message })
        );
};

export const updateCard = (req, res) => {
    const cardId = req.params.id;
    const { name, sign, origin, image, meaning } = req.body;
    const cardInfo = { name, sign, origin, image, meaning };

    return service
        .updateCard(cardId, cardInfo)
        .then((updatedCard) => res.status(OK).json(updatedCard))
        .catch((error) =>
            res.status(error.status).json({ error: error.message })
        );
};
