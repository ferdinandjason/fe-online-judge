import axios from 'axios';

function request(method, url, token, header, data, callback){
    const authorization = token ? { Authorization : `Bearer ${token}` } : {};

    return axios
        .request({
            method : method,
            url : url,
            headers : {...header , ...authorization },
            data : data,
        })
        .catch( (error)=> {
            // handle error
            console.log(error);
        });


}

export function _get(url,token=null,callback){
    return request('GET',url,token,null,null,callback);
}

export function _post(url, token=null, data=null, callback){
    return request('POST',url,token,{'Content-Type':'application/json'},JSON.stringify(data),callback);
}

export function _delete(url, token=null,callback){
    return request('DELETE',url,token,null,null,callback);
}

export function _put(url, token=null, data=null,callback){
    return request('PUT',url,token,{'Content-Type':'application/json'},JSON.stringify(data),callback);
}