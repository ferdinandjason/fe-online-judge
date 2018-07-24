import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import Loadable from 'react-loadable';

import {LoadingState, withBreadcrumb} from "../../../../../../components";
import {ProblemRepositoryListRoutes} from "./list/routes/ProblemRepositoryListRoutes";

const LoadableSingleProblemRepositoryRoutes = Loadable({
    loader : () => import("./single/routes/SingleProblemRepositoryRoutes"),
    loading : () => <LoadingState/>
});

const ProblemRepositoryRoutes = () => (
    <div>
        <Switch>
            <Route path="/repository/problem/:problemId" component={LoadableSingleProblemRepositoryRoutes}/>
            <Route path="/repository/" component={ProblemRepositoryListRoutes}/>
        </Switch>
    </div>
);

export default withRouter(withBreadcrumb('Problems')(ProblemRepositoryRoutes));