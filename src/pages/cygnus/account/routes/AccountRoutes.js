import React from 'react';
import {withRouter} from "react-router-dom";

import ProfileRoutes from "./profile/routes/ProfileRoutes";
import {DoublePageLayout} from "../../../../components/layouts/DoublePageLayout";
import ContentWithSidebar from "../../../../components/ContentWithSidebar/ContentWithSidebar";
import {withBreadcrumb} from "../../../../components";


const AccountRoutes = () => {
    const sidebarItems = [
        {
            id:'profile',
            titleIcon:'document',
            title:'Profile',
            component:ProfileRoutes,
        },
    ];

    const contentWithSidebarProps = {
        title: 'My Account',
        items: sidebarItems,
    };

    return (
        <DoublePageLayout>
            <ContentWithSidebar {...contentWithSidebarProps}/>
        </DoublePageLayout>
    )
};

export default withRouter(withBreadcrumb('My Account')(AccountRoutes));