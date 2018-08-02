import React from 'react';
import { withRouter } from 'react-router-dom';
import {RegisterForm} from "../RegisterForm/RegisterForm";
import {API} from "../../../../../modules/api";

class RegisterFormContainer extends React.Component {
    constructor(props){
        super(props);
        this.redirectToHome = this.redirectToHome.bind(this);
    }

    redirectToHome(){
        this.props.history.push('/');
    }

    handleRegister = (name,email,password) => {
        API.userAPI.register(name,email,password)
            .then(()=>{
                this.redirectToHome();
            });
    };

    render(){
        return (<RegisterForm onRegister={this.handleRegister}/>)
    }
}

export default withRouter(RegisterFormContainer);