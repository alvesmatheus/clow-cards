import React from 'react';

import './index.css';

const CardSearchBar = ({ filters, setFilters }) => {
    const handleNameChange = (e) => {
        setFilters({ ...filters, name: e.target.value });
    };

    return (
        <div className='card-search-bar'>
            <i className='fa fa-search search-bar-icon' />
            <input
                className='search-bar-input'
                type='text'
                value={filters.name}
                placeholder='Search for a card...'
                onChange={handleNameChange}
            />
        </div>
    );
};

export default CardSearchBar;
