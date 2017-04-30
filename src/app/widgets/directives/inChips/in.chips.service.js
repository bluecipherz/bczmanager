/**
 * Created by Rinas Musthafa on 2/15/2017.
 */

export class inChipsService {

  constructor () {
    'ngInject'

    var vm = this;

    vm.dataSet = {};

    vm.setData = function (key, data) {
      vm.dataSet[key] = data;
    }

    vm.getData = function (key) {
      return vm.dataSet[key];
    }


  }

}
