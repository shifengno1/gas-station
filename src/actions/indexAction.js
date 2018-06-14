/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';
import thunk from '../lib/thunk';

export default {
    // fetchData: () => thunk({
    //     url: '/list',
    //     param: {},
    //     type: constant.FETCH_DATA,
    // }),
    getModuleList: () => thunk({
        url: '/list',
        param: {},
        type: constant.INDEX_LIST,
    }),
    getModuleDetail: () => thunk({
        url: '/detail',
        param: {},
        type: constant.MODULE_DETAIL,
    }),
    getMrVisit: () => thunk({
        url: '/myMrVisit',
        param: {},
        type: constant.MR_VISIT,
    }),
};
