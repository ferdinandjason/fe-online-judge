import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { withBreadcrumb } from "../../../components";
import { MainCompetitionRoutes } from "./MainCompetitionRoutes";

const CompetitionRoutes = () => (
    <div>
        <Switch>
            <Route path={"/competition"} component={MainCompetitionRoutes}/>
        </Switch>
    </div>
);

export default withBreadcrumb('Competition')(CompetitionRoutes);