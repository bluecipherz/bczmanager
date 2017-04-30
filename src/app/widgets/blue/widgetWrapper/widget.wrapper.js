/**
 * Created by Rinas Musthafa on 4/30/2017.
 */

export class widgetWrapper {

    constructor() {
        'ngInject'

        this.restrict = 'E';
        this.transclude = true;
        this.scope = {data: '='};
        this.templateUrl = 'app/widgets/blue/widgetWrapper/widget.wrapper.html';

    }


    controller($scope, $element) {
        'ngInject'


    }
}