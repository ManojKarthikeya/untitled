import logger from 'redux-logger';
import { createStore, applyMiddleware } from "redux";   
import rootReducer from './root-reducer';


const store = createStore(rootReducer, applyMiddleware(logger))
export default store;