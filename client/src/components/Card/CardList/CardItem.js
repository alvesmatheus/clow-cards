import React from 'react';

import { getCardImageURL } from '../../../services/api/CardsAPI';

const CardItem = ({ card }) => {
    return (
        <div className='card-item'>
            <img
                alt={card.name}
                key={card.name}
                className='card-item__img'
                src={getCardImageURL(card.image)}
                title={card.name}
            />
        </div>
    );
};

export default CardItem;
