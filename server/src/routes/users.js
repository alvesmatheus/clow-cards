import express from 'express';

import verifyToken from '../middlewares/verifyToken';
import verifyUser from '../middlewares/verifyUser';

import * as controller from '../controllers/users';

const router = express.Router();

router.post('/signin', controller.signInUser);
router.post('/register', controller.createUser);

router.get('/:user', verifyToken, verifyUser, controller.getUser);
router.patch('/:user', verifyToken, verifyUser, controller.updateUser);
router.delete('/:user', verifyToken, verifyUser, controller.deleteUser);

export default router;
