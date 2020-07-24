import { BAD_REQUEST, INTERNAL_SERVER_ERROR } from 'http-status-codes';
import createError from 'http-errors';
import bcrypt from 'bcrypt';
import _ from 'lodash';

import User from '../models/User';

import { validators, validate } from '../utils/validation';
import { createToken } from '../utils/jwt';

export const createUser = async (userInfo) => {
    try {
        const user = await validate(userInfo, validators.create.USER);
        user.password = await bcrypt.hash(user.password, 10);

        const olderUser = await User.findOne({ email: user.email });
        if (olderUser)
            throw createError(
                BAD_REQUEST,
                'This email address is already being used.'
            );

        const newUser = await User.create({ ..._.omit(user, 'pswdCheck') });
        return { userId: newUser._doc._id };
    } catch (error) {
        throw createError(error.status || INTERNAL_SERVER_ERROR, error.message);
    }
};

export const deleteUser = async (userId) => {
    try {
        const id = await validate(userId, validators.check.ID);
        const deletedUser = await User.findByIdAndDelete(id);
        return _.omit(deletedUser.toObject(), 'password');
    } catch (error) {
        throw createError(error.status || INTERNAL_SERVER_ERROR, error.message);
    }
};

export const getUser = async (userId) => {
    try {
        const id = await validate(userId, validators.check.ID);
        const user = await User.findById(id);
        return _.omit(user.toObject(), 'password');
    } catch (error) {
        throw createError(error.status || INTERNAL_SERVER_ERROR, error.message);
    }
};

export const signInUser = async (userInfo) => {
    try {
        const signIn = await validate(userInfo, validators.check.SIGNIN);

        const user = await User.findOne({ email: signIn.email });
        if (!user) throw createError(BAD_REQUEST, 'This user does not exist.');

        const pswdMatch = await bcrypt.compare(signIn.password, user.password);
        if (!pswdMatch) throw createError(BAD_REQUEST, 'Incorrect password.');

        const token = createToken({ user: user._doc._id });
        return { token, userId: user._doc._id };
    } catch (error) {
        throw createError(error.status || INTERNAL_SERVER_ERROR, error.message);
    }
};

export const updateUser = async (userId, userInfo) => {
    try {
        const id = await validate(userId, validators.check.ID);
        const user = await validate(userInfo, validators.update.USER);

        const originalUser = await User.findById(id);
        const updatedUser = await User.findByIdAndUpdate(
            id,
            { password: originalUser.password, ...user },
            {
                new: true,
            }
        );

        return _.omit(updatedUser.toObject(), 'password');
    } catch (error) {
        throw createError(error.status || INTERNAL_SERVER_ERROR, error.message);
    }
};
