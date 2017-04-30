
class widgetConnectorController{

    constructor (tag) {
        var vm = this

        vm.states = [];
        vm.stateId = -1;

        flowManager.initWidget(tag, function (tag) {
            init(tag)
        });


        vm.processInput = function (tag, data) {
            if(tag == 'setData'){

                vm.pushState(data);
                flowManager.runFlow(vm.tag, 'setData', processData(data));

            }else if(tag == 'navigateBack'){

                var toState = vm.getState(-1);
                if(toState != null){
                    flowManager.runFlow(vm.tag, 'setData', processData(toState));
                }

            }else if(tag == 'navigateForward'){

                var toState = vm.getState(1);
                if(toState != null){
                    flowManager.runFlow(vm.tag, 'setData', processData(toState));
                }

            }else if(tag == 'setState'){

                vm.pushState(data);
                flowManager.runFlow(vm.tag, 'pushState', processData(data));

            }else if(tag == 'updateState'){

                vm.updateState(data);
                flowManager.runFlow(vm.tag, 'pushState', processData(data));

            }
        }


        function processData(data){
            if(!data.navigation) data.navigation = {};

            data.navigation.isBackward = false;
            data.navigation.isForward = false;

            if(vm.stateId < vm.states.length - 1) data.navigation.isForward = true;
            if(vm.stateId > 0) data.navigation.isBackward = true;

            return data;
        }


        function init(tag) {
            vm.tag = tag.tag_id;
        }


        vm.updateState = function (state) {
            vm.states[vm.stateId] = state;
        }


        vm.pushState = function (state) {

            var tempState = vm.states[vm.stateId];
            if(tempState){
                if(tempState.fetch) delete tempState.fetch;
                if(!state.group && tempState.group) state.group = tempState.group;
                if(!state.tab && tempState.tab) state.tab = tempState.tab;
                // if(!state.item && tempState.item) state.item = tempState.item;
            }

            vm.stateId++;
            vm.states.splice(vm.stateId);
            vm.states.push(state);
        }


        vm.getState = function (diff) {
            var tempindex = vm.stateId + diff;
            if(tempindex >= 0 && tempindex < vm.states.length){
                vm.stateId = tempindex;
                return vm.states[vm.stateId];
            }else{
                return null;
            }
        }

    }
}


var widgetConnector = {
    controller: widgetConnectorController,
    methods:[
        {id:0, name:'setData',output:true, input:true, params : ['asset']},
        {id:1, name:'setState',output:true, input:true, params : ['asset']},
        {id:2, name:'updateState',output:true, input:true, params : ['asset']},
        {id:3, name:'navigateBack',output:true, input:true, params : ['asset']},
        {id:4, name:'navigateForward',output:true, input:true, params : ['asset']},
        {id:5, name:'pushState',output:true, params : ['asset']},
    ],
    color:'#cc2222',
    settings : {},
}


export {widgetConnector};
