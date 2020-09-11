import React from 'react';

const CardSearchBar = ({ filters, setFilters }) => {
    const handleNameChange = (e) => {
        setFilters({ ...filters, name: e.target.value });
    };

    return (
        <div className='card-search-bar'>
            <i className='fa fa-search card-search-bar__icon' />
            <label htmlFor='cardName'>
                <input
                    id='cardName'
                    className='card-search-bar__input'
                    type='text'
                    value={filters.name}
                    placeholder='Search for a card...'
                    onChange={handleNameChange}
                />
            </label>
        </div>
    );
};

export default CardSearchBar;
