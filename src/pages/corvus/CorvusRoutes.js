import React from 'react';
import Loadable from 'react-loadable';

import LoadingState from "../../components/LoadingState/LoadingState";

const LoadableTrainingRoutes = Loadable({
    loader : () => import('./training/TrainingRoutes'),
    loading : () => <LoadingState/>
});


class CorvusRoutes extends React.Component{
    render(){
        return (
            <div>
                <LoadableTrainingRoutes/>
            </div>
        );
    }
}

export default CorvusRoutes;