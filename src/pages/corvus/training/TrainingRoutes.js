import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { withBreadcrumb } from "../../../components";
import { MainTrainingRoutes } from "./MainTrainingRoutes";

const TrainingRoutes = () => (
    <div>
        <Switch>
            <Route path={"/training"} component={MainTrainingRoutes}/>
        </Switch>
    </div>
);

export default withBreadcrumb('Training')(TrainingRoutes);