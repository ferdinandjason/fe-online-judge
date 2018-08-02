import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import{Classes} from '@blueprintjs/core';

import Styles from './SubmissionTable.scss';

class SubmissionTable extends React.Component {
    render(){
        return (
            <table className={classNames(Classes.HTML_TABLE,Classes.INTERACTIVE,Styles.submission_list_wrapper)}>
                <tbody>
                {
                    this.props.submissionList.map( submission => {
                        return(
                            <tr>
                                <td>
                                    {submission.username}
                                    {submission.time}
                                </td>
                                <td>{submission.problemtitle}</td>
                                <td>{submission.status}</td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        );
    }
}

SubmissionTable.propTypes = {
    submissionList : PropTypes.arrayOf({
        username : PropTypes.string.isRequired,
        time : PropTypes.string.isRequired,
        problemtittle : PropTypes.string.isRequired,
        status : PropTypes.string.isRequired,
    }).isRequired,
};

export default SubmissionTable;