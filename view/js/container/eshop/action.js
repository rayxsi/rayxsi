import axios from "axios";
import {FETCH_PRODUCT_ERROR, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS} from "./actionType";


export function prodFetchRequest() {
    return {
        type: FETCH_PRODUCT_REQUEST
    }
}

export function prodFetchSuccess(data) {
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload: data
    }
}

export function prodFetchError(err) {
    return {
        type: FETCH_PRODUCT_ERROR,
        payload: err
    }
}

export function fetchProducts() {
    return async function(dispatch) {
        try{
            dispatch(prodFetchRequest());
            const url = 'https://fakestoreapi.com/products?limit=5';
            const response = await axios.get(url);
            dispatch(prodFetchSuccess(response.data));
        }catch(err) {
            dispatch(prodFetchError(err.message));
        }
    }
}