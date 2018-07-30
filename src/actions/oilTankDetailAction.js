import * as constant from '../configs/actions';
import thunk from '../lib/thunk';

// noinspection JSAnnotator
export default {
    oilDetailData: (param, callback) => thunk({
        url: 'gas//gasStock/inOut',
        param: {
            stockId: 1,
            startDate: param.startDate,
            endDate: param.endDate,
            pageNo: 0,
            pageSize: 10,
        },
        type: constant.OIL_DETAIL_DATA,
    }),
};