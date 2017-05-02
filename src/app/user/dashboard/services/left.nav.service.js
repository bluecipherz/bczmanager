/**
 * Created by intellicar-rinas on 3/5/17.
 */
export class leftNavService {

    constructor ($s, appConstants) {
        'ngInject'

        var vm = this;

        vm.navs = [
            {name:'Dashboard', navState: appConstants.navState.DASHBOARD},
            {name:'Projects', navState: appConstants.navState.PROJECT},
            {name:'Products', navState: appConstants.navState.PRODUCT},
            {name:'Payment', navState: appConstants.navState.PAYMENT},
        ];
        vm.stateID = "USER_DASHBOARD";

        /*
        *
        *   Public Methods
        *
        * */

        vm.selectNav = function (item) {
            selectNav(item);
        };

        /*
        *
        *   Select Nav
        *
        * */

        function selectNav(item) {
            $s.pushState(vm.stateID, {nav: item})
        }


    }

}