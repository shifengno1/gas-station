import * as constant from '../configs/actions';
import { createReducer } from '../lib/common';

const defaultState = {
    hint: 'init',
    listData: {},
};

export default createReducer(defaultState, {
    [constant.CHANGE_HINT22]: (state, action) => {
        console.log('action1', action);
        return {
            ...state,
            hint: 'ceshi',
        };
    },
    [constant.FETCH_LIST_DATA22]: (state, action) => {
        console.log('action2', action);
        return {
            ...state,
            listData: action.data.data,
        };
    },
});
