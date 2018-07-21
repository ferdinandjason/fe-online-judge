import React from 'react';

import { CardContainer } from "../../../../components";
import { LoginForm } from "../components";
import { SinglePageLayout } from "../../../../components/layouts";

import Styles from './LoginPage.scss';

export const LoginPage = (props) => (
    <SinglePageLayout>
        <CardContainer title={"Log In"} className={Styles.LOGIN_PAGE}>
            <LoginForm history={props.history}/>
        </CardContainer>
    </SinglePageLayout>
);
