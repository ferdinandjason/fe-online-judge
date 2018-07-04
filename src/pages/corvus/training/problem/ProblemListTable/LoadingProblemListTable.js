import React from 'react';
import { Link } from 'react-router-dom';
import { Icon, Button } from '@blueprintjs/core';

import style from './ProblemListTable.scss';

class LoadingProblemListTable extends React.Component {
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
                    <tr>
                        <td><Icon icon={"unresolve"}/></td>
                        <td><p className={"pt-skeleton"}>Placeholder for Long Title</p></td>
                        <td><p className={"pt-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"pt-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><Icon icon={"unresolve"}/></td>
                        <td><p className={"pt-skeleton"}>Placeholder for Long Title</p></td>
                        <td><p className={"pt-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"pt-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><Icon icon={"unresolve"}/></td>
                        <td><p className={"pt-skeleton"}>Placeholder for Long Title</p></td>
                        <td><p className={"pt-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"pt-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><Icon icon={"unresolve"}/></td>
                        <td><p className={"pt-skeleton"}>Placeholder for Long Title</p></td>
                        <td><p className={"pt-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"pt-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><Icon icon={"unresolve"}/></td>
                        <td><p className={"pt-skeleton"}>Placeholder for Long Title</p></td>
                        <td><p className={"pt-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"pt-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><Icon icon={"unresolve"}/></td>
                        <td><p className={"pt-skeleton"}>Placeholder for Long Title</p></td>
                        <td><p className={"pt-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"pt-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><Icon icon={"unresolve"}/></td>
                        <td><p className={"pt-skeleton"}>Placeholder for Long Title</p></td>
                        <td><p className={"pt-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"pt-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><Icon icon={"unresolve"}/></td>
                        <td><p className={"pt-skeleton"}>Placeholder for Long Title</p></td>
                        <td><p className={"pt-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"pt-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><Icon icon={"unresolve"}/></td>
                        <td><p className={"pt-skeleton"}>Placeholder for Long Title</p></td>
                        <td><p className={"pt-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"pt-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><Icon icon={"unresolve"}/></td>
                        <td><p className={"pt-skeleton"}>Placeholder for Long Title</p></td>
                        <td><p className={"pt-skeleton"}>Placeholder percentage</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"pt-skeleton"} >
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