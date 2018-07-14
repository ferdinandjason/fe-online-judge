import React from 'react';
import Loadable from 'react-loadable';

import { LoadingState } from "../../components";

const LoadableRepositoryRoutes = Loadable({
    loader : () => import('./repository/RepositoryRoutes'),
    loading : () => <LoadingState/>
});


class AndromedaRoutes extends React.Component{
    render(){
        return (
            <div>
                <LoadableRepositoryRoutes/>
            </div>
        );
    }
}

export default AndromedaRoutes;