/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';
import thunk from '../lib/thunk';

export default {
    onSubmit: (param) => thunk({
        url: 'gas/suggestion/add',
        param: {
            name: '188',
            wxName: '188',
            content: '123',
            // name: param.name,
            // wxName: param.wxName,
            // content: param.content,
        },
        method: 'post',
        type: constant.ON_SUGGESTION_SUBMIT,
    }),
};