import {sessionAPI} from "./session/session";
import {userAPI} from "./user/user";

export const API = {
    session : sessionAPI(),
    user : userAPI(),
};