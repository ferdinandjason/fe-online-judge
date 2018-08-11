import React from 'react';
import classNames from 'classnames'
import {Classes} from '@blueprintjs/core';

import {ContentCard} from "../../ContentCard";

import Styles from './ProblemStatementCard.scss';

class LoadingProblemStatementCard extends React.Component {
    render() {
        return (
            <ContentCard>
                <h2 className={Styles.PROBLEM_STATEMENT__NAME}>
                    <p className={Classes.SKELETON}> ASD - AASSDD</p>
                </h2>
                <table className={classNames(Classes.HTML_TABLE, Classes.SMALL, Styles.PROBLEM_STATEMENT__INFO)}>
                    <tbody>
                    <tr>
                        <td>Time Limit</td>
                        <td> -</td>
                    </tr>
                    <tr>
                        <td>Memory Limit</td>
                        <td> -</td>
                    </tr>
                    <tr>
                        <td>Setter</td>
                        <td> -</td>
                    </tr>
                    </tbody>
                </table>
                <p className={Classes.SKELETON} style={{marginTop: '15px'}}>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </ContentCard>
        )
    }
}

export default LoadingProblemStatementCard;