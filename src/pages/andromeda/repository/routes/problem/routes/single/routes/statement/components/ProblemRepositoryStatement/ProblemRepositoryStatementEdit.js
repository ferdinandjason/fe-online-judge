import React from 'react';

import { FormGroup, InputGroup, Intent, TextArea } from '@blueprintjs/core';
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
        </div>
    )
};

const EditSingleProblemRepo = (props) => {
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
        </div>
    )
};


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
                <EditSingleProblemRepo problem={problem}/>
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