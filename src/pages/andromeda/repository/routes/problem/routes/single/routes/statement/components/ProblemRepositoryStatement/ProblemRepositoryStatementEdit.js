import React from 'react';
import { FormGroup, InputGroup, Intent, Button } from '@blueprintjs/core';
import { IconNames } from '@blueprintjs/icons';
import FroalaEditor from 'react-froala-wysiwyg';

import 'froala-editor/js/froala_editor.pkgd.min';
import 'froala-editor/css/froala_style.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';

import {CardContainer, withBreadcrumb} from "../../../../../../../../../../../components";
import {connect} from "react-redux";
import {problemRepositoryActions} from "../../../../modules/problem";

const LoadingEditSingleProblemRepo = () => {
    const title = 'Edit';
    return (
        <div className={"page__container"}>
            <CardContainer title={title}>
                <div>
                    <FormGroup
                        label={"Title"}
                        labelFor={"title"}
                        labelInfo={"(required)"}
                    >
                        <InputGroup id={"title"}/>
                    </FormGroup>
                    <FormGroup
                        label={"Slug"}
                        labelFor={"slug"}
                        labelInfo={"(required)"}
                    >
                        <InputGroup id={"slug"}/>
                    </FormGroup>
                    <FormGroup
                        label={"Description"}
                        labelFor={"description"}
                        labelInfo={"(required)"}
                    >
                        <FroalaEditor
                            model={undefined}
                            onModelChange={undefined}
                        />
                    </FormGroup>
                    <Button icon={IconNames.PLUS} intent={Intent.PRIMARY} type='submit'>
                        Create Problem
                    </Button>
                </div>
            </CardContainer>
        </div>
    )
};

class EditSingleProblemRepo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title : props.problem.title,
            slug : props.problem.slug,
            description : props.problem.description,
        };
        this.handleModelChange = this.handleModelChange.bind(this);
    }

    handleChange(state){
        return event => {
            let changedState = Object();
            changedState[state] = event.target.value;
            this.setState(changedState);
        }
    }

    handleModelChange = (model) => {
        this.setState({description:model});
    };

    render(){
        const title = 'Edit';
        return (
            <div className={"page__container"}>
                <CardContainer title={title}>
                    <div>
                        <FormGroup
                            label={"Title"}
                            labelFor={"title"}
                            labelInfo={"(required)"}
                        >
                            <InputGroup id={"title"} defaultValue={this.state.title} onChange={this.handleChange('title')}/>
                        </FormGroup>
                        <FormGroup
                            label={"Slug"}
                            labelFor={"slug"}
                            labelInfo={"(required)"}
                        >
                            <InputGroup id={"slug"} defaultValue={this.state.slug} onChange={this.handleChange('slug')}/>
                        </FormGroup>
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
                    </div>
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