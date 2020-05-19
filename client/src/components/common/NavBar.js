import React from 'react';
import { Link } from 'react-router-dom';

import './NavBar.css';

const NavBar = () => {
    return (
        <div className='nav-bar'>
            <div className='nav-bar__brand'>
                <Link to='/' className='nav-bar-brand__text'>
                    Clow Cards
                </Link>
            </div>
            <div className='nav-bar__items'>
                <nav className='nav-bar__items--left'>
                    <Link to='/' className='nav-bar-items__link'>
                        Get a Reading
                    </Link>
                    <Link to='/' className='nav-bar-items__link'>
                        Card of the Day
                    </Link>
                    <Link to='/cards' className='nav-bar-items__link'>
                        Meet the Cards
                    </Link>
                </nav>
                <nav className='nav-bar__items--right'>
                    <Link to='/' className='nav-bar-items__link'>
                        Sign In
                    </Link>
                    <Link to='/' className='nav-bar-items__link'>
                        Register
                    </Link>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
