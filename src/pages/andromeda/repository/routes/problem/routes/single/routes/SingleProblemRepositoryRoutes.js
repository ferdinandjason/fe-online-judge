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
import {problemRepositoryActions} from "../modules/problem";

class SingleProblemRepositoryRoutes extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            problem : null,
        }
    }

    componentDidMount() {
        this.props.onFetchProblem(this.props.match.params.problemId)
            .then((problem) => {
                this.setState({problem});
                this.props.onPushBreadcrumb(this.props.match.url,problem.title);
            });
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

function createSingleProblemRepositoryRoutes(problemRepositoryActions){
    const mapDispatchToProps = {
        onFetchProblem: (problemId) => problemRepositoryActions.fetchProblem(problemId),
        onPushBreadcrumb: (link,title) => PushBreadcrumb({link,title}),
        onPopBreadcrumb: (link) => PopBreadcrumb({link}),
    };
    return withRouter(connect(undefined,mapDispatchToProps)(SingleProblemRepositoryRoutes))
}

export default createSingleProblemRepositoryRoutes(problemRepositoryActions);
