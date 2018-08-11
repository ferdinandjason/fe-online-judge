import React from 'react';

import {ProblemSubmitCard} from "../components/ProblemSubmitCard";
import {withBreadcrumb} from "../../../../../../../../../../components";

const SingleProblemSubmitRoutes = () => (<ProblemSubmitCard/>);

export default withBreadcrumb('Submit')(SingleProblemSubmitRoutes);