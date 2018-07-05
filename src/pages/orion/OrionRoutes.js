import React from 'react';
import Loadable from 'react-loadable';

import LoadingState from "../../components/LoadingState/LoadingState";

const LoadableCompetitionRoutes = Loadable({
    loader : () => import('./competition/CompetitionRoutes'),
    loading : () => <LoadingState/>
});


class OrionRoutes extends React.Component{
    render(){
        return (
            <div>
                <LoadableCompetitionRoutes/>
            </div>
        );
    }
}

export default OrionRoutes;