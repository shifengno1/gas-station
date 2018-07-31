import * as constant from '../configs/actions';
import thunk from '../lib/thunk';

// noinspection JSAnnotator
export default {
    oilDetailData: (param, callback) => thunk({
        url: 'gas//gasStock/inOut',
        param: {
            stockId: '1',
            startDate: param.startDate,
            endDate: param.endDate,
            pageNo: param.pageNo,
            pageSize: param.pageSize,
        },
        type: constant.OIL_DETAIL_DATA,
    }),
};