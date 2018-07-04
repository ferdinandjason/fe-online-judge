import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import MainContestRoutes from "./contest/MainContestRoutes";

const CompetitionRoutes = () => (
    <div>
        <Redirect to={"/competition/contest"}/>
        <Switch>
            <Route path={"/competition/contest"} component={MainContestRoutes}/>
        </Switch>
    </div>
);

export default CompetitionRoutes;