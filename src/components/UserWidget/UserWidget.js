import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Menu, MenuItem, MenuDivider, Popover, Position } from '@blueprintjs/core';

import { MenuItemLink } from '..';
import { routes } from '../../AppRoutes';
import Styles from './UserWidget.scss';


export class UserWidget extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            avatar : undefined,
        }
    }

    renderAvatar = () => {
        return (
            <img src={'../../assets/images/user.png'} alt="user"/>
        )
    };

    async componentDidMount(){
        if(this.props.user) {
            const avatar = await this.renderAvatar();
            this.setState({avatar})
        }
    }

    async componentDidUpdate(prevProps) {
        if(this.props.user !== prevProps.user){
            await this.componentDidMount();
        }
    }

    render(){
        if(this.props.user) {
            return this.renderForUser(this.props.user);
        } else {
            return this.renderForGuest();
        }
    }



    renderForUser = (user) => {
        const menu = (
            <Menu className={Styles.USER_WIDGET_MENU}>
                <MenuItem className={Styles.USER_WIDGET_MENU_HELPER}
                          icon="user"
                          text={user.username}
                          disabled
                />
                <MenuDivider className={Styles.USER_WIDGET_MENU_HELPER}/>
                {this.renderResponsiveAppRoutes().map(routes => {return routes})}
                <MenuItemLink text="My account" to={`/profile/${user.id}`}/>
                <MenuItemLink text="Log out" to="/logout"/>
            </Menu>
        );

        const popover = (
            <Popover className={Styles.USER_WIDGET_AVATAR_MENU}
                     content={menu}
                     position={Position.BOTTOM_RIGHT}
                     usePortal={false}
            >
                <div>
                    <span className={Styles.USER_WIDGET_USERNAME}>
                        {user.username}
                    </span>{' '}
                    <Icon icon="chevron-down"/>
                </div>
            </Popover>
        );

        const responsivePopover = (
            <Popover className={Styles.USER_WIDGET_BURGER}
                     content={menu}
                     position={Position.BOTTOM_RIGHT}
                     usePortal={false}
            >
                <Icon icon="menu" iconSize={Icon.SIZE_LARGE}/>
            </Popover>
        );

        return (
            <div>
                {this.renderAppRoutes().map(routes => {return routes})}
                {this.state.avatar}
                {popover}
                {responsivePopover}
            </div>
        )
    };

    renderForGuest = () => {
        const menu = (
            <Menu className={Styles.USER_WIDGET_MENU}>
                {this.renderResponsiveAppRoutes().map(routes => {return routes})}
                <MenuItemLink text="Log In" to="/login"/>
                <MenuItemLink text="Register" to="/register"/>
            </Menu>
        );

        const responsivePopover =  (
            <Popover className={Styles.USER_WIDGET_BURGER}
                     content={menu}
                     position={Position.BOTTOM_RIGHT}
                     usePortal={false}
            >
                <Icon icon="menu" iconSize={Icon.SIZE_LARGE}/>
            </Popover>
        );

        const completeMenu = (
            <div className={Styles.USER_WIDGET_LINK_WRAPPER}>
                {this.renderAppRoutes().map(routes => {return routes})}
                <div className={Styles.USER_WIDGET_LINK}>
                    <Link to="/login">
                        Log In
                    </Link>
                </div>
                <div className={Styles.USER_WIDGET_LINK}>
                    <Link to="/register">
                        Register
                    </Link>
                </div>
            </div>
        );

        return (
            <div>
                {completeMenu}
                {responsivePopover}
            </div>
        );
    };

    renderAppRoutes = () => {
        return routes.map(route => {
            return (
                <div className={Styles.USER_WIDGET_NAVBAR_LINK}>
                    <Link to={route.to} key={route.id}>
                        {route.title}
                    </Link>
                </div>
            )
        })
    };

    renderResponsiveAppRoutes = () => {
        return routes.map(route => (
            <MenuItemLink text={route.title} to={route.to}/>
        ))
    }


}