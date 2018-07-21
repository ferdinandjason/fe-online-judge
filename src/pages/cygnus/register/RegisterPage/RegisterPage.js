import React from 'react';

import { CardContainer } from "../../../../components";
import { RegisterForm } from "../components";
import { SinglePageLayout } from "../../../../components/layouts/SinglePageLayout";

import Styles from './RegisterPage.scss';

export const RegisterPage = (props) => (
    <SinglePageLayout>
        <CardContainer title={"Register"} className={Styles.REGISTER_PAGE}>
            <RegisterForm history={props.history}/>
        </CardContainer>
    </SinglePageLayout>
);