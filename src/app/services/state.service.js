/**
 * Created by intellicar-rinas on 3/5/17.
 */
export class $s{

    constructor () {
        'ngInject'

        let vm = this;

        /*
        * 
        *   Private Methods
        * 
        * */
        
        let instances = {};

        /*
        *
        *   Public Methods
        *
        * */

        vm.initInstance = function (ID) {
            initInstance(ID);
        };

        vm.pushState = function (ID, state) {
            pushState(ID, state);
        };

        vm.on = function(ID, key, callback){
            addEventListener(ID, key, callback);
        };

        vm.callEventListeners = function(ID, key, callback){
            callEventListeners(ID, key, callback);
        };

        /*
        *
        *   Private Methods
        *
        * */


        function initInstance(ID) {
            if(!ID)
                return;

            if(instances[ID])
                return;

            instances[ID] = {
                states : [],
                eventListeners : {
                    'stateChange' : []
                }
            };

            return instances[ID];
        }


        function pushState(ID, state) {
            let instance = getInstance(ID);

            if(instance){
                let tempState = newState(state);
                instance.states.push(tempState);
                callEventListeners(ID, 'stateChange', tempState)
            }
        }


        function getInstance(ID) {
            if(!ID)
                return null;

            if(instances && instances[ID])
                return instances[ID];

            return initInstance(ID);
        }


        function newState(state) {
            return {
                nav: state.nav,
                tab: state.tab,
            }
        }


        function addEventListener(ID, key, method) {
            if(!key || !method)
                return null;

            let instance = getInstance(ID);

            if(!instance)
                return null;

            if(instance.eventListeners && instance.eventListeners[key])
                instance.eventListeners[key].push(method);

        }


        function callEventListeners(ID, key, params) {
            if(!key)
                return null;

            let instance = getInstance(ID);

            if(!instance)
                return null;

            if(instance.eventListeners && instance.eventListeners[key]){
                for(let idx in instance.eventListeners[key]){
                    instance.eventListeners[key][idx](params);
                }
            }
        }

    }

}