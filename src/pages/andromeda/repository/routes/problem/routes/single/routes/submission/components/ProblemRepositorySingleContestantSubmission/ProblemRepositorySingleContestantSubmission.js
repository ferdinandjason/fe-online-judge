import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {withBreadcrumb} from "../../../../../../../../../../../components";
import {ProblemRepositorySubmissionList} from "../ProblemRepositorySubmissionList/ProblemRepositorySubmissionList";
import {SubmissionCard} from "../../../../../../../../../../../components/submission";

class ProblemRepositorySingleContestantSubmission extends React.Component {
    render() {
        return (
            <Switch>
                <Route path={'/repository/problem/:problemId/submission/:submissionId'} component={SubmissionCard}/>
                <Route path={'/repository/problem/:problemId/submission'} component={ProblemRepositorySubmissionList}/>
            </Switch>
        )
    }
}

export default withBreadcrumb('Contestant Submission')(ProblemRepositorySingleContestantSubmission);