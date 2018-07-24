import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import ProblemRepositoryRoutes from "./routes/problem/routes/ProblemRepositoryRoutes";
import {withBreadcrumb} from "../../../components";


const RepositoryRoutes = () => (
    <div>
        <Redirect to={"/repository/problem"}/>
        <Switch>
            <Route path={"/repository/problem"} component={ProblemRepositoryRoutes}/>
        </Switch>
    </div>
);

export default withBreadcrumb('Repository')(RepositoryRoutes);