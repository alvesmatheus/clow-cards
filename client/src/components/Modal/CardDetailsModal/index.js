import React from 'react';

import './index.css';

import { getCardImageURL } from '../../../services/api/CardsAPI';

const CardDetailsModal = ({ card }) => {
    return (
        <div className='card-details-modal'>
            <div className='modal-header'>{card.name}</div>
            <div className='modal-body'>
                <div className='card-image-wrapper'>
                    <img
                        alt={card.name}
                        className='card-image'
                        src={getCardImageURL(card.image)}
                        title={card.name}
                    />
                </div>
                <div className='card-details'>
                    <div className='card-info'>
                        <span className='card-info-type'>Sign: </span>
                        {card.sign}
                    </div>
                    <div className='card-info'>
                        <span className='card-info-type'>Origin: </span>
                        {card.origin}
                    </div>
                    <div className='card-info'>
                        <span className='card-info-type'>Meaning: </span>
                        {card.meaning}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetailsModal;
