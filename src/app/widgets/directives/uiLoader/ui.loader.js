/**
 * Created by Rinas Musthafa on 2/14/2017.
 *
 *  Params
 *
 *    -> message = [ string ] message that has to be displayed
 *    -> error = [ boolean ] if there is any error ( nothing will be shown if message is not defined )
 *    -> fetching = [ boolean ] this show display a spinner
 *
 */

export class uiLoader{

  constructor () {
    'ngInject';

    this.restrict = 'E';
    this.scope = {data: '='};
    this.templateUrl = 'app/widgets/directives/uiLoader/ui.loader.html';

  }

  controller($scope){
    'ngInject'

    if($scope.data && !$scope.data.message){
      $scope.data.message = 'No data found!'
    }

  }

}
