import React from 'react';
import { Button, InputGroup, Intent, Classes, ButtonGroup } from '@blueprintjs/core';

import style from './LoginForm.scss';
import {API} from "../../modules/api";

export class LoginForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            showPassword : false,
            username : null,
            password : null,
        };

    }

    render(){
        const lockButton = (
            <Button
                icon={this.state.showPassword ? "unlock" : "lock"}
                intent={Intent.WARNING}
                minimal={true}
                onClick={this.handleLockClick}
            />
        );

        const userButton = (
            <Button
                icon={"user"}
                intent={Intent.WARNING}
                minimal={true}
                onClick={this.handleLockClick}
            />
        );

        return (
            <form className={style.login_form_wrapper} onSubmit={this.handleSubmit}>
                <InputGroup
                    placeholder={"Enter yout username..."}
                    rightElement={userButton}
                    className={style.login_form_input}
                    onChange={this.handleUsernameFieldChange}
                    type={"text"}/>
                <InputGroup
                    placeholder={"Enter yout password..."}
                    rightElement={lockButton}
                    className={style.login_form_input}
                    onChange={this.handlePasswordFieldChange}
                    type={this.state.showPassword? "text":"password"}/>
                <ButtonGroup className={style.login_form_button}>
                    <Button className={Classes.POPOVER_DISMISS} icon={"key-escape"}>
                        Cancel
                    </Button>
                    <Button intent={Intent.SUCCESS} icon={'key-enter'} type={"submit"}>
                        Submit
                    </Button>
                </ButtonGroup>
            </form>
        )


    }

    handleLockClick = () => {
        this.setState({
            showPassword : !this.state.showPassword
        });
    };

    handleSubmit = () => {
        const { _ , username, password } = this.state;
        API.session.logIn(username,password);
    };

    handleUsernameFieldChange = (event) => {
        console.log(event.target.value);
        this.setState({username:event.target.value});
    };

    handlePasswordFieldChange = (event) => {
        this.setState({password:event.target.value});
    };
}