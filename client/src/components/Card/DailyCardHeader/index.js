import React from 'react';

import { formatTodayDate } from '../../../utils/dateFormat';

import './index.css';

const DailyCardHeader = () => {
    return (
        <div className='daily-card-header'>
            <h1 className='daily-card-title'>Card of the Day</h1>
            <h2 className='daily-card-date'>{formatTodayDate()}</h2>
        </div>
    );
};

export default DailyCardHeader;
