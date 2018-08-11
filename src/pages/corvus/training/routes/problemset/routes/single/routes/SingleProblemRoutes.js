import React from 'react';
import classNames from 'classnames'
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import {Classes} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';

import {DoublePageLayout} from "../../../../../../../../components/layouts";
import {ButtonLink, ContentWithSidebarContainer} from "../../../../../../../../components";
import SingleProblemStatementRoutes from "./statement/routes/SingleProblemStatementRoutes";
import SingleProblemSubmitRoutes from "./submit/routes/SingleProblemSubmitRoutes";
import SingleProblemRankRoutes from "./rank/routes/SingleProblemRankRoutes";
import SingleProblemSubmissionRoutes from "./submission/routes/SingleProblemSubmissionRoutes";
import SingleProblemStatisticRoutes from "./statistic/routes/SingleProblemStatisticRoutes";
import {PopBreadcrumb, PushBreadcrumb} from "../../../../../../../../modules/redux/breadcrumb";
import {problemActions} from "../modules/problem";

class SingleProblemRoutes extends React.Component {
    componentDidMount() {
        const problem = {name: '123'}; // await this.props.onFetchProblem(this.props.match.params.problemId)
        this.props.onPushBreadcrumb(this.props.match.url, problem.name);
    }

    componentWillUnmount() {
        this.props.onPopBreadcrumb(this.props.match.url.replace(/\/+$/, ''));
    }

    render() {
        const sidebarItems = [
            {
                id: 'statement',
                titleIcon: 'document',
                title: 'Statement',
                component: SingleProblemStatementRoutes
            },
            {
                id: 'statistic',
                titleIcon: 'doughnut-chart',
                title: 'Statistic',
                component: SingleProblemStatisticRoutes
            },
            {
                id: 'rank',
                titleIcon: 'thumbs-up',
                title: 'Rank',
                component: SingleProblemRankRoutes
            },
            {
                id: 'submit',
                titleIcon: 'document-open',
                title: 'Submit',
                component: SingleProblemSubmitRoutes
            },
            {
                id: 'submission',
                titleIcon: 'manually-entered-data',
                title: 'My Submission',
                component: SingleProblemSubmissionRoutes
            }
        ];

        const contentWithSidebarContainerProps = {
            title: 'Problem',
            items: sidebarItems,
            action: (
                <ButtonLink to="/training/problem" className={classNames(Classes.SMALL, IconNames.CHEVRON_LEFT)}>
                    Back
                </ButtonLink>
            ),
        };

        return (
            <DoublePageLayout>
                <ContentWithSidebarContainer {...contentWithSidebarContainerProps}/>
            </DoublePageLayout>
        )
    }
}

function createSingleProblemRoutes(problemActions) {
    const mapDispatchToProps = {
        onFetchProblem: (problemId) => problemActions.fetchProblem(problemId),
        onPushBreadcrumb: (link, title) => PushBreadcrumb({link, title}),
        onPopBreadcrumb: (link) => PopBreadcrumb({link}),
    };
    return withRouter(connect(undefined, mapDispatchToProps)(SingleProblemRoutes))
}

export default createSingleProblemRoutes(problemActions);
