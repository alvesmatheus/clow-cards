import React from 'react';

import './CardList.css';

import CardItem from './CardList/CardItem';
import CardListHeader from './CardList/CardListHeader';
import PaginationBar from '../_common/PaginationBar';

const CardList = ({
    filters,
    setFilters,
    pagination,
    setPagination,
    cards,
    totalCards,
}) => {
    return (
        <div className='cards-list'>
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
