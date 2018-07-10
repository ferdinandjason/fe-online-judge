import React from 'react';
import classNames from 'classnames';

import style from './ProblemDetail.scss';

export const LoadingProblemDetail = () => {
    return (
        <div className={classNames("pt-card",style.problem_table_wrapper)}>
            <table className={classNames("pt-html-table","pt-html-table-striped",style.problem_table)}>
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
                    <td><p className={"pt-skeleton"}>X s</p></td>
                    <td><p className={"pt-skeleton"}>X MB</p></td>
                    <td><p className={"pt-skeleton"}>XXX</p></td>
                    <td><p className={"pt-skeleton"}>Mr. XXX</p></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
};