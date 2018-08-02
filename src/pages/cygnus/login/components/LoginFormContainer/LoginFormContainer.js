import React from 'react';
import { withRouter } from 'react-router-dom';

import {LoginForm} from "../LoginForm/LoginForm";
import {store} from "../../../../../modules/store";
import {Toast} from "../../../../../modules/redux/toast";
import {API} from "../../../../../modules/api";

class LoginFormContainer extends React.Component {
    constructor(props){
        super(props);
        this.redirectToHome = this.redirectToHome.bind(this);
    }

    redirectToHome(){
        this.props.history.push('/');
        store.dispatch(Toast.show_('Welcome aboard , '+store.getState().session.user.name+' !','user'));
    }

    handleLogin = (email,password) => {
        console.log(email,password);
        API.sessionAPI.logIn(email,password)
            .then((response)=>{
                this.redirectToHome();
                return Promise.resolve(response);
            });
    };

    render(){
        return (<LoginForm onLogin={this.handleLogin}/>);
    }
}

export default withRouter(LoginFormContainer);