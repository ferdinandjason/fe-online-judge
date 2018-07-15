import React from 'react';

import { FormGroup, InputGroup, Intent, TextArea } from '@blueprintjs/core';
import {CardContainer} from "../../../../../../../components";

const LoadingEditSingleProblem = () => {
    const title = 'Edit';
    return (
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
                    label={"Description"}
                    labelFor={"description"}
                    labelInfo={"(required)"}
                >
                    <TextArea
                        large={true}
                        intent={Intent.PRIMARY}
                    />
                </FormGroup>
            </div>
        </CardContainer>
    )
};

const EditSingleProblem = (props) => {
    const title = 'Edit';
    return (
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
                    label={"Description"}
                    labelFor={"description"}
                    labelInfo={"(required)"}
                >
                    <TextArea
                        large={true}
                        intent={Intent.PRIMARY}
                        value={this.state.value}
                    />
                </FormGroup>
            </div>
        </CardContainer>
    )
}


export class EditSingleProblemPage extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            problem : null,
        };
    }

    async componentDidMount(){
        const problem = null; // await TODO : function to fetch Problem based on id
        this.setState({problem:problem});
    };

    renderEditProblem = (problem) => {
        if(!problem){
            return (
                <LoadingEditSingleProblem/>
            )
        } else {
            return (
                <EditSingleProblem problem={problem}/>
            )
        }
    };

    render(){
        return (
            this.renderEditProblem(this.state.problem)
        )
    };
}