import React from 'react';
import Loadable from 'react-loadable';

import {LoadingState} from "../../components";
import {store} from "../../modules/store";
import {ChangePlatform} from "../../modules/dispatcher/platform";

const LoadableTrainingRoutes = Loadable({
    loader: () => import('./training/routes/TrainingRoutes'),
    loading: () => <LoadingState/>
});


class CorvusRoutes extends React.Component {
    componentDidMount() {
        store.dispatch(ChangePlatform('Corvus'));
    }

    render() {
        return (
            <div>
                <LoadableTrainingRoutes/>
            </div>
        );
    }
}

export default CorvusRoutes;