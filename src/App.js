import './App.css';

import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';

class App extends Component {
  render() {
    return (
      <Header/>
    );
  }
}

export default App;
