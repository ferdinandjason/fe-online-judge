import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {LoginPage} from "./login/LoginPage/LoginPage";
import {WelcomePage} from "./welcome/WelcomePage/WelcomePage";
import LogoutPage from "./logout/LogoutPage/LogoutPage";

const CygnusRoutes = () => (
    <div>
        <Switch>
            <Route exact path={"/"} component={WelcomePage}/>
            <Route exact path={"/login"} component={LoginPage}/>
            <Route exact path={"/logout"} component={LogoutPage}/>
        </Switch>
    </div>
);

export default CygnusRoutes;