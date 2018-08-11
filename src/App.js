import './App.css';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Route, Switch, withRouter} from 'react-router-dom';
import DocumentTitle from 'react-document-title';

import {AppToaster, Footer, Header, Menubar} from './components';
import OrionRoutes from './pages/orion/OrionRoutes';
import CorvusRoutes from "./pages/corvus/CorvusRoutes";
import CygnusRoutes from './pages/cygnus/CygnusRoutes';
import AndromedaRoutes from "./pages/andromeda/AndromedaRoutes";

import {routes} from "./AppRoutes";
import {getDocumentTitle} from "./modules/redux/breadcrumb";

class App extends Component {
    render() {
        return (
            <DocumentTitle title={this.props.title}>
                <div style={{backgroundColor: '#f4f5f6'}}>
                    <AppToaster/>
                    <Header/>
                    <Menubar items={routes}/>
                    <Switch>
                        <Route path={"/repository"} component={AndromedaRoutes}/>
                        <Route path={"/competition"} component={OrionRoutes}/>
                        <Route path={"/training"} component={CorvusRoutes}/>
                        <Route path={"/"} component={CygnusRoutes}/>
                    </Switch>
                    <Footer/>
                </div>
            </DocumentTitle>
        );
    }
}

function createApp() {
    const mapStateToProps = (state) => ({
        title: getDocumentTitle(state),
    });
    return withRouter(connect(mapStateToProps)(App));
}

export default createApp();
