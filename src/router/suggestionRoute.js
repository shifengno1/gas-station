/**
 * Created by liupan on 2018/6/28.
 */
// import ListContainer from '../src/containers/ListContainer';

const suggestionRoute = {
    path: '/suggestion',   // 访问的时候的路由名称
    getComponents(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('../containers/SuggestionContainer/SuggestionContainer.js').default);  // 路由加载的页面的container
        });
    },
};

export default suggestionRoute;
