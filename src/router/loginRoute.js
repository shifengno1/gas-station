/**
 * Created by liupan on 2018/6/27.
 */
// import ListContainer from '../src/containers/ListContainer';

const loginRoute = {
    path: '/login',   // 访问的时候的路由名称
    getComponents(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('../containers/LoginContainer/LoginContainer.js').default);  // 路由加载的页面的container
        });
    },
};

export default loginRoute;
