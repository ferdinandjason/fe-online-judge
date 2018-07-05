import React from 'react';

import { Icon } from '@blueprintjs/core';

import ContestListPage from "./ContestListPage/ContestListPage";
import FullPageLayout from "../../../../components/FullPageLayout/FullPageLayout";

const sidebarContent = [
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

const ContestButton = [
    {
        props:{
            key:'refresh',
            icon:'refresh'
        }
    },
    {
        props:{
            key:'import-excel',
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