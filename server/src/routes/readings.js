import express from 'express';

import * as controller from '../controllers/readings';

const router = express.Router();

router.get('/count', controller.countReadings);
router.get('/:id', controller.getReading);
router.get('/', controller.getReadingsList);

router.post('/', controller.createReading);
router.put('/:id', controller.updateReading);
router.delete('/:id', controller.deleteReading);

export default router;
