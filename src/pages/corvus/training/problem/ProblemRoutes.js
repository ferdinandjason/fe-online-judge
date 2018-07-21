import * as React from 'react';
import { Route, withRouter } from 'react-router-dom';

import { withBreadcrumb } from "../../../../components";
import ProblemListPage from "./ProblemListPage/ProblemListPage";
import SingleProblemPage from "./SingleProblemPage/SingleProblemPage";


const ProblemRoutes = () => (
    <div>
        <Route path={"/training/problem/:problemId"} component={SingleProblemPage}/>
        <Route exact path={"/training/problem"} component={ProblemListPage}/>
    </div>
);

export default withRouter(withBreadcrumb('Problem Sets')(ProblemRoutes));