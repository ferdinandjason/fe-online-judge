import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { withBreadcrumb } from "../../../../components";
import ProblemSetRoutes from "./problemset/routes/ProblemSetRoutes";

const TrainingRoutes = () => (
    <div>
        <Redirect to={"/training/problem"}/>
        <Switch>
            <Route path={"/training/problem"} component={ProblemSetRoutes}/>
        </Switch>
    </div>
);

export default withBreadcrumb('Training')(TrainingRoutes);