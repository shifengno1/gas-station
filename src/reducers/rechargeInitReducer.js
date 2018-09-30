import * as constant from '../configs/actions';
import { createReducer } from '../lib/common';

const defaultState = {
    initData: {},
};

export default createReducer(defaultState, {
    [constant.RECHARGE_INIT_DATA]: (state, action) => {
        return {
            ...state,
            initData: action.data,
        };
    },
});
