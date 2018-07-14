import {store} from "../../store";
import {Toast} from "../../redux/toast";

export function errorAPI(){
    return {
        showToast : (code,message) => {
            store.dispatch(Toast.error_(code+' - '+message));
        }
    }
}