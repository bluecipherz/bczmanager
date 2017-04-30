/**
 * Created by Rinas Musthafa on 4/30/2017.
 */
export class logWidget{

    constructor () {
        'ngInject';

        this.restrict = 'E';
        this.scope = {data: '=', event: '='};
        this.templateUrl = 'app/widgets/blue/logWidget/log.widget.html';

    }

    controller($scope, $element){
        'ngInject'

        if(!($scope.data && $scope.data.wid)){
            console.error("logWidget: Not Initialized, Missing Widget ID");
            return;
        }

        console.info("logWidget : Initialized, Widget ID - ", $scope.data.wid);



    }

}