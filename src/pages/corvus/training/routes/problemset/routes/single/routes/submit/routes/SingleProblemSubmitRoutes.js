import React from 'react';

import {ProblemSubmitCard} from "../components/ProblemSubmitCard";
import {withBreadcrumb} from "../../../../../../../../../../components";

const SingleProblemSubmitRoutes = (props) => (<ProblemSubmitCard {...props}/>);

export default withBreadcrumb('Submit')(SingleProblemSubmitRoutes);