import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import CreatePassword from '../../components/CreatePassword';
import Hint from '../../components/Hint';
import LoginAside from '../../components/LoginAside';
import RegisterAside from '../../components/RegisterAside';

import './styles.css';

export default function Authentication() {
    return (
        <div className="auth-container">
            <BrowserRouter>
                <Hint />
                <Switch>
                    <Route exact path="/" component={LoginAside}/>
                    <Route path="/register" component={RegisterAside}/>
                    <Route path="/create-password" component={CreatePassword}/>
                </Switch>
            </BrowserRouter>
        </div>
    );
}