import * as constant from '../configs/actions';
import { createReducer } from '../lib/common';

const defaultState = {
    listData: {
        rows: [],
        pageNo: 0,
    },
};

export default createReducer(defaultState, {
    [constant.RECHARGE_LIST_DATA]: (state, action) => {
        return {
            ...state,
            listData: action.data.data,
        };
    },
});
