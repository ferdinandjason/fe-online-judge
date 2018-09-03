import React from 'react';
import classNames from 'classnames';
import {Classes} from '@blueprintjs/core';

import Styles from './SubmissionTable.scss';

class SubmissionTable extends React.Component {
    render() {
        return (
            <table className={classNames(Classes.HTML_TABLE, Classes.INTERACTIVE, Styles.SUBMISSION_LIST_WRAPPER)}>
                <thead>
                <tr>
                    <td>ID</td>
                    <td>Contestant</td>
                    <td>Problem</td>
                    <td>Language</td>
                    <td>Verdict</td>
                    <td>Time</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.submissionList.map(submission => {
                        return (
                            <tr>
                                <td>{submission.id}</td>
                                <td>{submission.author.id}</td>
                                <td>{submission.problem}</td>
                                <td>{submission.language}</td>
                                <td>{submission.verdict}</td>
                                <td>{submission.time}</td>
                                <td>
                                    {this.props.action(submission.id)}
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default SubmissionTable;