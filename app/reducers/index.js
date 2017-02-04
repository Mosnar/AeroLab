import {combineReducers} from 'redux';
import routes from './routes';
import recipes from './recipes';

export default combineReducers({
    routes,
    recipes
});
