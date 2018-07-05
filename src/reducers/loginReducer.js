import * as constant from '../configs/actions';
import { createReducer } from '../lib/common';

const defaultState = {
    // hint: 'init',
    // listData: {},
    code: '',
};

export default createReducer(defaultState, {
    [constant.ON_SUBMIT]: (state, action) => {
        console.log('action', action);
        return {
            ...state,
            code: action.data.code,
        };
    },
});
