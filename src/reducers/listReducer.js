/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';
import { createReducer } from '../lib/common';

const defaultState = {
    data: {},
    id: '12312321321',
};

export default createReducer(defaultState, {
    [constant.FETCH_DATA]: (state, action) => {
        return {
            ...state,
            data: action.data,
            id: action.data.data.list[0].id,
        };
    },
});
