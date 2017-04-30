/**
 * Created by Rinas Musthafa on 2/25/2017.
 */
export class $searchableListBox{

    constructor () {
        'ngInject'
        var vm = this;

        var widgets = {};

        vm.setWidget = function (wid, data) {
            widgets[wid] = data;
        }
        
        vm.setData = function (wid, data) {
            if(widgets[wid]){
                widgets[wid].data.data = data;
                widgets[wid].filterList('');
            }
        }


    }

}