import React, { useState, useEffect } from 'react';

import * as CardsAPI from '../services/api/CardsAPI';

import './CardsPage.css';

import CardsList from '../components/Cards/CardsList';
import CardsSidebar from '../components/Cards/CardsSidebar';

const CardsPage = (props) => {
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
        CardsAPI.getTotalCards().then((totalCards) => {
            setTotalCards(totalCards);
        });
    }, [totalCards]);

    return (
        <div className='cards-page'>
            <CardsSidebar
                filters={filters}
                setFilters={setFilters}
                sorting={sorting}
                setSorting={setSorting}
            />
            <CardsList
                filters={filters}
                setFilters={setFilters}
                pagination={pagination}
                setPagination={setPagination}
                cards={cards}
                totalCards={totalCards}
            />
        </div>
    );
};

export default CardsPage;
