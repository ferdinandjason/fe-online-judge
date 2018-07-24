import React from 'react';
import { connect } from 'react-redux';

import { ProblemStatementCard } from "../../../../../../../../../../../components/problem";
import { problemRepositoryActions } from "../../../../modules/problem";
import LoadingProblemStatementCard from "../../../../../../../../../../../components/problem/ProblemStatementCard/LoadingProblemStatementCard";
import {withBreadcrumb} from "../../../../../../../../../../../components";

class ProblemRepositoryStatementView extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            problem: undefined,
        }
    }

    async componentDidMount(){
        const problem = null ; // await this.props.onFetchProblem(this.props.problemId)
        this.setState({problem});
    }

    render(){
        if(this.state.problem){
            return (<ProblemStatementCard problem={this.state.problem}/>)
        } else {
            return (<LoadingProblemStatementCard/>)
        }
    }
}

function createProblemRepositoryStatementView(problemRepositoryActions) {
    const mapDispatchToProps = {
        onFetchProblemRepo : (problemId) => problemRepositoryActions.fetchProblem(problemId),
    };
    return connect(undefined,mapDispatchToProps)(ProblemRepositoryStatementView);
}

export default withBreadcrumb('View')(createProblemRepositoryStatementView(problemRepositoryActions));