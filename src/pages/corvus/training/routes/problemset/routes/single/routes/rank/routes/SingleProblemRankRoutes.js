import React from 'react';

import { ProblemRankCardContainer } from "../components/ProblemRankCardContainer";
import {withBreadcrumb} from "../../../../../../../../../../components";

const SingleProblemRankRoutes = () => (<ProblemRankCardContainer/>);

export default withBreadcrumb('Rank')(SingleProblemRankRoutes);