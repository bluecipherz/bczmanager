/**
 * Created by Rinas Musthafa on 2/9/2017.
 */

export class setDom {

    constructor () {
        'ngInject';

        this.restrict = 'A';
        this.scope = {
            'widgetData' : '='
        };
    }

    link(scope, elm, attr){
        var widget = scope.widgetData;
        flowManager.widgetData[widget.tag] = { DOM:elm, widget:widget };
        flowManager.setScope(widget);
    }

}
