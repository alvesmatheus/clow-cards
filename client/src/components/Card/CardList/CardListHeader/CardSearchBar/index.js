import React, { useContext } from 'react';

import './index.css';

import CardListingContext from '../../../../../contexts/CardListing';

const CardSearchBar = () => {
    const { filters, changeFilters } = useContext(CardListingContext);

    return (
        <div className='card-search-bar'>
            <i className='fa fa-search search-bar-icon' />
            <input
                className='search-bar-input'
                type='text'
                value={filters.name}
                placeholder='Search for a card...'
                onChange={(e) => changeFilters('name', e.target.value)}
            />
        </div>
    );
};

export default CardSearchBar;
