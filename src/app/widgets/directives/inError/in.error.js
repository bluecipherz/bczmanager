/**
 * Created by Rinas Musthafa on 2/17/2017.
 */

export class inError{

    constructor () {
        'ngInject'

        this.restrict = 'E';
        this.scope = {data : '='};
        this.templateUrl = 'app/widgets/directives/inError/in.error.html';

    }

    controller ($inError, $scope) {
        'ngInject'

        var vm = this;

        var popupErrors = [ 400, 403 ]
        // var popupErrors = []

        $scope.errors = {
            toast : [],
            popup : []
        }


        $inError.add = function (error, processed) {

            if(processed){
                if(error.popup){
                    $scope.errors.popup.push(error)
                }else{
                    $scope.errors.toast.push(error)
                }
            }else{
                var popup = false;
                for(var idx in popupErrors){
                    if(popupErrors[idx] == error.status){
                        popup = true;
                    }
                }
                if(popup){
                    $scope.errors.popup.push( processError(error) )
                }else{
                    $scope.errors.toast.push( processError(error) )
                }
            }
        }


        function processError(error){

            var err = { error : error, id : $inError.errorCounter() };

            if(error.status == 403){

                err.heading = 'Failed';
                err.body = "No permission to perform this action";

            }else if(error.status == 400){

                err.heading = 'Failed';
                err.body = "Cannot perform this action";

            }else{

                err.heading = 'Error';
                err.body = error.statusText;

            }

            return err;

        }


        $scope.close = function (item, popup) {
            if(popup){
                for(var idx in $scope.errors.popup){
                    if($scope.errors.popup[idx].id == item.id){
                        $scope.errors.popup.splice(idx, 1);
                    }
                }
            }
        }



    }


}
