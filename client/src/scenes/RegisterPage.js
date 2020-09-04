import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useModal } from 'react-brave-modal';

import './RegisterPage.css';

import { HOME } from '../constants/routes';

import SubmitButton from '../components/_common/SubmitButton';
import LabeledTextInput from '../components/_common/LabeledTextInput';

const RegisterPage = ({ register }) => {
    const history = useHistory();
    const { showModal } = useModal();

    const [userInfo, setUserInfo] = useState({
        fname: '',
        sname: '',
        email: '',
        password: '',
        pswdCheck: '',
    });

    const showWelcomeModal = () => {
        showModal({
            type: 'simple',
            title: 'Welcome!',
            text: 'Your account was successfully created!',
        });
    };

    const showErrorModal = (text) => {
        showModal({
            type: 'simple',
            title: 'Oops... Something went wrong!',
            text,
        });
    };

    const handleUserInfoChange = (e, key) => {
        const newUserInfo = { ...userInfo };
        newUserInfo[key] = e.target.value;
        setUserInfo(newUserInfo);
    };

    const handleRegister = (e) => {
        e.preventDefault();
        register(userInfo).then((registerStatus) => {
            if (registerStatus.success) {
                showWelcomeModal();
                history.push(HOME);
            } else {
                showErrorModal(registerStatus.error);
            }
        });
    };

    return (
        <div className='register-page'>
            <h1 className='register-page__title'>Register</h1>
            <form className='register-page__form' onSubmit={handleRegister}>
                <LabeledTextInput
                    id='fname'
                    label='First Name'
                    value={userInfo.fname}
                    placeholder='First Name'
                    onChange={(e) => handleUserInfoChange(e, 'fname')}
                />
                <LabeledTextInput
                    id='sname'
                    label='Surname'
                    value={userInfo.sname}
                    placeholder='Surname'
                    onChange={(e) => handleUserInfoChange(e, 'sname')}
                />
                <LabeledTextInput
                    id='email'
                    label='E-mail'
                    value={userInfo.email}
                    placeholder='E-mail'
                    onChange={(e) => handleUserInfoChange(e, 'email')}
                />
                <LabeledTextInput
                    id='password'
                    label='Password'
                    value={userInfo.password}
                    placeholder='Password'
                    isSecret
                    onChange={(e) => handleUserInfoChange(e, 'password')}
                />
                <LabeledTextInput
                    id='pswdCheck'
                    label='Confirm Password'
                    value={userInfo.pswdCheck}
                    placeholder='Confirm Password'
                    isSecret
                    onChange={(e) => handleUserInfoChange(e, 'pswdCheck')}
                />
                <SubmitButton value='Register' />
            </form>
        </div>
    );
};

export default RegisterPage;
