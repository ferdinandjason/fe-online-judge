import React from 'react';
import {FormGroup, Switch} from "@blueprintjs/core";

import {FormInputValidation, getIntent, getIntentClassName} from "../FormInputValidation/FormInputValidation";
import {store} from "../../../modules/store";

export class FormInputSwitch extends React.Component {
    handleChange = (values) => {
        this.props.input.onChange(values);
        this.props.input.value = values;
        console.log(store.getState().form);
    };

    render(){
        return (
            <FormGroup
                labelFor={this.props.input.name}
                label={this.props.label}
                labelInfo={this.props.labelInfo}
                intent={getIntent(this.props.meta)}
            >
                <Switch
                    {...this.props.input}
                    className={getIntentClassName(this.props.meta)}
                    onChange={this.handleChange}
                    checked={this.props.input.value}
                />
                <FormInputValidation meta={this.props.meta}/>
            </FormGroup>
        )
    }
}