import express from 'express';

import {
    createReading,
    deleteReading,
    getReading,
    getReadingsList,
    updateReading,
} from '../controllers/readings';

const router = express.Router();

router.get('/:id(\\d+)', getReading);
router.get('/', getReadingsList);

router.post('/', createReading);
router.put('/:id(\\d+)', updateReading);
router.delete('/:id(\\d+)', deleteReading);

export default router;
