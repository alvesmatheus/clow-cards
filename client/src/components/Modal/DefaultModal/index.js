import React from 'react';

import './index.css';

import CloseModalButton from '../../Button/CloseModalButton';

const DefaultModal = ({ headerText, bodyText, closeModal }) => {
    return (
        <div className='default-modal'>
            <div className='default-modal-header'>{headerText}</div>
            <div className='default-modal-body'>
                <div className='default-modal-text'>{bodyText}</div>
                <CloseModalButton closeModal={closeModal} />
            </div>
        </div>
    );
};

export default DefaultModal;
