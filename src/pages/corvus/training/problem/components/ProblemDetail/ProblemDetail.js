import React from 'react';

import style from './ProblemDetail.scss';

const ProblemDetail = (props) => {
    return (
        <div className={"pt-card "+style.problem_table_wrapper}>
            <table className={"pt-html-table pt-html-table-striped "+style.problem_table}>
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
                    <td>{props.problem.time_limit}</td>
                    <td>{props.problem.memory_limiy}</td>
                    <td>{props.problem.solved}</td>
                    <td>{props.problem.problem_setter}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
};

export default ProblemDetail;