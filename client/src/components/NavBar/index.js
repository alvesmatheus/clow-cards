import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './index.css';

import {
    CARDS,
    DAILY,
    READINGS,
    SIGNIN,
    REGISTER,
} from '../../constants/routes';

import SignOutButton from '../Button/SignOutButton';

const NavBar = ({ isUnsigned, signOut }) => {
    return (
        <nav className='nav-bar'>
            <Link to={CARDS} className='nav-bar-brand'>
                Clow Cards
            </Link>
            <div className='nav-bar-wrapper'>
                <div className='nav-bar-left-links'>
                    <NavLink to={CARDS} className='nav-bar-link'>
                        Meet the Cards
                    </NavLink>
                    <NavLink to={DAILY} className='nav-bar-link'>
                        Card of the Day
                    </NavLink>
                    {!isUnsigned && (
                        <NavLink to={READINGS} className='nav-bar-link'>
                            Your Readings
                        </NavLink>
                    )}
                </div>
                {isUnsigned && (
                    <div className='nav-bar-right-links'>
                        <NavLink to={SIGNIN} className='nav-bar-link'>
                            Sign In
                        </NavLink>
                        <NavLink to={REGISTER} className='nav-bar-link'>
                            Register
                        </NavLink>
                    </div>
                )}
                {!isUnsigned && (
                    <div className='nav-bar-right-links'>
                        <SignOutButton signOut={signOut} />
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
