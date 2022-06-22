import React from 'react';
import logo from '../images/header__logo.svg';

function Header() {
    return (
        <header className="header page__section">
            <img className="header__logo" src={logo} alt="Лого"/>  
        </header>
    );
  }

  export default Header;