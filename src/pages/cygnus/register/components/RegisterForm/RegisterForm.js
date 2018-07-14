import React from 'react';
import { InputGroup, Intent, Button } from "@blueprintjs/core/lib/esm/index";
import { Link } from 'react-router-dom';

import { HorizontalDivider } from '../../../../../components';

import style from '../../../login/components/LoginForm/LoginForm.scss';
import {API} from "../../../../../modules/api";

export class RegisterForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showPassword : false,
            showRetypePassword : false,
        };

        this.redirectToHome = this.redirectToHome.bind(this);
    }

    handleLockClick = () => {
        this.setState({
            showPassword : !this.state.showPassword
        });
    };

    handleLockRequiredClick = () => {
        this.setState({
            showRetypePassword : !this.state.showRetypePassword
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

        const lockButton2 = (
            <Button
                icon={this.state.showPassword ? "unlock" : "lock"}
                intent={Intent.WARNING}
                minimal={true}
                onClick={this.handleLockRequiredClick}
                className={style.form_login_button_lock}
            />
        );

        return (
            <form onSubmit={this.handleSubmit}>
                <InputGroup
                    placeholder={"Name"}
                    className={style.form_login_input}
                    onChange={this.handleNameFieldChange}
                    type={"text"}/>
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
                <InputGroup
                    placeholder={"Retype - Password"}
                    rightElement={lockButton2}
                    className={style.form_login_input}
                    onChange={this.handleRequiredPasswordFieldChange}
                    type={this.state.showPassword? "text":"password"}/>

                <HorizontalDivider />

                <div className={style.form_login_wrapper}>
                    <Button type="submit" text="Register" intent={Intent.PRIMARY} />
                    <p className={style.form_login_register}>
                        Don't have account? <Link to="/register">Register now</Link>
                    </p>
                </div>
            </form>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, password, password_valid } = this.state;
        if(password_valid){
            API.user.register(name,email,password)
                .then(()=>{
                    this.redirectToHome();
                })
        }
    };

    handleNameFieldChange = (event) => {
        this.setState({name:event.target.value});
    };

    handleEmailFieldChange = (event) => {
        this.setState({email:event.target.value});
    };

    handlePasswordFieldChange = (event) => {
        this.setState({password:event.target.value});
    };

    handleRequiredPasswordFieldChange = (event) => {
        this.setState({password_valid:(this.state.password === event.target.value)});
    };


}