/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';
import thunk from '../lib/thunk';

export default {
    rechargeListData: (param) => thunk({
        url: '/recharge/list',
        param: {
            MemberId: param.MemberId,
            item:param.item,
            time:param.time,
            pageNo:param.pageNo,
            pageSize:param.pageSize,
        },
        method: 'post',
        type: constant.RECHARGE_LIST_DATA,
    }),
};
