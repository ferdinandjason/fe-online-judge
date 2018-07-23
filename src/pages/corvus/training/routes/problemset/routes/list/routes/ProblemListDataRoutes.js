import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { PopBreadcrumb, PushBreadcrumb } from "../../../../../../../../modules/redux/breadcrumb";
import { ProblemListContainer } from "../components/ProblemListContainer/";

class ProblemListDataRoutes extends React.Component {
    componentDidMount() {
        this.props.onPushBreadcrumb(this.props.match.url,'Problem Sets');
    }

    componentWillMount() {
        this.props.onPopBreadcrumb(this.props.match.url);
    }

    render(){
        return (<ProblemListContainer/>);
    }
}

function createProblemListDataRoutes(){
    const mapDispatchToProps = {
        onPushBreadcrumb: (link,title) => PushBreadcrumb({link,title}),
        onPopBreadcrumb: (link) => PopBreadcrumb({link}),
    };
    return withRouter(connect(undefined,mapDispatchToProps)(ProblemListDataRoutes))
}

export default createProblemListDataRoutes();