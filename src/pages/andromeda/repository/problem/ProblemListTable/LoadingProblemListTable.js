import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';

import style from './ProblemListTable.scss';

class LoadingProblemListTable extends React.Component {
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
                <tr>
                    <td className={style.problem_table_responsive}><p className={"bp3-skeleton"}>Placeholder for ID</p></td>
                    <td><p className={"bp3-skeleton"}>Placeholder for Slug</p></td>
                    <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                    <td className={style.problem_table_responsive}><p className={"bp3-skeleton"}>Placeholder for percentage</p></td>
                    <td>
                        <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                            <Button icon={"arrow-right"} text={"Go!"}/>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td className={style.problem_table_responsive}><p className={"bp3-skeleton"}>Placeholder for ID</p></td>
                    <td><p className={"bp3-skeleton"}>Placeholder for Slug</p></td>
                    <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                    <td className={style.problem_table_responsive}><p className={"bp3-skeleton"}>Placeholder for percentage</p></td>
                    <td>
                        <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                            <Button icon={"arrow-right"} text={"Go!"}/>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td className={style.problem_table_responsive}><p className={"bp3-skeleton"}>Placeholder for ID</p></td>
                    <td><p className={"bp3-skeleton"}>Placeholder for Slug</p></td>
                    <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                    <td className={style.problem_table_responsive}><p className={"bp3-skeleton"}>Placeholder for percentage</p></td>
                    <td>
                        <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                            <Button icon={"arrow-right"} text={"Go!"}/>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td className={style.problem_table_responsive}><p className={"bp3-skeleton"}>Placeholder for ID</p></td>
                    <td><p className={"bp3-skeleton"}>Placeholder for Slug</p></td>
                    <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                    <td className={style.problem_table_responsive}><p className={"bp3-skeleton"}>Placeholder for percentage</p></td>
                    <td>
                        <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                            <Button icon={"arrow-right"} text={"Go!"}/>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td className={style.problem_table_responsive}><p className={"bp3-skeleton"}>Placeholder for ID</p></td>
                    <td><p className={"bp3-skeleton"}>Placeholder for Slug</p></td>
                    <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                    <td className={style.problem_table_responsive}><p className={"bp3-skeleton"}>Placeholder for percentage</p></td>
                    <td>
                        <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                            <Button icon={"arrow-right"} text={"Go!"}/>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td className={style.problem_table_responsive}><p className={"bp3-skeleton"}>Placeholder for ID</p></td>
                    <td><p className={"bp3-skeleton"}>Placeholder for Slug</p></td>
                    <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                    <td className={style.problem_table_responsive}><p className={"bp3-skeleton"}>Placeholder for percentage</p></td>
                    <td>
                        <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                            <Button icon={"arrow-right"} text={"Go!"}/>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td className={style.problem_table_responsive}><p className={"bp3-skeleton"}>Placeholder for ID</p></td>
                    <td><p className={"bp3-skeleton"}>Placeholder for Slug</p></td>
                    <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                    <td className={style.problem_table_responsive}><p className={"bp3-skeleton"}>Placeholder for percentage</p></td>
                    <td>
                        <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                            <Button icon={"arrow-right"} text={"Go!"}/>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td className={style.problem_table_responsive}><p className={"bp3-skeleton"}>Placeholder for ID</p></td>
                    <td><p className={"bp3-skeleton"}>Placeholder for Slug</p></td>
                    <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                    <td className={style.problem_table_responsive}><p className={"bp3-skeleton"}>Placeholder for percentage</p></td>
                    <td>
                        <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                            <Button icon={"arrow-right"} text={"Go!"}/>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td className={style.problem_table_responsive}><p className={"bp3-skeleton"}>Placeholder for ID</p></td>
                    <td><p className={"bp3-skeleton"}>Placeholder for Slug</p></td>
                    <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                    <td className={style.problem_table_responsive}><p className={"bp3-skeleton"}>Placeholder for percentage</p></td>
                    <td>
                        <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                            <Button icon={"arrow-right"} text={"Go!"}/>
                        </Link>
                    </td>
                </tr>
                <tr>
                    <td className={style.problem_table_responsive}><p className={"bp3-skeleton"}>Placeholder for ID</p></td>
                    <td><p className={"bp3-skeleton"}>Placeholder for Slug</p></td>
                    <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                    <td className={style.problem_table_responsive}><p className={"bp3-skeleton"}>Placeholder for percentage</p></td>
                    <td>
                        <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                            <Button icon={"arrow-right"} text={"Go!"}/>
                        </Link>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default LoadingProblemListTable;