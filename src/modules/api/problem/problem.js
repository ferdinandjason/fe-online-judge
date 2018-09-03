import {stringify} from 'query-string';

import {APP_CONFIG} from '../../../config';
import {Delete, Get, Post} from '../request';
import {selectToken} from "../../dispatcher/session";

export function problemAPI() {
    const baseURL = APP_CONFIG.apiURL.problem;

    return {
        list: (page, limit, owner_id = null, is_public = null) => {
            const params = stringify({page, limit, owner_id, is_public});
            const token = selectToken();
            return Get(`${baseURL}?${params}`, token);
        },
        create: (data) => {
            const token = selectToken();
            return Post(`${baseURL}`, token, data);
        },
        show: (id) => {
            const token = selectToken();
            return Get(`${baseURL}/${id}`, token);
        },
        update: (id,data) => {
            const token = selectToken();
            return Post(`${baseURL}/${id}`, token, data);
        },
        delete_: (id) => {
            const token = selectToken();
            return Delete(`${baseURL}/${id}`, token);
        }
    }
}