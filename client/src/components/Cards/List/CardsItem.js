import React from 'react';

import './CardsItem.css';

import { getCardImageURL } from '../../../services/api/CardsAPI';

const CardsItem = ({ card }) => {
    return (
        <div className='cards-item'>
            <img
                alt={card.name}
                key={card.name}
                className='cards-item__img'
                src={getCardImageURL(card.image)}
                title={card.name}
                height='500rem'
            />
            <span className='cards-item__name'>{card.name}</span>
        </div>
    );
};

export default CardsItem;
