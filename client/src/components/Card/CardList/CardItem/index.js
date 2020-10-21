import React from 'react';

import './index.css';

import { getCardImageURL } from '../../../../services/api/CardsAPI';

const CardItem = ({ card }) => {
    return (
        <div className='card-item'>
            <img
                alt={card.name}
                key={card.name}
                className='card-image'
                src={getCardImageURL(card.image)}
                title={card.name}
            />
        </div>
    );
};

export default CardItem;
