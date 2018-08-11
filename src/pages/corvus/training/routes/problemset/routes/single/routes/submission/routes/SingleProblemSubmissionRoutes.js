import React from "react";
import {SubmissionList} from "../../../../../../../../../../components/submission";
import {withBreadcrumb} from "../../../../../../../../../../components";

const SingleProblemSubmissionRoutes = (props) => (<SubmissionList/>);

export default withBreadcrumb('Submission')(SingleProblemSubmissionRoutes);