/**
 * Created by chenqu on 2017/9/29.
 */
// import ListContainer from '../src/containers/ListContainer';

const studyRoute = {
    path: '/study',   // 访问的时候的路由名称
    getComponents(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('../containers/StudyContainer/StudyContainer.js').default);  // 路由加载的页面的container
        });
    },
};

export default studyRoute;
