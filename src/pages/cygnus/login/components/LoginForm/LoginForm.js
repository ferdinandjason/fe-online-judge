import React from 'react';
import { InputGroup, Button, Intent } from '@blueprintjs/core';
import { Link } from 'react-router-dom'

import style from './LoginForm.scss';

import {API} from "../../../../../modules/api";

export class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showPassword : false,
        };

        this.redirectToHome = this.redirectToHome.bind(this);
    }

    handleLockClick = () => {
        this.setState({
            showPassword : !this.state.showPassword
        });
    };

    redirectToHome(){
        this.props.history.push('/');
    }

    render(){
        const lockButton = (
            <Button
                icon={this.state.showPassword ? "unlock" : "lock"}
                intent={Intent.WARNING}
                minimal={true}
                onClick={this.handleLockClick}
                className={style.form_login_button_lock}
            />
        );

        return (
            <form onSubmit={this.handleSubmit}>
                <InputGroup
                    placeholder={"Email"}
                    className={style.form_login_input}
                    onChange={this.handleEmailFieldChange}
                    type={"text"}/>
                <InputGroup
                    placeholder={"Password"}
                    rightElement={lockButton}
                    className={style.form_login_input}
                    onChange={this.handlePasswordFieldChange}
                    type={this.state.showPassword? "text":"password"}/>
                <p className={style.form_login_forgot_password}>
                    <Link to="/forgot-password">Forgot your password?</Link>
                </p>
                <div className={style.form_login_wrapper}>
                    <Button type="submit" text="Log in" intent={Intent.PRIMARY} />
                    <p className={style.form_login_register}>
                        Don't have account? <Link to="/register">Register now</Link>
                    </p>
                </div>
            </form>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { _ , email, password } = this.state;
        API.session.logIn(email,password)
            .then(()=>{
                this.redirectToHome()
            })

    };

    handleEmailFieldChange = (event) => {
        this.setState({email:event.target.value});
    };

    handlePasswordFieldChange = (event) => {
        this.setState({password:event.target.value});
    };
}