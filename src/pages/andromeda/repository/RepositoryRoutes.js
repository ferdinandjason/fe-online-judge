import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainProblemRepoRoutes from './problem/MainProblemRepoRoutes';

const RepositoryRoutes = () => (
    <div>
        <Switch>
            <Route path={"/repository/problem"} component={MainProblemRepoRoutes}/>
            <Route path={"/repository"} component={MainProblemRepoRoutes}/>
        </Switch>
    </div>
);

export default RepositoryRoutes;