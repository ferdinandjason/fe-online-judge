import React from 'react';
import classNames from 'classnames';
import {Classes} from '@blueprintjs/core';

import Styles from './TopUserTable.scss';

class TopUserTable extends React.Component {
    render() {
        return (
            <table className={classNames(Classes.HTML_TABLE, Classes.INTERACTIVE, Styles.topuser_list_wrapper)}>
                <tbody>
                {
                    this.props.topuserList.map(topuser => {
                        return (
                            <tr>
                                <td>{topuser.username}</td>
                                <td>{topuser.points}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
}

export default TopUserTable;