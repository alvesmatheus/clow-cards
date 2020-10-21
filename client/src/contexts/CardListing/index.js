import { createContext } from 'react';

export const CardListingContext = createContext({
    cards: [],
    totalCards: 0,
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
    changeCardListing: () => {},
});

export default CardListingContext;
