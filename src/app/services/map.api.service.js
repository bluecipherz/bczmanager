/**
 * Created by intellicar-rinas on 2/5/17.
 */
export class mapAPIService{

    constructor (requestService, $q) {
        'ngInject'

        var vm = this;

        vm.getLocations = function (body) {
            return requestService.firePost('/getlocation', body)
                .then(vm.handleSuccess, vm.handleFailure);
        };

        vm.handleSuccess = function (resp) {
            return $q.resolve(resp);
        };

        vm.handleFailure = function (resp) {
            return $q.reject(resp);
        };

    }

}