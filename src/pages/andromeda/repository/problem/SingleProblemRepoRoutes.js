import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';

import { FullPageLayout } from "../../../../components";

import { repositoryBreadcrumbs, repositorySidebarContent} from "../RepositoryConstant";
import {EditSingleProblemPage, MediaSingleProblemPage, ViewSingleProblemPage} from "./SingleProblemPage/statement";

const singleProblemRepoButton = [
    {
        props:{
            icon:'import',
            text:'CSV',
        }
    }
];

const SingleProblemRepoRoutes = (routes) => {
    const problemSlug = routes.match.params.problemSlug;

    const singleProblemRepoBreadcrumbs = repositoryBreadcrumbs.concat({
        link:routes.match.url,
        title:routes.match.params.problemSlug,
    });

    const singleProblemRepoSidebarContent = repositorySidebarContent.concat([
        {
            type:'divider',
            props:{
                title:'STATEMENT '+problemSlug,
            }
        },
        {
            type:'item',
            href:`/repository/problem/${problemSlug}/statement`,
            props:{
                text:'View',
                icon:'log-in',
            }
        },
        {
            type:'item',
            href:`/repository/problem/${problemSlug}/statement/edit`,
            props:{
                text:'Edit',
                icon:'edit',
            }
        },
        {
            type:'item',
            href:`/repository/problem/${problemSlug}/statement/media`,
            props:{
                text:'Media',
                icon:'folder-new',
            }
        },
    ]);

    return (
        <div>
            <Redirect to={`/repository/problem/${problemSlug}/statement`}/>

                <Switch>
                    <Route exact path={`/repository/problem/${problemSlug}/statement`} render={()=>(
                        <FullPageLayout buttons={singleProblemRepoButton}
                                        sidebarContent={singleProblemRepoSidebarContent}
                                        breadcrumbs={singleProblemRepoBreadcrumbs.concat({
                                            link:`/repository/problem/${problemSlug}/statement`,
                                            title:'View'
                                        })}>
                            <ViewSingleProblemPage/>
                        </FullPageLayout>
                    )}/>
                    <Route exact path={`/repository/problem/${problemSlug}/statement/edit`} render={()=>(
                        <FullPageLayout buttons={singleProblemRepoButton}
                                        sidebarContent={singleProblemRepoSidebarContent}
                                        breadcrumbs={singleProblemRepoBreadcrumbs.concat({
                                            link:`/repository/problem/${problemSlug}/statement/edit`,
                                            title:'Edit'
                                        })}>
                            <EditSingleProblemPage/>
                        </FullPageLayout>
                    )}/>
                    <Route exact path={`/repository/problem/${problemSlug}/statement/media`} render={()=>(
                        <FullPageLayout buttons={singleProblemRepoButton}
                                        sidebarContent={singleProblemRepoSidebarContent}
                                        breadcrumbs={singleProblemRepoBreadcrumbs.concat({
                                            link:`/repository/problem/${problemSlug}/statement/media`,
                                            title:'Media'
                                        })}>
                            <MediaSingleProblemPage/>
                        </FullPageLayout>
                    )}/>
                </Switch>
        </div>
    )
};


export default SingleProblemRepoRoutes;