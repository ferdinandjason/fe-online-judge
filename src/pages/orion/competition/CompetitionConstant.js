import React from 'react';

import { Icon } from '@blueprintjs/core';

const competitionBreadcrumb = [
    {
        link:'/competition',
        title:'Competition'
    },
    {
        link:'/competition/contest',
        title:'Contest'
    },
];

const competitionSidebarContent = [
    {
        type:'divider',
        props:{
            key:'divider-competition',
            title:'COMPETITION'
        }
    },
    {
        type:'item',
        href:'/competition/contest',
        props:{
            key:'contest',
            icon:'calendar',
            text:'Contest',
            labelElement:<Icon icon={"share"}/>,
        }
    },
    {
        type:'item',
        href:'/competition/virtual/contest',
        props:{
            key:'virtual-contest',
            icon:'calendar',
            text:'Virtual Contest',
            labelElement:<Icon icon={"share"}/>,
        }
    },
    {
        type:'item',
        href:'/competition/replay/contest',
        props:{
            key:'replay-contest',
            icon:'calendar',
            text:'Replay Contest',
            labelElement:<Icon icon={"share"}/>,
        }
    },
    {
        type:'divider',
        props:{
            key:'divider-joined-competition',
            title: 'JOINED COMPETITION'
        }
    },
    {
        type:'item',
        href:'/competition/my/contest/',
        props:{
            key:'joined-contest',
            icon:'user',
            text:'Joined Contest',
            labelElement:<Icon icon={"info-sign"}/>,
        }
    },
    {
        type:'item',
        href:'/competition/my/contest/points',
        props:{
            key:'my-point',
            icon:'chart',
            text:'My Point',
            labelElement:<Icon icon={"info-sign"}/>,
        }
    },
];

export { competitionBreadcrumb, competitionSidebarContent}