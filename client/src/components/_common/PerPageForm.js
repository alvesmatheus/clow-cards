import React from 'react';

import './PerPageForm.css';

const PerPageForm = ({ id, options, currentValue, onChange }) => {
    return (
        <form className='per-page-form'>
            <label className='per-page-form__label' htmlFor={id}>
                <span className='per-page-form__text'>Show</span>
                <select
                    className='per-page-form__select'
                    id={id}
                    value={currentValue}
                    onChange={onChange}
                >
                    {options.map((option) => (
                        <option key={option.text} value={option.value}>
                            {option.text}
                        </option>
                    ))}
                </select>
            </label>
        </form>
    );
};

export default PerPageForm;
