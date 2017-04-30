/**
 * Created by Rinas Musthafa on 1/7/2017.
 */

function FlowManager() {

    var vm = this;

    console.log('FLOW MANAGER INCLUDED');

    /*
     * ANGULAR WIDGETS [ Required settings ]
     *   type : 'angular',
     *   tag : 'uniqueTagName'
     *   input : [ array of function ]
     *
     * Javascrip Widget [ Required settings ]
     *   type : 'js'
     *   tag : 'uniqueTagName'
     *   input : [ array of function ]
     *
     *
     *
     *   -> Dont use Controller name as vm in the widget HTML Template, use only $scope. vm will not work anymore
     *      because the parent controller name is referred as also vm, so this will conflict in HTML template.
     *
     * */

    var widgetInitCallbacks = [];

    vm.flow = [];
    vm.JsScope = {};
    vm.scopeSet = {};
    vm.widgetData = {};
    vm.widgetSettings = {};
    vm.flowInitialized = false;
    vm.scopeCount = 0;
    vm.simpleFlow = false;
    vm.defaultMethod = 'processInput';

    vm.getData = function (key) {
        return vm.widgetData[key];
    }

    vm.getDefaultMethod = function () {
        return vm.defaultMethod;
    }

    vm.getSimpleFlow = function () {
        return vm.simpleFlow;
    }

    var widgetElementList = [];

    vm.initWidget = function (tag, callback) {

        if(typeof tag == 'object'){

            $element = tag;
            widgetElementList.push({
                el : tag,
                gotIag : false,
                checking : false,
            })

            for(var idx in widgetElementList){
                if(!widgetElementList[idx].checking){
                    getTagId(widgetElementList[idx]);
                }
            }

            function getTagId(item) {
                item.checking = true;
                setTimeout(function () {
                    if (item.el.context.nextElementSibling) {
                        var tag_id = item.el.context.nextElementSibling.id;
                        var params = { tag_id : tag_id};
                        gotTagId(tag_id, callback, params);
                        item.gotTag = true;
                    }else{
                        getTagId(item);
                    }
                },5)
            }

        }else{
            var params = {tag_id : tag};
            gotTagId(tag, callback, params);
        }

        function gotTagId(tag_id, callback, params) {

            var scopeInter = setInterval(function () {
                if(vm.scopeCount >= Object.keys(vm.widgetData).length){
                    initWidget();
                    clearInterval(scopeInter);
                }
            },20);

            function initWidget() {
                var wid = flowManager.getData(tag_id);
                var widgetData = wid.widget;
                var ctrl = vm.scopeSet[tag_id];

                if(widgetData.canWriteMethod){
                    if(widgetData.methodDef == null) widgetData.methodDef = '';
                    var methodsString = functionWrapper(widgetData.methodDef);
                    ctrl[vm.defaultMethod] = eval(methodsString);
                }

                function functionWrapper(def) {
                    return "vm.processInput = function($tag, $params) { " + def + " } ";
                }

                if(vm.flowInitialized){
                    callback(params);
                }else{
                    var initCallback = {callback : callback, params : params}
                    widgetInitCallbacks.push(initCallback);
                }
            }

        }

    }

    /*
     *  @ this function is to run the flow when ever any of the widgets makes an output
     * */

    vm.runFlow = function(tag, key, params) {
        if (vm.flow[tag]) {
            var listeners = vm.flow[tag];
            for (var jdx in listeners) {
                var inputs = listeners[jdx];
                for (var kdx in inputs) {
                    if (inputs[kdx].from == key) {
                        callInput(jdx, inputs[kdx].to, params);
                    }
                }
            }
        }
    }

    function callInput(tag, key, params) {
        if (vm.scopeSet[tag]) {
            var scope = vm.scopeSet[tag];
            if (scope[vm.defaultMethod]) {
                scope[vm.defaultMethod](key, params);
            } else {
                console.log('[FLOW MANAGER] Method not found | ', vm.defaultMethod ,' in Widget - ', tag);
            }
        } else {
            console.log('[FLOW MANAGER] scope not found', tag);
        }
    }

    /*
     *  @ this is function is to initialize the flow
     *  @ Param is the flow JSON
     * */

    vm.refreshFlow = function (json) {
        vm.initFlow(json);
    }

    vm.initFlow = function(json) {
        this.flow = json;
        vm.flowInitialized = true;
        for(var idx in widgetInitCallbacks){
            widgetInitCallbacks[idx].callback(widgetInitCallbacks[idx].params)
        }
    }

    /*
     * This function is to set the scope of every widget
     * */

    this.setScope = function(widget) {
        var tag = widget.tag;
        var type = widget.type;
        var scopeName = widget.name;

        if (type == null || type == 'angular') {
            var scopeInter = setInterval(function () {
                if (angular.element(document.getElementById(tag)).scope()) {
                    vm.scopeSet[tag] = angular.element(document.getElementById(tag)).scope();
                    clearInterval(scopeInter);
                    vm.scopeCount++;
                }
            }, 200);
        } else {
            if (vm.widgetSettings[scopeName].controller) {
                vm.scopeSet[tag] = new vm.widgetSettings[scopeName].controller(tag);
            } else {
                console.log(tag, '[FLOW MANAGER] scope now found in vm.JsScope Object', scopeName);
            }
            vm.scopeCount++;
        }
    }

    this.widget = function (key, data) {
        vm.widgetSettings[key] = getWidgetSettings(key, data, true);
    }

    this.getWidgetSettings = function () {
        var tempSettings = {};

        for(var idx in vm.widgetSettings){
            tempSettings[idx] = getWidgetSettings(idx, vm.widgetSettings[idx]);
        }

        return tempSettings;
    }

    function getWidgetSettings(name, settings, needScope) {
        var temp = {};
        temp.name = name;

        // cheking for scope and detecting widget type
        if(typeof settings.controller == 'string'){
            temp.type = 'angular';
            temp.controller = settings.controller;
        }else{
            temp.type = 'js';
            if(needScope){
                temp.controller = settings.controller;
            }
        }

        // checking for available view
        if(settings.view){
            temp.view = settings.view;
        }

        // checking for available methods
        if(settings.methods){
            temp.methods = settings.methods;
        }

        // checking is color available
        if(settings.color){
            temp.color = settings.color;
        }else{
            temp.color = '#776c73'
        }


        if(settings.settings){
            temp.settings = settings.settings;
        }

        if(settings.canWriteMethod){
            temp.canWriteMethod = settings.canWriteMethod;
        }

        if(settings.methodDef){
            temp.methodDef = settings.methodDef;
        }

        return temp;

    }

    var tempFlow = {
        mapControls: {
            mapWidget: [{from: 'setName', to: 'input'}],
            flowInterpreter1: [{from: 'setTime', to: 'run'}],
            timerWidget2: [{from: 'setTime', to: 'setTime'}]
        },
        flowInterpreter1: {
            timerWidget: [{from: 'run', to: 'setTime'}]
        }
    }

    // vm.initFlow(tempFlow)

}
var flowManager = new FlowManager();
