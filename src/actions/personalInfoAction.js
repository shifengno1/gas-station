/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';
import thunk from '../lib/thunk';

export default {
    personalInfoData: (param, callback) => thunk({
        url: 'gas/member/infors',
        param: {
            memberId: param.memberId,
        },
        type: constant.PERSONAL_INFO_DATA,
    }),
};
