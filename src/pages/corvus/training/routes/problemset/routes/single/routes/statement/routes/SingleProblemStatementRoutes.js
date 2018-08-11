import React from 'react';

import {ProblemWorksheet} from "../components/ProblemWorksheet";
import {withBreadcrumb} from "../../../../../../../../../../components";

const SingleProblemStatementRoutes = () => (<ProblemWorksheet/>);

export default withBreadcrumb('Statement')(SingleProblemStatementRoutes);