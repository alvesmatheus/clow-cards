import React from 'react';

import './CardsList.css';

import CardsItem from './List/CardsItem';
import CardsSearch from './List/CardsSearch';
import PaginationBar from '../common/PaginationBar.js';

const CardsList = ({
    filters,
    setFilters,
    pagination,
    setPagination,
    cards,
    totalCards,
}) => {
    return (
        <div className='cards-list'>
            <CardsSearch
                filters={filters}
                setFilters={setFilters}
                pagination={pagination}
                setPagination={setPagination}
            />
            <div className='cards-items-wrapper'>
                {cards.map((card) => (
                    <CardsItem key={card.name} card={card} />
                ))}
            </div>
            <PaginationBar
                totalCards={totalCards}
                pagination={pagination}
                setPagination={setPagination}
            />
        </div>
    );
};

export default CardsList;
