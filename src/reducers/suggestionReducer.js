import * as constant from '../configs/actions';
import { createReducer } from '../lib/common';

const defaultState = {
    code: '',
};

export default createReducer(defaultState, {
    [constant.ON_SUGGESTION_SUBMIT]: (state, action) => {
        console.log('action2', action);
        return {
            ...state,
            code: action.data.code,
        };
    },
});