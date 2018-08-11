import React from 'react';
import {Field, reduxForm} from 'redux-form';

import {ContentCard} from "../../../../../../../../../../../components";
import {FormInputCode} from "../../../../../../../../../../../components/forms";
import {Required} from "../../../../../../../../../../../components/forms/FormInputValidation/Validation";

const codeField = {
    name: 'submission',
    label: 'Submission',
    labelInfo: '(required)',
    validate: [Required]
}

class RawProblemSubmitForm extends React.Component {
    render() {
        return (
            <Field component={FormInputCode} {...codeField}/>
        )
    }
}

const ProblemSubmitForm = reduxForm({form: 'problem-submit-form'})(RawProblemSubmitForm);

class ProblemSubmitCard extends React.Component {
    render() {
        const {problem} = this.props;
        return (
            <ContentCard>
                <ProblemSubmitForm problem={problem}/>
            </ContentCard>
        )
    }
}

export default ProblemSubmitCard;