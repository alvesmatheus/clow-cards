import React from 'react';

import './CardsSidebar.css';

import CardsFiltersForm from './Sidebar/CardsFiltersForm';
import CardsSortingForm from './Sidebar/CardsSortingForm';

const CardsSidebar = (props) => {
    return (
        <div className='cards-sidebar'>
            <CardsFiltersForm
                filters={props.filters}
                setFilters={props.setFilters}
            />
            <CardsSortingForm
                sorting={props.sorting}
                setSorting={props.setSorting}
            />
        </div>
    );
};

export default CardsSidebar;
