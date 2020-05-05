import React from 'react';

import './NavBar.css';

const NavBar = (props) => {
    return (
        <div className='nav-bar'>
            <div className='nav-bar__brand'>
                <a href='#' className='nav-bar-brand__text'>
                    Clow Cards
                </a>
            </div>
            <div className='nav-bar__items'>
                <nav className='nav-bar__items--left'>
                    <a href='#' className='nav-bar-items__link'>
                        Get a Reading
                    </a>
                    <a href='#' className='nav-bar-items__link'>
                        Meet the Cards
                    </a>
                </nav>
                <nav className='nav-bar__items--right'>
                    <a href='#' className='nav-bar-items__link'>
                        Sign In
                    </a>
                    <a href='#' className='nav-bar-items__link'>
                        Register
                    </a>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
