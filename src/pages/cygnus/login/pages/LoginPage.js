import React from 'react';

import {CardContainer} from "../../../../components";
import {LoginFormContainer} from "../components/LoginFormContainer";
import {SinglePageLayout} from "../../../../components/layouts";

import Styles from './LoginPage.scss';

export const LoginPage = () => (
    <SinglePageLayout>
        <CardContainer title={"Log In"} className={Styles.LOGIN_PAGE}>
            <LoginFormContainer/>
        </CardContainer>
    </SinglePageLayout>
);
