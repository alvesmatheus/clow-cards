import express from 'express';

import verifyToken from '../middlewares/verifyToken';
import verifyUser from '../middlewares/verifyUser';

import * as controller from '../controllers/users';

const router = express.Router();

router.post('/login', controller.loginUser);
router.post('/signup', controller.createUser);

router.delete('/:id', verifyToken, verifyUser, controller.deleteUser);
router.put('/:id', verifyToken, verifyUser, controller.updateUser);

export default router;
