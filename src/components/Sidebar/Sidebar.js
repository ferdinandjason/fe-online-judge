import React from 'react';
import classNames from 'classnames';
import {Button, Icon, Popover, Position, Tab, Tabs} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';

import {CardContainer} from "..";

import Styles from './Sidebar.scss';


class Sidebar extends React.Component {
    onResponsivePopoverInteraction = (state) => {
        this.setState({isResponsivePopoverOpen: state})
    };

    onResponsiveItemClick = (parent, itemId) => {
        this.props.onItemClick(parent, itemId);
        setTimeout(() => {
            this.setState({isResponsivePopoverOpen: false})
        }, 250);
    };

    constructor(props) {
        super(props);
        this.state = {
            isResponsivePopoverOpen: false,
            isDismissed: false,
            tabClass: Styles.CARD_SIDEBAR_SHOW,
        }
    }

    handleClickDismissable = (event) => {
        event.preventDefault();
        if (this.state.isDismissed){
            this.setState({ tabClass : Styles.CARD_SIDEBAR_SHOW, isDismissed : false });
        } else {
            this.setState({ tabClass : Styles.CARD_SIDEBAR_DISMISS, isDismissed : true });
        }
    };

    render() {
        const {title, activeItemId, items} = this.props;
        const {isResponsivePopoverOpen, isDismissed, tabClass} = this.state;

        const iconDismissable = (isDismissed) ? IconNames.PLUS : IconNames.MINUS ;

        const dismissableButton = (
            <Button
                minimal={true}
                icon={iconDismissable}
                onClick={this.handleClickDismissable}
            />
        );

        const tab = items.map(item => {
            const titleIcon = item.titleIcon && <Icon icon={item.titleIcon}/>;
            const icon = ((item.id === activeItemId) && (
                <Icon icon={IconNames.CHEVRON_RIGHT} className={Styles.CARD_SIDEBAR_ARROW}/>));
            return (
                <Tab key={item.id} id={item.id} className={tabClass}>
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
                action={dismissableButton}
                className={classNames(Styles.CARD_SIDEBAR, Styles.CARD_SIDEBAR_FULL)}
            >
                {tabsContainer}
            </CardContainer>
        );

        const responsiveMenu = (
            <Popover
                className={classNames(Styles.CARD_SIDEBAR, Styles.CARD_SIDEBAR_RESPONSIVE)}
                content={tabsContainer}
                position={Position.BOTTOM_LEFT}
                isOpen={isResponsivePopoverOpen}
                onInteraction={this.onResponsivePopoverInteraction}
                usePortal={false}
            >
                <div>
                    <p className={Styles.CARD_SIDEBAR_RESPONSIVE_MENU}>
                        <Icon icon={IconNames.LIST} iconSize={Icon.SIZE_LARGE}/>&nbsp;
                        <small>{title}</small>
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
}

export default Sidebar;