import React from 'react';

import './CardsSidebar.css';

import CardsFilters from './Sidebar/CardsFilters';
import CardsSorting from './Sidebar/CardsSorting';

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
            <CardsFilters
                filters={filters}
                setFilters={setFilters}
                pagination={pagination}
                setPagination={setPagination}
            />
            <CardsSorting sorting={sorting} setSorting={setSorting} />
        </div>
    );
};

export default CardsSidebar;
