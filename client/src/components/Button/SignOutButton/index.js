import React from 'react';
import { useHistory } from 'react-router-dom';

import './index.css';

import { CARDS } from '../../../constants/routes';

const SignOutButton = ({ signOut }) => {
    const history = useHistory();

    const handleSignOut = () => {
        signOut();
        history.push(CARDS);
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
