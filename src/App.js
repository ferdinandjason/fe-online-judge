import './App.css';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header, AppToaster, Menubar, Footer } from './components';
import OrionRoutes from './pages/orion/OrionRoutes';
import CorvusRoutes from "./pages/corvus/CorvusRoutes";
import CygnusRoutes from './pages/cygnus/CygnusRoutes';
import AndromedaRoutes from "./pages/andromeda/AndromedaRoutes";

import { routes } from "./AppRoutes";

class App extends Component {
    render() {
        return (
            <div style={{backgroundColor:'#f4f5f6'}}>
                <AppToaster/>
                <Header/>
                <Menubar items={routes}/>
                <Switch>
                    {/*<Route path={"/repository"} component={AndromedaRoutes}/>*/}
                    <Route path={"/competition"} component={OrionRoutes}/>
                    <Route path={"/training"} component={CorvusRoutes}/>
                    <Route path={"/"} component={CygnusRoutes}/>
                </Switch>
                <Footer/>
            </div>
        );
    }
}

export default App;
