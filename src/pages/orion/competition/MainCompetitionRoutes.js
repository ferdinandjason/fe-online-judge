import React from 'react';

import { DoublePageLayout } from "../../../components/layouts";
import { ContentWithSidebarContainer } from "../../../components";
import ContestRoutes from "./contest/ContestRoutes";

export const MainCompetitionRoutes = () => {
    const sidebarItems = [
        {
            id: 'contest',
            titleIcon: 'timeline-events',
            title:'Contest',
            component:ContestRoutes,
        }
    ];

    const contentWithSidebarContainerProps = {
        title: 'Competition',
        items: sidebarItems
    };

    return (
        <DoublePageLayout>
            <ContentWithSidebarContainer {...contentWithSidebarContainerProps}/>
        </DoublePageLayout>
    )
};