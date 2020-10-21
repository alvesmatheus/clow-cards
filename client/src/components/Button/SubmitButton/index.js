import React from 'react';

import './index.css';

const SubmitButton = ({ value }) => {
    return (
        <button className='submit-button' type='submit' value={value}>
            {value}
        </button>
    );
};

export default SubmitButton;
