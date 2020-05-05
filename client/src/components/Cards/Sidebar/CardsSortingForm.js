import React from 'react';

import './CardsSortingForm.css';

const CardsSortingForm = (props) => {
    const orderByOptions = [
        { value: 'name', text: 'Name' },
        { value: 'sign', text: 'Sign' },
        { value: 'origin', text: 'Origin' },
    ];

    const handleSortingChange = (e, sortingAttribute) => {
        const newSorting = { ...props.sorting };
        newSorting[sortingAttribute] = e.target.value;

        props.setSorting(newSorting);
        e.preventDefault();
    };

    return (
        <div className='cards-sorting-form'>
            <form>
                <label htmlFor='cardOrderBy'>
                    <span className='form-label__text'>Sort By:</span>
                    <select
                        id='cardOrderBy'
                        className='form-label__select'
                        value={props.sorting.orderBy}
                        onChange={(e) => handleSortingChange(e, 'orderBy')}
                    >
                        {orderByOptions.map((option) => (
                            <option key={option.text} value={option.value}>
                                {option.text}
                            </option>
                        ))}
                    </select>
                </label>
                <div className='form-radio-inputs'>
                    <label
                        htmlFor='cardOrder'
                        className='form-radio-inputs__label'
                    >
                        <input
                            id='cardOrder'
                            type='radio'
                            value='asc'
                            checked={props.sorting.order === 'asc'}
                            onChange={(e) => handleSortingChange(e, 'order')}
                        />
                        <span className='form-label__text--radio'>
                            Ascending
                        </span>
                    </label>
                    <label className='form-radio-inputs__label'>
                        <input
                            id='cardOrder'
                            type='radio'
                            value='desc'
                            checked={props.sorting.order === 'desc'}
                            onChange={(e) => handleSortingChange(e, 'order')}
                        />
                        <span className='form-label__text--radio'>
                            Descending
                        </span>
                    </label>
                </div>
            </form>
        </div>
    );
};

export default CardsSortingForm;
