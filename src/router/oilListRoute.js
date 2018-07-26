/**
 * Created by chenqu on 2017/9/29.
 */

const oilListRoute = {
    path: '/oilList',
    getComponents(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('../containers/oilListContainer/oilListContainer.js').default);
        });
    },
};

export default oilListRoute;