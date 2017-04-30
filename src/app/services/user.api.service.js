/**
 * Created by Rinas Musthafa on 2/11/2017.
 */

export class userAPIService{
    constructor ($log, $q, requestService, helperService, $inError) {
        'ngInject'
        $log.log("userAPIService");
        var vm = this;

        vm.encloseBody = function (data) {
            // return data;
            return {user: data};
        };

        vm.getMyGroups = function (body) {
            // $log.log("getMyGroups");
            // body = vm.encloseBody(body);
            return requestService.firePost('/api/group/listassets', body);
        };


        vm.getAssignedGroups = function (body) {
            // $log.log("getMyGroups");
            // body = vm.encloseBody(body);
            return requestService.firePost('/api/user/getassignedgroups', body);
        };


        vm.getAssignedRoles = function (body) {
            // $log.log("getMyGroups");
            // body = vm.encloseBody(body);
            return requestService.firePost('/api/user/getassignedroles', body);
        };


        vm.getMyAssignableGroups = function (body) {
            return requestService.firePost('/api/user/getmyassignablegroups', body);
        };


        vm.getMyAssignableRoles = function (body) {
            return requestService.firePost('/api/user/getmyassignableroles', body);
        };


        vm.assignRole = function (body) {
            return requestService.firePost('/api/user/assignrole', body);
        };

        vm.deassignRole = function (body) {
            return requestService.firePost('/api/user/deassignrole', body);
        };

        vm.createUser = function (body) {
            return requestService.firePost('/api/user/createlocaluser', body)
                .then(helperService.validateResponse );
        };


        vm.handleResponse = function (resp) {
            // $log.log("handleResponse");
            // $log.log(resp);
            return $q.resolve(resp)
        };


        vm.handleFailure = function (resp) {
            $log.log("handleFailure ");
            $inError.add(resp);
            $log.log(resp);
            return $q.reject(resp);
        };


        vm.getAssignedRolesMap = function (body) {
            return vm.getAssignedRoles(body)
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


        vm.getMyAssignableGroupsMap = function (body) {
            return vm.getMyAssignableGroups(body)
                .then(helperService.validateResponse)
                .then(helperService.makeAssetList)
                .then(helperService.filterAssetGroups)
                .then(vm.handleResponse, vm.handleFailure);
        };


        vm.getAssignedGroupsMap = function (body) {
            return vm.getAssignedGroups(body)
                .then(helperService.validateResponse)
                .then(helperService.makeAssetList)
                .then(vm.handleResponse, vm.handleFailure);
        };


        vm.getMyGroupsMap = function (body) {
            // $log.log("getMyGroupsMap");
            return vm.getMyGroups(body)
                .then(helperService.validateResponse, vm.handleFailure)
                .then(helperService.makeAssetMap, vm.handleFailure)
                .then(vm.handleResponse, vm.handleFailure);
        };


        vm.getMyAssignedGroupsMap = function (body) {
            // $log.log("getMyGroupsMap");
            return vm.getMyAssignedGroups(body)
                .then(helperService.validateResponse, vm.handleFailure)
                .then(helperService.makeAssetMap, vm.handleFailure)
                .then(vm.handleResponse, vm.handleFailure);
        };


        vm.getMyAssetGroupsMap = function (body) {
            //$log.log("getMyAssetGroupsMap");
            return vm.getMyAssetGroups(body)
                .then(helperService.validateResponse, vm.handleFailure)
                .then(helperService.makeAssetMap, vm.handleFailure)
                .then(vm.handleResponse, vm.handleFailure);
        };


        vm.getMyVehiclesMap = function (body) {
            // $log.log("getMyVehiclesMap");
            return vm.getMyVehicles(body)
                .then(helperService.validateResponse, vm.handleFailure)
                .then(helperService.makeAssetMap, vm.handleFailure)
                .then(vm.handleResponse, vm.handleFailure);
        };


        vm.getMyUsersMap = function (body) {
            // $log.log("getMyUsersMap");
            return vm.getMyUsers(body)
                .then(helperService.validateResponse, vm.handleFailure)
                .then(helperService.makeAssetMap, vm.handleFailure)
                .then(vm.handleResponse, vm.handleFailure);
        };

        vm.getMyUsersMapList = function (body) {
            // $log.log("getMyRolesMap");
            return vm.getMyUsers(body)
                .then(helperService.validateResponse, vm.handleFailure)
                .then(helperService.makeAssetList, vm.handleFailure)
                .then(vm.handleResponse, vm.handleFailure);
        };


        vm.getMyRolesMap = function (body) {
            // $log.log("getMyRolesMap");
            return vm.getMyRoles(body)
                .then(helperService.validateResponse, vm.handleFailure)
                .then(helperService.makeAssetMap, vm.handleFailure)
                .then(vm.handleResponse, vm.handleFailure);
        };


        vm.getMyRolesList = function (body) {
            // $log.log("getMyRolesMap");
            return vm.getMyRoles(body)
                .then(helperService.validateResponse, vm.handleFailure)
                .then(helperService.makeAssetList, vm.handleFailure)
                .then(vm.handleResponse, vm.handleFailure);
        };


        vm.getMyDevicesMap = function (body) {
            // $log.log("getMyDevicesMap");
            return vm.getMyDevices(body)
                .then(helperService.validateResponse, vm.handleFailure)
                .then(helperService.makeAssetMap, vm.handleFailure)
                .then(vm.handleResponse, vm.handleFailure);
        };


        vm.handleDirectAssetResponse = function (resp) {
            //$log.log("userAPIService handleDirectAssetResponse");
            // $log.log(resp);
            return $q.resolve(resp);
        };


        vm.getMyDirectAssetsMap = function (body) {
            // $log.log("userAPIService getMyDirectAssetsMap");
            var gPromise = vm.getMyGroupsMap(body);
            var vPromise = vm.getMyVehiclesMap(body);
            var uPromise = vm.getMyUsersMap(body);
            var rPromise = vm.getMyRolesMap(body);
            var dPromise = vm.getMyDevicesMap(body);
            var myPromise = vm.getMyInfoMap(body);

            return $q.all([gPromise, vPromise, uPromise, rPromise, dPromise, myPromise])
                .then(vm.handleDirectAssetResponse, vm.handleFailure);

        };
    }
}

