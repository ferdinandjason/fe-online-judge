import React from 'react';
import { InputGroup, Button, Intent } from '@blueprintjs/core';
import { Link } from 'react-router-dom';

import { HorizontalDivider } from '../../../../../components';

import Styles from './LoginForm.scss';

import {API} from "../../../../../modules/api";
import {Toast} from "../../../../../modules/redux/toast";
import {store} from "../../../../../modules/store";

export class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showPassword : false,
        };
    }

    handleChange(state){
        return event => {
            let changedState = Object();
            changedState[state] = event.target.value;
            this.setState(changedState);
        }
    }

    handleLockClick = () => {
        this.setState({
            showPassword : !this.state.showPassword
        });
    };

    render(){
        const lockButton = (
            <Button
                icon={this.state.showPassword ? "unlock" : "lock"}
                intent={Intent.WARNING}
                minimal={true}
                onClick={this.handleLockClick}
                className={Styles.FORM_LOGIN_BUTTON_LOCK}
            />
        );

        return (
            <form onSubmit={this.handleSubmit}>
                <InputGroup
                    placeholder={"Email"}
                    className={Styles.FORM_LOGIN_INPUT}
                    onChange={this.handleChange('email')}
                    type={"text"}/>
                <InputGroup
                    placeholder={"Password"}
                    rightElement={lockButton}
                    className={Styles.FORM_LOGIN_INPUT}
                    onChange={this.handleChange('password')}
                    type={this.state.showPassword? "text":"password"}/>
                <p className={Styles.FORM_LOGIN_FORGOT_PASSWORD}>
                    <Link to="/forgot-password">Forgot your password?</Link>
                </p>

                <HorizontalDivider />

                <div className={Styles.FORM_LOGIN_WRAPPER}>
                    <Button type="submit" text="Log in" intent={Intent.PRIMARY} />
                    <p className={Styles.FORM_LOGIN_REGISTER}>
                        Don't have account? <Link to="/register">Register now</Link>
                    </p>
                </div>
            </form>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { email, password } = this.state;
        this.props.onLogin(email,password);
    }
}