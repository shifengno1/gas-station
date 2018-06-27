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
import study22Route from './study22Route';
import loginRoute from './loginRoute';

const demandLoadingRoute = {
    path: '/',
    component: ClassifyRouterComponent,
    childRoutes: [
        detailRoute,
        listRoute,
        formRoute,
        testRoute,
        indexRoute,
        studyRoute,
        study22Route,
        loginRoute
    ],
    indexRoute: {
        component: Index,
    },
};

export default demandLoadingRoute;

