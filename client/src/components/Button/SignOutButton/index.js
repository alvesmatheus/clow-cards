import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.css';

import { HOME } from '../../../constants/routes';

const SignOutButton = ({ signOut }) => {
    const history = useHistory();

    const handleSignOut = () => {
        signOut();
        history.push(HOME);
    };

    return (
        <button
            className='sign-out-button'
            value='Sign Out'
            type='button'
            onClick={handleSignOut}
        >
            Sign Out
        </button>
    );
};

export default SignOutButton;
