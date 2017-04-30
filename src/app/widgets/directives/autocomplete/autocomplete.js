/**
 * Created by Rinas Musthafa on 2/10/2017.
 *
 *  Attribute
 *
 *      data = object
 *
 *  Params
 *
 *      -> onEnter = [ function ] function which is to be called when user pressed Enter key
 *      -> onEscape = [ function ] function which is to be called when user pressed Escape key
 *      -> onClick = [ function ] mouse click event
 *      -> uid = [ string ] key for the unique id
 *      -> display = [ string ] key for the value which is to be displayed on the list
 *      -> filteredList = [ array ] array of objects which is to be displayed on the list
 *      -> parent = [ jqLite Object / angular $element ] parent div which has scroll
 *      -> input = [ jQuery Object ] object of text input
 *      -> keyup = [ link ] this function is defined in this directive, you have to call this function
 *                          in the keyup event from the parent, other wise key events will not work.
 *      -> wid = [ string ] unique id for widget
 *
 *  event = [ function ] this function will be called in every event
 *
 */

export class autocomplete {

    constructor () {
        'ngInject';

        this.restrict = 'E';
        this.scope = {data: '=', event: '='};
        this.templateUrl = 'app/widgets/directives/autocomplete/autocomplete.html';

    }

    controller($scope, $element) {
        'ngInject'

        var uid = $scope.data.uid;
        var elementTop = 0;
        var element = $($element).find('> div');

        $scope.data.keyup = function ($event) {

            $scope.inputValue = $event.target.value;
            filterArray( $scope.inputValue );

            if($scope.event) $scope.event('keyup', $event);

            if($event.keyCode == 38){ // up

                var index = getObjectIndex($scope.selectedItem, $scope.filtered, uid);
                if(index > 0){
                    selectItemByIndex(index-1, $scope.filtered);
                }

            }else if($event.keyCode == 40){ // down

                var index = getObjectIndex($scope.selectedItem, $scope.filtered, uid);
                if(index < $scope.filtered.length - 1){
                    selectItemByIndex(index+1, $scope.filtered);
                }

            }else if($event.keyCode == 13){ // enter

                if($scope.data.onEnter != null && $scope.data.active && $scope.filtered.length > 0){
                  $scope.data.onEnter($scope.selectedItem, $scope.data.wid);
                  if($scope.event) $scope.event('onEnter', [$scope.selectedItem, $scope.data.wid]);
                }

                $scope.inputValue = '';
                filterArray( $scope.inputValue );

            }else if($event.keyCode == 27){

                if($scope.data.onEscape) $scope.data.onEscape($scope.selectedItem, $scope.data.wid);
                if($scope.event) $scope.event('onEscape', [$scope.selectedItem, $scope.data.wid]);
                $scope.inputValue = '';
                filterArray( $scope.inputValue );

            }else{
                selectItemByIndex(0, $scope.filtered);
            }



        }

        selectItemByIndex(0);

        $scope.selectItem = function (item) {
            $scope.selectedItem = item;
        }

        $scope.mouseClick = function (item) {
            $scope.data.onClick(item, $scope.data.wid);
            if($scope.event) $scope.event('onClick', [item, $scope.data.wid]);
            filterArray('');
        }



        function filterArray( str ) {
            $scope.filtered = [];
            if(!str) return;
            str = str.toLowerCase().trim();
            if(str != '' && str.length > 0 && str != null){
                for(var idx in $scope.data.filteredList){
                    if($scope.data.filteredList[idx][$scope.data.display].toLowerCase().includes(str) || str == '.'){

                        $scope.filtered.push($scope.data.filteredList[idx]);

                    }
                }
            }
        }

        function selectItemByIndex(idx, data) {
            if(data){
              if(data.length > 0) $scope.selectedItem = data[idx];
            }else{
              if($scope.data.searchList && $scope.data.searchList.length > 0)$scope.selectedItem = $scope.data.searchList[idx];
            }
        }

        function getObjectIndex(item, list, uid) {
            if(item == null) item = list[0];
            for(var idx in list){
                if(list[idx][uid] == item[uid]){
                    return parseInt(idx);
                }
            }
            return false;
        }

        function getParent($el) {
            if($scope.data.parent.context.nextSibling){
                $scope.parent = $(angular.element($el.context.nextSibling)).find('.cwcm_container');
                initScroll();
            }else{
                setTimeout(function () {
                    getParent()
                },20)
            }
        }

        function initScroll() {
            $scope.parent.scroll(function () {
                if($scope.data.input){
                    elementTop = $scope.data.input.offset().top + 30;

                    if($scope.parent.offset().top > elementTop || elementTop > window.innerHeight) {
                        elementTop = -1000;
                        $scope.active = false;
                    }else{
                        $scope.active = true;
                    }

                    if(elementTop > window.innerHeight / 2){
                        element.css({bottom : window.innerHeight - elementTop + 30, top:'auto'})
                    }else{
                        element.css({top : elementTop, bottom : 'auto'})
                    }
                }
            })
        }

        getParent($scope.data.parent);

    }

}
