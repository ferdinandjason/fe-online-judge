
import React from 'react';
import classNames from 'classnames';
import { FileInput, Classes, Button, Intent } from '@blueprintjs/core';

import {CardContainer, withBreadcrumb} from "../../../../../../../../../../../components";

import Styles from './ProblemRepositoryStatement.scss';
import {HorizontalDivider} from "../../../../../../../../../../../components/HorizontalDivider";

const ProblemRepositoryStatementMedia = (props) => (
    <div className={"page__container"}>
        <CardContainer title={"Media"}>
            <h4> Upload New File </h4>
            <form>
                <div>
                    <FileInput text={"Choose a File"}/>
                </div>
                <div style={{marginTop:'20px'}}>
                    <Button text={"Upload"} icon={"export"} intent={Intent.PRIMARY}/>
                </div>
            </form>
            <HorizontalDivider/>
            <h4> Files </h4>
            <table className={classNames(Classes.HTML_TABLE,Classes.SMALL,Classes.INTERACTIVE,'.modifier',Styles.PROBLEM_REPO_STATEMENT_MEDIA_TABLE)}>
                <thead>
                <tr>
                    <th>Filename</th>
                    <th>Uploaded</th>
                    <th>Size</th>
                </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </CardContainer>
    </div>
);

export default withBreadcrumb('Media')(ProblemRepositoryStatementMedia);