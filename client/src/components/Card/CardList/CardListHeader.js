import React from 'react';

import CardSearchBar from './CardSearchBar';
import PerPageForm from '../../_common/PerPageForm';

const CardListHeader = ({ filters, setFilters, pagination, setPagination }) => {
    const perPageOptions = [
        { value: 5, text: '5 cards' },
        { value: 10, text: '10 cards' },
        { value: 20, text: '20 cards' },
    ];

    const handlePerPageChange = (e) => {
        setPagination({
            page: 0,
            perPage: parseInt(e.target.value, 10),
        });
    };

    return (
        <div className='card-list-header'>
            <CardSearchBar filters={filters} setFilters={setFilters} />
            <div className='card-list-header__intro'>
                <h1 className='card-list-header-intro__title'>Clow Cards</h1>
                <span className='card-list-header-intro__text'>
                    Click on the cards listed below for more information.
                </span>
            </div>
            <PerPageForm
                id='cardsPerParge'
                options={perPageOptions}
                value={pagination.perPage}
                onChange={handlePerPageChange}
            />
        </div>
    );
};

export default CardListHeader;
