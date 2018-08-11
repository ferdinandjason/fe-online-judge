import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {Button, Classes} from '@blueprintjs/core';

import Styles from './ProblemRepositoryListTable.scss';

class LoadingProblemRepositoryListTable extends React.Component {
    render() {
        return (
            <table
                className={classNames(Classes.HTML_TABLE, Classes.HTML_TABLE_STRIPED, Classes.INTERACTIVE, Styles.PROBLEM_REPO_LIST_TABLE_WRAPPER)}>
                <thead>
                <tr>
                    <th className={classNames(Styles.PROBLEM_REPO_LIST_TABLE_TITLE, Styles.PROBLEM_REPO_LIST_TABLE_RESPONSIVE)}>ID</th>
                    <th className={Styles.PROBLEM_REPO_LIST_TABLE_TITLE}>Slug</th>
                    <th className={Styles.PROBLEM_REPO_LIST_TABLE_TITLE}>Problem</th>
                    <th className={classNames(Styles.PROBLEM_REPO_LIST_TABLE_TITLE, Styles.PROBLEM_REPO_LIST_TABLE_RESPONSIVE)}>Statistic</th>
                    <th className={Styles.PROBLEM_REPO_LIST_TABLE_TITLE}>Ready</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className={Styles.PROBLEM_REPO_LIST_TABLE_RESPONSIVE}>
                        <p className={Classes.SKELETON}>Placeholder for ID</p>
                    </td>
                    <td><p className={Classes.SKELETON}>Placeholder for Slug</p></td>
                    <td><p className={Classes.SKELETON}>Placeholder for Title</p></td>
                    <td className={Styles.PROBLEM_REPO_LIST_TABLE_RESPONSIVE}>
                        <p className={Classes.SKELETON}>Placeholder for percentage</p>
                    </td>
                    <td>
                        <Link to={"/training/problem/test"} className={Classes.SKELETON}>
                            <Button icon={"arrow-right"} text={"Go!"}/>
                        </Link>
                    </td>
                </tr>
                </tbody>
            </table>
        )
    }
}

export default LoadingProblemRepositoryListTable;