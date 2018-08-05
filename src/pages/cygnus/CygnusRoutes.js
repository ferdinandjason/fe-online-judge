import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { LoginPage } from "./login/pages/LoginPage";
import { WelcomePage } from "./welcome/pages/WelcomePage";
import LogoutPage from "./logout/pages/LogoutPage";
import { RegisterPage } from "./register/pages/RegisterPage";

import { store } from "../../modules/store";
import { ChangePlatform } from "../../modules/redux/platform";
import AccountRoutes from "./account/routes/AccountRoutes";

const CygnusRoutes = () => {
    store.dispatch(ChangePlatform('Cygnus'));
    return (
        <div>
            <Switch>
                <Route exact path={"/"} component={WelcomePage}/>
                <Route exact path={"/register"} component={RegisterPage}/>
                <Route exact path={"/login"} component={LoginPage}/>
                <Route exact path={"/logout"} component={LogoutPage}/>
                <Route exact path={"/profile/:userId"} component={AccountRoutes}/>
            </Switch>
        </div>
    )
};

export default CygnusRoutes;