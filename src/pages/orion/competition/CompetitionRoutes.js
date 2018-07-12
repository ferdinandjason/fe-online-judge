import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainContestRoutes from "./contest/MainContestRoutes";

const CompetitionRoutes = () => (
    <div>
        <Switch>
            <Route path={"/competition/contest"} component={MainContestRoutes}/>
            <Route path={"/competition"} component={MainContestRoutes}/>
        </Switch>
    </div>
);

export default CompetitionRoutes;