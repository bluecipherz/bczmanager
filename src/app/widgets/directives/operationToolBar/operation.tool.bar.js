/**
 * Created by Rinas Musthafa on 2/21/2017.
 */

export class operationToolBar {

    constructor () {
        'ngInject';

        this.restrict = 'E';
        this.scope = {data: '='};
        this.templateUrl = 'app/widgets/directives/operationToolBar/operation.tool.bar.html';

    }

    controller($scope, $operationToolBar, helperService, $inError, tabDataService, $timeout) {
        'ngInject'

        $scope.selectedTab = null;
        $operationToolBar.setWidget($scope.data.wid, $scope);

        $operationToolBar.status = true;

        $scope.close = function () {
            $scope.selectedTab = null;
        }

        $scope.selectTab = function (tab) {
            if(tab.disable) return;

            $($('#otb_container_'+tab.id+' input')[0]).focus();

            if($scope.selectedTab && $scope.selectedTab.id == tab.id){
                $scope.selectedTab = null;
            }else{
                $scope.selectedTab = tab;
            }
        }

        $scope.click = function (input, tab) {
            if(!input.disable){
                var params = {
                    tab     : tab,
                    state   : tabDataService.getState(),
                    success : onSuccess,
                    failure : onFailure,
                    input   : input
                }
                input.click(params)
            }
        }


        $scope.keydown = function ($event, type, input, tab) {
            $timeout(function () {
                if(type == 'input'){
                    if(input.linkTo){
                        for(var idx in tab.form){
                            if(input.linkTo == tab.form[idx].id){
                                if(tab.form[idx].validate){
                                    tab.form[idx].validate({
                                        event : $event,
                                        input : input,
                                        tab   : tab,
                                        trigger : tab.form[idx],
                                        state : tabDataService.getState()
                                    })
                                }
                            }
                        }
                    }
                }
            })
        }


        function onSuccess(resp, params) {
            if(params.input.success) params.input.success(resp, params);
            $scope.close();
            clearInputs(params.tab.form);
        }

        function onFailure(resp, params) {
            if(params.input && params.input.failure) params.input.failure(resp, params);
            handleError(resp, params);
        }


        function clearInputs(form) {
            for(var idx in form){
                form[idx].model = '';
                form[idx].status = null;
            }
        }

        /*
        *
        *  ERROR HANDLING
        *
        * */


        function handleError(resp, params) {

            var error;

            /* user duplicate Error */
            if(helperService.returnValue(resp, 'resp.data.err.errs.createassetAssetUpdate[1].code') == 'ER_DUP_ENTRY'){
                error = {
                    heading : 'Duplicate User',
                    body : 'The username is already registered, please try another.',
                    popup : true,
                }
                $inError.add(error, true);
                clearInputs(params.tab.form);
            }else

            /* Delete asset error*/
            if(resp){
                error = {
                    heading : 'Error',
                    body : helperService.returnValue(resp, 'resp.data.msg'),
                    popup : true,
                }
                $inError.add(error, true);
                $scope.close();
                tabDataService.callListeners('fetchList', tabDataService.getState());
            }
        }

    }

}
