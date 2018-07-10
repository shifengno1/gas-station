/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';
import thunk from '../lib/thunk';

export default {
    changeHint: () => ({
        type: constant.CHANGE_HINT,
        // hint: 'ceshi',
    }),
    memberListData: (param) => thunk({
        url: '/member/list',
        param: {
            MemberId: param.MemberId,
            item:param.item,
            time:param.time,
            pageNo:param.pageNo,
            pageSize:param.pageSize,
        },
        method: 'post',
        type: constant.MEMBER_LIST_DATA,
    }),
};
