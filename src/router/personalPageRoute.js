/**
 * Created by liupan on 2018/7/10.
 */
// import ListContainer from '../src/containers/ListContainer';

const personalPageRoute = {
    path: '/personalPage',   // 访问的时候的路由名称
    getComponents(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('../containers/PersonalPageContainer/PersonalPageContainer.js').default);  // 路由加载的页面的container
        });
    },
};

export default personalPageRoute;