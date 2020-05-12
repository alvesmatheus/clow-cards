import React, { useState, useEffect } from 'react';

import * as CardsAPI from '../services/api/CardsAPI';

import './CardsPage.css';

import CardsList from '../components/Cards/CardsList';
import CardsSidebar from '../components/Cards/CardsSidebar';

const CardsPage = () => {
    const [cards, setCards] = useState([]);
    const [filters, setFilters] = useState({
        name: '',
        sign: '',
        origin: '',
    });
    const [isLoading, setIsLoading] = useState(true);
    const [pagination, setPagination] = useState({ page: 0, perPage: 10 });
    const [sorting, setSorting] = useState({
        order: 'asc',
        orderBy: 'name',
    });
    const [totalCards, setTotalCards] = useState(0);

    useEffect(() => {
        CardsAPI.getCards(filters, sorting, pagination).then((cards) => {
            setCards(cards);
            setIsLoading(false);
        });

        return setCards([]);
    }, [filters, pagination, sorting]);

    useEffect(() => {
        CardsAPI.getTotalCards(filters).then((totalCards) => {
            setTotalCards(totalCards);
        });
    }, [filters]);

    return (
        <div className='cards-page'>
            <CardsSidebar
                filters={filters}
                setFilters={setFilters}
                sorting={sorting}
                setSorting={setSorting}
                pagination={pagination}
                setPagination={setPagination}
            />
            <CardsList
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

export default CardsPage;
