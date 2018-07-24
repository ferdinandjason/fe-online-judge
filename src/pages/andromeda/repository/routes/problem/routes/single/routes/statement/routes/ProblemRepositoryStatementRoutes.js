import React from 'react';

import {
    ProblemRepositoryStatementEdit,
    ProblemRepositoryStatementMedia,
    ProblemRepositoryStatementView
} from "../components/ProblemRepositoryStatement";

export const ProblemRepositoryStatementRoutes = [
    {
        id:'view',
        titleIcon:'document',
        title:'View',
        component:ProblemRepositoryStatementView
    },
    {
        id:'edit',
        titleIcon:'edit',
        title:'Edit',
        component:ProblemRepositoryStatementEdit
    },
    {
        id:'media',
        titleIcon:'media',
        title:'Media',
        component:ProblemRepositoryStatementMedia
    },
];