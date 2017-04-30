/**
 * Created by Rinas Musthafa on 2/11/2017.
 */

export class helperService {
    constructor ($log, $q, appConstants) {
        'ngInject'

        var vm = this;
        $log.log("helperService");

        var SLASH = '/';

        // should be same as defined in backend
        vm.assetTypeIdToAssetType = {
            2: appConstants.GROUP,
            3: appConstants.USER,
            4: appConstants.ROLE,
            5: appConstants.LOCALUSER,
            45: appConstants.VEHICLE,
            52: appConstants.DEVICE,
        };


        // generating reverse lookup
        vm.assetTypeToAssetTypeId = function () {
            var assetTypeToAssetTypeId = {};
            for (var idx in vm.assetTypeIdToAssetType) {
                assetTypeToAssetTypeId[vm.assetTypeIdToAssetType[idx]] = idx;
            }
            return assetTypeToAssetTypeId;
        }();


        vm.getAssetId2 = function (path) {
            if (path == null)
                return null;

            let tokens = path.split(SLASH);

            if(tokens.length > 2)
                return tokens[tokens.length - 2];

            return null;
        };


        vm.getParentPath2 = function (path) {
            if (path == null)
                return null;

            let savedidx = 0;
            let count = 0;
            for(let idx = path.length - 1; idx >= 0; idx--) {
                if(path[idx] == SLASH)
                    count++;

                if(count == 2) {
                    savedidx = idx;
                }

                if(count == 5) {
                    break;
                }
            }

            if(count == 5)
                return path.substring(0, savedidx);

            return path;
        };


        vm.getParentId2 = function (path) {
            if(path == null)
                return null;

            return vm.getAssetId2(vm.getParentPath2(path));
        };


        vm.getAssetTypeId2 = function (path) {
            if(path == null)
                return null;

            let tokens = path.split(SLASH);

            if(tokens.length > 3)
                return tokens[tokens.length - 3];

            return null;
        };


        vm.getAssetType2 = function (path) {
            if(path == null)
                return null;

            return vm.assetTypeIdToAssetType[vm.getAssetTypeId2(path)];
        };


        vm.getAssetLevel2 = function (path) {
            if (path == null)
                return null;

            return Math.floor((path.split(SLASH).length - 1) / 2);
        };


        vm.addAssetInfo = function (asset) {
            if (asset == null)
                return null;

            asset.assetid = vm.getAssetId2(asset.assetpath);
            asset.pgrouppath = vm.getParentPath2(asset.assetpath);
            asset.pgroupid = vm.getParentId2(asset.assetpath);
            asset.ui_asset_type = vm.getAssetType2(asset.assetpath);
            asset.assetlevel = vm.getAssetLevel2(asset.assetpath);
        };


        vm.filterAssetGroups = function (data) {
            let filteredList = [];
            for(let idx in data) {
                if(data[idx].tag == 'TEAM')
                    filteredList.push(data[idx]);
            }

            return $q.resolve(filteredList);
        };



        // ################################################################################################

        vm.mergeAssetPermissions = function (resp) {
            var data = resp.data.data;
            for (var idx in data.assets) {
                var asset = data.assets[idx];
                vm.addAssetInfo(asset);
                for (var pidx in data.permissions) {
                    var permission = data.permissions[pidx];
                    if (asset.assetpath == permission.assetpath) {
                        asset.permissions = JSON.parse(permission.permid);
                    }
                }
            }

            return $q.resolve(resp);
        };

        vm.mergeUserPermissions = function (resp) {
            // $log.log(resp);
            var usersList = [];
            var data = resp[0].data.data;
            for (var idx in data.assets) {
                var asset = data.assets[idx];
                for (var perm in data.permissions) {
                    var permission = data.permissions[perm];
                    if (asset.assetpath == permission.assetpath) {
                        usersList.push({
                            assetpath: asset.assetpath,
                            name: asset.name,
                            pname: asset.pname,
                            assetid: permission.assetid,
                            permid: permission.permid
                        });
                    }
                }
            }
            return $q.resolve(usersList);
        };


        vm.mergeAssetAssignments = function (resp) {
            //$log.log(resp);
            var data = resp.data.data;
            var asset = data.asset[0];
            asset.info = data.info;
            asset.assg = data.assg;
            asset.assginfo = data.assginfo;
            asset.permissions = JSON.parse(data.permissions[0].permid);
            //$log.log(asset);
            return $q.resolve(asset);
        };


        vm.mergeFenceInfo = function (resp) {
            var data = resp.data.data;
            for (var idx in data.assets) {
                var asset = data.assets[idx];
                asset.info = [];
                for (var pidx in data.info) {
                    var item = data.info[pidx];
                    if (asset.assetpath == item.assetpath) {
                        asset.info.push(item);
                    }
                }
            }

            return $q.resolve(resp);
        };


        vm.makeAssetMap = function (data) {
            var assets = {};
            for (var idx in data.assets) {
                var asset = data.assets[idx];
                var key = getMyPath(asset);
                vm.addAssetInfo(asset);
                assets[key] = asset;
            }

            return $q.resolve(assets);
        };

        vm.makePermissionMap = function (data) {
            var permissions = {};
            for (var idx in data.permissions) {
                var permission = data.permissions[idx];
                var key = getMyPath(permission);
                permissions[key] = permission;
            }

            return $q.resolve(permissions);
        };

        vm.mergeMap = function(map1, map2){
            for(var idx in map1){
                if(idx in map2){
                    for(var jdx in map2[idx]){
                        map1[idx][jdx] = map2[idx][jdx];
                    }
                }
            }
            return map1;
        };

        function getMyPath(asset) {
            var type = asset.assetpath;
            if (!type) type = asset.grouppath;
            if (!type) type = asset.rolepath;
            if (!type) type = asset.userpath;
            if (!type) type = asset.vehiclepath;
            if (!type) type = asset.devicepath;
            return type;
        }


        vm.validateResponse = function (resp) {
            if (resp && resp.data && resp.data.data) {
                return $q.resolve(resp.data.data);
            }
            return $q.reject(resp);
        };


        vm.makeAssetList = function (data) {
            return $q.resolve(data.assets);
        };


        vm.makeMapOnAssetPath = function (data) {
            // diff with makeAssetMap is that this function
            // is directly reading from the array
            // var data = resp.data.data;
            var assets = {};
            for (var idx in data) {
                var asset = data[idx];
                // vm.addAssetInfo(asset);
                assets[asset.assetpath] = asset;
            }
            return $q.resolve(assets);
        };


        vm.slashCount = function (path) {
            let count = 0;
            for(let idx in path) {
                if(path[idx] == SLASH)
                    count++;
            }

            return count;
        };


        vm.sortOnAssetLevel = function (hashObj) {
            var arrayObj = [];
            for (var idx in hashObj) {
                arrayObj.push(hashObj[idx]);
            }

            function compare(a, b) {
                return a.info.assetlevel - b.info.assetlevel;
            }

            arrayObj.sort(compare);

            return arrayObj;
        };


        vm.sortPaths = function (arrayObj) {
            function compare(a, b) {
                return vm.slashCount(a) - vm.slashCount(b);
            }

            arrayObj.sort(compare);

            return arrayObj;
        };


        vm.getNextPathItemEnd = function (str, start) {
            var slash = '/';

            if (str === null)
                return -1;

            if (start === null)
                start = 0;

            if (start < 0 || start >= str.length)
                return -1;

            if (str.charAt(start) !== slash)
                return -1;

            if (str.substr(start, str.length).length < 4)
                return -1;

            var firstSlash = str.indexOf(slash, start + 1);
            if (firstSlash != -1 && firstSlash < str.length - 1) {
                var secondSlash = str.indexOf(slash, firstSlash + 1);
                if (secondSlash != -1) {
                    return secondSlash - 1;
                } else {
                    return str.length - 1;
                }
            }

            return -1;
        };


        vm.getNodesInPath = function (path) {
            if (angular.isUndefined(path))
                return [];

            var nodesInPath = [];
            var startIndex = 0;
            var endIndex = 0;
            var itemStartIndex = 0;
            //$log.log("==================" + path);
            while (itemStartIndex < path.length) {
                endIndex = vm.getNextPathItemEnd(path, itemStartIndex);
                if (endIndex == -1)
                    return null;
                //$log.log("endIndex " + endIndex);
                if (endIndex < path.length) {
                    nodesInPath.push(path.substring(startIndex, endIndex + 1));
                }
                itemStartIndex = endIndex + 1;
            }
            //$log.log(nodesInPath);
            return nodesInPath;
        };


        JSON.flatten = function (data) {
            var result = {};

            function recurse(cur, prop) {
                if (Object(cur) !== cur) {
                    result[prop] = cur;
                } else if (Array.isArray(cur)) {
                    for (var i = 0, l = cur.length; i < l; i++)
                        recurse(cur[i], prop + "[" + i + "]");
                    if (l == 0)
                        result[prop] = [];
                } else {
                    var isEmpty = true;
                    for (var p in cur) {
                        isEmpty = false;
                        recurse(cur[p], prop ? prop + "." + p : p);
                    }
                    if (isEmpty && prop)
                        result[prop] = {};
                }
            }

            recurse(data, "");
            return result;
        };


        JSON.flatten2 = function (data) {
            var result = {};

            function recurse(cur, prop) {
                if (Object(cur) !== cur) {
                    result[prop] = cur;
                } else if (Array.isArray(cur)) {
                    for (var i = 0, l = cur.length; i < l; i++) {
                        if (typeof cur[i] === 'object') {
                            recurse(cur[i], prop + "[" + i + "]");
                        }
                        else {
                            if (i == 0) {
                                result[prop] = [];
                            }
                            result[prop].push(cur[i]);
                        }
                    }
                    if (l == 0)
                        result[prop] = [];
                } else {
                    var isEmpty = true;
                    for (var p in cur) {
                        isEmpty = false;
                        recurse(cur[p], prop ? prop + "." + p : p);
                    }
                    if (isEmpty && prop)
                        result[prop] = {};
                }
            }

            recurse(data, "");
            return result;
        };


        JSON.unflatten = function (data) {
            "use strict";
            if (Object(data) !== data || Array.isArray(data))
                return data;
            var regex = /\.?([^.\[\]]+)|\[(\d+)\]/g,
                resultholder = {};
            for (var p in data) {
                var cur = resultholder,
                    prop = "",
                    m;
                while (m = regex.exec(p)) {
                    cur = cur[prop] || (cur[prop] = (m[2] ? [] : {}));
                    prop = m[2] || m[1];
                }
                cur[prop] = data[p];
            }
            return resultholder[""] || resultholder;
        };


        vm.setIndirect = function (arr) {
            for (var idx in arr) {
                arr[idx].indirect = true;
            }
            return arr;
        };


        vm.spliceRedundantObjects = function (arr, key) {

            var filteredByKey = {};
            var filteredMap = [];

            for (var idx in arr) {
                var tempKey = arr[idx][key];
                if (!(tempKey in filteredByKey)) {
                    filteredByKey[tempKey] = [];
                }
                filteredByKey[tempKey].push(arr[idx]);
            }

            for (var idx in filteredByKey) {
                var itemArray = getMyItem(filteredByKey[idx]);
                for (var jdx in itemArray) {
                    filteredMap.push(itemArray[jdx]);
                }
            }

            function getMyItem(list) {
                var obj = null;
                var tempArray = [];
                var id = null;

                for (var idx in list) {
                    if (vm.getAssetType2(list[idx].grouppath) == appConstants.GROUP) {
                        var tempId = vm.getAssetId2(list[idx][key]);
                        if (id == null || tempId < id) {
                            id = tempId;
                            obj = list[idx];
                            obj.indirect = true;
                        }
                    } else {
                        list[idx].indirect = false;
                        tempArray.push(list[idx])
                    }
                }
                if (obj != null) tempArray.push(obj);
                return tempArray;
            }

            return filteredMap;

        };


        vm.arrayDiff = function (array1, array2, key) {

            if (!array1 || array1 && !array1.length)
                return array2;

            var filtered = [];
            var found;

            for (let idx in array2) {
                found = false;
                for (let jdx in array1) {
                    if (array2[idx][key] == array1[jdx][key]) {
                        found = true;
                    }
                }
                if (!found) filtered.push(array2[idx]);
            }

            return filtered;
        };


        vm.returnValue = function(base, str) {
            var path = str.split('.');
            var tempPath = [];
            var pathObj = {};
            var tempBase = angular.copy(base);
            var found = true;

            for(var idx in path){
                pathObj[path[idx]] = path[idx].split('[')
                for(var jdx in pathObj[path[idx]]){
                    tempPath.push(pathObj[path[idx]][jdx].replace(']',''));
                }
            }
            tempPath.shift();
            if(tempBase){
                for(var idx in tempPath){
                    if(angular.isDefined(tempBase[tempPath[idx]])){
                        tempBase = tempBase[tempPath[idx]];
                    }else{
                        found = false;
                        break;
                    }
                }
            }
            if(!found){
                return null;
            }else{
                return tempBase;
            }
        }

    }
}


