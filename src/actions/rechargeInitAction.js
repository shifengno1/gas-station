/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';
import thunk from '../lib/thunk';

export default {
    rechargeInitData: (param, callback) => thunk({
        url: 'gas/rechargeInit/list',
        param: {
            operatorId: param.operatorId,
            item: param.item,
            time: param.time,
            pageNo: param.pageNo,
            pageSize: param.pageSize,
        },
        type: constant.RECHARGE_INIT_DATA,
    }),
};
