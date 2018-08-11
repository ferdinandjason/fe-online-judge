import axios from 'axios';

import {store} from '../store';
import {IdentifyError} from "./error/error";
import {AddToastFile, UpdatePercentageToastFile} from "../redux/toastFile";

function request(method, url, token, header, data, onUploadProgress = null) {
    const authorization = token ? {Authorization: `Bearer ${token}`} : {};
    console.log(method, url, token);

    return axios
        .request({
            method: method,
            url: url,
            headers: {...header, ...authorization},
            data: data,
            onUploadProgress: onUploadProgress,
        })
        .catch((error) => {
            const Error = IdentifyError(error.response.data);
            Error.action();
        });


}

export function _get(url, token = null) {
    return request('GET', url, token, null);
}

export function _post(url, token = null, data = null) {
    return request('POST', url, token, {'Content-Type': 'application/json'}, JSON.stringify(data));
}

export function _delete(url, token = null) {
    return request('DELETE', url, token, null);
}

export function _put(url, token = null, data = null) {
    return request('PUT', url, token, {'Content-Type': 'application/json'}, JSON.stringify(data));
}

export function _file(url, token, parts) {
    const body = new FormData();
    Object.keys(parts).forEach(part => body.append(part, parts[part]));
    store.dispatch(AddToastFile(parts.name));
    const onUploadProgress = (progressEvent) => {
        const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total)
        store.dispatch(UpdatePercentageToastFile(percentCompleted))
    };
    return request('POST', url, token, {
        'Content-Type': 'multipart/form-data'
    }, body, onUploadProgress);
}

export function FileUpload(url, token, parts) {
    return async () => {
        return _file(url, token, parts);
    }
}