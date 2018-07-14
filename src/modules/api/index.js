import {sessionAPI} from "./session/session";
import {userAPI} from "./user/user";
import {errorAPI} from "./error/error";

export const API = {
    session : sessionAPI(),
    user : userAPI(),
    error : errorAPI(),
};