import React from 'react';
import {AnchorButton} from '@blueprintjs/core';
import {IconNames} from '@blueprintjs/icons';

import {SubmissionList} from "../../../../../../../../../../../components/submission";

export class SingleProblemSubmissionList extends React.Component {
    renderAction = (submissionId) => {
        const problemId = this.props.match.params.problemId;
        return (
            <AnchorButton
                href={`/repository/problem/${problemId}/submission/${submissionId}`}
                icon={IconNames.CHEVRON_RIGHT}
                text={'Enter'}
            />
        )
    };

    render() {
        return (
            <SubmissionList action={this.renderAction}/>
        )
    }
}