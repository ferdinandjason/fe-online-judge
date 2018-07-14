import React from 'react';
import {CardContainer, SinglePageLayout} from "../../../../components";

import {LoginForm} from "../components";

export const LoginPage = (props) => (
    <SinglePageLayout>
        <CardContainer title={"Log In"}>
            <LoginForm history={props.history}/>
        </CardContainer>
    </SinglePageLayout>
);
