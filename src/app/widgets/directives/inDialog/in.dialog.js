/**
 *  Created by Rinas Musthafa on 2/11/2017.
 *
 *    NOTE : You have to initialize it once in the index.html file.
 *
 *  Params
 *
 *      controller = [ string ] ngController name
 *      templateUrl = [ string ] url of the HTML template
 *      clickOutsideToClose = [ boolean ] enable/disable close action when user click outside of the dialog / default = true
 *      escapeToClose = [ boolean ] enable/disable close acton when user press escape button / default = true
 *      height = [ int ] dialog height
 *      width = [ int ] dialog width
 *
 */
export class inDialog {
    constructor(){
        'ngInject'

        this.restrict = 'E';
        this.scope = {};
        this.templateUrl = 'app/widgets/directives/inDialog/in.dialog.html';

    }

    controller($inDialog, $scope){
        'ngInject'

        $scope.active = false;
        $scope.clickOutsideToClose = true;
        $scope.escapeToClose = true;

        var hide = function (apply) {
            $scope.active = false;
            if(apply){
                $scope.$apply();
            }
        }

        var show = function (data) {
            if(data && data.controller != null && data.templateUrl != null){

                $scope.active = true;
                $scope.style = '';

                $scope.data = angular.copy(data);

                if($scope.data.height){
                    $scope.style += 'height: ' + $scope.data.height + 'px; ';
                    $scope.style += 'top: 50%; ';
                    $scope.style += 'margin-top: ' + (-1 * $scope.data.height / 2) + 'px; ';
                }
                if($scope.data.width){
                    $scope.style += 'width: ' + $scope.data.width + 'px; ';
                    $scope.style += 'left: 50%; ';
                    $scope.style += 'margin-left: ' + (-1 * $scope.data.width / 2) + 'px; ';
                }

                if($scope.data.clickOutsideToClose != null){
                    $scope.clickOutsideToClose = $scope.data.clickOutsideToClose;
                }
                if($scope.data.escapeToClose != null){
                    $scope.escapeToClose = $scope.data.escapeToClose;
                }

            }
        }


        $scope.backDropClose = function () {
            if($scope.data.clickOutsideToClose){
                hide();
            }
        }

        $(window).keydown(function ($event) {
            if($event.keyCode == 27){
                if($scope.escapeToClose){
                    hide(true);
                }
            }
        })

        $inDialog.hide = hide;

        $inDialog.show = show;

    }
}
