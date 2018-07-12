import './App.css';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import OrionRoutes from './pages/orion/OrionRoutes';
import CorvusRoutes from "./pages/corvus/CorvusRoutes";
import CygnusRoutes from './pages/cygnus/CygnusRoutes';

class App extends Component {
  render() {
    return (
       <div>
          <Header/>
          <Switch>
              <Route path={"/"} component={CygnusRoutes}/>
              <Route path={"/competition"} component={OrionRoutes}/>
              <Route path={"/training"} component={CorvusRoutes}/>
          </Switch>
       </div>
    );
  }
}

export default App;
