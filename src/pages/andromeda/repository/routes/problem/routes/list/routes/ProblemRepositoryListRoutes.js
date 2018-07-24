import React from 'react';
import { withRouter } from 'react-router-dom';

import { DoublePageLayout } from "../../../../../../../../components/layouts";
import { ContentWithSidebarContainer, ButtonLink } from "../../../../../../../../components";
import ProblemRepositoryListContainer from "../components/ProblemRepositoryListContainer/ProblemRepositoryListContainer";

export const ProblemRepositoryListRoutes = () => {
    const sidebarItems = [
        {
            id:'problem',
            titleIcon:'database',
            title:'Problem Repository',
            component:ProblemRepositoryListContainer,
        }
    ];

    const contentWithSidebarContainerProps = {
        title: 'Repository',
        items: sidebarItems,
    };

    return (
        <DoublePageLayout>
            <ContentWithSidebarContainer {...contentWithSidebarContainerProps}/>
        </DoublePageLayout>
    )
};

export default withRouter(ProblemRepositoryListRoutes);
