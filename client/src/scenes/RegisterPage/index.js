import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useModal } from 'react-brave-modal';

import './index.css';

import { CARDS } from '../../constants/routes';

import LabeledTextInput from '../../components/Input/LabeledTextInput';
import SubmitButton from '../../components/Button/SubmitButton';
import DefaultModal from '../../components/Modal/DefaultModal';

const RegisterPage = ({ register }) => {
    const history = useHistory();
    const { showModal, closeModal } = useModal();

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
            data: (
                <DefaultModal
                    headerText='Welcome!'
                    bodyText='Your account was successfully created!'
                    closeModal={closeModal}
                />
            ),
        });
    };

    const showErrorModal = (errorText) => {
        showModal({
            type: 'simple',
            data: (
                <DefaultModal
                    headerText='Oops... Something went wrong.'
                    bodyText={errorText}
                    closeModal={closeModal}
                />
            ),
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
                history.push(CARDS);
            } else {
                showErrorModal(registerStatus.error);
            }
        });
    };

    return (
        <div className='register-page'>
            <form className='register-page-form' onSubmit={handleRegister}>
                <h1 className='register-page-title'>Register</h1>
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
