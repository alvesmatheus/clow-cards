import React from 'react';

import './index.css';

const LabeledTextInput = ({
    id,
    label,
    value,
    placeholder,
    isSecret,
    onChange,
}) => {
    return (
        <div className='labeled-text-input'>
            <label htmlFor={id}>
                <span className='label-text'>{label}</span>
                <input
                    className='labeled-input'
                    id={id}
                    type={(isSecret && 'password') || 'text'}
                    value={value}
                    placeholder={placeholder || ''}
                    autoComplete='off'
                    onChange={onChange}
                />
            </label>
        </div>
    );
};

export default LabeledTextInput;
