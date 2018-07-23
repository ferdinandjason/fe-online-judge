import React from 'react';
import { connect } from 'react-redux';

import { ProblemStatementCard } from "../../../../../../../../../../../components/problem";
import { problemActions } from "../../../../modules/problem";
import LoadingProblemStatementCard from "../../../../../../../../../../../components/problem/ProblemStatementCard/LoadingProblemStatementCard";

class ProblemWorksheet extends React.Component {
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

function createProblemWorksheet(problemActions) {
    const mapDispatchToProps = {
        onFetchProblem : (problemId) => problemActions.fetchProblem(problemId),
    };
    return connect(undefined,mapDispatchToProps)(ProblemWorksheet);
}

export default createProblemWorksheet(problemActions);