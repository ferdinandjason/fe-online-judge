import React from 'react';
import Loadable from 'react-loadable';
import { Route, Switch } from 'react-router-dom';

import { LoadingState } from "../../../../components";
import { withBreadcrumb } from "../../../../components";
import { ProblemListRoutes } from "./problemset/routes/list/routes/ProblemListRoutes";
import SingleProblemDataRoutes from "./problemset/routes/single/routes/SingleProblemDataRoutes";

const LoadableSingleProblemRoutes = Loadable({
    loader : () => import("./problemset/routes/single/routes/SingleProblemRoutes"),
    loading : () => <LoadingState/>
});

const TrainingRoutes = () => (
    <div>
        <Switch>
            <Route path={"/training/problem/:problemId"} component={LoadableSingleProblemRoutes}/>
            <Route path={"/training/problem/:problemId"} component={SingleProblemDataRoutes}/>
            <Route path={"/training"} component={ProblemListRoutes}/>
        </Switch>
    </div>
);

export default withBreadcrumb('Training')(TrainingRoutes);