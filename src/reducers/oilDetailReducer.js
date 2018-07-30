import * as constant from '../configs/actions';
import { createReducer } from '../lib/common';

const defaultState = {
    data: {},
    id: '12312321321',
};

export default createReducer(defaultState, {
    [constant.OIL_DETAIL_DATA]: (state, action) => {
        return {
            ...state,
            data: action.data.rows,
        };
    },
});