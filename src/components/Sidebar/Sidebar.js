import React from 'react';
import classNames from 'classnames';
import { Icon, Tabs, Tab, Popover, Position } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';

import { CardContainer } from "..";

import Styles from './Sidebar.scss';


class Sidebar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isResponsivePopoverOpen : false,
        }
    }

    render(){
        const { title, action, activeItemId, items } = this.props;

        const tab = items.map(item => {
            const titleIcon = item.titleIcon && <Icon icon={item.titleIcon}/>;
            const icon = item.id === activeItemId && (<Icon icon={IconNames.CHEVRON_RIGHT} className={Styles.CARD_SIDEBAR_ARROW}/>)
            return (
                <Tab key={item.id} id={item.id}>
                    <span>
                        {titleIcon}
                        {titleIcon && <span>&nbsp;&nbsp;</span>}
                        {item.title}
                    </span>
                    {icon}
                </Tab>
            )
        });

        const tabsContainer = (
            <Tabs
                id="sidebar"
                selectedTabId={activeItemId}
                onChange={this.onResponsiveItemClick}
                vertical
                renderActiveTabPanelOnly
            >
                {tab}
            </Tabs>
        );
        
        const card = (
            <CardContainer
                title={title}
                action={action}
                className={classNames(Styles.CARD_SIDEBAR,Styles.CARD_SIDEBAR_FULL)}

            >
                {tabsContainer}
            </CardContainer>
        );

        const responsiveMenu = (
            <Popover
                className={classNames(Styles.CARD_SIDEBAR,Styles.CARD_SIDEBAR_RESPONSIVE)}
                content={tabsContainer}
                position={Position.BOTTOM_LEFT}
                isOpen={this.state.isResponsivePopoverOpen}
                onInteraction={this.onResponsivePopoverInteraction}
                usePortal={false}
            >
                <div>
                    <p className={Styles.CARD_SIDEBAR_RESPONSIVE_MENU}>
                        <Icon icon={IconNames.LIST} iconSize={Icon.SIZE_LARGE} />&nbsp;<small>{title}</small>
                    </p>
                </div>
            </Popover>
        );

        return (
            <div>
                {card}
                {responsiveMenu}
            </div>
        )
    }

    onResponsivePopoverInteraction = (state) => {
        this.setState({isResponsivePopoverOpen:state})
    };

    onResponsiveItemClick = (parent,itemId) => {
        this.props.onItemClick(parent,itemId);
        setTimeout( ()=> {
            this.setState({isResponsivePopoverOpen: false})
        },250);
    };
}

export default Sidebar;