import React, { useContext } from 'react';

import './index.css';

import CardListingContext from '../../../../contexts/CardListing';

import CardSearchBar from './CardSearchBar';
import PerPageForm from '../../../Input/PerPageForm';

const CardListHeader = () => {
    const { pagination, changePagination } = useContext(CardListingContext);

    const perPageOptions = [
        { value: 5, text: '5 cards' },
        { value: 10, text: '10 cards' },
        { value: 20, text: '20 cards' },
    ];

    return (
        <div className='card-list-header'>
            <CardSearchBar />
            <div className='card-list-info'>
                <h1 className='card-list-title'>Clow Cards</h1>
                <span className='card-list-subtitle'>
                    Click on the cards listed below for more information.
                </span>
            </div>
            <PerPageForm
                options={perPageOptions}
                value={pagination.perPage}
                onChange={(e) => changePagination('perPage', e.target.value)}
            />
        </div>
    );
};

export default CardListHeader;
