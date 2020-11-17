import React, { useContext } from 'react';

import './index.css';

import ReadingListingContext from '../../../contexts/ReadingListing';

const LoadMoreButton = () => {
    const { increaseDisplayedReadings } = useContext(ReadingListingContext);

    const onClick = () => {
        increaseDisplayedReadings(5);
    };

    return (
        <button className='load-more-button' type='button' onClick={onClick}>
            Load More
        </button>
    );
};

export default LoadMoreButton;
