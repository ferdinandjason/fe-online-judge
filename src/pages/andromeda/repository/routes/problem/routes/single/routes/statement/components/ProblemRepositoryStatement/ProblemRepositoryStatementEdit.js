import React from 'react';
import { Field , reduxForm } from 'redux-form';
import { FormGroup, InputGroup, Intent, Button } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import FroalaEditor from 'react-froala-wysiwyg';

import 'froala-editor/js/froala_editor.pkgd.min';
import 'froala-editor/css/froala_style.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';

import {FormInputText} from "../../../../../../../../../../../components/forms";
import {CardContainer, withBreadcrumb} from "../../../../../../../../../../../components";
import {connect} from "react-redux";
import {problemRepositoryActions} from "../../../../modules/problem";

const titleField = {
    name: 'title',
    label: 'Title',
    labelInfo: '(required)',
    placeholder: 'Title',
};

const slugField = {
    name: 'slug',
    label: 'Slug',
    labelInfo: '(required)',
    placeholder: 'Slug',
};


class RawEditSingleProblemForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description : (props.problem)?props.problem.description:'',
            loading : false,
        };
        this.handleModelChange = this.handleModelChange.bind(this);
    }

    handleModelChange = (model) => {
        this.setState({description:model});
    };

    handleSubmit = (event) => {
        this.setState({loading:true});
        event.preventDefault();
        this.props.handleSubmit()
    };

    render(){
        return (
            <form onSubmit={this.props.handleSubmit}>
                <Field component={FormInputText} {...titleField}/>
                <Field component={FormInputText} {...slugField}/>
                <FormGroup
                    label={"Description"}
                    labelFor={"description"}
                    labelInfo={"(required)"}
                >
                    <FroalaEditor
                        model={this.state.description}
                        onModelChange={this.handleModelChange}
                    />
                </FormGroup>
                <Button icon={IconNames.UPDATED} intent={Intent.PRIMARY} type='submit' loading={this.state.loading}>
                    Update Problem
                </Button>
            </form>
        )
    }
}

const EditSingleProblemForm = reduxForm({form: 'edit-single-problem-form'})(RawEditSingleProblemForm);

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
    render(){
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
    constructor(props){
        super(props);
        this.state = {
            problem : null,
        };
    }

    async componentDidMount(){
        const problem = null; // await this.props.onFetchProblemRepo(this.props.problemId)
        this.setState({problem:problem});
    };

    renderEditProblem = (problem) => {
        if(!problem){
            return (
                <LoadingEditSingleProblemRepo/>
            )
        } else {
            return (
                <EditSingleProblemRepo problem={this.state.problem}/>
            )
        }
    };

    render(){
        return (
            this.renderEditProblem(this.state.problem)
        )
    };
}

function createProblemRepositoryStatementEdit(problemRepositoryActions) {
    const mapDispatchToProps = {
        onFetchProblemRepo : (problemId) => problemRepositoryActions.fetchProblem(problemId),
    };
    return connect(undefined,mapDispatchToProps)(ProblemRepositoryStatementEdit);
}

export default withBreadcrumb('Edit')(createProblemRepositoryStatementEdit(problemRepositoryActions));