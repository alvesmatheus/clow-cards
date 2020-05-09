import React from 'react';

import RadioInputForm from '../../common/RadioInputForm';
import SelectForm from '../../common/SelectForm';

const CardsSorting = ({ sorting, setSorting }) => {
    const orderOptions = [
        { value: 'asc', text: 'Ascending' },
        { value: 'desc', text: 'Descending' },
    ];

    const orderByOptions = [
        { value: 'name', text: 'Name' },
        { value: 'sign', text: 'Sign' },
        { value: 'origin', text: 'Origin' },
    ];

    const handleOrderChange = (e) => {
        setSorting({ ...sorting, order: e.target.value });
        e.preventDefault();
    };

    const handleOrderByChange = (e) => {
        setSorting({ ...sorting, orderBy: e.target.value });
        e.preventDefault();
    };

    return (
        <div className='cards-sorting-form'>
            <SelectForm
                id={'cardOrderBy'}
                label={'Order By:'}
                options={orderByOptions}
                currentValue={sorting.orderBy}
                onChange={handleOrderByChange}
            />
            <RadioInputForm
                id={'cardOrder'}
                options={orderOptions}
                currentValue={sorting.order}
                onChange={handleOrderChange}
            />
        </div>
    );
};

export default CardsSorting;
