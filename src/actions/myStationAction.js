/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';
import thunk from '../lib/thunk';

export default {
    stationListData: (param, callback) => thunk({
        url: 'gas/station/my',
        param: {
            userId: param.userId,
        },
        type: constant.MY_STATION_DATA,
    }),
};
