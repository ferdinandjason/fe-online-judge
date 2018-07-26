import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Button } from '@blueprintjs/core';

import style from './LatestContestTable.scss';

class LatestContestTable extends React.Component {
    render(){
        return (
            <table className={classNames("bp3-html-table","bp3-interactive",style.contest_table_list_wrapper)}>
                <tbody>
                {
                    this.props.contestList.map( contest => {
                        return(
                            <tr>
                                <td>{contest.id}</td>
                                <td>{contest.title}</td>
                                <td>
                                    <Link to={"/competition/contest/"+contest.id}>
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

LatestContestTable.propTypes = {
    contestList : PropTypes.arrayOf({
        title : PropTypes.string.isRequired,
        id : PropTypes.string.isRequired,
    }).isRequired,
};

export default LatestContestTable;