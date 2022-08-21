import {FETCH_PRODUCT_ERROR, FETCH_PRODUCT_REQUEST, FETCH_PRODUCT_SUCCESS} from "./actionType";

const initialState = {
    loading: false,
    data: [],
    error: ''
}

function productsReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_PRODUCT_REQUEST: return {
            ...state,
            loading: true
        }

        case FETCH_PRODUCT_SUCCESS: return {
            loading: false,
            data: action.payload,
            error: ''
        }

        case FETCH_PRODUCT_ERROR: return {
            loading: false,
            data: [],
            error: action.payload
        }

        default: return state;
    }
}

export default productsReducer;