import React from 'react';
import classNames from 'classnames'
import { Classes } from '@blueprintjs/core';

import { ContentCard } from "../../../../../../../../../../../components";

import Styles from './ProblemRankCard.scss';

class ProblemRankCard extends React.Component {
    render() {
        const { problem } = this.props;
        return (
            <ContentCard>
                <h2 className={Styles.PROBLEM_RANK__TITLE}>
                    Rank {problem.slug} - {problem.title}
                </h2>
                <table className={classNames(Classes.HTML_TABLE,Classes.HTML_TABLE_BORDERED)}>
                    <thead>
                        <tr>
                            <td>No</td>
                            <td>Name</td>
                            <td>Time</td>
                            <td>Memory</td>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.problemRankList.map(rank => {
                            return (
                                <tr>
                                    <td>{rank.number}</td>
                                    <td>{rank.name}</td>
                                    <td>{rank.time}</td>
                                    <td>{rank.memory}</td>
                                </tr>
                            )
                        })
                    }
                    </tbody>
                </table>
            </ContentCard>
        )
    }
}

export default ProblemRankCard;