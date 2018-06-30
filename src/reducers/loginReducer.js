import * as constant from '../configs/actions';
import { createReducer } from '../lib/common';

const defaultState = {
    // hint: 'init',
    // listData: {},
    msg: '',
};

export default createReducer(defaultState, {
    [constant.ON_SUBMIT]: (state, action) => {
        console.log('action', action);
        return {
            ...state,
            msg: action.data.msg,
        };
    },
});
