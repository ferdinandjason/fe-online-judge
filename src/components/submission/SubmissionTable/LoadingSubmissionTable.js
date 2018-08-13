import React from 'react';
import classNames from 'classnames';
import {Classes} from '@blueprintjs/core';

import Styles from './SubmissionTable.scss';
import {ButtonLink} from "../../ButtonLink";

class LoadingSubmissionTable extends React.Component {
    render() {
        return (
            <table
                className={classNames(Classes.HTML_TABLE, Classes.INTERACTIVE, Classes.HTML_TABLE_STRIPED, Styles.SUBMISSION_LIST_WRAPPER)}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Contestant</th>
                    <th>Problem</th>
                    <th>Language</th>
                    <th>Verdict</th>
                    <th>Time</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>admin</td>
                    <td>A</td>
                    <td>C++</td>
                    <td>ACCEPTED</td>
                    <td>0.0</td>
                    <td>
                        <ButtonLink to={'/repository/problem/1/submission/1'}/>
                    </td>
                </tr>
                <tr>
                    <td><p className={Classes.SKELETON}>ID</p></td>
                    <td><p className={Classes.SKELETON}>Contestant</p></td>
                    <td><p className={Classes.SKELETON}>Problem</p></td>
                    <td><p className={Classes.SKELETON}>Language</p></td>
                    <td><p className={Classes.SKELETON}>Verdict</p></td>
                    <td><p className={Classes.SKELETON}>Time</p></td>
                    <td><p className={Classes.SKELETON}>Action</p></td>
                </tr>
                <tr>
                    <td><p className={Classes.SKELETON}>ID</p></td>
                    <td><p className={Classes.SKELETON}>Contestant</p></td>
                    <td><p className={Classes.SKELETON}>Problem</p></td>
                    <td><p className={Classes.SKELETON}>Language</p></td>
                    <td><p className={Classes.SKELETON}>Verdict</p></td>
                    <td><p className={Classes.SKELETON}>Time</p></td>
                    <td><p className={Classes.SKELETON}>Action</p></td>
                </tr>
                <tr>
                    <td><p className={Classes.SKELETON}>ID</p></td>
                    <td><p className={Classes.SKELETON}>Contestant</p></td>
                    <td><p className={Classes.SKELETON}>Problem</p></td>
                    <td><p className={Classes.SKELETON}>Language</p></td>
                    <td><p className={Classes.SKELETON}>Verdict</p></td>
                    <td><p className={Classes.SKELETON}>Time</p></td>
                    <td><p className={Classes.SKELETON}>Action</p></td>
                </tr>
                <tr>
                    <td><p className={Classes.SKELETON}>ID</p></td>
                    <td><p className={Classes.SKELETON}>Contestant</p></td>
                    <td><p className={Classes.SKELETON}>Problem</p></td>
                    <td><p className={Classes.SKELETON}>Language</p></td>
                    <td><p className={Classes.SKELETON}>Verdict</p></td>
                    <td><p className={Classes.SKELETON}>Time</p></td>
                    <td><p className={Classes.SKELETON}>Action</p></td>
                </tr>
                <tr>
                    <td><p className={Classes.SKELETON}>ID</p></td>
                    <td><p className={Classes.SKELETON}>Contestant</p></td>
                    <td><p className={Classes.SKELETON}>Problem</p></td>
                    <td><p className={Classes.SKELETON}>Language</p></td>
                    <td><p className={Classes.SKELETON}>Verdict</p></td>
                    <td><p className={Classes.SKELETON}>Time</p></td>
                    <td><p className={Classes.SKELETON}>Action</p></td>
                </tr>
                <tr>
                    <td><p className={Classes.SKELETON}>ID</p></td>
                    <td><p className={Classes.SKELETON}>Contestant</p></td>
                    <td><p className={Classes.SKELETON}>Problem</p></td>
                    <td><p className={Classes.SKELETON}>Language</p></td>
                    <td><p className={Classes.SKELETON}>Verdict</p></td>
                    <td><p className={Classes.SKELETON}>Time</p></td>
                    <td><p className={Classes.SKELETON}>Action</p></td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default LoadingSubmissionTable;