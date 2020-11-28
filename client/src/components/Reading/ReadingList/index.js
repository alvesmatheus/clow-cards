import React, { useContext } from 'react';

import './index.css';

import ReadingListingContext from '../../../contexts/ReadingListing';

import ReadingListHeader from './ReadingListHeader';
import ReadingItem from './ReadingItem';
import LoadingDots from '../../Loading/LoadingDots';
import LoadMoreButton from '../../Button/LoadMoreButton';

const ReadingList = () => {
    const {
        readings,
        totalReadings,
        isLoading,
        displayedReadings,
    } = useContext(ReadingListingContext);

    return (
        <div className='reading-list'>
            <ReadingListHeader />
            {(readings.length > 0 || !isLoading) && (
                <div className='reading-items-wrapper'>
                    {readings.map((reading) => (
                        <ReadingItem key={reading._id} reading={reading} />
                    ))}
                </div>
            )}
            {isLoading && <LoadingDots />}
            {totalReadings > displayedReadings && <LoadMoreButton />}
        </div>
    );
};

export default ReadingList;
