import * as service from '../services/users';

export const createUser = async (req, res) => {
    const { fname, sname, email, password, pswdCheck } = req.body;
    const userInfo = { fname, sname, email, password, pswdCheck };

    try {
        const newUser = await service.createUser(userInfo);
        return res.status('201').json(newUser);
    } catch (error) {
        return res.status('400').json({ error: error.message });
    }
};

export const deleteUser = async (req, res) => {
    const userID = req.params.id;

    try {
        const deletedUser = await service.deleteUser(userID);
        return res.status('200').json(deletedUser);
    } catch (error) {
        return res.status('400').json({ error: error.message });
    }
};

export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    const userInfo = { email, password };

    try {
        const user = await service.loginUser(userInfo);
        return res.status('200').json(user);
    } catch (error) {
        return res.status('400').json({ error: error.message });
    }
};

export const updateUser = async (req, res) => {
    const userID = req.body.id;
    const { fname, sname, email, password, readings } = req.body;
    const userInfo = { fname, sname, email, password, readings };

    try {
        const updatedUser = await service.updateUser(userID, userInfo);
        return res.status('200').json(updatedUser);
    } catch (error) {
        return res.status('400').json({ error: error.message });
    }
};
