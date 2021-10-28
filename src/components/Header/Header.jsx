import React from 'react';
import './Header.css';
import logo from '../../assets/fullLogo.svg';

/**
 * Component showing the main Header and navigation bar
 *  @component
 * 
 *  @return {component}
 */
function Header() {
    return (
        <header className="header">
            <a href="*" className='logo'>
                <img src={logo} alt="logo-SportSee" />
            </a>
            <nav>
                <a href="*">Accueil</a>
                <a href="*">Profil</a>
                <a href="*">Réglage</a>
                <a href="*">Communauté</a>
            </nav>
        </header>
    );
}

export default Header;
