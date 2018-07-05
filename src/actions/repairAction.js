/**
 * Created by chenqu on 2017/10/10.
 */
import * as constant from '../configs/actions';
import thunk from '../lib/thunk';

export default {
    onSubmit: (param) => thunk({
        url: 'gas/repair/add',
        param: {
            operatorId: '11',
            stationName: 'A站',
            item: '油灌',
            states: '油灌老化',
            // stationName: param.stationName,
            // item: param.object,
            // states: param.content,
        },
        method: 'post',
        type: constant.ON_REPAIR_SUBMIT,
    }),
    getMyStation: (param) => thunk({
        url: 'gas/station/myStation',
        param: {
            userId: param.userId,
        },
        method: 'get',
        type: constant.GET_MY_STATION,
    }),
};
