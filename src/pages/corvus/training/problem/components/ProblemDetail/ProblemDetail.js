import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './ProblemDetail.scss';

export const ProblemDetail = (props) => {
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
                    <td>{props.problem.time_limit}</td>
                    <td>{props.problem.memory_limit}</td>
                    <td>{props.problem.solved}</td>
                    <td>{props.problem.problem_setter}</td>
                </tr>
                </tbody>
            </table>
        </div>
    )
};

ProblemDetail.propTypes = {
    problem : {
        time_limit : PropTypes.string.isRequired,
        memory_limit : PropTypes.string.isRequired,
        solved : PropTypes.string.isRequired,
        problem_setter : PropTypes.string.isRequired,
    }
};