import React from 'react';

import Input from '../Input';

import logoImg from '../../assets/images/estrelado_logo.png';

export default function CreatePassword() {

    return(
        <div className="aside">
            <img src={logoImg} />
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
    );
}