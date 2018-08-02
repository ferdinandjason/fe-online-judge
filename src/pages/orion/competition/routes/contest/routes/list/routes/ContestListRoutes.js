import React from 'react';
import { withRouter } from 'react-router-dom';

import { DoublePageLayout } from "../../../../../../../../components/layouts";
import { ContentWithSidebarContainer } from "../../../../../../../../components";
import ContestListContainer from "../components/ContestListContainer/ContestListContainer";

export const ContestListRoutes = () => {
    const sidebarItems = [
        {
            id: 'contest',
            titleIcon: 'timeline-events',
            title:'Contest',
            component:ContestListContainer,
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

export default withRouter(ContestListRoutes);