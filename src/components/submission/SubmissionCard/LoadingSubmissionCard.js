import React from "react";
import {Card, Classes, Code} from "@blueprintjs/core";
import {CardContainer, HorizontalDivider} from "../../";
import {withBreadcrumb} from "../..";

class LoadingSubmissionCard extends React.Component {
    render() {
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
                            <td className={Classes.SKELETON}>PLACEHOLDER FOR AUTHOR</td>
                        </tr>
                        <tr>
                            <td>Problem</td>
                            <td className={Classes.SKELETON}>PLACEHOLDER FOR PROBLEM</td>
                        </tr>
                        <tr>
                            <td>Contest</td>
                            <td className={Classes.SKELETON}>PLACEHOLDER FOR CONTEST</td>
                        </tr>
                        <tr>
                            <td>Language</td>
                            <td className={Classes.SKELETON}>PLACEHOLDER FOR LANGUAGE</td>
                        </tr>
                        <tr>
                            <td>Score</td>
                            <td className={Classes.SKELETON}>PLACEHOLDER FOR SCORE</td>
                        </tr>
                        <tr>
                            <td>Time</td>
                            <td className={Classes.SKELETON}>PLACEHOLDER FOR TIME</td>
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
                            <td className={Classes.SKELETON}>Wrong Answer</td>
                            <td className={Classes.SKELETON}>49 ms</td>
                            <td className={Classes.SKELETON}>256 KB</td>
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
                            <td className={Classes.SKELETON}>Wrong Answer</td>
                            <td className={Classes.SKELETON}>0.0</td>
                            <td className={Classes.SKELETON}>49 ms</td>
                            <td className={Classes.SKELETON}>256 KB</td>
                        </tr>
                        </tbody>
                    </table>
                </Card>
                <HorizontalDivider/>
                <h3>Source Files</h3>
                <CardContainer title={'source - source.cpp'}>
                    <Code style={{display: 'inline-block', width: '100%'}}>
                        CODE CODE CODE CODE CODE CODE CODE CODE CODE CODE CODE CODE CODE CODE CODE CODE CODE CODE CODE
                        CODE CODE CODE
                    </Code>
                    <p>Compilation Output</p>
                    <Code>
                        -
                    </Code>
                </CardContainer>
            </CardContainer>
        );
    }
}

export default withBreadcrumb('1')(LoadingSubmissionCard);