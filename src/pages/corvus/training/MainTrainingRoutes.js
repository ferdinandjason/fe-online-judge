import React from 'react';

import ProblemRoutes from "./problem/ProblemRoutes";
import { DoublePageLayout } from "../../../components/layouts";
import { ContentWithSidebarContainer } from "../../../components";

export const MainTrainingRoutes = () => {
    const sidebarItems = [
        {
            id: 'problem',
            titleIcon: 'projects',
            title:'Problem Set',
            component:ProblemRoutes,
        }
    ];

    const contentWithSidebarContainerProps = {
        title: 'Training',
        items: sidebarItems
    };

    return (
        <DoublePageLayout>
            <ContentWithSidebarContainer {...contentWithSidebarContainerProps}/>
        </DoublePageLayout>
    )
};