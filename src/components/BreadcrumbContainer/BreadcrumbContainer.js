import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import {PopBreadcrumb, PushBreadcrumb} from "../../modules/redux/breadcrumb";

export function withBreadcrumb(breadcrumbTitle) {
    return InnerComponent => {
        class ContainerComponent extends React.Component {
            componentDidMount() {
                this.props.onPushBreadcrumb(this.props.match.url, breadcrumbTitle);
            }

            render() {
                return <InnerComponent location={this.props.location} {...this.props}/>
            }

            componentWillUnmount() {
                this.props.onPopBreadcrumb(this.props.match.url);
            }
        }

        const mapDispatchToProps = {
            onPushBreadcrumb: (link,title) => PushBreadcrumb({link,title}),
            onPopBreadcrumb: (link) => PopBreadcrumb({link})
        };

        return withRouter(connect(undefined,mapDispatchToProps)(ContainerComponent));
    }
}