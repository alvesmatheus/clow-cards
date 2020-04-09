import * as services from '../services/cards';

export const createCard = async (req, res) => {
    const { name, sign, origin, meaning } = req.body;
    const newCard = await services.createCard(name, sign, origin, meaning);

    return res.status('201').json(newCard);
};

export const deleteCard = async (req, res) => {
    const cardID = req.params.id;
    const deletedCard = await services.deleteCard(cardID);
    return res.status('200').json(deletedCard);
};

export const getCard = async (req, res) => {
    const cardID = req.params.id;
    const card = await services.getCard(cardID);
    return res.status('200').json(card);
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

    const cardsList = await services.getCardsList(query);

    return res.status('200').json(cardsList);
};

export const updateCard = async (req, res) => {
    const { name, sign, origin, meaning } = req.body;
    const cardID = req.params.id;

    const updatedCard = await services.updateCard(
        cardID,
        name,
        sign,
        origin,
        meaning
    );

    return res.status('200').json(updatedCard);
};