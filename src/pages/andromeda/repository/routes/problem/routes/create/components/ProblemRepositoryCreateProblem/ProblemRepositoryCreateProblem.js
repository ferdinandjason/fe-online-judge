import React from 'react';
import { connect } from 'react-redux';
import { Button, FormGroup, InputGroup, Intent } from "@blueprintjs/core";
import { IconNames } from '@blueprintjs/icons';
import FroalaEditor from 'react-froala-wysiwyg';

import 'froala-editor/js/froala_editor.pkgd.min';
import 'froala-editor/css/froala_style.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';


import {CardContainer, withBreadcrumb} from "../../../../../../../../../components/index";
import {problemRepositoryCreateActions} from "../../modules/problem";

class ProblemRepositoryCreateProblem extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title : null,
            slug : null,
            description : null,
        };
        this.handleModelChange = this.handleModelChange.bind(this);
    }

    handleModelChange = (model) => {
        this.setState({description:model});
    };

    handleChange(state){
        return event => {
            let changedState = Object();
            changedState[state] = event.target.value;
            this.setState(changedState);
        }
    }

    render(){
        return (
            <div className="page__container">
                <CardContainer title={'Create Problem'}>
                    <form onSubmit={this.handleSubmit}>
                        <FormGroup
                            label={"Title"}
                            labelFor={"title"}
                            labelInfo={"(required)"}
                        >
                            <InputGroup id={"title"} onChange={this.handleChange('title')}/>
                        </FormGroup>
                        <FormGroup
                            label={"Slug"}
                            labelFor={"slug"}
                            labelInfo={"(required)"}
                        >
                            <InputGroup id={"slug"} onChange={this.handleChange('slug')}/>
                        </FormGroup>
                        <FormGroup
                            label={"Description"}
                            labelFor={"description"}
                            labelInfo={"(required)"}
                        >
                            <FroalaEditor
                                model={this.state.model}
                                onModelChange={this.handleModelChange}
                            />
                        </FormGroup>
                        <Button icon={IconNames.PLUS} intent={Intent.PRIMARY} type='submit'>
                            Create Problem
                        </Button>
                    </form>
                </CardContainer>
            </div>
        )
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.createProblem(this.state);
    }
}

function createProblemRepositoryCreateProblem(problemRepositoryCreateActions){
    const mapDispatchToProps = {
        createProblem : (data) => problemRepositoryCreateActions.createProblemRepository(data)
    };
    return connect(undefined,mapDispatchToProps)(ProblemRepositoryCreateProblem);
}

export default withBreadcrumb('Create Problem')(createProblemRepositoryCreateProblem(problemRepositoryCreateActions));