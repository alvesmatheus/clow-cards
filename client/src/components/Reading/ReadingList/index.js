import React, { useContext } from 'react';

import './index.css';

import ReadingListingContext from '../../../contexts/ReadingListing';

import LoadMoreButton from '../../Button/LoadMoreButton';
import ReadingListHeader from './ReadingListHeader';
import ReadingItem from './ReadingItem';

const ReadingList = () => {
    const { readings, totalReadings, displayedReadings } = useContext(
        ReadingListingContext
    );

    return (
        <div className='reading-list'>
            <ReadingListHeader />
            <div className='reading-items-wrapper'>
                {readings.map((reading) => (
                    <ReadingItem key={reading._id} reading={reading} />
                ))}
            </div>
            {totalReadings > displayedReadings && <LoadMoreButton />}
        </div>
    );
};

export default ReadingList;
