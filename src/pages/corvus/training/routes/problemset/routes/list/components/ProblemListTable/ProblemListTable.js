import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import {Button, Classes, Tooltip} from '@blueprintjs/core';

import Styles from './ProblemListTable.scss';
import {IconNames} from "@blueprintjs/icons/lib/esm/index";
import {Intent, Position} from "@blueprintjs/core/lib/esm/index";

class ProblemListTable extends React.Component {
    render() {
        return (
            <table
                className={classNames(Classes.HTML_TABLE, Classes.HTML_TABLE_STRIPED, Classes.INTERACTIVE, Styles.PROBLEM_LIST_TABLE_WRAPPER)}>
                <thead>
                <tr>
                    <th className={classNames(Styles.PROBLEM_LIST_TABLE_TITLE, Styles.PROBLEM_LIST_TABLE_RESPONSIVE)}>ID</th>
                    <th className={Styles.PROBLEM_LIST_TABLE_TITLE}>Slug</th>
                    <th className={Styles.PROBLEM_LIST_TABLE_TITLE}>Problem</th>
                    <th className={classNames(Styles.PROBLEM_LIST_TABLE_TITLE, Styles.PROBLEM_LIST_TABLE_RESPONSIVE)}>Statistic</th>
                    <th className={Styles.PROBLEM_LIST_TABLE_TITLE}>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    this.props.problemList.map(problem => {
                        return (
                            <tr key={problem.id} style={{textAlign: 'center'}}>
                                <td className={Styles.PROBLEM_LIST_TABLE_RESPONSIVE}
                                    style={{textAlign: 'center'}}>{problem.id}</td>
                                <td style={{textAlign: 'center'}}>{problem.slug}</td>
                                <td style={{textAlign: 'center'}}>{problem.title}</td>
                                <td className={Styles.PROBLEM_LIST_TABLE_RESPONSIVE}
                                    style={{textAlign: 'center'}}>{problem.statistic}</td>
                                <td style={{textAlign: 'center'}}>
                                    <Link to={`/training/problem/${problem.id}`}>
                                        <Tooltip content="Enter" position={Position.TOP}>
                                            <Button icon={IconNames.LOG_IN} intent={Intent.PRIMARY}/>
                                        </Tooltip>
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

export default ProblemListTable;