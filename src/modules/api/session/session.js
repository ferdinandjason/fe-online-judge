import store from '../../store';
import { _post,_get } from '../request';
import {PutToken, selectToken} from "../../redux/session";

export function sessionAPI(){
    const baseURL = 'http://localhost:8000/api/auth';

    return {
        logIn : (username,password) => {
            _post(`${baseURL}/login`,undefined,{
                'username':username,
                'password':password,
            })
                .then((response)=>{
                    store.dispatch(PutToken(response.access_token));
                    console.log(response);
                    console.log(store.getState());
                });

            const token = selectToken();

            _get(`${baseURL}/me`,token, (response)=>{
                console.log(response);
            });
        },

        logOut : (token)=>{
            _post(`${baseURL}/logout`,token);
        },

        refreshToken : (token)=> {
            _post(`${baseURL}/refresh`,token);
        }
    }
}