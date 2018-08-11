import React from 'react';
import SubmissionList from "../../../../../../../../../../components/submission/SubmissionList/SubmissionList";
import ProblemRepositorySingleContestantSubmission from '../components/ProblemRepositorySingleContestantSubmission/ProblemRepositorySingleContestantSubmission';
import ProblemRepositorySingleMySubmission from "../components/ProblemRepositorySingleMySubmission/ProblemRepositorySingleMySubmission";

export const ProblemRepositorySubmissionRoutes = [
    {
        id:'my-submission',
        titleIcon:'manually-entered-data',
        title:'My Submission',
        component:ProblemRepositorySingleMySubmission
    },
    {
        id:'contestant-submission',
        titleIcon:'manually-entered-data',
        title:'Contestant Submission',
        component:ProblemRepositorySingleContestantSubmission
    },
];