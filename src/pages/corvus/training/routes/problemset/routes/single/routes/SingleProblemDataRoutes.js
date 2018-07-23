import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { PopBreadcrumb, PushBreadcrumb } from "../../../../../../../../modules/redux/breadcrumb";
import { problemActions } from "../modules/problem";

class SingleProblemDataRoutes extends React.Component {
    componentDidMount() {
        const problem = {name:'123'}; // await this.props.onFetchProblem(this.props.match.params.problemId)
        this.props.onPushBreadcrumb(this.props.match.url,problem.name);
    }

    componentWillMount() {
        this.props.onPopBreadcrumb(this.props.match.url.replace(/\/+$/, ''));
    }

    render(){
        return null;
    }
}

function createSingleProblemDataRoutes(problemActions){
    const mapDispatchToProps = {
        onFetchProblem: (problemId) => problemActions.fetchProblem(problemId),
        onPushBreadcrumb: (link,title) => PushBreadcrumb({link,title}),
        onPopBreadcrumb: (link) => PopBreadcrumb({link}),
    };
    return withRouter(connect(undefined,mapDispatchToProps)(SingleProblemDataRoutes))
}

export default createSingleProblemDataRoutes(problemActions);