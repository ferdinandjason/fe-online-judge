import React from 'react';
import { Link } from 'react-router-dom';
import { Tab, Tabs } from '@blueprintjs/core';

import styles from './Menubar.scss';

class Menubar extends React.Component{
    render(){
        return (
            <Tabs id={"menubar"} renderActiveTabPanelOnly large={true} className={styles.menubar}>
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
}

export default Menubar;