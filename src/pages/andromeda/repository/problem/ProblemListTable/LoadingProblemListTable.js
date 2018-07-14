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
                    <th className={style.problem_table_title}>ID</th>
                    <th className={style.problem_table_title}>Slug</th>
                    <th className={style.problem_table_title}>Problem</th>
                    <th className={style.problem_table_title}>Statistic</th>
                    <th className={style.problem_table_title}>Ready</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><p className={"bp3-skeleton"}>ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Slug</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"search"} text={"Go!"}/>
                            </Link>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"edit"} text={"Go!"}/>
                            </Link>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"log-in"} text={"Enter"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><p className={"bp3-skeleton"}>ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Slug</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"search"} text={"Go!"}/>
                            </Link>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"edit"} text={"Go!"}/>
                            </Link>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"log-in"} text={"Enter"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><p className={"bp3-skeleton"}>ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Slug</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"search"} text={"Go!"}/>
                            </Link>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"edit"} text={"Go!"}/>
                            </Link>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"log-in"} text={"Enter"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><p className={"bp3-skeleton"}>ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Slug</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"search"} text={"Go!"}/>
                            </Link>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"edit"} text={"Go!"}/>
                            </Link>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"log-in"} text={"Enter"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><p className={"bp3-skeleton"}>ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Slug</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"search"} text={"Go!"}/>
                            </Link>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"edit"} text={"Go!"}/>
                            </Link>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"log-in"} text={"Enter"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><p className={"bp3-skeleton"}>ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Slug</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"search"} text={"Go!"}/>
                            </Link>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"edit"} text={"Go!"}/>
                            </Link>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"log-in"} text={"Enter"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><p className={"bp3-skeleton"}>ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Slug</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"search"} text={"Go!"}/>
                            </Link>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"edit"} text={"Go!"}/>
                            </Link>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"log-in"} text={"Enter"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><p className={"bp3-skeleton"}>ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Slug</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"search"} text={"Go!"}/>
                            </Link>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"edit"} text={"Go!"}/>
                            </Link>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"log-in"} text={"Enter"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><p className={"bp3-skeleton"}>ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Slug</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"search"} text={"Go!"}/>
                            </Link>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"edit"} text={"Go!"}/>
                            </Link>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"log-in"} text={"Enter"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><p className={"bp3-skeleton"}>ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Slug</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"search"} text={"Go!"}/>
                            </Link>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"edit"} text={"Go!"}/>
                            </Link>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"log-in"} text={"Enter"}/>
                            </Link>
                        </td>
                    </tr>

                </tbody>
            </table>
        );
    }
}

export default LoadingProblemListTable;