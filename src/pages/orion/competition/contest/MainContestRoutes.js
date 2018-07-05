import React from 'react';

import ContestListPage from "./ContestListPage/ContestListPage";
import FullPageLayout from "../../../../components/FullPageLayout/FullPageLayout";
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
        <FullPageLayout buttons={ContestButton} sidebarContent={competitionSidebarContent} breadcrumbs={contestBreadcrumbs}>
            <ContestListPage/>
        </FullPageLayout>
    )
};


export default MainContestRoutes;