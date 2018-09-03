import React from 'react';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';

import {DoublePageLayout} from "../../../../../../../../components/layouts";
import {ContentWithMultipleSidebarContainer} from "../../../../../../../../components";
import {createProblemRepositoryStatementRoutes} from "./statement/routes/ProblemRepositoryStatementRoutes";
import {createProblemRepositoryGradingRoutes} from "./grading/routes/ProblemRepositoryGradingRoutes";
import {PopBreadcrumb, PushBreadcrumb} from "../../../../../../../../modules/dispatcher/breadcrumb";
import {problemRepositoryActions} from "../modules/problem";
import {DeleteDocumentTitle, SetDocumentTitle} from "../../../../../../../../modules/dispatcher/platform";
import {ProblemRepositorySubmissionRoutes} from "./submission/routes/ProblemRepositorySubmissionRoutes";

class SingleProblemRepositoryRoutes extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            problem: null,
        }
    }

    componentDidMount() {
        console.log(this.props.match);
        this.props.onFetchProblem(this.props.match.params.problemId)
            .then((problem) => {
                this.setState({problem});
                this.props.onPushBreadcrumb(this.props.match.url, problem.title);
                this.props.onSetDocumentTitle(problem.title);
                return Promise.resolve();
            })
            .then(()=>{
                this.props.onRefreshToken();
            })
    }

    componentWillUnmount() {
        this.props.onPopBreadcrumb(this.props.match.url.replace(/\/+$/, ''));
        this.props.onDeleteDocumentTitle();
    }

    render() {
        const contentWithSidebarContainerProps = [
            {
                title: 'Statement',
                items: createProblemRepositoryStatementRoutes(this.state.problem),
            },
            {
                title: 'Grading',
                items: createProblemRepositoryGradingRoutes(this.state.problem),
            },
            {
                title: 'Submission',
                items: ProblemRepositorySubmissionRoutes,
            }
        ];

        return (
            <DoublePageLayout>
                <ContentWithMultipleSidebarContainer sidebars={contentWithSidebarContainerProps}/>
            </DoublePageLayout>
        )
    };
}

function createSingleProblemRepositoryRoutes(problemRepositoryActions) {
    const mapDispatchToProps = {
        onFetchProblem: (problemId) => problemRepositoryActions.fetchProblem(problemId),
        onPushBreadcrumb: (link, title) => PushBreadcrumb({link, title}),
        onPopBreadcrumb: (link) => PopBreadcrumb({link}),
        onSetDocumentTitle: (title) => SetDocumentTitle(title),
        onDeleteDocumentTitle: () => DeleteDocumentTitle(),
        onRefreshToken : () => problemRepositoryActions.refreshToken(),
    };
    return withRouter(connect(undefined, mapDispatchToProps)(SingleProblemRepositoryRoutes))
}

export default createSingleProblemRepositoryRoutes(problemRepositoryActions);
