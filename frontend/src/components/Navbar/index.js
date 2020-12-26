import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser, FaAngleDoubleRight, FaDoorOpen } from 'react-icons/fa';

import './styles.css';

export default function Navbar() {
    return (
        <nav class="navbar">
            <ul class="navbar-nav">
                <li class="logo">
                    <a href="#" class="nav-link">
                        <span class="link-text logo-text">MYCAD</span>
                        <FaAngleDoubleRight className="navbar-icon" />
                    </a>
                </li>

                <li class="nav-item">
                    <Link class="nav-link" to="/">
                        <FaHome className="navbar-icon" />
                        <span class="link-text">Home</span>
                    </Link>
                </li>

                <li class="nav-item">
                    <Link class="nav-link" to="/person">
                        <FaUser className="navbar-icon" />
                        <span class="link-text">Pessoa</span>
                    </Link>
                </li>

                <li class="nav-item">
                    <Link class="nav-link" to="/person">
                        <FaDoorOpen className="navbar-icon" />
                        <span class="link-text">Sair</span>
                    </Link>
                </li>

            </ul>
        </nav>
    );
}