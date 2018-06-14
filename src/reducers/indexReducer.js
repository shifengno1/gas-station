/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';
import { createReducer } from '../lib/common';

const defaultState = {
    listData: [],
    detailData: [],
};

export default createReducer(defaultState, {
    [constant.INDEX_LIST]: (state, action) => {
        return {
            ...state,
            listData: action.data.data,
        };
    },
    [constant.MODULE_DETAIL]: (state, action) => {
        return {
            ...state,
            detailData: action.data.data,
        };
    },
    [constant.MR_VISIT]: (state, action) => {
        return {
            ...state,
            myMrVisit: action.data.data,
        };
    },
});
