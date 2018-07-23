/**
 * Created by chenqu on 2017/9/22.
 */
/**
 * Created by chenqu on 2017/9/22.
 */
import * as env from '../configs/env';
import envConst from '../configs/envConst';

export default (url) => {
    switch (envConst) {
        // case env.DEVELOPMENT:
        //     return `.${url}.json`;
        case env.DEVELOPMENT:
            return `http://47.96.143.12/${url}`;
        default:
            return null;
    }
};
