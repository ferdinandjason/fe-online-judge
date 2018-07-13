import React from 'react';
import {SinglePageLayout} from "../../../../components";
import {ContestListCard} from "../../../orion/competition/contest/components";
import {RegisterForm} from "../components";

export const RegisterPage = (props) => (
    <SinglePageLayout>
        <ContestListCard title={"Register"}>
            <RegisterForm history={props.history}/>
        </ContestListCard>
    </SinglePageLayout>
);
