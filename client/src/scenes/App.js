import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { ModalProvider } from 'react-brave-modal';

import '../constants/colors.css';
import './App.css';

import { CARDS, DAILY, READINGS, SIGNIN, REGISTER } from '../constants/routes';

import useAuth from '../hooks/useAuth';

import NavBar from '../components/NavBar';
import CardListingPage from './CardListingPage';
import DailyCardPage from './DailyCardPage';
import ReadingsPage from './ReadingsPage';
import RegisterPage from './RegisterPage';
import SignInPage from './SignInPage';

const App = () => {
    const auth = useAuth();

    return (
        <div className='app'>
            <BrowserRouter>
                <NavBar isUnsigned={auth.isUnsigned} signOut={auth.signOut} />
                <ModalProvider>
                    <Switch>
                        <Route exact path={CARDS}>
                            <CardListingPage />
                        </Route>
                        <Route exact path={DAILY}>
                            <DailyCardPage />
                        </Route>
                        <Route exact path={READINGS}>
                            <ReadingsPage
                                getUser={auth.getUser}
                                signOut={auth.signOut}
                            />
                        </Route>
                        <Route exact path={SIGNIN}>
                            <SignInPage signIn={auth.signIn} />
                        </Route>
                        <Route exact path={REGISTER}>
                            <RegisterPage register={auth.register} />
                        </Route>
                        <Route path='*'>
                            <Redirect to={CARDS} />
                        </Route>
                    </Switch>
                </ModalProvider>
            </BrowserRouter>
        </div>
    );
};

export default App;
