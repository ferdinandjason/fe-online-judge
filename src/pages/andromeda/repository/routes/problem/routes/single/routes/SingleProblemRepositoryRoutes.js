import React from 'react';
import classNames from "classnames";
import {connect} from "react-redux";
import { withRouter } from 'react-router-dom';
import {Classes} from "@blueprintjs/core";
import {IconNames} from "@blueprintjs/icons";

import { DoublePageLayout } from "../../../../../../../../components/layouts";
import { ContentWithMultipleSidebarContainer, ButtonLink } from "../../../../../../../../components";
import {ProblemRepositoryStatementRoutes} from "./statement/routes/ProblemRepositoryStatementRoutes";
import {ProblemRepositoryGradingRoutes} from "./grading/routes/ProblemRepositoryGradingRoutes";
import {PopBreadcrumb, PushBreadcrumb} from "../../../../../../../../modules/redux/breadcrumb";
import {problemActions} from "../../../../../../../corvus/training/routes/problemset/routes/single/modules/problem";

class SingleProblemRepositoryRoutes extends React.Component {
    componentDidMount() {
        const problem = {name:'123'}; // await this.props.onFetchProblem(this.props.match.params.problemId)
        this.props.onPushBreadcrumb(this.props.match.url,problem.name);
    }

    componentWillUnmount() {
        this.props.onPopBreadcrumb(this.props.match.url.replace(/\/+$/, ''));
    }

    render(){
        const contentWithSidebarContainerProps = [
            {
                title:'Statement',
                items:ProblemRepositoryStatementRoutes,
                action: (
                    <ButtonLink to="/repository/problem" className={classNames(Classes.SMALL,IconNames.CHEVRON_LEFT)}>
                        Back
                    </ButtonLink>
                ),
            },
            {
                title:'Grading',
                items:ProblemRepositoryGradingRoutes,
                action: (
                    <ButtonLink to="/repository/problem" className={classNames(Classes.SMALL,IconNames.CHEVRON_LEFT)}>
                        Back
                    </ButtonLink>
                ),
            },
        ];

        return (
            <DoublePageLayout>
                <ContentWithMultipleSidebarContainer sidebars={contentWithSidebarContainerProps}/>
            </DoublePageLayout>
        )
    };
}

function createSingleProblemRepositoryRoutes(problemActions){
    const mapDispatchToProps = {
        onFetchProblem: (problemId) => problemActions.fetchProblem(problemId),
        onPushBreadcrumb: (link,title) => PushBreadcrumb({link,title}),
        onPopBreadcrumb: (link) => PopBreadcrumb({link}),
    };
    return withRouter(connect(undefined,mapDispatchToProps)(SingleProblemRepositoryRoutes))
}

export default createSingleProblemRepositoryRoutes(problemActions);
