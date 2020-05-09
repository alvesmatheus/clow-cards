import React from 'react';

const CardsFiltersForm = ({
    filters,
    setFilters,
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

    const handleFiltersChange = (e, filtersAttibute) => {
        const newFilters = { ...filters };
        newFilters[filtersAttibute] = e.target.value;

        setFilters(newFilters);
        setPagination({ ...pagination, page: 0 });
        e.preventDefault();
    };

    return (
        <div className='cards-filters-form'>
            <form>
                <label htmlFor='cardSign'>
                    <span className='form-label__text'>Sign:</span>
                    <select
                        id='cardSign'
                        className='form-label__select'
                        value={filters.sign}
                        onChange={(e) => handleFiltersChange(e, 'sign')}
                    >
                        {signOptions.map((option) => (
                            <option key={option.text} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                </label>
                <label htmlFor='cardOrigin'>
                    <span className='form-label__text'>Origin:</span>
                    <select
                        id='cardOrigin'
                        className='form-label__select'
                        value={filters.origin}
                        onChange={(e) => handleFiltersChange(e, 'origin')}
                    >
                        {originOptions.map((option) => (
                            <option key={option.text} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                </label>
            </form>
        </div>
    );
};

export default CardsFiltersForm;
