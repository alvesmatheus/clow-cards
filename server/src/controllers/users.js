import { OK, CREATED } from 'http-status-codes';

import * as service from '../services/users';

export const createUser = (req, res) => {
    const { fname, sname, email, password, pswdCheck } = req.body;
    const userInfo = { fname, sname, email, password, pswdCheck };

    return service
        .createUser(userInfo)
        .then((newUser) => res.status(CREATED).json(newUser))
        .catch((error) =>
            res.status(error.status).json({ error: error.message })
        );
};

export const deleteUser = (req, res) => {
    const userId = req.params.user;

    return service
        .deleteUser(userId)
        .then((deletedUser) => res.status(OK).json(deletedUser))
        .catch((error) =>
            res.status(error.status).json({ error: error.message })
        );
};

export const getUser = (req, res) => {
    const userId = req.params.user;

    return service
        .getUser(userId)
        .then((user) => res.status(OK).json(user))
        .catch((error) =>
            res.status(error.status).json({ error: error.message })
        );
};

export const signInUser = (req, res) => {
    const { email, password } = req.body;
    const userInfo = { email, password };

    return service
        .signInUser(userInfo)
        .then((userAuth) => res.status(OK).json(userAuth))
        .catch((error) =>
            res.status(error.status).json({ error: error.message })
        );
};

export const updateUser = (req, res) => {
    const userId = req.params.user;
    const { fname, sname, email } = req.body;
    const userInfo = { fname, sname, email };

    return service
        .updateUser(userId, userInfo)
        .then((updatedUser) => res.status(OK).json(updatedUser))
        .catch((error) =>
            res.status(error.status).json({ error: error.message })
        );
};
