import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon, Menu, MenuItem, MenuDivider, Popover, Position } from '@blueprintjs/core';

import { MenuItemLink } from '..';

import defaultUser from '../../assets/images/user.png';

import Styles from './UserWidget.scss';


class UserWidget extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            avatar : undefined,
        }
    }

    renderAvatar = () => {
        return (
            <img src={defaultUser} alt="user" className={Styles.USER_WIDGET_AVATAR}/>
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
        console.log(user);
        const menu = (
            <Menu className={Styles.USER_WIDGET_MENU}>
                <MenuItem className={Styles.USER_WIDGET_MENU_HELPER}
                          icon="user"
                          text={user.name}
                />
                <MenuDivider className={Styles.USER_WIDGET_MENU_HELPER}/>
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
                        {user.name}
                    </span>{' '}
                    <Icon icon="chevron-down" style={{color:'white'}}/>
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
            <div style={{display:'flex'}}>
                {this.state.avatar}
                {popover}
                {responsivePopover}
            </div>
        )
    };

    renderForGuest = () => {
        const menu = (
            <Menu className={Styles.USER_WIDGET_MENU}>
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
}

const mapStateToProps = (state) => ({
    user : state.session.user,
});

export default connect(mapStateToProps)(UserWidget);