import express from 'express';

import { getCard, getCardsList } from '../controllers/cards';

const router = express.Router();

router.get('/:id(\\d+)', getCard);
router.get('/', getCardsList);

export default router;
