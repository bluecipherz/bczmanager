/**
 * Created by Rinas Musthafa on 2/10/2017.
 *
 *  Attribute
 *
 *      data = [ array ] list of objects which is suitable for chips, please refer inChips docs for details;
 *      searchlist = [ array ] list of objects which is to be listed in the auto complete
 *
 *          uid
 *          display
 *          data = [ array ] array of objects
 *          onEnter
 *          onEscape
 *          onClick
 *          wid = [ string ] unique id for widget. if you dont pass this parameter, chips will not work properly
 *
 *      parent = [ jQuery ] dom element
 *
 */

export class autocompleteChipBox {

    constructor () {
        'ngInject';

        this.restrict = 'E';
        this.scope = {data: '=', parent: '='};
        this.templateUrl = 'app/widgets/directives/autocompleteChipBox/autocomplete.chipbox.html';

    }

    controller($scope, $element, helperService) {
        'ngInject'

        $scope.data.parent = $scope.parent;
        filterArray();

        $scope.event = function (tag, data) {

          if(tag == 'onEnter'){
            insertItem(data[0]);
          }

          if(tag == 'onEscape'){
            blurInput();
          }

          if(tag == 'onClick'){
            insertItem(data[0]);
          }

        }

        function blurInput() {
            $scope.mainInput = '';
            $scope.input.blur();
        }

        function insertItem( item ) {
            if(item != null){
                $scope.mainInput = '';
                item.loading = true;
                $scope.data.data.push(item);
                filterArray();
            }else{
                $scope.mainInput = '';
            }
        }


        function filterArray() {
            $scope.data.filteredList = helperService.arrayDiff($scope.data.data, $scope.data.searchList, $scope.data.uid);
        }


        var restrictedKeys = [18, 91, 9];


        $scope.keydown = function ($event) {
          for(var idx in restrictedKeys){
            if($event.keyCode == restrictedKeys[idx]){
              $scope.onBlur();
              $scope.input.blur();
            }
          }
        }


        $scope.keyup = function ($event) {
            if($scope.data.keyup) $scope.data.keyup($event);
        }


        $scope.onFocus = function () {
            $scope.data.active = true;
            $scope.input.focus();
        }


        $scope.onBlur = function () {
            $scope.data.active = false;
        }



        getInputElement($($element.context));

        function getInputElement($el) {
            if($el.find('input').length > 0){
                $scope.input = $(angular.element($element.context).find('input')[0]);
                if(!$scope.data.input) $scope.data.input = $scope.input;
            }else{
                setTimeout(function () {
                    getInputElement($el)
                }, 20);
            }
        }
    }

}
