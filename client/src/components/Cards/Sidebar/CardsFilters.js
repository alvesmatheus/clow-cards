import React from 'react';

import SelectForm from '../../common/SelectForm';

const CardsFilters = ({ filters, setFilters, pagination, setPagination }) => {
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

    const handleSignChange = (e) => {
        e.preventDefault();
        setFilters({ ...filters, sign: e.target.value });
        setPagination({ ...pagination, page: 0 });
    };

    const handleOriginChange = (e) => {
        e.preventDefault();
        setFilters({ ...filters, origin: e.target.value });
        setPagination({ ...pagination, page: 0 });
    };

    return (
        <div className='cards-filters'>
            <SelectForm
                id='cardSign'
                label='Sign:'
                options={signOptions}
                defaultValue={filters.sign}
                onChange={handleSignChange}
            />
            <SelectForm
                id='cardOrigin'
                label='Origin:'
                options={originOptions}
                defaultValue={filters.origin}
                onChange={handleOriginChange}
            />
        </div>
    );
};

export default CardsFilters;
