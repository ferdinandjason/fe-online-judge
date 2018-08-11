import React from 'react';
import {withRouter} from "react-router-dom";

import {DoublePageLayout} from "../../../../components/layouts/DoublePageLayout";
import {ContentWithSidebarContainer, withBreadcrumb} from "../../../../components";
import {ProfileCard} from "../components/ProfileCard";


const ProfileRoutes = () => {
    const sidebarItems = [
        {
            id: 'card',
            titleIcon: 'person',
            title: 'Profile',
            component: ProfileCard,
        },
    ];

    const contentWithSidebarProps = {
        title: 'My Profile',
        items: sidebarItems,
    };

    return (
        <DoublePageLayout>
            <ContentWithSidebarContainer {...contentWithSidebarProps}/>
        </DoublePageLayout>
    )
};

export default withRouter(withBreadcrumb('My Profile')(ProfileRoutes));