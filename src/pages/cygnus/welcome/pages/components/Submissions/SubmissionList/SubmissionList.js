import React from 'react';

import SubmissionTable from "../SubmissionTable/SubmissionTable";
import LoadingSubmissionTable from "../SubmissionTable/LoadingSubmissionTable";
import {CardContainer} from "../../../../../../../components";

import Styles from './SubmissionList.scss';

class SubmissionList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            submission: null
        }
    }

    async componentDidMount(){
        const submissionList = null ; // await TODO: function to fetch ProblemList
        this.setState({submission:submissionList});
    }

    renderSubmissionList = (submissionList) => {
        if(!submissionList || submissionList.length === 0){
            return (
                <CardContainer title={"Submission"} strict={true}>
                    <LoadingSubmissionTable/>
                </CardContainer>
            )
        }
        return (
            <CardContainer title={"Submission"} strict={true}>
                <SubmissionTable submissionList={submissionList}/>
            </CardContainer>
        )
    };

    render(){
        return (
            <div className={Styles.submission_container}>
                {this.renderSubmissionList()}
            </div>
        )
    }

}

export default SubmissionList;