
import React from 'react';
import classNames from 'classnames';
import { FileInput, Classes, Button, Intent } from '@blueprintjs/core';

import {CardContainer, withBreadcrumb, HorizontalDivider} from "../../../../../../../../../../../components";
import {DropzoneContainer} from "../../../../../../../../../../../components/forms/";

import Styles from './ProblemRepositoryStatement.scss';

const ProblemRepositoryStatementMedia = (props) => (
    <div className={"page__container"}>
        <CardContainer title={"Media"}>
            <h4> Upload New Media </h4>
            <DropzoneContainer url={'/'} accept={'image/*'}/>
            <HorizontalDivider style={{marginRight:'-20px'}}/>
            <h4> Media </h4>
            <table className={classNames(Classes.HTML_TABLE,Classes.HTML_TABLE_BORDERED,Classes.SMALL,Classes.INTERACTIVE,'.modifier',Styles.PROBLEM_REPO_STATEMENT_MEDIA_TABLE)}>
                <thead>
                <tr>
                    <th style={{textAlign:'center'}}>Filename</th>
                    <th style={{textAlign:'center'}}>Uploaded</th>
                    <th style={{textAlign:'center'}}>Size</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style={{textAlign:'center'}}>gambar1.png</td>
                    <td style={{textAlign:'center'}}>second ago</td>
                    <td style={{textAlign:'center'}}>3 MB</td>
                </tr>
                </tbody>
            </table>
        </CardContainer>
    </div>
);

export default withBreadcrumb('Media')(ProblemRepositoryStatementMedia);