import * as constant from '../configs/actions';
import thunk from '../lib/thunk';

export default {
    oilTankData: (param, callback) => thunk({
        url: 'gas/gasStock/list',
        param: {
            operatorId: 1,
        },
        type: constant.OIL_TANK_DATA,
    }),
};