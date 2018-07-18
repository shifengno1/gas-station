import * as constant from '../configs/actions';
import { createReducer } from '../lib/common';

const defaultState = {
    listData: {
        rows: [],
        pageNo: 0,
    },
    allMoney: '',
};

export default createReducer(defaultState, {
    [constant.RECHARGE_LIST_DATA]: (state, action) => {
        console.log('qqqq', action);
        return {
            ...state,
            listData: action.data.data,
            allMoney: action.data.data.data,
        };
    },
});
