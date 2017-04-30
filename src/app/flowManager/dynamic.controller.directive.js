/**
 * Created by Rinas Musthafa on 2/9/2017.
 */
export class dynamicController {

    constructor () {
        'ngInject';

        this.restrict = 'A';
        this.terminal = true;
        this.priority = 100000;
    }

    controller($scope, $compile, $parse){
        'ngInject';

        $scope.compile = $compile;
        $scope.parse = $parse;
    }

    link(scope, elem) {
        var name = scope.parse(elem.attr('dynamic-controller'))(scope);
        elem.removeAttr('dynamic-controller');
        elem.attr('ng-controller', name);
        scope.compile(elem)(scope);
    }

}