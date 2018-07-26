import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import ProblemRepositoryRoutes from "./routes/problem/routes/ProblemRepositoryRoutes";
import {withBreadcrumb} from "../../../components";


const RepositoryRoutes = () => (
    <div>
        <Switch>
            <Route path={"/repository"} component={ProblemRepositoryRoutes}/>
        </Switch>
    </div>
);

export default withBreadcrumb('Repository')(RepositoryRoutes);