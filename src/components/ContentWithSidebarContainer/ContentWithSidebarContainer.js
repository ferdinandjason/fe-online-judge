import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, withRouter } from 'react-router-dom';
import { push } from 'react-router-redux';

import { Sidebar, ContentWithSidebar } from '..';

const SLASH = '/';

function resolveURL(parentPath,childPath) {
    const actualChildPath = childPath === '~' ? '':childPath;
    return (parentPath+SLASH+actualChildPath);
}

class ContentWithSidebarContainer extends React.Component {
    render() {
        return (
            <ContentWithSidebar
                sidebar={this.renderSidebar()}
                content={this.renderContent()}
            />
        )
    }

    renderSidebar = () => {
        const sidebarItems = this.props.items.map(
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
                title={this.props.title}
                action={this.props.action}
                activeItemId={this.getActiveItemId()}
                items={sidebarItems}
                onItemClick={this.onItemClick}
            />
        )
    };

    renderContent = () => {
         const route = this.props.items.map(item => {
             const props = {
                 exact: item.id === '~',
                 path: resolveURL(this.props.match.url,item.id),
                 component: item.component,
             };
             return <Route key={item.id} {...props} />
         });

         const redirect = this.props.items[0].id !== '~' && (
             <Redirect exact from={this.props.match.url} to={resolveURL(this.props.match.url,this.props.items[0].id)} />
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

function createContentWithSidebarContainer() {
    return ContentWithSidebarContainer;
}

export default withRouter(createContentWithSidebarContainer());