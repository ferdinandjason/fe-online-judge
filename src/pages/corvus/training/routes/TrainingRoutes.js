import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { withBreadcrumb } from "../../../../components";
import ProblemSetRoutes from "./problemset/routes/ProblemSetRoutes";

const TrainingRoutes = () => (
    <div>
        <Switch>
            <Route path={"/training"} component={ProblemSetRoutes}/>
        </Switch>
    </div>
);

export default withBreadcrumb('Training')(TrainingRoutes);