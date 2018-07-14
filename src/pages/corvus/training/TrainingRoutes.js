import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainProblemRoutes from './problem/MainProblemRoutes';
import SingleProblemRoutes from './problem/SingleProblemRoutes';

const TrainingRoutes = () => (
    <div>
        <Switch>
            <Route path={"/training/problem/:problemId"} component={SingleProblemRoutes}/>
            <Route path={"/training/problem"} component={MainProblemRoutes}/>
            <Route path={"/training"} component={MainProblemRoutes}/>
        </Switch>
    </div>
);

export default TrainingRoutes;