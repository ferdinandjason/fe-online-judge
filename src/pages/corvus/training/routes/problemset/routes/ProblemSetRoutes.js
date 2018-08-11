import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import Loadable from 'react-loadable';

import {LoadingState, withBreadcrumb} from "../../../../../../components";
import {ProblemListRoutes} from "./list/routes/ProblemListRoutes";

const LoadableSingleProblemRoutes = Loadable({
    loader: () => import("./single/routes/SingleProblemRoutes"),
    loading: () => <LoadingState/>
});

const ProblemSetRoutes = () => (
    <div>
        <Switch>
            <Route path="/training/problem/:problemId" component={LoadableSingleProblemRoutes}/>
            <Route path="/training/" component={ProblemListRoutes}/>
        </Switch>
    </div>
);

export default withRouter(withBreadcrumb('Problem Set', '/training/problem')(ProblemSetRoutes));