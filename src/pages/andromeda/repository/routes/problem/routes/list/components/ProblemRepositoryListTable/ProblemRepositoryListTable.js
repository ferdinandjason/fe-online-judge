import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button, Classes } from '@blueprintjs/core';

import Styles from './ProblemRepositoryListTable.scss';

class ProblemRepositoryListTable extends React.Component {
    render(){
        return (
            <table className={classNames(Classes.HTML_TABLE,Classes.HTML_TABLE_STRIPED,Classes.INTERACTIVE,Styles.PROBLEM_REPO_LIST_TABLE_WRAPPER)}>
                <thead>
                <tr>
                    <th className={classNames(Styles.PROBLEM_REPO_LIST_TABLE_TITLE,Styles.PROBLEM_REPO_LIST_TABLE_RESPONSIVE)}>ID</th>
                    <th className={Styles.PROBLEM_REPO_LIST_TABLE_TITLE}>Slug</th>
                    <th className={Styles.PROBLEM_REPO_LIST_TABLE_TITLE}>Problem</th>
                    <th className={classNames(Styles.PROBLEM_REPO_LIST_TABLE_TITLE,Styles.PROBLEM_REPO_LIST_TABLE_RESPONSIVE)}>Statistic</th>
                    <th className={Styles.PROBLEM_REPO_LIST_TABLE_TITLE}>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.problemList.map( problem => {
                        return(
                            <tr>
                                <td className={Styles.PROBLEM_REPO_LIST_TABLE_RESPONSIVE}>{problem.id}</td>
                                <td>{problem.slug}</td>
                                <td>{problem.title}</td>
                                <td className={Styles.PROBLEM_REPO_LIST_TABLE_RESPONSIVE}>{problem.statistic}</td>
                                <td>
                                    <Link to={"/training/problem/test"}>
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

ProblemRepositoryListTable.propTypes = {
    problemList : PropTypes.arrayOf({
        title : PropTypes.string.isRequired,
        statistic : PropTypes.string.isRequired,
        id : PropTypes.string.isRequired,
        slug : PropTypes.string.isRequired,
    }).isRequired,
};

export default ProblemRepositoryListTable;