import {APP_CONFIG} from '../../../config';
import {Post} from '../request';
import {selectToken} from "../../dispatcher/session";

export function submissionAPI() {
    const baseURL = APP_CONFIG.apiURL.submission;

    return {
        create: (data) => {
            const token = selectToken();
            return Post(`${baseURL}`, token, data);
        }
    }
}