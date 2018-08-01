import {APP_CONFIG} from '../../../config';
import {_get, _post} from '../request';
import {selectToken} from "../../redux/session";

export function problemAPI() {
    const baseURL = APP_CONFIG.apiURL.problem;

    return {
        list: (page, limit) => {
            let token = selectToken();
            return _get(`${baseURL}?page=${page}&limit=${limit}`, token);
        },
        create: (data) => {
            let token = selectToken();
            return _post(`${baseURL}`, token, data);
        },
        show: (id) => {
            let token = selectToken();
            return _get(`${baseURL}/${id}`, token);
        }
    }
}