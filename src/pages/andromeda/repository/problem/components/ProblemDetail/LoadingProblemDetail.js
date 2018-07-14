import React from 'react';
import classNames from 'classnames';

import style from './ProblemDetail.scss';

export const LoadingProblemDetail = () => {
    return (
        <div className={classNames("bp3-card",style.problem_table_wrapper)}>
            <table className={classNames("bp3-html-table","bp3-html-table-striped",style.problem_table)}>
                <thead>
                <tr>
                    <th>Time Limit</th>
                    <th>Memory Limit</th>
                    <th>Solved</th>
                    <th>Problem Setter</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td><p className={"bp3-skeleton"}>X s</p></td>
                    <td><p className={"bp3-skeleton"}>X MB</p></td>
                    <td><p className={"bp3-skeleton"}>XXX</p></td>
                    <td><p className={"bp3-skeleton"}>Mr. XXX</p></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
};