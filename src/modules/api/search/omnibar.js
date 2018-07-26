import {APP_CONFIG} from '../../../config';
import { selectToken } from "../../redux/session";
import { _post,_get } from '../request';

export function omnibarAPI(){
    const baseURL = APP_CONFIG.apiURL.auth;

    return {
        fetch : (category) => {
            const token = selectToken();
            return null;
        }
    }
}