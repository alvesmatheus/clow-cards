import React from 'react';

import './index.css';

const CloseModalButton = ({ closeModal }) => {
    return (
        <button
            type='button'
            className='close-modal-button'
            onClick={closeModal}
        >
            Close
        </button>
    );
};

export default CloseModalButton;
