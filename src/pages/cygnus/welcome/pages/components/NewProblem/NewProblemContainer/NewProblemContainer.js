import React from 'react';

import NewProblemTable from "../NewProblemTable/NewProblemTable";
import LoadingNewProblemTable from "../NewProblemTable/LoadingNewProblemTable";
import {CardContainer} from "../../../../../../../components";

import Styles from './NewProblemContainer.scss';

class NewProblemContainer extends React.Component {
    renderProblemList = (problemList) => {
        if (!problemList || problemList.length === 0) {
            return (
                <CardContainer title={"New Problem"} strict={true}>
                    <LoadingNewProblemTable/>
                </CardContainer>
            )
        }
        return (
            <CardContainer title={"New Problem"} strict={true}>
                <NewProblemTable problemList={problemList}/>
            </CardContainer>
        )
    };

    constructor(props) {
        super(props);
        this.state = {
            problem: null
        }
    }

    async componentDidMount() {
        const problemList = null; // await TODO: function to fetch ProblemList
        this.setState({problem: problemList});
    }

    render() {
        return (
            <div className={Styles.problem__page__container}>
                {this.renderProblemList()}
            </div>
        )
    }

}

export default NewProblemContainer;