import React from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from "react-redux";
import {Button, Intent} from "@blueprintjs/core";
import {IconNames} from '@blueprintjs/icons';

import {ContentCard} from "../../../../../../../../../../../components";
import {FormInputCode} from "../../../../../../../../../../../components/forms";
import {Required} from "../../../../../../../../../../../components/forms/FormInputValidation/Validation";
import {submissionActions} from "../../../../modules/submission";
import {getUser} from "../../../../../../../../../../../modules/dispatcher/session";


const codeField = {
    name: 'submission_code',
    label: 'Submission',
    labelInfo: '(required)',
    validate: [Required]
};

class RawProblemSubmitForm extends React.Component {
    handleSubmit = (event) => {
        this.setState({loading: !this.props.submitFailed && this.props.submitting});
        event.preventDefault();
        this.props.handleSubmit()
    };

    constructor(props) {
        super(props);
        this.state = {
            loading: false,
        };
    }

    componentDidMount(){
        this.props.initialize({
            user_id : getUser().id,
            problem_id : this.props.problem.id,
            contest_id : null,
            language_id : 1,
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Field component={FormInputCode} {...codeField}/>
                <Button icon={IconNames.ADD} intent={Intent.PRIMARY} type='submit' loading={this.state.loading}>
                    Create Problem
                </Button>
            </form>
        )
    }
}

function createProblemSubmitForm(){
    const mapStateToProps = (state,ownProps) => ({
        problem: ownProps.problem,
    });
    return connect(mapStateToProps)(reduxForm({form: 'problem-submit-form'})(RawProblemSubmitForm));
}

const ProblemSubmitForm = createProblemSubmitForm();

class ProblemSubmitCard extends React.Component {
    handleSubmit = (data) => {
        console.log(data);
        this.props.createSubmission(data)
            .then(() => {
                this.props.history.goBack();
            });
    };

    render() {
        const {problem,contest} = this.props;
        return (
            <ContentCard>
                <ProblemSubmitForm problem={problem} contest={contest} onSubmit={this.handleSubmit}/>
            </ContentCard>
        )
    }
}

function createProblemSubmitCard(submissionActions) {
    const mapDispatchToProps = {
        createSubmission: (data) => submissionActions.createSubmission(data)
    };
    return connect(undefined, mapDispatchToProps)(ProblemSubmitCard);
}

export default createProblemSubmitCard(submissionActions);