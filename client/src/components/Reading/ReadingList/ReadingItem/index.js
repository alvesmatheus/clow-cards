import React, { useState } from 'react';
import { useModal } from 'react-brave-modal';

import './index.css';

import { getCardImageURL } from '../../../../services/api/CardsAPI';
import { editReading } from '../../../../services/api/ReadingsAPI';
import { formatDatetime } from '../../../../utils/dateFormat';

import EditReadingButton from '../../../Button/EditReadingButton';
import CardDetailsModal from '../../../Modal/CardDetailsModal';

const ReadingItem = ({ reading }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [comments, setComments] = useState(reading.comments);
    const { showModal } = useModal();

    const onSave = () => {
        editReading(reading._id, comments);
    };

    const showCardDetails = (card) => {
        showModal({
            type: 'simple',
            data: <CardDetailsModal card={card} />,
        });
    };

    return (
        <div className='reading-item'>
            <div className='reading-item-header'>
                <div className='reading-date'>
                    {formatDatetime(reading.date)}
                </div>
                <EditReadingButton
                    isEditing={isEditing}
                    setIsEditing={setIsEditing}
                    onSave={onSave}
                />
            </div>
            <div className='reading-comments-title'>
                What were your thoughts?
            </div>
            {isEditing ? (
                <textarea
                    className='edit-reading-input'
                    onChange={(e) => setComments(e.target.value)}
                >
                    {comments || ''}
                </textarea>
            ) : (
                <div className='reading-comments'>
                    {comments || 'Nothing yet.'}
                </div>
            )}
            <div className='reading-cards-wrapper'>
                {reading.cards.map((card) => (
                    <img
                        alt={card.name}
                        key={`${reading._id}-${card.name}`}
                        className='reading-card-image'
                        src={getCardImageURL(card.image)}
                        title={card.name}
                        onClick={() => showCardDetails(card)}
                    />
                ))}
            </div>
        </div>
    );
};

export default ReadingItem;
