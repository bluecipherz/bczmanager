/**
 * Created by Rinas Musthafa on 2/15/2017.
 */
export class userData{

  constructor ($log, appConstants, groupAPIService, $q, helperService, userAPIService, loginService) {
    'ngInject'

    // $log.log('userData');
    var vm = this;

    vm.callbacks = {'data': [], assignable : []};
    vm.myData = null;


    vm.getMyData = function(list, callback){
        fetchData(list)
        if(typeof callback == 'function') vm.callbacks['data'].push(callback);
    }


    function fetchData(list){

      var requestList = [];
      for(var idx in list){
        var params = {assettype : list[idx], pgrouppath : appConstants.ROOT_GROUP};
        if(list[idx] == appConstants.GROUP) params.recursive = true;
        requestList[idx] = groupAPIService.listAssets(params);
      }

      $q.all(requestList)
        .then(handleResponse, handleFailure);

      function handleResponse(resp) {
        var data = [];
        for(var idx in resp){
          data.push(resp[idx].data.data.assets);
        }
        vm.myData = data;
        for(var idx in vm.callbacks['data']){
          if(typeof  vm.callbacks['data'][idx] == 'function') vm.callbacks['data'][idx](vm.myData);
        }
        vm.callbacks['data'] = [];
      }

    }



    function handleFailure(resp) {
      console.log('HandleFailure', resp);
    }


  }

}
