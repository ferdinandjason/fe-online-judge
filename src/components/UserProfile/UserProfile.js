import React from 'react';
import { Link } from 'react-router-dom';

import { Menu , MenuItem , MenuDivider } from '@blueprintjs/core';

import './UserProfile.css';

export class UserProfile extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            avatarUrl : null,
        };
    }

    userIsAuthenticated(){
        // TODO: get Session from Laravel
        return false;
    }

    render(){
        if(this.userIsAuthenticated()){
            this.renderUserAvatar();
            return this.renderForUser();
        } else {
            return this.renderForGuest();
        }
    }

    renderUserAvatar(){
        // TODO : get avatarUrl from Laravel database strorage;
        const avatarUrl = '../../../assets/images/user.png';
        this.setState({avatarUrl});
    }

    renderForUser(){
        // TODO : get username from Laravel database storage;
        return (
            <div className="pt-navbar-group pt-align-right">
                <img src={this.state.avatarUrl} alt="user-avatar" className="widget-user__avatar" />
                <Menu className="widget-user__menu">
                    <MenuItem className="widget-user__menu-helper" icon="user" text="user.username" disabled />
                    <MenuDivider className="widget-user__menu-helper" />
                    <MenuItem text="My account" href="/account" />
                    <MenuItem text="Log out" href="/logout" />
                </Menu>
            </div>
        );
    }

    renderForGuest(){
        return (
            <div className="pt-navbar-group pt-align-right">
                <div className="widget-user__link">
                    <Link data-key="login" to="/login">
                        Log in
                    </Link>
                </div>
                <div className="widget-user__link">
                    <Link data-key="register" to="/register">
                        Register
                    </Link>
                </div>
            </div>
        );
    }
}