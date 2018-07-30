/**
 * Created by chenqu on 2017/9/29.
 */

const myStationRoute = {
    path: '/myStation',
    getComponents(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('../containers/myStationContainer/myStationContainer.js').default);
        });
    },
};

export default myStationRoute;