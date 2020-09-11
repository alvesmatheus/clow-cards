import React from 'react';

import RadioInputForm from '../../_common/RadioInputForm';
import SelectForm from '../../_common/SelectForm';

const CardSorting = ({ sorting, setSorting }) => {
    const orderOptions = [
        { value: 'asc', text: 'Ascending' },
        { value: 'desc', text: 'Descending' },
    ];

    const orderByOptions = [
        { value: 'name', text: 'Name' },
        { value: 'sign', text: 'Sign' },
        { value: 'origin', text: 'Origin' },
    ];

    const handleSortingChange = (e, key) => {
        console.log(e.target.name);
        const currentSorting = { ...sorting };
        currentSorting[key] = e.target.value;

        setSorting(currentSorting);
    };

    return (
        <div className='card-sorting'>
            <SelectForm
                id='cardOrderBy'
                label='Order By:'
                options={orderByOptions}
                currentValue={sorting.orderBy}
                onChange={(e) => handleSortingChange(e, 'orderBy')}
            />
            <RadioInputForm
                id='cardOrder'
                options={orderOptions}
                currentValue={sorting.order}
                onChange={(e) => handleSortingChange(e, 'order')}
            />
        </div>
    );
};

export default CardSorting;
