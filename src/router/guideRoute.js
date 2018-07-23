/**
 * Created by chenqu on 2017/9/29.
 */
// import DetailContainer from '../src/containers/DetailContainer';

const guideRoute = {
    path: '/guide',
    getComponents(nextState, callback) {
        require.ensure([], (require) => {
            callback(null, require('../containers/GuideContainer/GuideContainer').default);
        });
    },
    // component: DetailContainer,
};

export default guideRoute;
