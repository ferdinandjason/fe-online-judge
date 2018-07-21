import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Icon, Tab, Tabs } from '@blueprintjs/core';

import { HorizontalDivider } from "..";

import Styles from './Menubar.scss';

class Menubar extends React.Component{
    render(){
        const selectedTabId = this.getActiveItemId();
        return (
            <div className={Styles.MENUBAR}>
                <HorizontalDivider style={{marginTop:'0'}}/>
                <Tabs id="menubar"
                      selectedTabId={selectedTabId}
                      className={Styles.MENUBAR_WRAPPER}
                      renderActiveTabPanelOnly
                >
                    {
                        this.props.items.map(item => {
                           return (
                               <Tab key={item.id} id={item.id} className={Styles.MENUBAR_TABS}>
                                   <Link to={item.to}>
                                       <div>
                                           <div style={{height:'18px'}}>
                                               <Icon icon={item.icon} iconSize={20}/>
                                           </div>
                                           {item.title}
                                       </div>
                                   </Link>
                               </Tab>
                           );
                        })
                    }
                </Tabs>
            </div>
        )
    }

    getRoutePath = () => {
        return window.location.pathname.split('/')[1];
    };

    getActiveItemId = () => {
        let itemId = '';
        for(let item of this.props.items){
            if(this.getRoutePath() === item.to.slice(1)){
                itemId = item.id;
                return itemId;
            }
        }
    };
}

Menubar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    specials: PropTypes.arrayOf(PropTypes.object),
};

export default Menubar;