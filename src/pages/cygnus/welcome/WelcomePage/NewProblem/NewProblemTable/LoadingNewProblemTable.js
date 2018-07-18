import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';

import style from './NewProblemTable.scss';

class LoadingNewProblemTable extends React.Component {
    render(){
        return (
            <table className={classNames("bp3-html-table","bp3-interactive",style.problem_table_list_wrapper)}>
                <tbody>
                    <tr>
                        <td><p className={"bp3-skeleton"}>ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><p className={"bp3-skeleton"}>ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><p className={"bp3-skeleton"}>ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><p className={"bp3-skeleton"}>ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
                        <td>
                            <Link to={"/training/problem/test"} className={"bp3-skeleton"} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><p className={"bp3-skeleton"}>ID</p></td>
                        <td><p className={"bp3-skeleton"}>Placeholder for Title</p></td>
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

export default LoadingNewProblemTable;