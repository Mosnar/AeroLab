import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import callApi from '../middlewares/call-api';
import rootReducer from "../reducers";

let loggerMiddleware = createLogger({
  collapsed: true,
  duration: true
});


const middleware = [thunkMiddleware, loggerMiddleware, callApi];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(rootReducer);

module.exports = store;
