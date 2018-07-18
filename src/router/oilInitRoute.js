/**
 * Created by chenqu on 2017/9/29.
 */
// import ListContainer from '../src/containers/ListContainer';

const oilInitRoute = {
    path: '/oilInit',
    getComponents(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('../containers/oilInitContainer/oilInitContainer.js').default);
        });
    },
};

export default oilInitRoute;
