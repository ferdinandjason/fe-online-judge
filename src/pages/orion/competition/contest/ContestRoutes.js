import * as React from 'react';
import { Route, withRouter } from 'react-router-dom';

import { withBreadcrumb } from "../../../../components";
import ContestListPage from "./ContestListPage/ContestListPage";


const ContestRoutes = () => (
    <div>
        <Route exact path={"/competition/contest"} component={ContestListPage}/>
    </div>
);

export default withRouter(withBreadcrumb('Contest')(ContestRoutes));