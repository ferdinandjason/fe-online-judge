import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import HorizontalMenu from './components/HorizontalMenu/HorizontalMenu';
import {appRoutes , homeRoute } from './AppRoutes';

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
          <Header/>
          <HorizontalMenu items={appRoutes} homeRoute={homeRoute} />
          <Switch>
              {appRoutes.map(item => <Route key={item.id} {...item.route} /> )}
          </Switch>
      </div>
    );
  }
}

export default App;
