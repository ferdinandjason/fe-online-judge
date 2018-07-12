import store from '../../store';
import { _post,_get } from '../request';
import {PutToken, LogInSucces, selectToken, AddUser, LogOut} from "../../redux/session";

export function sessionAPI(){
    const baseURL = 'http://localhost:8000/api/auth';

    return {
        logIn : (email,password) => {
            return _post(`${baseURL}/login`,undefined,{
                'email':email,
                'password':password,
            })
                .then((response)=>{
                    console.log(response);
                    store.dispatch(PutToken(response.data.access_token));
                    store.dispatch(LogInSucces());
                })
                .then(()=>{
                    const token = selectToken();
                    _get(`${baseURL}/me`,token)
                        .then((response)=>{
                            store.dispatch(AddUser({
                                id:response.data.id,
                                name:response.data.name,
                                email:response.data.email,
                            }));
                            console.log(store.getState());
                        })
                })
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