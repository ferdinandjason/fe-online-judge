import {APP_CONFIG} from '../../../config';
import {selectToken} from "../../redux/session";

export function omnibarAPI() {
    const baseURL = APP_CONFIG.apiURL.auth;

    return {
        fetch: (category) => {
            const token = selectToken();
            return null;
        }
    }
}