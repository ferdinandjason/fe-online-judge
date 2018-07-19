import React from 'react';
import { Link } from 'react-router-dom';
import { Alignment, InputGroup, Navbar, NavbarGroup, NavbarHeading } from '@blueprintjs/core';

import { APP_CONFIG } from '../../config';
import { UserWidget } from "..";

import Styles from './Header.scss';

export class Header extends React.Component {
    render(){
        return (
            <Navbar className={Styles.HEADER_NAVBAR}>
                <div className={Styles.HEADER_WRAPPER}>
                    <NavbarGroup align={Alignment.LEFT} className={Styles.HEADER_GROUP}>
                        <NavbarHeading className={Styles.HEADER_HEADING}>
                            <Link to={"/"}>
                                { APP_CONFIG.name }
                            </Link>
                        </NavbarHeading>
                        <div className={Styles.HEADER_SEARCH}>
                            <InputGroup
                                type="search"
                                leftIcon="search"
                                placeholder="Search"
                                className={Styles.HEADER_SEARCH_WRAPPER}
                            />
                        </div>
                    </NavbarGroup>
                    <NavbarGroup align={Alignment.RIGHT} className={Styles.HEADER_GROUP}>
                        <UserWidget/>
                    </NavbarGroup>
                </div>
            </Navbar>
        )
    }
};