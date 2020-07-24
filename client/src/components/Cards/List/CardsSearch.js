import React from 'react';

import './CardsSearch.css';

const CardsSearch = ({ filters, setFilters, pagination, setPagination }) => {
    const perPageOptions = [
        { value: 5, text: '5 cards' },
        { value: 10, text: '10 cards' },
        { value: 20, text: '20 cards' },
    ];

    const handleNameChange = (e) => {
        e.preventDefault();
        setFilters({ ...filters, name: e.target.value });
    };

    const handlePerPageChange = (e) => {
        e.preventDefault();
        setPagination({
            page: 0,
            perPage: parseInt(e.target.value, 10),
        });
    };

    return (
        <div className='cards-search'>
            <div className='search-bar'>
                <i className='fa fa-search search-bar__icon' />
                <label htmlFor='cardName'>
                    <input
                        id='cardName'
                        className='search-bar__input'
                        type='text'
                        value={filters.name}
                        placeholder='Search for a card...'
                        onChange={handleNameChange}
                    />
                </label>
            </div>
            <h1 className='cards-list__title'>Clow Cards</h1>
            <form className='per-page'>
                <label htmlFor='cardsPerPage'>
                    <span className='per-page-label__text'>Show</span>
                    <select
                        id='cardsPerPage'
                        className='per-page__select'
                        value={pagination.perPage}
                        onChange={handlePerPageChange}
                    >
                        {perPageOptions.map((option) => (
                            <option key={option.text} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                </label>
            </form>
        </div>
    );
};

export default CardsSearch;
