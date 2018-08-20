import React from 'react';
import {withRouter} from 'react-router-dom';
import {connect} from "react-redux";
import {Field, reduxForm} from 'redux-form';
import {Button, Intent} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';

import {FormInputEditor, FormInputSwitch, FormInputText} from "../../../../../../../../../../../components/forms";
import {CardContainer, withBreadcrumb} from "../../../../../../../../../../../components";
import {problemRepositoryActions} from "../../../../modules/problem";
import {Required, Slug} from "../../../../../../../../../../../components/forms/FormInputValidation/Validation";

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

let descriptionField = {
    name: 'description',
    label: 'Description',
    labelInfo: '(required)',
    validate: [Required],
};

let publicField = {
    name: 'is_public',
    label: 'Public ?',
    labelInfo: '(user can access outside the contest)',
};


class RawEditSingleProblemForm extends React.Component {
    handleSubmit = (event) => {
        this.setState({problem: null});
        event.preventDefault();
        this.props.handleSubmit()
    };

    componentDidMount() {
        if(this.props.problem){
            descriptionField.init = this.props.problem.description;
            this.props.initialize(this.props.problem);
            this.forceUpdate();
        }
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Field component={FormInputText} {...titleField}/>
                <Field component={FormInputText} {...slugField}/>
                <Field component={FormInputEditor} {...descriptionField} />
                <Field component={FormInputSwitch} {...publicField} />
                <Button icon={IconNames.UPDATED} intent={Intent.PRIMARY} type='submit'
                        loading={!this.props.submitFailed && (this.props.submitting || this.props.submitSucceeded)}
                >
                    Update Problem
                </Button>
            </form>
        )
    }
}

function createEditSingleProblemForm(){
    const mapStateToProps = (state,ownProps) => ({
        problem: ownProps.problem,
    });
    return connect(mapStateToProps)(reduxForm({form: 'edit-statement-single-problem-form'})(RawEditSingleProblemForm))
}

const EditSingleProblemForm = createEditSingleProblemForm();

class EditSingleProblemRepo extends React.Component {
    handleSubmit = (data) => {
        console.log(data);
        this.props.onUpdateProblem(this.props.problem.id,data)
            .then(() => {
                this.props.history.push('/repository');
            });
    };

    render() {
        const title = 'Edit';
        return (
            <div className={"page__container"}>
                <CardContainer title={title}>
                    <EditSingleProblemForm problem={this.props.problem} onSubmit={this.handleSubmit}/>
                </CardContainer>
            </div>
        )
    }
}

function createEditSingleProblemRepo(problemRepositoryActions){
    const mapDispatchToProps = {
        onUpdateProblem: (problemId, data) => problemRepositoryActions.updateProblem(problemId,data),
    };
    return connect(undefined,mapDispatchToProps)(withRouter(EditSingleProblemRepo))
}

EditSingleProblemRepo = createEditSingleProblemRepo(problemRepositoryActions);


export class ProblemRepositoryStatementEdit extends React.Component {
    render() {
        return (
            <EditSingleProblemRepo problem={this.props.problem}/>
        )
    };
}

export default withBreadcrumb('Edit')(ProblemRepositoryStatementEdit);