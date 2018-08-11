import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import {Button, Intent} from "@blueprintjs/core";
import {IconNames} from '@blueprintjs/icons';

import 'froala-editor/js/froala_editor.pkgd.min';
import 'froala-editor/css/froala_style.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';


import {CardContainer, withBreadcrumb} from "../../../../../../../../../components/index";
import {problemRepositoryCreateActions} from "../../modules/problem";
import {FormInputEditor, FormInputText} from "../../../../../../../../../components/forms";
import {Required, Slug} from "../../../../../../../../../components/forms/FormInputValidation/Validation";

const titleField = {
    name: 'title',
    label: 'Title',
    labelInfo: '(required)',
    placeholder: 'Title',
    validate: [Required],
};

const slugField = {
    name: 'slug',
    label: 'Slug',
    labelInfo: '(required)',
    placeholder: 'Slug',
    validate: [Required, Slug],
};

const descriptionField = {
    name: 'description',
    label: 'Description',
    labelInfo: '(required)',
    validate: [Required],
};

class RawCreateProblemForm extends React.Component {
    handleSubmit = (event) => {
        this.setState({loading: !this.props.submitFailed && this.props.submitting});
        event.preventDefault();
        this.props.handleSubmit()
    };

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Field component={FormInputText} {...titleField}/>
                <Field component={FormInputText} {...slugField}/>
                <Field component={FormInputEditor} {...descriptionField} />
                <Button icon={IconNames.UPDATED} intent={Intent.PRIMARY} type='submit' loading={this.state.loading}>
                    Create Problem
                </Button>
            </form>
        )
    }
}

const CreateProblemForm = reduxForm({form: 'create-problem-form'})(RawCreateProblemForm);

class ProblemRepositoryCreateProblem extends React.Component {
    handleSubmit = (data) => {
        console.log(data);
        this.props.createProblem(data)
            .then(() => {
                this.props.history.push('/repository');
            });
    }

    render() {
        return (
            <div className="page__container">
                <CardContainer title={'Create Problem'}>
                    <CreateProblemForm onSubmit={this.handleSubmit}/>
                </CardContainer>
            </div>
        )
    }
}

function createProblemRepositoryCreateProblem(problemRepositoryCreateActions) {
    const mapDispatchToProps = {
        createProblem: (data) => problemRepositoryCreateActions.createProblemRepository(data)
    };
    return connect(undefined, mapDispatchToProps)(ProblemRepositoryCreateProblem);
}

export default withBreadcrumb('Create Problem')(createProblemRepositoryCreateProblem(problemRepositoryCreateActions));