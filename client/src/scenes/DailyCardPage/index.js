import React, { useState, useEffect } from 'react';

import { getDailyCard } from '../../services/api/CardsAPI';

import './index.css';

import DailyCardHeader from '../../components/Card/DailyCardHeader';
import DailyCardRecord from '../../components/Card/DailyCardRecord';

const DailyCardPage = () => {
    const [dailyCard, setDailyCard] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        getDailyCard().then((card) => {
            setDailyCard(card);
            setIsLoading(false);
        });
    }, []);

    return (
        <div className='daily-card-page'>
            <DailyCardHeader />
            {!isLoading && <DailyCardRecord dailyCard={dailyCard} />}
        </div>
    );
};

export default DailyCardPage;
