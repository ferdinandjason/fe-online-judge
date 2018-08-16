import React from 'react';
import {connect} from 'react-redux';

import ProblemListTable from "../ProblemListTable/ProblemListTable";
import LoadingProblemListTable from "../ProblemListTable/LoadingProblemListTable";
import {CardContainer} from "../../../../../../../../../components";
import {problemListActions} from "../../modules/problem";
import {Pagination} from "../../../../../../../../../components/Pagination";

class ProblemListContainer extends React.Component {
    handleChangePage = async (next) => {
        console.log(next.selected);
        const current_page = next.selected;
        await this.setState({current_page});
        await this.componentDidMount();
    };

    renderProblemList = (problemList) => {
        if (!problemList || problemList.length === 0) {
            return (
                <CardContainer title={"Problem"} strict={true}>
                    <LoadingProblemListTable/>
                </CardContainer>
            )
        }
        return (
            <CardContainer title={"Problem"} strict={true}>
                <ProblemListTable problemList={problemList}/>
                <Pagination {...this.state.problemPaginationProps} onChangePage={this.handleChangePage}/>
            </CardContainer>
        )
    };

    constructor(props) {
        super(props);
        this.state = {
            problemPaginationProps: null,
            problemList: null,
            current_page: 0,
            limit: ProblemListContainer.getProblemLimit(),
        };
    }

    static getProblemLimit() {
        return Math.floor((window.innerHeight - 376) / 52) - 1;
    }

    async componentDidMount() {
        const {current_page, limit} = this.state;
        await this.props.onFetchProblemList(current_page, limit)
            .then((problems) => {
                const problemList = problems.data;
                const problemPaginationProps = problems.meta.pagination;
                this.setState({problemList});
                this.setState({problemPaginationProps});
                return Promise.resolve();
            });
    }

    render() {
        return (
            <div className="page__container">
                {this.renderProblemList(this.state.problemList)}
            </div>
        )
    }
}

function createProblemListContainer(problemListActions) {
    const mapDispatchToProps = {
        onFetchProblemList: (current_page, limit) => problemListActions.fetchProblemList(current_page, limit, true),
    };
    return connect(undefined, mapDispatchToProps)(ProblemListContainer);
}

export default createProblemListContainer(problemListActions);