import * as constant from '../configs/actions';
import { createReducer } from '../lib/common';

const defaultState = {
    listData: {
        rows: [],
        pageNo: 0,
        startOfPage: 0,
        pageSize: 10,
        total: 10,
    },
};

export default createReducer(defaultState, {
    [constant.MEMBER_LIST_DATA]: (state, action) => {
        return {
            ...state,
            listData: action.data.data,
        };
    },
});
