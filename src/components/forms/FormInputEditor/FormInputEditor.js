import React from 'react';
import { FormGroup } from "@blueprintjs/core";
import FroalaEditor from 'react-froala-wysiwyg';

import 'froala-editor/js/froala_editor.pkgd.min';
import 'froala-editor/css/froala_style.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';

import {store} from "../../../modules/store";
import {FormInputValidation, getIntent} from "../FormInputValidation";


export class FormInputEditor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            model : '',
        };
        this.handleModelChange = this.handleModelChange.bind(this);
    }

    handleModelChange = (model) => {
        this.setState({model});
        this.props.input.onChange(model);
        this.props.input.value = this.state.model;
        console.log(this.props);
        console.log(store.getState().form);
    };

    render(){
        return (
            <FormGroup
                label={this.props.label}
                labelFor={this.props.input.name}
                labelInfo={this.props.labelInfo}
                intent={getIntent(this.props.meta)}
            >
                <FroalaEditor
                    model={this.state.model}
                    onModelChange={this.handleModelChange}
                />
                <FormInputValidation meta={this.props.meta}/>
            </FormGroup>
        )
    }
}