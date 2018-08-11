import React from 'react';
import {connect} from 'react-redux';

import {ProblemStatementCard} from "../../../../../../../../../../../components/problem";
import {problemRepositoryActions} from "../../../../modules/problem";
import LoadingProblemStatementCard
    from "../../../../../../../../../../../components/problem/ProblemStatementCard/LoadingProblemStatementCard";
import {withBreadcrumb} from "../../../../../../../../../../../components";
import {API} from "../../../../../../../../../../../modules/api";
import {selectToken} from "../../../../../../../../../../../modules/redux/session";

class ProblemRepositoryStatementView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            problem: undefined,
        }
    }

    getProblemIdFromURL() {
        return this.props.match.url.split('/')[3];
    }

    async componentDidMount() {
        this.props.onFetchProblemRepo(this.getProblemIdFromURL())
            .then((problem) => {
                this.setState({problem});
                return Promise.resolve();
            })
            .then(() => {
                API.sessionAPI.refreshToken(selectToken());
            })
    }

    render() {
        if (this.state.problem) {
            return (<ProblemStatementCard problem={this.state.problem}/>)
        } else {
            return (<LoadingProblemStatementCard/>)
        }
    }
}

function createProblemRepositoryStatementView(problemRepositoryActions) {
    const mapDispatchToProps = {
        onFetchProblemRepo: (problemId) => problemRepositoryActions.fetchProblem(problemId),
    };
    return connect(undefined, mapDispatchToProps)(ProblemRepositoryStatementView);
}

export default withBreadcrumb('View')(createProblemRepositoryStatementView(problemRepositoryActions));