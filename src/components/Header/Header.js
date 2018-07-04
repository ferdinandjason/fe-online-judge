import React from 'react';

import Menubar from '../Menubar/Menubar';
import UserWidget from '../UserWidget/UserWidget';

import routes from '../../AppRoutes';
import styles from './Header.scss';

const logo = require('../../assets/images/logo.png');

class Header extends React.Component {
    render(){
        return (
            <nav className={"pt-navbar "+styles.header}>
                <div className={styles.header_wrapper}>
                    <div className={"pt-navbar-group pt-align-left "+styles.header}>
                        <div className={styles.header_heading_wrapper}>
                            <img src={logo} className={styles.header_logo} alt={"logo"}/>
                        </div>

                        <Menubar items={routes}/>
                    </div>
                    <div className="pt-navbar-group pt-align-right">
                        <input className="pt-input" placeholder="Search..." type="text" style={{marginTop:10+'px'}}/>
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