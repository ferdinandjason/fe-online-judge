import React from 'react';
import {withRouter} from "react-router-dom";

import ProfileRoutes from "./profile/routes/ProfileRoutes";
import {DoublePageLayout} from "../../../../components/layouts/DoublePageLayout";
import { ContentWithSidebarContainer } from "../../../../components";
import {withBreadcrumb} from "../../../../components";
import {ChangeAvatar} from "./change/avatar/components/ChangeAvatar";
import {ChangePassword} from "./change/password/components/ChangePassword";


const AccountRoutes = () => {
    const sidebarItems = [
        {
            id:'profile',
            titleIcon:'person',
            title:'Profile',
            component:ProfileRoutes,
        },
        {
            id:'avatar',
            titleIcon:'media',
            title:'Change Avatar',
            component:ChangeAvatar,
        },
        {
            id:'password',
            titleIcon:'lock',
            title:'Change Password',
            component:ChangePassword,
        },
    ];

    const contentWithSidebarProps = {
        title: 'My Account',
        items: sidebarItems,
    };

    return (
        <DoublePageLayout>
            <ContentWithSidebarContainer {...contentWithSidebarProps}/>
        </DoublePageLayout>
    )
};

export default withRouter(withBreadcrumb('My Account')(AccountRoutes));