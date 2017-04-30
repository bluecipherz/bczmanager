/**
 * Created by Rinas Musthafa on 2/17/2017.
 */

export class inErrorSerivce{

  constructor () {
    'ngInject'

    var vm = this;

    vm.errorCount = 0;

    vm.errorCounter = function () {
      vm.errorCount++;
      return vm.errorCount;
    }

  }

}
