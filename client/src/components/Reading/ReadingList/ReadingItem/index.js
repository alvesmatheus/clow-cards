import React, { useState } from 'react';

import './index.css';

import { editReading } from '../../../../services/api/ReadingsAPI';
import { formatDatetime } from '../../../../utils/dateFormat';

import EditReadingButton from '../../../Button/EditReadingButton';
import CardItem from '../../../Card/CardList/CardItem';

const ReadingItem = ({ reading }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [comments, setComments] = useState(reading.comments);

    const onSave = () => {
        editReading(reading._id, comments);
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
                    <CardItem
                        key={`${reading._id}-${card.name}`}
                        card={card}
                        onReading
                    />
                ))}
            </div>
        </div>
    );
};

export default ReadingItem;
