import React from 'react';

import './TextInput.css';

const TextInput = ({ id, label, value, placeholder, isSecret, onChange }) => {
    return (
        <div className='text-input'>
            <label htmlFor={id}>
                <span className='text-input__label'>{label}</span>
                <input
                    className='text-input__input'
                    id={id}
                    name={id}
                    type={(isSecret && 'password') || 'text'}
                    value={value}
                    placeholder={placeholder}
                    autoComplete='off'
                    onChange={onChange}
                />
            </label>
        </div>
    );
};

export default TextInput;
