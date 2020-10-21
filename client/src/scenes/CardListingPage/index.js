import React from 'react';

import './index.css';

import useCardListingState from '../../hooks/useCardListingState';
import CardListingContext from '../../contexts/CardListing';

import CardList from '../../components/Card/CardList';
import CardSidebar from '../../components/Card/CardSidebar';

const CardListingPage = () => {
    const cardListingState = useCardListingState();

    return (
        <div className='card-listing-page'>
            <CardListingContext.Provider value={cardListingState}>
                <CardSidebar />
                <CardList />
            </CardListingContext.Provider>
        </div>
    );
};

export default CardListingPage;
