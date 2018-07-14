import React from 'react';
import { Redirect } from 'react-router-dom';

import { FullPageLayout } from "../../../../components";

import ProblemListPage from "./ProblemListPage/ProblemListPage";
import { repositoryBreadcrumbs, repositorySidebarContent} from "../RepositoryConstant";

const ProblemRepoButton = [
    {
        props:{
            icon:'plus',
            text:'Add Problem'
        }
    },
    {
        props:{
            icon:'import',
            text:'CSV',
        }
    }
];

const problemRepoBreadcrumbs = repositoryBreadcrumbs.concat([]);

const MainProblemRepoRoutes = () => {
    return (
        <div>
            <Redirect to={'/repository/problem'}/>
            <FullPageLayout buttons={ProblemRepoButton} sidebarContent={repositorySidebarContent} breadcrumbs={problemRepoBreadcrumbs}>
                <ProblemListPage/>
            </FullPageLayout>
        </div>
    )
};


export default MainProblemRepoRoutes;