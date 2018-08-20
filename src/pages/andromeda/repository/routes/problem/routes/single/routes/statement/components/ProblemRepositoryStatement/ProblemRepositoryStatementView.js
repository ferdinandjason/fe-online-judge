import React from 'react';

import {ProblemStatementCard} from "../../../../../../../../../../../components/problem";
import LoadingProblemStatementCard
    from "../../../../../../../../../../../components/problem/ProblemStatementCard/LoadingProblemStatementCard";
import {withBreadcrumb} from "../../../../../../../../../../../components";

class ProblemRepositoryStatementView extends React.Component {
    render() {
        if (this.props.problem) {
            return (<ProblemStatementCard problem={this.props.problem}/>)
        } else {
            return (<LoadingProblemStatementCard/>)
        }
    }
}

export default withBreadcrumb('View')(ProblemRepositoryStatementView);