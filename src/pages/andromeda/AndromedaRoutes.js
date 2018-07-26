import React from 'react';
import Loadable from 'react-loadable';

import { LoadingState } from "../../components";
import {store} from "../../modules/store";
import {ChangePlatform} from "../../modules/redux/platform";

const LoadableRepositoryRoutes = Loadable({
    loader : () => import('./repository/RepositoryRoutes'),
    loading : () => <LoadingState/>
});


class AndromedaRoutes extends React.Component{
    componentDidMount(){
        store.dispatch(ChangePlatform('Andromeda'));
    }

    render(){
        return (
            <div>
                <LoadableRepositoryRoutes/>
            </div>
        );
    }
}

export default AndromedaRoutes;