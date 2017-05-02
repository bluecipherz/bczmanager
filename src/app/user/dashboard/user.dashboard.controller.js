/**
 * Created by intellicar-rinas on 3/5/17.
 */
export class UserDashboardController{

    constructor (userDashboardService, appConstants, leftNavService, $scope, $s) {
        'ngInject'

        var vm = this;

        vm.stateID = leftNavService.stateID;
        $scope.leftNavService = leftNavService;

        $s.initInstance(vm.stateID);
        $s.on(vm.stateID, 'stateChange', onStateChange);

        leftNavService.selectNav(leftNavService.navs[0]);

        /*
        *
        *   Private Methods
        *
        * */

        function onStateChange(state) {
            $scope.state = state;
            /* DASHBOARD */
            if($scope.state.nav.navState == appConstants.navState.DASHBOARD){

            }
        }

    }

}