import React from 'react';
import { connect } from 'react-redux';

import ProblemListTable from "../ProblemRepositoryListTable/ProblemRepositoryListTable";
import LoadingProblemListTable from "../ProblemRepositoryListTable/LoadingProblemRepositoryListTable";
import { CardContainer } from "../../../../../../../../../components";
import { problemRepositoryListActions } from "../../modules/problem";
import {API} from "../../../../../../../../../modules/api";
import {selectToken} from "../../../../../../../../../modules/redux/session";

class ProblemRepositoryListContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            problemRepoList : null,
            page : 0,
            limit : ProblemRepositoryListContainer.getProblemLimit(),
        }
    }

    static getProblemLimit(){
        return ((window.innerHeight - 376)/52);
    }

    async componentDidMount(){
        const { page, limit } = this.state;
        this.props.onFetchProblemRepositoryList(page,limit)
            .then((problemRepoList)=>{
                console.log('asd',problemRepoList);
                this.setState({problemRepoList});
                return Promise.resolve();
            })
            .then(()=>{
                API.sessionAPI.refreshToken(selectToken());
            });
    }

    renderProblemList = (problemRepoList) => {
        if(!problemRepoList || problemRepoList.length === 0){
            return (
                <CardContainer title={"Problem Repository"} strict={true}>
                    <LoadingProblemListTable/>
                </CardContainer>
            )
        }
        return (
            <CardContainer title={"Problem Repository"} strict={true}>
                <ProblemListTable problemList={problemRepoList}/>
            </CardContainer>
        )
    };

    render(){
        return (
            <div className="page__container">
                {this.renderProblemList(this.state.problemRepoList)}
            </div>
        )
    }
}

function createProblemRepositoryListContainer(problemRepositoryListActions) {
    const mapDispatchToProps = {
        onFetchProblemRepositoryList : (page,limit) => problemRepositoryListActions.fetchProblemRepositoryList(page,limit),
    };
    return connect(undefined,mapDispatchToProps)(ProblemRepositoryListContainer);
}

export default createProblemRepositoryListContainer(problemRepositoryListActions);