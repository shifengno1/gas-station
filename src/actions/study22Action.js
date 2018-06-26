/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';
import thunk from '../lib/thunk';

export default {
    changeHint: () => ({
        type: constant.CHANGE_HINT22,
        // hint: 'ceshi',
    }),
    // hideOp: () => ({
    //     type: constant.HIDE_OPERATION,
    // }),
    fetchListData: (param) => thunk({
        url: '/test22/list',
        param: {
            data: 1,
        },
        method: 'post',
        type: constant.FETCH_LIST_DATA22,
    }),
};
