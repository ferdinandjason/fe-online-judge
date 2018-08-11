import React from 'react';
import classNames from 'classnames'
import {Classes} from '@blueprintjs/core';

import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
import 'font-awesome/css/font-awesome.css';

import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';

import {ContentCard} from "../../ContentCard";

import Styles from './ProblemStatementCard.scss';

class ProblemStatementCard extends React.Component {
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

    render() {
        const {problem} = this.props;
        return (
            <ContentCard>
                <h2 className={Styles.PROBLEM_STATEMENT__NAME}>
                    {problem.slug} - {problem.title}
                </h2>
                <table className={classNames(Classes.HTML_TABLE, Classes.SMALL, Styles.PROBLEM_STATEMENT__INFO)}>
                    <tbody>
                    <tr>
                        <td>Time Limit</td>
                        <td>{this.getReadableTimeLimit(problem.time_limit)}</td>
                    </tr>
                    <tr>
                        <td>Memory Limit</td>
                        <td>{this.getReadableMemoryLimit(problem.memory_limit)}</td>
                    </tr>
                    <tr>
                        <td>Setter</td>
                        <td>{problem.owner.name}</td>
                    </tr>
                    </tbody>
                </table>
                <FroalaEditorView
                    model={problem.description}
                />
            </ContentCard>
        )
    }
}

export default ProblemStatementCard;