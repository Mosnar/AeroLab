import {createStore, applyMiddleware, compose} from 'redux';
import thunkMiddleware from "redux-thunk";
import createLogger from "redux-logger";
import rootReducer from "../reducers";

let loggerMiddleware = createLogger({
  collapsed: true,
  duration: true
});


const middleware = [thunkMiddleware, loggerMiddleware];
const store = compose(
  applyMiddleware(...middleware)
)(createStore)(rootReducer);

module.exports = store;
