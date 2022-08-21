import {FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from "./actionType";
import axios from "axios";


export function userFetchRequest() {
    return {
        type: FETCH_USER_REQUEST
    }
}

export function userFetchSuccess(data) {
    return {
        type: FETCH_USER_SUCCESS,
        payload: data
    }
}

export function userFetchError(err) {
    return {
        type: FETCH_USER_ERROR,
        payload: err
    }
}

export function fetchUsers() {
    return async function(dispatch) {
        try{
            dispatch(userFetchRequest());
            const url = 'https://jsonplaceholder.typicode.com/users';
            const response = await axios.get(url);
            dispatch(userFetchSuccess(response.data));
        }catch(err) {
            dispatch(userFetchError(err.message));
        }
    }
}