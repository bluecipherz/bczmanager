/**
 * Created by Rinas Musthafa on 2/21/2017.
 */
export class $operationToolBar{

    constructor ($timeout) {
        'ngInject'

        var vm = this;
        var widgets = {};

        vm.status = false;

        vm.isInit = function () {
            return vm.status;
        }


        vm.setWidget = function (wid, data) {
            widgets[wid] = data;
        }


        vm.setData = function (wid, data) {
            if(widgets[wid]){
                widgets[wid].data.data = data;
            }else{
                $timeout(function () {
                    vm.setData(wid, data);
                },20)
            }
        }

        vm.close = function (wid) {
            if(widgets[wid]){
                widgets[wid].close();
            }
        }

        vm.setState = function (wid, data) {
            if(widgets[wid]){
                widgets[wid].close();
                for(var idx in data){
                    for(var jdx in data[idx]){
                        widgets[wid].data.data[idx][jdx] = data[idx][jdx];
                    }
                }
            }
        }



    }

}
