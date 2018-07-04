import React from 'react';

import { Icon } from '@blueprintjs/core';

import FullPageLayout from "../../../../components/FullPageLayout/FullPageLayout";
import SingleProblemPage from "./SingleProblemPage/SingleProblemPage";

const sidebarContent = [
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
    {
        type:'divider',
        props:{
            title:'PROBLEM'
        }
    },
    {
        type:'item',
        href:'/training/problem/A',
        props:{
            icon:'clipboard',
            text:'Deskripsi',
            labelElement:<Icon icon={"share"}/>,
        }
    },
    {
        type:'item',
        href:'/training/problem/A/submit',
        props:{
            icon:'send-to',
            text:'Submit',
            labelElement:<Icon icon={"share"}/>,
        }
    },
    {
        type:'item',
        href:'/training/problem/A/rank',
        props:{
            icon:'thumbs-up',
            text:'Rank',
            labelElement:<Icon icon={"share"}/>,
        }
    },

];

const ProblemButton = [
    {
        props:{
            icon:'refresh'
        }
    },
    {
        props:{
            icon:'import',
            text:'CSV',
        }
    },
    {
        props:{
            icon:'import',
            text:'HTML',
        }
    },
];

const MainContestRoutes = (match) => {
    return (
        <FullPageLayout buttons={ProblemButton} sidebarContent={sidebarContent} problemTitle={match}>
            <SingleProblemPage/>
        </FullPageLayout>
    )
};


export default MainContestRoutes;