import React from 'react';
import { connect } from 'react-redux';

import ProblemRankCard from "../ProblemRankCard/ProblemRankCard";
import { problemActions } from "../../../../modules/problem";

class ProblemRankCardContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            problemRankList : undefined,
        }
    }

    async componentDidMount(){
        const problemRankList = null; // await this.props.onFetchProblemRankList(this.props.problemId)
        this.setState({problemRankList});
    }

    render(){
        return (<ProblemRankCard problemRankList={this.state.problemRankList}/>)
    }
}

function createProblemRankCardContainer(problemActions){
    const mapDispatchToProps = {
        onFetchProblemList : (problemId) => problemActions.fetchProblemRank(problemId),
    };
    return connect(undefined,mapDispatchToProps)(ProblemRankCardContainer)
}

export default createProblemRankCardContainer(problemActions);