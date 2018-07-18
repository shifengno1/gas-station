/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';
import thunk from '../lib/thunk';

export default {
    rechargeListData: (param) => thunk({
        url: 'gas/recharge/memberRechargeList',
        param: {
            memberId: param.memberId,
            time: param.time,
            pageNo: param.pageNo,
            pageSize: param.pageSize,
        },
        method: 'get',
        type: constant.RECHARGE_LIST_DATA,
    }),
};
