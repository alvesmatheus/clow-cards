import * as service from '../services/cards';

export const countCards = async (req, res) => {
    const filters = {
        name: new RegExp(req.query.name || '.+', 'i'),
        sign: new RegExp(req.query.sign || '.+', 'i'),
        origin: new RegExp(req.query.origin || '.+', 'i'),
    };

    try {
        const totalCards = await service.countCards(filters);
        return res.status('200').json(totalCards);
    } catch (error) {
        return res.status('400').json({ error: error.message });
    }
};

export const createCard = async (req, res) => {
    const { name, sign, origin, image, meaning } = req.body;
    const cardInfo = { name, sign, origin, image, meaning };

    try {
        const newCard = await service.createCard(cardInfo);
        return res.status('201').json(newCard);
    } catch (error) {
        return res.status('400').json({ error: error.message });
    }
};

export const deleteCard = async (req, res) => {
    const cardID = req.params.id;

    try {
        const deletedCard = await service.deleteCard(cardID);
        return res.status('200').json(deletedCard);
    } catch (error) {
        return res.status('400').json({ error: error.message });
    }
};

export const getCard = async (req, res) => {
    const cardID = req.params.id;

    try {
        const card = await service.getCard(cardID);
        return res.status('200').json(card);
    } catch (error) {
        return res.status('400').json({ error: error.message });
    }
};

export const getCardsList = async (req, res) => {
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

    try {
        const cardsList = await service.getCardsList(query);
        return res.status('200').json(cardsList);
    } catch (error) {
        return res.status('400').json({ error: error.message });
    }
};

export const updateCard = async (req, res) => {
    const cardID = req.params.id;
    const { name, sign, origin, image, meaning } = req.body;
    const cardInfo = { name, sign, origin, image, meaning };

    try {
        const updatedCard = await service.updateCard(cardID, cardInfo);
        return res.status('200').json(updatedCard);
    } catch (error) {
        return res.status('400').json({ error: error.message });
    }
};
