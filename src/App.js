import './App.css';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header, AppToaster } from './components';
import OrionRoutes from './pages/orion/OrionRoutes';
import CorvusRoutes from "./pages/corvus/CorvusRoutes";
import CygnusRoutes from './pages/cygnus/CygnusRoutes';
import AndromedaRoutes from "./pages/andromeda/AndromedaRoutes";

class App extends Component {
    render() {
        return (
            <div>
                <Header/>
                <AppToaster/>
                <Switch>
                    <Route path={"/repository"} component={AndromedaRoutes}/>
                    <Route path={"/competition"} component={OrionRoutes}/>
                    <Route path={"/training"} component={CorvusRoutes}/>
                    <Route path={"/"} component={CygnusRoutes}/>
                </Switch>
            </div>
        );
    }
}

export default App;
