import React, { useState } from 'react';

import './index.css';

import { getCardImageURL } from '../../../../services/api/CardsAPI';
import { editReading } from '../../../../services/api/ReadingsAPI';

import EditReadingButton from '../../../Button/EditReadingButton';

const formatDate = (date) => {
    const format = {
        weekday: { weekday: 'long' },
        date: {
            month: 'long',
            day: '2-digit',
            year: 'numeric',
        },
        hour: {
            hour12: false,
            hour: '2-digit',
            minute: '2-digit',
        },
    };

    const d = new Date(date);
    const fullDate = new Intl.DateTimeFormat('en', format.date).format(d);
    const weekday = new Intl.DateTimeFormat('en', format.weekday).format(d);
    const hour = new Intl.DateTimeFormat('en', format.hour).format(d);

    return `${fullDate} ~ ${weekday}, ${hour}`;
};

const ReadingItem = ({ reading }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [comments, setComments] = useState(reading.comments);

    const onSave = () => {
        editReading(reading._id, comments);
    };

    return (
        <div className='reading-item'>
            <div className='reading-item-header'>
                <div className='reading-date'>{formatDate(reading.date)}</div>
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
                    />
                ))}
            </div>
        </div>
    );
};

export default ReadingItem;
