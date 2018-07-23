import React from 'react';
import { withRouter } from 'react-router-dom';

import { DoublePageLayout } from "../../../../../../../../components/layouts";
import {ContentWithSidebarContainer } from "../../../../../../../../components";
import ProblemListDataRoutes from "./ProblemListDataRoutes";

export const ProblemListRoutes = () => {
    const sidebarItems = [
        {
            id:'problem',
            titleIcon:'projects',
            title:'Problem Set',
            component:ProblemListDataRoutes
        }
    ];

    const contentWithSidebarContainerProps = {
        title: 'Training',
        items: sidebarItems,
    };

    return (
        <DoublePageLayout>
            <ContentWithSidebarContainer {...contentWithSidebarContainerProps}/>
        </DoublePageLayout>
    )
};

export default withRouter(ProblemListRoutes)
