import { useState, useEffect } from 'react';

import { getCards, getTotalCards } from '../services/api/CardsAPI';

const useCardListingState = () => {
    const [cards, setCards] = useState([]);
    const [totalCards, setTotalCards] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    const [filters, setFilters] = useState({
        name: '',
        sign: '',
        origin: '',
    });

    const [sorting, setSorting] = useState({
        order: 'asc',
        orderBy: 'name',
    });

    const [pagination, setPagination] = useState({ page: 0, perPage: 10 });

    useEffect(() => {
        setIsLoading(true);
        getCards(filters, sorting, pagination).then((cardsList) => {
            setCards(cardsList);
            setIsLoading(false);
        });
    }, [filters, pagination, sorting]);

    useEffect(() => {
        getTotalCards(filters).then((cardsCount) => {
            setTotalCards(cardsCount);
        });
    }, [filters]);

    const changeFilters = (key, value) => {
        const currentFilters = { ...filters };
        currentFilters[key] = value;
        setFilters(currentFilters);
    };

    const changeSorting = (key, value) => {
        const currentSorting = { ...sorting };
        currentSorting[key] = value;
        setSorting(currentSorting);
    };

    const changePagination = (key, value) => {
        const currentPagination = { ...pagination };
        currentPagination[key] = value;
        setPagination(currentPagination);
    };

    return {
        cards,
        totalCards,
        isLoading,
        filters,
        sorting,
        pagination,
        changeFilters,
        changeSorting,
        changePagination,
    };
};

export default useCardListingState;
