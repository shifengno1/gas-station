import * as constant from '../configs/actions';
import { createReducer } from '../lib/common';

const defaultState = {
    infoData: {
    },
    pwdData: {
    },
    userData: {
    },
};

export default createReducer(defaultState, {
    [constant.USER_UPDATE_DATA]: (state, action) => {
        return {
            ...state,
            infoData: action.data,
        };
    },
    [constant.USER_UPDATE_PWD_DATA]: (state, action) => {
        return {
            ...state,
            pwdData: action.data,
        };
    },
    [constant.GET_USER_DATA]: (state, action) => {
        return {
            ...state,
            userData: action.data.data,
        };
    },
});
