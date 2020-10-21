import React from 'react';

import './index.css';

import CardSearchBar from './CardSearchBar';
import PerPageForm from '../../../Input/PerPageForm';

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
            <div className='card-list-info'>
                <h1 className='card-list-title'>Clow Cards</h1>
                <span className='card-list-subtitle'>
                    Click on the cards listed below for more information.
                </span>
            </div>
            <PerPageForm
                options={perPageOptions}
                value={pagination.perPage}
                onChange={handlePerPageChange}
            />
        </div>
    );
};

export default CardListHeader;
