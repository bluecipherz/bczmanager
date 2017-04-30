/**
 * Created by Rinas Musthafa on 4/28/2017.
 */
export class http{

    constructor ($resource, API_HOST, $log, $q, portalLoginService){
        'ngInject'

        var vm = this;

        vm.post = function (url, body) {
            var req = portalLoginService.wrapActions(
                $resource(API_HOST + url),
                ['save']
            );

            return req.save(body).$promise
                .then(vm.handleResponse, vm.handleFailure)
        };

        vm.handleResponse = function (resp) {
            //$log.log("handleResponse");
            if(resp.data){
                resp = resp.data
            }
            return $q.resolve(resp);
        };


        vm.handleFailure = function (resp) {
            //$inError.add(resp);
            $log.log("handleFailure ", resp);
            return $q.reject(resp);
        };

    }

}