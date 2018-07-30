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

import memberListRoute from './memberListRoute';
import study22Route from './study22Route';
import loginRoute from './loginRoute';
import registrationRoute from './registrationRoute';
import repairRoute from './repairRoute';
import suggestionRoute from './suggestionRoute';
import personalPageRoute from './personalPageRoute';
import rechargeListRoute from './rechargeListRoute';
import oilInitRoute from './oilInitRoute';
import oiltankStockRoute from './oiltankStockRoute';
import rechargeInitRoute from './rechargeInitRoute';
import guideRoute from './guideRoute';
import oilListRoute from './oilListRoute';
import myOilListRoute from './myOilListRoute';
import oilTankDetailRoute from './oilTankDetailRoute';

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
        memberListRoute,
        study22Route,
        loginRoute,
        registrationRoute,
        repairRoute,
        suggestionRoute,
        personalPageRoute,
        rechargeListRoute,
        oilInitRoute,
        oiltankStockRoute,
        rechargeInitRoute,
        guideRoute,
        oilListRoute,
        myOilListRoute,
        oilTankDetailRoute,
    ],
    indexRoute: {
        component: Index,
    },
};

export default demandLoadingRoute;

