import { ActionTypes as types } from '../actions/actionTypes';

var initialState = {};

function invoice(state = initialState, action) {
    switch(action.type) {

        case types.UPDATE_ROW:
            return {
                ...state,
                row: action.row
            };

        default:
            return state;
    }
}

export { invoice };