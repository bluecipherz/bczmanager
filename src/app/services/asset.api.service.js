/**
 * Created by smiddela on 25/02/17.
 */


export class assetAPIService{

    constructor ($log, $q, requestService, helperService, $inError) {
        'ngInject'
        $log.log("assetAPIService");
        var vm = this;


        vm.deleteAsset = function (body) {
            return requestService.firePost('/api/asset/delete', body);
        };

        vm.getMyCreateAssetPermInfo = function (body) {
            return requestService.firePost('/api/asset/getmycreateassetperminfo', body);
        };

        vm.getMyEditDeleteAssetPermInfo = function (body) {
            return requestService.firePost('/api/asset/getmyeditdeleteassetperminfo', body);
        };

        vm.validateAssetName = function (body) {
            return requestService.firePost('/api/asset/validateassetname', body);
        };


        vm.handleResponse = function (resp) {
            //$log.log("handleResponse");
            return $q.resolve(resp);
        };


        vm.handleFailure = function (resp) {
            $inError.add(resp);
            $log.log("handleFailure ", resp);
            return $q.reject(resp);
        };


        vm.getMyEditDeleteAssetPermInfoMap = function (body) {
            return vm.getMyEditDeleteAssetPermInfo(body)
                .then(helperService.validateResponse)
                .then(helperService.makePermissionMap)
                .then(vm.handleResponse, vm.handleFailure);
        };

        vm.getMyCreateAssetPermInfoMap = function (body) {
            return vm.getMyCreateAssetPermInfo(body)
                .then(helperService.validateResponse)
                .then(vm.handleResponse, vm.handleFailure);
        };

    }

}
