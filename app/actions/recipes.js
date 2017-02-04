import * as t from '../types/recipes';
import {CALL_API} from '../middlewares/call-api';


/**
 * Get recipes
 * @returns {function(*)}
 */
export function getRecipes() {
    return (dispatch) => {
        return dispatch({
            [CALL_API]: {
                method: 'GET',
                path: 'recipes/aeropress',
                sendingType: t.GET_RECIPES,
                successType: t.GET_RECIPES_SUCCESS,
                failureType: t.GET_RECIPES_FAILURE
            }
        });
    };
}
