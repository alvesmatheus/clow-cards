import express from 'express';

import verifyToken from '../middlewares/verifyToken';
import verifyUser from '../middlewares/verifyUser';

import * as controller from '../controllers/users';

const router = express.Router();

router.post('/signin', controller.signInUser);
router.post('/register', controller.registerUser);

router.delete('/:id', verifyToken, verifyUser, controller.deleteUser);
router.put('/:id', verifyToken, verifyUser, controller.updateUser);

export default router;
