import React from 'react';

import {ProblemStatementCard, LoadingProblemStatementCard} from "../../../../../../../../../../../components/problem";

class ProblemWorksheet extends React.Component {
    render() {
        if (this.props.problem) {
            return (<ProblemStatementCard problem={this.props.problem}/>)
        } else {
            return (<LoadingProblemStatementCard/>)
        }
    }
}

export default ProblemWorksheet;