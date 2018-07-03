import './App.css';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import OrionRoutes from './pages/orion/OrionRoutes';

class App extends Component {
  render() {
    return (
       <div>
          <Header/>
          <OrionRoutes/>
       </div>
    );
  }
}

export default App;
