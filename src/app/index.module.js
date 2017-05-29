/* global malarkey:false, moment:false */

import { config } from './index.config';
import { routerConfig } from './index.route';
import { runBlock } from './index.run';
import { MainController } from './main/main.controller';
import { FlowController } from './flowManager/flowManager.controller';
import { GridController } from './flowManager/grid.controller';
import { PortalLoginController } from './portal/login/portal.login.controller';
import { DashboardController } from './portal/dashboard/dashboard.controller';

/*
*   User
* */
import { UserDashboardController } from './user/dashboard/user.dashboard.controller';
import { userDashboardService } from './user/dashboard/user.dashboard.service';
import { leftNavService } from './user/dashboard/services/left.nav.service';



import { http } from './portal/httpService/httpService';

import { videoPlayer } from './widgets/common/videoPlayer/video.player';
import { $3dPlayer } from './widgets/common/3dPlayer/3d.player';
import { timeline } from './widgets/common/timeline/timeline';
import { configWidget } from './widgets/common/configWidget/config.widget';

import { widgetConnector } from './widgets/common/widgetConnector/widget.connector';
import { gridService } from './flowManager/grid.service';
import { authService } from './services/auth.service';
import { authInterceptor } from './services/auth.service';
import { helperService } from './services/helper.service';
import { treeDataService } from './services/treedata.service';
import { loginService } from './services/login.service';
import { appConstants } from './constants/app.constants';
import { requestService } from './services/request.service';
import { mapAPIService } from './services/map.api.service';
import { assetAPIService } from './services/asset.api.service';
import { groupAPIService } from './services/group.api.service';
import { userAPIService } from './services/user.api.service';
import { roleAPIService } from './services/role.api.service';
import { $s } from './services/state.service';
import { helperTestService } from './test/helpertest.service';
import { portalLoginService } from './portal/login/portal.login.service';
import { LoginDialogController } from './main/login/login.dialog.controller';
import { domHelperService } from './services/dom.helper.service';

import { $inDialog } from './widgets/directives/inDialog/in.dialog.service';
import { inDialog } from './widgets/directives/inDialog/in.dialog';
import { dynamicController } from './flowManager/dynamic.controller.directive';
import { setDom } from './flowManager/set.dom.directive';


import { TurboController } from './turbo/turbo.controller';
import { $game } from './turbo/components/game';
import { $player } from './turbo/components/player';



import { logWidget } from './widgets/blue/logWidget/log.widget';
import { widgetWrapper } from './widgets/blue/widgetWrapper/widget.wrapper';
import { mapWidget } from './widgets/blue/mapWidget/map.widget';

import { $mapWidget } from './widgets/blue/mapWidget/map.widget.service';


angular.module('management', [ 'ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'mm.foundation', 'toastr'])


    .config(config)
    .config(routerConfig)
    .config(function($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    })

    // have to fix above config

    .constant('moment', moment)
    // .constant('API_HOST', 'http://localhost:8000/api')
    .constant('API_HOST', 'http://api.blueciphers.com/api')
    .constant('TOKEN_KEY', 'JWT_TOKEN_KEY')

    .run(runBlock)

    .service('gridService', gridService)
    .service('authService', authService)
    .service('authInterceptor', authInterceptor)
    .service('helperService', helperService)
    .service('treeDataService', treeDataService)
    .service('loginService', loginService)
    .service('requestService', requestService)
    .service('assetAPIService', assetAPIService)
    .service('groupAPIService', groupAPIService)
    .service('userAPIService', userAPIService)
    .service('roleAPIService', roleAPIService)
    .service('helperTestService', helperTestService)
    .service('appConstants', appConstants)
    .service('$inDialog', $inDialog)
    .service('portalLoginService', portalLoginService)
    .service('domHelperService', domHelperService)
    .service('mapAPIService', mapAPIService)
    .service('$s', $s)
    .service('$game', $game)
    .service('$player', $player)

    .controller('MainController', MainController)
    .controller('FlowController', FlowController)
    .controller('GridController', GridController)
    .controller('TurboController', TurboController)

    /*
    *   Dashboard
    * */
    .controller('DashboardController', DashboardController)
    .controller('PortalLoginController', PortalLoginController)
    .controller('LoginDialogController', LoginDialogController)

    /*
    *   User
    * */
    .controller('UserDashboardController', UserDashboardController)
    .service('userDashboardService', userDashboardService)
    .service('leftNavService', leftNavService)

    .directive('dynamicController',() => new dynamicController())
    .directive('setDom',() => new setDom())
    .directive('inDialog',() => new inDialog())

    .directive('logWidget',() => new logWidget())
    .directive('widgetWrapper',() => new widgetWrapper())
    .directive('mapWidget',() => new mapWidget())

    .service('$mapWidget',  $mapWidget);

    // Pure javascript Flow Manager widgets;
    // flowManager.widget('widgetConnector', widgetConnector);
    // flowManager.widget('videoPlayer', videoPlayer);
    // flowManager.widget('3dPlayer', $3dPlayer);
    // flowManager.widget('timeline', timeline);
    // flowManager.widget('configWidget', configWidget);
