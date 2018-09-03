import React from 'react';
import {Route, Switch} from 'react-router-dom';

import {LoginPage} from "./login/pages/LoginPage";
import {WelcomePage} from "./welcome/pages/WelcomePage";
import LogoutPage from "./logout/pages/LogoutPage";
import {RegisterPage} from "./register/pages/RegisterPage";

import {store} from "../../modules/store";
import {ChangePlatform} from "../../modules/dispatcher/platform";
import AccountRoutes from "./account/routes/AccountRoutes";
import ProfileRoutes from "./profile/routes/ProfileRoutes";

const CygnusRoutes = () => {
    store.dispatch(ChangePlatform('Cygnus'));
    return (
        <Switch>
            <Route path={"/account"} component={AccountRoutes}/>
            <Route path={"/me"} component={ProfileRoutes}/>
            <Route exact path={"/register"} component={RegisterPage}/>
            <Route exact path={"/login"} component={LoginPage}/>
            <Route exact path={"/logout"} component={LogoutPage}/>
            <Route exact path={"/"} component={WelcomePage}/>
        </Switch>
    )
};

export default CygnusRoutes;