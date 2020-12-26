import React, { Fragment } from 'react';

import Hint from '../Hint';
import Input from '../Input';

import logoImg from '../../assets/images/estrelado_logo.png';

import '../../assets/styles/authentication.css';

export default function CreatePassword() {

    return(
        <div className="auth-container">
            <Hint/>
            <div className="aside">
                <img alt="logo" src={logoImg} />
                <form className="aside-form">
                    <h2 className="aside-form-title">
                        Confirme seu cadastro
                    </h2>
                    <Input 
                        value="CILANO FULANO DA SILVA"
                        type="text"
                        disabled="true"
                    />
                    <Input 
                        placeholder="Crie uma senha"
                        type="text"
                    />
                    <Input 
                        placeholder="Repita a senha"
                        type="password"
                    />
                    <div className="buttons-container">
                        <button className="button-primary">CADASTRAR</button>
                    </div>
                </form>
            </div>
        </div>
    );
}