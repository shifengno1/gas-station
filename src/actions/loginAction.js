/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';
import thunk from '../lib/thunk';

export default {
    onSubmit: (param) => thunk({
        url: 'gas/account/wxLogin',
        param: {
            role: '1',
            userName: param.username,
            passWord: param.password,
        },
        method: 'post',
        type: constant.ON_SUBMIT,
    }),
};
