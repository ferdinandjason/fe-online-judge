import React from 'react';
import classNames from 'classnames'
import { Classes } from '@blueprintjs/core';

import { ContentCard } from "../../../../../../../../../../../components";

import Styles from './ProblemRankCard.scss';

class LoadingProblemRankCard extends React.Component {
    render() {
        const { problem } = this.props;
        return (
            <ContentCard>
                <h2 className={Styles.PROBLEM_RANK__TITLE}>
                    Rank <p className={Classes.SKELETON}>ASD - ASDASD</p>
                </h2>
                <table className={classNames(Classes.HTML_TABLE,Classes.HTML_TABLE_BORDERED,Styles.PROBLEM_RANK__TABLE)}>
                    <thead>
                    <tr>
                        <td className={Styles.PROBLEM_RANK__TITLE}>No</td>
                        <td className={Styles.PROBLEM_RANK__TITLE}>Name</td>
                        <td className={Styles.PROBLEM_RANK__TITLE}>Time</td>
                        <td className={Styles.PROBLEM_RANK__TITLE}>Memory</td>
                    </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className={Classes.SKELETON}>Rank</td>
                            <td className={Classes.SKELETON}>Name</td>
                            <td className={Classes.SKELETON}>Time</td>
                            <td className={Classes.SKELETON}>Memory</td>
                        </tr>
                    </tbody>
                </table>
            </ContentCard>
        )
    }
}

export default LoadingProblemRankCard;