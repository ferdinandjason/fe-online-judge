import {APP_CONFIG} from '../../../config';
import {selectToken} from "../../dispatcher/session";

export function omnibarAPI() {
    const baseURL = APP_CONFIG.apiURL.auth;

    return {
        fetch: (category) => {
            console.log(baseURL);
            const token = selectToken();
            console.log(token);
            return null;
        }
    }
}