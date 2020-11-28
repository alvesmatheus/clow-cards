import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { CARDS } from '../constants/routes';

import { getReadings, getTotalReadings } from '../services/api/ReadingsAPI';

const useReadingListingState = ({ signOut }) => {
    const [readings, setReadings] = useState([]);
    const [totalReadings, setTotalReadings] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [displayedReadings, setDisplayedReadings] = useState(5);

    const history = useHistory();
    const forceSignOut = () => {
        signOut();
        history.push(CARDS);
    };

    useEffect(() => {
        const sorting = { order: 'desc' };

        setIsLoading(true);
        getReadings(sorting, displayedReadings)
            .then((readingsList) => {
                setReadings(readingsList);
                setIsLoading(false);
            })
            .catch(() => forceSignOut());
    }, [displayedReadings]);

    useEffect(() => {
        getTotalReadings()
            .then((readingsCount) => {
                setTotalReadings(readingsCount);
            })
            .catch(() => forceSignOut());
    }, [displayedReadings]);

    const increaseDisplayedReadings = (increment) => {
        setDisplayedReadings((prevState) => prevState + increment);
    };

    return {
        readings,
        totalReadings,
        isLoading,
        displayedReadings,
        increaseDisplayedReadings,
    };
};

export default useReadingListingState;
