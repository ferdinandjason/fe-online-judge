import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Tab, Tabs } from '@blueprintjs/core';

import styles from './Menubar.scss';

export class Menubar extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            code : 1,
        }
        this.props.onSpesialRoutesClicked(this.getSpecialClassName());
    }

    render(){
        const selectedTabId = this.getActiveItemId();
        return (
            <Tabs id={"menubar"} renderActiveTabPanelOnly large={true} className={styles.menubar+' '+styles[`menubar_color-${this.getSpecialClassName()}`]} selectedTabId={selectedTabId} onChange={this.handleOnChange}>
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
                {
                    this.props.specials.map(special => {
                        return (
                            <Tab key={special.id} id={special.id} className={styles.menubar_tabs}>
                                <Link to={special.route.path}>
                                    {special.title}
                                </Link>
                            </Tab>
                        )
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
        for(let item of this.props.specials){
            if(this.getRoutePath() === item.route.path.slice(1)){
                itemId = item.id;
                return itemId;
            }
        }
        return 'home';
    };

    getSpecialClassName = () => {
        const activeItemId = this.getActiveItemId();
        for(let item of this.props.specials){
            if(item.id === activeItemId){
                return item.className;
            }
        }
        return '1';
    };

    handleOnChange = (event) => {
        this.props.onSpesialRoutesClicked(this.getSpecialClassName());
    }
}

Menubar.propTypes = {
    items: PropTypes.arrayOf(PropTypes.object),
    specials: PropTypes.arrayOf(PropTypes.object),
};

export default Menubar;