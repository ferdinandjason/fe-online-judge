import React from "react";
import {Card, Classes, Code} from "@blueprintjs/core";
import {CardContainer, HorizontalDivider} from "../../";

class SubmissionCard extends React.Component {
    render() {
        const {submission} = this.props;
        return (
            <CardContainer title={'Submission #'}>
                <h3>General Info</h3>
                <Card>
                    <table className={Classes.HTML_TABLE} style={{width: '100%'}}>
                        <thead>
                        <tr>
                            <td>Info</td>
                            <td>Value</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>Author</td>
                            <td>{submission.author.id}</td>
                        </tr>
                        <tr>
                            <td>Problem</td>
                            <td>{submission.problem.slug} - {submission.problem.name}</td>
                        </tr>
                        <tr>
                            <td>Contest</td>
                            <td>{submission.contest.name}</td>
                        </tr>
                        <tr>
                            <td>Language</td>
                            <td>{submission.language}</td>
                        </tr>
                        <tr>
                            <td>Score</td>
                            <td>{submission.score}</td>
                        </tr>
                        <tr>
                            <td>Time</td>
                            <td>{submission.time}</td>
                        </tr>
                        </tbody>
                    </table>
                </Card>
                <HorizontalDivider/>
                <h3>Sample Test Data Result</h3>
                <Card>
                    <table className={Classes.HTML_TABLE} style={{width: '100%'}}>
                        <thead>
                        <tr>
                            <td>Id</td>
                            <td>Verdict</td>
                            <td>Time</td>
                            <td>Memory</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Wrong Answer</td>
                            <td>49 ms</td>
                            <td>256 KB</td>
                        </tr>
                        </tbody>
                    </table>
                </Card>
                <HorizontalDivider/>
                <h3>Test Data Result</h3>
                <Card>
                    <table className={Classes.HTML_TABLE} style={{width: '100%'}}>
                        <thead>
                        <tr>
                            <td>Id</td>
                            <td>Verdict</td>
                            <td>Score</td>
                            <td>Time</td>
                            <td>Memory</td>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1</td>
                            <td>Wrong Answer</td>
                            <td>0.0</td>
                            <td>49 ms</td>
                            <td>256 KB</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Wrong Answer</td>
                            <td>0.0</td>
                            <td>78 ms</td>
                            <td>340 KB</td>
                        </tr>
                        </tbody>
                    </table>
                </Card>
                <HorizontalDivider/>
                <h3>Source Files</h3>
                <CardContainer title={`source - ${submission.source_code.title}`}>
                    <Code>
                        -
                    </Code>
                    <p>Compilation Output</p>
                    <Code>
                        -
                    </Code>
                </CardContainer>
            </CardContainer>
        )
    }
}

export default SubmissionCard;