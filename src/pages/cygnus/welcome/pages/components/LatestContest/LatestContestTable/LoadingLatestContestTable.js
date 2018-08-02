import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { Button, Classes } from '@blueprintjs/core';

import Styles from './LatestContestTable.scss';

class LoadingLatestContestTable extends React.Component {
    render(){
        return (
            <table className={classNames(Classes.HTML_TABLE,Classes.INTERACTIVE,Styles.contest_table_list_wrapper)}>
                <tbody>
                    <tr>
                        <td><p className={Classes.SKELETON}>ID</p></td>
                        <td><p className={Classes.SKELETON}>Placeholder for Title</p></td>
                        <td>
                            <Link to={"/competition/contest/test"} className={Classes.SKELETON} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><p className={Classes.SKELETON}>ID</p></td>
                        <td><p className={Classes.SKELETON}>Placeholder for Title</p></td>
                        <td>
                            <Link to={"/competition/contest/test"} className={Classes.SKELETON} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><p className={Classes.SKELETON}>ID</p></td>
                        <td><p className={Classes.SKELETON}>Placeholder for Title</p></td>
                        <td>
                            <Link to={"/competition/contest/test"} className={Classes.SKELETON} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><p className={Classes.SKELETON}>ID</p></td>
                        <td><p className={Classes.SKELETON}>Placeholder for Title</p></td>
                        <td>
                            <Link to={"/competition/contest/test"} className={Classes.SKELETON} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                    <tr>
                        <td><p className={Classes.SKELETON}>ID</p></td>
                        <td><p className={Classes.SKELETON}>Placeholder for Title</p></td>
                        <td>
                            <Link to={"/competition/contest/test"} className={Classes.SKELETON} >
                                <Button icon={"arrow-right"} text={"Go!"}/>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default LoadingLatestContestTable;