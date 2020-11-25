import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useModal } from 'react-brave-modal';

import './index.css';

import { HOME } from '../../constants/routes';

import LabeledTextInput from '../../components/Input/LabeledTextInput';
import SubmitButton from '../../components/Button/SubmitButton';
import DefaultModal from '../../components/Modal/DefaultModal';

const SignInPage = ({ signIn }) => {
    const history = useHistory();
    const { showModal, closeModal } = useModal();

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
    });

    const showErrorModal = (erroText) => {
        showModal({
            type: 'simple',
            data: (
                <DefaultModal
                    headerText='Oops... Something went wrong.'
                    bodyText={erroText}
                    closeModal={closeModal}
                />
            ),
        });
    };

    const handleUserInfoChange = (e, key) => {
        const currentUserInfo = { ...userInfo };
        currentUserInfo[key] = e.target.value;

        setUserInfo(currentUserInfo);
    };

    const handleSignIn = (e) => {
        e.preventDefault();
        signIn(userInfo).then((signInStatus) => {
            if (signInStatus.success) {
                history.push(HOME);
            } else {
                showErrorModal(signInStatus.error);
            }
        });
    };

    return (
        <div className='sign-in-page'>
            <form className='sign-in-page-form' onSubmit={handleSignIn}>
                <h1 className='sign-in-page-title'>Sign In</h1>
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
                <SubmitButton value='Sign In' />
            </form>
        </div>
    );
};

export default SignInPage;
