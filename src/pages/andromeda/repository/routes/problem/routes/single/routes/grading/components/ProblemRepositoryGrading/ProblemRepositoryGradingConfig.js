
import React from 'react';
// import classNames from 'classnames';
// import { FileInput, Classes, Button, Intent } from '@blueprintjs/core';

import {CardContainer, withBreadcrumb} from "../../../../../../../../../../../components";

const ProblemRepositoryGradingConfig = (props) => (
    <div className={"page__container"}>
        <CardContainer title={"Configuration"}>
            {"..."}
        </CardContainer>
    </div>
);

export default withBreadcrumb('Config')(ProblemRepositoryGradingConfig);
