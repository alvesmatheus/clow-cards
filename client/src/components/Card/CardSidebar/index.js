import React from 'react';

import './index.css';

import LabeledSelectForm from '../../Input/LabeledSelectForm';
import RadioInputForm from '../../Input/RadioInputForm';

const CardSidebar = ({
    filters,
    setFilters,
    sorting,
    setSorting,
    pagination,
    setPagination,
}) => {
    const signOptions = [
        { value: '', text: 'Any' },
        { value: 'Moon', text: 'Moon' },
        { value: 'Sun', text: 'Sun' },
    ];

    const originOptions = [
        { value: '', text: 'Any' },
        { value: 'Eastern Magic', text: 'Eastern Magic' },
        { value: 'Western Magic', text: 'Western Magic' },
    ];

    const orderOptions = [
        { value: 'asc', text: 'Ascending' },
        { value: 'desc', text: 'Descending' },
    ];

    const orderByOptions = [
        { value: 'name', text: 'Name' },
        { value: 'sign', text: 'Sign' },
        { value: 'origin', text: 'Origin' },
    ];

    const handleFiltersChange = (e, key) => {
        const currentFilters = { ...filters };
        currentFilters[key] = e.target.value;

        setFilters(currentFilters);
        setPagination({ ...pagination, page: 0 });
    };

    const handleSortingChange = (e, key) => {
        const currentSorting = { ...sorting };
        currentSorting[key] = e.target.value;

        setSorting(currentSorting);
    };

    return (
        <div className='card-sidebar'>
            <div className='card-filters'>
                <LabeledSelectForm
                    label='Sign:'
                    options={signOptions}
                    value={filters.sign}
                    onChange={(e) => handleFiltersChange(e, 'sign')}
                />
                <LabeledSelectForm
                    label='Origin:'
                    options={originOptions}
                    value={filters.origin}
                    onChange={(e) => handleFiltersChange(e, 'origin')}
                />
            </div>
            <div className='card-sorting'>
                <LabeledSelectForm
                    label='Order By:'
                    options={orderByOptions}
                    value={sorting.orderBy}
                    onChange={(e) => handleSortingChange(e, 'orderBy')}
                />
                <RadioInputForm
                    options={orderOptions}
                    value={sorting.order}
                    onChange={(e) => handleSortingChange(e, 'order')}
                />
            </div>
        </div>
    );
};

export default CardSidebar;
