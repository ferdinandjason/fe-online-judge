import {store} from '../../store';
import {APP_CONFIG} from '../../../config';
import { _post,_get } from '../request';
import {PutToken, LogInSucces, selectToken, AddUser, LogOut} from "../../redux/session";
import {Toast} from "../../redux/toast";

import {errorAPI} from "../error/error";

export function sessionAPI(){
    const baseURL = APP_CONFIG.apiURL.auth;

    return {
        logIn : (email,password) => {
            return _post(`${baseURL}/login`,undefined,{
                'email':email,
                'password':password,
            })
                .then((response)=>{
                    const token = response.data.access_token;
                    store.dispatch(PutToken(token));
                    store.dispatch(LogInSucces());
                    return token;
                })
                .then((token)=>{
                    // Get current User
                    return _get(`${baseURL}/me`,token)
                        .then((response)=>{
                            store.dispatch(AddUser({
                                id:response.data.data.id,
                                name:response.data.data.name,
                                email:response.data.data.email,
                                roles:response.data.data.roles,
                            }));
                            console.log(store.getState().session);
                            return Promise.resolve();
                        });
                })
        },

        logOut : ()=>{
            const token = selectToken();
            return _post(`${baseURL}/logout`,token)
                .then((response)=>{
                    if(response.status !== 200){
                        errorAPI().showToast(response.status,response.data.message);
                        return Promise.resolve(response);
                    }
                    store.dispatch(LogOut());
                    store.dispatch(Toast.show_(response.data.message,'user'));
                    return Promise.resolve(response);
                });
        },

        refreshToken : (token)=> {
            return _post(`${baseURL}/refresh`,token)
                .then((response) => {
                    const token = response.data.access_token;
                    store.dispatch(PutToken(token));
                    return token;
                })
        }
    }
}