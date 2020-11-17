import React from 'react';

import './index.css';

import NewReadingButton from '../../../Button/NewReadingButton';

const ReadingListHeader = () => {
    return (
        <div className='reading-list-header'>
            <h1 className='reading-list-title'>Your Readings</h1>
            <NewReadingButton />
        </div>
    );
};

export default ReadingListHeader;
