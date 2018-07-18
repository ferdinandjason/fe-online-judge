import React from 'react';
import classNames from 'classnames';

import style from './SubmissionTable.scss';

class LoadingSubmissionTable extends React.Component {
    render(){
        return (
            <table className={classNames("bp3-html-table","bp3-interactive",style.submission_list_wrapper)}>
                <tbody>
                    <tr>
                        <td>
                            <p className={"bp3-skeleton"}>Placeholder for Username</p>
                            <p className={"bp3-skeleton"}>Time</p>
                        </td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                        <td><p className={"bp3-skeleton"}>Status</p></td>
                    </tr>
                    <tr>
                        <td>
                            <p className={"bp3-skeleton"}>Placeholder for Username</p>
                            <p className={"bp3-skeleton"}>Time</p>
                        </td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                        <td><p className={"bp3-skeleton"}>Status</p></td>
                    </tr>
                    <tr>
                        <td>
                            <p className={"bp3-skeleton"}>Placeholder for Username</p>
                            <p className={"bp3-skeleton"}>Time</p>
                        </td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                        <td><p className={"bp3-skeleton"}>Status</p></td>
                    </tr>
                    <tr>
                        <td>
                            <p className={"bp3-skeleton"}>Placeholder for Username</p>
                            <p className={"bp3-skeleton"}>Time</p>
                        </td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                        <td><p className={"bp3-skeleton"}>Status</p></td>
                    </tr>
                    <tr>
                        <td>
                            <p className={"bp3-skeleton"}>Placeholder for Username</p>
                            <p className={"bp3-skeleton"}>Time</p>
                        </td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                        <td><p className={"bp3-skeleton"}>Status</p></td>
                    </tr>

                </tbody>
            </table>
        );
    }
}

export default LoadingSubmissionTable;