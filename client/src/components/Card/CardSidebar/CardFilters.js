import React from 'react';

import SelectForm from '../../_common/SelectForm';

const CardFilters = ({ filters, setFilters, pagination, setPagination }) => {
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

    const handleFiltersChange = (e, key) => {
        const currentFilters = { ...filters };
        currentFilters[key] = e.target.value;

        setFilters(currentFilters);
        setPagination({ ...pagination, page: 0 });
    };

    return (
        <div className='card-filters'>
            <SelectForm
                id='cardSign'
                label='Sign:'
                options={signOptions}
                defaultValue={filters.sign}
                onChange={(e) => handleFiltersChange(e, 'sign')}
            />
            <SelectForm
                id='cardOrigin'
                label='Origin:'
                options={originOptions}
                defaultValue={filters.origin}
                onChange={(e) => handleFiltersChange(e, 'origin')}
            />
        </div>
    );
};

export default CardFilters;
