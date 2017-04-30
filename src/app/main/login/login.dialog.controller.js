/**
 * Created by Rinas Musthafa on 2/11/2017.
 */
export class LoginDialogController{

    constructor ($scope, $rootScope, $log, loginService, $inDialog, $window) {
        'ngInject'

        var vm = $scope;
        $rootScope.showLoginDialog = false;
        $log.log("loginDialogController");

        // vm.emailFormat = /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/;

        // vm.username = "shunmugakrishnan@intellicar.in";
        // vm.password = "intellicar123";

        function handleLoginSuccess(resp) {
            // $log.log(resp);
            $log.log("handleLoginSuccess");
            $rootScope.showLoginDialog = false;
            $inDialog.hide();
            $window.location.reload();
        }

        function handleLoginFailure(resp) {
            $log.log(resp);
            $log.log("handleLoginFailure");
            if (resp && resp.data && resp.msg)
                $log.log(resp);
            vm.errorMsg = "Invalid Credentials";
        }

        vm.onChangeCredentials = function(){
            if (!(vm.username && vm.password)){
                vm.errorMsg = "Please enter valid Username and Password";
                return;
            }
            else
                vm.errorMsg = '';
        };

        vm.login = function () {
            $log.log("/gettoken");
            loginService.login(vm.username, vm.password)
                .then(handleLoginSuccess, handleLoginFailure);
        };

        vm.logout = function () {
            loginService.logout();
        };

    }

}
