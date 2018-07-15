import React from 'react';
import { InputGroup, Button, Intent } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

import { HorizontalDivider } from '../../../../../components';

import style from './LoginForm.scss';

import {API} from "../../../../../modules/api";
import {Toast} from "../../../../../modules/redux/toast";
import {store} from "../../../../../modules/store";

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
        store.dispatch(Toast.show_('Welcome aboard , '+store.getState().session.user.name+' !','user'));
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

                <HorizontalDivider />

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
        console.log(_);
        API.session.logIn(email,password)
            .then((response)=>{
                this.redirectToHome();
                return Promise.resolve();
            });

    };

    handleEmailFieldChange = (event) => {
        this.setState({email:event.target.value});
    };

    handlePasswordFieldChange = (event) => {
        this.setState({password:event.target.value});
    };
}