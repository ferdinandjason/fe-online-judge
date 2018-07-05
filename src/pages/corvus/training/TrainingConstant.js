import React from 'react';

import { Icon } from '@blueprintjs/core';

const trainingBreadcrumbs = [
    {
        link:'/training',
        title:'Training',
    },
    {
        link:'/training/problem',
        title:'Problem',
    },
];

const trainingSidebarContent = [
    {
        type:'divider',
        props:{
            title:'TRAINING'
        }
    },
    {
        type:'item',
        href:'/training/problem',
        props:{
            icon:'projects',
            text:'Problemsets',
            labelElement:<Icon icon={"share"}/>,
        }
    },
    {
        type:'item',
        href:'/training/solved/problem',
        props:{
            icon:'projects',
            text:'Solved Problem',
            labelElement:<Icon icon={"share"}/>,
        }
    },
];

export { trainingBreadcrumbs, trainingSidebarContent }