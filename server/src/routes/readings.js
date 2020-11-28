import express from 'express';

import verifyToken from '../middlewares/verifyToken';

import * as controller from '../controllers/readings';

const router = express.Router();

router.get('/info', verifyToken, controller.getCollectionInfo);
router.get('/:id', verifyToken, controller.getReading);
router.get('/', verifyToken, controller.getReadingsList);
router.post('/', verifyToken, controller.createReading);
router.patch('/:id', verifyToken, controller.updateReading);
router.delete('/:id', verifyToken, controller.deleteReading);

export default router;
