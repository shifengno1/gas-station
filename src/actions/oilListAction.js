/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';
import thunk from '../lib/thunk';

export default {
    oilListData: (param, callback) => thunk({
        url: 'gas/consume/operator',
        param: {
            operatorId: param.operatorId,
            memberName: param.memberName,
            phone: param.phone,
            startDate: param.startDate,
            endDate: param.endDate,
            pageNo: param.pageNo,
            pageSize: param.pageSize,
        },
        type: constant.OIL_LIST_DATA,
    }),
    myOilListData: (param, callback) => thunk({
        url: 'gas/consume/member',
        param: {
            memberId: param.memberId,
            time: param.time,
            pageNo: param.pageNo,
            pageSize: param.pageSize,
        },
        type: constant.MY_OIL_LIST_DATA,
    }),
};
