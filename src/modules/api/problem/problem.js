import {stringify} from 'query-string';

import {APP_CONFIG} from '../../../config';
import {_delete, _get, _post} from '../request';
import {selectToken} from "../../redux/session";

export function problemAPI() {
    const baseURL = APP_CONFIG.apiURL.problem;

    return {
        list: (page, limit, owner_id = null) => {
            const params = stringify({page, limit, owner_id});
            const token = selectToken();
            return _get(`${baseURL}?${params}`, token);
        },
        create: (data) => {
            const token = selectToken();
            return _post(`${baseURL}`, token, data);
        },
        show: (id) => {
            const token = selectToken();
            return _get(`${baseURL}/${id}`, token);
        },
        update: (id,data) => {
            const token = selectToken();
            return _post(`${baseURL}/${id}`, token, data);
        },
        delete: (id) => {
            const token = selectToken();
            return _delete(`${baseURL}/${id}`, token);
        }
    }
}