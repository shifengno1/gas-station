import * as constant from '../configs/actions';
import { createReducer } from '../lib/common';

const defaultState = {
    listData: {},
};

export default createReducer(defaultState, {
    [constant.MEMBER_LIST_DATA]: (state, action) => {
        return {
            ...state,
            listData: action.data.data,
        };
    },
});
