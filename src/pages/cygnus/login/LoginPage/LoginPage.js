import React from 'react';
import {SinglePageLayout} from "../../../../components";
import {ContestListCard} from "../../../orion/competition/contest/components";
import {LoginForm} from "../components";

export const LoginPage = (props) => (
    <SinglePageLayout>
        <ContestListCard title={"Log In"}>
            <LoginForm history={props.history}/>
        </ContestListCard>
    </SinglePageLayout>
);
