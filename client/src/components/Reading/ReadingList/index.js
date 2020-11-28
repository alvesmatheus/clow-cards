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
            {!isLoading && readings.length == 0 && (
                <div className='no-readings-alert'>
                    <h3 className='no-readings-alert-title'>
                        No readings found.
                    </h3>
                    <span className='no-readings-alert-text'>
                        It's time to see what the future holds for you, don't
                        you think?
                    </span>
                </div>
            )}
            {(!isLoading || readings.length > 0) && (
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
