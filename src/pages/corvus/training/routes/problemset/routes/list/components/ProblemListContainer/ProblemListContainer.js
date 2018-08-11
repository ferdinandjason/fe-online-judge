import React from 'react';
import {connect} from 'react-redux';

import ProblemListTable from "../ProblemListTable/ProblemListTable";
import LoadingProblemListTable from "../ProblemListTable/LoadingProblemListTable";
import {CardContainer} from "../../../../../../../../../components";
import {problemListActions} from "../../modules/problem";

class ProblemListContainer extends React.Component {
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
            </CardContainer>
        )
    };

    constructor(props) {
        super(props);
        this.state = {
            problemList: null
        }
    }

    async componentDidMount() {
        const problemList = null; // await this.props.onFetchProblemList
        this.setState({problemList});
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
        onFetchProblemList: (problemId) => problemListActions.fetchProblemList(problemId),
    };
    return connect(undefined, mapDispatchToProps)(ProblemListContainer);
}

export default createProblemListContainer(problemListActions);