import React from 'react';
import {connect} from 'react-redux';

import ProblemListTable from "../ProblemRepositoryListTable/ProblemRepositoryListTable";
import LoadingProblemListTable from "../ProblemRepositoryListTable/LoadingProblemRepositoryListTable";
import {CardContainer} from "../../../../../../../../../components";
import {problemRepositoryListActions} from "../../modules/problem";
import {getUser} from "../../../../../../../../../modules/dispatcher/session";
import {Pagination} from "../../../../../../../../../components/Pagination";

class ProblemRepositoryListContainer extends React.Component {
    handleChangePage = async (next) => {
        console.log(next.selected);
        const current_page = next.selected;
        await this.setState({current_page});
        await this.componentDidMount();
        this.forceUpdate();
    };

    renderProblemList = (problemRepoList) => {
        if (!problemRepoList || problemRepoList.length === 0) {
            return (
                <CardContainer title={"Problem Repository"} strict={true}>
                    <LoadingProblemListTable/>
                </CardContainer>
            )
        }
        return (
            <CardContainer title={"Problem Repository"} strict={true}>
                <ProblemListTable problemList={problemRepoList} onDeleteProblem={this.props.onDeleteProblem}/>
                <Pagination {...this.state.problemRepoPaginationProps} onChangePage={this.handleChangePage}/>
            </CardContainer>
        )
    };

    constructor(props) {
        super(props);
        this.state = {
            problemRepoPaginationProps: null,
            problemRepoList: null,
            current_page: 0,
            limit: ProblemRepositoryListContainer.getProblemLimit(),
        };
    }

    static getProblemLimit() {
        return Math.floor((window.innerHeight - 376) / 52) - 1;
    }

    async componentDidMount() {
        const {current_page, limit} = this.state;
        const owner_id = getUser().id;
        await this.props.onFetchProblemRepositoryList(current_page, limit, owner_id)
            .then((problemRepo) => {
                const problemRepoList = problemRepo.data;
                const problemRepoPaginationProps = problemRepo.meta.pagination;
                this.setState({problemRepoList});
                this.setState({problemRepoPaginationProps});
                console.log(this.state.problemRepoList);
            });
    }

    render() {
        return (
            <div className="page__container">
                {this.renderProblemList(this.state.problemRepoList)}
            </div>
        )
    }
}

function createProblemRepositoryListContainer(problemRepositoryListActions) {
    const mapDispatchToProps = {
        onFetchProblemRepositoryList: (page, limit, owner_id) => problemRepositoryListActions.fetchProblemRepositoryList(page, limit, owner_id),
        onDeleteProblem: (id,slug) => problemRepositoryListActions.deleteProblem(id,slug),
    };
    return connect(undefined, mapDispatchToProps)(ProblemRepositoryListContainer);
}

export default createProblemRepositoryListContainer(problemRepositoryListActions);