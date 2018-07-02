import * as constant from '../configs/actions';
import { createReducer } from '../lib/common';

const defaultState = {
    // hint: 'init',
    // listData: {},
    code: '',
    stationForm: {},
};

export default createReducer(defaultState, {
    [constant.ON_REPAIR_SUBMIT]: (state, action) => {
        console.log('action', action);
        return {
            ...state,
            code: action.data.code,
        };
    },
    [constant.GET_MY_STATION]: (state, action) => {
        console.log('action22', action);
        return {
            ...state,
            stationForm: action.data.data,
        };
    },
});
