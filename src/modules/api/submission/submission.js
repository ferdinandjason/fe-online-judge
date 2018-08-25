import {APP_CONFIG} from '../../../config';
import {_post} from '../request';
import {selectToken} from "../../redux/session";

export function submissionAPI() {
    const baseURL = APP_CONFIG.apiURL.submission;

    return {
        create: (data) => {
            const token = selectToken();
            return _post(`${baseURL}`, token, data);
        }
    }
}