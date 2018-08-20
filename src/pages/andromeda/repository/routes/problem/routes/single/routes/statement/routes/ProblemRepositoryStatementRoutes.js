import React from 'react';
import {
    ProblemRepositoryStatementEdit,
    ProblemRepositoryStatementMedia,
    ProblemRepositoryStatementView
} from "../components/ProblemRepositoryStatement";

export const createProblemRepositoryStatementRoutes = (problem) => ([
    {
        id: 'view',
        titleIcon: 'document',
        title: 'View',
        render: () => (<ProblemRepositoryStatementView problem={problem}/>)
    },
    {
        id: 'edit',
        titleIcon: 'edit',
        title: 'Edit',
        render: () => (<ProblemRepositoryStatementEdit problem={problem}/>)
    },
    {
        id: 'media',
        titleIcon: 'media',
        title: 'Media',
        render: () => (<ProblemRepositoryStatementMedia problem={problem}/>)
    },
]);