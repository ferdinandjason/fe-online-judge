import React from 'react';
import { Redirect } from 'react-router-dom';

import { Icon } from '@blueprintjs/core';

import FullPageLayout from "../../../../components/FullPageLayout/FullPageLayout";
import ProblemListPage from "./ProblemListPage/ProblemListPage";

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
            text:'Excel',
        }
    }
];

const MainContestRoutes = () => {
    return (
        <div>
            <Redirect to={'/training/problem'}/>
            <FullPageLayout buttons={ProblemButton} sidebarContent={sidebarContent}>
                <ProblemListPage/>
            </FullPageLayout>
        </div>
    )
};


export default MainContestRoutes;