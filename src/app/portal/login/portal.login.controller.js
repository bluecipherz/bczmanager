/**
 * Created by Rinas Musthafa on 4/28/2017.
 */
export class PortalLoginController{

    constructor (loginService, $state) {
        'ngInject'

        var vm = this;

        vm.username = 'thirdeye@blueciphers.com';
        vm.password = 'dotmatrix99';

        vm.login = function () {
            vm.error = '';
            vm.fetching = true;
            loginService.login(vm.username, vm.password)
                .then(function (resp) {
                    $state.go('dashboard');
                    vm.fetching = false;
                }, function (resp) {
                    vm.fetching = false;
                });
            // portalLoginService.login(vm.username, vm.password, function (resp) {
            //     $state.go('dashboard');
            //     vm.fetching = false;
            // }, function (resp) {
            //     vm.fetching = false;
            //     vm.error = 'Invalid Credentials';
            // })
        }

    }

}