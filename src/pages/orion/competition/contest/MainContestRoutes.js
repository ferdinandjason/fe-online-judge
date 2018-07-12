import React from 'react';
import { Redirect } from 'react-router-dom';
import { FullPageLayout } from "../../../../components";

import ContestListPage from "./ContestListPage/ContestListPage";
import { competitionBreadcrumb, competitionSidebarContent } from '../CompetitionConstant';

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

const contestBreadcrumbs = competitionBreadcrumb.concat([]);

const MainContestRoutes = () => {
    return (
        <div>
            <Redirect to={'/competition/contest'}/>
            <FullPageLayout buttons={ContestButton} sidebarContent={competitionSidebarContent} breadcrumbs={contestBreadcrumbs}>
                <ContestListPage/>
            </FullPageLayout>
        </div>
    )
};


export default MainContestRoutes;