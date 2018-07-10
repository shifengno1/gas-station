/**
 * Created by chenqu on 2017/9/29.
 */
// import ListContainer from '../src/containers/ListContainer';

const rechargeListRoute = {
    path: '/rechargeList',
    getComponents(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('../containers/rechargeListContainer/rechargeListContainer.js').default);
        });
    },
};

export default rechargeListRoute;
