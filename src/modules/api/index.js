import {sessionAPI} from "./session/session";
import {userAPI} from "./user/user";
import {omnibarAPI} from "./search/omnibar";
import {problemAPI} from "./problem/problem";
import {submissionAPI} from "./submission/submission";

export const API = {
    sessionAPI: sessionAPI(),
    userAPI: userAPI(),
    omnibarAPI: omnibarAPI(),
    problemAPI: problemAPI(),
    submissionAPI: submissionAPI(),
};