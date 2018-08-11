import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';
import {Button, Classes} from '@blueprintjs/core';

import Styles from './NewProblemTable.scss';

class NewProblemTable extends React.Component {
    render() {
        return (
            <table className={classNames(Classes.HTML_TABLE, Classes.INTERACTIVE, Styles.problem_table_list_wrapper)}>
                <tbody>
                {
                    this.props.problemList.map(problem => {
                        return (
                            <tr>
                                <td>{problem.id}</td>
                                <td>{problem.title}</td>
                                <td>
                                    <Link to={"/training/problem/" + problem.id}>
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

NewProblemTable.propTypes = {
    problemList: PropTypes.arrayOf({
        title: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
    }).isRequired,
};

export default NewProblemTable;