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
    [constant.OIL_TANK_DATA]: (state, action) => {
        console.log('actionOfTank', action);
        return {
            ...state,
            data: action.data.data,
        };
    },
});
