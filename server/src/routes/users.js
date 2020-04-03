import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Got a GET request at /users');
});

export default router;
