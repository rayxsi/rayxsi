import {combineReducers} from "redux";
import productsReducer from '../container/eshop'
import userReducer from "../container/users";

//********************** important concern *************************//
// combineReducers combine the all the reducers//
//Here you have to add all your reducer//

const rootReducer = combineReducers({
    users: userReducer,
    eshop: productsReducer
})

export default rootReducer;