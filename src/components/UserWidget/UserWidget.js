import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import { Menu, MenuItem, MenuDivider, Popover, Position, Icon } from '@blueprintjs/core';
import classNames from 'classnames';

import { store } from "../../modules/store";

import style from './UserWidget.scss';

export class UserWidget extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            avatarUrl: null,
        };
    }

    static redirectToHome(){
        return (
            <Redirect to={"/"}/>
        )
    }

    static userIsAuthenticated(){
        return store.getState().session.isAuthenticated;
    }

    static getUserName(){
        try {
            return store.getState().session.user.name;
        }
        catch (e) {
            return '...';
        }
    }

    render(){
        if(UserWidget.userIsAuthenticated()){
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
        const menu = (
            <div className={classNames("bp3-navbar-group","bp3-align-right",style.widget_user,"bp3-dark")}>
                {/*<img src={this.state.avatarUrl} alt="user-avatar" className="widget-user__avatar" />*/}
                <Menu className={style.widget_user__menu}>
                    <MenuItem className={style.widget_user__menu_helper} icon="user" text={UserWidget.getUserName()} disabled />
                    <MenuDivider className={style.widget_user__menu_helper} />
                    <MenuItem text="My account" href="/account" />
                    <MenuItem text="Log out" href="/logout"/>
                </Menu>
            </div>
        );

        const popover = (
            <Popover className={style.widget_user__avatar_menu} content={menu} position={Position.BOTTOM_RIGHT} usePortal={false}>
                <div>
                    <span data-key="username" className={style.widget_user__user__username}>
                        {UserWidget.getUserName()}
                    </span>{' '}
                    <Icon icon="chevron-down" />
                </div>
            </Popover>
        );

        const responsivePopover = (
            <Popover className={style.widget_user__burger} content={menu} position={Position.BOTTOM_RIGHT} usePortal={false}>
                <Icon icon="menu" iconSize={Icon.SIZE_LARGE} />
            </Popover>
        );

        return (
            <div className={style.widget_user_wrapper}>
                {popover}
                {responsivePopover}
            </div>
        )
    }

    renderForGuest(){
        return (
            <div className="bp3-navbar-group bp3-align-right widget-user">
                <div className={style.widget_user__link}>
                    <Link data-key="login" to="/login" onClick={this.onClick}>
                        Log In
                    </Link>
                </div>
                <div className={style.widget_user__link}>
                    <Link data-key="register" to="/register" onClick={this.onClick}>
                        Register
                    </Link>
                </div>
            </div>
        );
    }

    onClick = () => {
        this.props.onSpesialRoutesClicked(1);
    }

}