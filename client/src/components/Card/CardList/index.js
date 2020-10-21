import React from 'react';

import './index.css';

import CardItem from './CardItem';
import CardListHeader from './CardListHeader';
import PaginationBar from '../../PaginationBar';

const CardList = ({
    filters,
    setFilters,
    pagination,
    setPagination,
    cards,
    totalCards,
}) => {
    return (
        <div className='card-list'>
            <CardListHeader
                filters={filters}
                setFilters={setFilters}
                pagination={pagination}
                setPagination={setPagination}
            />
            <div className='card-items-wrapper'>
                {cards.map((card) => (
                    <CardItem key={card.name} card={card} />
                ))}
            </div>
            <PaginationBar
                totalItems={totalCards}
                pagination={pagination}
                setPagination={setPagination}
            />
        </div>
    );
};

export default CardList;
