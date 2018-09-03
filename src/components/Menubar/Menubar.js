import React from 'react';
import {Link} from 'react-router-dom';
import {Tab, Tabs} from '@blueprintjs/core';

import {HorizontalInnerDivider, Icon8} from "..";

import Styles from './Menubar.scss';

class Menubar extends React.Component {
    getRoutePath = () => {
        return window.location.pathname.split('/')[1];
    };
    getActiveItemId = () => {
        let itemId = '';
        for (let item of this.props.items) {
            if (this.getRoutePath() === item.to.slice(1)) {
                itemId = item.id;
                return itemId;
            }
        }
        return 'home';
    };

    render() {
        const selectedTabId = this.getActiveItemId();
        return (
            <div className={Styles.MENUBAR}>
                <HorizontalInnerDivider style={{marginTop: '0'}}/>
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
                                            <div style={{height: '32px'}}>
                                                <Icon8 icon={item.icon} size={32}/>
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
}

export default Menubar;