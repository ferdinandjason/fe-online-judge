import React from 'react';
import {FormGroup} from "@blueprintjs/core";
import FroalaEditor from 'react-froala-wysiwyg';

import 'froala-editor/js/froala_editor.pkgd.min';
import 'froala-editor/css/froala_style.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';

import {FormInputValidation, getIntent} from "../FormInputValidation";
import {store} from "../../../modules/store";


export class FormInputEditor extends React.Component {
    handleModelChange = (model) => {
        this.setState({model});
        this.props.input.onChange(model);
        this.props.input.value = model;
        console.log(store.getState().form);
    };

    constructor(props) {
        super(props);
        this.state = {
            model: '',
        };
        this.handleModelChange = this.handleModelChange.bind(this);
    }

    componentWillUpdate(nextProps){
        this.props.input.onChange(nextProps.initialValue);
        this.props.input.value = nextProps.initialValue;
    }

    getModel(){
        if(this.state.model === '' && this.props.init !== undefined){
            console.log(this.props.init);
            this.setState({
                model: this.props.init,
            });
        }
        return this.state.model;
    }

    render() {
        return (
            <FormGroup
                label={this.props.label}
                labelFor={this.props.input.name}
                labelInfo={this.props.labelInfo}
                intent={getIntent(this.props.meta)}
            >
                <FroalaEditor
                    model={this.getModel()}
                    onModelChange={this.handleModelChange}
                />
                <FormInputValidation meta={this.props.meta}/>
            </FormGroup>
        )
    }
}