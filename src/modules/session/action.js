import types from './type';

const AddToken = (token)=>({
    type: types.ADD_TOKEN,
    payload: token
});

const AddUser = (user)=>({
    type: types.ADD_USER,
    payload: user
});

const DeleteSession = ()=>({
    type: types.DELETE_SESSION
});

export default { AddToken, AddUser, DeleteSession }