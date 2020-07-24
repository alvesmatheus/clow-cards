import React from 'react';

import './SubmitButton.css';

const SubmitButton = ({ value }) => {
    return (
        <div className='submit-button'>
            <input
                className='submit-button__input'
                type='submit'
                value={value}
            />
        </div>
    );
};

export default SubmitButton;
