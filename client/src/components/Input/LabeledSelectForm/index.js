import React from 'react';

import './index.css';

const LabeledSelectForm = ({ label, options, value, onChange }) => {
    return (
        <form className='labeled-select-form'>
            <label className='form-label' htmlFor={label}>
                {label}
                <select
                    id={label}
                    className='form-select'
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

export default LabeledSelectForm;
