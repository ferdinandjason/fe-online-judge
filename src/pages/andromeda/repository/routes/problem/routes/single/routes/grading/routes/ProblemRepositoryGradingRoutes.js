import React from 'react';
import {ProblemRepositoryGradingConfig, ProblemRepositoryGradingTestcase} from "../components/ProblemRepositoryGrading";

export const createProblemRepositoryGradingRoutes = (problem) => ([
    {
        id: 'config',
        titleIcon: 'take-action',
        title: 'Configuration',
        render: () => (<ProblemRepositoryGradingConfig problem={problem}/>)
    },
    {
        id: 'testcase',
        titleIcon: 'box',
        title: 'Testcase',
        render: () => (<ProblemRepositoryGradingTestcase problem={problem}/>)
    },
]);