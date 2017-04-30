/**
 * Created by smiddela on 02/03/17.
 */

export class roleAPIService{

    constructor ($log, $q, requestService, helperService, appConstants, $inError) {
        'ngInject'
        $log.log("roleAPIService");
        var vm = this;


        vm.getAssignedUsers = function (body) {
            return requestService.firePost('/api/role/getassignedusers', body);
        };


        vm.getAssignedGroups = function (body) {
            return requestService.firePost('/api/role/getassignedgroups', body);
        };


        vm.getMyAssignableUsers = function (body) {
            return requestService.firePost('/api/role/getmyassignableusers', body);
        };


        vm.getMyAssignableGroups = function (body) {
            return requestService.firePost('/api/role/getmyassignablegroups', body);
        };


        vm.getMyPermissions = function (body) {
            return requestService.firePost('/api/role/getmypermissions', body);
        };


        vm.getAssignedPermissions = function (body) {
            return requestService.firePost('/api/role/getassignedpermissions', body);
        };


        vm.addPermission = function (body) {
            return requestService.firePost('/api/role/addpermission', body);
        };

        vm.deletePermission = function (body) {
            return requestService.firePost('/api/role/deletepermission', body);
        };


        vm.createRole = function (body) {
            return requestService.firePost('/api/role/create', body)
                .then(helperService.validateResponse);
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


        vm.getAssignedGroupsMap = function (body) {
            return vm.getAssignedGroups(body)
                .then(helperService.validateResponse )
                .then(helperService.makeAssetList)
                .then(vm.handleResponse, vm.handleFailure);
        };


        vm.getAssignedUsersMap = function (body) {
            return vm.getAssignedUsers(body)
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


        vm.getMyAssignableUsersMap = function (body) {
            return vm.getMyAssignableUsers(body)
                .then(helperService.validateResponse)
                .then(helperService.makeAssetList)
                .then(vm.handleResponse, vm.handleFailure);
        };


        vm.getMyPermissionsMap = function (body) {
            return vm.getMyPermissions(body)
                .then(helperService.validateResponse)
                .then(vm.handleResponse, vm.handleFailure);
        };

        vm.getAssignedPermissionsMap = function (body) {
            return vm.getAssignedPermissions(body)
                .then(helperService.validateResponse)
                .then(vm.handleResponse, vm.handleFailure);
        };
    }

}