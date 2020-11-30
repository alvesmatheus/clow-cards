import React from 'react';
import { useModal } from 'react-brave-modal';

import './index.css';

import { getCardImageURL } from '../../../../services/api/CardsAPI';

import CardDetailsModal from '../../../Modal/CardDetailsModal';

const CardItem = ({ card, onReading }) => {
    const { showModal } = useModal();

    const showDetails = () => {
        showModal({
            type: 'simple',
            data: <CardDetailsModal card={card} />,
        });
    };

    return (
        <div className='card-item'>
            <img
                alt={card.name}
                key={card.name}
                className={`card-image ${onReading ? 'on-reading' : ''}`}
                src={getCardImageURL(card.image)}
                title={card.name}
                onClick={() => showDetails()}
            />
        </div>
    );
};

export default CardItem;
