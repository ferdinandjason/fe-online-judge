import React from 'react';
import { withRouter } from 'react-router-dom';

import { DoublePageLayout } from "../../../../../../../../components/layouts";
import {ContentWithSidebarContainer } from "../../../../../../../../components";
import SingleProblemStatementRoutes from "./statement/routes/SingleProblemStatementRoutes";
import SingleProblemSubmitRoutes from "./submit/routes/SingleProblemSubmitRoutes";
import SingleProblemRankRoutes from "./rank/routes/SingleProblemRankRoutes";
import {PushBreadcrumb,PopBreadcrumb} from "../../../../../../../../modules/redux/breadcrumb";
import {connect} from "react-redux";
import {problemActions} from "../modules/problem";

class SingleProblemRoutes extends React.Component {
    componentDidMount() {
        const problem = {name:'123'}; // await this.props.onFetchProblem(this.props.match.params.problemId)
        this.props.onPushBreadcrumb(this.props.match.url,problem.name);
    }

    componentWillUnmount() {
        this.props.onPopBreadcrumb(this.props.match.url.replace(/\/+$/, ''));
    }

    render(){
        const sidebarItems = [
            {
                id:'statement',
                titleIcon:'document',
                title:'Statement',
                component:SingleProblemStatementRoutes
            },
            {
                id:'submit',
                titleIcon:'document-open',
                title:'Submit',
                component:SingleProblemSubmitRoutes
            },
            {
                id:'rank',
                titleIcon:'thumbs-up',
                title:'Rank',
                component:SingleProblemRankRoutes
            },
        ];

        const contentWithSidebarContainerProps = {
            title: 'Problem',
            items: sidebarItems,
        };

        return (
            <DoublePageLayout>
                <ContentWithSidebarContainer {...contentWithSidebarContainerProps}/>
            </DoublePageLayout>
        )
    }
}

function createSingleProblemRoutes(problemActions){
    const mapDispatchToProps = {
        onFetchProblem: (problemId) => problemActions.fetchProblem(problemId),
        onPushBreadcrumb: (link,title) => PushBreadcrumb({link,title}),
        onPopBreadcrumb: (link) => PopBreadcrumb({link}),
    };
    return withRouter(connect(undefined,mapDispatchToProps)(SingleProblemRoutes))
}

export default createSingleProblemRoutes(problemActions);