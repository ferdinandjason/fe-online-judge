import React from 'react';

import {ProblemWorksheet} from "../components/ProblemWorksheet";
import {withBreadcrumb} from "../../../../../../../../../../components";

const SingleProblemStatementRoutes = (props) => (<ProblemWorksheet {...props}/>);

export default withBreadcrumb('Statement')(SingleProblemStatementRoutes);