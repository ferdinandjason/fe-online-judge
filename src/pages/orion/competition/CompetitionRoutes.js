import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {withBreadcrumb} from "../../../components";
import ContestRoutes from "./routes/contest/routes/ContestRoutes";

const CompetitionRoutes = () => (
    <div>
        <Switch>
            <Route path={"/competition"} component={ContestRoutes}/>
        </Switch>
    </div>
);

export default withBreadcrumb('Competition')(CompetitionRoutes);