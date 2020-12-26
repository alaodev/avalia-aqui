import React from 'react';
import { FaChalkboardTeacher, FaStar, FaSignOutAlt } from 'react-icons/fa';

import logoImg from '../../assets/images/estrelado_logo.png';

import './styles.css';

export default function Sidebar() {
    return(
        <div className="sidebar-container">
            <div className="sidebar-top-content">
                <img 
                    alt="Logo Estrelado"
                    className="sidebar-logo"
                    src={logoImg} 
                />
                <div className="user-info">
                    <span className="user-name">Olá, Fulano</span>
                    <span className="user-registration">20171002802494</span>
                </div>
                <div className="menu-items">
                    <div className="menu-item">
                        <FaChalkboardTeacher className="menu-item-icon"/>
                        <span className="menu-item-title">Professores</span>
                    </div>
                    <div className="menu-item">
                        <FaStar className="menu-item-icon"/>
                        <span className="menu-item-title">Minhas avaliações</span>
                    </div>
                </div>
            </div>
                <div className="sidebar-bottom-content">
                    <div className="menu-item">
                        <FaSignOutAlt className="menu-item-icon"/>
                        <span className="menu-item-title">Sair</span>
                    </div>
                </div>
        </div>
    );
}