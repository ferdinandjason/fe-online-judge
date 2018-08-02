import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';

import { Sidebar, ContentWithMultipleSidebar } from '..';

const SLASH = '/';

function resolveURL(parentPath,childPath) {
    const actualChildPath = childPath === '~' ? '':childPath;
    return (parentPath+SLASH+actualChildPath);
}

class ContentWithMultipleSidebarContainer extends React.Component {
    render() {
        return (
            <ContentWithMultipleSidebar
                multisidebar={this.renderSidebar()}
                content={this.renderContent()}
            />
        )
    }

    renderSidebar = () => {
        return this.props.sidebars.map(sidebar => {
            const sidebarItems = sidebar.items.map(
                item => (
                    {
                        id: item.id,
                        titleIcon: item.titleIcon,
                        title: item.title,
                        route: item.route,
                    }
                )
            );
            return (
                <Sidebar
                    key={sidebar.title}
                    title={sidebar.title}
                    action={sidebar.action}
                    activeItemId={this.getActiveItemId()}
                    items={sidebarItems}
                    onItemClick={this.onItemClick}
                />
            )
        });
    };

    renderContent = () => {
        const route = this.props.sidebars.map(sidebar => {
            return sidebar.items.map(item => {
                const props = {
                    exact: item.id === '~',
                    path: resolveURL(this.props.match.url,item.id),
                    component: item.component,
                };
                return <Route key={item.id} {...props} />
            });

        });

        const redirect = this.props.sidebars[0].items[0].id !== '~' && (
            <Redirect exact from={this.props.match.url} to={resolveURL(this.props.match.url,this.props.sidebars[0].items[0].id)} />
        );

        return (
            <div>
                {this.props.contentHeader}
                <Switch>
                    {redirect}
                    {route}
                </Switch>
            </div>
        )
    };

    onItemClick = (itemId) => {
        return this.props.history.push(resolveURL(this.props.match.url, itemId));
    };

    getActiveItemId = () => {
        if (this.props.location.pathname === this.props.match.url) {
            return '~';
        }

        const currentPath = this.props.location.pathname + SLASH;
        const nextSlashPos = currentPath.indexOf(SLASH, this.props.match.url.length + 1);
        return currentPath.substring(this.props.match.url.length + 1, nextSlashPos);
    };
}

function createContentWithMultipleSidebarContainer() {
    return ContentWithMultipleSidebarContainer;
}

export default withRouter(createContentWithMultipleSidebarContainer());