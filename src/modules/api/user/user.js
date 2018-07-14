import {_post} from "../request";
import {APP_CONFIG} from '../../../config';

export function userAPI(){
    const baseURL = APP_CONFIG.apiURL.auth;

    return {
        register : (name,email,password) => {
            return _post(`${baseURL}/register`,undefined,{
                'name':name,
                'email':email,
                'password':password,
            })
                .then((response)=>{
                    console.log(response);
                    if(response === undefined){
                        // success ?? TODO : cek
                    }
                    console.log(response.data);
                    return Promise.resolve();
                })
        }
    }
}