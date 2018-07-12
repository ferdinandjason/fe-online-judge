import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {LoginPage} from "./login/LoginPage/LoginPage";
import {WelcomePage} from "./login/WelcomePage/WelcomePage";

const CygnusRoutes = () => (
    <div>
        <Switch>
            <Route exact path={"/"} component={WelcomePage}/>
            <Route exact path={"/login"} component={LoginPage}/>
        </Switch>
    </div>
);

export default CygnusRoutes;