import { ActionTypes as types } from './actionTypes';

function updateRow(row) {
    return {
        type: types.UPDATE_ROW,
        row: row
    };
}

export { updateRow }