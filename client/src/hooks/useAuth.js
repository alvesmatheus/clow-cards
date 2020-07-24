import { useState, useEffect } from 'react';

import * as AuthAPI from '../services/api/AuthAPI';

import { getData, removeData, storeData } from '../utils/localStorage';

const useAuth = () => {
    const [isUnsigned, setIsUnsigned] = useState(true);

    useEffect(() => {
        const userId = getData('user-id');
        const token = getData('token');

        if (userId && token)
            AuthAPI.getUser(userId, token)
                .then(() => {
                    setIsUnsigned(false);
                })
                .catch(() => {
                    removeData('user-id');
                    removeData('token');
                });
    }, [isUnsigned]);

    const getUser = () => {
        AuthAPI.getUser(getData('user-id'), getData('token')).then(
            (userData) => {
                if (userData.error)
                    return { success: false, error: userData.error };
                return { success: true, userData };
            }
        );
    };

    const signIn = (signInInfo) => {
        return AuthAPI.signIn(signInInfo).then((userData) => {
            if (userData.error)
                return { success: false, error: userData.error };

            storeData('user-id', userData.userId);
            storeData('token', userData.token);
            setIsUnsigned(false);

            return { success: true };
        });
    };

    const register = (registerInfo) => {
        return AuthAPI.register(registerInfo).then((userData) => {
            if (userData.error)
                return { success: false, error: userData.error };

            return signIn({
                email: registerInfo.email,
                password: registerInfo.password,
            });
        });
    };

    const signOut = () => {
        removeData('user-id');
        removeData('token');
        setIsUnsigned(true);
    };

    return { isUnsigned, getUser, register, signIn, signOut };
};

export default useAuth;
