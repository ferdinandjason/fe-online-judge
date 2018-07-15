import React from 'react';
import classNames from 'classnames';

import style from './ProblemDetail.scss';
import {CardContainer} from "../..";

export const LoadingProblemDetail = () => {
    const title = (<div style={{display:'flex'}}><p className={"bp3-skeleton"}>KODE</p>&nbsp;-&nbsp;<p className={"bp3-skeleton"}>JUDUL SOAL</p></div>);
    return (
        <CardContainer title={title} strict={true}>
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
        </CardContainer>
    )
};