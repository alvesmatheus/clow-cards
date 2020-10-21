import React from 'react';

import './index.css';

const PerPageForm = ({ options, value, onChange }) => {
    return (
        <form className='per-page-form'>
            <span className='select-pre-text'>Show</span>
            <select
                className='per-page-select'
                value={value}
                onChange={onChange}
            >
                {options.map((option) => (
                    <option key={option.text} value={option.value}>
                        {option.text}
                    </option>
                ))}
            </select>
        </form>
    );
};

export default PerPageForm;
