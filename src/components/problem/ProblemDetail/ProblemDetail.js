import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './ProblemDetail.scss';
import {CardContainer} from "../..";

export const ProblemDetail = (props) => {
    const title = (<div style={{display:'flex'}}><p>{props.problem.slug}</p>&nbsp;-&nbsp;<p>{props.problem.title}</p></div>);
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
                    <td>{props.problem.time_limit}</td>
                    <td>{props.problem.memory_limit}</td>
                    <td>{props.problem.solved}</td>
                    <td>{props.problem.problem_setter}</td>
                </tr>
                </tbody>
            </table>
        </CardContainer>
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