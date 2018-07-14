import store from '../../store';
import {APP_CONFIG} from '../../../config';
import { _post,_get } from '../request';
import {PutToken, LogInSucces, selectToken, AddUser, LogOut} from "../../redux/session";

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

                    // Get current User
                    _get(`${baseURL}/me`,token)
                        .then((response)=>{
                            store.dispatch(AddUser({
                                id:response.data.id,
                                name:response.data.name,
                                email:response.data.email,
                            }));
                            return null;
                        });
                    return Promise.resolve(response);
                });
        },

        logOut : ()=>{
            const token = selectToken();
            _post(`${baseURL}/logout`,token)
                .then(()=>{
                    store.dispatch(LogOut());
                });
        },

        refreshToken : (token)=> {
            _post(`${baseURL}/refresh`,token);
        }
    }
}