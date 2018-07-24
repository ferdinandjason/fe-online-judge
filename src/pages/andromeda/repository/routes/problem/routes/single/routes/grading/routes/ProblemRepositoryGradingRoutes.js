import React from 'react';
import {ProblemRepositoryGradingConfig, ProblemRepositoryGradingTestcase} from "../components/ProblemRepositoryGrading";

export const ProblemRepositoryGradingRoutes = [
    {
        id:'config',
        titleIcon:'take-action',
        title:'Configuration',
        component:ProblemRepositoryGradingConfig
    },
    {
        id:'testcase',
        titleIcon:'box',
        title:'Testcase',
        component:ProblemRepositoryGradingTestcase
    },
];