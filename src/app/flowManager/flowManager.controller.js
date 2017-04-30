export class FlowController {

    constructor(gridService, $scope) {
        'ngInject';

        console.log('flow controller');

        var vm = this;
        var rectWidth = 120;
        var rectHeight = 35;
        var defs;
        var filter;
        var feMerge;
        var wData = gridService.getWidgetData();
        var widgets = wData.widgets;
        var widgetData = wData.widgetData;
        var indexByTag = wData.indexByTag;
        var tempX;
        var tempY;
        var dragged = false;
        var disableDrag = false;
        vm.defaultMethod = flowManager.getDefaultMethod();

        vm.midH = 2000;
        vm.midW = 2000;
        vm.flowJSON = gridService.getFlow();
        vm.selectedTab = 0;
        vm.widgetSet = wData.widgetSet;
        vm.mcPopupTabIndex = 0;
        vm.flowLines = {};


        vm.vis = d3.select('#fm-midpan')
            .attr('width', vm.midW)
            .attr('height', vm.midH)
            .attr("viewBox", "0 0 " + vm.midW + " " + vm.midH)
            .on("contextmenu", function (d) {
                d3.event.preventDefault();
            })
            .on("mouseup", svgMouseup)

        function svgMouseup() {
            deselectAll();
        }

        function deselectAll() {
            vm.vis.selectAll('g').attr('class', 'flow-rect-main');
            vm.selectedWidget = null;
            vm.selectedFunction = null;
            disableDrag = false;
            if (!$scope.$$phase) {
                $scope.$apply();
            }
        }

        function dragEnd(d, i) {
            if (dragged && !disableDrag) {
                // Saving widgetData into localstorage
                var tagName = d3.select(this).attr("tag-name");
                var widget = getMyWidget(tagName);
                widget.rectSettings.x = tempX;
                widget.rectSettings.y = tempY;
                var data = JSON.stringify(widgetData);
                localStorage.setItem('widgetData', data);
                refreshLines();
                dragged = false;
            }
        }

        function dragging(d, i) {
            if (!disableDrag) {
                tempX = d3.event.x;
                tempY = d3.event.y;
                d3.select(this).attr("transform", function (d, i) {
                    return "translate(" + [d3.event.x, d3.event.y] + ")"
                })
                var tagName = d3.select(this).attr("tag-name");
                for (var idx in vm.flowLines) {
                    if (vm.flowLines[idx].from == tagName || vm.flowLines[idx].to == tagName) {
                        drawLine(vm.flowLines[idx]);
                    }
                }
                dragged = true;
            }
        }

        vm.removeFlow = function (from, to, id) {
            if (vm.flowJSON[from][to]) {
                for (var idx in vm.flowJSON[from][to]) {
                    if (vm.flowJSON[from][to][idx].id == id) {
                        vm.flowJSON[from][to].splice(idx);
                        updateFlow();
                    }
                }
            }
        }

        vm.selectFunction = function (output) {

            disableDrag = true;
            if (output.params == "method") {
                output.params = vm.selectedWidget.settings.runParams;
            }

            vm.selectedFunction = angular.copy(output);
            vm.tempFuncSelObject = {};

            /* Checking for the connectable function */
            for (var idx in widgets) {
                var widget = widgetData[idx];
                if (widget.id != vm.selectedWidget.id) {
                    var tempWid = {id: widget.id, name: widget.name, tag: widget.tag, connectable: false, inputs: []}
                    for (var jdx in widget.methods) {
                        var input = angular.copy(widget.methods[jdx]);
                        if (input.input) {
                            var tInpT = angular.copy(input.params);
                            var tSelT = angular.copy(vm.selectedFunction.params);
                            if (tSelT && tInpT) {
                                var tCount = tInpT.length;
                                var tCounter = 0;
                                for (var tJdx in tInpT) {
                                    for (var tIdx in tSelT) {
                                        if (tSelT[tIdx] == tInpT[tJdx]) {
                                            tCounter++;
                                        }
                                    }
                                }
                                if (tCounter >= tCount) {
                                    var found = isMethodFlowDefined(vm.selectedWidget.tag, widget.tag, vm.selectedFunction.name, input.name);
                                    if (!found) {
                                        tempWid.connectable = true;
                                        // console.log(tempWid.tag)
                                        tempWid.inputs.push(input);
                                    }
                                }
                            }
                        }
                    }
                    vm.tempFuncSelObject[tempWid.tag] = tempWid;
                    vm.methodsToShow = tempWid.inputs;
                }
            }
            for (var idx in vm.tempFuncSelObject) {
                if (!vm.tempFuncSelObject[idx].connectable) {
                    var tRect = getD3Rect(vm.tempFuncSelObject[idx].tag);
                    var tempClass = tRect.attr('class');
                    tRect.attr('class', tempClass + ' disabled')
                }
            }

        }

        vm.tempInput = {};
        vm.tempSelectedInput = {};

        vm.removeInput = function (method) {
            for (var idx in vm.selectedWidget.methods) {
                if (vm.selectedWidget.methods[idx].id == method.id) {
                    vm.selectedWidget.methods.splice(idx, 1);
                    if (vm.tempSelectedInput.id == method.id) {
                        vm.tempSelectedInput = {};
                    }
                }
            }
        }

        vm.removeParam = function (param) {
            vm.tempSelectedInput.params.splice(vm.tempSelectedInput.params.indexOf(param), 1);
        }

        vm.addParam = function (event) {
            if (event == null || event.keyCode == 32) {
                if (event != null) event.preventDefault();
                if (vm.tempParam != null) vm.tempParam.trim();
                if (vm.tempParam != null && vm.tempParam != '') {
                    var found = false;
                    for (var idx in vm.tempSelectedInput.params) {
                        if (vm.tempSelectedInput.params[idx] == vm.tempParam) {
                            found = true;
                        }
                    }

                    if (!found) {
                        if (!vm.tempSelectedInput.params) vm.tempSelectedInput.params = [];
                        vm.tempSelectedInput.params.push(vm.tempParam)
                        vm.tempParam = '';
                    }

                }
            }
        }

        vm.focusInput = function () {
            $('#paramInput').focus();
        }

        vm.addInput = function () {
            var method = angular.copy(vm.tempInput);
            vm.tempInput = {};
            method.id = vm.selectedWidget.methods.length;
            vm.selectedWidget.methods.push(method);
        }

        $scope.aceOption = {
            mode: 'javascript',
            onLoad: function (editor) {
                // defaults
                // editor.setTheme("ace/theme/monokai");
                // options
                editor.setOptions({
                    showGutter: true,
                    showPrintMargin: false,
                });


            }
        };

        vm.createMethod = function () {
            $('#fm-method-create').show();
        }

        vm.saveMethodCreatePopup = function () {
            localStorage.setItem('widgetData', JSON.stringify(widgetData));
            $('#fm-method-create').hide();
            //MAKE API CALL TO SAVE DATA
        }

        vm.closeMethodCreatePopup = function () {
            $('#fm-method-create').hide();
        }

        vm.editMethod = function (method) {
            console.log(method);
        }

        vm.cancelAssigning = function () {
            $('#fm-method-popCont').hide();
        }

        vm.assignFlow = function (method) {
            $('#fm-method-popCont').hide();
            vm.tempFlowObject = {};
            vm.tempFlowObject.from = angular.copy(vm.selectedWidget);
            vm.tempFlowObject.to = angular.copy(vm.tempSelectedWidget);
            vm.tempFlowObject.fromMethod = angular.copy(vm.selectedFunction);
            vm.tempFlowObject.toMethod = method;
            vm.selectedFunction = null;
            vm.tempSelectedWidget = null;
            vm.selectedWidget = null;
            genFlow(vm.tempFlowObject);
            deselectAll();
        }

        function genFlow(data) {
            vm.flowJSON = gridService.getFlow();
            console.log(vm.flowJSON);
            if (!vm.flowJSON){
              vm.flowJSON = {};
              console.log('im here')
            }
            if (!(data.from.tag in vm.flowJSON)) vm.flowJSON[data.from.tag] = {};
            if (!(vm.flowJSON[data.from.tag][data.to.tag])) {
                vm.flowJSON[data.from.tag][data.to.tag] = [];
            }
            var flowFound = isMethodFlowDefined(data.from.tag, data.to.tag, data.fromMethod.name, data.toMethod.name)
            if (!flowFound) {
                var index = vm.flowJSON[data.from.tag][data.to.tag].length;
                vm.flowJSON[data.from.tag][data.to.tag].push({
                    id: index,
                    from: data.fromMethod.name,
                    to: data.toMethod.name
                });
                updateFlow();
            } else {
                console.log('[FLOW MANAGER] Multiple instance of same flow is not allowed');
            }
        }

        function updateFlow() {
            localStorage.setItem('flowJSON', JSON.stringify(vm.flowJSON));
            refreshLines();
            flowManager.refreshFlow(gridService.getFlow());
        }

        function isMethodFlowDefined(from, to, fm, tm) {
            var found = false;
            if (!vm.flowJSON) return false;
            if (!vm.flowJSON[from]) return false;
            if (!vm.flowJSON[from][to]) return false;
            for (var idx in vm.flowJSON[from][to]) {
                var tempObj = vm.flowJSON[from][to][idx];
                if (tempObj.from == fm && tempObj.to == tm) {
                    found = true;
                }
            }
            return found;
        }

        function dragStart(d, i) {
            if (!vm.selectedFunction) {
                var tagName = d3.select(this).attr("tag-name");
                vm.selectedWidget = widgets[indexByTag[tagName]];
                vm.vis.selectAll('g').attr('class', 'flow-rect-main')
                d3.select(this).attr("class", 'flow-rect-main active');
                $scope.$apply();
            } else {
                var tagName = d3.select(this).attr("tag-name");
                vm.tempSelectedWidget = getMyWidget(tagName);

                var connectable = false;
                for (var idx in vm.tempFuncSelObject) {
                    if (vm.tempFuncSelObject[idx].connectable == true && vm.tempFuncSelObject[idx].tag == vm.tempSelectedWidget.tag) {
                        connectable = true;
                    }
                }
                if (connectable) {
                    $scope.$apply();
                    showMethodPopup(d3.event);
                }
            }
        }

        function showMethodPopup(e) {
            var left = e.pageX;
            var top = e.pageY;
            var bottom = 'auto';
            var right = 'auto';
            if (left > ($(window).width() / 2)) {
                right = $(window).width() - left;
                left = 'auto';
            }
            if (top > ($(window).height() / 2)) {
                bottom = $(window).height() - top;
                top = 'auto';
            }
            $('#fm-method-pop').css({left: left, top: top, bottom: bottom, right: right});
            $('#fm-method-popCont').show();
        }

        function getD3Rect(idx) {
            return d3.select(document.getElementById('widrect-' + idx));
        }

        function getMyWidget(tagName) {
            return widgetData[indexByTag[tagName]];
        }

        function getMyName(name) {
            return name;
        }

        function draw() {
            d3.selectAll("#fm-midpan > *").remove();

            defs = vm.vis.append("defs");
            filter = defs.append("filter")
                .attr("id", "drop-shadow")
                .attr("height", "150%")
            filter.append("feGaussianBlur")
                .attr("in", "SourceAlpha")
                .attr("stdDeviation", 2)
                .attr("result", "offsetblur");
            filter.append("feComponentTransfer")
                .append("feFuncA")
                .attr('type', 'linear')
                .attr('slope', '0.3')
            filter.append("feOffset")
                .attr("in", "blur")
                .attr("dx", 1)
                .attr("dy", 1)
                .attr("result", "offsetBlur")

            feMerge = filter.append("feMerge");
            feMerge.append("feMergeNode")
                .attr("in", "offsetBlur")
            feMerge.append("feMergeNode")
                .attr("in", "SourceGraphic");

            var rectDrag = d3.drag()
                .subject(function () {
                    var t = d3.select(this);
                    var tr = getTranslation(t.attr("transform"));
                    return {
                        x: t.attr("x") + tr[0],
                        y: t.attr("y") + tr[1]
                    };
                })
                .on("drag", dragging)
                .on("end", dragEnd)


            for (var idx in widgets) {


                if (!widgetData[idx].rectSettings || !widgetData[idx].rectSettings.x) {
                    if (!widgetData[idx].rectSettings) widgetData[idx].rectSettings = {};
                    widgetData[idx].rectSettings.x = 0;
                    widgetData[idx].rectSettings.y = 0;
                }

                widgets[idx].rect = vm.vis.append("g")
                    .attr("transform", "translate(" + widgetData[idx].rectSettings.x + "," + widgetData[idx].rectSettings.y + ")")
                    .attr("tag-name", widgets[idx].tag)
                    .attr('class', 'flow-rect-main')
                    .attr('id', 'widrect-' + widgets[idx].tag)
                    .on("mousedown", dragStart);

                if(gridService.isChrome)
                    widgets[idx].rect.style("filter", "url(#drop-shadow)")


                widgets[idx].rect.append("rect")
                    .attr("width", rectHeight)
                    .attr("height", rectHeight)
                    .attr('fill', widgets[idx].color)
                    .attr('font-size', '70%')
                    .attr('font-family', 'gotham')
                    .attr('class', 'flow-rect-dragger')
                widgets[idx].rect.append("rect")
                    .attr("width", rectWidth)
                    .attr("height", rectHeight)
                    .attr('fill', '#fff')
                    .attr('x', rectHeight)
                    .attr('font-size', '70%')
                    .attr('font-family', 'gotham')
                widgets[idx].rect
                    .append("text")
                    .attr('font-family', 'gotham')
                    .attr('font-size', '90%')
                    .attr('fill', '#555')
                    .attr('line-height', rectHeight)
                    .attr('x', rectHeight + 10)
                    .attr('y', 22)
                    .attr('z-index', 110)
                    .text(getMyName(widgetData[idx].tag))
                widgets[idx].rect.append("rect")
                    .attr("width", 10)
                    .attr("height", rectHeight)
                    .attr("x", rectWidth + rectHeight)
                    .attr('fill', '#999')
                    .attr('font-size', '70%')
                    .attr('font-family', 'gotham')
                    .attr('class', 'flow-rect-dragger')
                widgets[idx].rect.append("circle")
                    .attr("r", 6)
                    .attr('stroke-width', 1)
                    .attr('stroke', '#666')
                    .attr("cx", rectWidth + rectHeight + 10)
                    .attr('cy', (rectHeight / 2))
                    .attr('fill', '#ddd')
                widgets[idx].rect.append("circle")
                    .attr("r", 6)
                    .attr('stroke-width', 1)
                    .attr('stroke', '#666')
                    .attr('class', 'fm-node-first-circle')
                    .attr("cx", 0)
                    .attr('cy', (rectHeight / 2))
                    .attr('fill', '#ddd')
                widgets[idx].rect.call(rectDrag);

            }
            refreshLines();

        }

        function refreshLines() {
            var currFlows = [];
            for (var idx in vm.flowLines) {
                vm.flowLines[idx].line.remove();
                delete vm.flowLines[idx];
            }
            for (var fromTag in vm.flowJSON) {
                if(widgets[(indexByTag[fromTag])]){
                    var fromRect = widgets[(indexByTag[fromTag])].rect;
                    for (var toTag in vm.flowJSON[fromTag]) {
                        if (vm.flowJSON[fromTag][toTag].length) {
                            var toRect = widgets[(indexByTag[toTag])].rect;
                            var fromCoords = getTranslation(fromRect.attr("transform"));
                            var toCoords = getTranslation(toRect.attr("transform"));
                            var tempFLO = {
                                fromCoords: fromCoords,
                                toCoords: toCoords,
                                from: fromTag,
                                to: toTag
                            };
                            drawLine(tempFLO);
                            if (!((fromTag + toTag) in vm.flowLines)) {
                                vm.flowLines[fromTag + toTag] = tempFLO;
                            }
                            currFlows.push(fromTag + toTag);
                        }
                    }
                }
            }
            d3.selectAll("#fm-midpan > *").sort(function (a, b) { // select the parent and sort the path's
                return 1;
            })
        }

        function getD(fromCoords, toCoords) {
            fromCoords[1] += 17;
            fromCoords[0] += 165;
            toCoords[1] += 17;
            return [[fromCoords[0], fromCoords[1]],
                [(fromCoords[0] + 5), fromCoords[1]],
                [(fromCoords[0] + 25), fromCoords[1]],
                [(toCoords[0] - 25), toCoords[1]],
                [(toCoords[0] - 5), toCoords[1]],
                [toCoords[0], toCoords[1]]];
        }

        var valueline = d3.line()
            .curve(d3.curveBasis)
            .x(function (d) {
                return d[0];
            })
            .y(function (d) {
                return d[1];
            });

        function drawLine(data) {
            var fromRect = widgets[(indexByTag[data.from])].rect;
            var toRect = widgets[(indexByTag[data.to])].rect;
            var fromCoords = getTranslation(fromRect.attr("transform"));
            var toCoords = getTranslation(toRect.attr("transform"));
            var d = getD(fromCoords, toCoords);
            data.fromCoords = fromCoords;
            data.toCoords = toCoords;

            if (data.line == null) {
                data.line = vm.vis.append('path')
                    .attr('d', valueline(d))
                    .attr('stroke', '#777')
                    .attr('stroke-width', 4)
                    .attr('fill', 'none')
                    .attr('z-index', -1)
            } else {
                data.line.attr('d', valueline(d))
            }

        }

        function getTranslation(transform) {
            var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
            g.setAttributeNS(null, "transform", transform);
            var matrix = g.transform.baseVal.consolidate().matrix;
            return [matrix.e, matrix.f];
        }


        draw();


        /*
         *
         *   Code for Left pan
         *
         * */

        vm.grabWidget = function (event, data) {
            var widDom = $(event.currentTarget);
            vm.widDom = widDom.clone();
            vm.widDom.data = data;
            vm.widgetGrabbed = true;
            var pageX = widDom.offset().left
            var pageY = widDom.offset().top;
            vm.widDom.leftOff = event.pageX - pageX;
            vm.widDom.topOff = event.pageY - pageY;
            if (vm.widDom) {
                vm.widDom.addClass('dummy')
                vm.widDom.css({
                    left: pageX,
                    top: pageY,
                    width: widDom.width(),
                    margin: 0,
                })
                $('#fm-leftpan').append(vm.widDom);
            }
        }

        $(window).mouseup(function () {
            vm.dropWidget();
        })
        $(window).mousemove(function (event) {
            vm.draggingWidget(event);
        })

        vm.dropWidget = function () {
            if (vm.widDom && vm.widgetGrabbed) {
                vm.widgetGrabbed = false;
                var tempData = {
                    offset: vm.widDom.offset(),
                    width: vm.widDom.width(),
                    height: vm.widDom.height(),
                    data: vm.widDom.data,
                }
                makeNewWidget(tempData);
                vm.widDom.remove();
            }
        }

        vm.draggingWidget = function (event) {
            if (vm.widgetGrabbed) {
                vm.widDom.css({
                    left: event.pageX - vm.widDom.leftOff,
                    top: event.pageY - vm.widDom.topOff,
                })
            }
        }

        function updateScopeData(wDataResp) {

            wData = wDataResp;
            widgetData = wData.widgetData;
            widgets = wData.widgets;
            indexByTag = wData.indexByTag;

        }

        function makeNewWidget(params) {
            var midPanOff = $('.fm-midpan').offset();
            var midWidth = $('.fm-midpan').width();
            var midHeight = $('.fm-midpan').height();
            var data = angular.copy(params.data);
            if (params.offset.left > midPanOff.left && params.offset.top > midPanOff.top &&
                params.offset.left + (params.width / 2) < midPanOff.left + midWidth && params.offset.top + (params.height / 2) < midPanOff.top + midHeight) {
                //making data for new widget
                data.tag = generateIntanceId(data);
                data.id = generateUniqueId();
                data.rectSettings = {}
                data.rectSettings.y = params.offset.top - $('#fm-midpan').offset().top;
                data.rectSettings.x = params.offset.left - $('#fm-midpan').offset().left;
                gridService.updateWidgetData(data, function (resp) {
                    updateScopeData(resp);
                    draw();
                })
            }
        }

        function generateUniqueId() {
            var uid;
            while (true) {
                uid = getRandomInt(1, 100000);
                var found = false;
                for (var idx in widgetData) {
                    if (widgetData[idx].id == uid) {
                        found = true;
                    }
                }
                if (!found) {
                    break;
                }
            }
            return uid;
        }

        function getRandomInt(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function generateIntanceId(data) {
            return data.name + ( parseInt(widgetData.length) + 1);
        }
    }
}


