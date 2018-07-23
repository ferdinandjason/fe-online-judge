import React from 'react';
import classNames from 'classnames'
import { Classes } from '@blueprintjs/core';

import { ContentCard } from "../../ContentCard";

import Styles from './ProblemStatementCard.scss';

class ProblemStatementCard extends React.Component {
    render() {
        const { problem } = this.props;
        return (
            <ContentCard>
                <h2 className={Styles.PROBLEM_STATEMENT__NAME}>
                    {problem.slug} - {problem.title}
                </h2>
                <table className={classNames(Classes.HTML_TABLE,Classes.SMALL,Styles.PROBLEM_STATEMENT__INFO)}>
                    <tbody>
                        <tr>
                            <td>Time Limit</td>
                            <td>{this.getReadableTimeLimit(problem.timeLimit)}</td>
                        </tr>
                        <tr>
                            <td>Memory Limit</td>
                            <td>{this.getReadableMemoryLimit(problem.memoryLimit)}</td>
                        </tr>
                        <tr>
                            <td>Setter</td>
                            <td>{problem.setter}</td>
                        </tr>
                    </tbody>
                </table>
                {problem.description}
            </ContentCard>
        )
    }

    getReadableTimeLimit = (timeLimit) => {
        if (!timeLimit) {
            return '-';
        }
        if (timeLimit % 1000 === 0) {
            return timeLimit / 1000 + ' s';
        }
        return timeLimit + ' ms';
    };

    getReadableMemoryLimit = (memoryLimit) => {
        if (!memoryLimit) {
            return '-';
        }
        if (memoryLimit % 1024 === 0) {
            return memoryLimit / 1024 + ' MB';
        }
        return memoryLimit + ' KB';
    };
}

export default ProblemStatementCard;