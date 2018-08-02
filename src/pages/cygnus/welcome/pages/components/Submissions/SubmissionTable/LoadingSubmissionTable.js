import React from 'react';
import classNames from 'classnames';
import{Classes} from '@blueprintjs/core';

import Styles from './SubmissionTable.scss';

class LoadingSubmissionTable extends React.Component {
    render(){
        return (
            <table className={classNames(Classes.HTML_TABLE,Classes.INTERACTIVE,Styles.submission_list_wrapper)}>
                <tbody>
                    <tr>
                        <td>
                            <p className={Classes.SKELETON}>Placeholder for Username</p>
                            <p className={Classes.SKELETON}>Time</p>
                        </td>
                        <td><p className={Classes.SKELETON}>Placeholder for Title</p></td>
                        <td><p className={Classes.SKELETON}>Status</p></td>
                    </tr>
                    <tr>
                        <td>
                            <p className={Classes.SKELETON}>Placeholder for Username</p>
                            <p className={Classes.SKELETON}>Time</p>
                        </td>
                        <td><p className={Classes.SKELETON}>Placeholder for Title</p></td>
                        <td><p className={Classes.SKELETON}>Status</p></td>
                    </tr>
                    <tr>
                        <td>
                            <p className={Classes.SKELETON}>Placeholder for Username</p>
                            <p className={Classes.SKELETON}>Time</p>
                        </td>
                        <td><p className={Classes.SKELETON}>Placeholder for Title</p></td>
                        <td><p className={Classes.SKELETON}>Status</p></td>
                    </tr>
                    <tr>
                        <td>
                            <p className={Classes.SKELETON}>Placeholder for Username</p>
                            <p className={Classes.SKELETON}>Time</p>
                        </td>
                        <td><p className={Classes.SKELETON}>Placeholder for Title</p></td>
                        <td><p className={Classes.SKELETON}>Status</p></td>
                    </tr>
                    <tr>
                        <td>
                            <p className={Classes.SKELETON}>Placeholder for Username</p>
                            <p className={Classes.SKELETON}>Time</p>
                        </td>
                        <td><p className={Classes.SKELETON}>Placeholder for Title</p></td>
                        <td><p className={Classes.SKELETON}>Status</p></td>
                    </tr>

                </tbody>
            </table>
        );
    }
}

export default LoadingSubmissionTable;