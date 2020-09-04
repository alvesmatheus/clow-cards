import React from 'react';

import './LabeledTextInput.css';

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
                <span className='labeled-text-input__label'>{label}</span>
                <input
                    className='labeled-text-input__input'
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
