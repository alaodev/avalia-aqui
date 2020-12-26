import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import CreatePassword from './components/CreatePassword';
import LoginAside from './components/LoginAside';
import RegisterAside from './components/RegisterAside';
import TeacherList from './page/TeacherList';

export default function Routes() {
    return (
        <BrowserRouter>
          <Route exact path="/" component={LoginAside}/>
          <Route path="/register" component={RegisterAside}/>
          <Route path="/create-password" component={CreatePassword}/>
          <Route path="/teacher-list" component={TeacherList}/>
        </BrowserRouter>
    );
}