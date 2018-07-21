import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';

import style from './ProblemListTable.scss';

class ProblemListTable extends React.Component {
    render(){
        return (
            <table className={classNames("bp3-html-table","bp3-html-table-striped","bp3-interactive",style.problem_table_list_wrapper)}>
                <thead>
                <tr>
                    <th className={classNames(style.problem_table_title,style.problem_table_responsive)}>ID</th>
                    <th className={style.problem_table_title}>Slug</th>
                    <th className={style.problem_table_title}>Problem</th>
                    <th className={classNames(style.problem_table_title,style.problem_table_responsive)}>Statistic</th>
                    <th className={style.problem_table_title}>Ready</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.problemList.map( problem => {
                        return(
                            <tr>
                                <td className={style.problem_table_responsive}>{problem.id}</td>
                                <td>{problem.slug}</td>
                                <td>{problem.title}</td>
                                <td className={style.problem_table_responsive}>{problem.statistic}</td>
                                <td>
                                    <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                        <Button icon={"arrow-right"} text={"Go!"}/>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
}

ProblemListTable.propTypes = {
    problemList : PropTypes.arrayOf({
        title : PropTypes.string.isRequired,
        statistic : PropTypes.string.isRequired,
        id : PropTypes.string.isRequired,
        slug : PropTypes.string.isRequired,
    }).isRequired,
};

export default ProblemListTable;