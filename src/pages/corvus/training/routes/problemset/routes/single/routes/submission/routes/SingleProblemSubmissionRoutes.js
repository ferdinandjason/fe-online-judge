import React from "react";

import {withBreadcrumb} from "../../../../../../../../../../components";
import {SingleProblemSubmissionList} from "../components/SingleProblemSubmissionList/SingleProblemSubmissionList";

const SingleProblemSubmissionRoutes = (props) => (<SingleProblemSubmissionList/>);

export default withBreadcrumb('Submission')(SingleProblemSubmissionRoutes);