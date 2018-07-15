import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainProblemRepoRoutes from './problem/MainProblemRepoRoutes';
import SingleProblemRepoRoutes from "./problem/SingleProblemRepoRoutes";

const RepositoryRoutes = () => (
    <div>
        <Switch>
            <Route path={"/repository/problem/:problemSlug"} component={SingleProblemRepoRoutes}/>
            <Route path={"/repository/problem"} component={MainProblemRepoRoutes}/>
            <Route path={"/repository"} component={MainProblemRepoRoutes}/>
        </Switch>
    </div>
);

export default RepositoryRoutes;