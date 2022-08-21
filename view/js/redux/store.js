import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';
import rootReducer from "./rootReducer";
import createLoader from '@oreodusk/pre-api-loader';

//******************** important concern ***************************//
// redux-thunk uses for asynchronous tasks ***************************//
// applyMiddleware uses for applying third party middlewares to redux store//
//********************************************************************//

const store = createStore(rootReducer, applyMiddleware(thunk));
const {StartApiLoader, getSsrPreLoad} = createLoader(store);

export {StartApiLoader, getSsrPreLoad};
export default store;