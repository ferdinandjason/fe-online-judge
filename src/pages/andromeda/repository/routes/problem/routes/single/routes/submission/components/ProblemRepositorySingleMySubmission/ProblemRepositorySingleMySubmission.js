import React from 'react';
import {Route,Switch} from 'react-router-dom';
import {SubmissionCard,SubmissionList} from "../../../../../../../../../../../components/submission/";
import {LoadingSubmissionCard} from "../../../../../../../../../../../components/submission/SubmissionCard";
import {withBreadcrumb} from "../../../../../../../../../../../components";

export class ProblemRepositorySingleMySubmission extends React.Component {
    render(){
        return (
            <Switch>
                <Route exact path={'/repository/problem/:problemId/my-submission'} component={SubmissionList}/>
                <Route path={'/repository/problem/:problemId/my-submission/:submissionId'} component={LoadingSubmissionCard}/>
            </Switch>
        )
    }
}

export default withBreadcrumb('My Submission')(ProblemRepositorySingleMySubmission)