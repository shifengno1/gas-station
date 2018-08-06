import * as constant from '../configs/actions';
import { createReducer } from '../lib/common';

const defaultState = {
    infoData: {
        "infors": {
            "icCardNum": "",
            "points": 0,
            "createTime": ""
        },
        "rechargeSum": 0,
        "oilSum": 0,
        "moneySum": 0,
    },
};

export default createReducer(defaultState, {
    [constant.PERSONAL_INFO_DATA]: (state, action) => {
        return {
            ...state,
            infoData: action.data.data,
        };
    },
});
