/**
 * Created by chenqu on 2017/9/29.
 */

const myOilListRoute = {
    path: '/myOilList',
    getComponents(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('../containers/oilListContainer/myOilListContainer.js').default);
        });
    },
};

export default myOilListRoute;