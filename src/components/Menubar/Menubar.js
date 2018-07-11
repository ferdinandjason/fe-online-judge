import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Tab, Tabs } from '@blueprintjs/core';

import styles from './Menubar.scss';

export class Menubar extends React.Component{
    render(){
        const selectedTabId = this.getActiveItemId();
        return (
            <Tabs id={"menubar"} renderActiveTabPanelOnly large={true} className={styles.menubar} selectedTabId={selectedTabId}>
                {
                    this.props.items.map(item => {
                       return (
                           <Tab key={item.id} id={item.id} className={styles.menubar_tabs}>
                               <Link to={item.route.path}>
                                   {item.title}
                               </Link>
                           </Tab>
                       );
                    })
                }
            </Tabs>
        )
    }

    getRoutePath = () => {
        return window.location.pathname.split('/')[1];
    };

    getActiveItemId = () => {
        let itemId = '';
        for(let item of this.props.items){
            if(this.getRoutePath() === item.route.path.slice(1)){
                itemId = item.id;
                return itemId;
            }
        }
        return 'home';
    }
}

Menubar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object)
};

export default Menubar;