/**
 * Created by Rinas Musthafa on 3/6/2017.
 */

export class inPopup {

    constructor() {
        'ngInject'

        this.restrict = 'E';
        this.scope = {data: '='};
        this.templateUrl = 'app/widgets/directives/inPopup/in.popup.html';

    }


    controller($scope, $element) {
        'ngInject'



    }
}