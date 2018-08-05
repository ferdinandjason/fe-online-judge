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

    handleRegister = (data) => {
        const {name, email, password, retype_password} = data;
        if(password === retype_password){
            API.userAPI.register(name,email,password)
                .then(()=>{
                    this.redirectToHome();
                });
        }
    };

    render(){
        return (<RegisterForm onSubmit={this.handleRegister}/>)
    }
}

export default withRouter(RegisterFormContainer);