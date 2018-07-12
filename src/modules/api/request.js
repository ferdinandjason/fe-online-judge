import axios from 'axios';

function request(method, url, token, header, data){
    const authorization = token ? { Authorization : `Bearer ${token}` } : {};
    console.log(method,url,token);

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

export function _get(url,token=null){
    return request('GET',url,token,null);
}

export function _post(url, token=null, data=null){
    return request('POST',url,token,{'Content-Type':'application/json'},JSON.stringify(data));
}

export function _delete(url, token=null){
    return request('DELETE',url,token,null);
}

export function _put(url, token=null, data=null){
    return request('PUT',url,token,{'Content-Type':'application/json'},JSON.stringify(data));
}