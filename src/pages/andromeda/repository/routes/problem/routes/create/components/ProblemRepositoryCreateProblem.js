import React from 'react';
import { Button, FormGroup, InputGroup, Intent } from "@blueprintjs/core";
import { IconNames } from '@blueprintjs/icons';

import {CardContainer, withBreadcrumb} from "../../../../../../../../components";
import WYSIWYGEditor from "../../../../../../../../components/Editor/WYSIWYGEditor";

class ProblemRepositoryCreateProblem extends React.Component {
    render(){
        return (
            <div className="page__container">
                <CardContainer title={'Create Problem'}>
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
                            <WYSIWYGEditor/>
                        </FormGroup>
                        <Button icon={IconNames.PLUS} intent={Intent.PRIMARY}>
                            Create Problem
                        </Button>
                    </div>
                </CardContainer>
            </div>
        )
    }
}

export default withBreadcrumb('Create Problem')(ProblemRepositoryCreateProblem);