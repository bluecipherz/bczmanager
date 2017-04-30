/**
 * Created by Rinas Musthafa on 2/2/2017.
 */
export class gridService {
    constructor ($log) {
        'ngInject';

        $log.log("gridService");
        var vm = this;
        var getDefaultWidgets = true;
        var resetLocalStorage = false;

        vm.isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
        vm.isFirefox = typeof InstallTrigger !== 'undefined';
        vm.isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);
        vm.isIE = /*@cc_on!@*/false || !!document.documentMode;
        vm.isEdge = !vm.isIE && !!window.StyleMedia;
        vm.isChrome = !!window.chrome && !!window.chrome.webstore;
        vm.isBlink = (vm.isChrome || vm.isOpera) && !!window.CSS;

        vm.paramTypes = {
            INT : 'INT',
            STRING : 'STRING',
            BOOLEAN : 'BOOLEAN',
            FUNCTION : 'FUNCTION',
            TIMESTAMP : 'TIMESTAMP',
        }


        if(getDefaultWidgets){

            //widgetConnector4
            //ConfigWidget3
            //NavTree1
            //Search2

            var t_flowJSON = {
                timeline3 : {
                    '3dPlayer2' : [
                        {id:0, from:'pushFrame', to:'setFrame'}
                    ]
                },
            };

            t_flowJSON = JSON.stringify(t_flowJSON);

            var t_layoutOrder = '[{"position":73877},{"position":36051},{"position":75438}]';
            // var t_widgetData = '[{"name":"videoPlayer","type":"js","view":"app/widgets/common/videoPlayer/video.player.html","methods":[],"color":"#cc2222","settings":{"vh":20,"w":9},"tag":"videoPlayer1","id":95431,"rectSettings":{"y":44,"x":61},"rect":{"_groups":[[{}]],"_parents":[{}]}},{"name":"3dPlayer","type":"js","view":"app/widgets/common/3dPlayer/3d.player.html","methods":[],"color":"#cc2222","settings":{"vh":20,"w":9},"tag":"3dPlayer2","id":36823,"rectSettings":{"y":106,"x":124},"rect":{"_groups":[[{}]],"_parents":[{}]}},{"name":"timeline","type":"js","view":"app/widgets/common/timeline/timeline.html","methods":[],"color":"#cc2222","settings":{"vh":4,"w":18},"tag":"timeline3","id":76780,"rectSettings":{"y":172,"x":196},"rect":{"_groups":[[{}]],"_parents":[{}]}},{"name":"configWidget","type":"js","view":"app/widgets/common/3dPlayer/config.widget.html","methods":[],"color":"#cc2222","settings":{"vh":24,"w":6},"tag":"configWidget4","id":49536,"rectSettings":{"y":246,"x":306}}]'
            var t_widgetData = '';

            localStorage.setItem('flowJSON', t_flowJSON);
            localStorage.setItem('layoutOrder', t_layoutOrder);
            localStorage.setItem('widgetData', t_widgetData);

        }

        var widgetSet = flowManager.getWidgetSettings();

        var widgetData = []

        if(resetLocalStorage) localStorage.setItem('widgetData', JSON.stringify(widgetData));
        if(localStorage.getItem('widgetData')){
            widgetData = JSON.parse(localStorage.getItem('widgetData'));
        }

        function generateWidgets(widgetJSON) {
            for(var idx in widgetJSON){
                var widData = widgetSet[widgetJSON[idx].name];
                if(!widgetJSON[idx].methods) widgetJSON[idx].methods = [];
                for(var jdx in widData){
                    if(jdx != 'methods'){
                        widgetJSON[idx][jdx] = widData[jdx];
                    }else{
                        for(var kdx in widData[jdx]){
                            var found = false;
                            for(var qdx in widgetJSON[idx][jdx]){
                                if(widgetJSON[idx][jdx][qdx].name == widData[jdx][kdx].name){
                                    found = true;
                                }
                            }
                            if(!found) widgetJSON[idx][jdx].push(widData[jdx][kdx])
                        }
                    }
                }
            }
            return widgetJSON;
        }

        vm.getWidgets = function () {
            return generateWidgets(widgetData);
        }
        vm.getWidgetData = function () {
            var indexByTag = {};
            for(var idx in widgetData){
                indexByTag[widgetData[idx].tag] = idx;
            }
            return {
                widgets : generateWidgets(widgetData),
                widgetSet : widgetSet,
                widgetData : widgetData,
                indexByTag: indexByTag
            };
        }

        vm.updateWidgetData = function (data, callback) {
            var found = false;
            for(var idx in widgetData){
                if(widgetData[idx].tag == data.tag){
                    widgetData[idx] = data;
                    found = true;
                    break;
                }
            }
            if(!found){
                widgetData.push(data);
            }
            vm.pushToAPI('widgetData', widgetData, function () {
                if(callback) callback(vm.getWidgetData());
            })
        }

        vm.pushToAPI = function (tag, data, callback) {
            localStorage.setItem(tag, JSON.stringify(angular.copy(data)));
            if(callback) callback();
        }

        vm.getLayoutOrder = function (callback) {
            var wid = vm.getWidgets();
            var tempLay = [];
            if(localStorage.getItem('layoutOrder') && !resetLocalStorage){
                tempLay = JSON.parse(localStorage.getItem('layoutOrder'));
            }else{
                for(var idx = 0; idx < wid.length; idx++){
                    tempLay.push({position: idx})
                }
            }
            if(callback) callback(tempLay);
        }

        vm.getFlow = function () {
            var flow = {}
            if(resetLocalStorage) localStorage.setItem('flowJSON', '{}')
            if(localStorage.getItem('flowJSON')){
                flow = JSON.parse(localStorage.getItem('flowJSON'));
            }
            return flow;
        }

        flowManager.initFlow(vm.getFlow());


    }

    getData() {
        return this.data;
    }
}
