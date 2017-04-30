export class GridController {

    constructor(gridService, $scope, loginService) {
        'ngInject';

        console.log('Grid Controller')


        var vm = this;

        vm.widgets = [];
        vm.gridMode = 0; // 0 = normal Mode , 1 = edit Mode
        vm.layoutOrder = null;
        vm.widgetData = gridService.getWidgetData();

        vm.switchMode = function(mode) {
            vm.gridMode = mode;
            if(mode == 0){
                for(var idx in vm.widgets){
                    vm.widgets[idx].draggie.disable();
                }
            }else if(mode == 1){
                for(var idx in vm.widgets){
                    vm.widgets[idx].draggie.enable();
                }
            }
        };


        var switchModeInter = setInterval(function () {
            if(vm.widgets[0] && vm.widgets[0].draggie){
                clearInterval(switchModeInter);
                vm.switchMode(0);
            }
        },100)

        var oi_timeout = null;

        function orderItems() {
            var itemElems = $($grid.packery('getItemElements'));
            vm.layoutOrder = [];
            $(itemElems).each(function(i, itemElem) {
                var id = parseInt($(itemElem).attr('widget-id'));
                var tag = $(itemElem).attr('widget-tag');
                vm.layoutOrder[i] = { position : id };
            });

            if(oi_timeout) clearTimeout(oi_timeout);
            oi_timeout = setTimeout(function () {
                localStorage.setItem('layoutOrder', JSON.stringify(vm.layoutOrder))
            },1000)

        };


        function getWidgets() {
            var callback = function(layoutOrder) {
                vm.layoutOrder = layoutOrder;
                var widList = [];
                for(var idx in vm.widgetData.widgets){
                    widList.push(vm.widgetData.widgets[idx].tag);
                }
                for(var idx in vm.layoutOrder){
                    for(var jdx in vm.widgetData.widgets){
                        if(vm.widgetData.widgets[jdx].id == vm.layoutOrder[idx].position){
                            vm.widgets.push(vm.widgetData.widgets[jdx]);
                            widList.splice(widList.indexOf(vm.widgetData.widgets[jdx].tag),1);
                        }
                    }
                }
                for(var idx in widList){
                    var tempObj = angular.copy(vm.widgetData.widgets[vm.widgetData.indexByTag[widList[idx]]]);
                    vm.widgets.push(tempObj);
                }
                startPackery();
            }
            gridService.getLayoutOrder(callback);
        }

        getWidgets();


        function setCSSClass(cols, u, v) {
            var styleString = '';
            for(var idx=1; idx <= cols; idx++){
                styleString +=  '.gi-w-'+idx+'{ width: '+((u * idx)-0)+'px } ' +
                                '.gi-vh-'+idx+'{ height: '+(v * idx)+'px } ' +
                                '.gi-h-'+idx+'{ height: '+(u * idx)+'px } '
            }
            var style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML =  styleString;
            document.getElementsByTagName('head')[0].appendChild(style);
        }


        function startPackery() {
            var packeryInter = setInterval(function () {
                if($('.grid > div').length >= vm.widgets.length){
                    initPackery();
                    clearInterval(packeryInter);
                }
            },200)
        }

        var $grid;

        function initPackery() {
            var cols = 24;
            vm.columnWidth = parseInt(($(window).width()-0) / cols);
            vm.columnHeight = parseInt($(window).height() / cols);
            setCSSClass(cols, vm.columnWidth, vm.columnHeight);

            $grid = $('.grid').packery({
                itemSelector: '.grid-item',
                columnWidth: vm.columnWidth
            });
            var counter = 0;

            $grid.find('.grid-item').each( function( i, gridItem ) {
                var draggie = new Draggabilly( gridItem );
                for(var idx = 0; idx < vm.widgets.length; idx++){
                    var wid = parseInt($(gridItem).attr('widget-id'))
                    if(vm.widgets[idx].id == wid){
                        counter++;
                        vm.widgets[idx].draggie = draggie;
                        $grid.packery( 'bindDraggabillyEvents', vm.widgets[idx].draggie );
                    }
                }
            });

            $grid.packery( 'on', 'layoutComplete', orderItems );
            $grid.packery( 'on', 'dragItemPositioned', orderItems );

        }

    }
}


