import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button } from '@blueprintjs/core';

import style from './ProblemListTable.scss';

class ProblemListTable extends React.Component {
    render(){
        return (
            <table className={"pt-html-table pt-html-table-striped pt-interactive "+style.problem_table_list_wrapper}>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Problem</th>
                        <th>Statistic</th>
                        <th>Ready</th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.props.problemList.map( problem => {
                        return(
                            <tr>
                                <td><Icon icon={"unresolve"}/></td>
                                <td>{problem.title}</td>
                                <td>{problem.statistic}</td>
                                <td>
                                    <Link to={"/training/problem/"+problem.id}>
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

export default ProblemListTable;