/**
 * Created by chenqu on 2017/9/29.
 */
// import ListContainer from '../src/containers/ListContainer';

const indexRoute = {
    path: '/index',
    getComponents(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('../containers/IndexContainer/IndexContainer').default);
        });
    },
};

export default indexRoute;
