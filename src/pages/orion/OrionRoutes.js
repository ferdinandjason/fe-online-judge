import React from 'react';
import Loadable from 'react-loadable';

import {LoadingState} from "../../components";
import {store} from "../../modules/store";
import {ChangePlatform} from "../../modules/redux/platform";

const LoadableCompetitionRoutes = Loadable({
    loader: () => import('./competition/CompetitionRoutes'),
    loading: () => <LoadingState/>
});


class OrionRoutes extends React.Component {
    componentDidMount() {
        store.dispatch(ChangePlatform('Orion'));
    }

    render() {
        return (
            <div>
                <LoadableCompetitionRoutes/>
            </div>
        );
    }
}

export default OrionRoutes;