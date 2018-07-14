import React from 'react';
import {CardContainer, SinglePageLayout} from "../../../../components";

import {RegisterForm} from "../components";

export const RegisterPage = (props) => (
    <SinglePageLayout>
        <CardContainer title={"Register"}>
            <RegisterForm history={props.history}/>
        </CardContainer>
    </SinglePageLayout>
);