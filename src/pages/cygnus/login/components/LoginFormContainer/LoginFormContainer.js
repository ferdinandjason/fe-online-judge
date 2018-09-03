import React from 'react';
import {withRouter} from 'react-router-dom';

import {LoginForm} from "../LoginForm/LoginForm";
import {store} from "../../../../../modules/store";
import {Toast} from "../../../../../modules/dispatcher/toast";
import {API} from "../../../../../modules/api";

class LoginFormContainer extends React.Component {
    handleLogin = (data) => {
        const {email, password} = data;
        API.sessionAPI.logIn(email, password)
            .then((response) => {
                this.redirectToHome();
                return Promise.resolve(response);
            });
    };

    constructor(props) {
        super(props);
        this.redirectToHome = this.redirectToHome.bind(this);
    }

    redirectToHome() {
        this.props.history.push('/');
        store.dispatch(Toast.show_('Welcome aboard , ' + store.getState().session.user.name + ' !', 'user'));
    }

    render() {
        return (<LoginForm onSubmit={this.handleLogin}/>);
    }
}

export default withRouter(LoginFormContainer);