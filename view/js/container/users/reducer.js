import {FETCH_USER_ERROR, FETCH_USER_REQUEST, FETCH_USER_SUCCESS} from "./actionType";

const initialState = {
    loading: false,
    data: [],
    error: ''
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER_REQUEST: return {
            ...state,
            loading: true
        }

        case FETCH_USER_SUCCESS: return {
            loading: false,
            data: action.payload,
            error: ''
        }

        case FETCH_USER_ERROR: return {
            loading: false,
            data: [],
            error: action.payload
        }

        default: return state;
    }
}

export default userReducer;