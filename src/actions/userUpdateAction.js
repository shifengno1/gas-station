/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';
import thunk from '../lib/thunk';

export default {
    userUpdateData: (param, callback) => thunk({
        url: 'gas/member/update',
        param: {
            carNumber: param.carNumber,
            name: param.name,
            phone: param.phone,
            userId: param.userId,
        },
        type: constant.USER_UPDATE_DATA,
    }),

    userUpdatePWDData: (param, callback) => thunk({
        url: 'gas/member/updatePayPwd',
        param: {
            newCardPwd: param.newCardPwd,
            oldCardPwd: param.oldCardPwd,
            userId: param.userId,
        },
        type: constant.USER_UPDATE_PWD_DATA,
    }),
    getUserData: (param, callback) => thunk({
        url: 'gas/member/get?userId='.concat(param.userId),
        method: 'post',
        type: constant.GET_USER_DATA,
    }),
};
