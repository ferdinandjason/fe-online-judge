import {Post} from "../request";
import {APP_CONFIG} from '../../../config';
import {store} from "../../store";
import {Toast} from "../../dispatcher/toast";

export function userAPI() {
    const baseURL = APP_CONFIG.apiURL.auth;

    return {
        register: (name, email, password) => {
            return Post(`${baseURL}/register`, undefined, {
                'name': name,
                'email': email,
                'password': password,
            })
                .then((response) => {
                    store.dispatch(Toast.success('Register Success! User ' + response.statusText));
                    return Promise.resolve();
                })
        }
    }
}