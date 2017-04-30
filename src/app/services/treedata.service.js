/**
 * Created by Rinas Musthafa on 2/11/2017.
 */

export class treeDataService {

    constructor($log, $q, helperService, groupAPIService) {
        'ngInject'

        var vm = this;
        $log.log("treeDataService");

        vm.collapsedStatus = false;
        vm.globalGenericTree = null;


        vm.getGenericTreeIndex = function (genericTree, asset) {
            for (var idx in genericTree) {
                if (genericTree[idx].info.assetpath == asset.assetpath)
                    return idx;
            }
        };


        vm.buildManagementTree = function (genericTree, key) {
            //$log.log("buildManagementTree " + key);

            if (genericTree === null)
                return null;

            if (!('visited' in genericTree[key])) {
                genericTree[key].visited = true;
            } else if (genericTree[key].visited == true) {
                //$log.log("Already visited: " + key);
                return null;
            }

            var gtNode = genericTree[key];
            gtNode.visited = true;

            //$log.log(gtNode);
            var utNode = {};
            utNode.id = genericTree[key].info.assetpath;
            utNode.title = gtNode.info.name;
            utNode.info = gtNode.info;
            utNode.items = [];
            utNode.checkStatus = false;
            utNode.collapsed = vm.collapsedStatus;

            var resultNode = null;
            var child = null;
            if (gtNode.children !== null) {
                for (var idx in gtNode.children) {
                    child = gtNode.children[idx];
                    //$log.log("parent: " + key + ", child = " + idx + ", type = " + child.ui_asset_type);
                    resultNode = vm.buildManagementTree(genericTree, vm.getGenericTreeIndex(genericTree, child));
                    //$log.log(resultNode);

                    if (resultNode !== null) {
                        utNode.items.push(resultNode);
                    }

                }
            }

            return utNode;
        };


        vm.createManagementTree = function (tempTree) {
            // $log.log("genericTree", genericTree);
            var genericTree = tempTree[0];
            var groupTree = tempTree[1];

            var uiTree = [];
            for (var key in genericTree) {
                var resultNode = vm.buildManagementTree(genericTree, key);
                if (resultNode !== null) {
                    uiTree.push(resultNode);
                }
            }

            if(vm.globalGenericTree == null){
                vm.globalGenericTree  = uiTree;
            }

            if(vm.globalGenericTree[0]) vm.globalGenericTree[0].collapsed = true;
            if(vm.globalGenericTree[0]) vm.globalGenericTree[0].loading = false;

            // $log.log("createManagementTree", uiTree);
            return $q.resolve([uiTree, groupTree]);
        };




        vm.createGenericTree = function (resp) {
            // $log.log("createGenericTree", resp);
            var groups = resp[0];
            var groupTree = {};
            // $log.log("mygroups", groups);

            for (var ridx = 0; ridx < resp.length; ridx++) {
                var assets = resp[ridx];
                //add all the asset's allowed parent hierarchy to groupTree
                for (var aidx in assets) {
                    var asset = assets[aidx];
                    //$log.log(asset);
                    var assetpath = asset.assetpath;
                    var pgrouppath = asset.pgrouppath;

                    if (!(assetpath in groupTree)) {
                        groupTree[assetpath] = {};
                        groupTree[assetpath].info = asset;
                        groupTree[assetpath].children = null;
                        // groupTree[assetpath].collapsed = vm.collapsedStatus;

                        if (pgrouppath in groups && pgrouppath != assetpath) {
                            if (!(pgrouppath in groupTree)) {
                                groupTree[pgrouppath] = {};
                                groupTree[pgrouppath].info = groups[pgrouppath];
                                groupTree[pgrouppath].children = {};
                                groupTree[pgrouppath].children[assetpath] = asset;
                                // groupTree[pgrouppath].collapsed = vm.collapsedStatus;
                            } else {
                                if (groupTree[pgrouppath].children == null) {
                                    groupTree[pgrouppath].children = {};
                                }
                                groupTree[pgrouppath].children[assetpath] = asset;
                            }
                        }
                    }
                }
            }

            // console.log("createGenericTree", groupTree);
            var assetArray = helperService.sortOnAssetLevel(groupTree);
            // console.log("createGenericTree", assetArray);
            return $q.resolve([assetArray, groupTree]);
        };


        vm.handleSuccess = function (resp) {
            console.log('handle success');
            console.log(resp);
            return $q.resolve(resp);
        };


        vm.handleFailure = function (resp) {
            console.log('handle failure');
            console.log(resp);
            return $q.reject(resp);
        };


        vm.getManagementTree = function (body) {
            return groupAPIService.getMyDirectAssetsMap(body)
                .then(vm.createGenericTree, vm.handleFailure)
                .then(vm.createManagementTree, vm.handleFailure)
        };
    }

}
