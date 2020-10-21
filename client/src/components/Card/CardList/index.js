import React, { useContext } from 'react';

import './index.css';

import CardListingContext from '../../../contexts/CardListing';

import CardItem from './CardItem';
import CardListHeader from './CardListHeader';
import PaginationBar from '../../PaginationBar';

const CardList = () => {
    const { cards, totalCards, pagination, changePagination } = useContext(
        CardListingContext
    );

    const changePage = (pageNumber) => {
        changePagination('page', pageNumber);
    };

    return (
        <div className='card-list'>
            <CardListHeader />
            <div className='card-items-wrapper'>
                {cards.map((card) => (
                    <CardItem key={card.name} card={card} />
                ))}
            </div>
            <PaginationBar
                totalItems={totalCards}
                pagination={pagination}
                changePage={changePage}
            />
        </div>
    );
};

export default CardList;
