import React from 'react';
import classNames from 'classnames';
import {Field, reduxForm} from 'redux-form';
import {Button, Classes, FormGroup, Intent, Tag, TagInput} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';

import {FormInputText} from "../../../../../../../../../../../components/forms";
import {CardContainer, withBreadcrumb} from "../../../../../../../../../../../components";
import {Required} from "../../../../../../../../../../../components/forms/FormInputValidation/Validation";
import {connect} from "react-redux";
import {store} from "../../../../../../../../../../../modules/store";

const timeLimitField = {
    name: 'time_limit',
    label: 'Time Limit',
    labelInfo: '(required)',
    placeholder: 'Time Limit',
    validate: [Required],
    rightElement: (<Tag minimal={true}>milliseconds</Tag>)
};

const memoryLimitField = {
    name: 'memory_limit',
    label: 'Memory Limit',
    labelInfo: '(required)',
    placeholder: 'Memory Limit',
    validate: [Required],
    rightElement: (<Tag minimal={true}>megabytes</Tag>)
};

class RawEditGradingSingleProblemRepositoryForm extends React.Component {
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleSubmit()
    };

    componentDidMount() {
        if(this.props.problem){
            this.props.initialize(this.props.problem);
            this.forceUpdate();
            console.log(store.getState().form);
        }
    }

    render(){
        return (
            <form onSubmit={this.handleSubmit}>
                <Field component={FormInputText} {...timeLimitField}/>
                <Field component={FormInputText} {...memoryLimitField}/>
                <FormGroup
                    label={"Testcase"}
                    labelFor={"testcase"}
                >
                    <div className={Classes.CARD}>
                        <table className={classNames(Classes.HTML_TABLE, Classes.INTERACTIVE, Classes.FILL)}
                               style={{width: '80%', margin: 'auto'}}>
                            <thead style={{fontWeight: 'bold'}}>
                            <tr>
                                <td>Input</td>
                                <td>Output</td>
                                <td>Action</td>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td style={{textAlign: 'center'}}><Tag minimal={true}>{'/APLUSB/1.in'}</Tag></td>
                                <td style={{textAlign: 'center'}}><Tag minimal={true}>{'/APLUSB/1.in'}</Tag></td>
                                <td>
                                    <Button icon={IconNames.TRASH} intent={Intent.DANGER} minimal={true}/>
                                </td>
                            </tr>
                            <tr>
                                <td><TagInput values={['2.in']}/></td>
                                <td><TagInput values={['2.out']}/></td>
                                <td>
                                    <Button icon={IconNames.PLUS} intent={Intent.SUCCESS} minimal={true}/>
                                </td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </FormGroup>
                <Button icon={IconNames.UPDATED} intent={Intent.PRIMARY} type='submit'>
                    Update Configuration
                </Button>
            </form>
        )
    }
}

function createEditGradingSingleProblemRepositoryForm(){
    const mapStateToProps = (state,ownProps) => ({
        problem: ownProps.problem,
    });
    return connect(mapStateToProps)(reduxForm({form: 'edit-repository-single-problem-form'})(RawEditGradingSingleProblemRepositoryForm))
}

const EditGradingSingleProblemRepositoryForm = createEditGradingSingleProblemRepositoryForm()

const ProblemRepositoryGradingConfig = (props) => (
    <div className={"page__container"}>
        <CardContainer title={"Configuration"}>
            <EditGradingSingleProblemRepositoryForm problem={props.problem}/>
        </CardContainer>
    </div>
);

export default withBreadcrumb('Config')(ProblemRepositoryGradingConfig);
