import * as t from '../types/recipes';
import _ from 'lodash';

const initialState = {
    data: [],
    error: null,
    load: {
        fetching: null
    }
};

export default function reducer(state = initialState, action) {
    switch (action.type) {
        // Fetch
        case t.GET_RECIPES:
            return _.assign({}, state, {
                load: {
                    fetching: true
                }
            });
        case t.GET_RECIPES_SUCCESS:
            return _.assign({}, state, {
                load: {
                    fetching: false
                },
                data: action.response.data,
                hashCode: action.hashCode
            });
        case t.GET_RECIPES_FAILURE:
            return _.assign({}, state, {
                load: {
                    fetching: false
                },
                error: action.response,
            });
        default:
            return state;
    }
}
