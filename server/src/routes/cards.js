import express from 'express';

import * as controller from '../controllers/cards';

const router = express.Router();

router.get('/info', controller.getCollectionInfo);
router.get('/daily', controller.getDailyCard);
router.get('/:id', controller.getCard);
router.get('/', controller.getCardsList);
router.post('/', controller.createCard);
router.put('/:id', controller.updateCard);
router.delete('/:id', controller.deleteCard);

export default router;
