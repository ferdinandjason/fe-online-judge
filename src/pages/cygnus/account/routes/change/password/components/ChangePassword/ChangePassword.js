import React from 'react';
import {CardContainer} from "../../../../../../../../components/CardContainer";
import {ChangePasswordForm} from "../ChangePasswordForm";
import {withBreadcrumb} from "../../../../../../../../components";

const ChangePassword = (props) => (
    <CardContainer title={'Change Password'}>
        <ChangePasswordForm/>
    </CardContainer>
);

export default withBreadcrumb('Change Password')(ChangePassword);