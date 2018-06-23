/**
 * Created by chenqu on 2017/9/28.
 */
import Index from '../components/Index';
import ClassifyRouterComponent from '../components/ClassifyRouterComponent';
import detailRoute from './detailRoute';
import formRoute from './formRoute';
import listRoute from './listRoute';
import testRoute from './testRoute';
import indexRoute from './indexRoute';
import studyRoute from './studyRoute';

const demandLoadingRoute = {
    path: '/',
    // component: ClassifyRouterComponent,
    childRoutes: [
        detailRoute,
        listRoute,
        formRoute,
        testRoute,
        indexRoute,
        studyRoute,
    ],
    indexRoute: {
        component: Index,
    },
};

export default demandLoadingRoute;

