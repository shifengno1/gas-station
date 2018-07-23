/**
 * Created by chenqu on 2017/9/29.
 */
// import ListContainer from '../src/containers/ListContainer';

const rechargeInitRoute = {
    path: '/rechargeInit',
    getComponents(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('../containers/rechargeInitContainer/rechargeInitContainer.js').default);
        });
    },
};

export default rechargeInitRoute;
