/**
 * Created by Rinas Musthafa on 2/11/2017.
 */
export class groupAPIService{

    constructor ($log, $q, requestService, helperService, appConstants, $inError) {
        'ngInject'
        $log.log("groupAPIService");
        var vm = this;

        var root_pgrouppath = '/2/6/';

        vm.encloseBody = function (data) {
            // return data;
            return {group: data};
        };

        vm.getAssetType = function (type, body) {

            body = angular.copy(body);

            if(!body.pgrouppath){
                body.pgrouppath = root_pgrouppath;
            }
            if(!body.assettype){
                body.assettype = type;
            }

            return body;
        };

        vm.listAssets = function (body) {
            // $log.log("listAssets");
            // body = {}
            return requestService.firePost('/api/group/listassets', body);
        };

        vm.getMyGroups = function (body) {
            // $log.log("getMyGroups");
            body = vm.getAssetType(appConstants.GROUP, body);
            return vm.listAssets(body)
        };

        vm.getMyDirectGroups = function (body) {
            // $log.log("getMyGroups");
            body = vm.getAssetType(appConstants.GROUP, body);
            return requestService.firePost('/api/user/getmygroups', body);
        };

        vm.getMyVehicles = function (body) {
            // $log.log("getMyVehicles");
            body = vm.getAssetType(appConstants.VEHICLE, body);
            return vm.listAssets(body)
        };


        vm.getMyUsers = function (body) {
            // $log.log("getMyUsers");
            body = vm.getAssetType(appConstants.USER, body);
            return vm.listAssets(body)
        };


        vm.getMyRoles = function (body) {
            // $log.log("getMyRoles");
            body = vm.getAssetType(appConstants.ROLE, body);
            return vm.listAssets(body)
        };


        vm.getMyDevices = function (body) {
            // $log.log("getMyDevices");
            body = vm.getAssetType(appConstants.DEVICE, body);
            return vm.listAssets(body)
        };


        vm.assignUser = function (body) {
            return requestService.firePost('/api/group/assignuser', body);
        };

        vm.deassignUser = function (body) {
            return requestService.firePost('/api/group/deassignuser', body);
        };


        vm.assignRole = function (body) {
            return requestService.firePost('/api/group/assignrole', body);
        };


        vm.deassignRole = function (body) {
            return requestService.firePost('/api/group/deassignrole', body);
        };


        vm.getAssignedUsers = function (body) {
            return requestService.firePost('/api/group/getassignedusers', body);
        };


        vm.getAssignedRoles = function (body) {
            return requestService.firePost('/api/group/getassignedroles', body);
        };


        vm.getMyAssignableUsers = function (body) {
            return requestService.firePost('/api/group/getmyassignableusers', body);
        };


        vm.getMyAssignableRoles = function (body) {
            return requestService.firePost('/api/group/getmyassignableroles', body);
        };


        vm.deleteAsset = function (body) {
            return requestService.firePost('/api/asset/delete', body);
        };

        vm.createGroup = function (body) {
            return requestService.firePost('/api/group/create', body)
                .then(helperService.validateResponse );
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

        vm.listAssetsMap = function (body) {
            return vm.listAssets(body)
                .then(helperService.validateResponse )
                .then(helperService.makeAssetMap)
                .then(vm.handleResponse, vm.handleFailure);
        };

        vm.getAssignedRolesMap = function (body) {
            return vm.getAssignedRoles(body)
                .then(helperService.validateResponse )
                .then(helperService.makeAssetList)
                .then(vm.handleResponse, vm.handleFailure);
        };


        vm.getMyAssignableUsersMap = function (body) {
            return vm.getMyAssignableUsers(body)
                .then(helperService.validateResponse)
                .then(helperService.makeAssetList)
                .then(vm.handleResponse, vm.handleFailure);
        };


        vm.getMyAssignableRolesMap = function (body) {
            return vm.getMyAssignableRoles(body)
                .then(helperService.validateResponse)
                .then(helperService.makeAssetList)
                .then(vm.handleResponse, vm.handleFailure);
        };


        vm.getAssignedUsersMap = function (body) {
            return vm.getAssignedUsers(body)
                .then(helperService.validateResponse)
                .then(helperService.makeAssetList)
                .then(vm.handleResponse, vm.handleFailure);
        };


        vm.getMyGroupsMap = function(body) {
            // $log.log("getMyGroupsMap");
            return vm.getMyGroups(body)
                .then(helperService.validateResponse)
                .then(helperService.makeAssetMap)
                .then(vm.handleResponse, vm.handleFailure);
        };

        vm.getMyDirectGroupsMap = function(body) {
            // $log.log("getMyGroupsMap");
            return vm.getMyDirectGroups(body)
                .then(helperService.validateResponse)
                .then(helperService.makeAssetMap)
                .then(vm.handleResponse, vm.handleFailure);
        };

        vm.getMyVehiclesMap = function (body) {
            //$log.log("getMyVehiclesMap");
            return vm.getMyVehicles(body)
                .then(helperService.validateResponse)
                .then(helperService.makeAssetMap)
                .then(vm.handleResponse, vm.handleFailure);
        };


        vm.getMyUsersMap = function (body) {
            //$log.log("getMyUsersMap");
            return vm.getMyUsers(body)
                .then(helperService.validateResponse)
                .then(helperService.makeAssetMap)
                .then(vm.handleResponse, vm.handleFailure);
        };

        vm.getMyUsersMapList = function (body) {
            //$log.log("getMyUsersMap");
            return vm.getMyUsers(body)
                .then(helperService.validateResponse)
                .then(helperService.makeAssetList)
                .then(vm.handleResponse, vm.handleFailure);
        };




        vm.getMyRolesMap = function (body) {
            // $log.log("getMyRolesMap");
            return vm.getMyRoles(body)
                .then(helperService.validateResponse)
                .then(helperService.makeAssetMap)
                .then(vm.handleResponse, vm.handleFailure);
        };

        vm.getMyRolesList = function (body) {
            // $log.log("getMyRolesMap");
            return vm.getMyRoles(body)
                .then(helperService.validateResponse)
                .then(helperService.makeAssetList)
                .then(vm.handleResponse, vm.handleFailure);
        };



        vm.getMyDevicesMap = function (body) {
            // $log.log("getMyDevicesMap");
            return vm.getMyDevices(body)
                .then(helperService.mergeAssetPermissions)
                .then(helperService.makeAssetMap)
                .then(vm.handleResponse, vm.handleFailure);
        };


        vm.handleDirectAssetResponse = function(resp) {
            // $log.log("groupAPIService handleDirectAssetResponse");
            return $q.resolve(resp);
        };



        vm.getMyDirectAssetsMap = function (body) {
            //$log.log("groupAPIService getMyDirectAssetsMap");
            var gPromise = vm.getMyDirectGroupsMap(body);
            // var vPromise = vm.getMyVehiclesMap(body);
            // var uPromise = vm.getMyUsersMap(body);
            // var rPromise = vm.getMyRolesMap(body);
            // var dPromise = vm.getMyDevicesMap(body);

            // return $q.all([gPromise, vPromise, uPromise, rPromise, dPromise])
            return $q.all([gPromise])
                .then(vm.handleDirectAssetResponse, vm.handleFailure);

        };
    }

}