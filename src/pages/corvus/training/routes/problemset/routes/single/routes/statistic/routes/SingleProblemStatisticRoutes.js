import React from 'react';

import ProblemStatisticContainer from '../components/ProblemStatisticContainer/ProblemStatisticContainer';
import {withBreadcrumb} from "../../../../../../../../../../components";

const SingleProblemStatisticRoutes = () => (<ProblemStatisticContainer/>);

export default withBreadcrumb('Statistic')(SingleProblemStatisticRoutes)