import {sessionAPI} from "./session/session";
import {userAPI} from "./user/user";
import {errorAPI} from "./error/error";
import {omnibarAPI} from "./search/omnibar";
import {problemAPI} from "./problem/problem";

export {sessionAPI} from "./session/session";
export {userAPI} from "./user/user";
export {errorAPI} from "./error/error";
export {omnibarAPI} from "./search/omnibar";
export {problemAPI} from "./problem/problem";

export const API = {
    sessionAPI: sessionAPI(),
    userAPI: userAPI(),
    errorAPI: errorAPI(),
    omnibarAPI: omnibarAPI(),
    problemAPI: problemAPI(),
};