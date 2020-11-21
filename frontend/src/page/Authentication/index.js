import React from 'react';

import CreatePassword from '../../components/CreatePassword';
import Hint from '../../components/Hint';
import LoginAside from '../../components/LoginAside';
import RegisterAside from '../../components/RegisterAside';

import './styles.css';

export default function Authentication() {
    return (
        <div className="auth-container">
            <Hint />
            {/* <LoginAside/> */}
            {/* <RegisterAside /> */}
            <CreatePassword />
        </div>
    );
}