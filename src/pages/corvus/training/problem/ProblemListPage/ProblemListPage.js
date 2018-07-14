import React from 'react';

import ProblemListTable from "../ProblemListTable/ProblemListTable";
import LoadingProblemListTable from "../ProblemListTable/LoadingProblemListTable";
import {CardContainer} from "../../../../../components";

import style from './ProblemListPage.scss';

class ProblemListPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            problem : null
        }
    }

    async componentDidMount(){
        const problemList = null ; // await TODO: function to fetch ProblemList
        this.setState({problem:problemList});
    }

    renderProblemList = (problemList) => {
        if(!problemList || problemList.length === 0){
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

    render(){
        return (
            <div className={style.problem__page__container}>
                {this.renderProblemList()}
            </div>
        )
    }

}

export default ProblemListPage;