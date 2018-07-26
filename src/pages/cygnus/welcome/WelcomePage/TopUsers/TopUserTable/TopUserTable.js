import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './TopUserTable.scss';

class TopUserTable extends React.Component {
    render(){
        return (
            <table className={classNames("bp3-html-table","bp3-interactive",style.topuser_list_wrapper)}>
                <tbody>
                {
                    this.props.topuserList.map( topuser => {
                        return(
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

TopUserTable.propTypes = {
    topuserList : PropTypes.arrayOf({
        username : PropTypes.string.isRequired,
        points : PropTypes.string.isRequired,
    }).isRequired,
};

export default TopUserTable;