import React from 'react';

import SubmissionTable from "../SubmissionTable/SubmissionTable";
import LoadingSubmissionTable from "../SubmissionTable/LoadingSubmissionTable";
import {CardContainer} from "../../index";

import Styles from './SubmissionList.scss';

class SubmissionList extends React.Component {
    renderSubmissionList = (submissionList) => {
        if (!submissionList || submissionList.length === 0) {
            return (
                <CardContainer title={"Submission"} strict={true}>
                    <LoadingSubmissionTable/>
                </CardContainer>
            )
        }
        return (
            <CardContainer title={"Submission"} strict={true}>
                <SubmissionTable submissionList={submissionList} action={this.props.action}/>
            </CardContainer>
        )
    };

    constructor(props) {
        super(props);
        this.state = {
            submission: null
        }
    }

    async componentDidMount() {
        const submissionList = null; // await TODO: function to fetch ProblemList
        this.setState({submission: submissionList});
    }

    render() {
        return (
            <div className={Styles.SUBMISSION_CONTAINER}>
                {this.renderSubmissionList()}
            </div>
        )
    }

}

export default SubmissionList;