import React from 'react';
import { Redirect } from 'react-router-dom';

import { FullPageLayout } from "../../../../components";

import ProblemListPage from "./ProblemListPage/ProblemListPage";
import { trainingSidebarContent, trainingBreadcrumbs} from "../TrainingConstant";

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

const problemBreadcrumbs = trainingBreadcrumbs.concat([]);

const MainContestRoutes = () => {
    return (
        <div>
            <Redirect to={'/training/problem'}/>
            <FullPageLayout buttons={ProblemButton} sidebarContent={trainingSidebarContent} breadcrumbs={problemBreadcrumbs}>
                <ProblemListPage/>
            </FullPageLayout>
        </div>
    )
};


export default MainContestRoutes;