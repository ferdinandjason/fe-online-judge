import React from 'react';

import NewProblemTable from "../NewProblemTable/NewProblemTable";
import LoadingNewProblemTable from "../NewProblemTable/LoadingNewProblemTable";
import {CardContainer} from "../../../../../../components";

import style from './NewProblemList.scss';

class NewProblemList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            problem: null
        }
    }

    async componentDidMount(){
        const problemList = null ; // await TODO: function to fetch ProblemList
        this.setState({problem:problemList});
    }

    renderProblemList = (problemList) => {
        if(!problemList || problemList.length === 0){
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

    render(){
        return (
            <div className={style.problem__page__container}>
                {this.renderProblemList()}
            </div>
        )
    }

}

export default NewProblemList;