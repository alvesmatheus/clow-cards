import React from 'react';

import './CardSidebar.css';

import CardFilters from './CardSidebar/CardFilters';
import CardSorting from './CardSidebar/CardSorting';

const CardSidebar = ({
    filters,
    setFilters,
    sorting,
    setSorting,
    pagination,
    setPagination,
}) => {
    return (
        <div className='cards-sidebar'>
            <CardFilters
                filters={filters}
                setFilters={setFilters}
                pagination={pagination}
                setPagination={setPagination}
            />
            <CardSorting sorting={sorting} setSorting={setSorting} />
        </div>
    );
};

export default CardSidebar;
