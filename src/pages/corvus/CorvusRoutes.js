import React from 'react';
import Loadable from 'react-loadable';
import { Redirect } from 'react-router-dom';

import LoadingState from "../../components/LoadingState/LoadingState";

const LoadableTrainingRoutes = Loadable({
    loader : () => import('./training/TrainingRoutes'),
    loading : () => <LoadingState/>
});


class CorvusRoutes extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div>
                <LoadableTrainingRoutes/>
            </div>
        );
    }
}

export default CorvusRoutes;