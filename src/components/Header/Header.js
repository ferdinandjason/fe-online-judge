import React from 'react';
import { Link } from 'react-router-dom';

import { UserProfile } from '../UserProfile/UserProfile';

import './Header.css';

const logo = require('../../assets/images/logo-grayscale.png');

class Header extends React.Component {
    render(){
        return (
            <nav className="pt-navbar header">
                <div className="header__wrapper">
                    <div className="pt-navbar-group pt-align-left">
                        <div>
                            <Link to="/">
                                <img src={logo} alt="logo" className="header__logo" />
                            </Link>
                        </div>
                        <div className="pt-navbar-heading header__title">MOE</div>
                        <span className="pt-navbar-divider"/>
                        <div className="header__subtitle">MOE Online Judge</div>
                    </div>
                    <UserProfile user={null}/>
                </div>
            </nav>
        );
    }
}

export default Header;
