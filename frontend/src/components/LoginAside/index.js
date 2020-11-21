import React, { useState } from 'react';
import Switch from '@material-ui/core/Switch';

import Input from '../Input';

import logoImg from '../../assets/images/estrelado_logo.png';

import './styles.css';

export default function LoginAside() {
    
    const [state, setState] = useState(false);

    const handleChange = (event) => {
        setState(!state);
    };

    return(
        <div className="aside">
            <img src={logoImg} />
            <form className="aside-form">
                <h2 className="aside-form-title">
                    Faça seu login
                </h2>
                <Input 
                    placeholder="Matrícula"
                    type="text"
                />
                <Input 
                    placeholder="Senha"
                    type="password"
                />
                <div className="password-container">
                    <div className="remember-password">
                        <label>Lembrar senha</label>
                        <Switch
                            checked={state}
                            color="primary"
                            onClick={handleChange}
                            inputProps={{ 'aria-label': 'primary checkbox' }}
                        />
                    </div>
                    <a href="#">Esqueci minha senha</a>
                </div>
                <div className="buttons-container">
                    <button className="button-primary">ENTRAR</button>
                    <button className="button-secondary">CADASTRE-SE</button>
                </div>
            </form>
        </div>
    );
}