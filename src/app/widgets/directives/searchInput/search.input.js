/**
 * Created by Rinas Musthafa on 2/9/2017.
 *
 *  Attribute
 *
 *      data = object;
 *
 *  Params
 *
 *      -> onEnter = [ function ] callback for on enter key press
 *      -> onEscape = [ function ] callback for on escape key press
 *      -> onKeypress = [ function ] callback for keypress
 *      -> model = [ model ] ng-model for input
 *      -> placeholder = [ string ] placeholder for input
 *
 */
export class searchInput{

    constructor () {
        'ngInject';

        this.restrict = 'E';
        this.scope = {data: '='};
        this.templateUrl = 'app/widgets/directives/searchInput/search.input.html';

    }

    controller($scope, $timeout){
        'ngInject'

        $scope.keyup = function ($event) {
          $timeout(function () {

            if($event.keyCode == 27){
              if($scope.data.onEscape) $scope.data.onEscape($event, $scope.data.model);
            }else if($event.keyCode == 13){
              if($scope.data.onEnter) $scope.data.onEnter($event, $scope.data.model);
            }
            if($scope.data.onKeypress) $scope.data.onKeypress($event, $scope.data.model);

          })
        }

    }

}
