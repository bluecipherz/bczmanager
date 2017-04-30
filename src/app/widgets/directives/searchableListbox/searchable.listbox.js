/**
 * Created by Rinas Musthafa on 2/9/2017.
 *
 *  Attribute
 *
 *      data = object;
 *
 *  Dependencies
 *
 *      -> searchInput [ Directive ]
 *
 *  Params
 *
 *      -> data = [ array ] array of objects which is to be listed
 *      -> click = [ function ] callback when an item is clicked
 *      -> uid = [ string ] key for unique id
 *      -> display = [ string ] key for the value which is to be displayed on item
 *      -> relativeWidth = [ boolean ] to set width of the directive as fit to the parent width
 *      -> uiLoader = [ Object ] uiLoader Object, please refer uiLoader Docs for more
 *
 */
export class searchableListbox {

    constructor () {
        'ngInject';

        this.restrict = 'E';
        this.scope = {data: '='};
        this.templateUrl = 'app/widgets/directives/searchableListbox/searchable.listbox.html';

    }

    controller($scope, $searchableListBox) {
        'ngInject'

        $scope.filtredData = [];
        $searchableListBox.setWidget($scope.data.wid, $scope);

        $scope.onclick = function (item) {
            var uid = $scope.data.uid;
            if(!$scope.data.selectedItem || $scope.data.selectedItem[uid] != item[uid]){
                $scope.data.selectedItem = item;
                if($scope.data.click) $scope.data.click(item);
            }
        }

        $scope.searchInputData = {
            model:'',
            placeholder:'Search',
            onEscape : function ($event) {
                $scope.searchInputData.model = '';
            },
            onKeypress : function ($event, model) {
                $scope.filterList(model);
            }
        }

        $scope.filterList = function(model) {
            if(model && model.length < 2) {
                $scope.filteredData = $scope.data.data;
            }else{
                $scope.filteredData = [];
                for(var idx in $scope.data.data){
                    if(!model || $scope.data.data[idx]['name'].toLowerCase().includes(model.toLowerCase())){
                        $scope.filteredData.push($scope.data.data[idx]);
                    }
                }
            }
            if($scope.filteredData.length > 100) $scope.filteredData.length = 100;
        }


        $searchableListBox.selectItem = function(wid, index){
            if($scope.data.wid == wid){
                if(!index){
                    $scope.data.selectedItem = $scope.data.data[0];
                }else{
                    $scope.data.selectedItem = $scope.data.data[index];
                }
            }
        }
    }

}
