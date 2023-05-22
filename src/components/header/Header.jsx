import React from 'react';
import AuthService from "../../services/authService.js";

const Header = ({setPage, children}) => {
    const changeClick = () => setPage('authPage')

    const exitClick = () => {
        AuthService.delete()
        setPage('authPage')
    }

    return (
        <div className="header">
            <button className="button change" onClick={changeClick}>
                изменить
            </button>
            <div className="header__number">
                + {children}
            </div>
            <button className="button out" onClick={exitClick}>
                выйти
            </button>
        </div>
    );
};

export default Header;