import React from 'react';
import classNames from 'classnames';
import { FormGroup,Classes,Button } from "@blueprintjs/core";

import {getIntent, getIntentClassName, FormInputValidation} from "../FormInputValidation/FormInputValidation";

import Styles from './FormInputPassword.scss';
import {Intent} from "@blueprintjs/core/lib/esm/index";

export class FormInputPassword extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showPassword : false,
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
            />
        );
        return (
            <FormGroup
                labelFor={this.props.input.name}
                label={this.props.label}
                labelInfo={this.props.labelInfo}
                intent={getIntent(this.props.meta)}
            >
                <div className={Classes.INPUT_GROUP}>
                    <input
                        {...this.props.input}
                        placeholder={this.props.placeholder}
                        type={this.state.showPassword? "text":"password"}
                        className={classNames(Classes.INPUT,getIntentClassName(this.props.meta),Styles.FORM_INPUT_PASSWORD)}
                    />
                    <span className={Classes.INPUT_ACTION}>
                        {lockButton}
                    </span>
                    <FormInputValidation meta={this.props.meta}/>
                </div>
            </FormGroup>
        )
    };

}