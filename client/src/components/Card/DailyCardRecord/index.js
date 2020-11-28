import React from 'react';

import { getCardImageURL } from '../../../services/api/CardsAPI';

import './index.css';

const DailyCardRecord = ({ dailyCard }) => {
    return (
        <div className='daily-card-record'>
            <img
                alt={`Card of the Day: ${dailyCard.name}`}
                className='daily-card-image'
                src={getCardImageURL(dailyCard.image)}
            />
            <div className='daily-card-details'>
                <div className='daily-card-name'>{dailyCard.name}</div>
                <div className='daily-card-info'>
                    <span className='daily-card-info-type'>Sign: </span>
                    {dailyCard.sign}
                </div>
                <div className='daily-card-info'>
                    <span className='daily-card-info-type'>Origin: </span>
                    {dailyCard.origin}
                </div>
                <div className='daily-card-info'>
                    <span className='daily-card-info-type'>Meaning: </span>
                    {dailyCard.meaning}
                </div>
            </div>
        </div>
    );
};

export default DailyCardRecord;
