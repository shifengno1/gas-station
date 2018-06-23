import * as constant from '../configs/actions';
import { createReducer } from '../lib/common';

const defaultState = {
    hint: 'init',
    listData: {},
};

export default createReducer(defaultState, {
    [constant.CHANGE_HINT]: (state, action) => {
        console.log('action', action);
        return {
            ...state,
            hint: 'ceshi',
        };
    },
    [constant.FETCH_LIST_DATA]: (state, action) => {
        console.log('action', action);
        return {
            ...state,
            listData: action.data.data,
        };
    },
});
