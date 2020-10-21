import React from 'react';

import './index.css';

const RadioInputForm = ({ options, value, onChange }) => {
    return (
        <form className='radio-input-form'>
            {options.map((option) => (
                <div className='option-wrapper' key={option.value}>
                    <input
                        type='radio'
                        value={option.value}
                        checked={value === option.value}
                        onChange={onChange}
                    />
                    <span className='option-text'>{option.text}</span>
                </div>
            ))}
        </form>
    );
};

export default RadioInputForm;
