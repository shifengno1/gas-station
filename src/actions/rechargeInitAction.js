/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';
import thunk from '../lib/thunk';

export default {
    rechargeInitData: (param, callback) => thunk({
        url: 'gas/recharge/add',
        param: {
            cardNum: param.cardNum,
            sum: param.sum,
            type: 'wx',
        },
        type: constant.RECHARGE_INIT_DATA,
    }),
};
