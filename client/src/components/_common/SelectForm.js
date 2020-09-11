import React from 'react';

import './SelectForm.css';

const SelectForm = ({ id, label, options, value, onChange }) => {
    return (
        <form className='select-form'>
            <label className='select-form__label' htmlFor={id}>
                {label}
                <select
                    className='select-form__select'
                    id={id}
                    value={value}
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
