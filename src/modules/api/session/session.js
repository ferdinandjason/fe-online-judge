import {APP_CONFIG} from '../../../config';
import {store} from '../../store';
import {Get, Post} from '../request';
import {AddUser, LogInSucces, LogOut, PutToken, selectToken} from "../../dispatcher/session";
import {Toast} from "../../dispatcher/toast";

export function sessionAPI() {
    const baseURL = `${APP_CONFIG.apiURL.auth}`;

    return {
        logIn: (email, password) => {
            return Post(`${baseURL}/login`, undefined, {
                'email': email,
                'password': password,
            })
                .then((response) => {
                    const token = response.data.access_token;
                    store.dispatch(PutToken(token));
                    store.dispatch(LogInSucces());
                    return token;
                })
                .then((token) => {
                    // Get current User
                    return Get(`${baseURL}/me`, token)
                        .then((response) => {
                            store.dispatch(AddUser({
                                id: response.data.data.id,
                                name: response.data.data.name,
                                email: response.data.data.email,
                                roles: response.data.data.roles,
                            }));
                            console.log(store.getState().session);
                            return Promise.resolve();
                        });
                })
        },

        logOut: () => {
            const token = selectToken();
            return Post(`${baseURL}/logout`, token)
                .then((response) => {
                    store.dispatch(LogOut());
                    store.dispatch(Toast.show_(response.data.message, 'user'));
                    return Promise.resolve(response);
                });
        },

        refreshToken: () => {
            const token = selectToken();
            return Post(`${baseURL}/refresh`, token)
                .then((response) => {
                    const token = response.data.access_token;
                    store.dispatch(PutToken(token));
                    return token;
                })
        }
    }
}