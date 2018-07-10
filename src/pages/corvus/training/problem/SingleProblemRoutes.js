import React from 'react';

import { Icon } from '@blueprintjs/core';

import { FullPageLayout } from "../../../../components";

import SingleProblemPage from "./SingleProblemPage/SingleProblemPage";
import { trainingBreadcrumbs, trainingSidebarContent } from "../TrainingConstant";


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

const MainContestRoutes = (routes) => {
    const singleProblemBreadcrumbs = trainingBreadcrumbs.concat({
        link:routes.match.url,
        title:routes.match.params.problemId,
    });
    const singleSidebarContent = trainingSidebarContent.concat([
        {
            type:'divider',
            props:{
                title:'PROBLEM '+routes.match.params.problemId
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
    ]);
    return (
        <FullPageLayout buttons={ProblemButton} sidebarContent={singleSidebarContent} breadcrumbs={singleProblemBreadcrumbs} problemTitle={routes.match.params.problemId}>
            <SingleProblemPage/>
        </FullPageLayout>
    )
};


export default MainContestRoutes;