import React from 'react';

import './index.css';

import useReadingListingState from '../../hooks/useReadingListingState';
import ReadingListingContext from '../../contexts/ReadingListing';

import ReadingList from '../../components/Reading/ReadingList';

const ReadingsListingPage = ({ getUser, signOut }) => {
    const readingListingState = useReadingListingState({
        getUser,
        signOut,
    });

    return (
        <div className='readings-page'>
            <ReadingListingContext.Provider value={readingListingState}>
                <ReadingList getUser={getUser} />
            </ReadingListingContext.Provider>
        </div>
    );
};

export default ReadingsListingPage;
