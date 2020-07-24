import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import './NavBar.css';

import { CARDS, HOME, REGISTER, SIGNIN } from '../../constants/routes';

import SignOutButton from './SignOutButton';

const NavBar = ({ isUnsigned, signOut }) => {
    return (
        <nav className='nav-bar'>
            <Link to={HOME} className='nav-bar__brand'>
                Clow Cards
            </Link>
            <div className='nav-bar__wrapper'>
                <div className='nav-bar__links--left'>
                    <NavLink to={CARDS} className='nav-bar-link'>
                        Meet the Cards
                    </NavLink>
                    <NavLink to={HOME} className='nav-bar-link'>
                        Card of the Day
                    </NavLink>
                    {!isUnsigned && (
                        <NavLink to={HOME} className='nav-bar-link'>
                            Get a Reading
                        </NavLink>
                    )}
                </div>
                {isUnsigned && (
                    <div className='nav-bar__links--right'>
                        <NavLink to={SIGNIN} className='nav-bar-link'>
                            Sign In
                        </NavLink>
                        <NavLink to={REGISTER} className='nav-bar-link'>
                            Register
                        </NavLink>
                    </div>
                )}
                {!isUnsigned && (
                    <div className='nav-bar__links--right'>
                        <SignOutButton signOut={signOut} />
                    </div>
                )}
            </div>
        </nav>
    );
};

export default NavBar;
