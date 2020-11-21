import React from 'react';
import Link from 'react-router-dom/Link';

import Input from '../Input';

import logoImg from '../../assets/images/estrelado_logo.png';

export default function RegisterAside() {

    return(
        <div className="aside">
            <img src={logoImg} />
            <form className="aside-form">
                <h2 className="aside-form-title">
                    Faça seu cadastro
                </h2>
                <Input 
                    placeholder="Matrícula do SOL"
                    type="text"
                />
                <Input 
                    placeholder="Senha do SOL"
                    type="password"
                />
                <div className="buttons-container">
                    <Link to="/create-password">
                        <button className="button-primary">VALIDAR</button>
                    </Link>
                    <Link to="/">
                        <button className="button-secondary">JÁ TENHO UM LOGIN</button>
                    </Link>
                </div>
            </form>
        </div>
    );
}