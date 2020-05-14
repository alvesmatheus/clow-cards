import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

import User from '../models/User';

import { createToken } from '../utils/jwt';
import { trimObjectValues, verifyRequestData } from '../utils/validation';

export const createUser = async (userInfo) => {
    const expectedProps = ['fname', 'sname', 'email', 'password', 'pswdCheck'];
    const errorMsg = verifyRequestData(userInfo, expectedProps);
    if (errorMsg) throw new Error(errorMsg);

    const newUserInfo = trimObjectValues(userInfo);
    if (newUserInfo.password !== newUserInfo.pswdCheck)
        throw new Error(`"Password" and "Confirm Password" does not match.`);

    try {
        const olderUser = await User.findOne({ email: newUserInfo.email });
        if (olderUser) throw new Error(`This e-mail is already being used.`);

        const { password, pswdCheck, ...userPublicInfo } = newUserInfo;
        const userFullInfo = {
            password: await bcrypt.hash(password, 10),
            ...userPublicInfo,
        };

        const newUser = await User.create({ ...userFullInfo });
        return { ...newUser._doc, password: null };
    } catch (error) {
        throw new Error(error.message);
    }
};

export const deleteUser = async (userID) => {
    const expectedProps = ['id'];
    const errorMsg = verifyRequestData({ id: userID }, expectedProps);
    if (errorMsg) throw new Error(errorMsg);

    try {
        const deletedUser = await User.findByIdAndDelete(userID);
        return { ...deletedUser._doc, password: null };
    } catch (error) {
        throw new Error(error.message);
    }
};

export const loginUser = async (userInfo) => {
    const expectedProps = ['email', 'password'];
    const errorMsg = verifyRequestData(userInfo, expectedProps);
    if (errorMsg) throw new Error(errorMsg);

    try {
        const loginInfo = trimObjectValues(userInfo);
        const user = await User.findOne({ email: loginInfo.email });
        if (!user) throw new Error(`This user does not exist.`);

        const pswdMatch = await bcrypt.compare(
            loginInfo.password,
            user.password
        );
        if (!pswdMatch) throw new Error(`Incorrect password.`);

        const token = createToken({ id: user._doc._id });
        return { token, ...user._doc, password: null };
    } catch (error) {
        throw new Error(error.message);
    }
};

export const updateUser = async (userID, userInfo) => {
    const expectedProps = ['fname', 'sname', 'email', 'password', 'readings'];
    const errorMsg = verifyRequestData(userInfo, expectedProps);
    if (errorMsg) throw new Error(errorMsg);

    try {
        const readingIDs = userInfo.readings.map(
            (reading) => new mongoose.Types.ObjectId(reading)
        );

        const updatedUser = await User.findByIdAndUpdate(
            userID,
            { ...userInfo, readings: readingIDs },
            {
                new: true,
            }
        );

        return { ...updatedUser._doc, password: null };
    } catch (error) {
        throw new Error(error.message);
    }
};
