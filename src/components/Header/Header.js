import React from 'react';
import classNames from 'classnames';

import { Menubar , UserWidget } from "../../components";

import routes from '../../AppRoutes';
import styles from './Header.scss';

const logo = require('../../assets/images/logo.png');

export class Header extends React.Component {
    render(){
        return (
            <nav className={classNames("bp3-navbar",styles.header)}>
                <div className={styles.header_wrapper}>
                    <div className={classNames("bp3-navbar-group","bp3-align-left",styles.header)}>
                        <div className={styles.header_heading_wrapper}>
                            <img src={logo} className={styles.header_logo} alt={"logo"}/>
                        </div>

                        <Menubar items={routes}/>
                    </div>
                    <div className="bp3-navbar-group bp3-align-right">
                        <input className="bp3-input" placeholder="Search..." type="text" style={{marginTop:10+'px'}}/>
                        <div style={{marginLeft:30+'px'}}>
                            <UserWidget/>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Header;