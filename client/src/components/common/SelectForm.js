import React from 'react';

import './SelectForm.css';

const SelectForm = ({ id, label, options, currentValue, onChange }) => {
    return (
        <form className='select-form'>
            <label className='select-form__label' htmlFor={id}>
                {label}
                <select
                    id={id}
                    className='select-form__select'
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

export default SelectForm;
