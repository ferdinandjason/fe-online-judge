import {sessionAPI} from "./session/session";
import {userAPI} from "./user/user";
import {omnibarAPI} from "./search/omnibar";
import {problemAPI} from "./problem/problem";

export const API = {
    sessionAPI: sessionAPI(),
    userAPI: userAPI(),
    omnibarAPI: omnibarAPI(),
    problemAPI: problemAPI(),
};