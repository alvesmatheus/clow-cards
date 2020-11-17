import React, { useContext } from 'react';

import './index.css';

import { createNewReading } from '../../../services/api/ReadingsAPI';

import ReadingListingContext from '../../../contexts/ReadingListing';

const NewReadingButton = () => {
    const { increaseDisplayedReadings } = useContext(ReadingListingContext);

    const onClick = () => {
        createNewReading().then(() => {
            increaseDisplayedReadings(1);
        });
    };

    return (
        <button className='new-reading-button' type='button' onClick={onClick}>
            <i className='fa fa-plus-circle new-reading-icon' />
            New Reading
        </button>
    );
};

export default NewReadingButton;
