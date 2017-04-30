/**
 * Created by smiddela on 01/03/17.
 */


export class helperTestService{
    constructor ($log, $q, helperService) {
        'ngInject'
        $log.log("helperTestService");
        let vm = this;

        let path;
        let ASSET_ID;
        let PARENT_PATH;
        let PARENT_ID;
        let ASSET_TYPE_ID;


        vm.test1 = function () {
            // console.log("TEST1");
            path = '/2/6/';
            ASSET_ID = 6;
            PARENT_PATH = '/2/6/';
            PARENT_ID = 6;
            ASSET_TYPE_ID = 2;
        };


        vm.test2 = function () {
            // console.log("TEST2");
            path = '/2/61/5/72/';
            ASSET_ID = 72;
            PARENT_PATH = '/2/61/';
            PARENT_ID = 61;
            ASSET_TYPE_ID = 5;
        };


        vm.test3 = function () {
            // console.log("TEST3");
            path = '/2/6/2/144/2/145/2/148/5/156/';
            ASSET_ID = 156;
            PARENT_PATH = '/2/6/2/144/2/145/2/148/';
            PARENT_ID = 148;
            ASSET_TYPE_ID = 5;
        };


        vm.runTest = function () {
            let assetid = helperService.getAssetId2(path);
            if(assetid != ASSET_ID)
                console.log("GET_ASSET_ID failed", path, "computed", assetid, "Expected", ASSET_ID);

            let parentpath = helperService.getParentPath2(path);
            if(parentpath != PARENT_PATH)
                console.log("GET_PARENT_PATH failed", path, "computed", parentpath, "Expected", PARENT_PATH);

            let parentid = helperService.getParentId2(path);
            if(parentid != PARENT_ID)
                console.log("GET_PARENT_ID failed", path, "computed", parentid, "Expected", PARENT_ID);

            let assettypeid = helperService.getAssetTypeId2(path);
            if(assettypeid != ASSET_TYPE_ID)
                console.log("GET_ASSET_TYPE_ID failed", path, "computed", assettypeid, "Expected", ASSET_TYPE_ID);
        };


        vm.test1();
        vm.runTest();

        vm.test2();
        vm.runTest();

        vm.test3();
        vm.runTest();
    }
}

