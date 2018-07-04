import React from 'react';

import { Icon } from '@blueprintjs/core';

import ContestListPage from "./ContestListPage/ContestListPage";
import FullPageLayout from "../../../../components/FullPageLayout/FullPageLayout";

const sidebarContent = [
    {
        type:'divider',
        props:{
            title:'COMPETITION'
        }
    },
    {
        type:'item',
        href:'/competition/contest',
        props:{
            icon:'calendar',
            text:'Contest',
            labelElement:<Icon icon={"share"}/>,
        }
    },
    {
        type:'item',
        href:'/competition/virtual/contest',
        props:{
            icon:'calendar',
            text:'Virtual Contest',
            labelElement:<Icon icon={"share"}/>,
        }
    },
    {
        type:'item',
        href:'/competition/replay/contest',
        props:{
            icon:'calendar',
            text:'Replay Contest',
            labelElement:<Icon icon={"share"}/>,
        }
    },
    {
        type:'divider',
        props:{
            title: 'JOINED COMPETITION'
        }
    },
    {
        type:'item',
        href:'/competition/my/contest/',
        props:{
            icon:'user',
            text:'Joined Contest',
            labelElement:<Icon icon={"info-sign"}/>,
        }
    },
    {
        type:'item',
        href:'/competition/my/contest/points',
        props:{
            icon:'chart',
            text:'My Point',
            labelElement:<Icon icon={"info-sign"}/>,
        }
    },
];

const ContestButton = [
    {
        props:{
            icon:'refresh'
        }
    },
    {
        props:{
            icon:'import',
            text:'Excel',
        }
    }
];

const MainContestRoutes = () => {
    return (
        <FullPageLayout buttons={ContestButton} sidebarContent={sidebarContent}>
            <ContestListPage/>
        </FullPageLayout>
    )
};


export default MainContestRoutes;