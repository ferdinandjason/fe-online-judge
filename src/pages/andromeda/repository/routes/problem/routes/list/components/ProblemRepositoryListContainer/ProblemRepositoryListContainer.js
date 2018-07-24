import React from 'react';
import { connect } from 'react-redux';

import ProblemListTable from "../ProblemRepositoryListTable/ProblemRepositoryListTable";
import LoadingProblemListTable from "../ProblemRepositoryListTable/LoadingProblemRepositoryListTable";
import { CardContainer } from "../../../../../../../../../components";
import { problemRepositoryListActions } from "../../modules/problem";

class ProblemRepositoryListContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            problemList : null
        }
    }

    async componentDidMount(){
        const problemRepoList = null ; // await this.props.onFetchProblemRepositoryList
        this.setState({problemRepoList});
    }

    renderProblemList = (problemList) => {
        if(!problemList || problemList.length === 0){
            return (
                <CardContainer title={"Problem Repository"} strict={true}>
                    <LoadingProblemListTable/>
                </CardContainer>
            )
        }
        return (
            <CardContainer title={"Problem Repository"} strict={true}>
                <ProblemListTable problemList={problemList}/>
            </CardContainer>
        )
    };

    render(){
        return (
            <div className="page__container">
                {this.renderProblemList(this.state.problemList)}
            </div>
        )
    }
}

function createProblemRepositoryListContainer(problemRepositoryListActions) {
    const mapDispatchToProps = {
        onFetchProblemRepositoryList : () => problemRepositoryListActions.fetchProblemRepositoryList(),
    };
    return connect(undefined,mapDispatchToProps)(ProblemRepositoryListContainer);
}

export default createProblemRepositoryListContainer(problemRepositoryListActions);