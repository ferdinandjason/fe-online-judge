import React from 'react';
import {connect} from "react-redux";
import {Field, reduxForm} from 'redux-form';
import {Button, Intent} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';

import {FormInputEditor, FormInputSwitch, FormInputText} from "../../../../../../../../../../../components/forms";
import {CardContainer, withBreadcrumb} from "../../../../../../../../../../../components";
import {problemRepositoryActions} from "../../../../modules/problem";
import {Required, Slug} from "../../../../../../../../../../../components/forms/FormInputValidation/Validation";
import {API} from "../../../../../../../../../../../modules/api";
import {selectToken} from "../../../../../../../../../../../modules/redux/session";

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
        this.props.onFetchProblemRepo(this.props.problemId)
            .then((problem) => {
                descriptionField.init = problem.description;
                this.props.initialize(problem);
                this.forceUpdate();
                return Promise.resolve();
            })
            .then(() => {
                API.sessionAPI.refreshToken(selectToken());
                this.render();
            });
    }

    constructor(props) {
        super(props);
        this.state = {
            description: '',
            loading: false,
        };
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Field component={FormInputText} {...titleField}/>
                <Field component={FormInputText} {...slugField}/>
                <Field component={FormInputEditor} {...descriptionField} />
                <Field component={FormInputSwitch} {...publicField} />
                <Button icon={IconNames.UPDATED} intent={Intent.PRIMARY} type='submit' loading={this.state.loading}>
                    Update Problem
                </Button>
            </form>
        )
    }
}

function createEditSingleProblemForm(problemRepositoryActions){
    const mapStateToProps = (state,ownProps) => ({
        problemId: ownProps.problemId,
    });
    const mapDispatchToProps = {
        onFetchProblemRepo: (problemId) => problemRepositoryActions.fetchProblem(problemId),
    };
    return connect(mapStateToProps,mapDispatchToProps)(reduxForm({form: 'edit-statement-single-problem-form'})(RawEditSingleProblemForm))
}

const EditSingleProblemForm = createEditSingleProblemForm(problemRepositoryActions)

class EditSingleProblemRepo extends React.Component {
    handleSubmit = (data) => {
        console.log(data);
        this.props.onUpdateProblem(this.props.problemId,data)
            .then(() => {
                this.props.history.push('/repository');
            });
    };

    render() {
        const title = 'Edit';
        return (
            <div className={"page__container"}>
                <CardContainer title={title}>
                    <EditSingleProblemForm {...this.props} onSubmit={this.handleSubmit}/>
                </CardContainer>
            </div>
        )
    }
}

function createEditSingleProblemRepo(problemRepositoryActions){
    const mapDispatchToProps = {
        onUpdateProblem: (problemId, data) => problemRepositoryActions.updateProblem(problemId,data),
    };
    return connect(undefined,mapDispatchToProps)(EditSingleProblemRepo)
}

EditSingleProblemRepo = createEditSingleProblemRepo(problemRepositoryActions);


export class ProblemRepositoryStatementEdit extends React.Component {
    getProblemIdFromURL() {
        return this.props.match.path.split('/')[3];
    }

    render() {
        return (
            <EditSingleProblemRepo problemId={this.getProblemIdFromURL()} {...this.props}/>
        )
    };
}

function createProblemRepositoryStatementEdit(problemRepositoryActions) {
    const mapDispatchToProps = {
        onFetchProblemRepo: (problemId) => problemRepositoryActions.fetchProblem(problemId),
    };
    return connect(undefined, mapDispatchToProps)(ProblemRepositoryStatementEdit);
}

export default withBreadcrumb('Edit')(createProblemRepositoryStatementEdit(problemRepositoryActions));