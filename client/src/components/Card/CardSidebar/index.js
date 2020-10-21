import React, { useContext } from 'react';

import './index.css';

import CardListingContext from '../../../contexts/CardListing';

import LabeledSelectForm from '../../Input/LabeledSelectForm';
import RadioInputForm from '../../Input/RadioInputForm';

const CardSidebar = () => {
    const { filters, sorting, changeFilters, changeSorting } = useContext(
        CardListingContext
    );

    const options = {
        sign: [
            { value: '', text: 'Any' },
            { value: 'Moon', text: 'Moon' },
            { value: 'Sun', text: 'Sun' },
        ],
        origin: [
            { value: '', text: 'Any' },
            { value: 'Eastern Magic', text: 'Eastern Magic' },
            { value: 'Western Magic', text: 'Western Magic' },
        ],
        order: [
            { value: 'asc', text: 'Ascending' },
            { value: 'desc', text: 'Descending' },
        ],
        orderBy: [
            { value: 'name', text: 'Name' },
            { value: 'sign', text: 'Sign' },
            { value: 'origin', text: 'Origin' },
        ],
    };

    return (
        <div className='card-sidebar'>
            <LabeledSelectForm
                label='Sign:'
                options={options.sign}
                value={filters.sign}
                onChange={(e) => changeFilters('sign', e.target.value)}
            />
            <LabeledSelectForm
                label='Origin:'
                options={options.origin}
                value={filters.origin}
                onChange={(e) => changeFilters('origin', e.target.value)}
            />
            <LabeledSelectForm
                label='Order By:'
                options={options.orderBy}
                value={sorting.orderBy}
                onChange={(e) => changeSorting('orderBy', e.target.value)}
            />
            <RadioInputForm
                options={options.order}
                value={sorting.order}
                onChange={(e) => changeSorting('order', e.target.value)}
            />
        </div>
    );
};

export default CardSidebar;
