import React from 'react';

import { Icon } from '@blueprintjs/core';

const repositoryBreadcrumbs = [
    {
        link:'/repository',
        title:'Repository',
    },
    {
        link:'/repository/problem',
        title:'Problem',
    },
];

const repositorySidebarContent = [
    {
        type:'divider',
        props:{
            title:'REPOSITORY'
        }
    },
    {
        type:'item',
        href:'/repository/problem',
        props:{
            icon:'projects',
            text:'Problemsets',
            labelElement:<Icon icon={"share"}/>,
        }
    },
    {
        type:'item',
        href:'/repository/testcase',
        props:{
            icon:'folder-new',
            text:'Testcase',
            labelElement:<Icon icon={"share"}/>,
        }
    },
];

export { repositoryBreadcrumbs, repositorySidebarContent }