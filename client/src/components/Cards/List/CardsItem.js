import React from 'react';

import { getCardImageURL } from '../../../services/api/CardsAPI';

import './CardsItem.css';

const CardsItem = (props) => {
    return (
        <div className='cards-item'>
            <img
                alt={props.card.name}
                key={props.card.name}
                className='cards-item__img'
                src={getCardImageURL(props.card.image)}
                title={props.card.name}
                height='500rem'
            />
            <span className='cards-item__name'>{props.card.name}</span>
        </div>
    );
};

export default CardsItem;
