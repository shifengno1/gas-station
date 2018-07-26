/**
 * Created by chenqu on 2017/9/29.
 */

const memberListRoute = {
    path: '/memberList',
    getComponents(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('../containers/memberListContainer/memberListContainer.js').default);
        });
    },
};

export default memberListRoute;