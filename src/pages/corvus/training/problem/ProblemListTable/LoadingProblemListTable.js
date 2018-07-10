import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Icon, Button } from '@blueprintjs/core';

import style from './ProblemListTable.scss';

class LoadingProblemListTable extends React.Component {
    render(){
        return (
            <table className={classNames("bp3-html-table","bp3-html-table-striped","bp3-interactive",style.problem_table_list_wrapper)}>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Problem</th>
                    <th>Problem ID</th>
                    <th>Statistic</th>
                    <th>Ready</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><Icon icon={"unresolve"}/></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Long Title</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><Icon icon={"unresolve"}/></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Long Title</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><Icon icon={"unresolve"}/></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Long Title</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><Icon icon={"unresolve"}/></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Long Title</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><Icon icon={"unresolve"}/></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Long Title</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><Icon icon={"unresolve"}/></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Long Title</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><Icon icon={"unresolve"}/></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Long Title</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><Icon icon={"unresolve"}/></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Long Title</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><Icon icon={"unresolve"}/></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Long Title</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><Icon icon={"unresolve"}/></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Long Title</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder percentage</p></td>
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