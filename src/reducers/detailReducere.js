/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';
import { createReducer } from '../lib/common';

const defaultState = {
    show: false,
};

export default createReducer(defaultState, {
    [constant.SHOW_OPERATION]: (state, action) => {
        console.log('state', state);
        const newState = {
            ...state,
            // show: false,
            show: true,
        };
        console.log('newState', newState);
        return newState;
    },
    [constant.HIDE_OPERATION]: (state, action) => {
        return {
            ...state,
            show: false,
        };
    },
});
