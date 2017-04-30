/**
 * Created by Rinas Musthafa on 2/10/2017.
 *
 *  Attribute
 *
 *      data = object
 *
 *        -> onClose = [ function ] callback when user click close button
 *        -> onRetry = [ function ] callback when user click retry button
 *        -> onRedirect = [ function ] callback when user click on the chip
 *        -> display = [ string ] key for the value which is to be displayed on the chip
 *        -> data = [ array ] list of objects which is to listed in as chips
 *        -> uid = [ string ]  key for unique id
 *        -> filterChips = [ function ] call this function inside keyup event of the filter input
 *            [ params ] filter string for the list of chips
 *        -> preventDefault = [ boolean ] for preventing the default close button behavior
 *
 *       wid = [ string ] unique id for widget;
 *
 */

export class inChips {

    constructor () {
        'ngInject';

        this.restrict = 'E';
        this.scope = {data: '=', wid: '='};
        this.templateUrl = 'app/widgets/directives/inChips/in.chips.html';

    }

    controller($scope, $inChips, helperService, appConstants) {
        'ngInject'

        var uid = $scope.data.uid;

        $scope.types = appConstants;

        if($scope.wid) $inChips.setData($scope.wid, $scope.data)

        $scope.filterString = '';

        $scope.data.filterChips = function (str){
            for(var idx in $scope.data.data){
                if($scope.data.data[idx][$scope.data.display].toLowerCase().indexOf(str.toLowerCase()) != -1){
                    $scope.data.data[idx].hide = false;
                }else{
                    $scope.data.data[idx].hide = true;
                }
            }
            // console.log('filtering')
        }


        $scope.close = function (item) {
            item.loading = true;
            if($scope.data.onClose) $scope.data.onClose(item.params);
            if(!$scope.data.preventDefault){
                for(var idx in $scope.data.data){
                    if($scope.data.data[idx][uid] == item[uid]){
                        $scope.data.data.splice(idx, 1);
                    }
                }
            }
        }


        $scope.redirect = function (item) {
            var grouppath = getGroupPath(item);
            if($scope.data.onRedirect){
                $scope.data.onRedirect(grouppath, item);
            }
        }


        function getGroupPath(item) {
            return helperService.getParentPath2(item.assetpath);
        }


        $scope.retry = function (item) {
            $scope.data.onRetry(item.params);
        }


        $inChips.loaded = function (wid, item) {
            var chip = getItem(wid, item);
            if(chip) chip.loading = false;
        }


        $inChips.failed = function (wid, item) {
            var chip = getItem(wid, item);
            if(chip) chip.failed = true;
        }


        $inChips.remove = function (wid, item) {
            getItem(wid, item, true);
        }


        function getItem(wid, item, remove) {

            var data = $inChips.getData(wid);
            for(var idx in data.data){
                if(data.data[idx][data.uid] == item[data.uid]){
                    if(remove){
                        data.data.splice(idx, 1);
                    }else{
                        return data.data[idx];
                    }
                }
            }
            return false;

        }

    }

}
