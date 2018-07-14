import {_post} from "../request";
import {APP_CONFIG} from '../../../config';
import {store} from "../../store";
import {Toast} from "../../redux/toast";
import {errorAPI} from "../error/error";

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
                    if(response.status === 201){
                        store.dispatch(Toast.success('Register Success! User '+response.statusText));
                    }
                    else {
                        errorAPI().showToast(response.status,'Error ! '+response.statusText);
                    }
                    return Promise.resolve();
                })
        }
    }
}