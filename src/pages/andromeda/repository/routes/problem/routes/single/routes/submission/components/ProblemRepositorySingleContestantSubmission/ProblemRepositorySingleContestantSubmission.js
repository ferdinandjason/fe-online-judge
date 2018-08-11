import React from 'react';
import {Route, Switch} from 'react-router-dom';
import {SubmissionList} from "../../../../../../../../../../../components/submission/";
import LoadingSubmissionCard
    from "../../../../../../../../../../../components/submission/SubmissionCard/LoadingSubmissionCard";
import {withBreadcrumb} from "../../../../../../../../../../../components";

class ProblemRepositorySingleContestantSubmission extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={'/repository/problem/:problemId/contestant-submission'} component={SubmissionList}/>
                <Route path={'/repository/problem/:problemId/contestant-submission/:submissionId'}
                       component={LoadingSubmissionCard}/>
            </Switch>
        )
    }
}

export default withBreadcrumb('Contestant Submission')(ProblemRepositorySingleContestantSubmission);