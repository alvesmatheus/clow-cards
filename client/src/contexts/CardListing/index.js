import { createContext } from 'react';

export const CardListingContext = createContext({
    cards: [],
    totalCards: 0,
    isLoading: true,
    filters: {
        name: '',
        sign: '',
        origin: '',
    },
    sorting: {
        order: '',
        orderBy: '',
    },
    pagination: {
        page: 0,
        perPage: 0,
    },
    changeFilters: () => {},
    changeSorting: () => {},
    changePagination: () => {},
});

export default CardListingContext;
