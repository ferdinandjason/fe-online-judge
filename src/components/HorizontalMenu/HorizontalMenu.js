import React from 'react'
import { Redirect } from 'react-router-dom';

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

    handleTabChange = (newTabId : TabId) => {
        // console.log(newTabId);
        // const {homeRoute , items } = this.state.data;
        // // TODO : navigate to path
        // let newTabItem;
        // if(homeRoute && homeRoute.id === newTabId){
        //     newTabItem = homeRoute;
        // } else {
        //     newTabItem = items.find(item => item.id === newTabId);
        // }
        // if(!newTabItem){ return ; }
        // const path = newTabItem.route.path;

    }
}

export default HorizontalMenu;