import React from 'react';
import classNames from 'classnames';
import{Classes} from '@blueprintjs/core';

import Styles from './TopUserTable.scss';

class LoadingTopUserTable extends React.Component {
    render(){
        return (
            <table className={classNames(Classes.HTML_TABLE,Classes.INTERACTIVE,Styles.topuser_list_wrapper)}>
                <tbody>
                    <tr>
                        <td><p className={Classes.SKELETON}>Placeholder for Username</p></td>
                        <td><p className={Classes.SKELETON}>Points</p></td>
                    </tr>
                    <tr>
                        <td><p className={Classes.SKELETON}>Placeholder for Username</p></td>
                        <td><p className={Classes.SKELETON}>Points</p></td>
                    </tr>
                    <tr>
                        <td><p className={Classes.SKELETON}>Placeholder for Username</p></td>
                        <td><p className={Classes.SKELETON}>Points</p></td>
                    </tr>
                    <tr>
                        <td><p className={Classes.SKELETON}>Placeholder for Username</p></td>
                        <td><p className={Classes.SKELETON}>Points</p></td>
                    </tr>
                    <tr>
                        <td><p className={Classes.SKELETON}>Placeholder for Username</p></td>
                        <td><p className={Classes.SKELETON}>Points</p></td>
                    </tr>
                    <tr>
                        <td><p className={Classes.SKELETON}>Placeholder for Username</p></td>
                        <td><p className={Classes.SKELETON}>Points</p></td>
                    </tr>
                    <tr>
                        <td><p className={Classes.SKELETON}>Placeholder for Username</p></td>
                        <td><p className={Classes.SKELETON}>Points</p></td>
                    </tr>
                    

                </tbody>
            </table>
        );
    }
}

export default LoadingTopUserTable;