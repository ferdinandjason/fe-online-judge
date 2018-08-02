import React from 'react';
import { InputGroup, Intent, Button } from "@blueprintjs/core/lib/esm/index";
import { Link } from 'react-router-dom';

import { HorizontalDivider } from '../../../../../components';

import Styles from '../../../login/components/LoginForm/LoginForm.scss';

export class RegisterForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showPassword : false,
            showRetypePassword : false,
        };
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

    handleChange(state){
        return event => {
            let changedState = Object();
            changedState[state] = event.target.value;
            this.setState(changedState);
        }
    }

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

        const lockButton2 = (
            <Button
                icon={this.state.showPassword ? "unlock" : "lock"}
                intent={Intent.WARNING}
                minimal={true}
                onClick={this.handleLockRequiredClick}
                className={Styles.FORM_LOGIN_BUTTON_LOCK}
            />
        );

        return (
            <form onSubmit={this.handleSubmit}>
                <InputGroup
                    placeholder={"Name"}
                    className={Styles.FORM_LOGIN_INPUT}
                    onChange={this.handleChange('name')}
                    type={"text"}/>
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
                <InputGroup
                    placeholder={"Retype - Password"}
                    rightElement={lockButton2}
                    className={Styles.FORM_LOGIN_INPUT}
                    onChange={this.handleRequiredPasswordFieldChange}
                    type={this.state.showPassword? "text":"password"}/>

                <HorizontalDivider />

                <div className={Styles.FORM_LOGIN_WRAPPER}>
                    <Button type="submit" text="Register" intent={Intent.PRIMARY} />
                    <p className={Styles.FORM_LOGIN_REGISTER}>
                        Already have a account? <Link to="/login">Login now</Link>
                    </p>
                </div>
            </form>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { name, email, password, password_valid } = this.state;
        if(password_valid){
            this.props.onRegister(name,email,password);
        }
    };

    handleRequiredPasswordFieldChange = (event) => {
        this.setState({password_valid:(this.state.password === event.target.value)});
    };
}