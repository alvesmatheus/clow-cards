import React, { useState, useEffect } from 'react';

import './index.css';

import { getCards, getTotalCards } from '../../services/api/CardsAPI';

import CardList from '../../components/Card/CardList';
import CardSidebar from '../../components/Card/CardSidebar';

const CardListingPage = () => {
    const [cards, setCards] = useState([]);
    const [filters, setFilters] = useState({
        name: '',
        sign: '',
        origin: '',
    });
    const [pagination, setPagination] = useState({ page: 0, perPage: 10 });
    const [sorting, setSorting] = useState({
        order: 'asc',
        orderBy: 'name',
    });
    const [totalCards, setTotalCards] = useState(0);

    useEffect(() => {
        getCards(filters, sorting, pagination).then((cardsList) => {
            setCards(cardsList);
        });
    }, [filters, pagination, sorting]);

    useEffect(() => {
        getTotalCards(filters).then((cardsCount) => {
            setTotalCards(cardsCount);
        });
    }, [filters]);

    return (
        <div className='card-listing-page'>
            <CardSidebar
                filters={filters}
                setFilters={setFilters}
                sorting={sorting}
                setSorting={setSorting}
                pagination={pagination}
                setPagination={setPagination}
            />
            <CardList
                cards={cards}
                filters={filters}
                setFilters={setFilters}
                pagination={pagination}
                setPagination={setPagination}
                totalCards={totalCards}
            />
        </div>
    );
};

export default CardListingPage;
