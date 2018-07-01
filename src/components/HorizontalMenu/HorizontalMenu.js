import React from 'react'

import { Tab, Tabs } from '@blueprintjs/core';

import './HorizontalMenu.css';

class HorizontalMenu extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : this.props,
        }
    }

    render(){
        // TODO: dynamic selectedTabId based on routes
        const selectedTabId = 'home';
        const homeRoute = this.props.homeRoute;

        return (
            <div className="menubar">
                <div className="menubar__content">
                    <Tabs id="menubar" renderActivePanelOnly selectedTabId={selectedTabId} onChange={this.handleTabChange}>
                        {
                            homeRoute? (
                                <Tab key="home" id="home">
                                    Home
                                </Tab>
                            ): null
                        }
                        {
                            this.props.items.map(item => {
                                return (
                                    <Tab key={item.id} id={item.id}>
                                        {item.title}
                                    </Tab>
                                );
                            })
                        }
                    </Tabs>
                </div>
            </div>
        );
    }

    handleTabChange = (newTabId) => {

    }
}

export default HorizontalMenu;