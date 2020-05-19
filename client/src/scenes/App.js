import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import CardsPage from './CardsPage';
import NavBar from '../components/common/NavBar';

function App() {
    return (
        <div className='app'>
            <BrowserRouter>
                <NavBar />
                <Switch>
                    <Route exact path='/cards'>
                        <CardsPage />
                    </Route>
                    <Route path='*'></Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
