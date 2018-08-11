import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import {ContestListRoutes} from "./list/routes/ContestListRoutes";
import {withBreadcrumb} from "../../../../../../components";


const ContestRoutes = () => (
    <div>
        <Switch>
            <Route path="/competition/" component={ContestListRoutes}/>
        </Switch>
    </div>
);

export default withRouter(withBreadcrumb('Contest', '/competition/contest')(ContestRoutes));