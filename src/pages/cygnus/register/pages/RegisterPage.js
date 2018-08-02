import React from 'react';

import { CardContainer } from "../../../../components";
import { RegisterFormContainer } from "../components/RegisterFormContainer";
import { SinglePageLayout } from "../../../../components/layouts/SinglePageLayout";

import Styles from './RegisterPage.scss';

export const RegisterPage = () => (
    <SinglePageLayout>
        <CardContainer title={"Register"} className={Styles.REGISTER_PAGE}>
            <RegisterFormContainer/>
        </CardContainer>
    </SinglePageLayout>
);