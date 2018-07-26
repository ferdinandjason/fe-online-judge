import React from 'react';
import classNames from 'classnames';

import style from './TopUserTable.scss';

class LoadingTopUserTable extends React.Component {
    render(){
        return (
            <table className={classNames("bp3-html-table","bp3-interactive",style.topuser_list_wrapper)}>
                <tbody>
                    <tr>
                        <td><p className={"bp3-skeleton"}>Placeholder for Username</p></td>
                        <td><p className={"bp3-skeleton"}>Points</p></td>
                    </tr>
                    <tr>
                        <td><p className={"bp3-skeleton"}>Placeholder for Username</p></td>
                        <td><p className={"bp3-skeleton"}>Points</p></td>
                    </tr>
                    <tr>
                        <td><p className={"bp3-skeleton"}>Placeholder for Username</p></td>
                        <td><p className={"bp3-skeleton"}>Points</p></td>
                    </tr>
                    <tr>
                        <td><p className={"bp3-skeleton"}>Placeholder for Username</p></td>
                        <td><p className={"bp3-skeleton"}>Points</p></td>
                    </tr>
                    <tr>
                        <td><p className={"bp3-skeleton"}>Placeholder for Username</p></td>
                        <td><p className={"bp3-skeleton"}>Points</p></td>
                    </tr>
                    <tr>
                        <td><p className={"bp3-skeleton"}>Placeholder for Username</p></td>
                        <td><p className={"bp3-skeleton"}>Points</p></td>
                    </tr>
                    <tr>
                        <td><p className={"bp3-skeleton"}>Placeholder for Username</p></td>
                        <td><p className={"bp3-skeleton"}>Points</p></td>
                    </tr>
                    

                </tbody>
            </table>
        );
    }
}

export default LoadingTopUserTable;