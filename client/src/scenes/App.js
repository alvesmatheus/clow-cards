import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ModalProvider } from 'react-brave-modal';

import '../constants/colors.css';
import './App.css';

import { CARDS, REGISTER, SIGNIN } from '../constants/routes';

import useAuth from '../hooks/useAuth';

import CardListingPage from './CardListingPage';
import NavBar from '../components/NavBar';
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
                        <Route exact path={SIGNIN}>
                            <SignInPage signIn={auth.signIn} />
                        </Route>
                        <Route exact path={REGISTER}>
                            <RegisterPage register={auth.register} />
                        </Route>
                    </Switch>
                </ModalProvider>
            </BrowserRouter>
        </div>
    );
};

export default App;
