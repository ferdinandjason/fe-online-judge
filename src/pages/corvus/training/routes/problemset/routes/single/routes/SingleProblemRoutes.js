import React from 'react';
import { withRouter } from 'react-router-dom';

import { DoublePageLayout } from "../../../../../../../../components/layouts";
import {ContentWithSidebarContainer } from "../../../../../../../../components";
import SingleProblemStatementRoutes from "./statement/routes/SingleProblemStatementRoutes";
import SingleProblemSubmitRoutes from "./submit/routes/SingleProblemSubmitRoutes";
import SingleProblemRankRoutes from "./rank/routes/SingleProblemRankRoutes";


export const ProblemListRoute = () => {
    const sidebarItems = [
        {
            id:'statement',
            titleIcon:'projects',
            title:'Statement',
            component:SingleProblemStatementRoutes
        },
        {
            id:'submit',
            titleIcon:'projects',
            title:'Submit',
            component:SingleProblemSubmitRoutes
        },
        {
            id:'rank',
            titleIcon:'projects',
            title:'Rank',
            component:SingleProblemRankRoutes
        },
    ];

    const contentWithSidebarContainerProps = {
        title: 'Problem',
        items: sidebarItems,
    };

    return (
        <DoublePageLayout>
            <ContentWithSidebarContainer {...contentWithSidebarContainerProps}/>
        </DoublePageLayout>
    )
};

export default withRouter(ProblemListRoute)
