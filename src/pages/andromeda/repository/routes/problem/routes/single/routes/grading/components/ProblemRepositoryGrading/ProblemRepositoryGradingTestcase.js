import React from 'react';
import classNames from 'classnames';
import {Classes} from '@blueprintjs/core';

import {CardContainer, HorizontalDivider, withBreadcrumb} from "../../../../../../../../../../../components";
import {DropzoneContainer} from "../../../../../../../../../../../components/forms/";

import Styles from './ProblemRepositoryGrading.scss';

const ProblemRepositoryGradingTestcase = (props) => (
    <div className={"page__container"}>
        <CardContainer title={"Testcase"}>
            <h4> Upload New Testcase </h4>
            <DropzoneContainer url={'/'} accept={'*'}/>
            <HorizontalDivider style={{marginRight: '-20px'}}/>
            <h4> Testcases </h4>
            <table
                className={classNames(Classes.HTML_TABLE, Classes.HTML_TABLE_BORDERED, Classes.SMALL, Classes.INTERACTIVE, '.modifier', Styles.PROBLEM_REPO_GRADING_TESTCASE_TABLE)}>
                <thead>
                <tr>
                    <th style={{textAlign: 'center'}}>Filename</th>
                    <th style={{textAlign: 'center'}}>Uploaded</th>
                    <th style={{textAlign: 'center'}}>Size</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style={{textAlign: 'center'}}>1.in</td>
                    <td style={{textAlign: 'center'}}>a second ago</td>
                    <td style={{textAlign: 'center'}}>3 MB</td>
                </tr>
                <tr>
                    <td style={{textAlign: 'center'}}>1.out</td>
                    <td style={{textAlign: 'center'}}>a second ago</td>
                    <td style={{textAlign: 'center'}}>1 MB</td>
                </tr>
                <tr>
                    <td style={{textAlign: 'center'}}>2.in</td>
                    <td style={{textAlign: 'center'}}>a minute ago</td>
                    <td style={{textAlign: 'center'}}>3 MB</td>
                </tr>
                <tr>
                    <td style={{textAlign: 'center'}}>2.out</td>
                    <td style={{textAlign: 'center'}}>a minute ago</td>
                    <td style={{textAlign: 'center'}}>1 MB</td>
                </tr>
                </tbody>
            </table>
        </CardContainer>
    </div>
);

export default withBreadcrumb('Testcase')(ProblemRepositoryGradingTestcase);


