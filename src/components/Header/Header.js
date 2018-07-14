import React from 'react';
import classNames from 'classnames';

import { Menubar , UserWidget } from "../../components";

import { routes , spesialRoutes } from '../../AppRoutes';
import styles from './Header.scss';

const logo = require('../../assets/images/logo.png');

export class Header extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            className : '',
        }
    }

    render(){
        return (
            <nav className={classNames("bp3-navbar",styles.header,this.getSpesialRoutesClassName())}>
                <div className={styles.header_wrapper}>
                    <div className={classNames("bp3-navbar-group","bp3-align-left",styles.header,this.getSpesialRoutesClassName())}>
                        <div className={styles.header_heading_wrapper}>
                            <img src={logo} className={styles.header_logo} alt={"logo"}/>
                        </div>

                        <Menubar items={routes} specials={spesialRoutes} onSpesialRoutesClicked={this.onSpesialRoutesClicked}/>
                    </div>
                    <div className="bp3-navbar-group bp3-align-right">
                        <input className="bp3-input" placeholder="Search..." type="text" style={{marginTop:10+'px'}}/>
                        <div style={{marginLeft:30+'px'}}>
                            <UserWidget history={this.props.history} onSpesialRoutesClicked={this.onSpesialRoutesClicked}/>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }

    getSpesialRoutesClassName(){
        return styles[`header_color-${this.state.className}`];
    }

    onSpesialRoutesClicked = (val) => {
        console.log('asd');
        this.setState({
            className : val,
        });
    }
}

export default Header;