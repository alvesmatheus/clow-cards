import React from 'react';

import './CardsSidebar.css';

import CardsFiltersForm from './Sidebar/CardsFiltersForm';
import CardsSortingForm from './Sidebar/CardsSortingForm';

const CardsSidebar = ({
    filters,
    setFilters,
    sorting,
    setSorting,
    pagination,
    setPagination,
}) => {
    return (
        <div className='cards-sidebar'>
            <CardsFiltersForm
                filters={filters}
                setFilters={setFilters}
                pagination={pagination}
                setPagination={setPagination}
            />
            <CardsSortingForm sorting={sorting} setSorting={setSorting} />
        </div>
    );
};

export default CardsSidebar;
