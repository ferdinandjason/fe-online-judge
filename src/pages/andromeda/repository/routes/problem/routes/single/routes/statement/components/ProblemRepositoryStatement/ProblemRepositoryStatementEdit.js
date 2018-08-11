import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {Button, Intent} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';

import {FormInputEditor, FormInputText} from "../../../../../../../../../../../components/forms";
import {CardContainer, withBreadcrumb} from "../../../../../../../../../../../components";
import {connect} from "react-redux";
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

const descriptionField = {
    name: 'description',
    label: 'Description',
    labelInfo: '(required)',
    validate: [Required],
};


class RawEditSingleProblemForm extends React.Component {
    handleSubmit = (event) => {
        this.setState({loading: true});
        event.preventDefault();
        this.props.handleSubmit()
    };

    constructor(props) {
        super(props);
        this.state = {
            description: (props.problem) ? props.problem.description : '',
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
                    Update Problem
                </Button>
            </form>
        )
    }
}

const EditSingleProblemForm = reduxForm({form: 'edit-statement-single-problem-form'})(RawEditSingleProblemForm);

const LoadingEditSingleProblemRepo = () => {
    const title = 'Edit';
    return (
        <div className={"page__container"}>
            <CardContainer title={title}>
                <EditSingleProblemForm/>
            </CardContainer>
        </div>
    )
};

class EditSingleProblemRepo extends React.Component {
    render() {
        const title = 'Edit';
        return (
            <div className={"page__container"}>
                <CardContainer title={title}>
                    <EditSingleProblemForm/>
                </CardContainer>
            </div>
        )
    }
}


export class ProblemRepositoryStatementEdit extends React.Component {
    renderEditProblem = (problem) => {
        if (!problem) {
            return (
                <LoadingEditSingleProblemRepo/>
            )
        } else {
            return (
                <EditSingleProblemRepo problem={this.state.problem}/>
            )
        }
    };

    constructor(props) {
        super(props);
        this.state = {
            problem: null,
        };
    }

    async componentDidMount() {
        const problem = null; // await this.props.onFetchProblemRepo(this.props.problemId)
        this.setState({problem: problem});
    };

    render() {
        return (
            this.renderEditProblem(this.state.problem)
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