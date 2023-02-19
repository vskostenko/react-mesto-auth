import React from 'react';
import logo from '../images/Vector.svg';
import { Link, useLocation } from 'react-router-dom';

function Header(props) {
    const location = useLocation();
    return (
        <header className="header">
            <img className="header__logo" src={logo} alt="место"/>
            <div className='header__profile'>
            <p className='header__email'>{props.isLoggedIn && props.email}</p>
            {props.isLoggedIn ? (
                <Link to="/sign-in" className="header__link" onClick={props.onSignOut}>Выйти</Link>
            ) : ( location.pathname === "/sign-in" 
                ? <Link to="/sign-up" className="header__link">Регистрация</Link>
                : <Link to="/sign-in" className="header__link">Войти</Link>
                )
            }
            </div>
        </header>
    )
}

export default Header;