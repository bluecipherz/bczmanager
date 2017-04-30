/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _index = __webpack_require__(1);
	
	var _index2 = __webpack_require__(2);
	
	var _index3 = __webpack_require__(3);
	
	var _main = __webpack_require__(4);
	
	var _flowManager = __webpack_require__(5);
	
	var _grid = __webpack_require__(6);
	
	var _portalLogin = __webpack_require__(7);
	
	var _dashboard = __webpack_require__(8);
	
	var _httpService = __webpack_require__(9);
	
	var _video = __webpack_require__(10);
	
	var _d = __webpack_require__(11);
	
	var _timeline = __webpack_require__(12);
	
	var _config = __webpack_require__(13);
	
	var _widget = __webpack_require__(14);
	
	var _grid2 = __webpack_require__(15);
	
	var _auth = __webpack_require__(16);
	
	var _helper = __webpack_require__(17);
	
	var _treedata = __webpack_require__(18);
	
	var _login = __webpack_require__(19);
	
	var _app = __webpack_require__(20);
	
	var _request = __webpack_require__(21);
	
	var _assetApi = __webpack_require__(22);
	
	var _groupApi = __webpack_require__(23);
	
	var _userApi = __webpack_require__(24);
	
	var _roleApi = __webpack_require__(25);
	
	var _helpertest = __webpack_require__(26);
	
	var _portalLogin2 = __webpack_require__(27);
	
	var _inDialog = __webpack_require__(28);
	
	var _in = __webpack_require__(29);
	
	var _dynamicController = __webpack_require__(30);
	
	var _setDom = __webpack_require__(31);
	
	/* global malarkey:false, moment:false */
	
	angular.module('management', ['ngCookies', 'ngTouch', 'ngSanitize', 'ngMessages', 'ngAria', 'ngResource', 'ui.router', 'mm.foundation', 'toastr']).config(_index.config).config(_index2.routerConfig)
	// .config(function($httpProvider) {
	//     $httpProvider.interceptors.push('authInterceptor');
	// })
	
	// have to fix above config
	
	.constant('moment', moment)
	// .constant('API_HOST', 'http://localhost:8000/api')
	.constant('API_HOST', 'http://api.blueciphers.com/api').constant('TOKEN_KEY', 'JWT_TOKEN_KEY').run(_index3.runBlock).service('gridService', _grid2.gridService).service('authService', _auth.authService).service('authInterceptor', _auth.authInterceptor).service('helperService', _helper.helperService).service('treeDataService', _treedata.treeDataService).service('loginService', _login.loginService).service('requestService', _request.requestService).service('assetAPIService', _assetApi.assetAPIService).service('groupAPIService', _groupApi.groupAPIService).service('userAPIService', _userApi.userAPIService).service('roleAPIService', _roleApi.roleAPIService).service('helperTestService', _helpertest.helperTestService).service('appConstants', _app.appConstants).service('$inDialog', _inDialog.$inDialog).service('portalLoginService', _portalLogin2.portalLoginService).service('http', _httpService.http).controller('MainController', _main.MainController).controller('FlowController', _flowManager.FlowController).controller('GridController', _grid.GridController).controller('DashboardController', _dashboard.DashboardController).controller('PortalLoginController', _portalLogin.PortalLoginController).directive('dynamicController', function () {
	    return new _dynamicController.dynamicController();
	}).directive('setDom', function () {
	    return new _setDom.setDom();
	}).directive('inDialog', function () {
	    return new _in.inDialog();
	});
	
	// Pure javascript Flow Manager widgets;
	flowManager.widget('widgetConnector', _widget.widgetConnector);
	flowManager.widget('videoPlayer', _video.videoPlayer);
	flowManager.widget('3dPlayer', _d.$3dPlayer);
	flowManager.widget('timeline', _timeline.timeline);
	flowManager.widget('configWidget', _config.configWidget);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	config.$inject = ["$logProvider", "toastrConfig"];
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.config = config;
	function config($logProvider, toastrConfig) {
	  'ngInject';
	  // Enable log
	
	  $logProvider.debugEnabled(true);
	
	  // Set options third-party lib
	  toastrConfig.allowHtml = true;
	  toastrConfig.timeOut = 3000;
	  toastrConfig.positionClass = 'toast-top-right';
	  toastrConfig.preventDuplicates = true;
	  toastrConfig.progressBar = true;
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	routerConfig.$inject = ["$stateProvider", "$urlRouterProvider"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.routerConfig = routerConfig;
	function routerConfig($stateProvider, $urlRouterProvider) {
	    'ngInject';
	
	    $stateProvider.state('dashboard', {
	        url: '/',
	        templateUrl: 'app/portal/dashboard/dashboard.html',
	        controller: 'DashboardController',
	        controllerAs: 'vm'
	    }).state('portalLogin', {
	        url: '/portal-login',
	        templateUrl: 'app/portal/login/portal.login.html',
	        controller: 'PortalLoginController',
	        controllerAs: 'vm'
	    });
	
	    $urlRouterProvider.otherwise('/');
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	'use strict';
	
	runBlock.$inject = ["$rootScope", "$log", "$state", "$cookieStore"];
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.runBlock = runBlock;
	function runBlock($rootScope, $log, $state, $cookieStore) {
	    'ngInject';
	
	    $log.log("runBlock");
	    $rootScope.showLoginDialog = true;
	    //$rootScope.$emit('getData', {'login': true});
	
	    // $window.ga('create', 'UA-86820286-2', 'auto');
	    //
	    // // track pageview on state change
	    // $rootScope.$on('$stateChangeSuccess', function (event) {
	    //   $window.ga('send', 'pageview', $location.path());
	    // });
	
	
	    $rootScope.$on('$stateChangeStart', function (e, toState, toParams, fromState, fromParams) {
	
	        var isLogin = toState.name === "portalLogin";
	        if (isLogin) {
	            return; // no need to redirect
	        }
	
	        // now, redirect only not authenticated
	
	        var userInfo = isAuthed();
	
	        if (userInfo === false) {
	            e.preventDefault(); // stop current execution
	            $state.go('portalLogin'); // go to login
	        }
	    });
	
	    function isAuthed() {
	        if ($cookieStore.get('userData')) {
	            return true;
	        } else {
	            return false;
	        }
	    }
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var MainController = exports.MainController = function () {
	  MainController.$inject = ["gridService"];
	  function MainController(gridService) {
	    'ngInject';
	
	    _classCallCheck(this, MainController);
	
	    this.awesomeThings = [];
	    this.classAnimation = '';
	    this.creationDate = 1486045471836;
	
	    this.testFunction(gridService);
	  }
	
	  _createClass(MainController, [{
	    key: 'testFunction',
	    value: function testFunction(NavTreeService) {
	      //console.log('running test function is awesome', NavTreeService.getData());
	    }
	  }]);
	
	  return MainController;
	}();

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var FlowController = exports.FlowController = ["gridService", "$scope", function FlowController(gridService, $scope) {
	    'ngInject';
	
	    _classCallCheck(this, FlowController);
	
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
	
	    vm.vis = d3.select('#fm-midpan').attr('width', vm.midW).attr('height', vm.midH).attr("viewBox", "0 0 " + vm.midW + " " + vm.midH).on("contextmenu", function (d) {
	        d3.event.preventDefault();
	    }).on("mouseup", svgMouseup);
	
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
	                return "translate(" + [d3.event.x, d3.event.y] + ")";
	            });
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
	    };
	
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
	                var tempWid = { id: widget.id, name: widget.name, tag: widget.tag, connectable: false, inputs: [] };
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
	                tRect.attr('class', tempClass + ' disabled');
	            }
	        }
	    };
	
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
	    };
	
	    vm.removeParam = function (param) {
	        vm.tempSelectedInput.params.splice(vm.tempSelectedInput.params.indexOf(param), 1);
	    };
	
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
	                    vm.tempSelectedInput.params.push(vm.tempParam);
	                    vm.tempParam = '';
	                }
	            }
	        }
	    };
	
	    vm.focusInput = function () {
	        $('#paramInput').focus();
	    };
	
	    vm.addInput = function () {
	        var method = angular.copy(vm.tempInput);
	        vm.tempInput = {};
	        method.id = vm.selectedWidget.methods.length;
	        vm.selectedWidget.methods.push(method);
	    };
	
	    $scope.aceOption = {
	        mode: 'javascript',
	        onLoad: function onLoad(editor) {
	            // defaults
	            // editor.setTheme("ace/theme/monokai");
	            // options
	            editor.setOptions({
	                showGutter: true,
	                showPrintMargin: false
	            });
	        }
	    };
	
	    vm.createMethod = function () {
	        $('#fm-method-create').show();
	    };
	
	    vm.saveMethodCreatePopup = function () {
	        localStorage.setItem('widgetData', JSON.stringify(widgetData));
	        $('#fm-method-create').hide();
	        //MAKE API CALL TO SAVE DATA
	    };
	
	    vm.closeMethodCreatePopup = function () {
	        $('#fm-method-create').hide();
	    };
	
	    vm.editMethod = function (method) {
	        console.log(method);
	    };
	
	    vm.cancelAssigning = function () {
	        $('#fm-method-popCont').hide();
	    };
	
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
	    };
	
	    function genFlow(data) {
	        vm.flowJSON = gridService.getFlow();
	        console.log(vm.flowJSON);
	        if (!vm.flowJSON) {
	            vm.flowJSON = {};
	            console.log('im here');
	        }
	        if (!(data.from.tag in vm.flowJSON)) vm.flowJSON[data.from.tag] = {};
	        if (!vm.flowJSON[data.from.tag][data.to.tag]) {
	            vm.flowJSON[data.from.tag][data.to.tag] = [];
	        }
	        var flowFound = isMethodFlowDefined(data.from.tag, data.to.tag, data.fromMethod.name, data.toMethod.name);
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
	            vm.vis.selectAll('g').attr('class', 'flow-rect-main');
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
	        if (left > $(window).width() / 2) {
	            right = $(window).width() - left;
	            left = 'auto';
	        }
	        if (top > $(window).height() / 2) {
	            bottom = $(window).height() - top;
	            top = 'auto';
	        }
	        $('#fm-method-pop').css({ left: left, top: top, bottom: bottom, right: right });
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
	        filter = defs.append("filter").attr("id", "drop-shadow").attr("height", "150%");
	        filter.append("feGaussianBlur").attr("in", "SourceAlpha").attr("stdDeviation", 2).attr("result", "offsetblur");
	        filter.append("feComponentTransfer").append("feFuncA").attr('type', 'linear').attr('slope', '0.3');
	        filter.append("feOffset").attr("in", "blur").attr("dx", 1).attr("dy", 1).attr("result", "offsetBlur");
	
	        feMerge = filter.append("feMerge");
	        feMerge.append("feMergeNode").attr("in", "offsetBlur");
	        feMerge.append("feMergeNode").attr("in", "SourceGraphic");
	
	        var rectDrag = d3.drag().subject(function () {
	            var t = d3.select(this);
	            var tr = getTranslation(t.attr("transform"));
	            return {
	                x: t.attr("x") + tr[0],
	                y: t.attr("y") + tr[1]
	            };
	        }).on("drag", dragging).on("end", dragEnd);
	
	        for (var idx in widgets) {
	
	            if (!widgetData[idx].rectSettings || !widgetData[idx].rectSettings.x) {
	                if (!widgetData[idx].rectSettings) widgetData[idx].rectSettings = {};
	                widgetData[idx].rectSettings.x = 0;
	                widgetData[idx].rectSettings.y = 0;
	            }
	
	            widgets[idx].rect = vm.vis.append("g").attr("transform", "translate(" + widgetData[idx].rectSettings.x + "," + widgetData[idx].rectSettings.y + ")").attr("tag-name", widgets[idx].tag).attr('class', 'flow-rect-main').attr('id', 'widrect-' + widgets[idx].tag).on("mousedown", dragStart);
	
	            if (gridService.isChrome) widgets[idx].rect.style("filter", "url(#drop-shadow)");
	
	            widgets[idx].rect.append("rect").attr("width", rectHeight).attr("height", rectHeight).attr('fill', widgets[idx].color).attr('font-size', '70%').attr('font-family', 'gotham').attr('class', 'flow-rect-dragger');
	            widgets[idx].rect.append("rect").attr("width", rectWidth).attr("height", rectHeight).attr('fill', '#fff').attr('x', rectHeight).attr('font-size', '70%').attr('font-family', 'gotham');
	            widgets[idx].rect.append("text").attr('font-family', 'gotham').attr('font-size', '90%').attr('fill', '#555').attr('line-height', rectHeight).attr('x', rectHeight + 10).attr('y', 22).attr('z-index', 110).text(getMyName(widgetData[idx].tag));
	            widgets[idx].rect.append("rect").attr("width", 10).attr("height", rectHeight).attr("x", rectWidth + rectHeight).attr('fill', '#999').attr('font-size', '70%').attr('font-family', 'gotham').attr('class', 'flow-rect-dragger');
	            widgets[idx].rect.append("circle").attr("r", 6).attr('stroke-width', 1).attr('stroke', '#666').attr("cx", rectWidth + rectHeight + 10).attr('cy', rectHeight / 2).attr('fill', '#ddd');
	            widgets[idx].rect.append("circle").attr("r", 6).attr('stroke-width', 1).attr('stroke', '#666').attr('class', 'fm-node-first-circle').attr("cx", 0).attr('cy', rectHeight / 2).attr('fill', '#ddd');
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
	            if (widgets[indexByTag[fromTag]]) {
	                var fromRect = widgets[indexByTag[fromTag]].rect;
	                for (var toTag in vm.flowJSON[fromTag]) {
	                    if (vm.flowJSON[fromTag][toTag].length) {
	                        var toRect = widgets[indexByTag[toTag]].rect;
	                        var fromCoords = getTranslation(fromRect.attr("transform"));
	                        var toCoords = getTranslation(toRect.attr("transform"));
	                        var tempFLO = {
	                            fromCoords: fromCoords,
	                            toCoords: toCoords,
	                            from: fromTag,
	                            to: toTag
	                        };
	                        drawLine(tempFLO);
	                        if (!(fromTag + toTag in vm.flowLines)) {
	                            vm.flowLines[fromTag + toTag] = tempFLO;
	                        }
	                        currFlows.push(fromTag + toTag);
	                    }
	                }
	            }
	        }
	        d3.selectAll("#fm-midpan > *").sort(function (a, b) {
	            // select the parent and sort the path's
	            return 1;
	        });
	    }
	
	    function getD(fromCoords, toCoords) {
	        fromCoords[1] += 17;
	        fromCoords[0] += 165;
	        toCoords[1] += 17;
	        return [[fromCoords[0], fromCoords[1]], [fromCoords[0] + 5, fromCoords[1]], [fromCoords[0] + 25, fromCoords[1]], [toCoords[0] - 25, toCoords[1]], [toCoords[0] - 5, toCoords[1]], [toCoords[0], toCoords[1]]];
	    }
	
	    var valueline = d3.line().curve(d3.curveBasis).x(function (d) {
	        return d[0];
	    }).y(function (d) {
	        return d[1];
	    });
	
	    function drawLine(data) {
	        var fromRect = widgets[indexByTag[data.from]].rect;
	        var toRect = widgets[indexByTag[data.to]].rect;
	        var fromCoords = getTranslation(fromRect.attr("transform"));
	        var toCoords = getTranslation(toRect.attr("transform"));
	        var d = getD(fromCoords, toCoords);
	        data.fromCoords = fromCoords;
	        data.toCoords = toCoords;
	
	        if (data.line == null) {
	            data.line = vm.vis.append('path').attr('d', valueline(d)).attr('stroke', '#777').attr('stroke-width', 4).attr('fill', 'none').attr('z-index', -1);
	        } else {
	            data.line.attr('d', valueline(d));
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
	        var pageX = widDom.offset().left;
	        var pageY = widDom.offset().top;
	        vm.widDom.leftOff = event.pageX - pageX;
	        vm.widDom.topOff = event.pageY - pageY;
	        if (vm.widDom) {
	            vm.widDom.addClass('dummy');
	            vm.widDom.css({
	                left: pageX,
	                top: pageY,
	                width: widDom.width(),
	                margin: 0
	            });
	            $('#fm-leftpan').append(vm.widDom);
	        }
	    };
	
	    $(window).mouseup(function () {
	        vm.dropWidget();
	    });
	    $(window).mousemove(function (event) {
	        vm.draggingWidget(event);
	    });
	
	    vm.dropWidget = function () {
	        if (vm.widDom && vm.widgetGrabbed) {
	            vm.widgetGrabbed = false;
	            var tempData = {
	                offset: vm.widDom.offset(),
	                width: vm.widDom.width(),
	                height: vm.widDom.height(),
	                data: vm.widDom.data
	            };
	            makeNewWidget(tempData);
	            vm.widDom.remove();
	        }
	    };
	
	    vm.draggingWidget = function (event) {
	        if (vm.widgetGrabbed) {
	            vm.widDom.css({
	                left: event.pageX - vm.widDom.leftOff,
	                top: event.pageY - vm.widDom.topOff
	            });
	        }
	    };
	
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
	        if (params.offset.left > midPanOff.left && params.offset.top > midPanOff.top && params.offset.left + params.width / 2 < midPanOff.left + midWidth && params.offset.top + params.height / 2 < midPanOff.top + midHeight) {
	            //making data for new widget
	            data.tag = generateIntanceId(data);
	            data.id = generateUniqueId();
	            data.rectSettings = {};
	            data.rectSettings.y = params.offset.top - $('#fm-midpan').offset().top;
	            data.rectSettings.x = params.offset.left - $('#fm-midpan').offset().left;
	            gridService.updateWidgetData(data, function (resp) {
	                updateScopeData(resp);
	                draw();
	            });
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
	        return data.name + (parseInt(widgetData.length) + 1);
	    }
	}];

/***/ },
/* 6 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var GridController = exports.GridController = ["gridService", "$scope", "loginService", function GridController(gridService, $scope, loginService) {
	    'ngInject';
	
	    _classCallCheck(this, GridController);
	
	    console.log('Grid Controller');
	
	    var vm = this;
	
	    vm.widgets = [];
	    vm.gridMode = 0; // 0 = normal Mode , 1 = edit Mode
	    vm.layoutOrder = null;
	    vm.widgetData = gridService.getWidgetData();
	
	    vm.switchMode = function (mode) {
	        vm.gridMode = mode;
	        if (mode == 0) {
	            for (var idx in vm.widgets) {
	                vm.widgets[idx].draggie.disable();
	            }
	        } else if (mode == 1) {
	            for (var idx in vm.widgets) {
	                vm.widgets[idx].draggie.enable();
	            }
	        }
	    };
	
	    var switchModeInter = setInterval(function () {
	        if (vm.widgets[0] && vm.widgets[0].draggie) {
	            clearInterval(switchModeInter);
	            vm.switchMode(0);
	        }
	    }, 100);
	
	    var oi_timeout = null;
	
	    function orderItems() {
	        var itemElems = $($grid.packery('getItemElements'));
	        vm.layoutOrder = [];
	        $(itemElems).each(function (i, itemElem) {
	            var id = parseInt($(itemElem).attr('widget-id'));
	            var tag = $(itemElem).attr('widget-tag');
	            vm.layoutOrder[i] = { position: id };
	        });
	
	        if (oi_timeout) clearTimeout(oi_timeout);
	        oi_timeout = setTimeout(function () {
	            localStorage.setItem('layoutOrder', JSON.stringify(vm.layoutOrder));
	        }, 1000);
	    };
	
	    function getWidgets() {
	        var callback = function callback(layoutOrder) {
	            vm.layoutOrder = layoutOrder;
	            var widList = [];
	            for (var idx in vm.widgetData.widgets) {
	                widList.push(vm.widgetData.widgets[idx].tag);
	            }
	            for (var idx in vm.layoutOrder) {
	                for (var jdx in vm.widgetData.widgets) {
	                    if (vm.widgetData.widgets[jdx].id == vm.layoutOrder[idx].position) {
	                        vm.widgets.push(vm.widgetData.widgets[jdx]);
	                        widList.splice(widList.indexOf(vm.widgetData.widgets[jdx].tag), 1);
	                    }
	                }
	            }
	            for (var idx in widList) {
	                var tempObj = angular.copy(vm.widgetData.widgets[vm.widgetData.indexByTag[widList[idx]]]);
	                vm.widgets.push(tempObj);
	            }
	            startPackery();
	        };
	        gridService.getLayoutOrder(callback);
	    }
	
	    getWidgets();
	
	    function setCSSClass(cols, u, v) {
	        var styleString = '';
	        for (var idx = 1; idx <= cols; idx++) {
	            styleString += '.gi-w-' + idx + '{ width: ' + (u * idx - 0) + 'px } ' + '.gi-vh-' + idx + '{ height: ' + v * idx + 'px } ' + '.gi-h-' + idx + '{ height: ' + u * idx + 'px } ';
	        }
	        var style = document.createElement('style');
	        style.type = 'text/css';
	        style.innerHTML = styleString;
	        document.getElementsByTagName('head')[0].appendChild(style);
	    }
	
	    function startPackery() {
	        var packeryInter = setInterval(function () {
	            if ($('.grid > div').length >= vm.widgets.length) {
	                initPackery();
	                clearInterval(packeryInter);
	            }
	        }, 200);
	    }
	
	    var $grid;
	
	    function initPackery() {
	        var cols = 24;
	        vm.columnWidth = parseInt(($(window).width() - 0) / cols);
	        vm.columnHeight = parseInt($(window).height() / cols);
	        setCSSClass(cols, vm.columnWidth, vm.columnHeight);
	
	        $grid = $('.grid').packery({
	            itemSelector: '.grid-item',
	            columnWidth: vm.columnWidth
	        });
	        var counter = 0;
	
	        $grid.find('.grid-item').each(function (i, gridItem) {
	            var draggie = new Draggabilly(gridItem);
	            for (var idx = 0; idx < vm.widgets.length; idx++) {
	                var wid = parseInt($(gridItem).attr('widget-id'));
	                if (vm.widgets[idx].id == wid) {
	                    counter++;
	                    vm.widgets[idx].draggie = draggie;
	                    $grid.packery('bindDraggabillyEvents', vm.widgets[idx].draggie);
	                }
	            }
	        });
	
	        $grid.packery('on', 'layoutComplete', orderItems);
	        $grid.packery('on', 'dragItemPositioned', orderItems);
	    }
	}];

/***/ },
/* 7 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 4/28/2017.
	 */
	var PortalLoginController = exports.PortalLoginController = ["portalLoginService", "$state", function PortalLoginController(portalLoginService, $state) {
	    'ngInject';
	
	    _classCallCheck(this, PortalLoginController);
	
	    var vm = this;
	
	    vm.login = function () {
	        vm.error = '';
	        vm.fetching = true;
	        portalLoginService.login(vm.username, vm.password, function (resp) {
	            $state.go('dashboard');
	            vm.fetching = false;
	        }, function (resp) {
	            vm.fetching = false;
	            vm.error = 'Invalid Credentials';
	        });
	    };
	}];

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 4/28/2017.
	 */
	var DashboardController = exports.DashboardController = ["portalLoginService", "$cookieStore", "API_HOST", "$resource", function DashboardController(portalLoginService, $cookieStore, API_HOST, $resource) {
	    'ngInject';
	
	    _classCallCheck(this, DashboardController);
	
	    var vm = this;
	
	    vm.state = {};
	    vm.user = $cookieStore.get('userData');
	
	    function getAPPList() {
	
	        if (!vm.user) return;
	
	        var appList = portalLoginService.wrapActions($resource(API_HOST + '/getapplist'), ['save']);
	
	        appList.save({ user_id: 6 }).$promise.then(function (results) {
	            vm.productList = results.products;
	        });
	    }
	
	    function syncAPIList() {
	
	        if (!vm.user) return;
	
	        var appList = portalLoginService.wrapActions($resource(API_HOST + '/getapicalls'), ['save']);
	
	        appList.save({ product_id: vm.state.product.id }).$promise.then(function (results) {
	            vm.apicalls = results.apicalls;
	            for (var idx in vm.apicalls) {
	                var tempList = vm.apicalls[idx].api.split('/');
	                vm.apicalls[idx].apiEndpoint = tempList[tempList.length - 1];
	                vm.apicalls[idx].apiEndpoint = vm.apicalls[idx].apiEndpoint.split('?');
	                vm.apicalls[idx].apiEndpoint = vm.apicalls[idx].apiEndpoint[0];
	            }
	        });
	    }
	
	    vm.selectAPICall = function (call) {
	        vm.state.apicall = call;
	        var json;
	        var str;
	        try {
	            json = JSON.parse(vm.state.apicall.parameters);
	            str = JSON.stringify(json, undefined, 4);
	        } catch (e) {
	            str = vm.state.apicall.parameters;
	        }
	
	        output(syntaxHighlight(str));
	    };
	
	    vm.syncAPICalls = function () {
	        syncAPIList();
	    };
	
	    vm.selectProduct = function (item) {
	        vm.state.product = item;
	    };
	
	    vm.changeMode = function (item) {
	
	        var appList = portalLoginService.wrapActions($resource(API_HOST + '/changedebuggingmode'), ['save']);
	
	        var deb = !vm.state.product.debugging ? 1 : 0;
	
	        appList.save({ id: vm.state.product.id, debugging: deb }).$promise.then(function (results) {
	            vm.state.product = results.product;
	            vm.productList = results.products;
	        });
	    };
	
	    getAPPList();
	
	    function output(inp) {
	        $('.dbmcd-container pre').html(inp);
	        // document.body.appendChild(document.createElement('pre')).innerHTML = inp;
	    }
	
	    function syntaxHighlight(json) {
	        json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
	        return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g, function (match) {
	            var cls = 'number';
	            if (/^"/.test(match)) {
	                if (/:$/.test(match)) {
	                    cls = 'key';
	                } else {
	                    cls = 'string';
	                }
	            } else if (/true|false/.test(match)) {
	                cls = 'boolean';
	            } else if (/null/.test(match)) {
	                cls = 'null';
	            }
	            return '<span class="' + cls + '">' + match + '</span>';
	        });
	    }
	
	    var obj = { a: 1, 'b': 'foo', c: [false, 'false', null, 'null', { d: { e: 1.3e5, f: '1.3e5' } }] };
	    var str = JSON.stringify(obj, undefined, 4);
	}];

/***/ },
/* 9 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 4/28/2017.
	 */
	var http = exports.http = ["$resource", "API_HOST", "$log", "$q", "portalLoginService", function http($resource, API_HOST, $log, $q, portalLoginService) {
	    'ngInject';
	
	    _classCallCheck(this, http);
	
	    var vm = this;
	
	    vm.post = function (url, body) {
	        var req = portalLoginService.wrapActions($resource(API_HOST + url), ['save']);
	
	        return req.save(body).$promise.then(vm.handleResponse, vm.handleFailure);
	    };
	
	    vm.handleResponse = function (resp) {
	        //$log.log("handleResponse");
	        if (resp.data) {
	            resp = resp.data;
	        }
	        return $q.resolve(resp);
	    };
	
	    vm.handleFailure = function (resp) {
	        //$inError.add(resp);
	        $log.log("handleFailure ", resp);
	        return $q.reject(resp);
	    };
	}];

/***/ },
/* 10 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var videoPlayerController = function videoPlayerController(tag) {
	    _classCallCheck(this, videoPlayerController);
	
	    var vm = this;
	
	    flowManager.initWidget(tag, function (tag) {
	        init(tag);
	    });
	
	    vm.processInput = function (tag, data) {};
	
	    function init(tag) {
	        vm.tag = tag.tag_id;
	    }
	};
	
	var videoPlayer = {
	    controller: videoPlayerController,
	    view: 'app/widgets/common/videoPlayer/video.player.html',
	    methods: [
	        // {id:0, name:'setData',output:true, input:true, params : ['asset']},
	    ],
	    color: '#cc2222',
	    settings: { vh: 20, w: 9 }
	};
	
	exports.videoPlayer = videoPlayer;

/***/ },
/* 11 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var $3dPlayerController = function $3dPlayerController(tag, $scope) {
	    _classCallCheck(this, $3dPlayerController);
	
	    var vm = this;
	
	    /*
	    *
	    * Flow Manager Functions
	    *
	    * */
	
	    vm.processInput = function (tag, data) {
	        if (tag == 'setFrame') {
	            updateFrame(data);
	        }
	    };
	
	    vm.frameData = {};
	
	    function updateFrame(data) {
	        if ('cameraPosition' in data) {
	            vm.frameData.cameraPosition = data.cameraPosition;
	        }
	    }
	
	    /*
	    *
	    * Variable Initialization
	    *
	    * */
	
	    vm.modes = {
	        'MANUAL': 'MANUAL',
	        'AUTO': 'AUTO'
	    };
	
	    vm.tools = {
	        'MOVE': 'MOVE',
	        'CUTVIEW': 'CUTVIEW'
	    };
	
	    vm.axes = {
	        X: 'X',
	        Y: 'Y',
	        Z: 'Z'
	    };
	
	    vm.controls = {
	        mode: vm.modes.AUTO,
	        tool: {
	            enabled: false,
	            current: vm.tools['MOVE']
	        },
	        cutview: {
	            planes: [],
	            axis: vm.axes['X']
	        }
	    };
	
	    /*
	    *
	    *  ThreeJS
	    *
	    * */
	
	    var renderer,
	        camera,
	        loader,
	        viewportHeight,
	        viewportWidth,
	        scene,
	        viewportId = '3dPlayer',
	        geoMesh,
	        cameraControls,
	        stats;
	
	    function initThree() {
	        var threeInter = setInterval(function () {
	            if ($('#' + viewportId).length > 0 && $('#' + viewportId).height() > 150) {
	                viewportHeight = $('#' + viewportId).height();
	                viewportWidth = $('#' + viewportId).width();
	                if (viewportHeight > 0 && viewportWidth > 0) {
	                    init3();
	                    clearInterval(threeInter);
	                }
	            }
	        }, 20);
	    }
	
	    function init3() {
	        renderer = new THREE.WebGLRenderer({ antialias: false, alpha: true });
	        renderer.setSize(viewportWidth, viewportHeight);
	        // renderer.setClearColor( 0x777777, 0 ); // the default
	        document.getElementById(viewportId).appendChild(renderer.domElement);
	
	        camera = new THREE.PerspectiveCamera(45, viewportWidth / viewportHeight, 0.1, 500);
	        camera.position.set(2.5, 2.5, 2.5);
	
	        loader = new THREE.JSONLoader();
	        scene = new THREE.Scene();
	
	        cameraControls = new THREE.OrbitControls(camera, renderer.domElement);
	        cameraControls.addEventListener('change', render); // remove when using animation loop
	        cameraControls.enabled = false;
	
	        // enable animation loop when using damping or autorotation
	        // cameraControls.enableDamping = true;
	        // cameraControls.dampingFactor = 0.25;
	        // cameraControls.enableZoom = false;
	
	        var material = new THREE.MeshPhongMaterial({
	            // map : texture,
	            color: 0x883333,
	            vertexColors: THREE.VertexColors,
	            specular: 0x555555,
	            side: THREE.DoubleSide,
	            shininess: 100
	        });
	
	        loader.load('app/models/neuron.js', function (geo, mat) {
	            mat[0].side = THREE.DoubleSide;
	            console.log(mat);
	            geoMesh = new THREE.Mesh(geo, material);
	            vm.servoBody = geoMesh;
	            camera.lookAt(geoMesh.position);
	            animate();
	            scene.add(geoMesh);
	        });
	
	        var light = new THREE.AmbientLight('#fff'); // soft white light
	        scene.add(light);
	        var directionalLight = new THREE.DirectionalLight(0xffffff);
	        directionalLight.position.set(-3, 20, 100).normalize();
	        scene.add(directionalLight);
	
	        stats = new Stats();
	        document.getElementById('configWidget').appendChild(stats.dom);
	
	        renderer.render(scene, camera);
	
	        vm.controls.cutview.plane = new THREE.Plane(new THREE.Vector3(0, 0, 0), 0.1);
	        vm.controls.cutview.plane.normal.x = -1;
	        renderer.clippingPlanes = vm.controls.cutview.planes;
	
	        vm.controls.cutview.markerMaterial = new THREE.MeshBasicMaterial({ transparent: true, wireframe: true, color: 0xff0000, opacity: 0 });
	        vm.controls.cutview.marker = new THREE.Mesh(new THREE.PlaneBufferGeometry(3, 3, 2, 2), vm.controls.cutview.markerMaterial);
	
	        var control = new THREE.TransformControls(camera, renderer.domElement);
	        control.addEventListener('change', render);
	        control.attach(vm.controls.cutview.marker);
	
	        scene.add(vm.controls.cutview.marker);
	        // scene.add( control );
	
	
	        vm.changeMode('MANUAL');
	        vm.changeTool('MOVE');
	        vm.changeCutViewAxis('X');
	        applyScope();
	    }
	
	    function animate() {
	        vm.servoAnimId = requestAnimationFrame(animate);
	        render();
	    }
	
	    function render() {
	        processFrame();
	        renderer.render(scene, camera);
	    }
	
	    function processFrame() {
	        if (vm.controls.mode == vm.modes.AUTO) {
	            animateVectors(camera.position, vm.frameData.cameraPosition, 0.2);
	            camera.lookAt(geoMesh.position);
	        } else {}
	        stats.update();
	    }
	
	    var dimensions = ['x', 'y', 'z'];
	    var diDiff = 0;
	
	    function animateVectors(v1, v2, max) {
	        if (!v1 || !v2) return;
	        for (var axis in dimensions) {
	            diDiff = v1[dimensions[axis]] - v2[dimensions[axis]];
	            if (diDiff > 0) {
	                v1[dimensions[axis]] -= Math.min(max, diDiff / 10);
	            } else if (diDiff < 0) {
	                v1[dimensions[axis]] += Math.min(max, -1 * diDiff / 10);
	            }
	        }
	    }
	
	    /*
	    *
	    *  Controller Functions
	    *
	    * */
	
	    vm.changeMode = function (mode) {
	        vm.controls.mode = vm.modes[mode];
	        if (vm.modes[mode] == vm.modes['AUTO']) {
	            disableTool();
	        } else {
	            enableTool();
	        }
	    };
	
	    vm.changeTool = function (tool) {
	        if (vm.controls.tool.enabled) {
	            vm.controls.tool.current = vm.tools[tool];
	            if (vm.tools[tool] == vm.tools['MOVE']) {
	                cameraControls.enabled = true;
	            } else {
	                cameraControls.enabled = false;
	            }
	        }
	    };
	
	    vm.changeCutViewAxis = function (axis) {
	        vm.controls.cutview.axis = axis;
	        vm.controls.cutview.plane.normal.x = 0;
	        vm.controls.cutview.plane.normal.y = 0;
	        vm.controls.cutview.plane.normal.z = 0;
	        vm.controls.cutview.plane.constant = 0.0;
	        vm.controls.cutview.marker.rotation.x = 0;
	        vm.controls.cutview.marker.rotation.y = 0;
	        vm.controls.cutview.marker.rotation.z = 0;
	        vm.controls.cutview.marker.position.x = -0.02;
	        vm.controls.cutview.marker.position.y = -0.02;
	        vm.controls.cutview.marker.position.z = -0.02;
	
	        if (vm.axes[axis] == vm.axes['X']) {
	            vm.controls.cutview.plane.normal.x = -1;
	            vm.controls.cutview.marker.rotation.y = Math.PI / 2;
	        } else if (vm.axes[axis] == vm.axes['Y']) {
	            vm.controls.cutview.plane.normal.y = -1;
	            vm.controls.cutview.marker.rotation.x = Math.PI / 2;
	        } else {
	            vm.controls.cutview.plane.normal.z = -1;
	            vm.controls.cutview.marker.rotation.z = Math.PI / 2;
	        }
	    };
	
	    vm.toggleCutView = function () {
	        if (vm.controls.cutview.enabled) {
	            vm.controls.cutview.enabled = false;
	            disableCutView();
	        } else {
	            vm.controls.cutview.enabled = true;
	            enableCutView();
	        }
	    };
	
	    vm.changeCutViewVal = function (val) {
	        vm.controls.cutview.plane.constant += val;
	        if (vm.controls.cutview.axis == vm.axes['X']) {
	            vm.controls.cutview.marker.position.x += val;
	        } else if (vm.controls.cutview.axis == vm.axes['X']) {
	            vm.controls.cutview.marker.position.y += val;
	        } else {
	            vm.controls.cutview.marker.position.z += val;
	        }
	    };
	
	    function disableTool() {
	        vm.changeTool('');
	        vm.controls.tool.enabled = false;
	    }
	
	    function enableTool() {
	        vm.controls.tool.enabled = true;
	        vm.changeTool('MOVE');
	    }
	
	    function enableCutView() {
	        vm.controls.cutview.enabled = true;
	        renderer.clippingPlanes = [vm.controls.cutview.plane];
	        vm.controls.cutview.markerMaterial.opacity = 1;
	    }
	
	    function disableCutView() {
	        vm.controls.cutview.enabled = false;
	        renderer.clippingPlanes = [];
	        vm.controls.cutview.markerMaterial.opacity = 0;
	    }
	
	    /*
	    *
	    *  Init Function
	    *
	    * */
	
	    function initBClick() {
	        vm.bclickEls = {};
	        vm.bclickDomEls = vm.DOM.find('[b-click]');
	        vm.bclickDomEls.each(function (key, el) {
	            $(el).click(function () {
	                eval($(el).attr('b-click'));
	                applyScope();
	            });
	        });
	    }
	
	    var tempArrObj;
	    var tempArr;
	
	    function applyBClass() {
	        vm.bclickEls = {};
	        vm.bclickDomEls = vm.DOM.find('[b-class]');
	        vm.bclickDomEls.each(function (key, el) {
	            tempArr = $(el).attr('b-class').split(',');
	            for (var idx in tempArr) {
	                tempArrObj = tempArr[idx].split(':');
	                if (eval(tempArrObj[1])) $(el).addClass(tempArrObj[0]);else $(el).removeClass(tempArrObj[0]);
	            }
	        });
	    }
	
	    function applyScope() {
	        setTimeout(function () {
	            applyBClass();
	        });
	    }
	
	    function initScope() {
	        initBClick();
	        applyScope();
	    }
	
	    function init(tag) {
	
	        /*
	        *   Basic Settings
	        * */
	
	        vm.tag = tag.tag_id;
	        vm.widgetData = flowManager.getData(vm.tag);
	        vm.DOM = vm.widgetData.DOM;
	        initThree();
	        initScope();
	
	        /*
	        * Initial Setup
	        * */
	    }
	
	    flowManager.initWidget(tag, function (tag) {
	        init(tag);
	    });
	};
	
	var $3dPlayer = {
	    controller: $3dPlayerController,
	    view: 'app/widgets/common/3dPlayer/3d.player.html',
	    methods: [{ id: 0, name: 'setFrame', output: false, input: true, params: ['frame'] }],
	    color: '#cc2222',
	    settings: { vh: 20, w: 9 }
	};
	
	exports.$3dPlayer = $3dPlayer;

/***/ },
/* 12 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var timelineController = function timelineController(tag) {
	    _classCallCheck(this, timelineController);
	
	    var vm = this;
	    vm.FPS = 30;
	
	    flowManager.initWidget(tag, function (tag) {
	        init(tag);
	    });
	
	    vm.processInput = function (tag, data) {};
	
	    /*-------------------------*/
	
	    function init(tag) {
	
	        vm.tag = tag.tag_id;
	        vm.widgetData = flowManager.getData(vm.tag);
	        vm.DOM = vm.widgetData.DOM;
	        initBClick();
	
	        vm.player = {
	            playing: false,
	            currentIndex: 0
	        };
	
	        vm.player.togglePlay = function () {
	            if (vm.player.playing) {
	                vm.player.playing = false;
	                // console.log('im paused');
	                pause();
	            } else {
	                // console.log('im playing')
	                vm.player.playing = true;
	                play();
	            }
	        };
	
	        vm.player.data = generateTempData();
	
	        var d3Data = {
	            svg: '#timelineSVG',
	            container: '#timeline',
	            data: vm.player.data
	        };
	
	        initD3(d3Data);
	    }
	
	    var cameraPosition = { x: 4, y: -1, z: 3 };
	    var randCounter = 0;
	    function generateTempData() {
	        var tempArray = [];
	        for (var idx = 0; idx < 1000; idx++) {
	            randCounter++;
	            if (randCounter >= 60) {
	                randCounter = 0;
	                cameraPosition = getRandomVector(-5, 5);
	            }
	            tempArray.push({ x: moment().seconds(idx).unix() * 1000, y: idx, cameraPosition: cameraPosition });
	        }
	        return tempArray;
	    }
	
	    function getRandomVector(min, max) {
	        return {
	            x: getRandomAxis(min, max),
	            y: getRandomAxis(min, max),
	            z: getRandomAxis(min, max)
	        };
	    }
	
	    function getRandomAxis(min, max) {
	        var axis = min + Math.random() * (max - min);
	        if (axis > 0) {
	            axis = Math.max(1, axis);
	        } else {
	            axis = Math.min(-1, axis);
	        }
	        return axis;
	    }
	
	    function initBClick() {
	        vm.bclickEls = {};
	        vm.bclickDomEls = vm.DOM.find('[b-click]');
	        vm.bclickDomEls.each(function (key, el) {
	            $(el).click(function () {
	                eval('vm.' + $(el).attr('b-click'));
	            });
	        });
	    }
	
	    function initD3(data) {
	        if ($(data.container) && $(data.container).length && $(data.container).width() > 300) {
	            vm.d3 = new D3Timeline(data);
	        } else {
	            setTimeout(function () {
	                initD3(data);
	            }, 20);
	        }
	    }
	
	    function D3Timeline(data) {
	
	        var self = this;
	        self.container = angular.element(data.container);
	        self.width = self.container.width();
	        self.height = self.container.height();
	        self.svg = data.svg;
	        self.data = data.data;
	
	        self.visP = d3.select(data.svg).attr("preserveAspectRatio", "xMinYMin meet").attr("viewBox", "0 0 " + self.width + " " + Math.max(0, self.height)).classed("svg-content-responsive", true).on("contextmenu", function (d) {
	            d3.event.preventDefault();
	        }).on("mousemove", mouseHoverEvent).on("mousedown", mouseDownEvent).on("mouseup", mouseUpEvent);
	
	        getAxisScale();
	        draw();
	
	        function draw() {
	            d3.selectAll(self.svg + " > *").remove();
	
	            self.clipRect = self.visP.append("clipPath") // define a clip path
	            .attr('x', 0).attr('y', 0).attr("id", "main-clip") // give the clipPath an ID
	            .append("rect").attr("width", self.width).attr("height", self.height);
	
	            self.vis = self.visP.append("svg:g").attr('class', 'visTrans').attr('x', 0).attr('y', 0).attr("clip-path", "url(#main-clip)") // clip the rectangle
	            .attr("transform", "translate(0,0)");
	
	            self.marker = self.vis.append('g').attr('class', 'tl-marker').append('rect').attr('x', 0).attr('y', 0).attr('width', 1).attr('height', self.height).attr('fill', '#f00');
	        }
	
	        function getAxisScale() {
	            self.axisScale = {};
	            for (var idx in self.data) {
	                var dataItem = self.data[idx];
	                if (dataItem.x < self.axisScale.xl || self.axisScale.xl == null) self.axisScale.xl = dataItem.x;
	                if (dataItem.x > self.axisScale.xh || self.axisScale.xh == null) self.axisScale.xh = dataItem.x;
	
	                if (dataItem.y < self.axisScale.yl || self.axisScale.yl == null) self.axisScale.yl = dataItem.y;
	                if (dataItem.y > self.axisScale.yh || self.axisScale.yh == null) self.axisScale.yh = dataItem.y;
	            }
	
	            self.xScale = d3.scaleLinear().range([0, self.width]).domain([new Date(self.axisScale.xl), new Date(self.axisScale.xh)]);
	            self.yScale = d3.scaleLinear().range([self.height, 0]).domain([self.axisScale.yl, self.axisScale.yh]);
	        }
	
	        function mouseHoverEvent() {
	            if (self.mouseClicked) {
	                self.mouseX = d3.mouse(this)[0];
	                self.mouseY = d3.mouse(this)[1];
	                self.markerPosition = parseInt(self.xScale.invert(self.mouseX));
	                updateMarker();
	                updateMarkerIndex(self.mouseXVal);
	            }
	        }
	
	        function mouseDownEvent() {
	            self.mouseClicked = true;
	            self.mouseX = d3.mouse(this)[0];
	            self.mouseY = d3.mouse(this)[1];
	            self.mouseXVal = parseInt(self.xScale.invert(self.mouseX));
	            updateMarker();
	            updateMarkerIndex(self.mouseXVal);
	        }
	        function mouseUpEvent() {
	            self.mouseClicked = false;
	        }
	
	        self.updateMarker = function (frame) {
	            self.mouseX = self.xScale(frame.x);
	            updateMarker();
	        };
	
	        function updateMarker() {
	            self.marker.attr('transform', 'translate(' + self.mouseX + ',0)');
	        }
	    }
	
	    function play() {
	        vm.player.interval = setInterval(function () {
	            if (vm.player.currentIndex + 1 >= vm.player.data.length) {
	                clearInterval(vm.player.interval);
	                updateFrame(vm.player.currentIndex);
	                vm.player.currentIndex = 0;
	                vm.player.playing = false;
	            } else {
	                vm.player.currentIndex = getCurrentIndex(1);
	                updateFrame(vm.player.currentIndex);
	            }
	        }, 1000 / vm.FPS);
	    }
	
	    function pause() {
	        clearInterval(vm.player.interval);
	    }
	
	    function getCurrentIndex(offset) {
	        if (vm.player.currentIndex == null) vm.player.currentIndex = 0;
	        if (offset == null) offset = 0;
	        return vm.player.currentIndex + offset;
	    }
	
	    function getFrameIndex(x, diff, data) {
	        var found = false;
	        var startingIndex = 0;
	        var endingIndex = data.length;
	        var index;
	        var eq;
	        var counter = 0;
	        while (!found) {
	            index = parseInt((endingIndex - startingIndex) / 2) + startingIndex;
	            // console.log(startingIndex,index, endingIndex)
	            eq = getRound(x, data[index].x, diff);
	            if (eq == 0) {
	                // found
	                found = true;
	            } else if (eq == -1) {
	                // greater than
	                startingIndex += index - startingIndex;
	            } else {
	                // less than
	                endingIndex -= index - startingIndex;
	            }
	            if (startingIndex - endingIndex <= 1 && endingIndex - startingIndex <= 1) {
	                counter++;
	                diff += diff;
	                if (counter > 10) {
	                    break;
	                }
	            }
	        }
	
	        function getRound(x1, x2, diff) {
	            var diff1 = x1 + diff - x2;
	            // var diff2 = x1 - diff - x2;
	            if (diff1 < 0) {
	                // console.log(diff1, diff2, '++')
	                return 1;
	            } else if (diff1 > 0) {
	                // console.log(diff1, diff2, '--')
	                return -1;
	            } else {
	                return 0;
	            }
	        }
	        index--;
	        return index;
	    }
	
	    function updateMarkerIndex(mouseXVal) {
	        vm.player.currentIndex = getFrameIndex(mouseXVal, 1000, vm.player.data);
	        frameUpdated();
	    }
	
	    function updateFrame(index) {
	        updateTimeline(index);
	        frameUpdated();
	    }
	
	    function updateTimeline(index) {
	        vm.d3.updateMarker(vm.player.data[index]);
	    }
	
	    function frameUpdated() {
	        flowManager.runFlow(vm.tag, 'pushFrame', vm.player.data[vm.player.currentIndex]);
	    }
	};
	
	var timeline = {
	    controller: timelineController,
	    view: 'app/widgets/common/timeline/timeline.html',
	    methods: [{ id: 0, name: 'pushFrame', output: true, input: false, params: ['frame'] }],
	    color: '#cc2222',
	    settings: { vh: 4, w: 18 }
	};
	
	exports.timeline = timeline;

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var configWidgetController = function configWidgetController(tag) {
	    _classCallCheck(this, configWidgetController);
	
	    var vm = this;
	
	    vm.processInput = function (tag, data) {};
	
	    function init(tag) {
	        vm.tag = tag.tag_id;
	    }
	
	    flowManager.initWidget(tag, function (tag) {
	        init(tag);
	    });
	};
	
	var configWidget = {
	    controller: configWidgetController,
	    view: 'app/widgets/common/configWidget/config.widget.html',
	    methods: [
	        // {id:0, name:'setData',output:true, input:true, params : ['asset']},
	    ],
	    color: '#cc2222',
	    settings: { vh: 24, w: 6 }
	};
	
	exports.configWidget = configWidget;

/***/ },
/* 14 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var widgetConnectorController = function widgetConnectorController(tag) {
	    _classCallCheck(this, widgetConnectorController);
	
	    var vm = this;
	
	    vm.states = [];
	    vm.stateId = -1;
	
	    flowManager.initWidget(tag, function (tag) {
	        init(tag);
	    });
	
	    vm.processInput = function (tag, data) {
	        if (tag == 'setData') {
	
	            vm.pushState(data);
	            flowManager.runFlow(vm.tag, 'setData', processData(data));
	        } else if (tag == 'navigateBack') {
	
	            var toState = vm.getState(-1);
	            if (toState != null) {
	                flowManager.runFlow(vm.tag, 'setData', processData(toState));
	            }
	        } else if (tag == 'navigateForward') {
	
	            var toState = vm.getState(1);
	            if (toState != null) {
	                flowManager.runFlow(vm.tag, 'setData', processData(toState));
	            }
	        } else if (tag == 'setState') {
	
	            vm.pushState(data);
	            flowManager.runFlow(vm.tag, 'pushState', processData(data));
	        } else if (tag == 'updateState') {
	
	            vm.updateState(data);
	            flowManager.runFlow(vm.tag, 'pushState', processData(data));
	        }
	    };
	
	    function processData(data) {
	        if (!data.navigation) data.navigation = {};
	
	        data.navigation.isBackward = false;
	        data.navigation.isForward = false;
	
	        if (vm.stateId < vm.states.length - 1) data.navigation.isForward = true;
	        if (vm.stateId > 0) data.navigation.isBackward = true;
	
	        return data;
	    }
	
	    function init(tag) {
	        vm.tag = tag.tag_id;
	    }
	
	    vm.updateState = function (state) {
	        vm.states[vm.stateId] = state;
	    };
	
	    vm.pushState = function (state) {
	
	        var tempState = vm.states[vm.stateId];
	        if (tempState) {
	            if (tempState.fetch) delete tempState.fetch;
	            if (!state.group && tempState.group) state.group = tempState.group;
	            if (!state.tab && tempState.tab) state.tab = tempState.tab;
	            // if(!state.item && tempState.item) state.item = tempState.item;
	        }
	
	        vm.stateId++;
	        vm.states.splice(vm.stateId);
	        vm.states.push(state);
	    };
	
	    vm.getState = function (diff) {
	        var tempindex = vm.stateId + diff;
	        if (tempindex >= 0 && tempindex < vm.states.length) {
	            vm.stateId = tempindex;
	            return vm.states[vm.stateId];
	        } else {
	            return null;
	        }
	    };
	};
	
	var widgetConnector = {
	    controller: widgetConnectorController,
	    methods: [{ id: 0, name: 'setData', output: true, input: true, params: ['asset'] }, { id: 1, name: 'setState', output: true, input: true, params: ['asset'] }, { id: 2, name: 'updateState', output: true, input: true, params: ['asset'] }, { id: 3, name: 'navigateBack', output: true, input: true, params: ['asset'] }, { id: 4, name: 'navigateForward', output: true, input: true, params: ['asset'] }, { id: 5, name: 'pushState', output: true, params: ['asset'] }],
	    color: '#cc2222',
	    settings: {}
	};
	
	exports.widgetConnector = widgetConnector;

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/2/2017.
	 */
	var gridService = exports.gridService = function () {
	    gridService.$inject = ["$log"];
	    function gridService($log) {
	        'ngInject';
	
	        _classCallCheck(this, gridService);
	
	        $log.log("gridService");
	        var vm = this;
	        var getDefaultWidgets = true;
	        var resetLocalStorage = false;
	
	        vm.isOpera = !!window.opr && !!opr.addons || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
	        vm.isFirefox = typeof InstallTrigger !== 'undefined';
	        vm.isSafari = /constructor/i.test(window.HTMLElement) || function (p) {
	            return p.toString() === "[object SafariRemoteNotification]";
	        }(!window['safari'] || safari.pushNotification);
	        vm.isIE = /*@cc_on!@*/false || !!document.documentMode;
	        vm.isEdge = !vm.isIE && !!window.StyleMedia;
	        vm.isChrome = !!window.chrome && !!window.chrome.webstore;
	        vm.isBlink = (vm.isChrome || vm.isOpera) && !!window.CSS;
	
	        vm.paramTypes = {
	            INT: 'INT',
	            STRING: 'STRING',
	            BOOLEAN: 'BOOLEAN',
	            FUNCTION: 'FUNCTION',
	            TIMESTAMP: 'TIMESTAMP'
	        };
	
	        if (getDefaultWidgets) {
	
	            //widgetConnector4
	            //ConfigWidget3
	            //NavTree1
	            //Search2
	
	            var t_flowJSON = {
	                timeline3: {
	                    '3dPlayer2': [{ id: 0, from: 'pushFrame', to: 'setFrame' }]
	                }
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
	
	        var widgetData = [];
	
	        if (resetLocalStorage) localStorage.setItem('widgetData', JSON.stringify(widgetData));
	        if (localStorage.getItem('widgetData')) {
	            widgetData = JSON.parse(localStorage.getItem('widgetData'));
	        }
	
	        function generateWidgets(widgetJSON) {
	            for (var idx in widgetJSON) {
	                var widData = widgetSet[widgetJSON[idx].name];
	                if (!widgetJSON[idx].methods) widgetJSON[idx].methods = [];
	                for (var jdx in widData) {
	                    if (jdx != 'methods') {
	                        widgetJSON[idx][jdx] = widData[jdx];
	                    } else {
	                        for (var kdx in widData[jdx]) {
	                            var found = false;
	                            for (var qdx in widgetJSON[idx][jdx]) {
	                                if (widgetJSON[idx][jdx][qdx].name == widData[jdx][kdx].name) {
	                                    found = true;
	                                }
	                            }
	                            if (!found) widgetJSON[idx][jdx].push(widData[jdx][kdx]);
	                        }
	                    }
	                }
	            }
	            return widgetJSON;
	        }
	
	        vm.getWidgets = function () {
	            return generateWidgets(widgetData);
	        };
	        vm.getWidgetData = function () {
	            var indexByTag = {};
	            for (var idx in widgetData) {
	                indexByTag[widgetData[idx].tag] = idx;
	            }
	            return {
	                widgets: generateWidgets(widgetData),
	                widgetSet: widgetSet,
	                widgetData: widgetData,
	                indexByTag: indexByTag
	            };
	        };
	
	        vm.updateWidgetData = function (data, callback) {
	            var found = false;
	            for (var idx in widgetData) {
	                if (widgetData[idx].tag == data.tag) {
	                    widgetData[idx] = data;
	                    found = true;
	                    break;
	                }
	            }
	            if (!found) {
	                widgetData.push(data);
	            }
	            vm.pushToAPI('widgetData', widgetData, function () {
	                if (callback) callback(vm.getWidgetData());
	            });
	        };
	
	        vm.pushToAPI = function (tag, data, callback) {
	            localStorage.setItem(tag, JSON.stringify(angular.copy(data)));
	            if (callback) callback();
	        };
	
	        vm.getLayoutOrder = function (callback) {
	            var wid = vm.getWidgets();
	            var tempLay = [];
	            if (localStorage.getItem('layoutOrder') && !resetLocalStorage) {
	                tempLay = JSON.parse(localStorage.getItem('layoutOrder'));
	            } else {
	                for (var idx = 0; idx < wid.length; idx++) {
	                    tempLay.push({ position: idx });
	                }
	            }
	            if (callback) callback(tempLay);
	        };
	
	        vm.getFlow = function () {
	            var flow = {};
	            if (resetLocalStorage) localStorage.setItem('flowJSON', '{}');
	            if (localStorage.getItem('flowJSON')) {
	                flow = JSON.parse(localStorage.getItem('flowJSON'));
	            }
	            return flow;
	        };
	
	        flowManager.initFlow(vm.getFlow());
	    }
	
	    _createClass(gridService, [{
	        key: 'getData',
	        value: function getData() {
	            return this.data;
	        }
	    }]);
	
	    return gridService;
	}();

/***/ },
/* 16 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/11/2017.
	 */
	
	var authService = exports.authService = ["$window", "$log", "TOKEN_KEY", function authService($window, $log, TOKEN_KEY) {
	    'ngInject';
	
	    _classCallCheck(this, authService);
	
	    var vm = this;
	    $log.log("authService");
	
	    vm.parseJwt = function (token) {
	        //$log.log(token);
	        var base64Url = token.split('.')[1];
	        var base64 = base64Url.replace('-', '+').replace('_', '/');
	        return angular.fromJson($window.atob(base64));
	    };
	
	    vm.saveToken = function (token) {
	        $window.localStorage[TOKEN_KEY] = token;
	    };
	
	    vm.getToken = function () {
	        return $window.localStorage[TOKEN_KEY];
	    };
	
	    vm.isAuthed = function () {
	        var token = vm.getToken();
	        if (token != null) {
	            var params = vm.parseJwt(token);
	            return Math.round(new Date().getTime() / 1000) <= params.exp;
	        } else {
	            return false;
	        }
	    };
	
	    vm.logout = function () {
	        $window.localStorage.removeItem(TOKEN_KEY);
	    };
	}];
	
	var authInterceptor = exports.authInterceptor = ["$log", "API_HOST", "authService", function authInterceptor($log, API_HOST, authService) {
	    'ngInject';
	
	    _classCallCheck(this, authInterceptor);
	
	    return {
	        // automatically attach Authorization header
	        request: function request(config) {
	            //$log.log(config);
	            if (config.url.indexOf(API_HOST) === 0) {
	                if (config.method == 'POST') {
	                    if (!(config.url.indexOf('gettoken') > 0)) {
	                        config.data.token = authService.getToken();
	                    }
	                } else if (config.method == 'GET') {
	                    //config.headers.Authorization = 'Bearer ' + authService.getToken();
	                }
	            }
	
	            return config;
	        },
	
	        // If a token was sent back, save it
	        response: function response(res) {
	            //$log.log(res);
	            if (res.data && res.data.data) {
	                //$log.log(res.data.data.token);
	                if (res.config.url.indexOf(API_HOST) === 0 && res.data.data.token) {
	                    authService.saveToken(res.data.data.token);
	                }
	            }
	
	            return res;
	        }
	
	        // responseError: function(res) {
	        //     $log.log('interceptor');
	        //     $log.log(res);
	        // }
	    };
	}];

/***/ },
/* 17 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/11/2017.
	 */
	
	var helperService = exports.helperService = ["$log", "$q", "appConstants", function helperService($log, $q, appConstants) {
	    'ngInject';
	
	    _classCallCheck(this, helperService);
	
	    var vm = this;
	    $log.log("helperService");
	
	    var SLASH = '/';
	
	    // should be same as defined in backend
	    vm.assetTypeIdToAssetType = {
	        2: appConstants.GROUP,
	        3: appConstants.USER,
	        4: appConstants.ROLE,
	        5: appConstants.LOCALUSER,
	        45: appConstants.VEHICLE,
	        52: appConstants.DEVICE
	    };
	
	    // generating reverse lookup
	    vm.assetTypeToAssetTypeId = function () {
	        var assetTypeToAssetTypeId = {};
	        for (var idx in vm.assetTypeIdToAssetType) {
	            assetTypeToAssetTypeId[vm.assetTypeIdToAssetType[idx]] = idx;
	        }
	        return assetTypeToAssetTypeId;
	    }();
	
	    vm.getAssetId2 = function (path) {
	        if (path == null) return null;
	
	        var tokens = path.split(SLASH);
	
	        if (tokens.length > 2) return tokens[tokens.length - 2];
	
	        return null;
	    };
	
	    vm.getParentPath2 = function (path) {
	        if (path == null) return null;
	
	        var savedidx = 0;
	        var count = 0;
	        for (var idx = path.length - 1; idx >= 0; idx--) {
	            if (path[idx] == SLASH) count++;
	
	            if (count == 2) {
	                savedidx = idx;
	            }
	
	            if (count == 5) {
	                break;
	            }
	        }
	
	        if (count == 5) return path.substring(0, savedidx);
	
	        return path;
	    };
	
	    vm.getParentId2 = function (path) {
	        if (path == null) return null;
	
	        return vm.getAssetId2(vm.getParentPath2(path));
	    };
	
	    vm.getAssetTypeId2 = function (path) {
	        if (path == null) return null;
	
	        var tokens = path.split(SLASH);
	
	        if (tokens.length > 3) return tokens[tokens.length - 3];
	
	        return null;
	    };
	
	    vm.getAssetType2 = function (path) {
	        if (path == null) return null;
	
	        return vm.assetTypeIdToAssetType[vm.getAssetTypeId2(path)];
	    };
	
	    vm.getAssetLevel2 = function (path) {
	        if (path == null) return null;
	
	        return Math.floor((path.split(SLASH).length - 1) / 2);
	    };
	
	    vm.addAssetInfo = function (asset) {
	        if (asset == null) return null;
	
	        asset.assetid = vm.getAssetId2(asset.assetpath);
	        asset.pgrouppath = vm.getParentPath2(asset.assetpath);
	        asset.pgroupid = vm.getParentId2(asset.assetpath);
	        asset.ui_asset_type = vm.getAssetType2(asset.assetpath);
	        asset.assetlevel = vm.getAssetLevel2(asset.assetpath);
	    };
	
	    vm.filterAssetGroups = function (data) {
	        var filteredList = [];
	        for (var idx in data) {
	            if (data[idx].tag == 'TEAM') filteredList.push(data[idx]);
	        }
	
	        return $q.resolve(filteredList);
	    };
	
	    // ################################################################################################
	
	    vm.mergeAssetPermissions = function (resp) {
	        var data = resp.data.data;
	        for (var idx in data.assets) {
	            var asset = data.assets[idx];
	            vm.addAssetInfo(asset);
	            for (var pidx in data.permissions) {
	                var permission = data.permissions[pidx];
	                if (asset.assetpath == permission.assetpath) {
	                    asset.permissions = JSON.parse(permission.permid);
	                }
	            }
	        }
	
	        return $q.resolve(resp);
	    };
	
	    vm.mergeUserPermissions = function (resp) {
	        // $log.log(resp);
	        var usersList = [];
	        var data = resp[0].data.data;
	        for (var idx in data.assets) {
	            var asset = data.assets[idx];
	            for (var perm in data.permissions) {
	                var permission = data.permissions[perm];
	                if (asset.assetpath == permission.assetpath) {
	                    usersList.push({
	                        assetpath: asset.assetpath,
	                        name: asset.name,
	                        pname: asset.pname,
	                        assetid: permission.assetid,
	                        permid: permission.permid
	                    });
	                }
	            }
	        }
	        return $q.resolve(usersList);
	    };
	
	    vm.mergeAssetAssignments = function (resp) {
	        //$log.log(resp);
	        var data = resp.data.data;
	        var asset = data.asset[0];
	        asset.info = data.info;
	        asset.assg = data.assg;
	        asset.assginfo = data.assginfo;
	        asset.permissions = JSON.parse(data.permissions[0].permid);
	        //$log.log(asset);
	        return $q.resolve(asset);
	    };
	
	    vm.mergeFenceInfo = function (resp) {
	        var data = resp.data.data;
	        for (var idx in data.assets) {
	            var asset = data.assets[idx];
	            asset.info = [];
	            for (var pidx in data.info) {
	                var item = data.info[pidx];
	                if (asset.assetpath == item.assetpath) {
	                    asset.info.push(item);
	                }
	            }
	        }
	
	        return $q.resolve(resp);
	    };
	
	    vm.makeAssetMap = function (data) {
	        var assets = {};
	        for (var idx in data.assets) {
	            var asset = data.assets[idx];
	            var key = getMyPath(asset);
	            vm.addAssetInfo(asset);
	            assets[key] = asset;
	        }
	
	        return $q.resolve(assets);
	    };
	
	    vm.makePermissionMap = function (data) {
	        var permissions = {};
	        for (var idx in data.permissions) {
	            var permission = data.permissions[idx];
	            var key = getMyPath(permission);
	            permissions[key] = permission;
	        }
	
	        return $q.resolve(permissions);
	    };
	
	    vm.mergeMap = function (map1, map2) {
	        for (var idx in map1) {
	            if (idx in map2) {
	                for (var jdx in map2[idx]) {
	                    map1[idx][jdx] = map2[idx][jdx];
	                }
	            }
	        }
	        return map1;
	    };
	
	    function getMyPath(asset) {
	        var type = asset.assetpath;
	        if (!type) type = asset.grouppath;
	        if (!type) type = asset.rolepath;
	        if (!type) type = asset.userpath;
	        if (!type) type = asset.vehiclepath;
	        if (!type) type = asset.devicepath;
	        return type;
	    }
	
	    vm.validateResponse = function (resp) {
	        if (resp && resp.data && resp.data.data) {
	            return $q.resolve(resp.data.data);
	        }
	        return $q.reject(resp);
	    };
	
	    vm.makeAssetList = function (data) {
	        return $q.resolve(data.assets);
	    };
	
	    vm.makeMapOnAssetPath = function (data) {
	        // diff with makeAssetMap is that this function
	        // is directly reading from the array
	        // var data = resp.data.data;
	        var assets = {};
	        for (var idx in data) {
	            var asset = data[idx];
	            // vm.addAssetInfo(asset);
	            assets[asset.assetpath] = asset;
	        }
	        return $q.resolve(assets);
	    };
	
	    vm.slashCount = function (path) {
	        var count = 0;
	        for (var idx in path) {
	            if (path[idx] == SLASH) count++;
	        }
	
	        return count;
	    };
	
	    vm.sortOnAssetLevel = function (hashObj) {
	        var arrayObj = [];
	        for (var idx in hashObj) {
	            arrayObj.push(hashObj[idx]);
	        }
	
	        function compare(a, b) {
	            return a.info.assetlevel - b.info.assetlevel;
	        }
	
	        arrayObj.sort(compare);
	
	        return arrayObj;
	    };
	
	    vm.sortPaths = function (arrayObj) {
	        function compare(a, b) {
	            return vm.slashCount(a) - vm.slashCount(b);
	        }
	
	        arrayObj.sort(compare);
	
	        return arrayObj;
	    };
	
	    vm.getNextPathItemEnd = function (str, start) {
	        var slash = '/';
	
	        if (str === null) return -1;
	
	        if (start === null) start = 0;
	
	        if (start < 0 || start >= str.length) return -1;
	
	        if (str.charAt(start) !== slash) return -1;
	
	        if (str.substr(start, str.length).length < 4) return -1;
	
	        var firstSlash = str.indexOf(slash, start + 1);
	        if (firstSlash != -1 && firstSlash < str.length - 1) {
	            var secondSlash = str.indexOf(slash, firstSlash + 1);
	            if (secondSlash != -1) {
	                return secondSlash - 1;
	            } else {
	                return str.length - 1;
	            }
	        }
	
	        return -1;
	    };
	
	    vm.getNodesInPath = function (path) {
	        if (angular.isUndefined(path)) return [];
	
	        var nodesInPath = [];
	        var startIndex = 0;
	        var endIndex = 0;
	        var itemStartIndex = 0;
	        //$log.log("==================" + path);
	        while (itemStartIndex < path.length) {
	            endIndex = vm.getNextPathItemEnd(path, itemStartIndex);
	            if (endIndex == -1) return null;
	            //$log.log("endIndex " + endIndex);
	            if (endIndex < path.length) {
	                nodesInPath.push(path.substring(startIndex, endIndex + 1));
	            }
	            itemStartIndex = endIndex + 1;
	        }
	        //$log.log(nodesInPath);
	        return nodesInPath;
	    };
	
	    JSON.flatten = function (data) {
	        var result = {};
	
	        function recurse(cur, prop) {
	            if (Object(cur) !== cur) {
	                result[prop] = cur;
	            } else if (Array.isArray(cur)) {
	                for (var i = 0, l = cur.length; i < l; i++) {
	                    recurse(cur[i], prop + "[" + i + "]");
	                }if (l == 0) result[prop] = [];
	            } else {
	                var isEmpty = true;
	                for (var p in cur) {
	                    isEmpty = false;
	                    recurse(cur[p], prop ? prop + "." + p : p);
	                }
	                if (isEmpty && prop) result[prop] = {};
	            }
	        }
	
	        recurse(data, "");
	        return result;
	    };
	
	    JSON.flatten2 = function (data) {
	        var result = {};
	
	        function recurse(cur, prop) {
	            if (Object(cur) !== cur) {
	                result[prop] = cur;
	            } else if (Array.isArray(cur)) {
	                for (var i = 0, l = cur.length; i < l; i++) {
	                    if (_typeof(cur[i]) === 'object') {
	                        recurse(cur[i], prop + "[" + i + "]");
	                    } else {
	                        if (i == 0) {
	                            result[prop] = [];
	                        }
	                        result[prop].push(cur[i]);
	                    }
	                }
	                if (l == 0) result[prop] = [];
	            } else {
	                var isEmpty = true;
	                for (var p in cur) {
	                    isEmpty = false;
	                    recurse(cur[p], prop ? prop + "." + p : p);
	                }
	                if (isEmpty && prop) result[prop] = {};
	            }
	        }
	
	        recurse(data, "");
	        return result;
	    };
	
	    JSON.unflatten = function (data) {
	        "use strict";
	
	        if (Object(data) !== data || Array.isArray(data)) return data;
	        var regex = /\.?([^.\[\]]+)|\[(\d+)\]/g,
	            resultholder = {};
	        for (var p in data) {
	            var cur = resultholder,
	                prop = "",
	                m;
	            while (m = regex.exec(p)) {
	                cur = cur[prop] || (cur[prop] = m[2] ? [] : {});
	                prop = m[2] || m[1];
	            }
	            cur[prop] = data[p];
	        }
	        return resultholder[""] || resultholder;
	    };
	
	    vm.setIndirect = function (arr) {
	        for (var idx in arr) {
	            arr[idx].indirect = true;
	        }
	        return arr;
	    };
	
	    vm.spliceRedundantObjects = function (arr, key) {
	
	        var filteredByKey = {};
	        var filteredMap = [];
	
	        for (var idx in arr) {
	            var tempKey = arr[idx][key];
	            if (!(tempKey in filteredByKey)) {
	                filteredByKey[tempKey] = [];
	            }
	            filteredByKey[tempKey].push(arr[idx]);
	        }
	
	        for (var idx in filteredByKey) {
	            var itemArray = getMyItem(filteredByKey[idx]);
	            for (var jdx in itemArray) {
	                filteredMap.push(itemArray[jdx]);
	            }
	        }
	
	        function getMyItem(list) {
	            var obj = null;
	            var tempArray = [];
	            var id = null;
	
	            for (var idx in list) {
	                if (vm.getAssetType2(list[idx].grouppath) == appConstants.GROUP) {
	                    var tempId = vm.getAssetId2(list[idx][key]);
	                    if (id == null || tempId < id) {
	                        id = tempId;
	                        obj = list[idx];
	                        obj.indirect = true;
	                    }
	                } else {
	                    list[idx].indirect = false;
	                    tempArray.push(list[idx]);
	                }
	            }
	            if (obj != null) tempArray.push(obj);
	            return tempArray;
	        }
	
	        return filteredMap;
	    };
	
	    vm.arrayDiff = function (array1, array2, key) {
	
	        if (!array1 || array1 && !array1.length) return array2;
	
	        var filtered = [];
	        var found;
	
	        for (var idx in array2) {
	            found = false;
	            for (var jdx in array1) {
	                if (array2[idx][key] == array1[jdx][key]) {
	                    found = true;
	                }
	            }
	            if (!found) filtered.push(array2[idx]);
	        }
	
	        return filtered;
	    };
	
	    vm.returnValue = function (base, str) {
	        var path = str.split('.');
	        var tempPath = [];
	        var pathObj = {};
	        var tempBase = angular.copy(base);
	        var found = true;
	
	        for (var idx in path) {
	            pathObj[path[idx]] = path[idx].split('[');
	            for (var jdx in pathObj[path[idx]]) {
	                tempPath.push(pathObj[path[idx]][jdx].replace(']', ''));
	            }
	        }
	        tempPath.shift();
	        if (tempBase) {
	            for (var idx in tempPath) {
	                if (angular.isDefined(tempBase[tempPath[idx]])) {
	                    tempBase = tempBase[tempPath[idx]];
	                } else {
	                    found = false;
	                    break;
	                }
	            }
	        }
	        if (!found) {
	            return null;
	        } else {
	            return tempBase;
	        }
	    };
	}];

/***/ },
/* 18 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/11/2017.
	 */
	
	var treeDataService = exports.treeDataService = ["$log", "$q", "helperService", "groupAPIService", function treeDataService($log, $q, helperService, groupAPIService) {
	    'ngInject';
	
	    _classCallCheck(this, treeDataService);
	
	    var vm = this;
	    $log.log("treeDataService");
	
	    vm.collapsedStatus = false;
	    vm.globalGenericTree = null;
	
	    vm.getGenericTreeIndex = function (genericTree, asset) {
	        for (var idx in genericTree) {
	            if (genericTree[idx].info.assetpath == asset.assetpath) return idx;
	        }
	    };
	
	    vm.buildManagementTree = function (genericTree, key) {
	        //$log.log("buildManagementTree " + key);
	
	        if (genericTree === null) return null;
	
	        if (!('visited' in genericTree[key])) {
	            genericTree[key].visited = true;
	        } else if (genericTree[key].visited == true) {
	            //$log.log("Already visited: " + key);
	            return null;
	        }
	
	        var gtNode = genericTree[key];
	        gtNode.visited = true;
	
	        //$log.log(gtNode);
	        var utNode = {};
	        utNode.id = genericTree[key].info.assetpath;
	        utNode.title = gtNode.info.name;
	        utNode.info = gtNode.info;
	        utNode.items = [];
	        utNode.checkStatus = false;
	        utNode.collapsed = vm.collapsedStatus;
	
	        var resultNode = null;
	        var child = null;
	        if (gtNode.children !== null) {
	            for (var idx in gtNode.children) {
	                child = gtNode.children[idx];
	                //$log.log("parent: " + key + ", child = " + idx + ", type = " + child.ui_asset_type);
	                resultNode = vm.buildManagementTree(genericTree, vm.getGenericTreeIndex(genericTree, child));
	                //$log.log(resultNode);
	
	                if (resultNode !== null) {
	                    utNode.items.push(resultNode);
	                }
	            }
	        }
	
	        return utNode;
	    };
	
	    vm.createManagementTree = function (tempTree) {
	        // $log.log("genericTree", genericTree);
	        var genericTree = tempTree[0];
	        var groupTree = tempTree[1];
	
	        var uiTree = [];
	        for (var key in genericTree) {
	            var resultNode = vm.buildManagementTree(genericTree, key);
	            if (resultNode !== null) {
	                uiTree.push(resultNode);
	            }
	        }
	
	        if (vm.globalGenericTree == null) {
	            vm.globalGenericTree = uiTree;
	        }
	
	        if (vm.globalGenericTree[0]) vm.globalGenericTree[0].collapsed = true;
	        if (vm.globalGenericTree[0]) vm.globalGenericTree[0].loading = false;
	
	        // $log.log("createManagementTree", uiTree);
	        return $q.resolve([uiTree, groupTree]);
	    };
	
	    vm.createGenericTree = function (resp) {
	        // $log.log("createGenericTree", resp);
	        var groups = resp[0];
	        var groupTree = {};
	        // $log.log("mygroups", groups);
	
	        for (var ridx = 0; ridx < resp.length; ridx++) {
	            var assets = resp[ridx];
	            //add all the asset's allowed parent hierarchy to groupTree
	            for (var aidx in assets) {
	                var asset = assets[aidx];
	                //$log.log(asset);
	                var assetpath = asset.assetpath;
	                var pgrouppath = asset.pgrouppath;
	
	                if (!(assetpath in groupTree)) {
	                    groupTree[assetpath] = {};
	                    groupTree[assetpath].info = asset;
	                    groupTree[assetpath].children = null;
	                    // groupTree[assetpath].collapsed = vm.collapsedStatus;
	
	                    if (pgrouppath in groups && pgrouppath != assetpath) {
	                        if (!(pgrouppath in groupTree)) {
	                            groupTree[pgrouppath] = {};
	                            groupTree[pgrouppath].info = groups[pgrouppath];
	                            groupTree[pgrouppath].children = {};
	                            groupTree[pgrouppath].children[assetpath] = asset;
	                            // groupTree[pgrouppath].collapsed = vm.collapsedStatus;
	                        } else {
	                            if (groupTree[pgrouppath].children == null) {
	                                groupTree[pgrouppath].children = {};
	                            }
	                            groupTree[pgrouppath].children[assetpath] = asset;
	                        }
	                    }
	                }
	            }
	        }
	
	        // console.log("createGenericTree", groupTree);
	        var assetArray = helperService.sortOnAssetLevel(groupTree);
	        // console.log("createGenericTree", assetArray);
	        return $q.resolve([assetArray, groupTree]);
	    };
	
	    vm.handleSuccess = function (resp) {
	        console.log('handle success');
	        console.log(resp);
	        return $q.resolve(resp);
	    };
	
	    vm.handleFailure = function (resp) {
	        console.log('handle failure');
	        console.log(resp);
	        return $q.reject(resp);
	    };
	
	    vm.getManagementTree = function (body) {
	        return groupAPIService.getMyDirectAssetsMap(body).then(vm.createGenericTree, vm.handleFailure).then(vm.createManagementTree, vm.handleFailure);
	    };
	}];

/***/ },
/* 19 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/11/2017.
	 */
	var loginService = exports.loginService = ["$rootScope", "$log", "authService", "requestService", "$inDialog", function loginService($rootScope, $log, authService, requestService, $inDialog) {
	    'ngInject';
	
	    _classCallCheck(this, loginService);
	
	    $log.log("loginService");
	    var vm = this;
	    vm.username = '';
	    vm.password = '';
	    vm.listeners = {};
	
	    vm.addListener = function (key, listener) {
	        if (!(key in vm.listeners)) {
	            vm.listeners[key] = [];
	        }
	
	        if (vm.listeners[key].indexOf(listener) === -1) {
	            vm.listeners[key].push(listener);
	        }
	    };
	
	    vm.callListeners = function (msg, key) {
	        if (key in vm.listeners) {
	            for (var idx in vm.listeners[key]) {
	                vm.listeners[key][idx](msg, key);
	            }
	        }
	    };
	
	    vm.login = function (username, password) {
	        return requestService.firePost('/authenticate', {
	            "user": {
	                email: username,
	                password: password
	            }
	        }).then(function (resp) {
	            // $log.log(resp);
	            vm.username = username;
	            vm.password = password;
	            vm.callListeners(resp, 'loginSuccess');
	            return resp;
	        });
	    };
	
	    vm.logout = function () {
	        authService.logout && authService.logout();
	        $rootScope.showLoginDialog = true;
	        vm.checkLogin();
	    };
	
	    vm.isAuthed = function () {
	        return authService.isAuthed ? authService.isAuthed() : false;
	    };
	
	    vm.checkLogin = function () {
	        if ($rootScope.showLoginDialog) {
	            $inDialog.show({
	                controller: 'LoginDialogController',
	                templateUrl: 'app/main/login/login.html',
	                clickOutsideToClose: false,
	                escapeToClose: false,
	                height: 300,
	                width: 400
	            });
	        }
	    };
	
	    requestService.addAuthListener(vm.checkLogin);
	}];

/***/ },
/* 20 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/11/2017.
	 */
	var appConstants = exports.appConstants = function appConstants() {
	    _classCallCheck(this, appConstants);
	
	    return {
	        GROUP: 'in.intellicar.assets.group',
	        VEHICLE: 'in.intellicar.assets.vehicle',
	        USER: 'in.intellicar.assets.user',
	        LOCALUSER: 'in.intellicar.assets.user.localuser',
	        ROLE: 'in.intellicar.assets.role',
	        DEVICE: 'in.intellicar.assets.device',
	        INFO: 'in.intellicar.assets.group',
	        PROFILE: 'in.intellicar.assets.profile',
	        SIMCARD: 'in.intellicar.assets.simcards',
	        ROOT_GROUP: '/2/6/'
	    };
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/11/2017.
	 */
	var requestService = exports.requestService = ["$log", "$http", "$q", "API_HOST", "authService", function requestService($log, $http, $q, API_HOST, authService) {
	    'ngInject';
	
	    _classCallCheck(this, requestService);
	
	    var vm = this;
	    var authListeners = [];
	    var errorStatusCodes = [400, 401, 403];
	
	    $log.log("requestService");
	
	    vm.getToken = function () {
	        return authService.getToken();
	    };
	
	    vm.firePost = function (api, body, auth) {
	        api = API_HOST + api;
	
	        if (body === null) body = {};
	
	        if (auth == null || auth) auth = true;else auth = false;
	
	        if (!auth) return $http.post(api, body);
	
	        if (authService.isAuthed() || api.indexOf('gettoken') > 0) {
	            return $http.post(api, body).catch(vm.handleFailure);
	        } else {
	            $log.log("user not authenticated");
	            vm.checkLogin();
	            return $q.reject({ 'auth': false });
	        }
	    };
	
	    vm.fireGet = function (api, auth) {
	        api = API_HOST + api;
	
	        if (auth == null || auth) auth = true;else auth = false;
	
	        if (!auth) return $http.post(api);
	
	        if (authService.isAuthed() || api.indexOf('gettoken') > 0) {
	            return $http.post(api).catch(vm.handleFailure);
	        } else {
	            $log.log("user not authenticated");
	            vm.checkLogin();
	            return $q.reject({ 'auth': false });
	        }
	    };
	
	    vm.handleFailure = function (resp) {
	        //$log.log("API returned error");
	        //$log.log(resp);
	        if (errorStatusCodes.indexOf(resp.status) != -1) {
	            //$log.log("failure status code");
	            //vm.checkLogin(true);
	        }
	
	        return $q.reject(resp);
	    };
	
	    vm.checkLogin = function (force) {
	        if (!authService.isAuthed() || force) {
	            angular.forEach(authListeners, function (value, key) {
	                // calling callback
	                // $log.log("calling show login");
	                value();
	            });
	        }
	    };
	
	    vm.addAuthListener = function (callback) {
	        // $log.log('adding login callback');
	        authListeners.push(callback);
	    };
	
	    // If required. It is periodically called from maincontroller to check for valid token
	    // currently disabled in maincontroller
	    vm.isLoginTokenValid = function () {
	        //$log.log("isLoginTokenVaild");
	        vm.checkLogin(false);
	    };
	}];

/***/ },
/* 22 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by smiddela on 25/02/17.
	 */
	
	var assetAPIService = exports.assetAPIService = ["$log", "$q", "requestService", "helperService", "$inError", function assetAPIService($log, $q, requestService, helperService, $inError) {
	    'ngInject';
	
	    _classCallCheck(this, assetAPIService);
	
	    $log.log("assetAPIService");
	    var vm = this;
	
	    vm.deleteAsset = function (body) {
	        return requestService.firePost('/api/asset/delete', body);
	    };
	
	    vm.getMyCreateAssetPermInfo = function (body) {
	        return requestService.firePost('/api/asset/getmycreateassetperminfo', body);
	    };
	
	    vm.getMyEditDeleteAssetPermInfo = function (body) {
	        return requestService.firePost('/api/asset/getmyeditdeleteassetperminfo', body);
	    };
	
	    vm.validateAssetName = function (body) {
	        return requestService.firePost('/api/asset/validateassetname', body);
	    };
	
	    vm.handleResponse = function (resp) {
	        //$log.log("handleResponse");
	        return $q.resolve(resp);
	    };
	
	    vm.handleFailure = function (resp) {
	        $inError.add(resp);
	        $log.log("handleFailure ", resp);
	        return $q.reject(resp);
	    };
	
	    vm.getMyEditDeleteAssetPermInfoMap = function (body) {
	        return vm.getMyEditDeleteAssetPermInfo(body).then(helperService.validateResponse).then(helperService.makePermissionMap).then(vm.handleResponse, vm.handleFailure);
	    };
	
	    vm.getMyCreateAssetPermInfoMap = function (body) {
	        return vm.getMyCreateAssetPermInfo(body).then(helperService.validateResponse).then(vm.handleResponse, vm.handleFailure);
	    };
	}];

/***/ },
/* 23 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/11/2017.
	 */
	var groupAPIService = exports.groupAPIService = ["$log", "$q", "requestService", "helperService", "appConstants", "$inError", function groupAPIService($log, $q, requestService, helperService, appConstants, $inError) {
	        'ngInject';
	
	        _classCallCheck(this, groupAPIService);
	
	        $log.log("groupAPIService");
	        var vm = this;
	
	        var root_pgrouppath = '/2/6/';
	
	        vm.encloseBody = function (data) {
	                // return data;
	                return { group: data };
	        };
	
	        vm.getAssetType = function (type, body) {
	
	                body = angular.copy(body);
	
	                if (!body.pgrouppath) {
	                        body.pgrouppath = root_pgrouppath;
	                }
	                if (!body.assettype) {
	                        body.assettype = type;
	                }
	
	                return body;
	        };
	
	        vm.listAssets = function (body) {
	                // $log.log("listAssets");
	                // body = {}
	                return requestService.firePost('/api/group/listassets', body);
	        };
	
	        vm.getMyGroups = function (body) {
	                // $log.log("getMyGroups");
	                body = vm.getAssetType(appConstants.GROUP, body);
	                return vm.listAssets(body);
	        };
	
	        vm.getMyDirectGroups = function (body) {
	                // $log.log("getMyGroups");
	                body = vm.getAssetType(appConstants.GROUP, body);
	                return requestService.firePost('/api/user/getmygroups', body);
	        };
	
	        vm.getMyVehicles = function (body) {
	                // $log.log("getMyVehicles");
	                body = vm.getAssetType(appConstants.VEHICLE, body);
	                return vm.listAssets(body);
	        };
	
	        vm.getMyUsers = function (body) {
	                // $log.log("getMyUsers");
	                body = vm.getAssetType(appConstants.USER, body);
	                return vm.listAssets(body);
	        };
	
	        vm.getMyRoles = function (body) {
	                // $log.log("getMyRoles");
	                body = vm.getAssetType(appConstants.ROLE, body);
	                return vm.listAssets(body);
	        };
	
	        vm.getMyDevices = function (body) {
	                // $log.log("getMyDevices");
	                body = vm.getAssetType(appConstants.DEVICE, body);
	                return vm.listAssets(body);
	        };
	
	        vm.assignUser = function (body) {
	                return requestService.firePost('/api/group/assignuser', body);
	        };
	
	        vm.deassignUser = function (body) {
	                return requestService.firePost('/api/group/deassignuser', body);
	        };
	
	        vm.assignRole = function (body) {
	                return requestService.firePost('/api/group/assignrole', body);
	        };
	
	        vm.deassignRole = function (body) {
	                return requestService.firePost('/api/group/deassignrole', body);
	        };
	
	        vm.getAssignedUsers = function (body) {
	                return requestService.firePost('/api/group/getassignedusers', body);
	        };
	
	        vm.getAssignedRoles = function (body) {
	                return requestService.firePost('/api/group/getassignedroles', body);
	        };
	
	        vm.getMyAssignableUsers = function (body) {
	                return requestService.firePost('/api/group/getmyassignableusers', body);
	        };
	
	        vm.getMyAssignableRoles = function (body) {
	                return requestService.firePost('/api/group/getmyassignableroles', body);
	        };
	
	        vm.deleteAsset = function (body) {
	                return requestService.firePost('/api/asset/delete', body);
	        };
	
	        vm.createGroup = function (body) {
	                return requestService.firePost('/api/group/create', body).then(helperService.validateResponse);
	        };
	
	        vm.handleResponse = function (resp) {
	                //$log.log("handleResponse");
	                return $q.resolve(resp);
	        };
	
	        vm.handleFailure = function (resp) {
	                $inError.add(resp);
	                $log.log("handleFailure ", resp);
	                return $q.reject(resp);
	        };
	
	        vm.listAssetsMap = function (body) {
	                return vm.listAssets(body).then(helperService.validateResponse).then(helperService.makeAssetMap).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getAssignedRolesMap = function (body) {
	                return vm.getAssignedRoles(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyAssignableUsersMap = function (body) {
	                return vm.getMyAssignableUsers(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyAssignableRolesMap = function (body) {
	                return vm.getMyAssignableRoles(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getAssignedUsersMap = function (body) {
	                return vm.getAssignedUsers(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyGroupsMap = function (body) {
	                // $log.log("getMyGroupsMap");
	                return vm.getMyGroups(body).then(helperService.validateResponse).then(helperService.makeAssetMap).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyDirectGroupsMap = function (body) {
	                // $log.log("getMyGroupsMap");
	                return vm.getMyDirectGroups(body).then(helperService.validateResponse).then(helperService.makeAssetMap).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyVehiclesMap = function (body) {
	                //$log.log("getMyVehiclesMap");
	                return vm.getMyVehicles(body).then(helperService.validateResponse).then(helperService.makeAssetMap).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyUsersMap = function (body) {
	                //$log.log("getMyUsersMap");
	                return vm.getMyUsers(body).then(helperService.validateResponse).then(helperService.makeAssetMap).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyUsersMapList = function (body) {
	                //$log.log("getMyUsersMap");
	                return vm.getMyUsers(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyRolesMap = function (body) {
	                // $log.log("getMyRolesMap");
	                return vm.getMyRoles(body).then(helperService.validateResponse).then(helperService.makeAssetMap).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyRolesList = function (body) {
	                // $log.log("getMyRolesMap");
	                return vm.getMyRoles(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyDevicesMap = function (body) {
	                // $log.log("getMyDevicesMap");
	                return vm.getMyDevices(body).then(helperService.mergeAssetPermissions).then(helperService.makeAssetMap).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.handleDirectAssetResponse = function (resp) {
	                // $log.log("groupAPIService handleDirectAssetResponse");
	                return $q.resolve(resp);
	        };
	
	        vm.getMyDirectAssetsMap = function (body) {
	                //$log.log("groupAPIService getMyDirectAssetsMap");
	                var gPromise = vm.getMyDirectGroupsMap(body);
	                // var vPromise = vm.getMyVehiclesMap(body);
	                // var uPromise = vm.getMyUsersMap(body);
	                // var rPromise = vm.getMyRolesMap(body);
	                // var dPromise = vm.getMyDevicesMap(body);
	
	                // return $q.all([gPromise, vPromise, uPromise, rPromise, dPromise])
	                return $q.all([gPromise]).then(vm.handleDirectAssetResponse, vm.handleFailure);
	        };
	}];

/***/ },
/* 24 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/11/2017.
	 */
	
	var userAPIService = exports.userAPIService = ["$log", "$q", "requestService", "helperService", "$inError", function userAPIService($log, $q, requestService, helperService, $inError) {
	        'ngInject';
	
	        _classCallCheck(this, userAPIService);
	
	        $log.log("userAPIService");
	        var vm = this;
	
	        vm.encloseBody = function (data) {
	                // return data;
	                return { user: data };
	        };
	
	        vm.getMyGroups = function (body) {
	                // $log.log("getMyGroups");
	                // body = vm.encloseBody(body);
	                return requestService.firePost('/api/group/listassets', body);
	        };
	
	        vm.getAssignedGroups = function (body) {
	                // $log.log("getMyGroups");
	                // body = vm.encloseBody(body);
	                return requestService.firePost('/api/user/getassignedgroups', body);
	        };
	
	        vm.getAssignedRoles = function (body) {
	                // $log.log("getMyGroups");
	                // body = vm.encloseBody(body);
	                return requestService.firePost('/api/user/getassignedroles', body);
	        };
	
	        vm.getMyAssignableGroups = function (body) {
	                return requestService.firePost('/api/user/getmyassignablegroups', body);
	        };
	
	        vm.getMyAssignableRoles = function (body) {
	                return requestService.firePost('/api/user/getmyassignableroles', body);
	        };
	
	        vm.assignRole = function (body) {
	                return requestService.firePost('/api/user/assignrole', body);
	        };
	
	        vm.deassignRole = function (body) {
	                return requestService.firePost('/api/user/deassignrole', body);
	        };
	
	        vm.createUser = function (body) {
	                return requestService.firePost('/api/user/createlocaluser', body).then(helperService.validateResponse);
	        };
	
	        vm.handleResponse = function (resp) {
	                // $log.log("handleResponse");
	                // $log.log(resp);
	                return $q.resolve(resp);
	        };
	
	        vm.handleFailure = function (resp) {
	                $log.log("handleFailure ");
	                $inError.add(resp);
	                $log.log(resp);
	                return $q.reject(resp);
	        };
	
	        vm.getAssignedRolesMap = function (body) {
	                return vm.getAssignedRoles(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyAssignableRolesMap = function (body) {
	                return vm.getMyAssignableRoles(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyAssignableGroupsMap = function (body) {
	                return vm.getMyAssignableGroups(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(helperService.filterAssetGroups).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getAssignedGroupsMap = function (body) {
	                return vm.getAssignedGroups(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyGroupsMap = function (body) {
	                // $log.log("getMyGroupsMap");
	                return vm.getMyGroups(body).then(helperService.validateResponse, vm.handleFailure).then(helperService.makeAssetMap, vm.handleFailure).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyAssignedGroupsMap = function (body) {
	                // $log.log("getMyGroupsMap");
	                return vm.getMyAssignedGroups(body).then(helperService.validateResponse, vm.handleFailure).then(helperService.makeAssetMap, vm.handleFailure).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyAssetGroupsMap = function (body) {
	                //$log.log("getMyAssetGroupsMap");
	                return vm.getMyAssetGroups(body).then(helperService.validateResponse, vm.handleFailure).then(helperService.makeAssetMap, vm.handleFailure).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyVehiclesMap = function (body) {
	                // $log.log("getMyVehiclesMap");
	                return vm.getMyVehicles(body).then(helperService.validateResponse, vm.handleFailure).then(helperService.makeAssetMap, vm.handleFailure).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyUsersMap = function (body) {
	                // $log.log("getMyUsersMap");
	                return vm.getMyUsers(body).then(helperService.validateResponse, vm.handleFailure).then(helperService.makeAssetMap, vm.handleFailure).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyUsersMapList = function (body) {
	                // $log.log("getMyRolesMap");
	                return vm.getMyUsers(body).then(helperService.validateResponse, vm.handleFailure).then(helperService.makeAssetList, vm.handleFailure).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyRolesMap = function (body) {
	                // $log.log("getMyRolesMap");
	                return vm.getMyRoles(body).then(helperService.validateResponse, vm.handleFailure).then(helperService.makeAssetMap, vm.handleFailure).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyRolesList = function (body) {
	                // $log.log("getMyRolesMap");
	                return vm.getMyRoles(body).then(helperService.validateResponse, vm.handleFailure).then(helperService.makeAssetList, vm.handleFailure).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyDevicesMap = function (body) {
	                // $log.log("getMyDevicesMap");
	                return vm.getMyDevices(body).then(helperService.validateResponse, vm.handleFailure).then(helperService.makeAssetMap, vm.handleFailure).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.handleDirectAssetResponse = function (resp) {
	                //$log.log("userAPIService handleDirectAssetResponse");
	                // $log.log(resp);
	                return $q.resolve(resp);
	        };
	
	        vm.getMyDirectAssetsMap = function (body) {
	                // $log.log("userAPIService getMyDirectAssetsMap");
	                var gPromise = vm.getMyGroupsMap(body);
	                var vPromise = vm.getMyVehiclesMap(body);
	                var uPromise = vm.getMyUsersMap(body);
	                var rPromise = vm.getMyRolesMap(body);
	                var dPromise = vm.getMyDevicesMap(body);
	                var myPromise = vm.getMyInfoMap(body);
	
	                return $q.all([gPromise, vPromise, uPromise, rPromise, dPromise, myPromise]).then(vm.handleDirectAssetResponse, vm.handleFailure);
	        };
	}];

/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by smiddela on 02/03/17.
	 */
	
	var roleAPIService = exports.roleAPIService = ["$log", "$q", "requestService", "helperService", "appConstants", "$inError", function roleAPIService($log, $q, requestService, helperService, appConstants, $inError) {
	        'ngInject';
	
	        _classCallCheck(this, roleAPIService);
	
	        $log.log("roleAPIService");
	        var vm = this;
	
	        vm.getAssignedUsers = function (body) {
	                return requestService.firePost('/api/role/getassignedusers', body);
	        };
	
	        vm.getAssignedGroups = function (body) {
	                return requestService.firePost('/api/role/getassignedgroups', body);
	        };
	
	        vm.getMyAssignableUsers = function (body) {
	                return requestService.firePost('/api/role/getmyassignableusers', body);
	        };
	
	        vm.getMyAssignableGroups = function (body) {
	                return requestService.firePost('/api/role/getmyassignablegroups', body);
	        };
	
	        vm.getMyPermissions = function (body) {
	                return requestService.firePost('/api/role/getmypermissions', body);
	        };
	
	        vm.getAssignedPermissions = function (body) {
	                return requestService.firePost('/api/role/getassignedpermissions', body);
	        };
	
	        vm.addPermission = function (body) {
	                return requestService.firePost('/api/role/addpermission', body);
	        };
	
	        vm.deletePermission = function (body) {
	                return requestService.firePost('/api/role/deletepermission', body);
	        };
	
	        vm.createRole = function (body) {
	                return requestService.firePost('/api/role/create', body).then(helperService.validateResponse);
	        };
	
	        vm.handleResponse = function (resp) {
	                //$log.log("handleResponse");
	                return $q.resolve(resp);
	        };
	
	        vm.handleFailure = function (resp) {
	                $inError.add(resp);
	                $log.log("handleFailure ", resp);
	                return $q.reject(resp);
	        };
	
	        vm.getAssignedGroupsMap = function (body) {
	                return vm.getAssignedGroups(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getAssignedUsersMap = function (body) {
	                return vm.getAssignedUsers(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyAssignableGroupsMap = function (body) {
	                return vm.getMyAssignableGroups(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(helperService.filterAssetGroups).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyAssignableUsersMap = function (body) {
	                return vm.getMyAssignableUsers(body).then(helperService.validateResponse).then(helperService.makeAssetList).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getMyPermissionsMap = function (body) {
	                return vm.getMyPermissions(body).then(helperService.validateResponse).then(vm.handleResponse, vm.handleFailure);
	        };
	
	        vm.getAssignedPermissionsMap = function (body) {
	                return vm.getAssignedPermissions(body).then(helperService.validateResponse).then(vm.handleResponse, vm.handleFailure);
	        };
	}];

/***/ },
/* 26 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	        value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by smiddela on 01/03/17.
	 */
	
	var helperTestService = exports.helperTestService = ["$log", "$q", "helperService", function helperTestService($log, $q, helperService) {
	        'ngInject';
	
	        _classCallCheck(this, helperTestService);
	
	        $log.log("helperTestService");
	        var vm = this;
	
	        var path = void 0;
	        var ASSET_ID = void 0;
	        var PARENT_PATH = void 0;
	        var PARENT_ID = void 0;
	        var ASSET_TYPE_ID = void 0;
	
	        vm.test1 = function () {
	                // console.log("TEST1");
	                path = '/2/6/';
	                ASSET_ID = 6;
	                PARENT_PATH = '/2/6/';
	                PARENT_ID = 6;
	                ASSET_TYPE_ID = 2;
	        };
	
	        vm.test2 = function () {
	                // console.log("TEST2");
	                path = '/2/61/5/72/';
	                ASSET_ID = 72;
	                PARENT_PATH = '/2/61/';
	                PARENT_ID = 61;
	                ASSET_TYPE_ID = 5;
	        };
	
	        vm.test3 = function () {
	                // console.log("TEST3");
	                path = '/2/6/2/144/2/145/2/148/5/156/';
	                ASSET_ID = 156;
	                PARENT_PATH = '/2/6/2/144/2/145/2/148/';
	                PARENT_ID = 148;
	                ASSET_TYPE_ID = 5;
	        };
	
	        vm.runTest = function () {
	                var assetid = helperService.getAssetId2(path);
	                if (assetid != ASSET_ID) console.log("GET_ASSET_ID failed", path, "computed", assetid, "Expected", ASSET_ID);
	
	                var parentpath = helperService.getParentPath2(path);
	                if (parentpath != PARENT_PATH) console.log("GET_PARENT_PATH failed", path, "computed", parentpath, "Expected", PARENT_PATH);
	
	                var parentid = helperService.getParentId2(path);
	                if (parentid != PARENT_ID) console.log("GET_PARENT_ID failed", path, "computed", parentid, "Expected", PARENT_ID);
	
	                var assettypeid = helperService.getAssetTypeId2(path);
	                if (assettypeid != ASSET_TYPE_ID) console.log("GET_ASSET_TYPE_ID failed", path, "computed", assettypeid, "Expected", ASSET_TYPE_ID);
	        };
	
	        vm.test1();
	        vm.runTest();
	
	        vm.test2();
	        vm.runTest();
	
	        vm.test3();
	        vm.runTest();
	}];

/***/ },
/* 27 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 4/28/2017.
	 */
	var portalLoginService = exports.portalLoginService = ["$http", "$rootScope", "$cookieStore", "API_HOST", function portalLoginService($http, $rootScope, $cookieStore, API_HOST) {
	    'ngInject';
	    // Service logic
	    // ...
	
	    _classCallCheck(this, portalLoginService);
	
	    var tokenHandler = {};
	    var token;
	    var user;
	
	    // var projects; // temp implementation
	    var tempLoggedin = false;
	
	    var observerCallbacks = [];
	
	    if (angular.isDefined($cookieStore.get('userData'))) {
	        // temp login
	        var e = $cookieStore.get('email');
	        var p = $cookieStore.get('password');
	
	        $http.post(API_HOST + '/authenticate', { email: e, password: p }).then(function (response, status, header, config) {
	            set(response.data.token);
	            user = response.data.user;
	            $rootScope.authUser = response.data.user;
	            // projects = response.data.projects;
	            tempLoggedin = true;
	            notifyObservers();
	        }, function (data, status, header, config) {
	            console.log('login error');
	        });
	
	        // end temp login
	    }
	
	    //login
	    var _login = function _login(username, password, callback, failure) {
	        $http.post(API_HOST + '/authenticate', { email: username, password: password }).then(function (response, status, header, config) {
	            set(response.data.token);
	            user = response.data.user;
	            $rootScope.authUser = response.data.user;
	            // projects = response.data.projects;
	            $cookieStore.put('token', token);
	            $cookieStore.put('userData', $rootScope.authUser);
	            console.log(response);
	            tempLoggedin = true;
	            notifyObservers();
	            callback(response);
	            $cookieStore.put('email', username);
	            $cookieStore.put('password', password);
	            $cookieStore.put('loggedIn', true);
	        }, function (data, status, header, config) {
	            failure(data);
	        });
	    };
	    //end login
	    var notifyObservers = function notifyObservers() {
	        angular.forEach(observerCallbacks, function (callback) {
	            callback();
	        });
	    };
	
	    var set = function set(newToken) {
	        token = newToken;
	    };
	
	    tokenHandler.get = function () {
	        return token;
	    };
	
	    var wrapActions = function wrapActions(resource, actions) {
	        var wrappedResource = resource;
	        for (var i = 0; i < actions.length; i++) {
	            tokenWrapper(wrappedResource, actions[i]);
	        }
	        // return modified copy of resource
	        return wrappedResource;
	    };
	
	    // wraps resource action to send request with auth token
	    var tokenWrapper = function tokenWrapper(resource, action) {
	        // copy original action
	        resource['_' + action] = resource[action];
	        resource[action] = function (data, success, error) {
	            return resource['_' + action](angular.extend({}, data || {}, { token: tokenHandler.get() }), success, error);
	        };
	    };
	
	    function putCookies(name, data) {
	        var str;
	        try {
	            str = JSON.parse(data);
	        } catch (e) {
	            str = data;
	        }
	        localStorage.setItem(name, data);
	    }
	
	    // Public API here
	    return {
	        wrapActions: wrapActions,
	        getUser: function getUser() {
	            return user;
	        },
	        getProjects: function getProjects() {
	            return projects;
	        },
	        onTempLogin: function onTempLogin(callback) {
	            observerCallbacks.push(callback);
	        },
	        login: function login(u, p, c, f) {
	            return _login(u, p, c, f);
	        },
	        isTempLogged: function isTempLogged() {
	            return tempLoggedin;
	        },
	        getToken: tokenHandler.get
	    };
	}];

/***/ },
/* 28 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/11/2017.
	 */
	var $inDialog = exports.$inDialog = function $inDialog() {
	    'ngInject';
	
	    _classCallCheck(this, $inDialog);
	};

/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 *  Created by Rinas Musthafa on 2/11/2017.
	 *
	 *    NOTE : You have to initialize it once in the index.html file.
	 *
	 *  Params
	 *
	 *      controller = [ string ] ngController name
	 *      templateUrl = [ string ] url of the HTML template
	 *      clickOutsideToClose = [ boolean ] enable/disable close action when user click outside of the dialog / default = true
	 *      escapeToClose = [ boolean ] enable/disable close acton when user press escape button / default = true
	 *      height = [ int ] dialog height
	 *      width = [ int ] dialog width
	 *
	 */
	var inDialog = exports.inDialog = function () {
	    function inDialog() {
	        'ngInject';
	
	        _classCallCheck(this, inDialog);
	
	        this.restrict = 'E';
	        this.scope = {};
	        this.templateUrl = 'app/widgets/directives/inDialog/in.dialog.html';
	    }
	
	    _createClass(inDialog, [{
	        key: 'controller',
	        value: ["$inDialog", "$scope", function controller($inDialog, $scope) {
	            'ngInject';
	
	            $scope.active = false;
	            $scope.clickOutsideToClose = true;
	            $scope.escapeToClose = true;
	
	            var hide = function hide(apply) {
	                $scope.active = false;
	                if (apply) {
	                    $scope.$apply();
	                }
	            };
	
	            var show = function show(data) {
	                if (data && data.controller != null && data.templateUrl != null) {
	
	                    $scope.active = true;
	                    $scope.style = '';
	
	                    $scope.data = angular.copy(data);
	
	                    if ($scope.data.height) {
	                        $scope.style += 'height: ' + $scope.data.height + 'px; ';
	                        $scope.style += 'top: 50%; ';
	                        $scope.style += 'margin-top: ' + -1 * $scope.data.height / 2 + 'px; ';
	                    }
	                    if ($scope.data.width) {
	                        $scope.style += 'width: ' + $scope.data.width + 'px; ';
	                        $scope.style += 'left: 50%; ';
	                        $scope.style += 'margin-left: ' + -1 * $scope.data.width / 2 + 'px; ';
	                    }
	
	                    if ($scope.data.clickOutsideToClose != null) {
	                        $scope.clickOutsideToClose = $scope.data.clickOutsideToClose;
	                    }
	                    if ($scope.data.escapeToClose != null) {
	                        $scope.escapeToClose = $scope.data.escapeToClose;
	                    }
	                }
	            };
	
	            $scope.backDropClose = function () {
	                if ($scope.data.clickOutsideToClose) {
	                    hide();
	                }
	            };
	
	            $(window).keydown(function ($event) {
	                if ($event.keyCode == 27) {
	                    if ($scope.escapeToClose) {
	                        hide(true);
	                    }
	                }
	            });
	
	            $inDialog.hide = hide;
	
	            $inDialog.show = show;
	        }]
	    }]);
	
	    return inDialog;
	}();

/***/ },
/* 30 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/9/2017.
	 */
	var dynamicController = exports.dynamicController = function () {
	    function dynamicController() {
	        'ngInject';
	
	        _classCallCheck(this, dynamicController);
	
	        this.restrict = 'A';
	        this.terminal = true;
	        this.priority = 100000;
	    }
	
	    _createClass(dynamicController, [{
	        key: 'controller',
	        value: ["$scope", "$compile", "$parse", function controller($scope, $compile, $parse) {
	            'ngInject';
	
	            $scope.compile = $compile;
	            $scope.parse = $parse;
	        }]
	    }, {
	        key: 'link',
	        value: function link(scope, elem) {
	            var name = scope.parse(elem.attr('dynamic-controller'))(scope);
	            elem.removeAttr('dynamic-controller');
	            elem.attr('ng-controller', name);
	            scope.compile(elem)(scope);
	        }
	    }]);
	
	    return dynamicController;
	}();

/***/ },
/* 31 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * Created by Rinas Musthafa on 2/9/2017.
	 */
	
	var setDom = exports.setDom = function () {
	    function setDom() {
	        'ngInject';
	
	        _classCallCheck(this, setDom);
	
	        this.restrict = 'A';
	        this.scope = {
	            'widgetData': '='
	        };
	    }
	
	    _createClass(setDom, [{
	        key: 'link',
	        value: function link(scope, elm, attr) {
	            var widget = scope.widgetData;
	            flowManager.widgetData[widget.tag] = { DOM: elm, widget: widget };
	            flowManager.setScope(widget);
	        }
	    }]);
	
	    return setDom;
	}();

/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZjkwZjM4MjRkYmQxMDMzMjY3NjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5tb2R1bGUuanM/YWE0MSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2luZGV4LmNvbmZpZy5qcz85ZDUxIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucm91dGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcz9mNTEyIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvaW5kZXgucnVuLmpzP2Y5ZDMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9tYWluL21haW4uY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzPzMxYTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9mbG93TWFuYWdlci9mbG93TWFuYWdlci5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZmxvd01hbmFnZXIvZmxvd01hbmFnZXIuY29udHJvbGxlci5qcz8xM2UxIiwid2VicGFjazovLy8uL3NyYy9hcHAvZmxvd01hbmFnZXIvZ3JpZC5jb250cm9sbGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZmxvd01hbmFnZXIvZ3JpZC5jb250cm9sbGVyLmpzP2E4ZTIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wb3J0YWwvbG9naW4vcG9ydGFsLmxvZ2luLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wb3J0YWwvbG9naW4vcG9ydGFsLmxvZ2luLmNvbnRyb2xsZXIuanM/N2Y1ZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3BvcnRhbC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wb3J0YWwvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzPzI5NzMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wb3J0YWwvaHR0cFNlcnZpY2UvaHR0cFNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9wb3J0YWwvaHR0cFNlcnZpY2UvaHR0cFNlcnZpY2UuanM/ZmI1ZiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dpZGdldHMvY29tbW9uL3ZpZGVvUGxheWVyL3ZpZGVvLnBsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dpZGdldHMvY29tbW9uL3ZpZGVvUGxheWVyL3ZpZGVvLnBsYXllci5qcz8wNmFmIiwid2VicGFjazovLy8uL3NyYy9hcHAvd2lkZ2V0cy9jb21tb24vM2RQbGF5ZXIvM2QucGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvd2lkZ2V0cy9jb21tb24vM2RQbGF5ZXIvM2QucGxheWVyLmpzP2JhY2IiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93aWRnZXRzL2NvbW1vbi90aW1lbGluZS90aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dpZGdldHMvY29tbW9uL3RpbWVsaW5lL3RpbWVsaW5lLmpzP2VmZGIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93aWRnZXRzL2NvbW1vbi9jb25maWdXaWRnZXQvY29uZmlnLndpZGdldC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dpZGdldHMvY29tbW9uL2NvbmZpZ1dpZGdldC9jb25maWcud2lkZ2V0LmpzP2U4NWEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93aWRnZXRzL2NvbW1vbi93aWRnZXRDb25uZWN0b3Ivd2lkZ2V0LmNvbm5lY3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dpZGdldHMvY29tbW9uL3dpZGdldENvbm5lY3Rvci93aWRnZXQuY29ubmVjdG9yLmpzPzg2ZDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9mbG93TWFuYWdlci9ncmlkLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9mbG93TWFuYWdlci9ncmlkLnNlcnZpY2UuanM/ZjI4MiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NlcnZpY2VzL2F1dGguc2VydmljZS5qcz8yYTYyIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2VydmljZXMvaGVscGVyLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZS5qcz8xNDNhIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2VydmljZXMvdHJlZWRhdGEuc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NlcnZpY2VzL3RyZWVkYXRhLnNlcnZpY2UuanM/ZjMyYiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlLmpzP2M3YmUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9jb25zdGFudHMvYXBwLmNvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL2NvbnN0YW50cy9hcHAuY29uc3RhbnRzLmpzP2M5NmEiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy9yZXF1ZXN0LnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy9yZXF1ZXN0LnNlcnZpY2UuanM/OWU0OSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NlcnZpY2VzL2Fzc2V0LmFwaS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2VydmljZXMvYXNzZXQuYXBpLnNlcnZpY2UuanM/Njc0ZSIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NlcnZpY2VzL2dyb3VwLmFwaS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2VydmljZXMvZ3JvdXAuYXBpLnNlcnZpY2UuanM/NmMxMiIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3NlcnZpY2VzL3VzZXIuYXBpLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy91c2VyLmFwaS5zZXJ2aWNlLmpzP2ExNjUiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9zZXJ2aWNlcy9yb2xlLmFwaS5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvc2VydmljZXMvcm9sZS5hcGkuc2VydmljZS5qcz85Y2VhIiwid2VicGFjazovLy8uL3NyYy9hcHAvdGVzdC9oZWxwZXJ0ZXN0LnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC90ZXN0L2hlbHBlcnRlc3Quc2VydmljZS5qcz80M2QyIiwid2VicGFjazovLy8uL3NyYy9hcHAvcG9ydGFsL2xvZ2luL3BvcnRhbC5sb2dpbi5zZXJ2aWNlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvcG9ydGFsL2xvZ2luL3BvcnRhbC5sb2dpbi5zZXJ2aWNlLmpzPzM1MzIiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93aWRnZXRzL2RpcmVjdGl2ZXMvaW5EaWFsb2cvaW4uZGlhbG9nLnNlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93aWRnZXRzL2RpcmVjdGl2ZXMvaW5EaWFsb2cvaW4uZGlhbG9nLnNlcnZpY2UuanM/MTMxMyIsIndlYnBhY2s6Ly8vLi9zcmMvYXBwL3dpZGdldHMvZGlyZWN0aXZlcy9pbkRpYWxvZy9pbi5kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC93aWRnZXRzL2RpcmVjdGl2ZXMvaW5EaWFsb2cvaW4uZGlhbG9nLmpzPzJhNjMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9mbG93TWFuYWdlci9keW5hbWljLmNvbnRyb2xsZXIuZGlyZWN0aXZlLmpzIiwid2VicGFjazovLy8uL3NyYy9hcHAvZmxvd01hbmFnZXIvZHluYW1pYy5jb250cm9sbGVyLmRpcmVjdGl2ZS5qcz81YTM0Iiwid2VicGFjazovLy8uL3NyYy9hcHAvZmxvd01hbmFnZXIvc2V0LmRvbS5kaXJlY3RpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwcC9mbG93TWFuYWdlci9zZXQuZG9tLmRpcmVjdGl2ZS5qcz84YjFlIl0sIm5hbWVzIjpbImFuZ3VsYXIiLCJtb2R1bGUiLCJjb25maWciLCJjb25zdGFudCIsIm1vbWVudCIsInJ1biIsInNlcnZpY2UiLCJjb250cm9sbGVyIiwiZGlyZWN0aXZlIiwiZmxvd01hbmFnZXIiLCJ3aWRnZXQiLCIkbG9nUHJvdmlkZXIiLCJ0b2FzdHJDb25maWciLCJkZWJ1Z0VuYWJsZWQiLCJhbGxvd0h0bWwiLCJ0aW1lT3V0IiwicG9zaXRpb25DbGFzcyIsInByZXZlbnREdXBsaWNhdGVzIiwicHJvZ3Jlc3NCYXIiLCJyb3V0ZXJDb25maWciLCIkc3RhdGVQcm92aWRlciIsIiR1cmxSb3V0ZXJQcm92aWRlciIsInN0YXRlIiwidXJsIiwidGVtcGxhdGVVcmwiLCJjb250cm9sbGVyQXMiLCJvdGhlcndpc2UiLCJydW5CbG9jayIsIiRyb290U2NvcGUiLCIkbG9nIiwiJHN0YXRlIiwiJGNvb2tpZVN0b3JlIiwibG9nIiwic2hvd0xvZ2luRGlhbG9nIiwiJG9uIiwiZSIsInRvU3RhdGUiLCJ0b1BhcmFtcyIsImZyb21TdGF0ZSIsImZyb21QYXJhbXMiLCJpc0xvZ2luIiwibmFtZSIsInVzZXJJbmZvIiwiaXNBdXRoZWQiLCJwcmV2ZW50RGVmYXVsdCIsImdvIiwiZ2V0IiwiZ3JpZFNlcnZpY2UiLCJhd2Vzb21lVGhpbmdzIiwiY2xhc3NBbmltYXRpb24iLCJjcmVhdGlvbkRhdGUiLCJ0ZXN0RnVuY3Rpb24iLCJOYXZUcmVlU2VydmljZSIsIkZsb3dDb250cm9sbGVyIiwiJHNjb3BlIiwiY29uc29sZSIsInZtIiwicmVjdFdpZHRoIiwicmVjdEhlaWdodCIsImRlZnMiLCJmaWx0ZXIiLCJmZU1lcmdlIiwid0RhdGEiLCJnZXRXaWRnZXREYXRhIiwid2lkZ2V0cyIsIndpZGdldERhdGEiLCJpbmRleEJ5VGFnIiwidGVtcFgiLCJ0ZW1wWSIsImRyYWdnZWQiLCJkaXNhYmxlRHJhZyIsImRlZmF1bHRNZXRob2QiLCJnZXREZWZhdWx0TWV0aG9kIiwibWlkSCIsIm1pZFciLCJmbG93SlNPTiIsImdldEZsb3ciLCJzZWxlY3RlZFRhYiIsIndpZGdldFNldCIsIm1jUG9wdXBUYWJJbmRleCIsImZsb3dMaW5lcyIsInZpcyIsImQzIiwic2VsZWN0IiwiYXR0ciIsIm9uIiwiZCIsImV2ZW50Iiwic3ZnTW91c2V1cCIsImRlc2VsZWN0QWxsIiwic2VsZWN0QWxsIiwic2VsZWN0ZWRXaWRnZXQiLCJzZWxlY3RlZEZ1bmN0aW9uIiwiJCRwaGFzZSIsIiRhcHBseSIsImRyYWdFbmQiLCJpIiwidGFnTmFtZSIsImdldE15V2lkZ2V0IiwicmVjdFNldHRpbmdzIiwieCIsInkiLCJkYXRhIiwiSlNPTiIsInN0cmluZ2lmeSIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJyZWZyZXNoTGluZXMiLCJkcmFnZ2luZyIsImlkeCIsImZyb20iLCJ0byIsImRyYXdMaW5lIiwicmVtb3ZlRmxvdyIsImlkIiwic3BsaWNlIiwidXBkYXRlRmxvdyIsInNlbGVjdEZ1bmN0aW9uIiwib3V0cHV0IiwicGFyYW1zIiwic2V0dGluZ3MiLCJydW5QYXJhbXMiLCJjb3B5IiwidGVtcEZ1bmNTZWxPYmplY3QiLCJ0ZW1wV2lkIiwidGFnIiwiY29ubmVjdGFibGUiLCJpbnB1dHMiLCJqZHgiLCJtZXRob2RzIiwiaW5wdXQiLCJ0SW5wVCIsInRTZWxUIiwidENvdW50IiwibGVuZ3RoIiwidENvdW50ZXIiLCJ0SmR4IiwidElkeCIsImZvdW5kIiwiaXNNZXRob2RGbG93RGVmaW5lZCIsInB1c2giLCJtZXRob2RzVG9TaG93IiwidFJlY3QiLCJnZXREM1JlY3QiLCJ0ZW1wQ2xhc3MiLCJ0ZW1wSW5wdXQiLCJ0ZW1wU2VsZWN0ZWRJbnB1dCIsInJlbW92ZUlucHV0IiwibWV0aG9kIiwicmVtb3ZlUGFyYW0iLCJwYXJhbSIsImluZGV4T2YiLCJhZGRQYXJhbSIsImtleUNvZGUiLCJ0ZW1wUGFyYW0iLCJ0cmltIiwiZm9jdXNJbnB1dCIsIiQiLCJmb2N1cyIsImFkZElucHV0IiwiYWNlT3B0aW9uIiwibW9kZSIsIm9uTG9hZCIsImVkaXRvciIsInNldE9wdGlvbnMiLCJzaG93R3V0dGVyIiwic2hvd1ByaW50TWFyZ2luIiwiY3JlYXRlTWV0aG9kIiwic2hvdyIsInNhdmVNZXRob2RDcmVhdGVQb3B1cCIsImhpZGUiLCJjbG9zZU1ldGhvZENyZWF0ZVBvcHVwIiwiZWRpdE1ldGhvZCIsImNhbmNlbEFzc2lnbmluZyIsImFzc2lnbkZsb3ciLCJ0ZW1wRmxvd09iamVjdCIsInRlbXBTZWxlY3RlZFdpZGdldCIsImZyb21NZXRob2QiLCJ0b01ldGhvZCIsImdlbkZsb3ciLCJmbG93Rm91bmQiLCJpbmRleCIsInJlZnJlc2hGbG93IiwiZm0iLCJ0bSIsInRlbXBPYmoiLCJkcmFnU3RhcnQiLCJzaG93TWV0aG9kUG9wdXAiLCJsZWZ0IiwicGFnZVgiLCJ0b3AiLCJwYWdlWSIsImJvdHRvbSIsInJpZ2h0Iiwid2luZG93Iiwid2lkdGgiLCJoZWlnaHQiLCJjc3MiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0TXlOYW1lIiwiZHJhdyIsInJlbW92ZSIsImFwcGVuZCIsInJlY3REcmFnIiwiZHJhZyIsInN1YmplY3QiLCJ0IiwidHIiLCJnZXRUcmFuc2xhdGlvbiIsInJlY3QiLCJpc0Nocm9tZSIsInN0eWxlIiwiY29sb3IiLCJ0ZXh0IiwiY2FsbCIsImN1cnJGbG93cyIsImxpbmUiLCJmcm9tVGFnIiwiZnJvbVJlY3QiLCJ0b1RhZyIsInRvUmVjdCIsImZyb21Db29yZHMiLCJ0b0Nvb3JkcyIsInRlbXBGTE8iLCJzb3J0IiwiYSIsImIiLCJnZXREIiwidmFsdWVsaW5lIiwiY3VydmUiLCJjdXJ2ZUJhc2lzIiwidHJhbnNmb3JtIiwiZyIsImNyZWF0ZUVsZW1lbnROUyIsInNldEF0dHJpYnV0ZU5TIiwibWF0cml4IiwiYmFzZVZhbCIsImNvbnNvbGlkYXRlIiwiZiIsImdyYWJXaWRnZXQiLCJ3aWREb20iLCJjdXJyZW50VGFyZ2V0IiwiY2xvbmUiLCJ3aWRnZXRHcmFiYmVkIiwib2Zmc2V0IiwibGVmdE9mZiIsInRvcE9mZiIsImFkZENsYXNzIiwibWFyZ2luIiwibW91c2V1cCIsImRyb3BXaWRnZXQiLCJtb3VzZW1vdmUiLCJkcmFnZ2luZ1dpZGdldCIsInRlbXBEYXRhIiwibWFrZU5ld1dpZGdldCIsInVwZGF0ZVNjb3BlRGF0YSIsIndEYXRhUmVzcCIsIm1pZFBhbk9mZiIsIm1pZFdpZHRoIiwibWlkSGVpZ2h0IiwiZ2VuZXJhdGVJbnRhbmNlSWQiLCJnZW5lcmF0ZVVuaXF1ZUlkIiwidXBkYXRlV2lkZ2V0RGF0YSIsInJlc3AiLCJ1aWQiLCJnZXRSYW5kb21JbnQiLCJtaW4iLCJtYXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJwYXJzZUludCIsIkdyaWRDb250cm9sbGVyIiwibG9naW5TZXJ2aWNlIiwiZ3JpZE1vZGUiLCJsYXlvdXRPcmRlciIsInN3aXRjaE1vZGUiLCJkcmFnZ2llIiwiZGlzYWJsZSIsImVuYWJsZSIsInN3aXRjaE1vZGVJbnRlciIsInNldEludGVydmFsIiwiY2xlYXJJbnRlcnZhbCIsIm9pX3RpbWVvdXQiLCJvcmRlckl0ZW1zIiwiaXRlbUVsZW1zIiwiJGdyaWQiLCJwYWNrZXJ5IiwiZWFjaCIsIml0ZW1FbGVtIiwicG9zaXRpb24iLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwiZ2V0V2lkZ2V0cyIsImNhbGxiYWNrIiwid2lkTGlzdCIsInN0YXJ0UGFja2VyeSIsImdldExheW91dE9yZGVyIiwic2V0Q1NTQ2xhc3MiLCJjb2xzIiwidSIsInYiLCJzdHlsZVN0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwiaW5uZXJIVE1MIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJhcHBlbmRDaGlsZCIsInBhY2tlcnlJbnRlciIsImluaXRQYWNrZXJ5IiwiY29sdW1uV2lkdGgiLCJjb2x1bW5IZWlnaHQiLCJpdGVtU2VsZWN0b3IiLCJjb3VudGVyIiwiZmluZCIsImdyaWRJdGVtIiwiRHJhZ2dhYmlsbHkiLCJ3aWQiLCJQb3J0YWxMb2dpbkNvbnRyb2xsZXIiLCJwb3J0YWxMb2dpblNlcnZpY2UiLCJsb2dpbiIsImVycm9yIiwiZmV0Y2hpbmciLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiRGFzaGJvYXJkQ29udHJvbGxlciIsIkFQSV9IT1NUIiwiJHJlc291cmNlIiwidXNlciIsImdldEFQUExpc3QiLCJhcHBMaXN0Iiwid3JhcEFjdGlvbnMiLCJzYXZlIiwidXNlcl9pZCIsIiRwcm9taXNlIiwidGhlbiIsInJlc3VsdHMiLCJwcm9kdWN0TGlzdCIsInByb2R1Y3RzIiwic3luY0FQSUxpc3QiLCJwcm9kdWN0X2lkIiwicHJvZHVjdCIsImFwaWNhbGxzIiwidGVtcExpc3QiLCJhcGkiLCJzcGxpdCIsImFwaUVuZHBvaW50Iiwic2VsZWN0QVBJQ2FsbCIsImFwaWNhbGwiLCJqc29uIiwic3RyIiwicGFyc2UiLCJwYXJhbWV0ZXJzIiwidW5kZWZpbmVkIiwic3ludGF4SGlnaGxpZ2h0Iiwic3luY0FQSUNhbGxzIiwic2VsZWN0UHJvZHVjdCIsIml0ZW0iLCJjaGFuZ2VNb2RlIiwiZGViIiwiZGVidWdnaW5nIiwiaW5wIiwiaHRtbCIsInJlcGxhY2UiLCJtYXRjaCIsImNscyIsInRlc3QiLCJvYmoiLCJjIiwiaHR0cCIsIiRxIiwicG9zdCIsImJvZHkiLCJyZXEiLCJoYW5kbGVSZXNwb25zZSIsImhhbmRsZUZhaWx1cmUiLCJyZXNvbHZlIiwicmVqZWN0IiwidmlkZW9QbGF5ZXJDb250cm9sbGVyIiwiaW5pdFdpZGdldCIsImluaXQiLCJwcm9jZXNzSW5wdXQiLCJ0YWdfaWQiLCJ2aWRlb1BsYXllciIsInZpZXciLCJ2aCIsInciLCIkM2RQbGF5ZXJDb250cm9sbGVyIiwidXBkYXRlRnJhbWUiLCJmcmFtZURhdGEiLCJjYW1lcmFQb3NpdGlvbiIsIm1vZGVzIiwidG9vbHMiLCJheGVzIiwiWCIsIlkiLCJaIiwiY29udHJvbHMiLCJBVVRPIiwidG9vbCIsImVuYWJsZWQiLCJjdXJyZW50IiwiY3V0dmlldyIsInBsYW5lcyIsImF4aXMiLCJyZW5kZXJlciIsImNhbWVyYSIsImxvYWRlciIsInZpZXdwb3J0SGVpZ2h0Iiwidmlld3BvcnRXaWR0aCIsInNjZW5lIiwidmlld3BvcnRJZCIsImdlb01lc2giLCJjYW1lcmFDb250cm9scyIsInN0YXRzIiwiaW5pdFRocmVlIiwidGhyZWVJbnRlciIsImluaXQzIiwiVEhSRUUiLCJXZWJHTFJlbmRlcmVyIiwiYW50aWFsaWFzIiwiYWxwaGEiLCJzZXRTaXplIiwiZG9tRWxlbWVudCIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwic2V0IiwiSlNPTkxvYWRlciIsIlNjZW5lIiwiT3JiaXRDb250cm9scyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW5kZXIiLCJtYXRlcmlhbCIsIk1lc2hQaG9uZ01hdGVyaWFsIiwidmVydGV4Q29sb3JzIiwiVmVydGV4Q29sb3JzIiwic3BlY3VsYXIiLCJzaWRlIiwiRG91YmxlU2lkZSIsInNoaW5pbmVzcyIsImxvYWQiLCJnZW8iLCJtYXQiLCJNZXNoIiwic2Vydm9Cb2R5IiwibG9va0F0IiwiYW5pbWF0ZSIsImFkZCIsImxpZ2h0IiwiQW1iaWVudExpZ2h0IiwiZGlyZWN0aW9uYWxMaWdodCIsIkRpcmVjdGlvbmFsTGlnaHQiLCJub3JtYWxpemUiLCJTdGF0cyIsImRvbSIsInBsYW5lIiwiUGxhbmUiLCJWZWN0b3IzIiwibm9ybWFsIiwiY2xpcHBpbmdQbGFuZXMiLCJtYXJrZXJNYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwidHJhbnNwYXJlbnQiLCJ3aXJlZnJhbWUiLCJvcGFjaXR5IiwibWFya2VyIiwiUGxhbmVCdWZmZXJHZW9tZXRyeSIsImNvbnRyb2wiLCJUcmFuc2Zvcm1Db250cm9scyIsImF0dGFjaCIsImNoYW5nZVRvb2wiLCJjaGFuZ2VDdXRWaWV3QXhpcyIsImFwcGx5U2NvcGUiLCJzZXJ2b0FuaW1JZCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsInByb2Nlc3NGcmFtZSIsImFuaW1hdGVWZWN0b3JzIiwidXBkYXRlIiwiZGltZW5zaW9ucyIsImRpRGlmZiIsInYxIiwidjIiLCJkaXNhYmxlVG9vbCIsImVuYWJsZVRvb2wiLCJ6Iiwicm90YXRpb24iLCJQSSIsInRvZ2dsZUN1dFZpZXciLCJkaXNhYmxlQ3V0VmlldyIsImVuYWJsZUN1dFZpZXciLCJjaGFuZ2VDdXRWaWV3VmFsIiwidmFsIiwiaW5pdEJDbGljayIsImJjbGlja0VscyIsImJjbGlja0RvbUVscyIsIkRPTSIsImtleSIsImVsIiwiY2xpY2siLCJldmFsIiwidGVtcEFyck9iaiIsInRlbXBBcnIiLCJhcHBseUJDbGFzcyIsInJlbW92ZUNsYXNzIiwiaW5pdFNjb3BlIiwiZ2V0RGF0YSIsIiQzZFBsYXllciIsInRpbWVsaW5lQ29udHJvbGxlciIsIkZQUyIsInBsYXllciIsInBsYXlpbmciLCJjdXJyZW50SW5kZXgiLCJ0b2dnbGVQbGF5IiwicGF1c2UiLCJwbGF5IiwiZ2VuZXJhdGVUZW1wRGF0YSIsImQzRGF0YSIsInN2ZyIsImNvbnRhaW5lciIsImluaXREMyIsInJhbmRDb3VudGVyIiwidGVtcEFycmF5IiwiZ2V0UmFuZG9tVmVjdG9yIiwic2Vjb25kcyIsInVuaXgiLCJnZXRSYW5kb21BeGlzIiwiRDNUaW1lbGluZSIsInNlbGYiLCJlbGVtZW50IiwidmlzUCIsImNsYXNzZWQiLCJtb3VzZUhvdmVyRXZlbnQiLCJtb3VzZURvd25FdmVudCIsIm1vdXNlVXBFdmVudCIsImdldEF4aXNTY2FsZSIsImNsaXBSZWN0IiwiYXhpc1NjYWxlIiwiZGF0YUl0ZW0iLCJ4bCIsInhoIiwieWwiLCJ5aCIsInhTY2FsZSIsInNjYWxlTGluZWFyIiwicmFuZ2UiLCJkb21haW4iLCJEYXRlIiwieVNjYWxlIiwibW91c2VDbGlja2VkIiwibW91c2VYIiwibW91c2UiLCJtb3VzZVkiLCJtYXJrZXJQb3NpdGlvbiIsImludmVydCIsInVwZGF0ZU1hcmtlciIsInVwZGF0ZU1hcmtlckluZGV4IiwibW91c2VYVmFsIiwiZnJhbWUiLCJpbnRlcnZhbCIsImdldEN1cnJlbnRJbmRleCIsImdldEZyYW1lSW5kZXgiLCJkaWZmIiwic3RhcnRpbmdJbmRleCIsImVuZGluZ0luZGV4IiwiZXEiLCJnZXRSb3VuZCIsIngxIiwieDIiLCJkaWZmMSIsImZyYW1lVXBkYXRlZCIsInVwZGF0ZVRpbWVsaW5lIiwicnVuRmxvdyIsInRpbWVsaW5lIiwiY29uZmlnV2lkZ2V0Q29udHJvbGxlciIsImNvbmZpZ1dpZGdldCIsIndpZGdldENvbm5lY3RvckNvbnRyb2xsZXIiLCJzdGF0ZXMiLCJzdGF0ZUlkIiwicHVzaFN0YXRlIiwicHJvY2Vzc0RhdGEiLCJnZXRTdGF0ZSIsInVwZGF0ZVN0YXRlIiwibmF2aWdhdGlvbiIsImlzQmFja3dhcmQiLCJpc0ZvcndhcmQiLCJ0ZW1wU3RhdGUiLCJmZXRjaCIsImdyb3VwIiwidGFiIiwidGVtcGluZGV4Iiwid2lkZ2V0Q29ubmVjdG9yIiwiZ2V0RGVmYXVsdFdpZGdldHMiLCJyZXNldExvY2FsU3RvcmFnZSIsImlzT3BlcmEiLCJvcHIiLCJhZGRvbnMiLCJvcGVyYSIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlzRmlyZWZveCIsIkluc3RhbGxUcmlnZ2VyIiwiaXNTYWZhcmkiLCJIVE1MRWxlbWVudCIsInAiLCJ0b1N0cmluZyIsInNhZmFyaSIsInB1c2hOb3RpZmljYXRpb24iLCJpc0lFIiwiZG9jdW1lbnRNb2RlIiwiaXNFZGdlIiwiU3R5bGVNZWRpYSIsImNocm9tZSIsIndlYnN0b3JlIiwiaXNCbGluayIsIkNTUyIsInBhcmFtVHlwZXMiLCJJTlQiLCJTVFJJTkciLCJCT09MRUFOIiwiRlVOQ1RJT04iLCJUSU1FU1RBTVAiLCJ0X2Zsb3dKU09OIiwidGltZWxpbmUzIiwidF9sYXlvdXRPcmRlciIsInRfd2lkZ2V0RGF0YSIsImdldFdpZGdldFNldHRpbmdzIiwiZ2V0SXRlbSIsImdlbmVyYXRlV2lkZ2V0cyIsIndpZGdldEpTT04iLCJ3aWREYXRhIiwia2R4IiwicWR4IiwicHVzaFRvQVBJIiwidGVtcExheSIsImZsb3ciLCJpbml0RmxvdyIsImF1dGhTZXJ2aWNlIiwiJHdpbmRvdyIsIlRPS0VOX0tFWSIsInBhcnNlSnd0IiwidG9rZW4iLCJiYXNlNjRVcmwiLCJiYXNlNjQiLCJmcm9tSnNvbiIsImF0b2IiLCJzYXZlVG9rZW4iLCJnZXRUb2tlbiIsInJvdW5kIiwiZ2V0VGltZSIsImV4cCIsImxvZ291dCIsInJlbW92ZUl0ZW0iLCJhdXRoSW50ZXJjZXB0b3IiLCJyZXF1ZXN0IiwicmVzcG9uc2UiLCJyZXMiLCJoZWxwZXJTZXJ2aWNlIiwiYXBwQ29uc3RhbnRzIiwiU0xBU0giLCJhc3NldFR5cGVJZFRvQXNzZXRUeXBlIiwiR1JPVVAiLCJVU0VSIiwiUk9MRSIsIkxPQ0FMVVNFUiIsIlZFSElDTEUiLCJERVZJQ0UiLCJhc3NldFR5cGVUb0Fzc2V0VHlwZUlkIiwiZ2V0QXNzZXRJZDIiLCJwYXRoIiwidG9rZW5zIiwiZ2V0UGFyZW50UGF0aDIiLCJzYXZlZGlkeCIsImNvdW50Iiwic3Vic3RyaW5nIiwiZ2V0UGFyZW50SWQyIiwiZ2V0QXNzZXRUeXBlSWQyIiwiZ2V0QXNzZXRUeXBlMiIsImdldEFzc2V0TGV2ZWwyIiwiYWRkQXNzZXRJbmZvIiwiYXNzZXQiLCJhc3NldGlkIiwiYXNzZXRwYXRoIiwicGdyb3VwcGF0aCIsInBncm91cGlkIiwidWlfYXNzZXRfdHlwZSIsImFzc2V0bGV2ZWwiLCJmaWx0ZXJBc3NldEdyb3VwcyIsImZpbHRlcmVkTGlzdCIsIm1lcmdlQXNzZXRQZXJtaXNzaW9ucyIsImFzc2V0cyIsInBpZHgiLCJwZXJtaXNzaW9ucyIsInBlcm1pc3Npb24iLCJwZXJtaWQiLCJtZXJnZVVzZXJQZXJtaXNzaW9ucyIsInVzZXJzTGlzdCIsInBlcm0iLCJwbmFtZSIsIm1lcmdlQXNzZXRBc3NpZ25tZW50cyIsImluZm8iLCJhc3NnIiwiYXNzZ2luZm8iLCJtZXJnZUZlbmNlSW5mbyIsIm1ha2VBc3NldE1hcCIsImdldE15UGF0aCIsIm1ha2VQZXJtaXNzaW9uTWFwIiwibWVyZ2VNYXAiLCJtYXAxIiwibWFwMiIsImdyb3VwcGF0aCIsInJvbGVwYXRoIiwidXNlcnBhdGgiLCJ2ZWhpY2xlcGF0aCIsImRldmljZXBhdGgiLCJ2YWxpZGF0ZVJlc3BvbnNlIiwibWFrZUFzc2V0TGlzdCIsIm1ha2VNYXBPbkFzc2V0UGF0aCIsInNsYXNoQ291bnQiLCJzb3J0T25Bc3NldExldmVsIiwiaGFzaE9iaiIsImFycmF5T2JqIiwiY29tcGFyZSIsInNvcnRQYXRocyIsImdldE5leHRQYXRoSXRlbUVuZCIsInN0YXJ0Iiwic2xhc2giLCJjaGFyQXQiLCJzdWJzdHIiLCJmaXJzdFNsYXNoIiwic2Vjb25kU2xhc2giLCJnZXROb2Rlc0luUGF0aCIsImlzVW5kZWZpbmVkIiwibm9kZXNJblBhdGgiLCJzdGFydEluZGV4IiwiZW5kSW5kZXgiLCJpdGVtU3RhcnRJbmRleCIsImZsYXR0ZW4iLCJyZXN1bHQiLCJyZWN1cnNlIiwiY3VyIiwicHJvcCIsIk9iamVjdCIsIkFycmF5IiwiaXNBcnJheSIsImwiLCJpc0VtcHR5IiwiZmxhdHRlbjIiLCJ1bmZsYXR0ZW4iLCJyZWdleCIsInJlc3VsdGhvbGRlciIsIm0iLCJleGVjIiwic2V0SW5kaXJlY3QiLCJhcnIiLCJpbmRpcmVjdCIsInNwbGljZVJlZHVuZGFudE9iamVjdHMiLCJmaWx0ZXJlZEJ5S2V5IiwiZmlsdGVyZWRNYXAiLCJ0ZW1wS2V5IiwiaXRlbUFycmF5IiwiZ2V0TXlJdGVtIiwibGlzdCIsInRlbXBJZCIsImFycmF5RGlmZiIsImFycmF5MSIsImFycmF5MiIsImZpbHRlcmVkIiwicmV0dXJuVmFsdWUiLCJiYXNlIiwidGVtcFBhdGgiLCJwYXRoT2JqIiwidGVtcEJhc2UiLCJzaGlmdCIsImlzRGVmaW5lZCIsInRyZWVEYXRhU2VydmljZSIsImdyb3VwQVBJU2VydmljZSIsImNvbGxhcHNlZFN0YXR1cyIsImdsb2JhbEdlbmVyaWNUcmVlIiwiZ2V0R2VuZXJpY1RyZWVJbmRleCIsImdlbmVyaWNUcmVlIiwiYnVpbGRNYW5hZ2VtZW50VHJlZSIsInZpc2l0ZWQiLCJndE5vZGUiLCJ1dE5vZGUiLCJ0aXRsZSIsIml0ZW1zIiwiY2hlY2tTdGF0dXMiLCJjb2xsYXBzZWQiLCJyZXN1bHROb2RlIiwiY2hpbGQiLCJjaGlsZHJlbiIsImNyZWF0ZU1hbmFnZW1lbnRUcmVlIiwidGVtcFRyZWUiLCJncm91cFRyZWUiLCJ1aVRyZWUiLCJsb2FkaW5nIiwiY3JlYXRlR2VuZXJpY1RyZWUiLCJncm91cHMiLCJyaWR4IiwiYWlkeCIsImFzc2V0QXJyYXkiLCJoYW5kbGVTdWNjZXNzIiwiZ2V0TWFuYWdlbWVudFRyZWUiLCJnZXRNeURpcmVjdEFzc2V0c01hcCIsInJlcXVlc3RTZXJ2aWNlIiwiJGluRGlhbG9nIiwibGlzdGVuZXJzIiwiYWRkTGlzdGVuZXIiLCJsaXN0ZW5lciIsImNhbGxMaXN0ZW5lcnMiLCJtc2ciLCJmaXJlUG9zdCIsImVtYWlsIiwiY2hlY2tMb2dpbiIsImNsaWNrT3V0c2lkZVRvQ2xvc2UiLCJlc2NhcGVUb0Nsb3NlIiwiYWRkQXV0aExpc3RlbmVyIiwiSU5GTyIsIlBST0ZJTEUiLCJTSU1DQVJEIiwiUk9PVF9HUk9VUCIsIiRodHRwIiwiYXV0aExpc3RlbmVycyIsImVycm9yU3RhdHVzQ29kZXMiLCJhdXRoIiwiY2F0Y2giLCJmaXJlR2V0Iiwic3RhdHVzIiwiZm9yY2UiLCJmb3JFYWNoIiwidmFsdWUiLCJpc0xvZ2luVG9rZW5WYWxpZCIsImFzc2V0QVBJU2VydmljZSIsIiRpbkVycm9yIiwiZGVsZXRlQXNzZXQiLCJnZXRNeUNyZWF0ZUFzc2V0UGVybUluZm8iLCJnZXRNeUVkaXREZWxldGVBc3NldFBlcm1JbmZvIiwidmFsaWRhdGVBc3NldE5hbWUiLCJnZXRNeUVkaXREZWxldGVBc3NldFBlcm1JbmZvTWFwIiwiZ2V0TXlDcmVhdGVBc3NldFBlcm1JbmZvTWFwIiwicm9vdF9wZ3JvdXBwYXRoIiwiZW5jbG9zZUJvZHkiLCJnZXRBc3NldFR5cGUiLCJhc3NldHR5cGUiLCJsaXN0QXNzZXRzIiwiZ2V0TXlHcm91cHMiLCJnZXRNeURpcmVjdEdyb3VwcyIsImdldE15VmVoaWNsZXMiLCJnZXRNeVVzZXJzIiwiZ2V0TXlSb2xlcyIsImdldE15RGV2aWNlcyIsImFzc2lnblVzZXIiLCJkZWFzc2lnblVzZXIiLCJhc3NpZ25Sb2xlIiwiZGVhc3NpZ25Sb2xlIiwiZ2V0QXNzaWduZWRVc2VycyIsImdldEFzc2lnbmVkUm9sZXMiLCJnZXRNeUFzc2lnbmFibGVVc2VycyIsImdldE15QXNzaWduYWJsZVJvbGVzIiwiY3JlYXRlR3JvdXAiLCJsaXN0QXNzZXRzTWFwIiwiZ2V0QXNzaWduZWRSb2xlc01hcCIsImdldE15QXNzaWduYWJsZVVzZXJzTWFwIiwiZ2V0TXlBc3NpZ25hYmxlUm9sZXNNYXAiLCJnZXRBc3NpZ25lZFVzZXJzTWFwIiwiZ2V0TXlHcm91cHNNYXAiLCJnZXRNeURpcmVjdEdyb3Vwc01hcCIsImdldE15VmVoaWNsZXNNYXAiLCJnZXRNeVVzZXJzTWFwIiwiZ2V0TXlVc2Vyc01hcExpc3QiLCJnZXRNeVJvbGVzTWFwIiwiZ2V0TXlSb2xlc0xpc3QiLCJnZXRNeURldmljZXNNYXAiLCJoYW5kbGVEaXJlY3RBc3NldFJlc3BvbnNlIiwiZ1Byb21pc2UiLCJhbGwiLCJ1c2VyQVBJU2VydmljZSIsImdldEFzc2lnbmVkR3JvdXBzIiwiZ2V0TXlBc3NpZ25hYmxlR3JvdXBzIiwiY3JlYXRlVXNlciIsImdldE15QXNzaWduYWJsZUdyb3Vwc01hcCIsImdldEFzc2lnbmVkR3JvdXBzTWFwIiwiZ2V0TXlBc3NpZ25lZEdyb3Vwc01hcCIsImdldE15QXNzaWduZWRHcm91cHMiLCJnZXRNeUFzc2V0R3JvdXBzTWFwIiwiZ2V0TXlBc3NldEdyb3VwcyIsInZQcm9taXNlIiwidVByb21pc2UiLCJyUHJvbWlzZSIsImRQcm9taXNlIiwibXlQcm9taXNlIiwiZ2V0TXlJbmZvTWFwIiwicm9sZUFQSVNlcnZpY2UiLCJnZXRNeVBlcm1pc3Npb25zIiwiZ2V0QXNzaWduZWRQZXJtaXNzaW9ucyIsImFkZFBlcm1pc3Npb24iLCJkZWxldGVQZXJtaXNzaW9uIiwiY3JlYXRlUm9sZSIsImdldE15UGVybWlzc2lvbnNNYXAiLCJnZXRBc3NpZ25lZFBlcm1pc3Npb25zTWFwIiwiaGVscGVyVGVzdFNlcnZpY2UiLCJBU1NFVF9JRCIsIlBBUkVOVF9QQVRIIiwiUEFSRU5UX0lEIiwiQVNTRVRfVFlQRV9JRCIsInRlc3QxIiwidGVzdDIiLCJ0ZXN0MyIsInJ1blRlc3QiLCJwYXJlbnRwYXRoIiwicGFyZW50aWQiLCJhc3NldHR5cGVpZCIsInRva2VuSGFuZGxlciIsInRlbXBMb2dnZWRpbiIsIm9ic2VydmVyQ2FsbGJhY2tzIiwiaGVhZGVyIiwiYXV0aFVzZXIiLCJub3RpZnlPYnNlcnZlcnMiLCJmYWlsdXJlIiwicHV0IiwibmV3VG9rZW4iLCJyZXNvdXJjZSIsImFjdGlvbnMiLCJ3cmFwcGVkUmVzb3VyY2UiLCJ0b2tlbldyYXBwZXIiLCJhY3Rpb24iLCJzdWNjZXNzIiwiZXh0ZW5kIiwicHV0Q29va2llcyIsImdldFVzZXIiLCJnZXRQcm9qZWN0cyIsInByb2plY3RzIiwib25UZW1wTG9naW4iLCJpc1RlbXBMb2dnZWQiLCJpbkRpYWxvZyIsInJlc3RyaWN0Iiwic2NvcGUiLCJhY3RpdmUiLCJhcHBseSIsImJhY2tEcm9wQ2xvc2UiLCJrZXlkb3duIiwiJGV2ZW50IiwiZHluYW1pY0NvbnRyb2xsZXIiLCJ0ZXJtaW5hbCIsInByaW9yaXR5IiwiJGNvbXBpbGUiLCIkcGFyc2UiLCJjb21waWxlIiwiZWxlbSIsInJlbW92ZUF0dHIiLCJzZXREb20iLCJlbG0iLCJzZXRTY29wZSJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNB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ekIsT0FBTyIsImZpbGUiOiJpbmRleC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBmOTBmMzgyNGRiZDEwMzMyNjc2MyIsIid1c2Ugc3RyaWN0JztcblxudmFyIF9pbmRleCA9IHJlcXVpcmUoJy4vaW5kZXguY29uZmlnJyk7XG5cbnZhciBfaW5kZXgyID0gcmVxdWlyZSgnLi9pbmRleC5yb3V0ZScpO1xuXG52YXIgX2luZGV4MyA9IHJlcXVpcmUoJy4vaW5kZXgucnVuJyk7XG5cbnZhciBfbWFpbiA9IHJlcXVpcmUoJy4vbWFpbi9tYWluLmNvbnRyb2xsZXInKTtcblxudmFyIF9mbG93TWFuYWdlciA9IHJlcXVpcmUoJy4vZmxvd01hbmFnZXIvZmxvd01hbmFnZXIuY29udHJvbGxlcicpO1xuXG52YXIgX2dyaWQgPSByZXF1aXJlKCcuL2Zsb3dNYW5hZ2VyL2dyaWQuY29udHJvbGxlcicpO1xuXG52YXIgX3BvcnRhbExvZ2luID0gcmVxdWlyZSgnLi9wb3J0YWwvbG9naW4vcG9ydGFsLmxvZ2luLmNvbnRyb2xsZXInKTtcblxudmFyIF9kYXNoYm9hcmQgPSByZXF1aXJlKCcuL3BvcnRhbC9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbnRyb2xsZXInKTtcblxudmFyIF9odHRwU2VydmljZSA9IHJlcXVpcmUoJy4vcG9ydGFsL2h0dHBTZXJ2aWNlL2h0dHBTZXJ2aWNlJyk7XG5cbnZhciBfdmlkZW8gPSByZXF1aXJlKCcuL3dpZGdldHMvY29tbW9uL3ZpZGVvUGxheWVyL3ZpZGVvLnBsYXllcicpO1xuXG52YXIgX2QgPSByZXF1aXJlKCcuL3dpZGdldHMvY29tbW9uLzNkUGxheWVyLzNkLnBsYXllcicpO1xuXG52YXIgX3RpbWVsaW5lID0gcmVxdWlyZSgnLi93aWRnZXRzL2NvbW1vbi90aW1lbGluZS90aW1lbGluZScpO1xuXG52YXIgX2NvbmZpZyA9IHJlcXVpcmUoJy4vd2lkZ2V0cy9jb21tb24vY29uZmlnV2lkZ2V0L2NvbmZpZy53aWRnZXQnKTtcblxudmFyIF93aWRnZXQgPSByZXF1aXJlKCcuL3dpZGdldHMvY29tbW9uL3dpZGdldENvbm5lY3Rvci93aWRnZXQuY29ubmVjdG9yJyk7XG5cbnZhciBfZ3JpZDIgPSByZXF1aXJlKCcuL2Zsb3dNYW5hZ2VyL2dyaWQuc2VydmljZScpO1xuXG52YXIgX2F1dGggPSByZXF1aXJlKCcuL3NlcnZpY2VzL2F1dGguc2VydmljZScpO1xuXG52YXIgX2hlbHBlciA9IHJlcXVpcmUoJy4vc2VydmljZXMvaGVscGVyLnNlcnZpY2UnKTtcblxudmFyIF90cmVlZGF0YSA9IHJlcXVpcmUoJy4vc2VydmljZXMvdHJlZWRhdGEuc2VydmljZScpO1xuXG52YXIgX2xvZ2luID0gcmVxdWlyZSgnLi9zZXJ2aWNlcy9sb2dpbi5zZXJ2aWNlJyk7XG5cbnZhciBfYXBwID0gcmVxdWlyZSgnLi9jb25zdGFudHMvYXBwLmNvbnN0YW50cycpO1xuXG52YXIgX3JlcXVlc3QgPSByZXF1aXJlKCcuL3NlcnZpY2VzL3JlcXVlc3Quc2VydmljZScpO1xuXG52YXIgX2Fzc2V0QXBpID0gcmVxdWlyZSgnLi9zZXJ2aWNlcy9hc3NldC5hcGkuc2VydmljZScpO1xuXG52YXIgX2dyb3VwQXBpID0gcmVxdWlyZSgnLi9zZXJ2aWNlcy9ncm91cC5hcGkuc2VydmljZScpO1xuXG52YXIgX3VzZXJBcGkgPSByZXF1aXJlKCcuL3NlcnZpY2VzL3VzZXIuYXBpLnNlcnZpY2UnKTtcblxudmFyIF9yb2xlQXBpID0gcmVxdWlyZSgnLi9zZXJ2aWNlcy9yb2xlLmFwaS5zZXJ2aWNlJyk7XG5cbnZhciBfaGVscGVydGVzdCA9IHJlcXVpcmUoJy4vdGVzdC9oZWxwZXJ0ZXN0LnNlcnZpY2UnKTtcblxudmFyIF9wb3J0YWxMb2dpbjIgPSByZXF1aXJlKCcuL3BvcnRhbC9sb2dpbi9wb3J0YWwubG9naW4uc2VydmljZScpO1xuXG52YXIgX2luRGlhbG9nID0gcmVxdWlyZSgnLi93aWRnZXRzL2RpcmVjdGl2ZXMvaW5EaWFsb2cvaW4uZGlhbG9nLnNlcnZpY2UnKTtcblxudmFyIF9pbiA9IHJlcXVpcmUoJy4vd2lkZ2V0cy9kaXJlY3RpdmVzL2luRGlhbG9nL2luLmRpYWxvZycpO1xuXG52YXIgX2R5bmFtaWNDb250cm9sbGVyID0gcmVxdWlyZSgnLi9mbG93TWFuYWdlci9keW5hbWljLmNvbnRyb2xsZXIuZGlyZWN0aXZlJyk7XG5cbnZhciBfc2V0RG9tID0gcmVxdWlyZSgnLi9mbG93TWFuYWdlci9zZXQuZG9tLmRpcmVjdGl2ZScpO1xuXG4vKiBnbG9iYWwgbWFsYXJrZXk6ZmFsc2UsIG1vbWVudDpmYWxzZSAqL1xuXG5hbmd1bGFyLm1vZHVsZSgnbWFuYWdlbWVudCcsIFsnbmdDb29raWVzJywgJ25nVG91Y2gnLCAnbmdTYW5pdGl6ZScsICduZ01lc3NhZ2VzJywgJ25nQXJpYScsICduZ1Jlc291cmNlJywgJ3VpLnJvdXRlcicsICdtbS5mb3VuZGF0aW9uJywgJ3RvYXN0ciddKS5jb25maWcoX2luZGV4LmNvbmZpZykuY29uZmlnKF9pbmRleDIucm91dGVyQ29uZmlnKVxuLy8gLmNvbmZpZyhmdW5jdGlvbigkaHR0cFByb3ZpZGVyKSB7XG4vLyAgICAgJGh0dHBQcm92aWRlci5pbnRlcmNlcHRvcnMucHVzaCgnYXV0aEludGVyY2VwdG9yJyk7XG4vLyB9KVxuXG4vLyBoYXZlIHRvIGZpeCBhYm92ZSBjb25maWdcblxuLmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpXG4vLyAuY29uc3RhbnQoJ0FQSV9IT1NUJywgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGknKVxuLmNvbnN0YW50KCdBUElfSE9TVCcsICdodHRwOi8vYXBpLmJsdWVjaXBoZXJzLmNvbS9hcGknKS5jb25zdGFudCgnVE9LRU5fS0VZJywgJ0pXVF9UT0tFTl9LRVknKS5ydW4oX2luZGV4My5ydW5CbG9jaykuc2VydmljZSgnZ3JpZFNlcnZpY2UnLCBfZ3JpZDIuZ3JpZFNlcnZpY2UpLnNlcnZpY2UoJ2F1dGhTZXJ2aWNlJywgX2F1dGguYXV0aFNlcnZpY2UpLnNlcnZpY2UoJ2F1dGhJbnRlcmNlcHRvcicsIF9hdXRoLmF1dGhJbnRlcmNlcHRvcikuc2VydmljZSgnaGVscGVyU2VydmljZScsIF9oZWxwZXIuaGVscGVyU2VydmljZSkuc2VydmljZSgndHJlZURhdGFTZXJ2aWNlJywgX3RyZWVkYXRhLnRyZWVEYXRhU2VydmljZSkuc2VydmljZSgnbG9naW5TZXJ2aWNlJywgX2xvZ2luLmxvZ2luU2VydmljZSkuc2VydmljZSgncmVxdWVzdFNlcnZpY2UnLCBfcmVxdWVzdC5yZXF1ZXN0U2VydmljZSkuc2VydmljZSgnYXNzZXRBUElTZXJ2aWNlJywgX2Fzc2V0QXBpLmFzc2V0QVBJU2VydmljZSkuc2VydmljZSgnZ3JvdXBBUElTZXJ2aWNlJywgX2dyb3VwQXBpLmdyb3VwQVBJU2VydmljZSkuc2VydmljZSgndXNlckFQSVNlcnZpY2UnLCBfdXNlckFwaS51c2VyQVBJU2VydmljZSkuc2VydmljZSgncm9sZUFQSVNlcnZpY2UnLCBfcm9sZUFwaS5yb2xlQVBJU2VydmljZSkuc2VydmljZSgnaGVscGVyVGVzdFNlcnZpY2UnLCBfaGVscGVydGVzdC5oZWxwZXJUZXN0U2VydmljZSkuc2VydmljZSgnYXBwQ29uc3RhbnRzJywgX2FwcC5hcHBDb25zdGFudHMpLnNlcnZpY2UoJyRpbkRpYWxvZycsIF9pbkRpYWxvZy4kaW5EaWFsb2cpLnNlcnZpY2UoJ3BvcnRhbExvZ2luU2VydmljZScsIF9wb3J0YWxMb2dpbjIucG9ydGFsTG9naW5TZXJ2aWNlKS5zZXJ2aWNlKCdodHRwJywgX2h0dHBTZXJ2aWNlLmh0dHApLmNvbnRyb2xsZXIoJ01haW5Db250cm9sbGVyJywgX21haW4uTWFpbkNvbnRyb2xsZXIpLmNvbnRyb2xsZXIoJ0Zsb3dDb250cm9sbGVyJywgX2Zsb3dNYW5hZ2VyLkZsb3dDb250cm9sbGVyKS5jb250cm9sbGVyKCdHcmlkQ29udHJvbGxlcicsIF9ncmlkLkdyaWRDb250cm9sbGVyKS5jb250cm9sbGVyKCdEYXNoYm9hcmRDb250cm9sbGVyJywgX2Rhc2hib2FyZC5EYXNoYm9hcmRDb250cm9sbGVyKS5jb250cm9sbGVyKCdQb3J0YWxMb2dpbkNvbnRyb2xsZXInLCBfcG9ydGFsTG9naW4uUG9ydGFsTG9naW5Db250cm9sbGVyKS5kaXJlY3RpdmUoJ2R5bmFtaWNDb250cm9sbGVyJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgX2R5bmFtaWNDb250cm9sbGVyLmR5bmFtaWNDb250cm9sbGVyKCk7XG59KS5kaXJlY3RpdmUoJ3NldERvbScsIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gbmV3IF9zZXREb20uc2V0RG9tKCk7XG59KS5kaXJlY3RpdmUoJ2luRGlhbG9nJywgZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBuZXcgX2luLmluRGlhbG9nKCk7XG59KTtcblxuLy8gUHVyZSBqYXZhc2NyaXB0IEZsb3cgTWFuYWdlciB3aWRnZXRzO1xuZmxvd01hbmFnZXIud2lkZ2V0KCd3aWRnZXRDb25uZWN0b3InLCBfd2lkZ2V0LndpZGdldENvbm5lY3Rvcik7XG5mbG93TWFuYWdlci53aWRnZXQoJ3ZpZGVvUGxheWVyJywgX3ZpZGVvLnZpZGVvUGxheWVyKTtcbmZsb3dNYW5hZ2VyLndpZGdldCgnM2RQbGF5ZXInLCBfZC4kM2RQbGF5ZXIpO1xuZmxvd01hbmFnZXIud2lkZ2V0KCd0aW1lbGluZScsIF90aW1lbGluZS50aW1lbGluZSk7XG5mbG93TWFuYWdlci53aWRnZXQoJ2NvbmZpZ1dpZGdldCcsIF9jb25maWcuY29uZmlnV2lkZ2V0KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qcyIsIi8qIGdsb2JhbCBtYWxhcmtleTpmYWxzZSwgbW9tZW50OmZhbHNlICovXHJcblxyXG5pbXBvcnQgeyBjb25maWcgfSBmcm9tICcuL2luZGV4LmNvbmZpZyc7XHJcbmltcG9ydCB7IHJvdXRlckNvbmZpZyB9IGZyb20gJy4vaW5kZXgucm91dGUnO1xyXG5pbXBvcnQgeyBydW5CbG9jayB9IGZyb20gJy4vaW5kZXgucnVuJztcclxuaW1wb3J0IHsgTWFpbkNvbnRyb2xsZXIgfSBmcm9tICcuL21haW4vbWFpbi5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgRmxvd0NvbnRyb2xsZXIgfSBmcm9tICcuL2Zsb3dNYW5hZ2VyL2Zsb3dNYW5hZ2VyLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBHcmlkQ29udHJvbGxlciB9IGZyb20gJy4vZmxvd01hbmFnZXIvZ3JpZC5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgUG9ydGFsTG9naW5Db250cm9sbGVyIH0gZnJvbSAnLi9wb3J0YWwvbG9naW4vcG9ydGFsLmxvZ2luLmNvbnRyb2xsZXInO1xyXG5pbXBvcnQgeyBEYXNoYm9hcmRDb250cm9sbGVyIH0gZnJvbSAnLi9wb3J0YWwvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyJztcclxuaW1wb3J0IHsgaHR0cCB9IGZyb20gJy4vcG9ydGFsL2h0dHBTZXJ2aWNlL2h0dHBTZXJ2aWNlJztcclxuXHJcbmltcG9ydCB7IHZpZGVvUGxheWVyIH0gZnJvbSAnLi93aWRnZXRzL2NvbW1vbi92aWRlb1BsYXllci92aWRlby5wbGF5ZXInO1xyXG5pbXBvcnQgeyAkM2RQbGF5ZXIgfSBmcm9tICcuL3dpZGdldHMvY29tbW9uLzNkUGxheWVyLzNkLnBsYXllcic7XHJcbmltcG9ydCB7IHRpbWVsaW5lIH0gZnJvbSAnLi93aWRnZXRzL2NvbW1vbi90aW1lbGluZS90aW1lbGluZSc7XHJcbmltcG9ydCB7IGNvbmZpZ1dpZGdldCB9IGZyb20gJy4vd2lkZ2V0cy9jb21tb24vY29uZmlnV2lkZ2V0L2NvbmZpZy53aWRnZXQnO1xyXG5cclxuaW1wb3J0IHsgd2lkZ2V0Q29ubmVjdG9yIH0gZnJvbSAnLi93aWRnZXRzL2NvbW1vbi93aWRnZXRDb25uZWN0b3Ivd2lkZ2V0LmNvbm5lY3Rvcic7XHJcbmltcG9ydCB7IGdyaWRTZXJ2aWNlIH0gZnJvbSAnLi9mbG93TWFuYWdlci9ncmlkLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBhdXRoU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgYXV0aEludGVyY2VwdG9yIH0gZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBoZWxwZXJTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IHRyZWVEYXRhU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdHJlZWRhdGEuc2VydmljZSc7XHJcbmltcG9ydCB7IGxvZ2luU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvbG9naW4uc2VydmljZSc7XHJcbmltcG9ydCB7IGFwcENvbnN0YW50cyB9IGZyb20gJy4vY29uc3RhbnRzL2FwcC5jb25zdGFudHMnO1xyXG5pbXBvcnQgeyByZXF1ZXN0U2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvcmVxdWVzdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgYXNzZXRBUElTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9hc3NldC5hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IGdyb3VwQVBJU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZ3JvdXAuYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyB1c2VyQVBJU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXNlci5hcGkuc2VydmljZSc7XHJcbmltcG9ydCB7IHJvbGVBUElTZXJ2aWNlIH0gZnJvbSAnLi9zZXJ2aWNlcy9yb2xlLmFwaS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgaGVscGVyVGVzdFNlcnZpY2UgfSBmcm9tICcuL3Rlc3QvaGVscGVydGVzdC5zZXJ2aWNlJztcclxuaW1wb3J0IHsgcG9ydGFsTG9naW5TZXJ2aWNlIH0gZnJvbSAnLi9wb3J0YWwvbG9naW4vcG9ydGFsLmxvZ2luLnNlcnZpY2UnO1xyXG5cclxuaW1wb3J0IHsgJGluRGlhbG9nIH0gZnJvbSAnLi93aWRnZXRzL2RpcmVjdGl2ZXMvaW5EaWFsb2cvaW4uZGlhbG9nLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBpbkRpYWxvZyB9IGZyb20gJy4vd2lkZ2V0cy9kaXJlY3RpdmVzL2luRGlhbG9nL2luLmRpYWxvZyc7XHJcbmltcG9ydCB7IGR5bmFtaWNDb250cm9sbGVyIH0gZnJvbSAnLi9mbG93TWFuYWdlci9keW5hbWljLmNvbnRyb2xsZXIuZGlyZWN0aXZlJztcclxuaW1wb3J0IHsgc2V0RG9tIH0gZnJvbSAnLi9mbG93TWFuYWdlci9zZXQuZG9tLmRpcmVjdGl2ZSc7XHJcblxyXG5cclxuYW5ndWxhci5tb2R1bGUoJ21hbmFnZW1lbnQnLCBbICduZ0Nvb2tpZXMnLCAnbmdUb3VjaCcsICduZ1Nhbml0aXplJywgJ25nTWVzc2FnZXMnLCAnbmdBcmlhJywgJ25nUmVzb3VyY2UnLCAndWkucm91dGVyJywgJ21tLmZvdW5kYXRpb24nLCAndG9hc3RyJ10pXHJcblxyXG5cclxuICAgIC5jb25maWcoY29uZmlnKVxyXG4gICAgLmNvbmZpZyhyb3V0ZXJDb25maWcpXHJcbiAgICAvLyAuY29uZmlnKGZ1bmN0aW9uKCRodHRwUHJvdmlkZXIpIHtcclxuICAgIC8vICAgICAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdhdXRoSW50ZXJjZXB0b3InKTtcclxuICAgIC8vIH0pXHJcblxyXG4gICAgLy8gaGF2ZSB0byBmaXggYWJvdmUgY29uZmlnXHJcblxyXG4gICAgLmNvbnN0YW50KCdtb21lbnQnLCBtb21lbnQpXHJcbiAgICAvLyAuY29uc3RhbnQoJ0FQSV9IT1NUJywgJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMC9hcGknKVxyXG4gICAgLmNvbnN0YW50KCdBUElfSE9TVCcsICdodHRwOi8vYXBpLmJsdWVjaXBoZXJzLmNvbS9hcGknKVxyXG4gICAgLmNvbnN0YW50KCdUT0tFTl9LRVknLCAnSldUX1RPS0VOX0tFWScpXHJcblxyXG4gICAgLnJ1bihydW5CbG9jaylcclxuXHJcbiAgICAuc2VydmljZSgnZ3JpZFNlcnZpY2UnLCBncmlkU2VydmljZSlcclxuICAgIC5zZXJ2aWNlKCdhdXRoU2VydmljZScsIGF1dGhTZXJ2aWNlKVxyXG4gICAgLnNlcnZpY2UoJ2F1dGhJbnRlcmNlcHRvcicsIGF1dGhJbnRlcmNlcHRvcilcclxuICAgIC5zZXJ2aWNlKCdoZWxwZXJTZXJ2aWNlJywgaGVscGVyU2VydmljZSlcclxuICAgIC5zZXJ2aWNlKCd0cmVlRGF0YVNlcnZpY2UnLCB0cmVlRGF0YVNlcnZpY2UpXHJcbiAgICAuc2VydmljZSgnbG9naW5TZXJ2aWNlJywgbG9naW5TZXJ2aWNlKVxyXG4gICAgLnNlcnZpY2UoJ3JlcXVlc3RTZXJ2aWNlJywgcmVxdWVzdFNlcnZpY2UpXHJcbiAgICAuc2VydmljZSgnYXNzZXRBUElTZXJ2aWNlJywgYXNzZXRBUElTZXJ2aWNlKVxyXG4gICAgLnNlcnZpY2UoJ2dyb3VwQVBJU2VydmljZScsIGdyb3VwQVBJU2VydmljZSlcclxuICAgIC5zZXJ2aWNlKCd1c2VyQVBJU2VydmljZScsIHVzZXJBUElTZXJ2aWNlKVxyXG4gICAgLnNlcnZpY2UoJ3JvbGVBUElTZXJ2aWNlJywgcm9sZUFQSVNlcnZpY2UpXHJcbiAgICAuc2VydmljZSgnaGVscGVyVGVzdFNlcnZpY2UnLCBoZWxwZXJUZXN0U2VydmljZSlcclxuICAgIC5zZXJ2aWNlKCdhcHBDb25zdGFudHMnLCBhcHBDb25zdGFudHMpXHJcbiAgICAuc2VydmljZSgnJGluRGlhbG9nJywgJGluRGlhbG9nKVxyXG4gICAgLnNlcnZpY2UoJ3BvcnRhbExvZ2luU2VydmljZScsIHBvcnRhbExvZ2luU2VydmljZSlcclxuICAgIC5zZXJ2aWNlKCdodHRwJywgaHR0cClcclxuXHJcbiAgICAuY29udHJvbGxlcignTWFpbkNvbnRyb2xsZXInLCBNYWluQ29udHJvbGxlcilcclxuICAgIC5jb250cm9sbGVyKCdGbG93Q29udHJvbGxlcicsIEZsb3dDb250cm9sbGVyKVxyXG4gICAgLmNvbnRyb2xsZXIoJ0dyaWRDb250cm9sbGVyJywgR3JpZENvbnRyb2xsZXIpXHJcbiAgICAuY29udHJvbGxlcignRGFzaGJvYXJkQ29udHJvbGxlcicsIERhc2hib2FyZENvbnRyb2xsZXIpXHJcbiAgICAuY29udHJvbGxlcignUG9ydGFsTG9naW5Db250cm9sbGVyJywgUG9ydGFsTG9naW5Db250cm9sbGVyKVxyXG5cclxuICAgIC5kaXJlY3RpdmUoJ2R5bmFtaWNDb250cm9sbGVyJywoKSA9PiBuZXcgZHluYW1pY0NvbnRyb2xsZXIoKSlcclxuICAgIC5kaXJlY3RpdmUoJ3NldERvbScsKCkgPT4gbmV3IHNldERvbSgpKVxyXG4gICAgLmRpcmVjdGl2ZSgnaW5EaWFsb2cnLCgpID0+IG5ldyBpbkRpYWxvZygpKTtcclxuXHJcbiAgICAvLyBQdXJlIGphdmFzY3JpcHQgRmxvdyBNYW5hZ2VyIHdpZGdldHM7XHJcbiAgICBmbG93TWFuYWdlci53aWRnZXQoJ3dpZGdldENvbm5lY3RvcicsIHdpZGdldENvbm5lY3Rvcik7XHJcbiAgICBmbG93TWFuYWdlci53aWRnZXQoJ3ZpZGVvUGxheWVyJywgdmlkZW9QbGF5ZXIpO1xyXG4gICAgZmxvd01hbmFnZXIud2lkZ2V0KCczZFBsYXllcicsICQzZFBsYXllcik7XHJcbiAgICBmbG93TWFuYWdlci53aWRnZXQoJ3RpbWVsaW5lJywgdGltZWxpbmUpO1xyXG4gICAgZmxvd01hbmFnZXIud2lkZ2V0KCdjb25maWdXaWRnZXQnLCBjb25maWdXaWRnZXQpO1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4Lm1vZHVsZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY29uZmlnID0gY29uZmlnO1xuZnVuY3Rpb24gY29uZmlnKCRsb2dQcm92aWRlciwgdG9hc3RyQ29uZmlnKSB7XG4gICduZ0luamVjdCc7XG4gIC8vIEVuYWJsZSBsb2dcblxuICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xuXG4gIC8vIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnRpbWVPdXQgPSAzMDAwO1xuICB0b2FzdHJDb25maWcucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xuICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xuICB0b2FzdHJDb25maWcucHJvZ3Jlc3NCYXIgPSB0cnVlO1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvaW5kZXguY29uZmlnLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZyAoJGxvZ1Byb3ZpZGVyLCB0b2FzdHJDb25maWcpIHtcbiAgJ25nSW5qZWN0JztcbiAgLy8gRW5hYmxlIGxvZ1xuICAkbG9nUHJvdmlkZXIuZGVidWdFbmFibGVkKHRydWUpO1xuXG4gIC8vIFNldCBvcHRpb25zIHRoaXJkLXBhcnR5IGxpYlxuICB0b2FzdHJDb25maWcuYWxsb3dIdG1sID0gdHJ1ZTtcbiAgdG9hc3RyQ29uZmlnLnRpbWVPdXQgPSAzMDAwO1xuICB0b2FzdHJDb25maWcucG9zaXRpb25DbGFzcyA9ICd0b2FzdC10b3AtcmlnaHQnO1xuICB0b2FzdHJDb25maWcucHJldmVudER1cGxpY2F0ZXMgPSB0cnVlO1xuICB0b2FzdHJDb25maWcucHJvZ3Jlc3NCYXIgPSB0cnVlO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5jb25maWcuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMucm91dGVyQ29uZmlnID0gcm91dGVyQ29uZmlnO1xuZnVuY3Rpb24gcm91dGVyQ29uZmlnKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgJHN0YXRlUHJvdmlkZXIuc3RhdGUoJ2Rhc2hib2FyZCcsIHtcbiAgICAgICAgdXJsOiAnLycsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3BvcnRhbC9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnLFxuICAgICAgICBjb250cm9sbGVyOiAnRGFzaGJvYXJkQ29udHJvbGxlcicsXG4gICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgIH0pLnN0YXRlKCdwb3J0YWxMb2dpbicsIHtcbiAgICAgICAgdXJsOiAnL3BvcnRhbC1sb2dpbicsXG4gICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3BvcnRhbC9sb2dpbi9wb3J0YWwubG9naW4uaHRtbCcsXG4gICAgICAgIGNvbnRyb2xsZXI6ICdQb3J0YWxMb2dpbkNvbnRyb2xsZXInLFxuICAgICAgICBjb250cm9sbGVyQXM6ICd2bSdcbiAgICB9KTtcblxuICAgICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoJy8nKTtcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnJvdXRlLmpzIiwiZXhwb3J0IGZ1bmN0aW9uIHJvdXRlckNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikge1xuICAgICduZ0luamVjdCc7XG4gICAgJHN0YXRlUHJvdmlkZXJcbiAgICAgICAgLnN0YXRlKCdkYXNoYm9hcmQnLCB7XG4gICAgICAgICAgICB1cmw6ICcvJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3BvcnRhbC9kYXNoYm9hcmQvZGFzaGJvYXJkLmh0bWwnLFxuICAgICAgICAgICAgY29udHJvbGxlcjogJ0Rhc2hib2FyZENvbnRyb2xsZXInLFxuICAgICAgICAgICAgY29udHJvbGxlckFzOiAndm0nXG4gICAgICAgIH0pXG4gICAgICAgIC5zdGF0ZSgncG9ydGFsTG9naW4nLCB7XG4gICAgICAgICAgICB1cmw6ICcvcG9ydGFsLWxvZ2luJyxcbiAgICAgICAgICAgIHRlbXBsYXRlVXJsOiAnYXBwL3BvcnRhbC9sb2dpbi9wb3J0YWwubG9naW4uaHRtbCcsXG4gICAgICAgICAgICBjb250cm9sbGVyOiAnUG9ydGFsTG9naW5Db250cm9sbGVyJyxcbiAgICAgICAgICAgIGNvbnRyb2xsZXJBczogJ3ZtJ1xuICAgICAgICB9KTtcblxuXG4gICAgJHVybFJvdXRlclByb3ZpZGVyLm90aGVyd2lzZSgnLycpO1xufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5yb3V0ZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5ydW5CbG9jayA9IHJ1bkJsb2NrO1xuZnVuY3Rpb24gcnVuQmxvY2soJHJvb3RTY29wZSwgJGxvZywgJHN0YXRlLCAkY29va2llU3RvcmUpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgJGxvZy5sb2coXCJydW5CbG9ja1wiKTtcbiAgICAkcm9vdFNjb3BlLnNob3dMb2dpbkRpYWxvZyA9IHRydWU7XG4gICAgLy8kcm9vdFNjb3BlLiRlbWl0KCdnZXREYXRhJywgeydsb2dpbic6IHRydWV9KTtcblxuICAgIC8vICR3aW5kb3cuZ2EoJ2NyZWF0ZScsICdVQS04NjgyMDI4Ni0yJywgJ2F1dG8nKTtcbiAgICAvL1xuICAgIC8vIC8vIHRyYWNrIHBhZ2V2aWV3IG9uIHN0YXRlIGNoYW5nZVxuICAgIC8vICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdWNjZXNzJywgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgLy8gICAkd2luZG93LmdhKCdzZW5kJywgJ3BhZ2V2aWV3JywgJGxvY2F0aW9uLnBhdGgoKSk7XG4gICAgLy8gfSk7XG5cblxuICAgICRyb290U2NvcGUuJG9uKCckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uIChlLCB0b1N0YXRlLCB0b1BhcmFtcywgZnJvbVN0YXRlLCBmcm9tUGFyYW1zKSB7XG5cbiAgICAgICAgdmFyIGlzTG9naW4gPSB0b1N0YXRlLm5hbWUgPT09IFwicG9ydGFsTG9naW5cIjtcbiAgICAgICAgaWYgKGlzTG9naW4pIHtcbiAgICAgICAgICAgIHJldHVybjsgLy8gbm8gbmVlZCB0byByZWRpcmVjdFxuICAgICAgICB9XG5cbiAgICAgICAgLy8gbm93LCByZWRpcmVjdCBvbmx5IG5vdCBhdXRoZW50aWNhdGVkXG5cbiAgICAgICAgdmFyIHVzZXJJbmZvID0gaXNBdXRoZWQoKTtcblxuICAgICAgICBpZiAodXNlckluZm8gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7IC8vIHN0b3AgY3VycmVudCBleGVjdXRpb25cbiAgICAgICAgICAgICRzdGF0ZS5nbygncG9ydGFsTG9naW4nKTsgLy8gZ28gdG8gbG9naW5cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gaXNBdXRoZWQoKSB7XG4gICAgICAgIGlmICgkY29va2llU3RvcmUuZ2V0KCd1c2VyRGF0YScpKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2luZGV4LnJ1bi5qcyIsImV4cG9ydCBmdW5jdGlvbiBydW5CbG9jayAoJHJvb3RTY29wZSwgJGxvZywgJHN0YXRlLCAkY29va2llU3RvcmUpICB7XHJcbiAgICAnbmdJbmplY3QnO1xyXG5cclxuXHJcbiAgICAkbG9nLmxvZyhcInJ1bkJsb2NrXCIpO1xyXG4gICAgJHJvb3RTY29wZS5zaG93TG9naW5EaWFsb2cgPSB0cnVlO1xyXG4gICAgLy8kcm9vdFNjb3BlLiRlbWl0KCdnZXREYXRhJywgeydsb2dpbic6IHRydWV9KTtcclxuXHJcbiAgICAvLyAkd2luZG93LmdhKCdjcmVhdGUnLCAnVUEtODY4MjAyODYtMicsICdhdXRvJyk7XHJcbiAgICAvL1xyXG4gICAgLy8gLy8gdHJhY2sgcGFnZXZpZXcgb24gc3RhdGUgY2hhbmdlXHJcbiAgICAvLyAkcm9vdFNjb3BlLiRvbignJHN0YXRlQ2hhbmdlU3VjY2VzcycsIGZ1bmN0aW9uIChldmVudCkge1xyXG4gICAgLy8gICAkd2luZG93LmdhKCdzZW5kJywgJ3BhZ2V2aWV3JywgJGxvY2F0aW9uLnBhdGgoKSk7XHJcbiAgICAvLyB9KTtcclxuXHJcblxyXG4gICAgJHJvb3RTY29wZS4kb24oICckc3RhdGVDaGFuZ2VTdGFydCcsIGZ1bmN0aW9uKGUsIHRvU3RhdGUgICwgdG9QYXJhbXNcclxuICAgICAgICAsIGZyb21TdGF0ZSwgZnJvbVBhcmFtcykge1xyXG5cclxuICAgICAgICB2YXIgaXNMb2dpbiA9IHRvU3RhdGUubmFtZSA9PT0gXCJwb3J0YWxMb2dpblwiO1xyXG4gICAgICAgIGlmKGlzTG9naW4pe1xyXG4gICAgICAgICAgICByZXR1cm47IC8vIG5vIG5lZWQgdG8gcmVkaXJlY3RcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIG5vdywgcmVkaXJlY3Qgb25seSBub3QgYXV0aGVudGljYXRlZFxyXG5cclxuICAgICAgICB2YXIgdXNlckluZm8gPSBpc0F1dGhlZCgpO1xyXG5cclxuICAgICAgICBpZih1c2VySW5mbyA9PT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpOyAvLyBzdG9wIGN1cnJlbnQgZXhlY3V0aW9uXHJcbiAgICAgICAgICAgICRzdGF0ZS5nbygncG9ydGFsTG9naW4nKTsgLy8gZ28gdG8gbG9naW5cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBmdW5jdGlvbiBpc0F1dGhlZCgpIHtcclxuICAgICAgICBpZigkY29va2llU3RvcmUuZ2V0KCd1c2VyRGF0YScpKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9pbmRleC5ydW4uanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICB2YWx1ZTogdHJ1ZVxufSk7XG5cbnZhciBfY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykgeyBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7IHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07IGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTsgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlOyBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlOyBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7IH0gfSByZXR1cm4gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykgeyBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpOyBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTsgcmV0dXJuIENvbnN0cnVjdG9yOyB9OyB9KCk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBNYWluQ29udHJvbGxlciA9IGV4cG9ydHMuTWFpbkNvbnRyb2xsZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIE1haW5Db250cm9sbGVyKGdyaWRTZXJ2aWNlKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBNYWluQ29udHJvbGxlcik7XG5cbiAgICB0aGlzLmF3ZXNvbWVUaGluZ3MgPSBbXTtcbiAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XG4gICAgdGhpcy5jcmVhdGlvbkRhdGUgPSAxNDg2MDQ1NDcxODM2O1xuXG4gICAgdGhpcy50ZXN0RnVuY3Rpb24oZ3JpZFNlcnZpY2UpO1xuICB9XG5cbiAgX2NyZWF0ZUNsYXNzKE1haW5Db250cm9sbGVyLCBbe1xuICAgIGtleTogJ3Rlc3RGdW5jdGlvbicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRlc3RGdW5jdGlvbihOYXZUcmVlU2VydmljZSkge1xuICAgICAgLy9jb25zb2xlLmxvZygncnVubmluZyB0ZXN0IGZ1bmN0aW9uIGlzIGF3ZXNvbWUnLCBOYXZUcmVlU2VydmljZS5nZXREYXRhKCkpO1xuICAgIH1cbiAgfV0pO1xuXG4gIHJldHVybiBNYWluQ29udHJvbGxlcjtcbn0oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzIiwiZXhwb3J0IGNsYXNzIE1haW5Db250cm9sbGVyIHtcclxuICBjb25zdHJ1Y3RvciAoZ3JpZFNlcnZpY2UpIHtcclxuICAgICduZ0luamVjdCc7XHJcblxyXG4gICAgdGhpcy5hd2Vzb21lVGhpbmdzID0gW107XHJcbiAgICB0aGlzLmNsYXNzQW5pbWF0aW9uID0gJyc7XHJcbiAgICB0aGlzLmNyZWF0aW9uRGF0ZSA9IDE0ODYwNDU0NzE4MzY7XHJcblxyXG4gICAgdGhpcy50ZXN0RnVuY3Rpb24oZ3JpZFNlcnZpY2UpO1xyXG4gIH1cclxuXHJcbiAgdGVzdEZ1bmN0aW9uKE5hdlRyZWVTZXJ2aWNlKSB7XHJcbiAgICAvL2NvbnNvbGUubG9nKCdydW5uaW5nIHRlc3QgZnVuY3Rpb24gaXMgYXdlc29tZScsIE5hdlRyZWVTZXJ2aWNlLmdldERhdGEoKSk7XHJcbiAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL21haW4vbWFpbi5jb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBGbG93Q29udHJvbGxlciA9IGV4cG9ydHMuRmxvd0NvbnRyb2xsZXIgPSBmdW5jdGlvbiBGbG93Q29udHJvbGxlcihncmlkU2VydmljZSwgJHNjb3BlKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBGbG93Q29udHJvbGxlcik7XG5cbiAgICBjb25zb2xlLmxvZygnZmxvdyBjb250cm9sbGVyJyk7XG5cbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZhciByZWN0V2lkdGggPSAxMjA7XG4gICAgdmFyIHJlY3RIZWlnaHQgPSAzNTtcbiAgICB2YXIgZGVmcztcbiAgICB2YXIgZmlsdGVyO1xuICAgIHZhciBmZU1lcmdlO1xuICAgIHZhciB3RGF0YSA9IGdyaWRTZXJ2aWNlLmdldFdpZGdldERhdGEoKTtcbiAgICB2YXIgd2lkZ2V0cyA9IHdEYXRhLndpZGdldHM7XG4gICAgdmFyIHdpZGdldERhdGEgPSB3RGF0YS53aWRnZXREYXRhO1xuICAgIHZhciBpbmRleEJ5VGFnID0gd0RhdGEuaW5kZXhCeVRhZztcbiAgICB2YXIgdGVtcFg7XG4gICAgdmFyIHRlbXBZO1xuICAgIHZhciBkcmFnZ2VkID0gZmFsc2U7XG4gICAgdmFyIGRpc2FibGVEcmFnID0gZmFsc2U7XG4gICAgdm0uZGVmYXVsdE1ldGhvZCA9IGZsb3dNYW5hZ2VyLmdldERlZmF1bHRNZXRob2QoKTtcblxuICAgIHZtLm1pZEggPSAyMDAwO1xuICAgIHZtLm1pZFcgPSAyMDAwO1xuICAgIHZtLmZsb3dKU09OID0gZ3JpZFNlcnZpY2UuZ2V0RmxvdygpO1xuICAgIHZtLnNlbGVjdGVkVGFiID0gMDtcbiAgICB2bS53aWRnZXRTZXQgPSB3RGF0YS53aWRnZXRTZXQ7XG4gICAgdm0ubWNQb3B1cFRhYkluZGV4ID0gMDtcbiAgICB2bS5mbG93TGluZXMgPSB7fTtcblxuICAgIHZtLnZpcyA9IGQzLnNlbGVjdCgnI2ZtLW1pZHBhbicpLmF0dHIoJ3dpZHRoJywgdm0ubWlkVykuYXR0cignaGVpZ2h0Jywgdm0ubWlkSCkuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyB2bS5taWRXICsgXCIgXCIgKyB2bS5taWRIKS5vbihcImNvbnRleHRtZW51XCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSkub24oXCJtb3VzZXVwXCIsIHN2Z01vdXNldXApO1xuXG4gICAgZnVuY3Rpb24gc3ZnTW91c2V1cCgpIHtcbiAgICAgICAgZGVzZWxlY3RBbGwoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkZXNlbGVjdEFsbCgpIHtcbiAgICAgICAgdm0udmlzLnNlbGVjdEFsbCgnZycpLmF0dHIoJ2NsYXNzJywgJ2Zsb3ctcmVjdC1tYWluJyk7XG4gICAgICAgIHZtLnNlbGVjdGVkV2lkZ2V0ID0gbnVsbDtcbiAgICAgICAgdm0uc2VsZWN0ZWRGdW5jdGlvbiA9IG51bGw7XG4gICAgICAgIGRpc2FibGVEcmFnID0gZmFsc2U7XG4gICAgICAgIGlmICghJHNjb3BlLiQkcGhhc2UpIHtcbiAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdFbmQoZCwgaSkge1xuICAgICAgICBpZiAoZHJhZ2dlZCAmJiAhZGlzYWJsZURyYWcpIHtcbiAgICAgICAgICAgIC8vIFNhdmluZyB3aWRnZXREYXRhIGludG8gbG9jYWxzdG9yYWdlXG4gICAgICAgICAgICB2YXIgdGFnTmFtZSA9IGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwidGFnLW5hbWVcIik7XG4gICAgICAgICAgICB2YXIgd2lkZ2V0ID0gZ2V0TXlXaWRnZXQodGFnTmFtZSk7XG4gICAgICAgICAgICB3aWRnZXQucmVjdFNldHRpbmdzLnggPSB0ZW1wWDtcbiAgICAgICAgICAgIHdpZGdldC5yZWN0U2V0dGluZ3MueSA9IHRlbXBZO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh3aWRnZXREYXRhKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3aWRnZXREYXRhJywgZGF0YSk7XG4gICAgICAgICAgICByZWZyZXNoTGluZXMoKTtcbiAgICAgICAgICAgIGRyYWdnZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYWdnaW5nKGQsIGkpIHtcbiAgICAgICAgaWYgKCFkaXNhYmxlRHJhZykge1xuICAgICAgICAgICAgdGVtcFggPSBkMy5ldmVudC54O1xuICAgICAgICAgICAgdGVtcFkgPSBkMy5ldmVudC55O1xuICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBbZDMuZXZlbnQueCwgZDMuZXZlbnQueV0gKyBcIilcIjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIHRhZ05hbWUgPSBkMy5zZWxlY3QodGhpcykuYXR0cihcInRhZy1uYW1lXCIpO1xuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLmZsb3dMaW5lcykge1xuICAgICAgICAgICAgICAgIGlmICh2bS5mbG93TGluZXNbaWR4XS5mcm9tID09IHRhZ05hbWUgfHwgdm0uZmxvd0xpbmVzW2lkeF0udG8gPT0gdGFnTmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBkcmF3TGluZSh2bS5mbG93TGluZXNbaWR4XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHJhZ2dlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB2bS5yZW1vdmVGbG93ID0gZnVuY3Rpb24gKGZyb20sIHRvLCBpZCkge1xuICAgICAgICBpZiAodm0uZmxvd0pTT05bZnJvbV1bdG9dKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gdm0uZmxvd0pTT05bZnJvbV1bdG9dKSB7XG4gICAgICAgICAgICAgICAgaWYgKHZtLmZsb3dKU09OW2Zyb21dW3RvXVtpZHhdLmlkID09IGlkKSB7XG4gICAgICAgICAgICAgICAgICAgIHZtLmZsb3dKU09OW2Zyb21dW3RvXS5zcGxpY2UoaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRmxvdygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2bS5zZWxlY3RGdW5jdGlvbiA9IGZ1bmN0aW9uIChvdXRwdXQpIHtcblxuICAgICAgICBkaXNhYmxlRHJhZyA9IHRydWU7XG4gICAgICAgIGlmIChvdXRwdXQucGFyYW1zID09IFwibWV0aG9kXCIpIHtcbiAgICAgICAgICAgIG91dHB1dC5wYXJhbXMgPSB2bS5zZWxlY3RlZFdpZGdldC5zZXR0aW5ncy5ydW5QYXJhbXM7XG4gICAgICAgIH1cblxuICAgICAgICB2bS5zZWxlY3RlZEZ1bmN0aW9uID0gYW5ndWxhci5jb3B5KG91dHB1dCk7XG4gICAgICAgIHZtLnRlbXBGdW5jU2VsT2JqZWN0ID0ge307XG5cbiAgICAgICAgLyogQ2hlY2tpbmcgZm9yIHRoZSBjb25uZWN0YWJsZSBmdW5jdGlvbiAqL1xuICAgICAgICBmb3IgKHZhciBpZHggaW4gd2lkZ2V0cykge1xuICAgICAgICAgICAgdmFyIHdpZGdldCA9IHdpZGdldERhdGFbaWR4XTtcbiAgICAgICAgICAgIGlmICh3aWRnZXQuaWQgIT0gdm0uc2VsZWN0ZWRXaWRnZXQuaWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcFdpZCA9IHsgaWQ6IHdpZGdldC5pZCwgbmFtZTogd2lkZ2V0Lm5hbWUsIHRhZzogd2lkZ2V0LnRhZywgY29ubmVjdGFibGU6IGZhbHNlLCBpbnB1dHM6IFtdIH07XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgamR4IGluIHdpZGdldC5tZXRob2RzKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IGFuZ3VsYXIuY29weSh3aWRnZXQubWV0aG9kc1tqZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlucHV0LmlucHV0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdElucFQgPSBhbmd1bGFyLmNvcHkoaW5wdXQucGFyYW1zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0U2VsVCA9IGFuZ3VsYXIuY29weSh2bS5zZWxlY3RlZEZ1bmN0aW9uLnBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodFNlbFQgJiYgdElucFQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdENvdW50ID0gdElucFQubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0Q291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdEpkeCBpbiB0SW5wVCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB0SWR4IGluIHRTZWxUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodFNlbFRbdElkeF0gPT0gdElucFRbdEpkeF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0Q291bnRlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0Q291bnRlciA+PSB0Q291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvdW5kID0gaXNNZXRob2RGbG93RGVmaW5lZCh2bS5zZWxlY3RlZFdpZGdldC50YWcsIHdpZGdldC50YWcsIHZtLnNlbGVjdGVkRnVuY3Rpb24ubmFtZSwgaW5wdXQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBXaWQuY29ubmVjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGVtcFdpZC50YWcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZW1wV2lkLmlucHV0cy5wdXNoKGlucHV0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2bS50ZW1wRnVuY1NlbE9iamVjdFt0ZW1wV2lkLnRhZ10gPSB0ZW1wV2lkO1xuICAgICAgICAgICAgICAgIHZtLm1ldGhvZHNUb1Nob3cgPSB0ZW1wV2lkLmlucHV0cztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpZHggaW4gdm0udGVtcEZ1bmNTZWxPYmplY3QpIHtcbiAgICAgICAgICAgIGlmICghdm0udGVtcEZ1bmNTZWxPYmplY3RbaWR4XS5jb25uZWN0YWJsZSkge1xuICAgICAgICAgICAgICAgIHZhciB0UmVjdCA9IGdldEQzUmVjdCh2bS50ZW1wRnVuY1NlbE9iamVjdFtpZHhdLnRhZyk7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBDbGFzcyA9IHRSZWN0LmF0dHIoJ2NsYXNzJyk7XG4gICAgICAgICAgICAgICAgdFJlY3QuYXR0cignY2xhc3MnLCB0ZW1wQ2xhc3MgKyAnIGRpc2FibGVkJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdm0udGVtcElucHV0ID0ge307XG4gICAgdm0udGVtcFNlbGVjdGVkSW5wdXQgPSB7fTtcblxuICAgIHZtLnJlbW92ZUlucHV0ID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgICBmb3IgKHZhciBpZHggaW4gdm0uc2VsZWN0ZWRXaWRnZXQubWV0aG9kcykge1xuICAgICAgICAgICAgaWYgKHZtLnNlbGVjdGVkV2lkZ2V0Lm1ldGhvZHNbaWR4XS5pZCA9PSBtZXRob2QuaWQpIHtcbiAgICAgICAgICAgICAgICB2bS5zZWxlY3RlZFdpZGdldC5tZXRob2RzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgICAgIGlmICh2bS50ZW1wU2VsZWN0ZWRJbnB1dC5pZCA9PSBtZXRob2QuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdm0udGVtcFNlbGVjdGVkSW5wdXQgPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdm0ucmVtb3ZlUGFyYW0gPSBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgdm0udGVtcFNlbGVjdGVkSW5wdXQucGFyYW1zLnNwbGljZSh2bS50ZW1wU2VsZWN0ZWRJbnB1dC5wYXJhbXMuaW5kZXhPZihwYXJhbSksIDEpO1xuICAgIH07XG5cbiAgICB2bS5hZGRQYXJhbSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQgPT0gbnVsbCB8fCBldmVudC5rZXlDb2RlID09IDMyKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgIT0gbnVsbCkgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICh2bS50ZW1wUGFyYW0gIT0gbnVsbCkgdm0udGVtcFBhcmFtLnRyaW0oKTtcbiAgICAgICAgICAgIGlmICh2bS50ZW1wUGFyYW0gIT0gbnVsbCAmJiB2bS50ZW1wUGFyYW0gIT0gJycpIHtcbiAgICAgICAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gdm0udGVtcFNlbGVjdGVkSW5wdXQucGFyYW1zKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS50ZW1wU2VsZWN0ZWRJbnB1dC5wYXJhbXNbaWR4XSA9PSB2bS50ZW1wUGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2bS50ZW1wU2VsZWN0ZWRJbnB1dC5wYXJhbXMpIHZtLnRlbXBTZWxlY3RlZElucHV0LnBhcmFtcyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICB2bS50ZW1wU2VsZWN0ZWRJbnB1dC5wYXJhbXMucHVzaCh2bS50ZW1wUGFyYW0pO1xuICAgICAgICAgICAgICAgICAgICB2bS50ZW1wUGFyYW0gPSAnJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdm0uZm9jdXNJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI3BhcmFtSW5wdXQnKS5mb2N1cygpO1xuICAgIH07XG5cbiAgICB2bS5hZGRJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIG1ldGhvZCA9IGFuZ3VsYXIuY29weSh2bS50ZW1wSW5wdXQpO1xuICAgICAgICB2bS50ZW1wSW5wdXQgPSB7fTtcbiAgICAgICAgbWV0aG9kLmlkID0gdm0uc2VsZWN0ZWRXaWRnZXQubWV0aG9kcy5sZW5ndGg7XG4gICAgICAgIHZtLnNlbGVjdGVkV2lkZ2V0Lm1ldGhvZHMucHVzaChtZXRob2QpO1xuICAgIH07XG5cbiAgICAkc2NvcGUuYWNlT3B0aW9uID0ge1xuICAgICAgICBtb2RlOiAnamF2YXNjcmlwdCcsXG4gICAgICAgIG9uTG9hZDogZnVuY3Rpb24gb25Mb2FkKGVkaXRvcikge1xuICAgICAgICAgICAgLy8gZGVmYXVsdHNcbiAgICAgICAgICAgIC8vIGVkaXRvci5zZXRUaGVtZShcImFjZS90aGVtZS9tb25va2FpXCIpO1xuICAgICAgICAgICAgLy8gb3B0aW9uc1xuICAgICAgICAgICAgZWRpdG9yLnNldE9wdGlvbnMoe1xuICAgICAgICAgICAgICAgIHNob3dHdXR0ZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgc2hvd1ByaW50TWFyZ2luOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdm0uY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkKCcjZm0tbWV0aG9kLWNyZWF0ZScpLnNob3coKTtcbiAgICB9O1xuXG4gICAgdm0uc2F2ZU1ldGhvZENyZWF0ZVBvcHVwID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2lkZ2V0RGF0YScsIEpTT04uc3RyaW5naWZ5KHdpZGdldERhdGEpKTtcbiAgICAgICAgJCgnI2ZtLW1ldGhvZC1jcmVhdGUnKS5oaWRlKCk7XG4gICAgICAgIC8vTUFLRSBBUEkgQ0FMTCBUTyBTQVZFIERBVEFcbiAgICB9O1xuXG4gICAgdm0uY2xvc2VNZXRob2RDcmVhdGVQb3B1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI2ZtLW1ldGhvZC1jcmVhdGUnKS5oaWRlKCk7XG4gICAgfTtcblxuICAgIHZtLmVkaXRNZXRob2QgPSBmdW5jdGlvbiAobWV0aG9kKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKG1ldGhvZCk7XG4gICAgfTtcblxuICAgIHZtLmNhbmNlbEFzc2lnbmluZyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnI2ZtLW1ldGhvZC1wb3BDb250JykuaGlkZSgpO1xuICAgIH07XG5cbiAgICB2bS5hc3NpZ25GbG93ID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgICAkKCcjZm0tbWV0aG9kLXBvcENvbnQnKS5oaWRlKCk7XG4gICAgICAgIHZtLnRlbXBGbG93T2JqZWN0ID0ge307XG4gICAgICAgIHZtLnRlbXBGbG93T2JqZWN0LmZyb20gPSBhbmd1bGFyLmNvcHkodm0uc2VsZWN0ZWRXaWRnZXQpO1xuICAgICAgICB2bS50ZW1wRmxvd09iamVjdC50byA9IGFuZ3VsYXIuY29weSh2bS50ZW1wU2VsZWN0ZWRXaWRnZXQpO1xuICAgICAgICB2bS50ZW1wRmxvd09iamVjdC5mcm9tTWV0aG9kID0gYW5ndWxhci5jb3B5KHZtLnNlbGVjdGVkRnVuY3Rpb24pO1xuICAgICAgICB2bS50ZW1wRmxvd09iamVjdC50b01ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgdm0uc2VsZWN0ZWRGdW5jdGlvbiA9IG51bGw7XG4gICAgICAgIHZtLnRlbXBTZWxlY3RlZFdpZGdldCA9IG51bGw7XG4gICAgICAgIHZtLnNlbGVjdGVkV2lkZ2V0ID0gbnVsbDtcbiAgICAgICAgZ2VuRmxvdyh2bS50ZW1wRmxvd09iamVjdCk7XG4gICAgICAgIGRlc2VsZWN0QWxsKCk7XG4gICAgfTtcblxuICAgIGZ1bmN0aW9uIGdlbkZsb3coZGF0YSkge1xuICAgICAgICB2bS5mbG93SlNPTiA9IGdyaWRTZXJ2aWNlLmdldEZsb3coKTtcbiAgICAgICAgY29uc29sZS5sb2codm0uZmxvd0pTT04pO1xuICAgICAgICBpZiAoIXZtLmZsb3dKU09OKSB7XG4gICAgICAgICAgICB2bS5mbG93SlNPTiA9IHt9O1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2ltIGhlcmUnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIShkYXRhLmZyb20udGFnIGluIHZtLmZsb3dKU09OKSkgdm0uZmxvd0pTT05bZGF0YS5mcm9tLnRhZ10gPSB7fTtcbiAgICAgICAgaWYgKCF2bS5mbG93SlNPTltkYXRhLmZyb20udGFnXVtkYXRhLnRvLnRhZ10pIHtcbiAgICAgICAgICAgIHZtLmZsb3dKU09OW2RhdGEuZnJvbS50YWddW2RhdGEudG8udGFnXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHZhciBmbG93Rm91bmQgPSBpc01ldGhvZEZsb3dEZWZpbmVkKGRhdGEuZnJvbS50YWcsIGRhdGEudG8udGFnLCBkYXRhLmZyb21NZXRob2QubmFtZSwgZGF0YS50b01ldGhvZC5uYW1lKTtcbiAgICAgICAgaWYgKCFmbG93Rm91bmQpIHtcbiAgICAgICAgICAgIHZhciBpbmRleCA9IHZtLmZsb3dKU09OW2RhdGEuZnJvbS50YWddW2RhdGEudG8udGFnXS5sZW5ndGg7XG4gICAgICAgICAgICB2bS5mbG93SlNPTltkYXRhLmZyb20udGFnXVtkYXRhLnRvLnRhZ10ucHVzaCh7XG4gICAgICAgICAgICAgICAgaWQ6IGluZGV4LFxuICAgICAgICAgICAgICAgIGZyb206IGRhdGEuZnJvbU1ldGhvZC5uYW1lLFxuICAgICAgICAgICAgICAgIHRvOiBkYXRhLnRvTWV0aG9kLm5hbWVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdXBkYXRlRmxvdygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1tGTE9XIE1BTkFHRVJdIE11bHRpcGxlIGluc3RhbmNlIG9mIHNhbWUgZmxvdyBpcyBub3QgYWxsb3dlZCcpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRmxvdygpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zsb3dKU09OJywgSlNPTi5zdHJpbmdpZnkodm0uZmxvd0pTT04pKTtcbiAgICAgICAgcmVmcmVzaExpbmVzKCk7XG4gICAgICAgIGZsb3dNYW5hZ2VyLnJlZnJlc2hGbG93KGdyaWRTZXJ2aWNlLmdldEZsb3coKSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaXNNZXRob2RGbG93RGVmaW5lZChmcm9tLCB0bywgZm0sIHRtKSB7XG4gICAgICAgIHZhciBmb3VuZCA9IGZhbHNlO1xuICAgICAgICBpZiAoIXZtLmZsb3dKU09OKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmICghdm0uZmxvd0pTT05bZnJvbV0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgaWYgKCF2bS5mbG93SlNPTltmcm9tXVt0b10pIHJldHVybiBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLmZsb3dKU09OW2Zyb21dW3RvXSkge1xuICAgICAgICAgICAgdmFyIHRlbXBPYmogPSB2bS5mbG93SlNPTltmcm9tXVt0b11baWR4XTtcbiAgICAgICAgICAgIGlmICh0ZW1wT2JqLmZyb20gPT0gZm0gJiYgdGVtcE9iai50byA9PSB0bSkge1xuICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhZ1N0YXJ0KGQsIGkpIHtcbiAgICAgICAgaWYgKCF2bS5zZWxlY3RlZEZ1bmN0aW9uKSB7XG4gICAgICAgICAgICB2YXIgdGFnTmFtZSA9IGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwidGFnLW5hbWVcIik7XG4gICAgICAgICAgICB2bS5zZWxlY3RlZFdpZGdldCA9IHdpZGdldHNbaW5kZXhCeVRhZ1t0YWdOYW1lXV07XG4gICAgICAgICAgICB2bS52aXMuc2VsZWN0QWxsKCdnJykuYXR0cignY2xhc3MnLCAnZmxvdy1yZWN0LW1haW4nKTtcbiAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwiY2xhc3NcIiwgJ2Zsb3ctcmVjdC1tYWluIGFjdGl2ZScpO1xuICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHRhZ05hbWUgPSBkMy5zZWxlY3QodGhpcykuYXR0cihcInRhZy1uYW1lXCIpO1xuICAgICAgICAgICAgdm0udGVtcFNlbGVjdGVkV2lkZ2V0ID0gZ2V0TXlXaWRnZXQodGFnTmFtZSk7XG5cbiAgICAgICAgICAgIHZhciBjb25uZWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLnRlbXBGdW5jU2VsT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHZtLnRlbXBGdW5jU2VsT2JqZWN0W2lkeF0uY29ubmVjdGFibGUgPT0gdHJ1ZSAmJiB2bS50ZW1wRnVuY1NlbE9iamVjdFtpZHhdLnRhZyA9PSB2bS50ZW1wU2VsZWN0ZWRXaWRnZXQudGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbm5lY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY29ubmVjdGFibGUpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuJGFwcGx5KCk7XG4gICAgICAgICAgICAgICAgc2hvd01ldGhvZFBvcHVwKGQzLmV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNob3dNZXRob2RQb3B1cChlKSB7XG4gICAgICAgIHZhciBsZWZ0ID0gZS5wYWdlWDtcbiAgICAgICAgdmFyIHRvcCA9IGUucGFnZVk7XG4gICAgICAgIHZhciBib3R0b20gPSAnYXV0byc7XG4gICAgICAgIHZhciByaWdodCA9ICdhdXRvJztcbiAgICAgICAgaWYgKGxlZnQgPiAkKHdpbmRvdykud2lkdGgoKSAvIDIpIHtcbiAgICAgICAgICAgIHJpZ2h0ID0gJCh3aW5kb3cpLndpZHRoKCkgLSBsZWZ0O1xuICAgICAgICAgICAgbGVmdCA9ICdhdXRvJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodG9wID4gJCh3aW5kb3cpLmhlaWdodCgpIC8gMikge1xuICAgICAgICAgICAgYm90dG9tID0gJCh3aW5kb3cpLmhlaWdodCgpIC0gdG9wO1xuICAgICAgICAgICAgdG9wID0gJ2F1dG8nO1xuICAgICAgICB9XG4gICAgICAgICQoJyNmbS1tZXRob2QtcG9wJykuY3NzKHsgbGVmdDogbGVmdCwgdG9wOiB0b3AsIGJvdHRvbTogYm90dG9tLCByaWdodDogcmlnaHQgfSk7XG4gICAgICAgICQoJyNmbS1tZXRob2QtcG9wQ29udCcpLnNob3coKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXREM1JlY3QoaWR4KSB7XG4gICAgICAgIHJldHVybiBkMy5zZWxlY3QoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dpZHJlY3QtJyArIGlkeCkpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldE15V2lkZ2V0KHRhZ05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHdpZGdldERhdGFbaW5kZXhCeVRhZ1t0YWdOYW1lXV07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0TXlOYW1lKG5hbWUpIHtcbiAgICAgICAgcmV0dXJuIG5hbWU7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZHJhdygpIHtcbiAgICAgICAgZDMuc2VsZWN0QWxsKFwiI2ZtLW1pZHBhbiA+ICpcIikucmVtb3ZlKCk7XG5cbiAgICAgICAgZGVmcyA9IHZtLnZpcy5hcHBlbmQoXCJkZWZzXCIpO1xuICAgICAgICBmaWx0ZXIgPSBkZWZzLmFwcGVuZChcImZpbHRlclwiKS5hdHRyKFwiaWRcIiwgXCJkcm9wLXNoYWRvd1wiKS5hdHRyKFwiaGVpZ2h0XCIsIFwiMTUwJVwiKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZChcImZlR2F1c3NpYW5CbHVyXCIpLmF0dHIoXCJpblwiLCBcIlNvdXJjZUFscGhhXCIpLmF0dHIoXCJzdGREZXZpYXRpb25cIiwgMikuYXR0cihcInJlc3VsdFwiLCBcIm9mZnNldGJsdXJcIik7XG4gICAgICAgIGZpbHRlci5hcHBlbmQoXCJmZUNvbXBvbmVudFRyYW5zZmVyXCIpLmFwcGVuZChcImZlRnVuY0FcIikuYXR0cigndHlwZScsICdsaW5lYXInKS5hdHRyKCdzbG9wZScsICcwLjMnKTtcbiAgICAgICAgZmlsdGVyLmFwcGVuZChcImZlT2Zmc2V0XCIpLmF0dHIoXCJpblwiLCBcImJsdXJcIikuYXR0cihcImR4XCIsIDEpLmF0dHIoXCJkeVwiLCAxKS5hdHRyKFwicmVzdWx0XCIsIFwib2Zmc2V0Qmx1clwiKTtcblxuICAgICAgICBmZU1lcmdlID0gZmlsdGVyLmFwcGVuZChcImZlTWVyZ2VcIik7XG4gICAgICAgIGZlTWVyZ2UuYXBwZW5kKFwiZmVNZXJnZU5vZGVcIikuYXR0cihcImluXCIsIFwib2Zmc2V0Qmx1clwiKTtcbiAgICAgICAgZmVNZXJnZS5hcHBlbmQoXCJmZU1lcmdlTm9kZVwiKS5hdHRyKFwiaW5cIiwgXCJTb3VyY2VHcmFwaGljXCIpO1xuXG4gICAgICAgIHZhciByZWN0RHJhZyA9IGQzLmRyYWcoKS5zdWJqZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB0ID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgICAgICAgICAgdmFyIHRyID0gZ2V0VHJhbnNsYXRpb24odC5hdHRyKFwidHJhbnNmb3JtXCIpKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogdC5hdHRyKFwieFwiKSArIHRyWzBdLFxuICAgICAgICAgICAgICAgIHk6IHQuYXR0cihcInlcIikgKyB0clsxXVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSkub24oXCJkcmFnXCIsIGRyYWdnaW5nKS5vbihcImVuZFwiLCBkcmFnRW5kKTtcblxuICAgICAgICBmb3IgKHZhciBpZHggaW4gd2lkZ2V0cykge1xuXG4gICAgICAgICAgICBpZiAoIXdpZGdldERhdGFbaWR4XS5yZWN0U2V0dGluZ3MgfHwgIXdpZGdldERhdGFbaWR4XS5yZWN0U2V0dGluZ3MueCkge1xuICAgICAgICAgICAgICAgIGlmICghd2lkZ2V0RGF0YVtpZHhdLnJlY3RTZXR0aW5ncykgd2lkZ2V0RGF0YVtpZHhdLnJlY3RTZXR0aW5ncyA9IHt9O1xuICAgICAgICAgICAgICAgIHdpZGdldERhdGFbaWR4XS5yZWN0U2V0dGluZ3MueCA9IDA7XG4gICAgICAgICAgICAgICAgd2lkZ2V0RGF0YVtpZHhdLnJlY3RTZXR0aW5ncy55ID0gMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd2lkZ2V0c1tpZHhdLnJlY3QgPSB2bS52aXMuYXBwZW5kKFwiZ1wiKS5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKFwiICsgd2lkZ2V0RGF0YVtpZHhdLnJlY3RTZXR0aW5ncy54ICsgXCIsXCIgKyB3aWRnZXREYXRhW2lkeF0ucmVjdFNldHRpbmdzLnkgKyBcIilcIikuYXR0cihcInRhZy1uYW1lXCIsIHdpZGdldHNbaWR4XS50YWcpLmF0dHIoJ2NsYXNzJywgJ2Zsb3ctcmVjdC1tYWluJykuYXR0cignaWQnLCAnd2lkcmVjdC0nICsgd2lkZ2V0c1tpZHhdLnRhZykub24oXCJtb3VzZWRvd25cIiwgZHJhZ1N0YXJ0KTtcblxuICAgICAgICAgICAgaWYgKGdyaWRTZXJ2aWNlLmlzQ2hyb21lKSB3aWRnZXRzW2lkeF0ucmVjdC5zdHlsZShcImZpbHRlclwiLCBcInVybCgjZHJvcC1zaGFkb3cpXCIpO1xuXG4gICAgICAgICAgICB3aWRnZXRzW2lkeF0ucmVjdC5hcHBlbmQoXCJyZWN0XCIpLmF0dHIoXCJ3aWR0aFwiLCByZWN0SGVpZ2h0KS5hdHRyKFwiaGVpZ2h0XCIsIHJlY3RIZWlnaHQpLmF0dHIoJ2ZpbGwnLCB3aWRnZXRzW2lkeF0uY29sb3IpLmF0dHIoJ2ZvbnQtc2l6ZScsICc3MCUnKS5hdHRyKCdmb250LWZhbWlseScsICdnb3RoYW0nKS5hdHRyKCdjbGFzcycsICdmbG93LXJlY3QtZHJhZ2dlcicpO1xuICAgICAgICAgICAgd2lkZ2V0c1tpZHhdLnJlY3QuYXBwZW5kKFwicmVjdFwiKS5hdHRyKFwid2lkdGhcIiwgcmVjdFdpZHRoKS5hdHRyKFwiaGVpZ2h0XCIsIHJlY3RIZWlnaHQpLmF0dHIoJ2ZpbGwnLCAnI2ZmZicpLmF0dHIoJ3gnLCByZWN0SGVpZ2h0KS5hdHRyKCdmb250LXNpemUnLCAnNzAlJykuYXR0cignZm9udC1mYW1pbHknLCAnZ290aGFtJyk7XG4gICAgICAgICAgICB3aWRnZXRzW2lkeF0ucmVjdC5hcHBlbmQoXCJ0ZXh0XCIpLmF0dHIoJ2ZvbnQtZmFtaWx5JywgJ2dvdGhhbScpLmF0dHIoJ2ZvbnQtc2l6ZScsICc5MCUnKS5hdHRyKCdmaWxsJywgJyM1NTUnKS5hdHRyKCdsaW5lLWhlaWdodCcsIHJlY3RIZWlnaHQpLmF0dHIoJ3gnLCByZWN0SGVpZ2h0ICsgMTApLmF0dHIoJ3knLCAyMikuYXR0cignei1pbmRleCcsIDExMCkudGV4dChnZXRNeU5hbWUod2lkZ2V0RGF0YVtpZHhdLnRhZykpO1xuICAgICAgICAgICAgd2lkZ2V0c1tpZHhdLnJlY3QuYXBwZW5kKFwicmVjdFwiKS5hdHRyKFwid2lkdGhcIiwgMTApLmF0dHIoXCJoZWlnaHRcIiwgcmVjdEhlaWdodCkuYXR0cihcInhcIiwgcmVjdFdpZHRoICsgcmVjdEhlaWdodCkuYXR0cignZmlsbCcsICcjOTk5JykuYXR0cignZm9udC1zaXplJywgJzcwJScpLmF0dHIoJ2ZvbnQtZmFtaWx5JywgJ2dvdGhhbScpLmF0dHIoJ2NsYXNzJywgJ2Zsb3ctcmVjdC1kcmFnZ2VyJyk7XG4gICAgICAgICAgICB3aWRnZXRzW2lkeF0ucmVjdC5hcHBlbmQoXCJjaXJjbGVcIikuYXR0cihcInJcIiwgNikuYXR0cignc3Ryb2tlLXdpZHRoJywgMSkuYXR0cignc3Ryb2tlJywgJyM2NjYnKS5hdHRyKFwiY3hcIiwgcmVjdFdpZHRoICsgcmVjdEhlaWdodCArIDEwKS5hdHRyKCdjeScsIHJlY3RIZWlnaHQgLyAyKS5hdHRyKCdmaWxsJywgJyNkZGQnKTtcbiAgICAgICAgICAgIHdpZGdldHNbaWR4XS5yZWN0LmFwcGVuZChcImNpcmNsZVwiKS5hdHRyKFwiclwiLCA2KS5hdHRyKCdzdHJva2Utd2lkdGgnLCAxKS5hdHRyKCdzdHJva2UnLCAnIzY2NicpLmF0dHIoJ2NsYXNzJywgJ2ZtLW5vZGUtZmlyc3QtY2lyY2xlJykuYXR0cihcImN4XCIsIDApLmF0dHIoJ2N5JywgcmVjdEhlaWdodCAvIDIpLmF0dHIoJ2ZpbGwnLCAnI2RkZCcpO1xuICAgICAgICAgICAgd2lkZ2V0c1tpZHhdLnJlY3QuY2FsbChyZWN0RHJhZyk7XG4gICAgICAgIH1cbiAgICAgICAgcmVmcmVzaExpbmVzKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVmcmVzaExpbmVzKCkge1xuICAgICAgICB2YXIgY3VyckZsb3dzID0gW107XG4gICAgICAgIGZvciAodmFyIGlkeCBpbiB2bS5mbG93TGluZXMpIHtcbiAgICAgICAgICAgIHZtLmZsb3dMaW5lc1tpZHhdLmxpbmUucmVtb3ZlKCk7XG4gICAgICAgICAgICBkZWxldGUgdm0uZmxvd0xpbmVzW2lkeF07XG4gICAgICAgIH1cbiAgICAgICAgZm9yICh2YXIgZnJvbVRhZyBpbiB2bS5mbG93SlNPTikge1xuICAgICAgICAgICAgaWYgKHdpZGdldHNbaW5kZXhCeVRhZ1tmcm9tVGFnXV0pIHtcbiAgICAgICAgICAgICAgICB2YXIgZnJvbVJlY3QgPSB3aWRnZXRzW2luZGV4QnlUYWdbZnJvbVRhZ11dLnJlY3Q7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgdG9UYWcgaW4gdm0uZmxvd0pTT05bZnJvbVRhZ10pIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLmZsb3dKU09OW2Zyb21UYWddW3RvVGFnXS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b1JlY3QgPSB3aWRnZXRzW2luZGV4QnlUYWdbdG9UYWddXS5yZWN0O1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZyb21Db29yZHMgPSBnZXRUcmFuc2xhdGlvbihmcm9tUmVjdC5hdHRyKFwidHJhbnNmb3JtXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b0Nvb3JkcyA9IGdldFRyYW5zbGF0aW9uKHRvUmVjdC5hdHRyKFwidHJhbnNmb3JtXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wRkxPID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb21Db29yZHM6IGZyb21Db29yZHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Db29yZHM6IHRvQ29vcmRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGZyb21UYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdG86IHRvVGFnXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZHJhd0xpbmUodGVtcEZMTyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIShmcm9tVGFnICsgdG9UYWcgaW4gdm0uZmxvd0xpbmVzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLmZsb3dMaW5lc1tmcm9tVGFnICsgdG9UYWddID0gdGVtcEZMTztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJGbG93cy5wdXNoKGZyb21UYWcgKyB0b1RhZyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZDMuc2VsZWN0QWxsKFwiI2ZtLW1pZHBhbiA+ICpcIikuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgLy8gc2VsZWN0IHRoZSBwYXJlbnQgYW5kIHNvcnQgdGhlIHBhdGgnc1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldEQoZnJvbUNvb3JkcywgdG9Db29yZHMpIHtcbiAgICAgICAgZnJvbUNvb3Jkc1sxXSArPSAxNztcbiAgICAgICAgZnJvbUNvb3Jkc1swXSArPSAxNjU7XG4gICAgICAgIHRvQ29vcmRzWzFdICs9IDE3O1xuICAgICAgICByZXR1cm4gW1tmcm9tQ29vcmRzWzBdLCBmcm9tQ29vcmRzWzFdXSwgW2Zyb21Db29yZHNbMF0gKyA1LCBmcm9tQ29vcmRzWzFdXSwgW2Zyb21Db29yZHNbMF0gKyAyNSwgZnJvbUNvb3Jkc1sxXV0sIFt0b0Nvb3Jkc1swXSAtIDI1LCB0b0Nvb3Jkc1sxXV0sIFt0b0Nvb3Jkc1swXSAtIDUsIHRvQ29vcmRzWzFdXSwgW3RvQ29vcmRzWzBdLCB0b0Nvb3Jkc1sxXV1dO1xuICAgIH1cblxuICAgIHZhciB2YWx1ZWxpbmUgPSBkMy5saW5lKCkuY3VydmUoZDMuY3VydmVCYXNpcykueChmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZFswXTtcbiAgICB9KS55KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkWzFdO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gZHJhd0xpbmUoZGF0YSkge1xuICAgICAgICB2YXIgZnJvbVJlY3QgPSB3aWRnZXRzW2luZGV4QnlUYWdbZGF0YS5mcm9tXV0ucmVjdDtcbiAgICAgICAgdmFyIHRvUmVjdCA9IHdpZGdldHNbaW5kZXhCeVRhZ1tkYXRhLnRvXV0ucmVjdDtcbiAgICAgICAgdmFyIGZyb21Db29yZHMgPSBnZXRUcmFuc2xhdGlvbihmcm9tUmVjdC5hdHRyKFwidHJhbnNmb3JtXCIpKTtcbiAgICAgICAgdmFyIHRvQ29vcmRzID0gZ2V0VHJhbnNsYXRpb24odG9SZWN0LmF0dHIoXCJ0cmFuc2Zvcm1cIikpO1xuICAgICAgICB2YXIgZCA9IGdldEQoZnJvbUNvb3JkcywgdG9Db29yZHMpO1xuICAgICAgICBkYXRhLmZyb21Db29yZHMgPSBmcm9tQ29vcmRzO1xuICAgICAgICBkYXRhLnRvQ29vcmRzID0gdG9Db29yZHM7XG5cbiAgICAgICAgaWYgKGRhdGEubGluZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBkYXRhLmxpbmUgPSB2bS52aXMuYXBwZW5kKCdwYXRoJykuYXR0cignZCcsIHZhbHVlbGluZShkKSkuYXR0cignc3Ryb2tlJywgJyM3NzcnKS5hdHRyKCdzdHJva2Utd2lkdGgnLCA0KS5hdHRyKCdmaWxsJywgJ25vbmUnKS5hdHRyKCd6LWluZGV4JywgLTEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGF0YS5saW5lLmF0dHIoJ2QnLCB2YWx1ZWxpbmUoZCkpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0VHJhbnNsYXRpb24odHJhbnNmb3JtKSB7XG4gICAgICAgIHZhciBnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiwgXCJnXCIpO1xuICAgICAgICBnLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwidHJhbnNmb3JtXCIsIHRyYW5zZm9ybSk7XG4gICAgICAgIHZhciBtYXRyaXggPSBnLnRyYW5zZm9ybS5iYXNlVmFsLmNvbnNvbGlkYXRlKCkubWF0cml4O1xuICAgICAgICByZXR1cm4gW21hdHJpeC5lLCBtYXRyaXguZl07XG4gICAgfVxuXG4gICAgZHJhdygpO1xuXG4gICAgLypcbiAgICAgKlxuICAgICAqICAgQ29kZSBmb3IgTGVmdCBwYW5cbiAgICAgKlxuICAgICAqICovXG5cbiAgICB2bS5ncmFiV2lkZ2V0ID0gZnVuY3Rpb24gKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIHZhciB3aWREb20gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICB2bS53aWREb20gPSB3aWREb20uY2xvbmUoKTtcbiAgICAgICAgdm0ud2lkRG9tLmRhdGEgPSBkYXRhO1xuICAgICAgICB2bS53aWRnZXRHcmFiYmVkID0gdHJ1ZTtcbiAgICAgICAgdmFyIHBhZ2VYID0gd2lkRG9tLm9mZnNldCgpLmxlZnQ7XG4gICAgICAgIHZhciBwYWdlWSA9IHdpZERvbS5vZmZzZXQoKS50b3A7XG4gICAgICAgIHZtLndpZERvbS5sZWZ0T2ZmID0gZXZlbnQucGFnZVggLSBwYWdlWDtcbiAgICAgICAgdm0ud2lkRG9tLnRvcE9mZiA9IGV2ZW50LnBhZ2VZIC0gcGFnZVk7XG4gICAgICAgIGlmICh2bS53aWREb20pIHtcbiAgICAgICAgICAgIHZtLndpZERvbS5hZGRDbGFzcygnZHVtbXknKTtcbiAgICAgICAgICAgIHZtLndpZERvbS5jc3Moe1xuICAgICAgICAgICAgICAgIGxlZnQ6IHBhZ2VYLFxuICAgICAgICAgICAgICAgIHRvcDogcGFnZVksXG4gICAgICAgICAgICAgICAgd2lkdGg6IHdpZERvbS53aWR0aCgpLFxuICAgICAgICAgICAgICAgIG1hcmdpbjogMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCcjZm0tbGVmdHBhbicpLmFwcGVuZCh2bS53aWREb20pO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgICQod2luZG93KS5tb3VzZXVwKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdm0uZHJvcFdpZGdldCgpO1xuICAgIH0pO1xuICAgICQod2luZG93KS5tb3VzZW1vdmUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIHZtLmRyYWdnaW5nV2lkZ2V0KGV2ZW50KTtcbiAgICB9KTtcblxuICAgIHZtLmRyb3BXaWRnZXQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh2bS53aWREb20gJiYgdm0ud2lkZ2V0R3JhYmJlZCkge1xuICAgICAgICAgICAgdm0ud2lkZ2V0R3JhYmJlZCA9IGZhbHNlO1xuICAgICAgICAgICAgdmFyIHRlbXBEYXRhID0ge1xuICAgICAgICAgICAgICAgIG9mZnNldDogdm0ud2lkRG9tLm9mZnNldCgpLFxuICAgICAgICAgICAgICAgIHdpZHRoOiB2bS53aWREb20ud2lkdGgoKSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IHZtLndpZERvbS5oZWlnaHQoKSxcbiAgICAgICAgICAgICAgICBkYXRhOiB2bS53aWREb20uZGF0YVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIG1ha2VOZXdXaWRnZXQodGVtcERhdGEpO1xuICAgICAgICAgICAgdm0ud2lkRG9tLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZtLmRyYWdnaW5nV2lkZ2V0ID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIGlmICh2bS53aWRnZXRHcmFiYmVkKSB7XG4gICAgICAgICAgICB2bS53aWREb20uY3NzKHtcbiAgICAgICAgICAgICAgICBsZWZ0OiBldmVudC5wYWdlWCAtIHZtLndpZERvbS5sZWZ0T2ZmLFxuICAgICAgICAgICAgICAgIHRvcDogZXZlbnQucGFnZVkgLSB2bS53aWREb20udG9wT2ZmXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVTY29wZURhdGEod0RhdGFSZXNwKSB7XG5cbiAgICAgICAgd0RhdGEgPSB3RGF0YVJlc3A7XG4gICAgICAgIHdpZGdldERhdGEgPSB3RGF0YS53aWRnZXREYXRhO1xuICAgICAgICB3aWRnZXRzID0gd0RhdGEud2lkZ2V0cztcbiAgICAgICAgaW5kZXhCeVRhZyA9IHdEYXRhLmluZGV4QnlUYWc7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gbWFrZU5ld1dpZGdldChwYXJhbXMpIHtcbiAgICAgICAgdmFyIG1pZFBhbk9mZiA9ICQoJy5mbS1taWRwYW4nKS5vZmZzZXQoKTtcbiAgICAgICAgdmFyIG1pZFdpZHRoID0gJCgnLmZtLW1pZHBhbicpLndpZHRoKCk7XG4gICAgICAgIHZhciBtaWRIZWlnaHQgPSAkKCcuZm0tbWlkcGFuJykuaGVpZ2h0KCk7XG4gICAgICAgIHZhciBkYXRhID0gYW5ndWxhci5jb3B5KHBhcmFtcy5kYXRhKTtcbiAgICAgICAgaWYgKHBhcmFtcy5vZmZzZXQubGVmdCA+IG1pZFBhbk9mZi5sZWZ0ICYmIHBhcmFtcy5vZmZzZXQudG9wID4gbWlkUGFuT2ZmLnRvcCAmJiBwYXJhbXMub2Zmc2V0LmxlZnQgKyBwYXJhbXMud2lkdGggLyAyIDwgbWlkUGFuT2ZmLmxlZnQgKyBtaWRXaWR0aCAmJiBwYXJhbXMub2Zmc2V0LnRvcCArIHBhcmFtcy5oZWlnaHQgLyAyIDwgbWlkUGFuT2ZmLnRvcCArIG1pZEhlaWdodCkge1xuICAgICAgICAgICAgLy9tYWtpbmcgZGF0YSBmb3IgbmV3IHdpZGdldFxuICAgICAgICAgICAgZGF0YS50YWcgPSBnZW5lcmF0ZUludGFuY2VJZChkYXRhKTtcbiAgICAgICAgICAgIGRhdGEuaWQgPSBnZW5lcmF0ZVVuaXF1ZUlkKCk7XG4gICAgICAgICAgICBkYXRhLnJlY3RTZXR0aW5ncyA9IHt9O1xuICAgICAgICAgICAgZGF0YS5yZWN0U2V0dGluZ3MueSA9IHBhcmFtcy5vZmZzZXQudG9wIC0gJCgnI2ZtLW1pZHBhbicpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICAgIGRhdGEucmVjdFNldHRpbmdzLnggPSBwYXJhbXMub2Zmc2V0LmxlZnQgLSAkKCcjZm0tbWlkcGFuJykub2Zmc2V0KCkubGVmdDtcbiAgICAgICAgICAgIGdyaWRTZXJ2aWNlLnVwZGF0ZVdpZGdldERhdGEoZGF0YSwgZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICB1cGRhdGVTY29wZURhdGEocmVzcCk7XG4gICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZVVuaXF1ZUlkKCkge1xuICAgICAgICB2YXIgdWlkO1xuICAgICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICAgICAgdWlkID0gZ2V0UmFuZG9tSW50KDEsIDEwMDAwMCk7XG4gICAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiB3aWRnZXREYXRhKSB7XG4gICAgICAgICAgICAgICAgaWYgKHdpZGdldERhdGFbaWR4XS5pZCA9PSB1aWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdWlkO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbUludChtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZW5lcmF0ZUludGFuY2VJZChkYXRhKSB7XG4gICAgICAgIHJldHVybiBkYXRhLm5hbWUgKyAocGFyc2VJbnQod2lkZ2V0RGF0YS5sZW5ndGgpICsgMSk7XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2Zsb3dNYW5hZ2VyL2Zsb3dNYW5hZ2VyLmNvbnRyb2xsZXIuanMiLCJleHBvcnQgY2xhc3MgRmxvd0NvbnRyb2xsZXIge1xuXG4gICAgY29uc3RydWN0b3IoZ3JpZFNlcnZpY2UsICRzY29wZSkge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKCdmbG93IGNvbnRyb2xsZXInKTtcblxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICB2YXIgcmVjdFdpZHRoID0gMTIwO1xuICAgICAgICB2YXIgcmVjdEhlaWdodCA9IDM1O1xuICAgICAgICB2YXIgZGVmcztcbiAgICAgICAgdmFyIGZpbHRlcjtcbiAgICAgICAgdmFyIGZlTWVyZ2U7XG4gICAgICAgIHZhciB3RGF0YSA9IGdyaWRTZXJ2aWNlLmdldFdpZGdldERhdGEoKTtcbiAgICAgICAgdmFyIHdpZGdldHMgPSB3RGF0YS53aWRnZXRzO1xuICAgICAgICB2YXIgd2lkZ2V0RGF0YSA9IHdEYXRhLndpZGdldERhdGE7XG4gICAgICAgIHZhciBpbmRleEJ5VGFnID0gd0RhdGEuaW5kZXhCeVRhZztcbiAgICAgICAgdmFyIHRlbXBYO1xuICAgICAgICB2YXIgdGVtcFk7XG4gICAgICAgIHZhciBkcmFnZ2VkID0gZmFsc2U7XG4gICAgICAgIHZhciBkaXNhYmxlRHJhZyA9IGZhbHNlO1xuICAgICAgICB2bS5kZWZhdWx0TWV0aG9kID0gZmxvd01hbmFnZXIuZ2V0RGVmYXVsdE1ldGhvZCgpO1xuXG4gICAgICAgIHZtLm1pZEggPSAyMDAwO1xuICAgICAgICB2bS5taWRXID0gMjAwMDtcbiAgICAgICAgdm0uZmxvd0pTT04gPSBncmlkU2VydmljZS5nZXRGbG93KCk7XG4gICAgICAgIHZtLnNlbGVjdGVkVGFiID0gMDtcbiAgICAgICAgdm0ud2lkZ2V0U2V0ID0gd0RhdGEud2lkZ2V0U2V0O1xuICAgICAgICB2bS5tY1BvcHVwVGFiSW5kZXggPSAwO1xuICAgICAgICB2bS5mbG93TGluZXMgPSB7fTtcblxuXG4gICAgICAgIHZtLnZpcyA9IGQzLnNlbGVjdCgnI2ZtLW1pZHBhbicpXG4gICAgICAgICAgICAuYXR0cignd2lkdGgnLCB2bS5taWRXKVxuICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsIHZtLm1pZEgpXG4gICAgICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyB2bS5taWRXICsgXCIgXCIgKyB2bS5taWRIKVxuICAgICAgICAgICAgLm9uKFwiY29udGV4dG1lbnVcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICBkMy5ldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5vbihcIm1vdXNldXBcIiwgc3ZnTW91c2V1cClcblxuICAgICAgICBmdW5jdGlvbiBzdmdNb3VzZXVwKCkge1xuICAgICAgICAgICAgZGVzZWxlY3RBbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRlc2VsZWN0QWxsKCkge1xuICAgICAgICAgICAgdm0udmlzLnNlbGVjdEFsbCgnZycpLmF0dHIoJ2NsYXNzJywgJ2Zsb3ctcmVjdC1tYWluJyk7XG4gICAgICAgICAgICB2bS5zZWxlY3RlZFdpZGdldCA9IG51bGw7XG4gICAgICAgICAgICB2bS5zZWxlY3RlZEZ1bmN0aW9uID0gbnVsbDtcbiAgICAgICAgICAgIGRpc2FibGVEcmFnID0gZmFsc2U7XG4gICAgICAgICAgICBpZiAoISRzY29wZS4kJHBoYXNlKSB7XG4gICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhZ0VuZChkLCBpKSB7XG4gICAgICAgICAgICBpZiAoZHJhZ2dlZCAmJiAhZGlzYWJsZURyYWcpIHtcbiAgICAgICAgICAgICAgICAvLyBTYXZpbmcgd2lkZ2V0RGF0YSBpbnRvIGxvY2Fsc3RvcmFnZVxuICAgICAgICAgICAgICAgIHZhciB0YWdOYW1lID0gZDMuc2VsZWN0KHRoaXMpLmF0dHIoXCJ0YWctbmFtZVwiKTtcbiAgICAgICAgICAgICAgICB2YXIgd2lkZ2V0ID0gZ2V0TXlXaWRnZXQodGFnTmFtZSk7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LnJlY3RTZXR0aW5ncy54ID0gdGVtcFg7XG4gICAgICAgICAgICAgICAgd2lkZ2V0LnJlY3RTZXR0aW5ncy55ID0gdGVtcFk7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGEgPSBKU09OLnN0cmluZ2lmeSh3aWRnZXREYXRhKTtcbiAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2lkZ2V0RGF0YScsIGRhdGEpO1xuICAgICAgICAgICAgICAgIHJlZnJlc2hMaW5lcygpO1xuICAgICAgICAgICAgICAgIGRyYWdnZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRyYWdnaW5nKGQsIGkpIHtcbiAgICAgICAgICAgIGlmICghZGlzYWJsZURyYWcpIHtcbiAgICAgICAgICAgICAgICB0ZW1wWCA9IGQzLmV2ZW50Lng7XG4gICAgICAgICAgICAgICAgdGVtcFkgPSBkMy5ldmVudC55O1xuICAgICAgICAgICAgICAgIGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIFtkMy5ldmVudC54LCBkMy5ldmVudC55XSArIFwiKVwiXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB2YXIgdGFnTmFtZSA9IGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwidGFnLW5hbWVcIik7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLmZsb3dMaW5lcykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodm0uZmxvd0xpbmVzW2lkeF0uZnJvbSA9PSB0YWdOYW1lIHx8IHZtLmZsb3dMaW5lc1tpZHhdLnRvID09IHRhZ05hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdMaW5lKHZtLmZsb3dMaW5lc1tpZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkcmFnZ2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZtLnJlbW92ZUZsb3cgPSBmdW5jdGlvbiAoZnJvbSwgdG8sIGlkKSB7XG4gICAgICAgICAgICBpZiAodm0uZmxvd0pTT05bZnJvbV1bdG9dKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLmZsb3dKU09OW2Zyb21dW3RvXSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodm0uZmxvd0pTT05bZnJvbV1bdG9dW2lkeF0uaWQgPT0gaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZtLmZsb3dKU09OW2Zyb21dW3RvXS5zcGxpY2UoaWR4KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZsb3coKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZtLnNlbGVjdEZ1bmN0aW9uID0gZnVuY3Rpb24gKG91dHB1dCkge1xuXG4gICAgICAgICAgICBkaXNhYmxlRHJhZyA9IHRydWU7XG4gICAgICAgICAgICBpZiAob3V0cHV0LnBhcmFtcyA9PSBcIm1ldGhvZFwiKSB7XG4gICAgICAgICAgICAgICAgb3V0cHV0LnBhcmFtcyA9IHZtLnNlbGVjdGVkV2lkZ2V0LnNldHRpbmdzLnJ1blBhcmFtcztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdm0uc2VsZWN0ZWRGdW5jdGlvbiA9IGFuZ3VsYXIuY29weShvdXRwdXQpO1xuICAgICAgICAgICAgdm0udGVtcEZ1bmNTZWxPYmplY3QgPSB7fTtcblxuICAgICAgICAgICAgLyogQ2hlY2tpbmcgZm9yIHRoZSBjb25uZWN0YWJsZSBmdW5jdGlvbiAqL1xuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHdpZGdldHMpIHtcbiAgICAgICAgICAgICAgICB2YXIgd2lkZ2V0ID0gd2lkZ2V0RGF0YVtpZHhdO1xuICAgICAgICAgICAgICAgIGlmICh3aWRnZXQuaWQgIT0gdm0uc2VsZWN0ZWRXaWRnZXQuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBXaWQgPSB7aWQ6IHdpZGdldC5pZCwgbmFtZTogd2lkZ2V0Lm5hbWUsIHRhZzogd2lkZ2V0LnRhZywgY29ubmVjdGFibGU6IGZhbHNlLCBpbnB1dHM6IFtdfVxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqZHggaW4gd2lkZ2V0Lm1ldGhvZHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpbnB1dCA9IGFuZ3VsYXIuY29weSh3aWRnZXQubWV0aG9kc1tqZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbnB1dC5pbnB1dCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0SW5wVCA9IGFuZ3VsYXIuY29weShpbnB1dC5wYXJhbXMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0U2VsVCA9IGFuZ3VsYXIuY29weSh2bS5zZWxlY3RlZEZ1bmN0aW9uLnBhcmFtcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRTZWxUICYmIHRJbnBUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0Q291bnQgPSB0SW5wVC5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0Q291bnRlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHRKZHggaW4gdElucFQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHRJZHggaW4gdFNlbFQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodFNlbFRbdElkeF0gPT0gdElucFRbdEpkeF0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdENvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRDb3VudGVyID49IHRDb3VudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvdW5kID0gaXNNZXRob2RGbG93RGVmaW5lZCh2bS5zZWxlY3RlZFdpZGdldC50YWcsIHdpZGdldC50YWcsIHZtLnNlbGVjdGVkRnVuY3Rpb24ubmFtZSwgaW5wdXQubmFtZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFdpZC5jb25uZWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGVtcFdpZC50YWcpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcFdpZC5pbnB1dHMucHVzaChpbnB1dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdm0udGVtcEZ1bmNTZWxPYmplY3RbdGVtcFdpZC50YWddID0gdGVtcFdpZDtcbiAgICAgICAgICAgICAgICAgICAgdm0ubWV0aG9kc1RvU2hvdyA9IHRlbXBXaWQuaW5wdXRzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiB2bS50ZW1wRnVuY1NlbE9iamVjdCkge1xuICAgICAgICAgICAgICAgIGlmICghdm0udGVtcEZ1bmNTZWxPYmplY3RbaWR4XS5jb25uZWN0YWJsZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdFJlY3QgPSBnZXREM1JlY3Qodm0udGVtcEZ1bmNTZWxPYmplY3RbaWR4XS50YWcpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcENsYXNzID0gdFJlY3QuYXR0cignY2xhc3MnKTtcbiAgICAgICAgICAgICAgICAgICAgdFJlY3QuYXR0cignY2xhc3MnLCB0ZW1wQ2xhc3MgKyAnIGRpc2FibGVkJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIHZtLnRlbXBJbnB1dCA9IHt9O1xuICAgICAgICB2bS50ZW1wU2VsZWN0ZWRJbnB1dCA9IHt9O1xuXG4gICAgICAgIHZtLnJlbW92ZUlucHV0ID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLnNlbGVjdGVkV2lkZ2V0Lm1ldGhvZHMpIHtcbiAgICAgICAgICAgICAgICBpZiAodm0uc2VsZWN0ZWRXaWRnZXQubWV0aG9kc1tpZHhdLmlkID09IG1ldGhvZC5pZCkge1xuICAgICAgICAgICAgICAgICAgICB2bS5zZWxlY3RlZFdpZGdldC5tZXRob2RzLnNwbGljZShpZHgsIDEpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodm0udGVtcFNlbGVjdGVkSW5wdXQuaWQgPT0gbWV0aG9kLmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS50ZW1wU2VsZWN0ZWRJbnB1dCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdm0ucmVtb3ZlUGFyYW0gPSBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgIHZtLnRlbXBTZWxlY3RlZElucHV0LnBhcmFtcy5zcGxpY2Uodm0udGVtcFNlbGVjdGVkSW5wdXQucGFyYW1zLmluZGV4T2YocGFyYW0pLCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZtLmFkZFBhcmFtID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgPT0gbnVsbCB8fCBldmVudC5rZXlDb2RlID09IDMyKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50ICE9IG51bGwpIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgaWYgKHZtLnRlbXBQYXJhbSAhPSBudWxsKSB2bS50ZW1wUGFyYW0udHJpbSgpO1xuICAgICAgICAgICAgICAgIGlmICh2bS50ZW1wUGFyYW0gIT0gbnVsbCAmJiB2bS50ZW1wUGFyYW0gIT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiB2bS50ZW1wU2VsZWN0ZWRJbnB1dC5wYXJhbXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bS50ZW1wU2VsZWN0ZWRJbnB1dC5wYXJhbXNbaWR4XSA9PSB2bS50ZW1wUGFyYW0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXZtLnRlbXBTZWxlY3RlZElucHV0LnBhcmFtcykgdm0udGVtcFNlbGVjdGVkSW5wdXQucGFyYW1zID0gW107XG4gICAgICAgICAgICAgICAgICAgICAgICB2bS50ZW1wU2VsZWN0ZWRJbnB1dC5wYXJhbXMucHVzaCh2bS50ZW1wUGFyYW0pXG4gICAgICAgICAgICAgICAgICAgICAgICB2bS50ZW1wUGFyYW0gPSAnJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdm0uZm9jdXNJbnB1dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJyNwYXJhbUlucHV0JykuZm9jdXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZtLmFkZElucHV0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG1ldGhvZCA9IGFuZ3VsYXIuY29weSh2bS50ZW1wSW5wdXQpO1xuICAgICAgICAgICAgdm0udGVtcElucHV0ID0ge307XG4gICAgICAgICAgICBtZXRob2QuaWQgPSB2bS5zZWxlY3RlZFdpZGdldC5tZXRob2RzLmxlbmd0aDtcbiAgICAgICAgICAgIHZtLnNlbGVjdGVkV2lkZ2V0Lm1ldGhvZHMucHVzaChtZXRob2QpO1xuICAgICAgICB9XG5cbiAgICAgICAgJHNjb3BlLmFjZU9wdGlvbiA9IHtcbiAgICAgICAgICAgIG1vZGU6ICdqYXZhc2NyaXB0JyxcbiAgICAgICAgICAgIG9uTG9hZDogZnVuY3Rpb24gKGVkaXRvcikge1xuICAgICAgICAgICAgICAgIC8vIGRlZmF1bHRzXG4gICAgICAgICAgICAgICAgLy8gZWRpdG9yLnNldFRoZW1lKFwiYWNlL3RoZW1lL21vbm9rYWlcIik7XG4gICAgICAgICAgICAgICAgLy8gb3B0aW9uc1xuICAgICAgICAgICAgICAgIGVkaXRvci5zZXRPcHRpb25zKHtcbiAgICAgICAgICAgICAgICAgICAgc2hvd0d1dHRlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvd1ByaW50TWFyZ2luOiBmYWxzZSxcbiAgICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uY3JlYXRlTWV0aG9kID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJCgnI2ZtLW1ldGhvZC1jcmVhdGUnKS5zaG93KCk7XG4gICAgICAgIH1cblxuICAgICAgICB2bS5zYXZlTWV0aG9kQ3JlYXRlUG9wdXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2lkZ2V0RGF0YScsIEpTT04uc3RyaW5naWZ5KHdpZGdldERhdGEpKTtcbiAgICAgICAgICAgICQoJyNmbS1tZXRob2QtY3JlYXRlJykuaGlkZSgpO1xuICAgICAgICAgICAgLy9NQUtFIEFQSSBDQUxMIFRPIFNBVkUgREFUQVxuICAgICAgICB9XG5cbiAgICAgICAgdm0uY2xvc2VNZXRob2RDcmVhdGVQb3B1cCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICQoJyNmbS1tZXRob2QtY3JlYXRlJykuaGlkZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgdm0uZWRpdE1ldGhvZCA9IGZ1bmN0aW9uIChtZXRob2QpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1ldGhvZCk7XG4gICAgICAgIH1cblxuICAgICAgICB2bS5jYW5jZWxBc3NpZ25pbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKCcjZm0tbWV0aG9kLXBvcENvbnQnKS5oaWRlKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2bS5hc3NpZ25GbG93ID0gZnVuY3Rpb24gKG1ldGhvZCkge1xuICAgICAgICAgICAgJCgnI2ZtLW1ldGhvZC1wb3BDb250JykuaGlkZSgpO1xuICAgICAgICAgICAgdm0udGVtcEZsb3dPYmplY3QgPSB7fTtcbiAgICAgICAgICAgIHZtLnRlbXBGbG93T2JqZWN0LmZyb20gPSBhbmd1bGFyLmNvcHkodm0uc2VsZWN0ZWRXaWRnZXQpO1xuICAgICAgICAgICAgdm0udGVtcEZsb3dPYmplY3QudG8gPSBhbmd1bGFyLmNvcHkodm0udGVtcFNlbGVjdGVkV2lkZ2V0KTtcbiAgICAgICAgICAgIHZtLnRlbXBGbG93T2JqZWN0LmZyb21NZXRob2QgPSBhbmd1bGFyLmNvcHkodm0uc2VsZWN0ZWRGdW5jdGlvbik7XG4gICAgICAgICAgICB2bS50ZW1wRmxvd09iamVjdC50b01ldGhvZCA9IG1ldGhvZDtcbiAgICAgICAgICAgIHZtLnNlbGVjdGVkRnVuY3Rpb24gPSBudWxsO1xuICAgICAgICAgICAgdm0udGVtcFNlbGVjdGVkV2lkZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgIHZtLnNlbGVjdGVkV2lkZ2V0ID0gbnVsbDtcbiAgICAgICAgICAgIGdlbkZsb3codm0udGVtcEZsb3dPYmplY3QpO1xuICAgICAgICAgICAgZGVzZWxlY3RBbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdlbkZsb3coZGF0YSkge1xuICAgICAgICAgICAgdm0uZmxvd0pTT04gPSBncmlkU2VydmljZS5nZXRGbG93KCk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh2bS5mbG93SlNPTik7XG4gICAgICAgICAgICBpZiAoIXZtLmZsb3dKU09OKXtcbiAgICAgICAgICAgICAgdm0uZmxvd0pTT04gPSB7fTtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2ltIGhlcmUnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCEoZGF0YS5mcm9tLnRhZyBpbiB2bS5mbG93SlNPTikpIHZtLmZsb3dKU09OW2RhdGEuZnJvbS50YWddID0ge307XG4gICAgICAgICAgICBpZiAoISh2bS5mbG93SlNPTltkYXRhLmZyb20udGFnXVtkYXRhLnRvLnRhZ10pKSB7XG4gICAgICAgICAgICAgICAgdm0uZmxvd0pTT05bZGF0YS5mcm9tLnRhZ11bZGF0YS50by50YWddID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgZmxvd0ZvdW5kID0gaXNNZXRob2RGbG93RGVmaW5lZChkYXRhLmZyb20udGFnLCBkYXRhLnRvLnRhZywgZGF0YS5mcm9tTWV0aG9kLm5hbWUsIGRhdGEudG9NZXRob2QubmFtZSlcbiAgICAgICAgICAgIGlmICghZmxvd0ZvdW5kKSB7XG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gdm0uZmxvd0pTT05bZGF0YS5mcm9tLnRhZ11bZGF0YS50by50YWddLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2bS5mbG93SlNPTltkYXRhLmZyb20udGFnXVtkYXRhLnRvLnRhZ10ucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogZGF0YS5mcm9tTWV0aG9kLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHRvOiBkYXRhLnRvTWV0aG9kLm5hbWVcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB1cGRhdGVGbG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdbRkxPVyBNQU5BR0VSXSBNdWx0aXBsZSBpbnN0YW5jZSBvZiBzYW1lIGZsb3cgaXMgbm90IGFsbG93ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUZsb3coKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmxvd0pTT04nLCBKU09OLnN0cmluZ2lmeSh2bS5mbG93SlNPTikpO1xuICAgICAgICAgICAgcmVmcmVzaExpbmVzKCk7XG4gICAgICAgICAgICBmbG93TWFuYWdlci5yZWZyZXNoRmxvdyhncmlkU2VydmljZS5nZXRGbG93KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaXNNZXRob2RGbG93RGVmaW5lZChmcm9tLCB0bywgZm0sIHRtKSB7XG4gICAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmICghdm0uZmxvd0pTT04pIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmICghdm0uZmxvd0pTT05bZnJvbV0pIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIGlmICghdm0uZmxvd0pTT05bZnJvbV1bdG9dKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gdm0uZmxvd0pTT05bZnJvbV1bdG9dKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBPYmogPSB2bS5mbG93SlNPTltmcm9tXVt0b11baWR4XTtcbiAgICAgICAgICAgICAgICBpZiAodGVtcE9iai5mcm9tID09IGZtICYmIHRlbXBPYmoudG8gPT0gdG0pIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmb3VuZDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRyYWdTdGFydChkLCBpKSB7XG4gICAgICAgICAgICBpZiAoIXZtLnNlbGVjdGVkRnVuY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFnTmFtZSA9IGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwidGFnLW5hbWVcIik7XG4gICAgICAgICAgICAgICAgdm0uc2VsZWN0ZWRXaWRnZXQgPSB3aWRnZXRzW2luZGV4QnlUYWdbdGFnTmFtZV1dO1xuICAgICAgICAgICAgICAgIHZtLnZpcy5zZWxlY3RBbGwoJ2cnKS5hdHRyKCdjbGFzcycsICdmbG93LXJlY3QtbWFpbicpXG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0KHRoaXMpLmF0dHIoXCJjbGFzc1wiLCAnZmxvdy1yZWN0LW1haW4gYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJHNjb3BlLiRhcHBseSgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgdGFnTmFtZSA9IGQzLnNlbGVjdCh0aGlzKS5hdHRyKFwidGFnLW5hbWVcIik7XG4gICAgICAgICAgICAgICAgdm0udGVtcFNlbGVjdGVkV2lkZ2V0ID0gZ2V0TXlXaWRnZXQodGFnTmFtZSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgY29ubmVjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gdm0udGVtcEZ1bmNTZWxPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZtLnRlbXBGdW5jU2VsT2JqZWN0W2lkeF0uY29ubmVjdGFibGUgPT0gdHJ1ZSAmJiB2bS50ZW1wRnVuY1NlbE9iamVjdFtpZHhdLnRhZyA9PSB2bS50ZW1wU2VsZWN0ZWRXaWRnZXQudGFnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25uZWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGNvbm5lY3RhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICAgICAgc2hvd01ldGhvZFBvcHVwKGQzLmV2ZW50KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBzaG93TWV0aG9kUG9wdXAoZSkge1xuICAgICAgICAgICAgdmFyIGxlZnQgPSBlLnBhZ2VYO1xuICAgICAgICAgICAgdmFyIHRvcCA9IGUucGFnZVk7XG4gICAgICAgICAgICB2YXIgYm90dG9tID0gJ2F1dG8nO1xuICAgICAgICAgICAgdmFyIHJpZ2h0ID0gJ2F1dG8nO1xuICAgICAgICAgICAgaWYgKGxlZnQgPiAoJCh3aW5kb3cpLndpZHRoKCkgLyAyKSkge1xuICAgICAgICAgICAgICAgIHJpZ2h0ID0gJCh3aW5kb3cpLndpZHRoKCkgLSBsZWZ0O1xuICAgICAgICAgICAgICAgIGxlZnQgPSAnYXV0byc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodG9wID4gKCQod2luZG93KS5oZWlnaHQoKSAvIDIpKSB7XG4gICAgICAgICAgICAgICAgYm90dG9tID0gJCh3aW5kb3cpLmhlaWdodCgpIC0gdG9wO1xuICAgICAgICAgICAgICAgIHRvcCA9ICdhdXRvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQoJyNmbS1tZXRob2QtcG9wJykuY3NzKHtsZWZ0OiBsZWZ0LCB0b3A6IHRvcCwgYm90dG9tOiBib3R0b20sIHJpZ2h0OiByaWdodH0pO1xuICAgICAgICAgICAgJCgnI2ZtLW1ldGhvZC1wb3BDb250Jykuc2hvdygpO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0RDNSZWN0KGlkeCkge1xuICAgICAgICAgICAgcmV0dXJuIGQzLnNlbGVjdChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2lkcmVjdC0nICsgaWR4KSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRNeVdpZGdldCh0YWdOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gd2lkZ2V0RGF0YVtpbmRleEJ5VGFnW3RhZ05hbWVdXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldE15TmFtZShuYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgICAgICAgICBkMy5zZWxlY3RBbGwoXCIjZm0tbWlkcGFuID4gKlwiKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgZGVmcyA9IHZtLnZpcy5hcHBlbmQoXCJkZWZzXCIpO1xuICAgICAgICAgICAgZmlsdGVyID0gZGVmcy5hcHBlbmQoXCJmaWx0ZXJcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImlkXCIsIFwiZHJvcC1zaGFkb3dcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBcIjE1MCVcIilcbiAgICAgICAgICAgIGZpbHRlci5hcHBlbmQoXCJmZUdhdXNzaWFuQmx1clwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaW5cIiwgXCJTb3VyY2VBbHBoYVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwic3RkRGV2aWF0aW9uXCIsIDIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJyZXN1bHRcIiwgXCJvZmZzZXRibHVyXCIpO1xuICAgICAgICAgICAgZmlsdGVyLmFwcGVuZChcImZlQ29tcG9uZW50VHJhbnNmZXJcIilcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZmVGdW5jQVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKCd0eXBlJywgJ2xpbmVhcicpXG4gICAgICAgICAgICAgICAgLmF0dHIoJ3Nsb3BlJywgJzAuMycpXG4gICAgICAgICAgICBmaWx0ZXIuYXBwZW5kKFwiZmVPZmZzZXRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImluXCIsIFwiYmx1clwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZHhcIiwgMSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImR5XCIsIDEpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJyZXN1bHRcIiwgXCJvZmZzZXRCbHVyXCIpXG5cbiAgICAgICAgICAgIGZlTWVyZ2UgPSBmaWx0ZXIuYXBwZW5kKFwiZmVNZXJnZVwiKTtcbiAgICAgICAgICAgIGZlTWVyZ2UuYXBwZW5kKFwiZmVNZXJnZU5vZGVcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImluXCIsIFwib2Zmc2V0Qmx1clwiKVxuICAgICAgICAgICAgZmVNZXJnZS5hcHBlbmQoXCJmZU1lcmdlTm9kZVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaW5cIiwgXCJTb3VyY2VHcmFwaGljXCIpO1xuXG4gICAgICAgICAgICB2YXIgcmVjdERyYWcgPSBkMy5kcmFnKClcbiAgICAgICAgICAgICAgICAuc3ViamVjdChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0ID0gZDMuc2VsZWN0KHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgdHIgPSBnZXRUcmFuc2xhdGlvbih0LmF0dHIoXCJ0cmFuc2Zvcm1cIikpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgeDogdC5hdHRyKFwieFwiKSArIHRyWzBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgeTogdC5hdHRyKFwieVwiKSArIHRyWzFdXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oXCJkcmFnXCIsIGRyYWdnaW5nKVxuICAgICAgICAgICAgICAgIC5vbihcImVuZFwiLCBkcmFnRW5kKVxuXG5cbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiB3aWRnZXRzKSB7XG5cblxuICAgICAgICAgICAgICAgIGlmICghd2lkZ2V0RGF0YVtpZHhdLnJlY3RTZXR0aW5ncyB8fCAhd2lkZ2V0RGF0YVtpZHhdLnJlY3RTZXR0aW5ncy54KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghd2lkZ2V0RGF0YVtpZHhdLnJlY3RTZXR0aW5ncykgd2lkZ2V0RGF0YVtpZHhdLnJlY3RTZXR0aW5ncyA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB3aWRnZXREYXRhW2lkeF0ucmVjdFNldHRpbmdzLnggPSAwO1xuICAgICAgICAgICAgICAgICAgICB3aWRnZXREYXRhW2lkeF0ucmVjdFNldHRpbmdzLnkgPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHdpZGdldHNbaWR4XS5yZWN0ID0gdm0udmlzLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoXCIgKyB3aWRnZXREYXRhW2lkeF0ucmVjdFNldHRpbmdzLnggKyBcIixcIiArIHdpZGdldERhdGFbaWR4XS5yZWN0U2V0dGluZ3MueSArIFwiKVwiKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRhZy1uYW1lXCIsIHdpZGdldHNbaWR4XS50YWcpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdjbGFzcycsICdmbG93LXJlY3QtbWFpbicpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdpZCcsICd3aWRyZWN0LScgKyB3aWRnZXRzW2lkeF0udGFnKVxuICAgICAgICAgICAgICAgICAgICAub24oXCJtb3VzZWRvd25cIiwgZHJhZ1N0YXJ0KTtcblxuICAgICAgICAgICAgICAgIGlmKGdyaWRTZXJ2aWNlLmlzQ2hyb21lKVxuICAgICAgICAgICAgICAgICAgICB3aWRnZXRzW2lkeF0ucmVjdC5zdHlsZShcImZpbHRlclwiLCBcInVybCgjZHJvcC1zaGFkb3cpXCIpXG5cblxuICAgICAgICAgICAgICAgIHdpZGdldHNbaWR4XS5yZWN0LmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCByZWN0SGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCByZWN0SGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZmlsbCcsIHdpZGdldHNbaWR4XS5jb2xvcilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsICc3MCUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZm9udC1mYW1pbHknLCAnZ290aGFtJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Zsb3ctcmVjdC1kcmFnZ2VyJylcbiAgICAgICAgICAgICAgICB3aWRnZXRzW2lkeF0ucmVjdC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgcmVjdFdpZHRoKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCByZWN0SGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZmlsbCcsICcjZmZmJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3gnLCByZWN0SGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZm9udC1zaXplJywgJzcwJScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdmb250LWZhbWlseScsICdnb3RoYW0nKVxuICAgICAgICAgICAgICAgIHdpZGdldHNbaWR4XS5yZWN0XG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdmb250LWZhbWlseScsICdnb3RoYW0nKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZm9udC1zaXplJywgJzkwJScpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdmaWxsJywgJyM1NTUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignbGluZS1oZWlnaHQnLCByZWN0SGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneCcsIHJlY3RIZWlnaHQgKyAxMClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3knLCAyMilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3otaW5kZXgnLCAxMTApXG4gICAgICAgICAgICAgICAgICAgIC50ZXh0KGdldE15TmFtZSh3aWRnZXREYXRhW2lkeF0udGFnKSlcbiAgICAgICAgICAgICAgICB3aWRnZXRzW2lkeF0ucmVjdC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgMTApXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIHJlY3RIZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCByZWN0V2lkdGggKyByZWN0SGVpZ2h0KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZmlsbCcsICcjOTk5JylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2ZvbnQtc2l6ZScsICc3MCUnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZm9udC1mYW1pbHknLCAnZ290aGFtJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2Zsb3ctcmVjdC1kcmFnZ2VyJylcbiAgICAgICAgICAgICAgICB3aWRnZXRzW2lkeF0ucmVjdC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJyXCIsIDYpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCAxKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Ryb2tlJywgJyM2NjYnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImN4XCIsIHJlY3RXaWR0aCArIHJlY3RIZWlnaHQgKyAxMClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2N5JywgKHJlY3RIZWlnaHQgLyAyKSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2ZpbGwnLCAnI2RkZCcpXG4gICAgICAgICAgICAgICAgd2lkZ2V0c1tpZHhdLnJlY3QuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiclwiLCA2KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignc3Ryb2tlLXdpZHRoJywgMSlcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3N0cm9rZScsICcjNjY2JylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2NsYXNzJywgJ2ZtLW5vZGUtZmlyc3QtY2lyY2xlJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjeFwiLCAwKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignY3knLCAocmVjdEhlaWdodCAvIDIpKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZmlsbCcsICcjZGRkJylcbiAgICAgICAgICAgICAgICB3aWRnZXRzW2lkeF0ucmVjdC5jYWxsKHJlY3REcmFnKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVmcmVzaExpbmVzKCk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHJlZnJlc2hMaW5lcygpIHtcbiAgICAgICAgICAgIHZhciBjdXJyRmxvd3MgPSBbXTtcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiB2bS5mbG93TGluZXMpIHtcbiAgICAgICAgICAgICAgICB2bS5mbG93TGluZXNbaWR4XS5saW5lLnJlbW92ZSgpO1xuICAgICAgICAgICAgICAgIGRlbGV0ZSB2bS5mbG93TGluZXNbaWR4XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGZyb21UYWcgaW4gdm0uZmxvd0pTT04pIHtcbiAgICAgICAgICAgICAgICBpZih3aWRnZXRzWyhpbmRleEJ5VGFnW2Zyb21UYWddKV0pe1xuICAgICAgICAgICAgICAgICAgICB2YXIgZnJvbVJlY3QgPSB3aWRnZXRzWyhpbmRleEJ5VGFnW2Zyb21UYWddKV0ucmVjdDtcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgdG9UYWcgaW4gdm0uZmxvd0pTT05bZnJvbVRhZ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2bS5mbG93SlNPTltmcm9tVGFnXVt0b1RhZ10ubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRvUmVjdCA9IHdpZGdldHNbKGluZGV4QnlUYWdbdG9UYWddKV0ucmVjdDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZnJvbUNvb3JkcyA9IGdldFRyYW5zbGF0aW9uKGZyb21SZWN0LmF0dHIoXCJ0cmFuc2Zvcm1cIikpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0b0Nvb3JkcyA9IGdldFRyYW5zbGF0aW9uKHRvUmVjdC5hdHRyKFwidHJhbnNmb3JtXCIpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcEZMTyA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZnJvbUNvb3JkczogZnJvbUNvb3JkcyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9Db29yZHM6IHRvQ29vcmRzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiBmcm9tVGFnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bzogdG9UYWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRyYXdMaW5lKHRlbXBGTE8pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKChmcm9tVGFnICsgdG9UYWcpIGluIHZtLmZsb3dMaW5lcykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdm0uZmxvd0xpbmVzW2Zyb21UYWcgKyB0b1RhZ10gPSB0ZW1wRkxPO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyRmxvd3MucHVzaChmcm9tVGFnICsgdG9UYWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZDMuc2VsZWN0QWxsKFwiI2ZtLW1pZHBhbiA+ICpcIikuc29ydChmdW5jdGlvbiAoYSwgYikgeyAvLyBzZWxlY3QgdGhlIHBhcmVudCBhbmQgc29ydCB0aGUgcGF0aCdzXG4gICAgICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0RChmcm9tQ29vcmRzLCB0b0Nvb3Jkcykge1xuICAgICAgICAgICAgZnJvbUNvb3Jkc1sxXSArPSAxNztcbiAgICAgICAgICAgIGZyb21Db29yZHNbMF0gKz0gMTY1O1xuICAgICAgICAgICAgdG9Db29yZHNbMV0gKz0gMTc7XG4gICAgICAgICAgICByZXR1cm4gW1tmcm9tQ29vcmRzWzBdLCBmcm9tQ29vcmRzWzFdXSxcbiAgICAgICAgICAgICAgICBbKGZyb21Db29yZHNbMF0gKyA1KSwgZnJvbUNvb3Jkc1sxXV0sXG4gICAgICAgICAgICAgICAgWyhmcm9tQ29vcmRzWzBdICsgMjUpLCBmcm9tQ29vcmRzWzFdXSxcbiAgICAgICAgICAgICAgICBbKHRvQ29vcmRzWzBdIC0gMjUpLCB0b0Nvb3Jkc1sxXV0sXG4gICAgICAgICAgICAgICAgWyh0b0Nvb3Jkc1swXSAtIDUpLCB0b0Nvb3Jkc1sxXV0sXG4gICAgICAgICAgICAgICAgW3RvQ29vcmRzWzBdLCB0b0Nvb3Jkc1sxXV1dO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHZhbHVlbGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAgICAgLmN1cnZlKGQzLmN1cnZlQmFzaXMpXG4gICAgICAgICAgICAueChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkWzBdO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC55KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRbMV07XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBkcmF3TGluZShkYXRhKSB7XG4gICAgICAgICAgICB2YXIgZnJvbVJlY3QgPSB3aWRnZXRzWyhpbmRleEJ5VGFnW2RhdGEuZnJvbV0pXS5yZWN0O1xuICAgICAgICAgICAgdmFyIHRvUmVjdCA9IHdpZGdldHNbKGluZGV4QnlUYWdbZGF0YS50b10pXS5yZWN0O1xuICAgICAgICAgICAgdmFyIGZyb21Db29yZHMgPSBnZXRUcmFuc2xhdGlvbihmcm9tUmVjdC5hdHRyKFwidHJhbnNmb3JtXCIpKTtcbiAgICAgICAgICAgIHZhciB0b0Nvb3JkcyA9IGdldFRyYW5zbGF0aW9uKHRvUmVjdC5hdHRyKFwidHJhbnNmb3JtXCIpKTtcbiAgICAgICAgICAgIHZhciBkID0gZ2V0RChmcm9tQ29vcmRzLCB0b0Nvb3Jkcyk7XG4gICAgICAgICAgICBkYXRhLmZyb21Db29yZHMgPSBmcm9tQ29vcmRzO1xuICAgICAgICAgICAgZGF0YS50b0Nvb3JkcyA9IHRvQ29vcmRzO1xuXG4gICAgICAgICAgICBpZiAoZGF0YS5saW5lID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBkYXRhLmxpbmUgPSB2bS52aXMuYXBwZW5kKCdwYXRoJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2QnLCB2YWx1ZWxpbmUoZCkpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzdHJva2UnLCAnIzc3NycpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCdzdHJva2Utd2lkdGgnLCA0KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignZmlsbCcsICdub25lJylcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3otaW5kZXgnLCAtMSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZGF0YS5saW5lLmF0dHIoJ2QnLCB2YWx1ZWxpbmUoZCkpXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFRyYW5zbGF0aW9uKHRyYW5zZm9ybSkge1xuICAgICAgICAgICAgdmFyIGcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiLCBcImdcIik7XG4gICAgICAgICAgICBnLnNldEF0dHJpYnV0ZU5TKG51bGwsIFwidHJhbnNmb3JtXCIsIHRyYW5zZm9ybSk7XG4gICAgICAgICAgICB2YXIgbWF0cml4ID0gZy50cmFuc2Zvcm0uYmFzZVZhbC5jb25zb2xpZGF0ZSgpLm1hdHJpeDtcbiAgICAgICAgICAgIHJldHVybiBbbWF0cml4LmUsIG1hdHJpeC5mXTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZHJhdygpO1xuXG5cbiAgICAgICAgLypcbiAgICAgICAgICpcbiAgICAgICAgICogICBDb2RlIGZvciBMZWZ0IHBhblxuICAgICAgICAgKlxuICAgICAgICAgKiAqL1xuXG4gICAgICAgIHZtLmdyYWJXaWRnZXQgPSBmdW5jdGlvbiAoZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgICAgIHZhciB3aWREb20gPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xuICAgICAgICAgICAgdm0ud2lkRG9tID0gd2lkRG9tLmNsb25lKCk7XG4gICAgICAgICAgICB2bS53aWREb20uZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICB2bS53aWRnZXRHcmFiYmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZhciBwYWdlWCA9IHdpZERvbS5vZmZzZXQoKS5sZWZ0XG4gICAgICAgICAgICB2YXIgcGFnZVkgPSB3aWREb20ub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgdm0ud2lkRG9tLmxlZnRPZmYgPSBldmVudC5wYWdlWCAtIHBhZ2VYO1xuICAgICAgICAgICAgdm0ud2lkRG9tLnRvcE9mZiA9IGV2ZW50LnBhZ2VZIC0gcGFnZVk7XG4gICAgICAgICAgICBpZiAodm0ud2lkRG9tKSB7XG4gICAgICAgICAgICAgICAgdm0ud2lkRG9tLmFkZENsYXNzKCdkdW1teScpXG4gICAgICAgICAgICAgICAgdm0ud2lkRG9tLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IHBhZ2VYLFxuICAgICAgICAgICAgICAgICAgICB0b3A6IHBhZ2VZLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogd2lkRG9tLndpZHRoKCksXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICQoJyNmbS1sZWZ0cGFuJykuYXBwZW5kKHZtLndpZERvbSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykubW91c2V1cChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2bS5kcm9wV2lkZ2V0KCk7XG4gICAgICAgIH0pXG4gICAgICAgICQod2luZG93KS5tb3VzZW1vdmUoZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICB2bS5kcmFnZ2luZ1dpZGdldChldmVudCk7XG4gICAgICAgIH0pXG5cbiAgICAgICAgdm0uZHJvcFdpZGdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh2bS53aWREb20gJiYgdm0ud2lkZ2V0R3JhYmJlZCkge1xuICAgICAgICAgICAgICAgIHZtLndpZGdldEdyYWJiZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB2YXIgdGVtcERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIG9mZnNldDogdm0ud2lkRG9tLm9mZnNldCgpLFxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogdm0ud2lkRG9tLndpZHRoKCksXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogdm0ud2lkRG9tLmhlaWdodCgpLFxuICAgICAgICAgICAgICAgICAgICBkYXRhOiB2bS53aWREb20uZGF0YSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWFrZU5ld1dpZGdldCh0ZW1wRGF0YSk7XG4gICAgICAgICAgICAgICAgdm0ud2lkRG9tLnJlbW92ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdm0uZHJhZ2dpbmdXaWRnZXQgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICh2bS53aWRnZXRHcmFiYmVkKSB7XG4gICAgICAgICAgICAgICAgdm0ud2lkRG9tLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IGV2ZW50LnBhZ2VYIC0gdm0ud2lkRG9tLmxlZnRPZmYsXG4gICAgICAgICAgICAgICAgICAgIHRvcDogZXZlbnQucGFnZVkgLSB2bS53aWREb20udG9wT2ZmLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVTY29wZURhdGEod0RhdGFSZXNwKSB7XG5cbiAgICAgICAgICAgIHdEYXRhID0gd0RhdGFSZXNwO1xuICAgICAgICAgICAgd2lkZ2V0RGF0YSA9IHdEYXRhLndpZGdldERhdGE7XG4gICAgICAgICAgICB3aWRnZXRzID0gd0RhdGEud2lkZ2V0cztcbiAgICAgICAgICAgIGluZGV4QnlUYWcgPSB3RGF0YS5pbmRleEJ5VGFnO1xuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtYWtlTmV3V2lkZ2V0KHBhcmFtcykge1xuICAgICAgICAgICAgdmFyIG1pZFBhbk9mZiA9ICQoJy5mbS1taWRwYW4nKS5vZmZzZXQoKTtcbiAgICAgICAgICAgIHZhciBtaWRXaWR0aCA9ICQoJy5mbS1taWRwYW4nKS53aWR0aCgpO1xuICAgICAgICAgICAgdmFyIG1pZEhlaWdodCA9ICQoJy5mbS1taWRwYW4nKS5oZWlnaHQoKTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gYW5ndWxhci5jb3B5KHBhcmFtcy5kYXRhKTtcbiAgICAgICAgICAgIGlmIChwYXJhbXMub2Zmc2V0LmxlZnQgPiBtaWRQYW5PZmYubGVmdCAmJiBwYXJhbXMub2Zmc2V0LnRvcCA+IG1pZFBhbk9mZi50b3AgJiZcbiAgICAgICAgICAgICAgICBwYXJhbXMub2Zmc2V0LmxlZnQgKyAocGFyYW1zLndpZHRoIC8gMikgPCBtaWRQYW5PZmYubGVmdCArIG1pZFdpZHRoICYmIHBhcmFtcy5vZmZzZXQudG9wICsgKHBhcmFtcy5oZWlnaHQgLyAyKSA8IG1pZFBhbk9mZi50b3AgKyBtaWRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAvL21ha2luZyBkYXRhIGZvciBuZXcgd2lkZ2V0XG4gICAgICAgICAgICAgICAgZGF0YS50YWcgPSBnZW5lcmF0ZUludGFuY2VJZChkYXRhKTtcbiAgICAgICAgICAgICAgICBkYXRhLmlkID0gZ2VuZXJhdGVVbmlxdWVJZCgpO1xuICAgICAgICAgICAgICAgIGRhdGEucmVjdFNldHRpbmdzID0ge31cbiAgICAgICAgICAgICAgICBkYXRhLnJlY3RTZXR0aW5ncy55ID0gcGFyYW1zLm9mZnNldC50b3AgLSAkKCcjZm0tbWlkcGFuJykub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgICAgIGRhdGEucmVjdFNldHRpbmdzLnggPSBwYXJhbXMub2Zmc2V0LmxlZnQgLSAkKCcjZm0tbWlkcGFuJykub2Zmc2V0KCkubGVmdDtcbiAgICAgICAgICAgICAgICBncmlkU2VydmljZS51cGRhdGVXaWRnZXREYXRhKGRhdGEsIGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZVNjb3BlRGF0YShyZXNwKTtcbiAgICAgICAgICAgICAgICAgICAgZHJhdygpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVVuaXF1ZUlkKCkge1xuICAgICAgICAgICAgdmFyIHVpZDtcbiAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgICAgICAgICAgdWlkID0gZ2V0UmFuZG9tSW50KDEsIDEwMDAwMCk7XG4gICAgICAgICAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHdpZGdldERhdGEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpZGdldERhdGFbaWR4XS5pZCA9PSB1aWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB1aWQ7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZXRSYW5kb21JbnQobWluLCBtYXgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2VuZXJhdGVJbnRhbmNlSWQoZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEubmFtZSArICggcGFyc2VJbnQod2lkZ2V0RGF0YS5sZW5ndGgpICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9mbG93TWFuYWdlci9mbG93TWFuYWdlci5jb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciBHcmlkQ29udHJvbGxlciA9IGV4cG9ydHMuR3JpZENvbnRyb2xsZXIgPSBmdW5jdGlvbiBHcmlkQ29udHJvbGxlcihncmlkU2VydmljZSwgJHNjb3BlLCBsb2dpblNlcnZpY2UpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIEdyaWRDb250cm9sbGVyKTtcblxuICAgIGNvbnNvbGUubG9nKCdHcmlkIENvbnRyb2xsZXInKTtcblxuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICB2bS53aWRnZXRzID0gW107XG4gICAgdm0uZ3JpZE1vZGUgPSAwOyAvLyAwID0gbm9ybWFsIE1vZGUgLCAxID0gZWRpdCBNb2RlXG4gICAgdm0ubGF5b3V0T3JkZXIgPSBudWxsO1xuICAgIHZtLndpZGdldERhdGEgPSBncmlkU2VydmljZS5nZXRXaWRnZXREYXRhKCk7XG5cbiAgICB2bS5zd2l0Y2hNb2RlID0gZnVuY3Rpb24gKG1vZGUpIHtcbiAgICAgICAgdm0uZ3JpZE1vZGUgPSBtb2RlO1xuICAgICAgICBpZiAobW9kZSA9PSAwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gdm0ud2lkZ2V0cykge1xuICAgICAgICAgICAgICAgIHZtLndpZGdldHNbaWR4XS5kcmFnZ2llLmRpc2FibGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtb2RlID09IDEpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiB2bS53aWRnZXRzKSB7XG4gICAgICAgICAgICAgICAgdm0ud2lkZ2V0c1tpZHhdLmRyYWdnaWUuZW5hYmxlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHN3aXRjaE1vZGVJbnRlciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKHZtLndpZGdldHNbMF0gJiYgdm0ud2lkZ2V0c1swXS5kcmFnZ2llKSB7XG4gICAgICAgICAgICBjbGVhckludGVydmFsKHN3aXRjaE1vZGVJbnRlcik7XG4gICAgICAgICAgICB2bS5zd2l0Y2hNb2RlKDApO1xuICAgICAgICB9XG4gICAgfSwgMTAwKTtcblxuICAgIHZhciBvaV90aW1lb3V0ID0gbnVsbDtcblxuICAgIGZ1bmN0aW9uIG9yZGVySXRlbXMoKSB7XG4gICAgICAgIHZhciBpdGVtRWxlbXMgPSAkKCRncmlkLnBhY2tlcnkoJ2dldEl0ZW1FbGVtZW50cycpKTtcbiAgICAgICAgdm0ubGF5b3V0T3JkZXIgPSBbXTtcbiAgICAgICAgJChpdGVtRWxlbXMpLmVhY2goZnVuY3Rpb24gKGksIGl0ZW1FbGVtKSB7XG4gICAgICAgICAgICB2YXIgaWQgPSBwYXJzZUludCgkKGl0ZW1FbGVtKS5hdHRyKCd3aWRnZXQtaWQnKSk7XG4gICAgICAgICAgICB2YXIgdGFnID0gJChpdGVtRWxlbSkuYXR0cignd2lkZ2V0LXRhZycpO1xuICAgICAgICAgICAgdm0ubGF5b3V0T3JkZXJbaV0gPSB7IHBvc2l0aW9uOiBpZCB9O1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAob2lfdGltZW91dCkgY2xlYXJUaW1lb3V0KG9pX3RpbWVvdXQpO1xuICAgICAgICBvaV90aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0T3JkZXInLCBKU09OLnN0cmluZ2lmeSh2bS5sYXlvdXRPcmRlcikpO1xuICAgICAgICB9LCAxMDAwKTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gZ2V0V2lkZ2V0cygpIHtcbiAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24gY2FsbGJhY2sobGF5b3V0T3JkZXIpIHtcbiAgICAgICAgICAgIHZtLmxheW91dE9yZGVyID0gbGF5b3V0T3JkZXI7XG4gICAgICAgICAgICB2YXIgd2lkTGlzdCA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLndpZGdldERhdGEud2lkZ2V0cykge1xuICAgICAgICAgICAgICAgIHdpZExpc3QucHVzaCh2bS53aWRnZXREYXRhLndpZGdldHNbaWR4XS50YWcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLmxheW91dE9yZGVyKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgamR4IGluIHZtLndpZGdldERhdGEud2lkZ2V0cykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodm0ud2lkZ2V0RGF0YS53aWRnZXRzW2pkeF0uaWQgPT0gdm0ubGF5b3V0T3JkZXJbaWR4XS5wb3NpdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdm0ud2lkZ2V0cy5wdXNoKHZtLndpZGdldERhdGEud2lkZ2V0c1tqZHhdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZExpc3Quc3BsaWNlKHdpZExpc3QuaW5kZXhPZih2bS53aWRnZXREYXRhLndpZGdldHNbamR4XS50YWcpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiB3aWRMaXN0KSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBPYmogPSBhbmd1bGFyLmNvcHkodm0ud2lkZ2V0RGF0YS53aWRnZXRzW3ZtLndpZGdldERhdGEuaW5kZXhCeVRhZ1t3aWRMaXN0W2lkeF1dXSk7XG4gICAgICAgICAgICAgICAgdm0ud2lkZ2V0cy5wdXNoKHRlbXBPYmopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3RhcnRQYWNrZXJ5KCk7XG4gICAgICAgIH07XG4gICAgICAgIGdyaWRTZXJ2aWNlLmdldExheW91dE9yZGVyKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBnZXRXaWRnZXRzKCk7XG5cbiAgICBmdW5jdGlvbiBzZXRDU1NDbGFzcyhjb2xzLCB1LCB2KSB7XG4gICAgICAgIHZhciBzdHlsZVN0cmluZyA9ICcnO1xuICAgICAgICBmb3IgKHZhciBpZHggPSAxOyBpZHggPD0gY29sczsgaWR4KyspIHtcbiAgICAgICAgICAgIHN0eWxlU3RyaW5nICs9ICcuZ2ktdy0nICsgaWR4ICsgJ3sgd2lkdGg6ICcgKyAodSAqIGlkeCAtIDApICsgJ3B4IH0gJyArICcuZ2ktdmgtJyArIGlkeCArICd7IGhlaWdodDogJyArIHYgKiBpZHggKyAncHggfSAnICsgJy5naS1oLScgKyBpZHggKyAneyBoZWlnaHQ6ICcgKyB1ICogaWR4ICsgJ3B4IH0gJztcbiAgICAgICAgfVxuICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcbiAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gc3R5bGVTdHJpbmc7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0uYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN0YXJ0UGFja2VyeSgpIHtcbiAgICAgICAgdmFyIHBhY2tlcnlJbnRlciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgkKCcuZ3JpZCA+IGRpdicpLmxlbmd0aCA+PSB2bS53aWRnZXRzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgIGluaXRQYWNrZXJ5KCk7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChwYWNrZXJ5SW50ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCAyMDApO1xuICAgIH1cblxuICAgIHZhciAkZ3JpZDtcblxuICAgIGZ1bmN0aW9uIGluaXRQYWNrZXJ5KCkge1xuICAgICAgICB2YXIgY29scyA9IDI0O1xuICAgICAgICB2bS5jb2x1bW5XaWR0aCA9IHBhcnNlSW50KCgkKHdpbmRvdykud2lkdGgoKSAtIDApIC8gY29scyk7XG4gICAgICAgIHZtLmNvbHVtbkhlaWdodCA9IHBhcnNlSW50KCQod2luZG93KS5oZWlnaHQoKSAvIGNvbHMpO1xuICAgICAgICBzZXRDU1NDbGFzcyhjb2xzLCB2bS5jb2x1bW5XaWR0aCwgdm0uY29sdW1uSGVpZ2h0KTtcblxuICAgICAgICAkZ3JpZCA9ICQoJy5ncmlkJykucGFja2VyeSh7XG4gICAgICAgICAgICBpdGVtU2VsZWN0b3I6ICcuZ3JpZC1pdGVtJyxcbiAgICAgICAgICAgIGNvbHVtbldpZHRoOiB2bS5jb2x1bW5XaWR0aFxuICAgICAgICB9KTtcbiAgICAgICAgdmFyIGNvdW50ZXIgPSAwO1xuXG4gICAgICAgICRncmlkLmZpbmQoJy5ncmlkLWl0ZW0nKS5lYWNoKGZ1bmN0aW9uIChpLCBncmlkSXRlbSkge1xuICAgICAgICAgICAgdmFyIGRyYWdnaWUgPSBuZXcgRHJhZ2dhYmlsbHkoZ3JpZEl0ZW0pO1xuICAgICAgICAgICAgZm9yICh2YXIgaWR4ID0gMDsgaWR4IDwgdm0ud2lkZ2V0cy5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHdpZCA9IHBhcnNlSW50KCQoZ3JpZEl0ZW0pLmF0dHIoJ3dpZGdldC1pZCcpKTtcbiAgICAgICAgICAgICAgICBpZiAodm0ud2lkZ2V0c1tpZHhdLmlkID09IHdpZCkge1xuICAgICAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgICAgIHZtLndpZGdldHNbaWR4XS5kcmFnZ2llID0gZHJhZ2dpZTtcbiAgICAgICAgICAgICAgICAgICAgJGdyaWQucGFja2VyeSgnYmluZERyYWdnYWJpbGx5RXZlbnRzJywgdm0ud2lkZ2V0c1tpZHhdLmRyYWdnaWUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGdyaWQucGFja2VyeSgnb24nLCAnbGF5b3V0Q29tcGxldGUnLCBvcmRlckl0ZW1zKTtcbiAgICAgICAgJGdyaWQucGFja2VyeSgnb24nLCAnZHJhZ0l0ZW1Qb3NpdGlvbmVkJywgb3JkZXJJdGVtcyk7XG4gICAgfVxufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2Zsb3dNYW5hZ2VyL2dyaWQuY29udHJvbGxlci5qcyIsImV4cG9ydCBjbGFzcyBHcmlkQ29udHJvbGxlciB7XHJcblxyXG4gICAgY29uc3RydWN0b3IoZ3JpZFNlcnZpY2UsICRzY29wZSwgbG9naW5TZXJ2aWNlKSB7XHJcbiAgICAgICAgJ25nSW5qZWN0JztcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0dyaWQgQ29udHJvbGxlcicpXHJcblxyXG5cclxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG5cclxuICAgICAgICB2bS53aWRnZXRzID0gW107XHJcbiAgICAgICAgdm0uZ3JpZE1vZGUgPSAwOyAvLyAwID0gbm9ybWFsIE1vZGUgLCAxID0gZWRpdCBNb2RlXHJcbiAgICAgICAgdm0ubGF5b3V0T3JkZXIgPSBudWxsO1xyXG4gICAgICAgIHZtLndpZGdldERhdGEgPSBncmlkU2VydmljZS5nZXRXaWRnZXREYXRhKCk7XHJcblxyXG4gICAgICAgIHZtLnN3aXRjaE1vZGUgPSBmdW5jdGlvbihtb2RlKSB7XHJcbiAgICAgICAgICAgIHZtLmdyaWRNb2RlID0gbW9kZTtcclxuICAgICAgICAgICAgaWYobW9kZSA9PSAwKXtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaWR4IGluIHZtLndpZGdldHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLndpZGdldHNbaWR4XS5kcmFnZ2llLmRpc2FibGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfWVsc2UgaWYobW9kZSA9PSAxKXtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaWR4IGluIHZtLndpZGdldHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLndpZGdldHNbaWR4XS5kcmFnZ2llLmVuYWJsZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZhciBzd2l0Y2hNb2RlSW50ZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmKHZtLndpZGdldHNbMF0gJiYgdm0ud2lkZ2V0c1swXS5kcmFnZ2llKXtcclxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwoc3dpdGNoTW9kZUludGVyKTtcclxuICAgICAgICAgICAgICAgIHZtLnN3aXRjaE1vZGUoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LDEwMClcclxuXHJcbiAgICAgICAgdmFyIG9pX3RpbWVvdXQgPSBudWxsO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBvcmRlckl0ZW1zKCkge1xyXG4gICAgICAgICAgICB2YXIgaXRlbUVsZW1zID0gJCgkZ3JpZC5wYWNrZXJ5KCdnZXRJdGVtRWxlbWVudHMnKSk7XHJcbiAgICAgICAgICAgIHZtLmxheW91dE9yZGVyID0gW107XHJcbiAgICAgICAgICAgICQoaXRlbUVsZW1zKS5lYWNoKGZ1bmN0aW9uKGksIGl0ZW1FbGVtKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaWQgPSBwYXJzZUludCgkKGl0ZW1FbGVtKS5hdHRyKCd3aWRnZXQtaWQnKSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGFnID0gJChpdGVtRWxlbSkuYXR0cignd2lkZ2V0LXRhZycpO1xyXG4gICAgICAgICAgICAgICAgdm0ubGF5b3V0T3JkZXJbaV0gPSB7IHBvc2l0aW9uIDogaWQgfTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBpZihvaV90aW1lb3V0KSBjbGVhclRpbWVvdXQob2lfdGltZW91dCk7XHJcbiAgICAgICAgICAgIG9pX3RpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXRPcmRlcicsIEpTT04uc3RyaW5naWZ5KHZtLmxheW91dE9yZGVyKSlcclxuICAgICAgICAgICAgfSwxMDAwKVxyXG5cclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gZ2V0V2lkZ2V0cygpIHtcclxuICAgICAgICAgICAgdmFyIGNhbGxiYWNrID0gZnVuY3Rpb24obGF5b3V0T3JkZXIpIHtcclxuICAgICAgICAgICAgICAgIHZtLmxheW91dE9yZGVyID0gbGF5b3V0T3JkZXI7XHJcbiAgICAgICAgICAgICAgICB2YXIgd2lkTGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpZHggaW4gdm0ud2lkZ2V0RGF0YS53aWRnZXRzKXtcclxuICAgICAgICAgICAgICAgICAgICB3aWRMaXN0LnB1c2godm0ud2lkZ2V0RGF0YS53aWRnZXRzW2lkeF0udGFnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaWR4IGluIHZtLmxheW91dE9yZGVyKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGpkeCBpbiB2bS53aWRnZXREYXRhLndpZGdldHMpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih2bS53aWRnZXREYXRhLndpZGdldHNbamR4XS5pZCA9PSB2bS5sYXlvdXRPcmRlcltpZHhdLnBvc2l0aW9uKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZtLndpZGdldHMucHVzaCh2bS53aWRnZXREYXRhLndpZGdldHNbamR4XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWRMaXN0LnNwbGljZSh3aWRMaXN0LmluZGV4T2Yodm0ud2lkZ2V0RGF0YS53aWRnZXRzW2pkeF0udGFnKSwxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaWR4IGluIHdpZExpc3Qpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wT2JqID0gYW5ndWxhci5jb3B5KHZtLndpZGdldERhdGEud2lkZ2V0c1t2bS53aWRnZXREYXRhLmluZGV4QnlUYWdbd2lkTGlzdFtpZHhdXV0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLndpZGdldHMucHVzaCh0ZW1wT2JqKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHN0YXJ0UGFja2VyeSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdyaWRTZXJ2aWNlLmdldExheW91dE9yZGVyKGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFdpZGdldHMoKTtcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHNldENTU0NsYXNzKGNvbHMsIHUsIHYpIHtcclxuICAgICAgICAgICAgdmFyIHN0eWxlU3RyaW5nID0gJyc7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaWR4PTE7IGlkeCA8PSBjb2xzOyBpZHgrKyl7XHJcbiAgICAgICAgICAgICAgICBzdHlsZVN0cmluZyArPSAgJy5naS13LScraWR4Kyd7IHdpZHRoOiAnKygodSAqIGlkeCktMCkrJ3B4IH0gJyArXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJy5naS12aC0nK2lkeCsneyBoZWlnaHQ6ICcrKHYgKiBpZHgpKydweCB9ICcgK1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICcuZ2ktaC0nK2lkeCsneyBoZWlnaHQ6ICcrKHUgKiBpZHgpKydweCB9ICdcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICAgICAgICBzdHlsZS50eXBlID0gJ3RleHQvY3NzJztcclxuICAgICAgICAgICAgc3R5bGUuaW5uZXJIVE1MID0gIHN0eWxlU3RyaW5nO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICBmdW5jdGlvbiBzdGFydFBhY2tlcnkoKSB7XHJcbiAgICAgICAgICAgIHZhciBwYWNrZXJ5SW50ZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBpZigkKCcuZ3JpZCA+IGRpdicpLmxlbmd0aCA+PSB2bS53aWRnZXRzLmxlbmd0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5pdFBhY2tlcnkoKTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHBhY2tlcnlJbnRlcik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sMjAwKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyICRncmlkO1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBpbml0UGFja2VyeSgpIHtcclxuICAgICAgICAgICAgdmFyIGNvbHMgPSAyNDtcclxuICAgICAgICAgICAgdm0uY29sdW1uV2lkdGggPSBwYXJzZUludCgoJCh3aW5kb3cpLndpZHRoKCktMCkgLyBjb2xzKTtcclxuICAgICAgICAgICAgdm0uY29sdW1uSGVpZ2h0ID0gcGFyc2VJbnQoJCh3aW5kb3cpLmhlaWdodCgpIC8gY29scyk7XHJcbiAgICAgICAgICAgIHNldENTU0NsYXNzKGNvbHMsIHZtLmNvbHVtbldpZHRoLCB2bS5jb2x1bW5IZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgJGdyaWQgPSAkKCcuZ3JpZCcpLnBhY2tlcnkoe1xyXG4gICAgICAgICAgICAgICAgaXRlbVNlbGVjdG9yOiAnLmdyaWQtaXRlbScsXHJcbiAgICAgICAgICAgICAgICBjb2x1bW5XaWR0aDogdm0uY29sdW1uV2lkdGhcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcclxuXHJcbiAgICAgICAgICAgICRncmlkLmZpbmQoJy5ncmlkLWl0ZW0nKS5lYWNoKCBmdW5jdGlvbiggaSwgZ3JpZEl0ZW0gKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZHJhZ2dpZSA9IG5ldyBEcmFnZ2FiaWxseSggZ3JpZEl0ZW0gKTtcclxuICAgICAgICAgICAgICAgIGZvcih2YXIgaWR4ID0gMDsgaWR4IDwgdm0ud2lkZ2V0cy5sZW5ndGg7IGlkeCsrKXtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgd2lkID0gcGFyc2VJbnQoJChncmlkSXRlbSkuYXR0cignd2lkZ2V0LWlkJykpXHJcbiAgICAgICAgICAgICAgICAgICAgaWYodm0ud2lkZ2V0c1tpZHhdLmlkID09IHdpZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdm0ud2lkZ2V0c1tpZHhdLmRyYWdnaWUgPSBkcmFnZ2llO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkZ3JpZC5wYWNrZXJ5KCAnYmluZERyYWdnYWJpbGx5RXZlbnRzJywgdm0ud2lkZ2V0c1tpZHhdLmRyYWdnaWUgKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgJGdyaWQucGFja2VyeSggJ29uJywgJ2xheW91dENvbXBsZXRlJywgb3JkZXJJdGVtcyApO1xyXG4gICAgICAgICAgICAkZ3JpZC5wYWNrZXJ5KCAnb24nLCAnZHJhZ0l0ZW1Qb3NpdGlvbmVkJywgb3JkZXJJdGVtcyApO1xyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9mbG93TWFuYWdlci9ncmlkLmNvbnRyb2xsZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gNC8yOC8yMDE3LlxyXG4gKi9cbnZhciBQb3J0YWxMb2dpbkNvbnRyb2xsZXIgPSBleHBvcnRzLlBvcnRhbExvZ2luQ29udHJvbGxlciA9IGZ1bmN0aW9uIFBvcnRhbExvZ2luQ29udHJvbGxlcihwb3J0YWxMb2dpblNlcnZpY2UsICRzdGF0ZSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgUG9ydGFsTG9naW5Db250cm9sbGVyKTtcblxuICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICB2bS5sb2dpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdm0uZXJyb3IgPSAnJztcbiAgICAgICAgdm0uZmV0Y2hpbmcgPSB0cnVlO1xuICAgICAgICBwb3J0YWxMb2dpblNlcnZpY2UubG9naW4odm0udXNlcm5hbWUsIHZtLnBhc3N3b3JkLCBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgJHN0YXRlLmdvKCdkYXNoYm9hcmQnKTtcbiAgICAgICAgICAgIHZtLmZldGNoaW5nID0gZmFsc2U7XG4gICAgICAgIH0sIGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICB2bS5mZXRjaGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdm0uZXJyb3IgPSAnSW52YWxpZCBDcmVkZW50aWFscyc7XG4gICAgICAgIH0pO1xuICAgIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcG9ydGFsL2xvZ2luL3BvcnRhbC5sb2dpbi5jb250cm9sbGVyLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gNC8yOC8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIFBvcnRhbExvZ2luQ29udHJvbGxlcntcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAocG9ydGFsTG9naW5TZXJ2aWNlLCAkc3RhdGUpIHtcclxuICAgICAgICAnbmdJbmplY3QnXHJcblxyXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHZtLmxvZ2luID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2bS5lcnJvciA9ICcnO1xyXG4gICAgICAgICAgICB2bS5mZXRjaGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHBvcnRhbExvZ2luU2VydmljZS5sb2dpbih2bS51c2VybmFtZSwgdm0ucGFzc3dvcmQsIGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICAgICAkc3RhdGUuZ28oJ2Rhc2hib2FyZCcpO1xyXG4gICAgICAgICAgICAgICAgdm0uZmV0Y2hpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfSwgZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgICAgIHZtLmZldGNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB2bS5lcnJvciA9ICdJbnZhbGlkIENyZWRlbnRpYWxzJztcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcG9ydGFsL2xvZ2luL3BvcnRhbC5sb2dpbi5jb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDQvMjgvMjAxNy5cclxuICovXG52YXIgRGFzaGJvYXJkQ29udHJvbGxlciA9IGV4cG9ydHMuRGFzaGJvYXJkQ29udHJvbGxlciA9IGZ1bmN0aW9uIERhc2hib2FyZENvbnRyb2xsZXIocG9ydGFsTG9naW5TZXJ2aWNlLCAkY29va2llU3RvcmUsIEFQSV9IT1NULCAkcmVzb3VyY2UpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIERhc2hib2FyZENvbnRyb2xsZXIpO1xuXG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIHZtLnN0YXRlID0ge307XG4gICAgdm0udXNlciA9ICRjb29raWVTdG9yZS5nZXQoJ3VzZXJEYXRhJyk7XG5cbiAgICBmdW5jdGlvbiBnZXRBUFBMaXN0KCkge1xuXG4gICAgICAgIGlmICghdm0udXNlcikgcmV0dXJuO1xuXG4gICAgICAgIHZhciBhcHBMaXN0ID0gcG9ydGFsTG9naW5TZXJ2aWNlLndyYXBBY3Rpb25zKCRyZXNvdXJjZShBUElfSE9TVCArICcvZ2V0YXBwbGlzdCcpLCBbJ3NhdmUnXSk7XG5cbiAgICAgICAgYXBwTGlzdC5zYXZlKHsgdXNlcl9pZDogNiB9KS4kcHJvbWlzZS50aGVuKGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgICAgICB2bS5wcm9kdWN0TGlzdCA9IHJlc3VsdHMucHJvZHVjdHM7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHN5bmNBUElMaXN0KCkge1xuXG4gICAgICAgIGlmICghdm0udXNlcikgcmV0dXJuO1xuXG4gICAgICAgIHZhciBhcHBMaXN0ID0gcG9ydGFsTG9naW5TZXJ2aWNlLndyYXBBY3Rpb25zKCRyZXNvdXJjZShBUElfSE9TVCArICcvZ2V0YXBpY2FsbHMnKSwgWydzYXZlJ10pO1xuXG4gICAgICAgIGFwcExpc3Quc2F2ZSh7IHByb2R1Y3RfaWQ6IHZtLnN0YXRlLnByb2R1Y3QuaWQgfSkuJHByb21pc2UudGhlbihmdW5jdGlvbiAocmVzdWx0cykge1xuICAgICAgICAgICAgdm0uYXBpY2FsbHMgPSByZXN1bHRzLmFwaWNhbGxzO1xuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLmFwaWNhbGxzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHRlbXBMaXN0ID0gdm0uYXBpY2FsbHNbaWR4XS5hcGkuc3BsaXQoJy8nKTtcbiAgICAgICAgICAgICAgICB2bS5hcGljYWxsc1tpZHhdLmFwaUVuZHBvaW50ID0gdGVtcExpc3RbdGVtcExpc3QubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICAgICAgdm0uYXBpY2FsbHNbaWR4XS5hcGlFbmRwb2ludCA9IHZtLmFwaWNhbGxzW2lkeF0uYXBpRW5kcG9pbnQuc3BsaXQoJz8nKTtcbiAgICAgICAgICAgICAgICB2bS5hcGljYWxsc1tpZHhdLmFwaUVuZHBvaW50ID0gdm0uYXBpY2FsbHNbaWR4XS5hcGlFbmRwb2ludFswXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdm0uc2VsZWN0QVBJQ2FsbCA9IGZ1bmN0aW9uIChjYWxsKSB7XG4gICAgICAgIHZtLnN0YXRlLmFwaWNhbGwgPSBjYWxsO1xuICAgICAgICB2YXIganNvbjtcbiAgICAgICAgdmFyIHN0cjtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGpzb24gPSBKU09OLnBhcnNlKHZtLnN0YXRlLmFwaWNhbGwucGFyYW1ldGVycyk7XG4gICAgICAgICAgICBzdHIgPSBKU09OLnN0cmluZ2lmeShqc29uLCB1bmRlZmluZWQsIDQpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBzdHIgPSB2bS5zdGF0ZS5hcGljYWxsLnBhcmFtZXRlcnM7XG4gICAgICAgIH1cblxuICAgICAgICBvdXRwdXQoc3ludGF4SGlnaGxpZ2h0KHN0cikpO1xuICAgIH07XG5cbiAgICB2bS5zeW5jQVBJQ2FsbHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHN5bmNBUElMaXN0KCk7XG4gICAgfTtcblxuICAgIHZtLnNlbGVjdFByb2R1Y3QgPSBmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICB2bS5zdGF0ZS5wcm9kdWN0ID0gaXRlbTtcbiAgICB9O1xuXG4gICAgdm0uY2hhbmdlTW9kZSA9IGZ1bmN0aW9uIChpdGVtKSB7XG5cbiAgICAgICAgdmFyIGFwcExpc3QgPSBwb3J0YWxMb2dpblNlcnZpY2Uud3JhcEFjdGlvbnMoJHJlc291cmNlKEFQSV9IT1NUICsgJy9jaGFuZ2VkZWJ1Z2dpbmdtb2RlJyksIFsnc2F2ZSddKTtcblxuICAgICAgICB2YXIgZGViID0gIXZtLnN0YXRlLnByb2R1Y3QuZGVidWdnaW5nID8gMSA6IDA7XG5cbiAgICAgICAgYXBwTGlzdC5zYXZlKHsgaWQ6IHZtLnN0YXRlLnByb2R1Y3QuaWQsIGRlYnVnZ2luZzogZGViIH0pLiRwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHJlc3VsdHMpIHtcbiAgICAgICAgICAgIHZtLnN0YXRlLnByb2R1Y3QgPSByZXN1bHRzLnByb2R1Y3Q7XG4gICAgICAgICAgICB2bS5wcm9kdWN0TGlzdCA9IHJlc3VsdHMucHJvZHVjdHM7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBnZXRBUFBMaXN0KCk7XG5cbiAgICBmdW5jdGlvbiBvdXRwdXQoaW5wKSB7XG4gICAgICAgICQoJy5kYm1jZC1jb250YWluZXIgcHJlJykuaHRtbChpbnApO1xuICAgICAgICAvLyBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3ByZScpKS5pbm5lckhUTUwgPSBpbnA7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gc3ludGF4SGlnaGxpZ2h0KGpzb24pIHtcbiAgICAgICAganNvbiA9IGpzb24ucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xuICAgICAgICByZXR1cm4ganNvbi5yZXBsYWNlKC8oXCIoXFxcXHVbYS16QS1aMC05XXs0fXxcXFxcW151XXxbXlxcXFxcIl0pKlwiKFxccyo6KT98XFxiKHRydWV8ZmFsc2V8bnVsbClcXGJ8LT9cXGQrKD86XFwuXFxkKik/KD86W2VFXVsrXFwtXT9cXGQrKT8pL2csIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgICAgICAgICAgdmFyIGNscyA9ICdudW1iZXInO1xuICAgICAgICAgICAgaWYgKC9eXCIvLnRlc3QobWF0Y2gpKSB7XG4gICAgICAgICAgICAgICAgaWYgKC86JC8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzID0gJ2tleSc7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2xzID0gJ3N0cmluZyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmICgvdHJ1ZXxmYWxzZS8udGVzdChtYXRjaCkpIHtcbiAgICAgICAgICAgICAgICBjbHMgPSAnYm9vbGVhbic7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKC9udWxsLy50ZXN0KG1hdGNoKSkge1xuICAgICAgICAgICAgICAgIGNscyA9ICdudWxsJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xzICsgJ1wiPicgKyBtYXRjaCArICc8L3NwYW4+JztcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIG9iaiA9IHsgYTogMSwgJ2InOiAnZm9vJywgYzogW2ZhbHNlLCAnZmFsc2UnLCBudWxsLCAnbnVsbCcsIHsgZDogeyBlOiAxLjNlNSwgZjogJzEuM2U1JyB9IH1dIH07XG4gICAgdmFyIHN0ciA9IEpTT04uc3RyaW5naWZ5KG9iaiwgdW5kZWZpbmVkLCA0KTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wb3J0YWwvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gNC8yOC8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIERhc2hib2FyZENvbnRyb2xsZXJ7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKHBvcnRhbExvZ2luU2VydmljZSwgJGNvb2tpZVN0b3JlLCBBUElfSE9TVCwgJHJlc291cmNlKXtcclxuICAgICAgICAnbmdJbmplY3QnXHJcblxyXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XHJcblxyXG4gICAgICAgIHZtLnN0YXRlID0ge307XHJcbiAgICAgICAgdm0udXNlciA9ICRjb29raWVTdG9yZS5nZXQoJ3VzZXJEYXRhJyk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGdldEFQUExpc3QoKSB7XHJcblxyXG4gICAgICAgICAgICBpZighdm0udXNlcilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciBhcHBMaXN0ID0gcG9ydGFsTG9naW5TZXJ2aWNlLndyYXBBY3Rpb25zKFxyXG4gICAgICAgICAgICAgICAgJHJlc291cmNlKEFQSV9IT1NUICsgJy9nZXRhcHBsaXN0JyksXHJcbiAgICAgICAgICAgICAgICBbJ3NhdmUnXVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgYXBwTGlzdC5zYXZlKHt1c2VyX2lkOiA2fSkuJHByb21pc2UudGhlbihmdW5jdGlvbihyZXN1bHRzKSB7XHJcbiAgICAgICAgICAgICAgICB2bS5wcm9kdWN0TGlzdCA9IHJlc3VsdHMucHJvZHVjdHM7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3luY0FQSUxpc3QoKSB7XHJcblxyXG4gICAgICAgICAgICBpZighdm0udXNlcilcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciBhcHBMaXN0ID0gcG9ydGFsTG9naW5TZXJ2aWNlLndyYXBBY3Rpb25zKFxyXG4gICAgICAgICAgICAgICAgJHJlc291cmNlKEFQSV9IT1NUICsgJy9nZXRhcGljYWxscycpLFxyXG4gICAgICAgICAgICAgICAgWydzYXZlJ11cclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGFwcExpc3Quc2F2ZSh7cHJvZHVjdF9pZDogdm0uc3RhdGUucHJvZHVjdC5pZH0pLiRwcm9taXNlLnRoZW4oZnVuY3Rpb24ocmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgdm0uYXBpY2FsbHMgPSByZXN1bHRzLmFwaWNhbGxzO1xyXG4gICAgICAgICAgICAgICAgZm9yKHZhciBpZHggaW4gdm0uYXBpY2FsbHMpe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wTGlzdCA9IHZtLmFwaWNhbGxzW2lkeF0uYXBpLnNwbGl0KCcvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdm0uYXBpY2FsbHNbaWR4XS5hcGlFbmRwb2ludCA9IHRlbXBMaXN0W3RlbXBMaXN0Lmxlbmd0aC0xXTtcclxuICAgICAgICAgICAgICAgICAgICB2bS5hcGljYWxsc1tpZHhdLmFwaUVuZHBvaW50ID0gdm0uYXBpY2FsbHNbaWR4XS5hcGlFbmRwb2ludC5zcGxpdCgnPycpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLmFwaWNhbGxzW2lkeF0uYXBpRW5kcG9pbnQgPSB2bS5hcGljYWxsc1tpZHhdLmFwaUVuZHBvaW50WzBdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHZtLnNlbGVjdEFQSUNhbGwgPSBmdW5jdGlvbiAoY2FsbCkge1xyXG4gICAgICAgICAgICB2bS5zdGF0ZS5hcGljYWxsID0gY2FsbDtcclxuICAgICAgICAgICAgdmFyIGpzb25cclxuICAgICAgICAgICAgdmFyIHN0cjtcclxuICAgICAgICAgICAgdHJ5e1xyXG4gICAgICAgICAgICAgICAganNvbiA9IEpTT04ucGFyc2Uodm0uc3RhdGUuYXBpY2FsbC5wYXJhbWV0ZXJzKVxyXG4gICAgICAgICAgICAgICAgc3RyID0gSlNPTi5zdHJpbmdpZnkoanNvbiwgdW5kZWZpbmVkLCA0KTtcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSl7XHJcbiAgICAgICAgICAgICAgICBzdHIgPSB2bS5zdGF0ZS5hcGljYWxsLnBhcmFtZXRlcnM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIG91dHB1dChzeW50YXhIaWdobGlnaHQoc3RyKSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uc3luY0FQSUNhbGxzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzeW5jQVBJTGlzdCgpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZtLnNlbGVjdFByb2R1Y3QgPSBmdW5jdGlvbiAoaXRlbSkge1xyXG4gICAgICAgICAgICB2bS5zdGF0ZS5wcm9kdWN0ID0gaXRlbTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5jaGFuZ2VNb2RlID0gZnVuY3Rpb24gKGl0ZW0pIHtcclxuXHJcbiAgICAgICAgICAgIHZhciBhcHBMaXN0ID0gcG9ydGFsTG9naW5TZXJ2aWNlLndyYXBBY3Rpb25zKFxyXG4gICAgICAgICAgICAgICAgJHJlc291cmNlKEFQSV9IT1NUICsgJy9jaGFuZ2VkZWJ1Z2dpbmdtb2RlJyksXHJcbiAgICAgICAgICAgICAgICBbJ3NhdmUnXVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgdmFyIGRlYiA9ICF2bS5zdGF0ZS5wcm9kdWN0LmRlYnVnZ2luZyA/IDEgOiAwO1xyXG5cclxuICAgICAgICAgICAgYXBwTGlzdC5zYXZlKHtpZDogdm0uc3RhdGUucHJvZHVjdC5pZCwgZGVidWdnaW5nOiBkZWJ9KVxyXG4gICAgICAgICAgICAgICAgLiRwcm9taXNlLnRoZW4oZnVuY3Rpb24ocmVzdWx0cykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZtLnN0YXRlLnByb2R1Y3QgPSByZXN1bHRzLnByb2R1Y3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgdm0ucHJvZHVjdExpc3QgPSByZXN1bHRzLnByb2R1Y3RzO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZ2V0QVBQTGlzdCgpO1xyXG5cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gb3V0cHV0KGlucCkge1xyXG4gICAgICAgICAgICAkKCcuZGJtY2QtY29udGFpbmVyIHByZScpLmh0bWwoaW5wKTtcclxuICAgICAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKSkuaW5uZXJIVE1MID0gaW5wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gc3ludGF4SGlnaGxpZ2h0KGpzb24pIHtcclxuICAgICAgICAgICAganNvbiA9IGpzb24ucmVwbGFjZSgvJi9nLCAnJmFtcDsnKS5yZXBsYWNlKC88L2csICcmbHQ7JykucmVwbGFjZSgvPi9nLCAnJmd0OycpO1xyXG4gICAgICAgICAgICByZXR1cm4ganNvbi5yZXBsYWNlKC8oXCIoXFxcXHVbYS16QS1aMC05XXs0fXxcXFxcW151XXxbXlxcXFxcIl0pKlwiKFxccyo6KT98XFxiKHRydWV8ZmFsc2V8bnVsbClcXGJ8LT9cXGQrKD86XFwuXFxkKik/KD86W2VFXVsrXFwtXT9cXGQrKT8pL2csIGZ1bmN0aW9uIChtYXRjaCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNscyA9ICdudW1iZXInO1xyXG4gICAgICAgICAgICAgICAgaWYgKC9eXCIvLnRlc3QobWF0Y2gpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKC86JC8udGVzdChtYXRjaCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzID0gJ2tleSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xzID0gJ3N0cmluZyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmICgvdHJ1ZXxmYWxzZS8udGVzdChtYXRjaCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBjbHMgPSAnYm9vbGVhbic7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKC9udWxsLy50ZXN0KG1hdGNoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNscyA9ICdudWxsJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiAnPHNwYW4gY2xhc3M9XCInICsgY2xzICsgJ1wiPicgKyBtYXRjaCArICc8L3NwYW4+JztcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgb2JqID0ge2E6MSwgJ2InOidmb28nLCBjOltmYWxzZSwnZmFsc2UnLG51bGwsICdudWxsJywge2Q6e2U6MS4zZTUsZjonMS4zZTUnfX1dfTtcclxuICAgICAgICB2YXIgc3RyID0gSlNPTi5zdHJpbmdpZnkob2JqLCB1bmRlZmluZWQsIDQpO1xyXG5cclxuXHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wb3J0YWwvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb250cm9sbGVyLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDQvMjgvMjAxNy5cclxuICovXG52YXIgaHR0cCA9IGV4cG9ydHMuaHR0cCA9IGZ1bmN0aW9uIGh0dHAoJHJlc291cmNlLCBBUElfSE9TVCwgJGxvZywgJHEsIHBvcnRhbExvZ2luU2VydmljZSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgaHR0cCk7XG5cbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgdm0ucG9zdCA9IGZ1bmN0aW9uICh1cmwsIGJvZHkpIHtcbiAgICAgICAgdmFyIHJlcSA9IHBvcnRhbExvZ2luU2VydmljZS53cmFwQWN0aW9ucygkcmVzb3VyY2UoQVBJX0hPU1QgKyB1cmwpLCBbJ3NhdmUnXSk7XG5cbiAgICAgICAgcmV0dXJuIHJlcS5zYXZlKGJvZHkpLiRwcm9taXNlLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgIH07XG5cbiAgICB2bS5oYW5kbGVSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgIC8vJGxvZy5sb2coXCJoYW5kbGVSZXNwb25zZVwiKTtcbiAgICAgICAgaWYgKHJlc3AuZGF0YSkge1xuICAgICAgICAgICAgcmVzcCA9IHJlc3AuZGF0YTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShyZXNwKTtcbiAgICB9O1xuXG4gICAgdm0uaGFuZGxlRmFpbHVyZSA9IGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgIC8vJGluRXJyb3IuYWRkKHJlc3ApO1xuICAgICAgICAkbG9nLmxvZyhcImhhbmRsZUZhaWx1cmUgXCIsIHJlc3ApO1xuICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlc3ApO1xuICAgIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcG9ydGFsL2h0dHBTZXJ2aWNlL2h0dHBTZXJ2aWNlLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gNC8yOC8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzIGh0dHB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKCRyZXNvdXJjZSwgQVBJX0hPU1QsICRsb2csICRxLCBwb3J0YWxMb2dpblNlcnZpY2Upe1xyXG4gICAgICAgICduZ0luamVjdCdcclxuXHJcbiAgICAgICAgdmFyIHZtID0gdGhpcztcclxuXHJcbiAgICAgICAgdm0ucG9zdCA9IGZ1bmN0aW9uICh1cmwsIGJvZHkpIHtcclxuICAgICAgICAgICAgdmFyIHJlcSA9IHBvcnRhbExvZ2luU2VydmljZS53cmFwQWN0aW9ucyhcclxuICAgICAgICAgICAgICAgICRyZXNvdXJjZShBUElfSE9TVCArIHVybCksXHJcbiAgICAgICAgICAgICAgICBbJ3NhdmUnXVxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHJlcS5zYXZlKGJvZHkpLiRwcm9taXNlXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5oYW5kbGVSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgIC8vJGxvZy5sb2coXCJoYW5kbGVSZXNwb25zZVwiKTtcclxuICAgICAgICAgICAgaWYocmVzcC5kYXRhKXtcclxuICAgICAgICAgICAgICAgIHJlc3AgPSByZXNwLmRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShyZXNwKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uaGFuZGxlRmFpbHVyZSA9IGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgIC8vJGluRXJyb3IuYWRkKHJlc3ApO1xyXG4gICAgICAgICAgICAkbG9nLmxvZyhcImhhbmRsZUZhaWx1cmUgXCIsIHJlc3ApO1xyXG4gICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlc3ApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvcG9ydGFsL2h0dHBTZXJ2aWNlL2h0dHBTZXJ2aWNlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciB2aWRlb1BsYXllckNvbnRyb2xsZXIgPSBmdW5jdGlvbiB2aWRlb1BsYXllckNvbnRyb2xsZXIodGFnKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIHZpZGVvUGxheWVyQ29udHJvbGxlcik7XG5cbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgZmxvd01hbmFnZXIuaW5pdFdpZGdldCh0YWcsIGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgaW5pdCh0YWcpO1xuICAgIH0pO1xuXG4gICAgdm0ucHJvY2Vzc0lucHV0ID0gZnVuY3Rpb24gKHRhZywgZGF0YSkge307XG5cbiAgICBmdW5jdGlvbiBpbml0KHRhZykge1xuICAgICAgICB2bS50YWcgPSB0YWcudGFnX2lkO1xuICAgIH1cbn07XG5cbnZhciB2aWRlb1BsYXllciA9IHtcbiAgICBjb250cm9sbGVyOiB2aWRlb1BsYXllckNvbnRyb2xsZXIsXG4gICAgdmlldzogJ2FwcC93aWRnZXRzL2NvbW1vbi92aWRlb1BsYXllci92aWRlby5wbGF5ZXIuaHRtbCcsXG4gICAgbWV0aG9kczogW1xuICAgICAgICAvLyB7aWQ6MCwgbmFtZTonc2V0RGF0YScsb3V0cHV0OnRydWUsIGlucHV0OnRydWUsIHBhcmFtcyA6IFsnYXNzZXQnXX0sXG4gICAgXSxcbiAgICBjb2xvcjogJyNjYzIyMjInLFxuICAgIHNldHRpbmdzOiB7IHZoOiAyMCwgdzogOSB9XG59O1xuXG5leHBvcnRzLnZpZGVvUGxheWVyID0gdmlkZW9QbGF5ZXI7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC93aWRnZXRzL2NvbW1vbi92aWRlb1BsYXllci92aWRlby5wbGF5ZXIuanMiLCJcbmNsYXNzIHZpZGVvUGxheWVyQ29udHJvbGxlcntcblxuICAgIGNvbnN0cnVjdG9yICh0YWcpIHtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcblxuICAgICAgICBmbG93TWFuYWdlci5pbml0V2lkZ2V0KHRhZywgZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgICAgaW5pdCh0YWcpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZtLnByb2Nlc3NJbnB1dCA9IGZ1bmN0aW9uICh0YWcsIGRhdGEpIHtcblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdCh0YWcpIHtcbiAgICAgICAgICAgIHZtLnRhZyA9IHRhZy50YWdfaWQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cblxudmFyIHZpZGVvUGxheWVyID0ge1xuICAgIGNvbnRyb2xsZXI6IHZpZGVvUGxheWVyQ29udHJvbGxlcixcbiAgICB2aWV3OidhcHAvd2lkZ2V0cy9jb21tb24vdmlkZW9QbGF5ZXIvdmlkZW8ucGxheWVyLmh0bWwnLFxuICAgIG1ldGhvZHM6W1xuICAgICAgICAvLyB7aWQ6MCwgbmFtZTonc2V0RGF0YScsb3V0cHV0OnRydWUsIGlucHV0OnRydWUsIHBhcmFtcyA6IFsnYXNzZXQnXX0sXG4gICAgXSxcbiAgICBjb2xvcjonI2NjMjIyMicsXG4gICAgc2V0dGluZ3MgOiB7dmg6MjAsIHc6OX0sXG59XG5cblxuZXhwb3J0IHt2aWRlb1BsYXllcn07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3dpZGdldHMvY29tbW9uL3ZpZGVvUGxheWVyL3ZpZGVvLnBsYXllci5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgJDNkUGxheWVyQ29udHJvbGxlciA9IGZ1bmN0aW9uICQzZFBsYXllckNvbnRyb2xsZXIodGFnLCAkc2NvcGUpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgJDNkUGxheWVyQ29udHJvbGxlcik7XG5cbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgLypcbiAgICAqXG4gICAgKiBGbG93IE1hbmFnZXIgRnVuY3Rpb25zXG4gICAgKlxuICAgICogKi9cblxuICAgIHZtLnByb2Nlc3NJbnB1dCA9IGZ1bmN0aW9uICh0YWcsIGRhdGEpIHtcbiAgICAgICAgaWYgKHRhZyA9PSAnc2V0RnJhbWUnKSB7XG4gICAgICAgICAgICB1cGRhdGVGcmFtZShkYXRhKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2bS5mcmFtZURhdGEgPSB7fTtcblxuICAgIGZ1bmN0aW9uIHVwZGF0ZUZyYW1lKGRhdGEpIHtcbiAgICAgICAgaWYgKCdjYW1lcmFQb3NpdGlvbicgaW4gZGF0YSkge1xuICAgICAgICAgICAgdm0uZnJhbWVEYXRhLmNhbWVyYVBvc2l0aW9uID0gZGF0YS5jYW1lcmFQb3NpdGlvbjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgKlxuICAgICogVmFyaWFibGUgSW5pdGlhbGl6YXRpb25cbiAgICAqXG4gICAgKiAqL1xuXG4gICAgdm0ubW9kZXMgPSB7XG4gICAgICAgICdNQU5VQUwnOiAnTUFOVUFMJyxcbiAgICAgICAgJ0FVVE8nOiAnQVVUTydcbiAgICB9O1xuXG4gICAgdm0udG9vbHMgPSB7XG4gICAgICAgICdNT1ZFJzogJ01PVkUnLFxuICAgICAgICAnQ1VUVklFVyc6ICdDVVRWSUVXJ1xuICAgIH07XG5cbiAgICB2bS5heGVzID0ge1xuICAgICAgICBYOiAnWCcsXG4gICAgICAgIFk6ICdZJyxcbiAgICAgICAgWjogJ1onXG4gICAgfTtcblxuICAgIHZtLmNvbnRyb2xzID0ge1xuICAgICAgICBtb2RlOiB2bS5tb2Rlcy5BVVRPLFxuICAgICAgICB0b29sOiB7XG4gICAgICAgICAgICBlbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgIGN1cnJlbnQ6IHZtLnRvb2xzWydNT1ZFJ11cbiAgICAgICAgfSxcbiAgICAgICAgY3V0dmlldzoge1xuICAgICAgICAgICAgcGxhbmVzOiBbXSxcbiAgICAgICAgICAgIGF4aXM6IHZtLmF4ZXNbJ1gnXVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qXG4gICAgKlxuICAgICogIFRocmVlSlNcbiAgICAqXG4gICAgKiAqL1xuXG4gICAgdmFyIHJlbmRlcmVyLFxuICAgICAgICBjYW1lcmEsXG4gICAgICAgIGxvYWRlcixcbiAgICAgICAgdmlld3BvcnRIZWlnaHQsXG4gICAgICAgIHZpZXdwb3J0V2lkdGgsXG4gICAgICAgIHNjZW5lLFxuICAgICAgICB2aWV3cG9ydElkID0gJzNkUGxheWVyJyxcbiAgICAgICAgZ2VvTWVzaCxcbiAgICAgICAgY2FtZXJhQ29udHJvbHMsXG4gICAgICAgIHN0YXRzO1xuXG4gICAgZnVuY3Rpb24gaW5pdFRocmVlKCkge1xuICAgICAgICB2YXIgdGhyZWVJbnRlciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICgkKCcjJyArIHZpZXdwb3J0SWQpLmxlbmd0aCA+IDAgJiYgJCgnIycgKyB2aWV3cG9ydElkKS5oZWlnaHQoKSA+IDE1MCkge1xuICAgICAgICAgICAgICAgIHZpZXdwb3J0SGVpZ2h0ID0gJCgnIycgKyB2aWV3cG9ydElkKS5oZWlnaHQoKTtcbiAgICAgICAgICAgICAgICB2aWV3cG9ydFdpZHRoID0gJCgnIycgKyB2aWV3cG9ydElkKS53aWR0aCgpO1xuICAgICAgICAgICAgICAgIGlmICh2aWV3cG9ydEhlaWdodCA+IDAgJiYgdmlld3BvcnRXaWR0aCA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdDMoKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aHJlZUludGVyKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDIwKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBpbml0MygpIHtcbiAgICAgICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGFudGlhbGlhczogZmFsc2UsIGFscGhhOiB0cnVlIH0pO1xuICAgICAgICByZW5kZXJlci5zZXRTaXplKHZpZXdwb3J0V2lkdGgsIHZpZXdwb3J0SGVpZ2h0KTtcbiAgICAgICAgLy8gcmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggMHg3Nzc3NzcsIDAgKTsgLy8gdGhlIGRlZmF1bHRcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodmlld3BvcnRJZCkuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbiAgICAgICAgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDQ1LCB2aWV3cG9ydFdpZHRoIC8gdmlld3BvcnRIZWlnaHQsIDAuMSwgNTAwKTtcbiAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnNldCgyLjUsIDIuNSwgMi41KTtcblxuICAgICAgICBsb2FkZXIgPSBuZXcgVEhSRUUuSlNPTkxvYWRlcigpO1xuICAgICAgICBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuXG4gICAgICAgIGNhbWVyYUNvbnRyb2xzID0gbmV3IFRIUkVFLk9yYml0Q29udHJvbHMoY2FtZXJhLCByZW5kZXJlci5kb21FbGVtZW50KTtcbiAgICAgICAgY2FtZXJhQ29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgcmVuZGVyKTsgLy8gcmVtb3ZlIHdoZW4gdXNpbmcgYW5pbWF0aW9uIGxvb3BcbiAgICAgICAgY2FtZXJhQ29udHJvbHMuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgICAgIC8vIGVuYWJsZSBhbmltYXRpb24gbG9vcCB3aGVuIHVzaW5nIGRhbXBpbmcgb3IgYXV0b3JvdGF0aW9uXG4gICAgICAgIC8vIGNhbWVyYUNvbnRyb2xzLmVuYWJsZURhbXBpbmcgPSB0cnVlO1xuICAgICAgICAvLyBjYW1lcmFDb250cm9scy5kYW1waW5nRmFjdG9yID0gMC4yNTtcbiAgICAgICAgLy8gY2FtZXJhQ29udHJvbHMuZW5hYmxlWm9vbSA9IGZhbHNlO1xuXG4gICAgICAgIHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgICAgICAgICAvLyBtYXAgOiB0ZXh0dXJlLFxuICAgICAgICAgICAgY29sb3I6IDB4ODgzMzMzLFxuICAgICAgICAgICAgdmVydGV4Q29sb3JzOiBUSFJFRS5WZXJ0ZXhDb2xvcnMsXG4gICAgICAgICAgICBzcGVjdWxhcjogMHg1NTU1NTUsXG4gICAgICAgICAgICBzaWRlOiBUSFJFRS5Eb3VibGVTaWRlLFxuICAgICAgICAgICAgc2hpbmluZXNzOiAxMDBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbG9hZGVyLmxvYWQoJ2FwcC9tb2RlbHMvbmV1cm9uLmpzJywgZnVuY3Rpb24gKGdlbywgbWF0KSB7XG4gICAgICAgICAgICBtYXRbMF0uc2lkZSA9IFRIUkVFLkRvdWJsZVNpZGU7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhtYXQpO1xuICAgICAgICAgICAgZ2VvTWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlbywgbWF0ZXJpYWwpO1xuICAgICAgICAgICAgdm0uc2Vydm9Cb2R5ID0gZ2VvTWVzaDtcbiAgICAgICAgICAgIGNhbWVyYS5sb29rQXQoZ2VvTWVzaC5wb3NpdGlvbik7XG4gICAgICAgICAgICBhbmltYXRlKCk7XG4gICAgICAgICAgICBzY2VuZS5hZGQoZ2VvTWVzaCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhciBsaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoJyNmZmYnKTsgLy8gc29mdCB3aGl0ZSBsaWdodFxuICAgICAgICBzY2VuZS5hZGQobGlnaHQpO1xuICAgICAgICB2YXIgZGlyZWN0aW9uYWxMaWdodCA9IG5ldyBUSFJFRS5EaXJlY3Rpb25hbExpZ2h0KDB4ZmZmZmZmKTtcbiAgICAgICAgZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi5zZXQoLTMsIDIwLCAxMDApLm5vcm1hbGl6ZSgpO1xuICAgICAgICBzY2VuZS5hZGQoZGlyZWN0aW9uYWxMaWdodCk7XG5cbiAgICAgICAgc3RhdHMgPSBuZXcgU3RhdHMoKTtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpZ1dpZGdldCcpLmFwcGVuZENoaWxkKHN0YXRzLmRvbSk7XG5cbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuXG4gICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcucGxhbmUgPSBuZXcgVEhSRUUuUGxhbmUobmV3IFRIUkVFLlZlY3RvcjMoMCwgMCwgMCksIDAuMSk7XG4gICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcucGxhbmUubm9ybWFsLnggPSAtMTtcbiAgICAgICAgcmVuZGVyZXIuY2xpcHBpbmdQbGFuZXMgPSB2bS5jb250cm9scy5jdXR2aWV3LnBsYW5lcztcblxuICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlck1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgdHJhbnNwYXJlbnQ6IHRydWUsIHdpcmVmcmFtZTogdHJ1ZSwgY29sb3I6IDB4ZmYwMDAwLCBvcGFjaXR5OiAwIH0pO1xuICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlciA9IG5ldyBUSFJFRS5NZXNoKG5ldyBUSFJFRS5QbGFuZUJ1ZmZlckdlb21ldHJ5KDMsIDMsIDIsIDIpLCB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlck1hdGVyaWFsKTtcblxuICAgICAgICB2YXIgY29udHJvbCA9IG5ldyBUSFJFRS5UcmFuc2Zvcm1Db250cm9scyhjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuICAgICAgICBjb250cm9sLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHJlbmRlcik7XG4gICAgICAgIGNvbnRyb2wuYXR0YWNoKHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyKTtcblxuICAgICAgICBzY2VuZS5hZGQodm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIpO1xuICAgICAgICAvLyBzY2VuZS5hZGQoIGNvbnRyb2wgKTtcblxuXG4gICAgICAgIHZtLmNoYW5nZU1vZGUoJ01BTlVBTCcpO1xuICAgICAgICB2bS5jaGFuZ2VUb29sKCdNT1ZFJyk7XG4gICAgICAgIHZtLmNoYW5nZUN1dFZpZXdBeGlzKCdYJyk7XG4gICAgICAgIGFwcGx5U2NvcGUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlKCkge1xuICAgICAgICB2bS5zZXJ2b0FuaW1JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcbiAgICAgICAgcmVuZGVyKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICBwcm9jZXNzRnJhbWUoKTtcbiAgICAgICAgcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHByb2Nlc3NGcmFtZSgpIHtcbiAgICAgICAgaWYgKHZtLmNvbnRyb2xzLm1vZGUgPT0gdm0ubW9kZXMuQVVUTykge1xuICAgICAgICAgICAgYW5pbWF0ZVZlY3RvcnMoY2FtZXJhLnBvc2l0aW9uLCB2bS5mcmFtZURhdGEuY2FtZXJhUG9zaXRpb24sIDAuMik7XG4gICAgICAgICAgICBjYW1lcmEubG9va0F0KGdlb01lc2gucG9zaXRpb24pO1xuICAgICAgICB9IGVsc2Uge31cbiAgICAgICAgc3RhdHMudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgdmFyIGRpbWVuc2lvbnMgPSBbJ3gnLCAneScsICd6J107XG4gICAgdmFyIGRpRGlmZiA9IDA7XG5cbiAgICBmdW5jdGlvbiBhbmltYXRlVmVjdG9ycyh2MSwgdjIsIG1heCkge1xuICAgICAgICBpZiAoIXYxIHx8ICF2MikgcmV0dXJuO1xuICAgICAgICBmb3IgKHZhciBheGlzIGluIGRpbWVuc2lvbnMpIHtcbiAgICAgICAgICAgIGRpRGlmZiA9IHYxW2RpbWVuc2lvbnNbYXhpc11dIC0gdjJbZGltZW5zaW9uc1theGlzXV07XG4gICAgICAgICAgICBpZiAoZGlEaWZmID4gMCkge1xuICAgICAgICAgICAgICAgIHYxW2RpbWVuc2lvbnNbYXhpc11dIC09IE1hdGgubWluKG1heCwgZGlEaWZmIC8gMTApO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChkaURpZmYgPCAwKSB7XG4gICAgICAgICAgICAgICAgdjFbZGltZW5zaW9uc1theGlzXV0gKz0gTWF0aC5taW4obWF4LCAtMSAqIGRpRGlmZiAvIDEwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qXG4gICAgKlxuICAgICogIENvbnRyb2xsZXIgRnVuY3Rpb25zXG4gICAgKlxuICAgICogKi9cblxuICAgIHZtLmNoYW5nZU1vZGUgPSBmdW5jdGlvbiAobW9kZSkge1xuICAgICAgICB2bS5jb250cm9scy5tb2RlID0gdm0ubW9kZXNbbW9kZV07XG4gICAgICAgIGlmICh2bS5tb2Rlc1ttb2RlXSA9PSB2bS5tb2Rlc1snQVVUTyddKSB7XG4gICAgICAgICAgICBkaXNhYmxlVG9vbCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZW5hYmxlVG9vbCgpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZtLmNoYW5nZVRvb2wgPSBmdW5jdGlvbiAodG9vbCkge1xuICAgICAgICBpZiAodm0uY29udHJvbHMudG9vbC5lbmFibGVkKSB7XG4gICAgICAgICAgICB2bS5jb250cm9scy50b29sLmN1cnJlbnQgPSB2bS50b29sc1t0b29sXTtcbiAgICAgICAgICAgIGlmICh2bS50b29sc1t0b29sXSA9PSB2bS50b29sc1snTU9WRSddKSB7XG4gICAgICAgICAgICAgICAgY2FtZXJhQ29udHJvbHMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNhbWVyYUNvbnRyb2xzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2bS5jaGFuZ2VDdXRWaWV3QXhpcyA9IGZ1bmN0aW9uIChheGlzKSB7XG4gICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcuYXhpcyA9IGF4aXM7XG4gICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcucGxhbmUubm9ybWFsLnggPSAwO1xuICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LnBsYW5lLm5vcm1hbC55ID0gMDtcbiAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5wbGFuZS5ub3JtYWwueiA9IDA7XG4gICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcucGxhbmUuY29uc3RhbnQgPSAwLjA7XG4gICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyLnJvdGF0aW9uLnggPSAwO1xuICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlci5yb3RhdGlvbi55ID0gMDtcbiAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIucm90YXRpb24ueiA9IDA7XG4gICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyLnBvc2l0aW9uLnggPSAtMC4wMjtcbiAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIucG9zaXRpb24ueSA9IC0wLjAyO1xuICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlci5wb3NpdGlvbi56ID0gLTAuMDI7XG5cbiAgICAgICAgaWYgKHZtLmF4ZXNbYXhpc10gPT0gdm0uYXhlc1snWCddKSB7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LnBsYW5lLm5vcm1hbC54ID0gLTE7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlci5yb3RhdGlvbi55ID0gTWF0aC5QSSAvIDI7XG4gICAgICAgIH0gZWxzZSBpZiAodm0uYXhlc1theGlzXSA9PSB2bS5heGVzWydZJ10pIHtcbiAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcucGxhbmUubm9ybWFsLnkgPSAtMTtcbiAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyLnJvdGF0aW9uLnggPSBNYXRoLlBJIC8gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcucGxhbmUubm9ybWFsLnogPSAtMTtcbiAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyLnJvdGF0aW9uLnogPSBNYXRoLlBJIC8gMjtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2bS50b2dnbGVDdXRWaWV3ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodm0uY29udHJvbHMuY3V0dmlldy5lbmFibGVkKSB7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIGRpc2FibGVDdXRWaWV3KCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgZW5hYmxlQ3V0VmlldygpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIHZtLmNoYW5nZUN1dFZpZXdWYWwgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcucGxhbmUuY29uc3RhbnQgKz0gdmFsO1xuICAgICAgICBpZiAodm0uY29udHJvbHMuY3V0dmlldy5heGlzID09IHZtLmF4ZXNbJ1gnXSkge1xuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIucG9zaXRpb24ueCArPSB2YWw7XG4gICAgICAgIH0gZWxzZSBpZiAodm0uY29udHJvbHMuY3V0dmlldy5heGlzID09IHZtLmF4ZXNbJ1gnXSkge1xuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIucG9zaXRpb24ueSArPSB2YWw7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlci5wb3NpdGlvbi56ICs9IHZhbDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBkaXNhYmxlVG9vbCgpIHtcbiAgICAgICAgdm0uY2hhbmdlVG9vbCgnJyk7XG4gICAgICAgIHZtLmNvbnRyb2xzLnRvb2wuZW5hYmxlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGVuYWJsZVRvb2woKSB7XG4gICAgICAgIHZtLmNvbnRyb2xzLnRvb2wuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIHZtLmNoYW5nZVRvb2woJ01PVkUnKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBlbmFibGVDdXRWaWV3KCkge1xuICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICByZW5kZXJlci5jbGlwcGluZ1BsYW5lcyA9IFt2bS5jb250cm9scy5jdXR2aWV3LnBsYW5lXTtcbiAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXJNYXRlcmlhbC5vcGFjaXR5ID0gMTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkaXNhYmxlQ3V0VmlldygpIHtcbiAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIHJlbmRlcmVyLmNsaXBwaW5nUGxhbmVzID0gW107XG4gICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyTWF0ZXJpYWwub3BhY2l0eSA9IDA7XG4gICAgfVxuXG4gICAgLypcbiAgICAqXG4gICAgKiAgSW5pdCBGdW5jdGlvblxuICAgICpcbiAgICAqICovXG5cbiAgICBmdW5jdGlvbiBpbml0QkNsaWNrKCkge1xuICAgICAgICB2bS5iY2xpY2tFbHMgPSB7fTtcbiAgICAgICAgdm0uYmNsaWNrRG9tRWxzID0gdm0uRE9NLmZpbmQoJ1tiLWNsaWNrXScpO1xuICAgICAgICB2bS5iY2xpY2tEb21FbHMuZWFjaChmdW5jdGlvbiAoa2V5LCBlbCkge1xuICAgICAgICAgICAgJChlbCkuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGV2YWwoJChlbCkuYXR0cignYi1jbGljaycpKTtcbiAgICAgICAgICAgICAgICBhcHBseVNjb3BlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdmFyIHRlbXBBcnJPYmo7XG4gICAgdmFyIHRlbXBBcnI7XG5cbiAgICBmdW5jdGlvbiBhcHBseUJDbGFzcygpIHtcbiAgICAgICAgdm0uYmNsaWNrRWxzID0ge307XG4gICAgICAgIHZtLmJjbGlja0RvbUVscyA9IHZtLkRPTS5maW5kKCdbYi1jbGFzc10nKTtcbiAgICAgICAgdm0uYmNsaWNrRG9tRWxzLmVhY2goZnVuY3Rpb24gKGtleSwgZWwpIHtcbiAgICAgICAgICAgIHRlbXBBcnIgPSAkKGVsKS5hdHRyKCdiLWNsYXNzJykuc3BsaXQoJywnKTtcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiB0ZW1wQXJyKSB7XG4gICAgICAgICAgICAgICAgdGVtcEFyck9iaiA9IHRlbXBBcnJbaWR4XS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgIGlmIChldmFsKHRlbXBBcnJPYmpbMV0pKSAkKGVsKS5hZGRDbGFzcyh0ZW1wQXJyT2JqWzBdKTtlbHNlICQoZWwpLnJlbW92ZUNsYXNzKHRlbXBBcnJPYmpbMF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBhcHBseVNjb3BlKCkge1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGFwcGx5QkNsYXNzKCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRTY29wZSgpIHtcbiAgICAgICAgaW5pdEJDbGljaygpO1xuICAgICAgICBhcHBseVNjb3BlKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdCh0YWcpIHtcblxuICAgICAgICAvKlxuICAgICAgICAqICAgQmFzaWMgU2V0dGluZ3NcbiAgICAgICAgKiAqL1xuXG4gICAgICAgIHZtLnRhZyA9IHRhZy50YWdfaWQ7XG4gICAgICAgIHZtLndpZGdldERhdGEgPSBmbG93TWFuYWdlci5nZXREYXRhKHZtLnRhZyk7XG4gICAgICAgIHZtLkRPTSA9IHZtLndpZGdldERhdGEuRE9NO1xuICAgICAgICBpbml0VGhyZWUoKTtcbiAgICAgICAgaW5pdFNjb3BlKCk7XG5cbiAgICAgICAgLypcbiAgICAgICAgKiBJbml0aWFsIFNldHVwXG4gICAgICAgICogKi9cbiAgICB9XG5cbiAgICBmbG93TWFuYWdlci5pbml0V2lkZ2V0KHRhZywgZnVuY3Rpb24gKHRhZykge1xuICAgICAgICBpbml0KHRhZyk7XG4gICAgfSk7XG59O1xuXG52YXIgJDNkUGxheWVyID0ge1xuICAgIGNvbnRyb2xsZXI6ICQzZFBsYXllckNvbnRyb2xsZXIsXG4gICAgdmlldzogJ2FwcC93aWRnZXRzL2NvbW1vbi8zZFBsYXllci8zZC5wbGF5ZXIuaHRtbCcsXG4gICAgbWV0aG9kczogW3sgaWQ6IDAsIG5hbWU6ICdzZXRGcmFtZScsIG91dHB1dDogZmFsc2UsIGlucHV0OiB0cnVlLCBwYXJhbXM6IFsnZnJhbWUnXSB9XSxcbiAgICBjb2xvcjogJyNjYzIyMjInLFxuICAgIHNldHRpbmdzOiB7IHZoOiAyMCwgdzogOSB9XG59O1xuXG5leHBvcnRzLiQzZFBsYXllciA9ICQzZFBsYXllcjtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3dpZGdldHMvY29tbW9uLzNkUGxheWVyLzNkLnBsYXllci5qcyIsIlxuY2xhc3MgJDNkUGxheWVyQ29udHJvbGxlcntcblxuICAgIGNvbnN0cnVjdG9yICh0YWcsICRzY29wZSkge1xuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgICAgIC8qXG4gICAgICAgICpcbiAgICAgICAgKiBGbG93IE1hbmFnZXIgRnVuY3Rpb25zXG4gICAgICAgICpcbiAgICAgICAgKiAqL1xuXG4gICAgICAgIHZtLnByb2Nlc3NJbnB1dCA9IGZ1bmN0aW9uICh0YWcsIGRhdGEpIHtcbiAgICAgICAgICAgIGlmKHRhZyA9PSAnc2V0RnJhbWUnKXtcbiAgICAgICAgICAgICAgICB1cGRhdGVGcmFtZShkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZtLmZyYW1lRGF0YSA9IHt9O1xuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUZyYW1lKGRhdGEpIHtcbiAgICAgICAgICAgIGlmKCdjYW1lcmFQb3NpdGlvbicgaW4gZGF0YSl7XG4gICAgICAgICAgICAgICAgdm0uZnJhbWVEYXRhLmNhbWVyYVBvc2l0aW9uID0gZGF0YS5jYW1lcmFQb3NpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qXG4gICAgICAgICpcbiAgICAgICAgKiBWYXJpYWJsZSBJbml0aWFsaXphdGlvblxuICAgICAgICAqXG4gICAgICAgICogKi9cblxuICAgICAgICB2bS5tb2RlcyA9IHtcbiAgICAgICAgICAgICdNQU5VQUwnIDogJ01BTlVBTCcsXG4gICAgICAgICAgICAnQVVUTycgOiAnQVVUTydcbiAgICAgICAgfVxuXG4gICAgICAgIHZtLnRvb2xzID0ge1xuICAgICAgICAgICAgJ01PVkUnIDogJ01PVkUnLFxuICAgICAgICAgICAgJ0NVVFZJRVcnIDogJ0NVVFZJRVcnXG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uYXhlcyA9IHtcbiAgICAgICAgICAgIFggOiAnWCcsXG4gICAgICAgICAgICBZIDogJ1knLFxuICAgICAgICAgICAgWiA6ICdaJ1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmNvbnRyb2xzID0ge1xuICAgICAgICAgICAgbW9kZSA6IHZtLm1vZGVzLkFVVE8sXG4gICAgICAgICAgICB0b29sIDoge1xuICAgICAgICAgICAgICAgIGVuYWJsZWQgOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBjdXJyZW50IDogdm0udG9vbHNbJ01PVkUnXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGN1dHZpZXcgOiB7XG4gICAgICAgICAgICAgICAgcGxhbmVzIDogW10sXG4gICAgICAgICAgICAgICAgYXhpcyA6IHZtLmF4ZXNbJ1gnXVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG5cbiAgICAgICAgLypcbiAgICAgICAgKlxuICAgICAgICAqICBUaHJlZUpTXG4gICAgICAgICpcbiAgICAgICAgKiAqL1xuXG4gICAgICAgIHZhciByZW5kZXJlcixcbiAgICAgICAgICAgIGNhbWVyYSxcbiAgICAgICAgICAgIGxvYWRlcixcbiAgICAgICAgICAgIHZpZXdwb3J0SGVpZ2h0LFxuICAgICAgICAgICAgdmlld3BvcnRXaWR0aCxcbiAgICAgICAgICAgIHNjZW5lLFxuICAgICAgICAgICAgdmlld3BvcnRJZCA9ICczZFBsYXllcicsXG4gICAgICAgICAgICBnZW9NZXNoLFxuICAgICAgICAgICAgY2FtZXJhQ29udHJvbHMsXG4gICAgICAgICAgICBzdGF0cztcblxuICAgICAgICBmdW5jdGlvbiBpbml0VGhyZWUoKXtcbiAgICAgICAgICAgIHZhciB0aHJlZUludGVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmKCQoJyMnK3ZpZXdwb3J0SWQpLmxlbmd0aCA+IDAgJiYgJCgnIycrdmlld3BvcnRJZCkuaGVpZ2h0KCkgPiAxNTApe1xuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydEhlaWdodCA9ICQoJyMnK3ZpZXdwb3J0SWQpLmhlaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICB2aWV3cG9ydFdpZHRoID0gJCgnIycrdmlld3BvcnRJZCkud2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYodmlld3BvcnRIZWlnaHQgPiAwICYmIHZpZXdwb3J0V2lkdGggPiAwKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXQzKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRocmVlSW50ZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwyMClcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXQzKCkge1xuICAgICAgICAgICAgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7YW50aWFsaWFzOiBmYWxzZSwgYWxwaGE6IHRydWV9KTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnNldFNpemUodmlld3BvcnRXaWR0aCwgdmlld3BvcnRIZWlnaHQpO1xuICAgICAgICAgICAgLy8gcmVuZGVyZXIuc2V0Q2xlYXJDb2xvciggMHg3Nzc3NzcsIDAgKTsgLy8gdGhlIGRlZmF1bHRcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHZpZXdwb3J0SWQpLmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xuXG4gICAgICAgICAgICBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNDUsIHZpZXdwb3J0V2lkdGggLyB2aWV3cG9ydEhlaWdodCwgMC4xLCA1MDApO1xuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnNldCgyLjUsIDIuNSwgMi41KTtcblxuICAgICAgICAgICAgbG9hZGVyID0gbmV3IFRIUkVFLkpTT05Mb2FkZXIoKTtcbiAgICAgICAgICAgIHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgICAgICAgICAgIGNhbWVyYUNvbnRyb2xzID0gbmV3IFRIUkVFLk9yYml0Q29udHJvbHMoIGNhbWVyYSwgcmVuZGVyZXIuZG9tRWxlbWVudCApO1xuICAgICAgICAgICAgY2FtZXJhQ29udHJvbHMuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsIHJlbmRlciApOyAvLyByZW1vdmUgd2hlbiB1c2luZyBhbmltYXRpb24gbG9vcFxuICAgICAgICAgICAgY2FtZXJhQ29udHJvbHMuZW5hYmxlZCA9IGZhbHNlO1xuXG5cblxuICAgICAgICAgICAgLy8gZW5hYmxlIGFuaW1hdGlvbiBsb29wIHdoZW4gdXNpbmcgZGFtcGluZyBvciBhdXRvcm90YXRpb25cbiAgICAgICAgICAgIC8vIGNhbWVyYUNvbnRyb2xzLmVuYWJsZURhbXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgLy8gY2FtZXJhQ29udHJvbHMuZGFtcGluZ0ZhY3RvciA9IDAuMjU7XG4gICAgICAgICAgICAvLyBjYW1lcmFDb250cm9scy5lbmFibGVab29tID0gZmFsc2U7XG5cbiAgICAgICAgICAgIHZhciBtYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoUGhvbmdNYXRlcmlhbCh7XG4gICAgICAgICAgICAgICAgLy8gbWFwIDogdGV4dHVyZSxcbiAgICAgICAgICAgICAgICBjb2xvciA6IDB4ODgzMzMzLFxuICAgICAgICAgICAgICAgIHZlcnRleENvbG9ycyA6IFRIUkVFLlZlcnRleENvbG9ycyxcbiAgICAgICAgICAgICAgICBzcGVjdWxhcjogMHg1NTU1NTUsXG4gICAgICAgICAgICAgICAgc2lkZTogVEhSRUUuRG91YmxlU2lkZSxcbiAgICAgICAgICAgICAgICBzaGluaW5lc3M6IDEwMCxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsb2FkZXIubG9hZCgnYXBwL21vZGVscy9uZXVyb24uanMnLCBmdW5jdGlvbiAoZ2VvLCBtYXQpe1xuICAgICAgICAgICAgICAgIG1hdFswXS5zaWRlID0gVEhSRUUuRG91YmxlU2lkZTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtYXQpO1xuICAgICAgICAgICAgICAgIGdlb01lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW8sIG1hdGVyaWFsKTtcbiAgICAgICAgICAgICAgICB2bS5zZXJ2b0JvZHkgPSBnZW9NZXNoO1xuICAgICAgICAgICAgICAgIGNhbWVyYS5sb29rQXQoZ2VvTWVzaC5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZSgpO1xuICAgICAgICAgICAgICAgIHNjZW5lLmFkZChnZW9NZXNoKTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIHZhciBsaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoJyNmZmYnKTsgLy8gc29mdCB3aGl0ZSBsaWdodFxuICAgICAgICAgICAgc2NlbmUuYWRkKGxpZ2h0KTtcbiAgICAgICAgICAgIHZhciBkaXJlY3Rpb25hbExpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYpO1xuICAgICAgICAgICAgZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi5zZXQoLTMsIDIwLCAxMDApLm5vcm1hbGl6ZSgpO1xuICAgICAgICAgICAgc2NlbmUuYWRkKGRpcmVjdGlvbmFsTGlnaHQpO1xuXG5cbiAgICAgICAgICAgIHN0YXRzID0gbmV3IFN0YXRzKCk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29uZmlnV2lkZ2V0JykuYXBwZW5kQ2hpbGQoIHN0YXRzLmRvbSApO1xuXG4gICAgICAgICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSlcblxuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5wbGFuZSA9IG5ldyBUSFJFRS5QbGFuZSggbmV3IFRIUkVFLlZlY3RvcjMoIDAsIDAsIDAgKSwgMC4xICk7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LnBsYW5lLm5vcm1hbC54ID0gLTE7XG4gICAgICAgICAgICByZW5kZXJlci5jbGlwcGluZ1BsYW5lcyA9IHZtLmNvbnRyb2xzLmN1dHZpZXcucGxhbmVzO1xuXG5cblxuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXJNYXRlcmlhbCA9IG5ldyBUSFJFRS5NZXNoQmFzaWNNYXRlcmlhbCggeyB0cmFuc3BhcmVudDp0cnVlLCB3aXJlZnJhbWU6IHRydWUsIGNvbG9yOjB4ZmYwMDAwLCBvcGFjaXR5OjAgfSApO1xuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIgPSBuZXcgVEhSRUUuTWVzaChuZXcgVEhSRUUuUGxhbmVCdWZmZXJHZW9tZXRyeSggMywgMywgMiwgMiApLHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyTWF0ZXJpYWwpO1xuXG5cbiAgICAgICAgICAgIHZhciBjb250cm9sID0gbmV3IFRIUkVFLlRyYW5zZm9ybUNvbnRyb2xzKCBjYW1lcmEsIHJlbmRlcmVyLmRvbUVsZW1lbnQgKTtcbiAgICAgICAgICAgIGNvbnRyb2wuYWRkRXZlbnRMaXN0ZW5lciggJ2NoYW5nZScsIHJlbmRlciApO1xuICAgICAgICAgICAgY29udHJvbC5hdHRhY2goIHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyICk7XG5cbiAgICAgICAgICAgIHNjZW5lLmFkZCh2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlcik7XG4gICAgICAgICAgICAvLyBzY2VuZS5hZGQoIGNvbnRyb2wgKTtcblxuXG4gICAgICAgICAgICB2bS5jaGFuZ2VNb2RlKCdNQU5VQUwnKTtcbiAgICAgICAgICAgIHZtLmNoYW5nZVRvb2woJ01PVkUnKTtcbiAgICAgICAgICAgIHZtLmNoYW5nZUN1dFZpZXdBeGlzKCdYJylcbiAgICAgICAgICAgIGFwcGx5U2NvcGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgICAgICAgICB2bS5zZXJ2b0FuaW1JZCA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSggYW5pbWF0ZSApO1xuICAgICAgICAgICAgcmVuZGVyKCk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICAgICAgICBwcm9jZXNzRnJhbWUoKTtcbiAgICAgICAgICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NGcmFtZSgpIHtcbiAgICAgICAgICAgIGlmKHZtLmNvbnRyb2xzLm1vZGUgPT0gdm0ubW9kZXMuQVVUTyl7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZVZlY3RvcnMoY2FtZXJhLnBvc2l0aW9uLCB2bS5mcmFtZURhdGEuY2FtZXJhUG9zaXRpb24sIDAuMik7XG4gICAgICAgICAgICAgICAgY2FtZXJhLmxvb2tBdChnZW9NZXNoLnBvc2l0aW9uKTtcbiAgICAgICAgICAgIH1lbHNle1xuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzdGF0cy51cGRhdGUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBkaW1lbnNpb25zID0gWyd4JywneScsJ3onXTtcbiAgICAgICAgdmFyIGRpRGlmZiA9IDA7XG5cbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZVZlY3RvcnModjEsIHYyLCBtYXgpIHtcbiAgICAgICAgICAgIGlmKCF2MSB8fCAhdjIpIHJldHVybjtcbiAgICAgICAgICAgIGZvcih2YXIgYXhpcyBpbiBkaW1lbnNpb25zKXtcbiAgICAgICAgICAgICAgICBkaURpZmYgPSB2MVtkaW1lbnNpb25zW2F4aXNdXSAtIHYyW2RpbWVuc2lvbnNbYXhpc11dO1xuICAgICAgICAgICAgICAgIGlmKGRpRGlmZiA+IDApe1xuICAgICAgICAgICAgICAgICAgICB2MVtkaW1lbnNpb25zW2F4aXNdXSAtPSBNYXRoLm1pbihtYXgsIGRpRGlmZiAvIDEwKVxuICAgICAgICAgICAgICAgIH1lbHNlIGlmKGRpRGlmZiA8IDApe1xuICAgICAgICAgICAgICAgICAgICB2MVtkaW1lbnNpb25zW2F4aXNdXSArPSBNYXRoLm1pbihtYXgsIC0xICogZGlEaWZmIC8gMTApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cbiAgICAgICAgLypcbiAgICAgICAgKlxuICAgICAgICAqICBDb250cm9sbGVyIEZ1bmN0aW9uc1xuICAgICAgICAqXG4gICAgICAgICogKi9cblxuXG4gICAgICAgIHZtLmNoYW5nZU1vZGUgPSBmdW5jdGlvbiAobW9kZSkge1xuICAgICAgICAgICAgdm0uY29udHJvbHMubW9kZSA9IHZtLm1vZGVzW21vZGVdO1xuICAgICAgICAgICAgaWYodm0ubW9kZXNbbW9kZV0gPT0gdm0ubW9kZXNbJ0FVVE8nXSl7XG4gICAgICAgICAgICAgICAgZGlzYWJsZVRvb2woKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGVuYWJsZVRvb2woKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZtLmNoYW5nZVRvb2wgPSBmdW5jdGlvbiAodG9vbCkge1xuICAgICAgICAgICAgaWYodm0uY29udHJvbHMudG9vbC5lbmFibGVkKXtcbiAgICAgICAgICAgICAgICB2bS5jb250cm9scy50b29sLmN1cnJlbnQgPSB2bS50b29sc1t0b29sXTtcbiAgICAgICAgICAgICAgICBpZih2bS50b29sc1t0b29sXSA9PSB2bS50b29sc1snTU9WRSddKXtcbiAgICAgICAgICAgICAgICAgICAgY2FtZXJhQ29udHJvbHMuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGNhbWVyYUNvbnRyb2xzLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uY2hhbmdlQ3V0Vmlld0F4aXMgPSBmdW5jdGlvbiAoYXhpcykge1xuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5heGlzID0gYXhpcztcbiAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcucGxhbmUubm9ybWFsLnggPSAwO1xuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5wbGFuZS5ub3JtYWwueSA9IDA7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LnBsYW5lLm5vcm1hbC56ID0gMDtcbiAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcucGxhbmUuY29uc3RhbnQgPSAwLjA7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlci5yb3RhdGlvbi54ID0gMDtcbiAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyLnJvdGF0aW9uLnkgPSAwO1xuICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIucm90YXRpb24ueiA9IDA7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlci5wb3NpdGlvbi54ID0gLTAuMDI7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlci5wb3NpdGlvbi55ID0gLTAuMDI7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlci5wb3NpdGlvbi56ID0gLTAuMDI7XG5cbiAgICAgICAgICAgIGlmKHZtLmF4ZXNbYXhpc10gPT0gdm0uYXhlc1snWCddKXtcbiAgICAgICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LnBsYW5lLm5vcm1hbC54ID0gLTE7XG4gICAgICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIucm90YXRpb24ueSA9IE1hdGguUEkgLyAyO1xuICAgICAgICAgICAgfWVsc2UgaWYodm0uYXhlc1theGlzXSA9PSB2bS5heGVzWydZJ10pe1xuICAgICAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcucGxhbmUubm9ybWFsLnkgPSAtMTtcbiAgICAgICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlci5yb3RhdGlvbi54ID0gTWF0aC5QSSAvIDI7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LnBsYW5lLm5vcm1hbC56ID0gLTE7XG4gICAgICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIucm90YXRpb24ueiA9IE1hdGguUEkgLyAyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZtLnRvZ2dsZUN1dFZpZXcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZih2bS5jb250cm9scy5jdXR2aWV3LmVuYWJsZWQpe1xuICAgICAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGRpc2FibGVDdXRWaWV3KCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGVuYWJsZUN1dFZpZXcoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHZtLmNoYW5nZUN1dFZpZXdWYWwgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LnBsYW5lLmNvbnN0YW50ICs9IHZhbDtcbiAgICAgICAgICAgIGlmKHZtLmNvbnRyb2xzLmN1dHZpZXcuYXhpcyA9PSB2bS5heGVzWydYJ10pe1xuICAgICAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyLnBvc2l0aW9uLnggKz0gdmFsO1xuICAgICAgICAgICAgfWVsc2UgaWYodm0uY29udHJvbHMuY3V0dmlldy5heGlzID09IHZtLmF4ZXNbJ1gnXSl7XG4gICAgICAgICAgICAgICAgdm0uY29udHJvbHMuY3V0dmlldy5tYXJrZXIucG9zaXRpb24ueSArPSB2YWw7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlci5wb3NpdGlvbi56ICs9IHZhbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG5cblxuICAgICAgICBmdW5jdGlvbiBkaXNhYmxlVG9vbCgpIHtcbiAgICAgICAgICAgIHZtLmNoYW5nZVRvb2woJycpO1xuICAgICAgICAgICAgdm0uY29udHJvbHMudG9vbC5lbmFibGVkID0gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBlbmFibGVUb29sKCkge1xuICAgICAgICAgICAgdm0uY29udHJvbHMudG9vbC5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHZtLmNoYW5nZVRvb2woJ01PVkUnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGVuYWJsZUN1dFZpZXcoKSB7XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3LmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmVuZGVyZXIuY2xpcHBpbmdQbGFuZXMgPSBbdm0uY29udHJvbHMuY3V0dmlldy5wbGFuZV07XG4gICAgICAgICAgICB2bS5jb250cm9scy5jdXR2aWV3Lm1hcmtlck1hdGVyaWFsLm9wYWNpdHkgPSAxO1xuXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBkaXNhYmxlQ3V0VmlldygpIHtcbiAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgcmVuZGVyZXIuY2xpcHBpbmdQbGFuZXMgPSBbXTtcbiAgICAgICAgICAgIHZtLmNvbnRyb2xzLmN1dHZpZXcubWFya2VyTWF0ZXJpYWwub3BhY2l0eSA9IDA7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qXG4gICAgICAgICpcbiAgICAgICAgKiAgSW5pdCBGdW5jdGlvblxuICAgICAgICAqXG4gICAgICAgICogKi9cblxuICAgICAgICBmdW5jdGlvbiBpbml0QkNsaWNrKCkge1xuICAgICAgICAgICAgdm0uYmNsaWNrRWxzID0ge307XG4gICAgICAgICAgICB2bS5iY2xpY2tEb21FbHMgPSB2bS5ET00uZmluZCgnW2ItY2xpY2tdJyk7XG4gICAgICAgICAgICB2bS5iY2xpY2tEb21FbHMuZWFjaChmdW5jdGlvbiAoa2V5LCBlbCkge1xuICAgICAgICAgICAgICAgICQoZWwpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZhbCgkKGVsKS5hdHRyKCdiLWNsaWNrJykpO1xuICAgICAgICAgICAgICAgICAgICBhcHBseVNjb3BlKCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICB2YXIgdGVtcEFyck9iajtcbiAgICAgICAgdmFyIHRlbXBBcnI7XG5cbiAgICAgICAgZnVuY3Rpb24gYXBwbHlCQ2xhc3MoKSB7XG4gICAgICAgICAgICB2bS5iY2xpY2tFbHMgPSB7fTtcbiAgICAgICAgICAgIHZtLmJjbGlja0RvbUVscyA9IHZtLkRPTS5maW5kKCdbYi1jbGFzc10nKTtcbiAgICAgICAgICAgIHZtLmJjbGlja0RvbUVscy5lYWNoKGZ1bmN0aW9uIChrZXksIGVsKSB7XG4gICAgICAgICAgICAgICAgdGVtcEFyciA9ICQoZWwpLmF0dHIoJ2ItY2xhc3MnKS5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgIGZvcih2YXIgaWR4IGluIHRlbXBBcnIpe1xuICAgICAgICAgICAgICAgICAgICB0ZW1wQXJyT2JqID0gdGVtcEFycltpZHhdLnNwbGl0KCc6Jyk7XG4gICAgICAgICAgICAgICAgICAgIGlmKGV2YWwodGVtcEFyck9ialsxXSkpXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGVsKS5hZGRDbGFzcyh0ZW1wQXJyT2JqWzBdKVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgICAgICAkKGVsKS5yZW1vdmVDbGFzcyh0ZW1wQXJyT2JqWzBdKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBhcHBseVNjb3BlKCkge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYXBwbHlCQ2xhc3MoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdFNjb3BlKCkge1xuICAgICAgICAgICAgaW5pdEJDbGljaygpXG4gICAgICAgICAgICBhcHBseVNjb3BlKCk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGZ1bmN0aW9uIGluaXQodGFnKSB7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAqICAgQmFzaWMgU2V0dGluZ3NcbiAgICAgICAgICAgICogKi9cblxuICAgICAgICAgICAgdm0udGFnID0gdGFnLnRhZ19pZDtcbiAgICAgICAgICAgIHZtLndpZGdldERhdGEgPSBmbG93TWFuYWdlci5nZXREYXRhKHZtLnRhZyk7XG4gICAgICAgICAgICB2bS5ET00gPSB2bS53aWRnZXREYXRhLkRPTTtcbiAgICAgICAgICAgIGluaXRUaHJlZSgpO1xuICAgICAgICAgICAgaW5pdFNjb3BlKCk7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAqIEluaXRpYWwgU2V0dXBcbiAgICAgICAgICAgICogKi9cblxuICAgICAgICB9XG5cblxuICAgICAgICBmbG93TWFuYWdlci5pbml0V2lkZ2V0KHRhZywgZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgICAgaW5pdCh0YWcpXG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG52YXIgJDNkUGxheWVyID0ge1xuICAgIGNvbnRyb2xsZXI6ICQzZFBsYXllckNvbnRyb2xsZXIsXG4gICAgdmlldzonYXBwL3dpZGdldHMvY29tbW9uLzNkUGxheWVyLzNkLnBsYXllci5odG1sJyxcbiAgICBtZXRob2RzOltcbiAgICAgICAge2lkOjAsIG5hbWU6J3NldEZyYW1lJyxvdXRwdXQ6ZmFsc2UsIGlucHV0OnRydWUsIHBhcmFtcyA6IFsnZnJhbWUnXX0sXG4gICAgXSxcbiAgICBjb2xvcjonI2NjMjIyMicsXG4gICAgc2V0dGluZ3MgOiB7dmg6MjAsIHc6OX0sXG59XG5cblxuZXhwb3J0IHskM2RQbGF5ZXJ9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC93aWRnZXRzL2NvbW1vbi8zZFBsYXllci8zZC5wbGF5ZXIuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxudmFyIHRpbWVsaW5lQ29udHJvbGxlciA9IGZ1bmN0aW9uIHRpbWVsaW5lQ29udHJvbGxlcih0YWcpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgdGltZWxpbmVDb250cm9sbGVyKTtcblxuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgdm0uRlBTID0gMzA7XG5cbiAgICBmbG93TWFuYWdlci5pbml0V2lkZ2V0KHRhZywgZnVuY3Rpb24gKHRhZykge1xuICAgICAgICBpbml0KHRhZyk7XG4gICAgfSk7XG5cbiAgICB2bS5wcm9jZXNzSW5wdXQgPSBmdW5jdGlvbiAodGFnLCBkYXRhKSB7fTtcblxuICAgIC8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXG5cbiAgICBmdW5jdGlvbiBpbml0KHRhZykge1xuXG4gICAgICAgIHZtLnRhZyA9IHRhZy50YWdfaWQ7XG4gICAgICAgIHZtLndpZGdldERhdGEgPSBmbG93TWFuYWdlci5nZXREYXRhKHZtLnRhZyk7XG4gICAgICAgIHZtLkRPTSA9IHZtLndpZGdldERhdGEuRE9NO1xuICAgICAgICBpbml0QkNsaWNrKCk7XG5cbiAgICAgICAgdm0ucGxheWVyID0ge1xuICAgICAgICAgICAgcGxheWluZzogZmFsc2UsXG4gICAgICAgICAgICBjdXJyZW50SW5kZXg6IDBcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5wbGF5ZXIudG9nZ2xlUGxheSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGlmICh2bS5wbGF5ZXIucGxheWluZykge1xuICAgICAgICAgICAgICAgIHZtLnBsYXllci5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2ltIHBhdXNlZCcpO1xuICAgICAgICAgICAgICAgIHBhdXNlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbSBwbGF5aW5nJylcbiAgICAgICAgICAgICAgICB2bS5wbGF5ZXIucGxheWluZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgcGxheSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZtLnBsYXllci5kYXRhID0gZ2VuZXJhdGVUZW1wRGF0YSgpO1xuXG4gICAgICAgIHZhciBkM0RhdGEgPSB7XG4gICAgICAgICAgICBzdmc6ICcjdGltZWxpbmVTVkcnLFxuICAgICAgICAgICAgY29udGFpbmVyOiAnI3RpbWVsaW5lJyxcbiAgICAgICAgICAgIGRhdGE6IHZtLnBsYXllci5kYXRhXG4gICAgICAgIH07XG5cbiAgICAgICAgaW5pdEQzKGQzRGF0YSk7XG4gICAgfVxuXG4gICAgdmFyIGNhbWVyYVBvc2l0aW9uID0geyB4OiA0LCB5OiAtMSwgejogMyB9O1xuICAgIHZhciByYW5kQ291bnRlciA9IDA7XG4gICAgZnVuY3Rpb24gZ2VuZXJhdGVUZW1wRGF0YSgpIHtcbiAgICAgICAgdmFyIHRlbXBBcnJheSA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCAxMDAwOyBpZHgrKykge1xuICAgICAgICAgICAgcmFuZENvdW50ZXIrKztcbiAgICAgICAgICAgIGlmIChyYW5kQ291bnRlciA+PSA2MCkge1xuICAgICAgICAgICAgICAgIHJhbmRDb3VudGVyID0gMDtcbiAgICAgICAgICAgICAgICBjYW1lcmFQb3NpdGlvbiA9IGdldFJhbmRvbVZlY3RvcigtNSwgNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0ZW1wQXJyYXkucHVzaCh7IHg6IG1vbWVudCgpLnNlY29uZHMoaWR4KS51bml4KCkgKiAxMDAwLCB5OiBpZHgsIGNhbWVyYVBvc2l0aW9uOiBjYW1lcmFQb3NpdGlvbiB9KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGVtcEFycmF5O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGdldFJhbmRvbVZlY3RvcihtaW4sIG1heCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgeDogZ2V0UmFuZG9tQXhpcyhtaW4sIG1heCksXG4gICAgICAgICAgICB5OiBnZXRSYW5kb21BeGlzKG1pbiwgbWF4KSxcbiAgICAgICAgICAgIHo6IGdldFJhbmRvbUF4aXMobWluLCBtYXgpXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0UmFuZG9tQXhpcyhtaW4sIG1heCkge1xuICAgICAgICB2YXIgYXhpcyA9IG1pbiArIE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKTtcbiAgICAgICAgaWYgKGF4aXMgPiAwKSB7XG4gICAgICAgICAgICBheGlzID0gTWF0aC5tYXgoMSwgYXhpcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBheGlzID0gTWF0aC5taW4oLTEsIGF4aXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBheGlzO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXRCQ2xpY2soKSB7XG4gICAgICAgIHZtLmJjbGlja0VscyA9IHt9O1xuICAgICAgICB2bS5iY2xpY2tEb21FbHMgPSB2bS5ET00uZmluZCgnW2ItY2xpY2tdJyk7XG4gICAgICAgIHZtLmJjbGlja0RvbUVscy5lYWNoKGZ1bmN0aW9uIChrZXksIGVsKSB7XG4gICAgICAgICAgICAkKGVsKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgZXZhbCgndm0uJyArICQoZWwpLmF0dHIoJ2ItY2xpY2snKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gaW5pdEQzKGRhdGEpIHtcbiAgICAgICAgaWYgKCQoZGF0YS5jb250YWluZXIpICYmICQoZGF0YS5jb250YWluZXIpLmxlbmd0aCAmJiAkKGRhdGEuY29udGFpbmVyKS53aWR0aCgpID4gMzAwKSB7XG4gICAgICAgICAgICB2bS5kMyA9IG5ldyBEM1RpbWVsaW5lKGRhdGEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaW5pdEQzKGRhdGEpO1xuICAgICAgICAgICAgfSwgMjApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gRDNUaW1lbGluZShkYXRhKSB7XG5cbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLmNvbnRhaW5lciA9IGFuZ3VsYXIuZWxlbWVudChkYXRhLmNvbnRhaW5lcik7XG4gICAgICAgIHNlbGYud2lkdGggPSBzZWxmLmNvbnRhaW5lci53aWR0aCgpO1xuICAgICAgICBzZWxmLmhlaWdodCA9IHNlbGYuY29udGFpbmVyLmhlaWdodCgpO1xuICAgICAgICBzZWxmLnN2ZyA9IGRhdGEuc3ZnO1xuICAgICAgICBzZWxmLmRhdGEgPSBkYXRhLmRhdGE7XG5cbiAgICAgICAgc2VsZi52aXNQID0gZDMuc2VsZWN0KGRhdGEuc3ZnKS5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaW5ZTWluIG1lZXRcIikuYXR0cihcInZpZXdCb3hcIiwgXCIwIDAgXCIgKyBzZWxmLndpZHRoICsgXCIgXCIgKyBNYXRoLm1heCgwLCBzZWxmLmhlaWdodCkpLmNsYXNzZWQoXCJzdmctY29udGVudC1yZXNwb25zaXZlXCIsIHRydWUpLm9uKFwiY29udGV4dG1lbnVcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIGQzLmV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pLm9uKFwibW91c2Vtb3ZlXCIsIG1vdXNlSG92ZXJFdmVudCkub24oXCJtb3VzZWRvd25cIiwgbW91c2VEb3duRXZlbnQpLm9uKFwibW91c2V1cFwiLCBtb3VzZVVwRXZlbnQpO1xuXG4gICAgICAgIGdldEF4aXNTY2FsZSgpO1xuICAgICAgICBkcmF3KCk7XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhdygpIHtcbiAgICAgICAgICAgIGQzLnNlbGVjdEFsbChzZWxmLnN2ZyArIFwiID4gKlwiKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgc2VsZi5jbGlwUmVjdCA9IHNlbGYudmlzUC5hcHBlbmQoXCJjbGlwUGF0aFwiKSAvLyBkZWZpbmUgYSBjbGlwIHBhdGhcbiAgICAgICAgICAgIC5hdHRyKCd4JywgMCkuYXR0cigneScsIDApLmF0dHIoXCJpZFwiLCBcIm1haW4tY2xpcFwiKSAvLyBnaXZlIHRoZSBjbGlwUGF0aCBhbiBJRFxuICAgICAgICAgICAgLmFwcGVuZChcInJlY3RcIikuYXR0cihcIndpZHRoXCIsIHNlbGYud2lkdGgpLmF0dHIoXCJoZWlnaHRcIiwgc2VsZi5oZWlnaHQpO1xuXG4gICAgICAgICAgICBzZWxmLnZpcyA9IHNlbGYudmlzUC5hcHBlbmQoXCJzdmc6Z1wiKS5hdHRyKCdjbGFzcycsICd2aXNUcmFucycpLmF0dHIoJ3gnLCAwKS5hdHRyKCd5JywgMCkuYXR0cihcImNsaXAtcGF0aFwiLCBcInVybCgjbWFpbi1jbGlwKVwiKSAvLyBjbGlwIHRoZSByZWN0YW5nbGVcbiAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsMClcIik7XG5cbiAgICAgICAgICAgIHNlbGYubWFya2VyID0gc2VsZi52aXMuYXBwZW5kKCdnJykuYXR0cignY2xhc3MnLCAndGwtbWFya2VyJykuYXBwZW5kKCdyZWN0JykuYXR0cigneCcsIDApLmF0dHIoJ3knLCAwKS5hdHRyKCd3aWR0aCcsIDEpLmF0dHIoJ2hlaWdodCcsIHNlbGYuaGVpZ2h0KS5hdHRyKCdmaWxsJywgJyNmMDAnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldEF4aXNTY2FsZSgpIHtcbiAgICAgICAgICAgIHNlbGYuYXhpc1NjYWxlID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gc2VsZi5kYXRhKSB7XG4gICAgICAgICAgICAgICAgdmFyIGRhdGFJdGVtID0gc2VsZi5kYXRhW2lkeF07XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFJdGVtLnggPCBzZWxmLmF4aXNTY2FsZS54bCB8fCBzZWxmLmF4aXNTY2FsZS54bCA9PSBudWxsKSBzZWxmLmF4aXNTY2FsZS54bCA9IGRhdGFJdGVtLng7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGFJdGVtLnggPiBzZWxmLmF4aXNTY2FsZS54aCB8fCBzZWxmLmF4aXNTY2FsZS54aCA9PSBudWxsKSBzZWxmLmF4aXNTY2FsZS54aCA9IGRhdGFJdGVtLng7XG5cbiAgICAgICAgICAgICAgICBpZiAoZGF0YUl0ZW0ueSA8IHNlbGYuYXhpc1NjYWxlLnlsIHx8IHNlbGYuYXhpc1NjYWxlLnlsID09IG51bGwpIHNlbGYuYXhpc1NjYWxlLnlsID0gZGF0YUl0ZW0ueTtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YUl0ZW0ueSA+IHNlbGYuYXhpc1NjYWxlLnloIHx8IHNlbGYuYXhpc1NjYWxlLnloID09IG51bGwpIHNlbGYuYXhpc1NjYWxlLnloID0gZGF0YUl0ZW0ueTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi54U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFswLCBzZWxmLndpZHRoXSkuZG9tYWluKFtuZXcgRGF0ZShzZWxmLmF4aXNTY2FsZS54bCksIG5ldyBEYXRlKHNlbGYuYXhpc1NjYWxlLnhoKV0pO1xuICAgICAgICAgICAgc2VsZi55U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlKFtzZWxmLmhlaWdodCwgMF0pLmRvbWFpbihbc2VsZi5heGlzU2NhbGUueWwsIHNlbGYuYXhpc1NjYWxlLnloXSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBtb3VzZUhvdmVyRXZlbnQoKSB7XG4gICAgICAgICAgICBpZiAoc2VsZi5tb3VzZUNsaWNrZWQpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vdXNlWCA9IGQzLm1vdXNlKHRoaXMpWzBdO1xuICAgICAgICAgICAgICAgIHNlbGYubW91c2VZID0gZDMubW91c2UodGhpcylbMV07XG4gICAgICAgICAgICAgICAgc2VsZi5tYXJrZXJQb3NpdGlvbiA9IHBhcnNlSW50KHNlbGYueFNjYWxlLmludmVydChzZWxmLm1vdXNlWCkpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZU1hcmtlcigpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZU1hcmtlckluZGV4KHNlbGYubW91c2VYVmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIG1vdXNlRG93bkV2ZW50KCkge1xuICAgICAgICAgICAgc2VsZi5tb3VzZUNsaWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgc2VsZi5tb3VzZVggPSBkMy5tb3VzZSh0aGlzKVswXTtcbiAgICAgICAgICAgIHNlbGYubW91c2VZID0gZDMubW91c2UodGhpcylbMV07XG4gICAgICAgICAgICBzZWxmLm1vdXNlWFZhbCA9IHBhcnNlSW50KHNlbGYueFNjYWxlLmludmVydChzZWxmLm1vdXNlWCkpO1xuICAgICAgICAgICAgdXBkYXRlTWFya2VyKCk7XG4gICAgICAgICAgICB1cGRhdGVNYXJrZXJJbmRleChzZWxmLm1vdXNlWFZhbCk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gbW91c2VVcEV2ZW50KCkge1xuICAgICAgICAgICAgc2VsZi5tb3VzZUNsaWNrZWQgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNlbGYudXBkYXRlTWFya2VyID0gZnVuY3Rpb24gKGZyYW1lKSB7XG4gICAgICAgICAgICBzZWxmLm1vdXNlWCA9IHNlbGYueFNjYWxlKGZyYW1lLngpO1xuICAgICAgICAgICAgdXBkYXRlTWFya2VyKCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlTWFya2VyKCkge1xuICAgICAgICAgICAgc2VsZi5tYXJrZXIuYXR0cigndHJhbnNmb3JtJywgJ3RyYW5zbGF0ZSgnICsgc2VsZi5tb3VzZVggKyAnLDApJyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwbGF5KCkge1xuICAgICAgICB2bS5wbGF5ZXIuaW50ZXJ2YWwgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAodm0ucGxheWVyLmN1cnJlbnRJbmRleCArIDEgPj0gdm0ucGxheWVyLmRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh2bS5wbGF5ZXIuaW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgIHVwZGF0ZUZyYW1lKHZtLnBsYXllci5jdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgICAgIHZtLnBsYXllci5jdXJyZW50SW5kZXggPSAwO1xuICAgICAgICAgICAgICAgIHZtLnBsYXllci5wbGF5aW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZtLnBsYXllci5jdXJyZW50SW5kZXggPSBnZXRDdXJyZW50SW5kZXgoMSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlRnJhbWUodm0ucGxheWVyLmN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIDEwMDAgLyB2bS5GUFMpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHBhdXNlKCkge1xuICAgICAgICBjbGVhckludGVydmFsKHZtLnBsYXllci5pbnRlcnZhbCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZ2V0Q3VycmVudEluZGV4KG9mZnNldCkge1xuICAgICAgICBpZiAodm0ucGxheWVyLmN1cnJlbnRJbmRleCA9PSBudWxsKSB2bS5wbGF5ZXIuY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgaWYgKG9mZnNldCA9PSBudWxsKSBvZmZzZXQgPSAwO1xuICAgICAgICByZXR1cm4gdm0ucGxheWVyLmN1cnJlbnRJbmRleCArIG9mZnNldDtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBnZXRGcmFtZUluZGV4KHgsIGRpZmYsIGRhdGEpIHtcbiAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgICAgIHZhciBzdGFydGluZ0luZGV4ID0gMDtcbiAgICAgICAgdmFyIGVuZGluZ0luZGV4ID0gZGF0YS5sZW5ndGg7XG4gICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgdmFyIGVxO1xuICAgICAgICB2YXIgY291bnRlciA9IDA7XG4gICAgICAgIHdoaWxlICghZm91bmQpIHtcbiAgICAgICAgICAgIGluZGV4ID0gcGFyc2VJbnQoKGVuZGluZ0luZGV4IC0gc3RhcnRpbmdJbmRleCkgLyAyKSArIHN0YXJ0aW5nSW5kZXg7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGFydGluZ0luZGV4LGluZGV4LCBlbmRpbmdJbmRleClcbiAgICAgICAgICAgIGVxID0gZ2V0Um91bmQoeCwgZGF0YVtpbmRleF0ueCwgZGlmZik7XG4gICAgICAgICAgICBpZiAoZXEgPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vIGZvdW5kXG4gICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChlcSA9PSAtMSkge1xuICAgICAgICAgICAgICAgIC8vIGdyZWF0ZXIgdGhhblxuICAgICAgICAgICAgICAgIHN0YXJ0aW5nSW5kZXggKz0gaW5kZXggLSBzdGFydGluZ0luZGV4O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBsZXNzIHRoYW5cbiAgICAgICAgICAgICAgICBlbmRpbmdJbmRleCAtPSBpbmRleCAtIHN0YXJ0aW5nSW5kZXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc3RhcnRpbmdJbmRleCAtIGVuZGluZ0luZGV4IDw9IDEgJiYgZW5kaW5nSW5kZXggLSBzdGFydGluZ0luZGV4IDw9IDEpIHtcbiAgICAgICAgICAgICAgICBjb3VudGVyKys7XG4gICAgICAgICAgICAgICAgZGlmZiArPSBkaWZmO1xuICAgICAgICAgICAgICAgIGlmIChjb3VudGVyID4gMTApIHtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0Um91bmQoeDEsIHgyLCBkaWZmKSB7XG4gICAgICAgICAgICB2YXIgZGlmZjEgPSB4MSArIGRpZmYgLSB4MjtcbiAgICAgICAgICAgIC8vIHZhciBkaWZmMiA9IHgxIC0gZGlmZiAtIHgyO1xuICAgICAgICAgICAgaWYgKGRpZmYxIDwgMCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRpZmYxLCBkaWZmMiwgJysrJylcbiAgICAgICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGlmZjEgPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coZGlmZjEsIGRpZmYyLCAnLS0nKVxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHVwZGF0ZU1hcmtlckluZGV4KG1vdXNlWFZhbCkge1xuICAgICAgICB2bS5wbGF5ZXIuY3VycmVudEluZGV4ID0gZ2V0RnJhbWVJbmRleChtb3VzZVhWYWwsIDEwMDAsIHZtLnBsYXllci5kYXRhKTtcbiAgICAgICAgZnJhbWVVcGRhdGVkKCk7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gdXBkYXRlRnJhbWUoaW5kZXgpIHtcbiAgICAgICAgdXBkYXRlVGltZWxpbmUoaW5kZXgpO1xuICAgICAgICBmcmFtZVVwZGF0ZWQoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiB1cGRhdGVUaW1lbGluZShpbmRleCkge1xuICAgICAgICB2bS5kMy51cGRhdGVNYXJrZXIodm0ucGxheWVyLmRhdGFbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBmcmFtZVVwZGF0ZWQoKSB7XG4gICAgICAgIGZsb3dNYW5hZ2VyLnJ1bkZsb3codm0udGFnLCAncHVzaEZyYW1lJywgdm0ucGxheWVyLmRhdGFbdm0ucGxheWVyLmN1cnJlbnRJbmRleF0pO1xuICAgIH1cbn07XG5cbnZhciB0aW1lbGluZSA9IHtcbiAgICBjb250cm9sbGVyOiB0aW1lbGluZUNvbnRyb2xsZXIsXG4gICAgdmlldzogJ2FwcC93aWRnZXRzL2NvbW1vbi90aW1lbGluZS90aW1lbGluZS5odG1sJyxcbiAgICBtZXRob2RzOiBbeyBpZDogMCwgbmFtZTogJ3B1c2hGcmFtZScsIG91dHB1dDogdHJ1ZSwgaW5wdXQ6IGZhbHNlLCBwYXJhbXM6IFsnZnJhbWUnXSB9XSxcbiAgICBjb2xvcjogJyNjYzIyMjInLFxuICAgIHNldHRpbmdzOiB7IHZoOiA0LCB3OiAxOCB9XG59O1xuXG5leHBvcnRzLnRpbWVsaW5lID0gdGltZWxpbmU7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC93aWRnZXRzL2NvbW1vbi90aW1lbGluZS90aW1lbGluZS5qcyIsIlxuY2xhc3MgdGltZWxpbmVDb250cm9sbGVye1xuXG4gICAgY29uc3RydWN0b3IgKHRhZykge1xuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICB2bS5GUFMgPSAzMDtcblxuICAgICAgICBmbG93TWFuYWdlci5pbml0V2lkZ2V0KHRhZywgZnVuY3Rpb24gKHRhZykge1xuICAgICAgICAgICAgaW5pdCh0YWcpXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZtLnByb2Nlc3NJbnB1dCA9IGZ1bmN0aW9uICh0YWcsIGRhdGEpIHtcblxuICAgICAgICB9XG5cblxuICAgICAgICAvKi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xuXG4gICAgICAgIGZ1bmN0aW9uIGluaXQodGFnKSB7XG5cbiAgICAgICAgICAgIHZtLnRhZyA9IHRhZy50YWdfaWQ7XG4gICAgICAgICAgICB2bS53aWRnZXREYXRhID0gZmxvd01hbmFnZXIuZ2V0RGF0YSh2bS50YWcpO1xuICAgICAgICAgICAgdm0uRE9NID0gdm0ud2lkZ2V0RGF0YS5ET007XG4gICAgICAgICAgICBpbml0QkNsaWNrKCk7XG5cbiAgICAgICAgICAgIHZtLnBsYXllciA9IHtcbiAgICAgICAgICAgICAgICBwbGF5aW5nIDogZmFsc2UsXG4gICAgICAgICAgICAgICAgY3VycmVudEluZGV4IDogMFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdm0ucGxheWVyLnRvZ2dsZVBsYXkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYodm0ucGxheWVyLnBsYXlpbmcpe1xuICAgICAgICAgICAgICAgICAgICB2bS5wbGF5ZXIucGxheWluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnaW0gcGF1c2VkJyk7XG4gICAgICAgICAgICAgICAgICAgIHBhdXNlKCk7XG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKCdpbSBwbGF5aW5nJylcbiAgICAgICAgICAgICAgICAgICAgdm0ucGxheWVyLnBsYXlpbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBwbGF5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIHZtLnBsYXllci5kYXRhID0gZ2VuZXJhdGVUZW1wRGF0YSgpO1xuXG4gICAgICAgICAgICB2YXIgZDNEYXRhID0ge1xuICAgICAgICAgICAgICAgIHN2ZyA6ICcjdGltZWxpbmVTVkcnLFxuICAgICAgICAgICAgICAgIGNvbnRhaW5lciA6ICcjdGltZWxpbmUnLFxuICAgICAgICAgICAgICAgIGRhdGEgOiB2bS5wbGF5ZXIuZGF0YSxcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5pdEQzKGQzRGF0YSk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2FtZXJhUG9zaXRpb24gPSB7eDo0LCB5Oi0xLCB6OjN9O1xuICAgICAgICB2YXIgcmFuZENvdW50ZXIgPSAwO1xuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVRlbXBEYXRhKCkge1xuICAgICAgICAgICAgdmFyIHRlbXBBcnJheSA9IFtdO1xuICAgICAgICAgICAgZm9yKHZhciBpZHggPTA7IGlkeCA8IDEwMDA7IGlkeCsrKXtcbiAgICAgICAgICAgICAgICByYW5kQ291bnRlcisrO1xuICAgICAgICAgICAgICAgIGlmKHJhbmRDb3VudGVyID49IDYwKXtcbiAgICAgICAgICAgICAgICAgICAgcmFuZENvdW50ZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICBjYW1lcmFQb3NpdGlvbiA9IGdldFJhbmRvbVZlY3RvcigtNSwgNSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRlbXBBcnJheS5wdXNoKHt4IDogbW9tZW50KCkuc2Vjb25kcyhpZHgpLnVuaXgoKSAqIDEwMDAsIHkgOiBpZHgsIGNhbWVyYVBvc2l0aW9uIDogY2FtZXJhUG9zaXRpb259KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRlbXBBcnJheTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFJhbmRvbVZlY3RvcihtaW4sIG1heCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB4IDogZ2V0UmFuZG9tQXhpcyhtaW4sIG1heCksXG4gICAgICAgICAgICAgICAgeSA6IGdldFJhbmRvbUF4aXMobWluLCBtYXgpLFxuICAgICAgICAgICAgICAgIHogOiBnZXRSYW5kb21BeGlzKG1pbiwgbWF4KSxcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldFJhbmRvbUF4aXMobWluLCBtYXgpIHtcbiAgICAgICAgICAgIHZhciBheGlzID0gIG1pbiArICggTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pICk7XG4gICAgICAgICAgICBpZihheGlzID4gMCl7XG4gICAgICAgICAgICAgICAgYXhpcyA9IE1hdGgubWF4KDEsIGF4aXMpXG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBheGlzID0gTWF0aC5taW4oLTEsIGF4aXMpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXhpcztcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdEJDbGljaygpIHtcbiAgICAgICAgICAgIHZtLmJjbGlja0VscyA9IHt9O1xuICAgICAgICAgICAgdm0uYmNsaWNrRG9tRWxzID0gdm0uRE9NLmZpbmQoJ1tiLWNsaWNrXScpO1xuICAgICAgICAgICAgdm0uYmNsaWNrRG9tRWxzLmVhY2goZnVuY3Rpb24gKGtleSwgZWwpIHtcbiAgICAgICAgICAgICAgJChlbCkuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgZXZhbCgndm0uJyskKGVsKS5hdHRyKCdiLWNsaWNrJykpO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdEQzKGRhdGEpIHtcbiAgICAgICAgICAgIGlmKCQoZGF0YS5jb250YWluZXIpICYmICQoZGF0YS5jb250YWluZXIpLmxlbmd0aCAmJiAkKGRhdGEuY29udGFpbmVyKS53aWR0aCgpID4gMzAwKXtcbiAgICAgICAgICAgICAgICB2bS5kMyA9IG5ldyBEM1RpbWVsaW5lKGRhdGEpO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGluaXREMyhkYXRhKTtcbiAgICAgICAgICAgICAgICB9LDIwKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cblxuICAgICAgICBmdW5jdGlvbiBEM1RpbWVsaW5lKGRhdGEpIHtcblxuICAgICAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICAgICAgICAgIHNlbGYuY29udGFpbmVyID0gYW5ndWxhci5lbGVtZW50KGRhdGEuY29udGFpbmVyKTtcbiAgICAgICAgICAgICAgICBzZWxmLndpZHRoID0gc2VsZi5jb250YWluZXIud2lkdGgoKTtcbiAgICAgICAgICAgICAgICBzZWxmLmhlaWdodCA9IHNlbGYuY29udGFpbmVyLmhlaWdodCgpO1xuICAgICAgICAgICAgICAgIHNlbGYuc3ZnID0gZGF0YS5zdmc7XG4gICAgICAgICAgICAgICAgc2VsZi5kYXRhID0gZGF0YS5kYXRhO1xuXG4gICAgICAgICAgICBzZWxmLnZpc1AgPSBkMy5zZWxlY3QoZGF0YS5zdmcpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidmlld0JveFwiLCBcIjAgMCBcIiArIHNlbGYud2lkdGggKyBcIiBcIiArIChNYXRoLm1heCgwLCBzZWxmLmhlaWdodCkpKVxuICAgICAgICAgICAgICAgIC5jbGFzc2VkKFwic3ZnLWNvbnRlbnQtcmVzcG9uc2l2ZVwiLCB0cnVlKVxuICAgICAgICAgICAgICAgIC5vbihcImNvbnRleHRtZW51XCIsIGZ1bmN0aW9uKGQpIHsgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTsgfSlcbiAgICAgICAgICAgICAgICAub24oXCJtb3VzZW1vdmVcIiwgbW91c2VIb3ZlckV2ZW50KVxuICAgICAgICAgICAgICAgIC5vbihcIm1vdXNlZG93blwiLCBtb3VzZURvd25FdmVudClcbiAgICAgICAgICAgICAgICAub24oXCJtb3VzZXVwXCIsIG1vdXNlVXBFdmVudClcblxuICAgICAgICAgICAgZ2V0QXhpc1NjYWxlKCk7XG4gICAgICAgICAgICBkcmF3KCk7XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGRyYXcoKSB7XG4gICAgICAgICAgICAgICAgZDMuc2VsZWN0QWxsKHNlbGYuc3ZnK1wiID4gKlwiKS5yZW1vdmUoKTtcblxuICAgICAgICAgICAgICAgIHNlbGYuY2xpcFJlY3QgPSBzZWxmLnZpc1AuYXBwZW5kKFwiY2xpcFBhdGhcIikgICAgLy8gZGVmaW5lIGEgY2xpcCBwYXRoXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKCd4JywwKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneScsMClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcIm1haW4tY2xpcFwiKSAvLyBnaXZlIHRoZSBjbGlwUGF0aCBhbiBJRFxuICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsICBzZWxmLndpZHRoKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBzZWxmLmhlaWdodClcblxuICAgICAgICAgICAgICAgIHNlbGYudmlzID0gc2VsZi52aXNQXG4gICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJzdmc6Z1wiKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAndmlzVHJhbnMnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cigneCcsMClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3knLDApXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xpcC1wYXRoXCIsIFwidXJsKCNtYWluLWNsaXApXCIpIC8vIGNsaXAgdGhlIHJlY3RhbmdsZVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLDApXCIpO1xuXG4gICAgICAgICAgICAgICAgc2VsZi5tYXJrZXIgPSBzZWxmLnZpcy5hcHBlbmQoJ2cnKVxuICAgICAgICAgICAgICAgICAgICAuYXR0cignY2xhc3MnLCAndGwtbWFya2VyJylcbiAgICAgICAgICAgICAgICAgICAgLmFwcGVuZCgncmVjdCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cigneCcsMClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKCd5JywwKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ3dpZHRoJywxKVxuICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoJ2hlaWdodCcsc2VsZi5oZWlnaHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAuYXR0cignZmlsbCcsJyNmMDAnKVxuXG5cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBmdW5jdGlvbiBnZXRBeGlzU2NhbGUoKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5heGlzU2NhbGUgPSB7fTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gc2VsZi5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBkYXRhSXRlbSA9IHNlbGYuZGF0YVtpZHhdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YUl0ZW0ueCA8IHNlbGYuYXhpc1NjYWxlLnhsIHx8IHNlbGYuYXhpc1NjYWxlLnhsID09IG51bGwpIHNlbGYuYXhpc1NjYWxlLnhsID0gZGF0YUl0ZW0ueDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFJdGVtLnggPiBzZWxmLmF4aXNTY2FsZS54aCB8fCBzZWxmLmF4aXNTY2FsZS54aCA9PSBudWxsKSBzZWxmLmF4aXNTY2FsZS54aCA9IGRhdGFJdGVtLng7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGRhdGFJdGVtLnkgPCBzZWxmLmF4aXNTY2FsZS55bCB8fCBzZWxmLmF4aXNTY2FsZS55bCA9PSBudWxsKSBzZWxmLmF4aXNTY2FsZS55bCA9IGRhdGFJdGVtLnk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhSXRlbS55ID4gc2VsZi5heGlzU2NhbGUueWggfHwgc2VsZi5heGlzU2NhbGUueWggPT0gbnVsbCkgc2VsZi5heGlzU2NhbGUueWggPSBkYXRhSXRlbS55O1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHNlbGYueFNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZShbMCwgc2VsZi53aWR0aF0pLmRvbWFpbihbbmV3IERhdGUoc2VsZi5heGlzU2NhbGUueGwpLCBuZXcgRGF0ZShzZWxmLmF4aXNTY2FsZS54aCldKTtcbiAgICAgICAgICAgICAgICBzZWxmLnlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2UoW3NlbGYuaGVpZ2h0LCAwXSkuZG9tYWluKFtzZWxmLmF4aXNTY2FsZS55bCwgc2VsZi5heGlzU2NhbGUueWhdKTtcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICBmdW5jdGlvbiBtb3VzZUhvdmVyRXZlbnQoKSB7XG4gICAgICAgICAgICAgICAgaWYoc2VsZi5tb3VzZUNsaWNrZWQpe1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm1vdXNlWCA9IGQzLm1vdXNlKHRoaXMpWzBdO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm1vdXNlWSA9IGQzLm1vdXNlKHRoaXMpWzFdO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm1hcmtlclBvc2l0aW9uID0gcGFyc2VJbnQoc2VsZi54U2NhbGUuaW52ZXJ0KHNlbGYubW91c2VYKSk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZU1hcmtlcigpO1xuICAgICAgICAgICAgICAgICAgICB1cGRhdGVNYXJrZXJJbmRleChzZWxmLm1vdXNlWFZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBmdW5jdGlvbiBtb3VzZURvd25FdmVudCgpIHtcbiAgICAgICAgICAgICAgICBzZWxmLm1vdXNlQ2xpY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgc2VsZi5tb3VzZVggPSBkMy5tb3VzZSh0aGlzKVswXTtcbiAgICAgICAgICAgICAgICBzZWxmLm1vdXNlWSA9IGQzLm1vdXNlKHRoaXMpWzFdO1xuICAgICAgICAgICAgICAgIHNlbGYubW91c2VYVmFsID0gcGFyc2VJbnQoc2VsZi54U2NhbGUuaW52ZXJ0KHNlbGYubW91c2VYKSk7XG4gICAgICAgICAgICAgICAgdXBkYXRlTWFya2VyKCk7XG4gICAgICAgICAgICAgICAgdXBkYXRlTWFya2VySW5kZXgoc2VsZi5tb3VzZVhWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZnVuY3Rpb24gbW91c2VVcEV2ZW50KCkge1xuICAgICAgICAgICAgICAgIHNlbGYubW91c2VDbGlja2VkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNlbGYudXBkYXRlTWFya2VyID0gZnVuY3Rpb24gKGZyYW1lKSB7XG4gICAgICAgICAgICAgICAgc2VsZi5tb3VzZVggPSBzZWxmLnhTY2FsZShmcmFtZS54KTtcbiAgICAgICAgICAgICAgICB1cGRhdGVNYXJrZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlTWFya2VyKCkge1xuICAgICAgICAgICAgICAgIHNlbGYubWFya2VyLmF0dHIoJ3RyYW5zZm9ybScsJ3RyYW5zbGF0ZSgnK3NlbGYubW91c2VYKycsMCknKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcGxheSgpIHtcbiAgICAgICAgICAgIHZtLnBsYXllci5pbnRlcnZhbCA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZih2bS5wbGF5ZXIuY3VycmVudEluZGV4ICsgMSA+PSB2bS5wbGF5ZXIuZGF0YS5sZW5ndGgpe1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHZtLnBsYXllci5pbnRlcnZhbCk7XG4gICAgICAgICAgICAgICAgICAgIHVwZGF0ZUZyYW1lKHZtLnBsYXllci5jdXJyZW50SW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICB2bS5wbGF5ZXIuY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdm0ucGxheWVyLnBsYXlpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgdm0ucGxheWVyLmN1cnJlbnRJbmRleCA9IGdldEN1cnJlbnRJbmRleCgxKTtcbiAgICAgICAgICAgICAgICAgICAgdXBkYXRlRnJhbWUodm0ucGxheWVyLmN1cnJlbnRJbmRleCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwMCAvIHZtLkZQUyk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwYXVzZSgpIHtcbiAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodm0ucGxheWVyLmludGVydmFsKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldEN1cnJlbnRJbmRleChvZmZzZXQpIHtcbiAgICAgICAgICAgIGlmKHZtLnBsYXllci5jdXJyZW50SW5kZXggPT0gbnVsbClcbiAgICAgICAgICAgICAgICB2bS5wbGF5ZXIuY3VycmVudEluZGV4ID0gMDtcbiAgICAgICAgICAgIGlmKG9mZnNldCA9PSBudWxsKVxuICAgICAgICAgICAgICAgIG9mZnNldCA9IDA7XG4gICAgICAgICAgICByZXR1cm4gdm0ucGxheWVyLmN1cnJlbnRJbmRleCArIG9mZnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdldEZyYW1lSW5kZXgoeCwgZGlmZiwgZGF0YSkge1xuICAgICAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICB2YXIgc3RhcnRpbmdJbmRleCA9IDA7XG4gICAgICAgICAgICB2YXIgZW5kaW5nSW5kZXggPSBkYXRhLmxlbmd0aDtcbiAgICAgICAgICAgIHZhciBpbmRleDtcbiAgICAgICAgICAgIHZhciBlcTtcbiAgICAgICAgICAgIHZhciBjb3VudGVyID0gMDtcbiAgICAgICAgICAgIHdoaWxlKCFmb3VuZCl7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBwYXJzZUludCgoZW5kaW5nSW5kZXggLSBzdGFydGluZ0luZGV4KSAvIDIpICsgc3RhcnRpbmdJbmRleDtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzdGFydGluZ0luZGV4LGluZGV4LCBlbmRpbmdJbmRleClcbiAgICAgICAgICAgICAgICBlcSA9IGdldFJvdW5kKHgsIGRhdGFbaW5kZXhdLngsIGRpZmYpO1xuICAgICAgICAgICAgICAgIGlmKGVxID09IDApeyAvLyBmb3VuZFxuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoZXEgPT0gLTEpeyAvLyBncmVhdGVyIHRoYW5cbiAgICAgICAgICAgICAgICAgICAgc3RhcnRpbmdJbmRleCArPSAoaW5kZXggLSBzdGFydGluZ0luZGV4KTtcbiAgICAgICAgICAgICAgICB9ZWxzZXsgLy8gbGVzcyB0aGFuXG4gICAgICAgICAgICAgICAgICAgIGVuZGluZ0luZGV4IC09IChpbmRleCAtIHN0YXJ0aW5nSW5kZXgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZihzdGFydGluZ0luZGV4IC0gZW5kaW5nSW5kZXggPD0gMSAmJiBlbmRpbmdJbmRleCAtIHN0YXJ0aW5nSW5kZXggPD0gMSl7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50ZXIrKztcbiAgICAgICAgICAgICAgICAgICAgZGlmZiArPSBkaWZmO1xuICAgICAgICAgICAgICAgICAgICBpZihjb3VudGVyID4gMTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIGdldFJvdW5kKHgxLCB4MiwgZGlmZikge1xuICAgICAgICAgICAgICAgIHZhciBkaWZmMSA9IHgxICsgZGlmZiAtIHgyO1xuICAgICAgICAgICAgICAgIC8vIHZhciBkaWZmMiA9IHgxIC0gZGlmZiAtIHgyO1xuICAgICAgICAgICAgICAgIGlmKGRpZmYxICA8IDApe1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkaWZmMSwgZGlmZjIsICcrKycpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICAgICAgfWVsc2UgaWYoIGRpZmYxICA+IDApe1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhkaWZmMSwgZGlmZjIsICctLScpXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaW5kZXgtLTtcbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZU1hcmtlckluZGV4KG1vdXNlWFZhbCkge1xuICAgICAgICAgICAgdm0ucGxheWVyLmN1cnJlbnRJbmRleCA9IGdldEZyYW1lSW5kZXgobW91c2VYVmFsLCAxMDAwLCB2bS5wbGF5ZXIuZGF0YSk7XG4gICAgICAgICAgICBmcmFtZVVwZGF0ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZUZyYW1lKGluZGV4KSB7XG4gICAgICAgICAgICB1cGRhdGVUaW1lbGluZShpbmRleCk7XG4gICAgICAgICAgICBmcmFtZVVwZGF0ZWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHVwZGF0ZVRpbWVsaW5lKGluZGV4KSB7XG4gICAgICAgICAgICB2bS5kMy51cGRhdGVNYXJrZXIodm0ucGxheWVyLmRhdGFbaW5kZXhdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGZyYW1lVXBkYXRlZCgpIHtcbiAgICAgICAgICAgIGZsb3dNYW5hZ2VyLnJ1bkZsb3codm0udGFnLCAncHVzaEZyYW1lJywgdm0ucGxheWVyLmRhdGFbdm0ucGxheWVyLmN1cnJlbnRJbmRleF0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5cbnZhciB0aW1lbGluZSA9IHtcbiAgICBjb250cm9sbGVyOiB0aW1lbGluZUNvbnRyb2xsZXIsXG4gICAgdmlldzonYXBwL3dpZGdldHMvY29tbW9uL3RpbWVsaW5lL3RpbWVsaW5lLmh0bWwnLFxuICAgIG1ldGhvZHM6W1xuICAgICAgICB7aWQ6MCwgbmFtZToncHVzaEZyYW1lJywgb3V0cHV0OnRydWUsIGlucHV0OmZhbHNlLCBwYXJhbXMgOiBbJ2ZyYW1lJ119LFxuICAgIF0sXG4gICAgY29sb3I6JyNjYzIyMjInLFxuICAgIHNldHRpbmdzIDoge3ZoOjQsIHc6MTh9LFxufVxuXG5cbmV4cG9ydCB7dGltZWxpbmV9O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC93aWRnZXRzL2NvbW1vbi90aW1lbGluZS90aW1lbGluZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG52YXIgY29uZmlnV2lkZ2V0Q29udHJvbGxlciA9IGZ1bmN0aW9uIGNvbmZpZ1dpZGdldENvbnRyb2xsZXIodGFnKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIGNvbmZpZ1dpZGdldENvbnRyb2xsZXIpO1xuXG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIHZtLnByb2Nlc3NJbnB1dCA9IGZ1bmN0aW9uICh0YWcsIGRhdGEpIHt9O1xuXG4gICAgZnVuY3Rpb24gaW5pdCh0YWcpIHtcbiAgICAgICAgdm0udGFnID0gdGFnLnRhZ19pZDtcbiAgICB9XG5cbiAgICBmbG93TWFuYWdlci5pbml0V2lkZ2V0KHRhZywgZnVuY3Rpb24gKHRhZykge1xuICAgICAgICBpbml0KHRhZyk7XG4gICAgfSk7XG59O1xuXG52YXIgY29uZmlnV2lkZ2V0ID0ge1xuICAgIGNvbnRyb2xsZXI6IGNvbmZpZ1dpZGdldENvbnRyb2xsZXIsXG4gICAgdmlldzogJ2FwcC93aWRnZXRzL2NvbW1vbi9jb25maWdXaWRnZXQvY29uZmlnLndpZGdldC5odG1sJyxcbiAgICBtZXRob2RzOiBbXG4gICAgICAgIC8vIHtpZDowLCBuYW1lOidzZXREYXRhJyxvdXRwdXQ6dHJ1ZSwgaW5wdXQ6dHJ1ZSwgcGFyYW1zIDogWydhc3NldCddfSxcbiAgICBdLFxuICAgIGNvbG9yOiAnI2NjMjIyMicsXG4gICAgc2V0dGluZ3M6IHsgdmg6IDI0LCB3OiA2IH1cbn07XG5cbmV4cG9ydHMuY29uZmlnV2lkZ2V0ID0gY29uZmlnV2lkZ2V0O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvd2lkZ2V0cy9jb21tb24vY29uZmlnV2lkZ2V0L2NvbmZpZy53aWRnZXQuanMiLCJcbmNsYXNzIGNvbmZpZ1dpZGdldENvbnRyb2xsZXJ7XG5cbiAgICBjb25zdHJ1Y3RvciAodGFnKSB7XG4gICAgICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAgICAgdm0ucHJvY2Vzc0lucHV0ID0gZnVuY3Rpb24gKHRhZywgZGF0YSkge1xuXG4gICAgICAgIH1cblxuXG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdCh0YWcpIHtcbiAgICAgICAgICAgIHZtLnRhZyA9IHRhZy50YWdfaWQ7XG4gICAgICAgIH1cblxuXG4gICAgICAgIGZsb3dNYW5hZ2VyLmluaXRXaWRnZXQodGFnLCBmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgICAgICBpbml0KHRhZylcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cbnZhciBjb25maWdXaWRnZXQgPSB7XG4gICAgY29udHJvbGxlcjogY29uZmlnV2lkZ2V0Q29udHJvbGxlcixcbiAgICB2aWV3OidhcHAvd2lkZ2V0cy9jb21tb24vY29uZmlnV2lkZ2V0L2NvbmZpZy53aWRnZXQuaHRtbCcsXG4gICAgbWV0aG9kczpbXG4gICAgICAgIC8vIHtpZDowLCBuYW1lOidzZXREYXRhJyxvdXRwdXQ6dHJ1ZSwgaW5wdXQ6dHJ1ZSwgcGFyYW1zIDogWydhc3NldCddfSxcbiAgICBdLFxuICAgIGNvbG9yOicjY2MyMjIyJyxcbiAgICBzZXR0aW5ncyA6IHt2aDoyNCwgdzo2fSxcbn1cblxuXG5leHBvcnQge2NvbmZpZ1dpZGdldH07XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3dpZGdldHMvY29tbW9uL2NvbmZpZ1dpZGdldC9jb25maWcud2lkZ2V0LmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbnZhciB3aWRnZXRDb25uZWN0b3JDb250cm9sbGVyID0gZnVuY3Rpb24gd2lkZ2V0Q29ubmVjdG9yQ29udHJvbGxlcih0YWcpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgd2lkZ2V0Q29ubmVjdG9yQ29udHJvbGxlcik7XG5cbiAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgdm0uc3RhdGVzID0gW107XG4gICAgdm0uc3RhdGVJZCA9IC0xO1xuXG4gICAgZmxvd01hbmFnZXIuaW5pdFdpZGdldCh0YWcsIGZ1bmN0aW9uICh0YWcpIHtcbiAgICAgICAgaW5pdCh0YWcpO1xuICAgIH0pO1xuXG4gICAgdm0ucHJvY2Vzc0lucHV0ID0gZnVuY3Rpb24gKHRhZywgZGF0YSkge1xuICAgICAgICBpZiAodGFnID09ICdzZXREYXRhJykge1xuXG4gICAgICAgICAgICB2bS5wdXNoU3RhdGUoZGF0YSk7XG4gICAgICAgICAgICBmbG93TWFuYWdlci5ydW5GbG93KHZtLnRhZywgJ3NldERhdGEnLCBwcm9jZXNzRGF0YShkYXRhKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09ICduYXZpZ2F0ZUJhY2snKSB7XG5cbiAgICAgICAgICAgIHZhciB0b1N0YXRlID0gdm0uZ2V0U3RhdGUoLTEpO1xuICAgICAgICAgICAgaWYgKHRvU3RhdGUgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGZsb3dNYW5hZ2VyLnJ1bkZsb3codm0udGFnLCAnc2V0RGF0YScsIHByb2Nlc3NEYXRhKHRvU3RhdGUpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmICh0YWcgPT0gJ25hdmlnYXRlRm9yd2FyZCcpIHtcblxuICAgICAgICAgICAgdmFyIHRvU3RhdGUgPSB2bS5nZXRTdGF0ZSgxKTtcbiAgICAgICAgICAgIGlmICh0b1N0YXRlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBmbG93TWFuYWdlci5ydW5GbG93KHZtLnRhZywgJ3NldERhdGEnLCBwcm9jZXNzRGF0YSh0b1N0YXRlKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09ICdzZXRTdGF0ZScpIHtcblxuICAgICAgICAgICAgdm0ucHVzaFN0YXRlKGRhdGEpO1xuICAgICAgICAgICAgZmxvd01hbmFnZXIucnVuRmxvdyh2bS50YWcsICdwdXNoU3RhdGUnLCBwcm9jZXNzRGF0YShkYXRhKSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGFnID09ICd1cGRhdGVTdGF0ZScpIHtcblxuICAgICAgICAgICAgdm0udXBkYXRlU3RhdGUoZGF0YSk7XG4gICAgICAgICAgICBmbG93TWFuYWdlci5ydW5GbG93KHZtLnRhZywgJ3B1c2hTdGF0ZScsIHByb2Nlc3NEYXRhKGRhdGEpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICBmdW5jdGlvbiBwcm9jZXNzRGF0YShkYXRhKSB7XG4gICAgICAgIGlmICghZGF0YS5uYXZpZ2F0aW9uKSBkYXRhLm5hdmlnYXRpb24gPSB7fTtcblxuICAgICAgICBkYXRhLm5hdmlnYXRpb24uaXNCYWNrd2FyZCA9IGZhbHNlO1xuICAgICAgICBkYXRhLm5hdmlnYXRpb24uaXNGb3J3YXJkID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHZtLnN0YXRlSWQgPCB2bS5zdGF0ZXMubGVuZ3RoIC0gMSkgZGF0YS5uYXZpZ2F0aW9uLmlzRm9yd2FyZCA9IHRydWU7XG4gICAgICAgIGlmICh2bS5zdGF0ZUlkID4gMCkgZGF0YS5uYXZpZ2F0aW9uLmlzQmFja3dhcmQgPSB0cnVlO1xuXG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGluaXQodGFnKSB7XG4gICAgICAgIHZtLnRhZyA9IHRhZy50YWdfaWQ7XG4gICAgfVxuXG4gICAgdm0udXBkYXRlU3RhdGUgPSBmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdm0uc3RhdGVzW3ZtLnN0YXRlSWRdID0gc3RhdGU7XG4gICAgfTtcblxuICAgIHZtLnB1c2hTdGF0ZSA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuXG4gICAgICAgIHZhciB0ZW1wU3RhdGUgPSB2bS5zdGF0ZXNbdm0uc3RhdGVJZF07XG4gICAgICAgIGlmICh0ZW1wU3RhdGUpIHtcbiAgICAgICAgICAgIGlmICh0ZW1wU3RhdGUuZmV0Y2gpIGRlbGV0ZSB0ZW1wU3RhdGUuZmV0Y2g7XG4gICAgICAgICAgICBpZiAoIXN0YXRlLmdyb3VwICYmIHRlbXBTdGF0ZS5ncm91cCkgc3RhdGUuZ3JvdXAgPSB0ZW1wU3RhdGUuZ3JvdXA7XG4gICAgICAgICAgICBpZiAoIXN0YXRlLnRhYiAmJiB0ZW1wU3RhdGUudGFiKSBzdGF0ZS50YWIgPSB0ZW1wU3RhdGUudGFiO1xuICAgICAgICAgICAgLy8gaWYoIXN0YXRlLml0ZW0gJiYgdGVtcFN0YXRlLml0ZW0pIHN0YXRlLml0ZW0gPSB0ZW1wU3RhdGUuaXRlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZtLnN0YXRlSWQrKztcbiAgICAgICAgdm0uc3RhdGVzLnNwbGljZSh2bS5zdGF0ZUlkKTtcbiAgICAgICAgdm0uc3RhdGVzLnB1c2goc3RhdGUpO1xuICAgIH07XG5cbiAgICB2bS5nZXRTdGF0ZSA9IGZ1bmN0aW9uIChkaWZmKSB7XG4gICAgICAgIHZhciB0ZW1waW5kZXggPSB2bS5zdGF0ZUlkICsgZGlmZjtcbiAgICAgICAgaWYgKHRlbXBpbmRleCA+PSAwICYmIHRlbXBpbmRleCA8IHZtLnN0YXRlcy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHZtLnN0YXRlSWQgPSB0ZW1waW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gdm0uc3RhdGVzW3ZtLnN0YXRlSWRdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxudmFyIHdpZGdldENvbm5lY3RvciA9IHtcbiAgICBjb250cm9sbGVyOiB3aWRnZXRDb25uZWN0b3JDb250cm9sbGVyLFxuICAgIG1ldGhvZHM6IFt7IGlkOiAwLCBuYW1lOiAnc2V0RGF0YScsIG91dHB1dDogdHJ1ZSwgaW5wdXQ6IHRydWUsIHBhcmFtczogWydhc3NldCddIH0sIHsgaWQ6IDEsIG5hbWU6ICdzZXRTdGF0ZScsIG91dHB1dDogdHJ1ZSwgaW5wdXQ6IHRydWUsIHBhcmFtczogWydhc3NldCddIH0sIHsgaWQ6IDIsIG5hbWU6ICd1cGRhdGVTdGF0ZScsIG91dHB1dDogdHJ1ZSwgaW5wdXQ6IHRydWUsIHBhcmFtczogWydhc3NldCddIH0sIHsgaWQ6IDMsIG5hbWU6ICduYXZpZ2F0ZUJhY2snLCBvdXRwdXQ6IHRydWUsIGlucHV0OiB0cnVlLCBwYXJhbXM6IFsnYXNzZXQnXSB9LCB7IGlkOiA0LCBuYW1lOiAnbmF2aWdhdGVGb3J3YXJkJywgb3V0cHV0OiB0cnVlLCBpbnB1dDogdHJ1ZSwgcGFyYW1zOiBbJ2Fzc2V0J10gfSwgeyBpZDogNSwgbmFtZTogJ3B1c2hTdGF0ZScsIG91dHB1dDogdHJ1ZSwgcGFyYW1zOiBbJ2Fzc2V0J10gfV0sXG4gICAgY29sb3I6ICcjY2MyMjIyJyxcbiAgICBzZXR0aW5nczoge31cbn07XG5cbmV4cG9ydHMud2lkZ2V0Q29ubmVjdG9yID0gd2lkZ2V0Q29ubmVjdG9yO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvd2lkZ2V0cy9jb21tb24vd2lkZ2V0Q29ubmVjdG9yL3dpZGdldC5jb25uZWN0b3IuanMiLCJcbmNsYXNzIHdpZGdldENvbm5lY3RvckNvbnRyb2xsZXJ7XG5cbiAgICBjb25zdHJ1Y3RvciAodGFnKSB7XG4gICAgICAgIHZhciB2bSA9IHRoaXNcblxuICAgICAgICB2bS5zdGF0ZXMgPSBbXTtcbiAgICAgICAgdm0uc3RhdGVJZCA9IC0xO1xuXG4gICAgICAgIGZsb3dNYW5hZ2VyLmluaXRXaWRnZXQodGFnLCBmdW5jdGlvbiAodGFnKSB7XG4gICAgICAgICAgICBpbml0KHRhZylcbiAgICAgICAgfSk7XG5cblxuICAgICAgICB2bS5wcm9jZXNzSW5wdXQgPSBmdW5jdGlvbiAodGFnLCBkYXRhKSB7XG4gICAgICAgICAgICBpZih0YWcgPT0gJ3NldERhdGEnKXtcblxuICAgICAgICAgICAgICAgIHZtLnB1c2hTdGF0ZShkYXRhKTtcbiAgICAgICAgICAgICAgICBmbG93TWFuYWdlci5ydW5GbG93KHZtLnRhZywgJ3NldERhdGEnLCBwcm9jZXNzRGF0YShkYXRhKSk7XG5cbiAgICAgICAgICAgIH1lbHNlIGlmKHRhZyA9PSAnbmF2aWdhdGVCYWNrJyl7XG5cbiAgICAgICAgICAgICAgICB2YXIgdG9TdGF0ZSA9IHZtLmdldFN0YXRlKC0xKTtcbiAgICAgICAgICAgICAgICBpZih0b1N0YXRlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBmbG93TWFuYWdlci5ydW5GbG93KHZtLnRhZywgJ3NldERhdGEnLCBwcm9jZXNzRGF0YSh0b1N0YXRlKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9ZWxzZSBpZih0YWcgPT0gJ25hdmlnYXRlRm9yd2FyZCcpe1xuXG4gICAgICAgICAgICAgICAgdmFyIHRvU3RhdGUgPSB2bS5nZXRTdGF0ZSgxKTtcbiAgICAgICAgICAgICAgICBpZih0b1N0YXRlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICBmbG93TWFuYWdlci5ydW5GbG93KHZtLnRhZywgJ3NldERhdGEnLCBwcm9jZXNzRGF0YSh0b1N0YXRlKSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9ZWxzZSBpZih0YWcgPT0gJ3NldFN0YXRlJyl7XG5cbiAgICAgICAgICAgICAgICB2bS5wdXNoU3RhdGUoZGF0YSk7XG4gICAgICAgICAgICAgICAgZmxvd01hbmFnZXIucnVuRmxvdyh2bS50YWcsICdwdXNoU3RhdGUnLCBwcm9jZXNzRGF0YShkYXRhKSk7XG5cbiAgICAgICAgICAgIH1lbHNlIGlmKHRhZyA9PSAndXBkYXRlU3RhdGUnKXtcblxuICAgICAgICAgICAgICAgIHZtLnVwZGF0ZVN0YXRlKGRhdGEpO1xuICAgICAgICAgICAgICAgIGZsb3dNYW5hZ2VyLnJ1bkZsb3codm0udGFnLCAncHVzaFN0YXRlJywgcHJvY2Vzc0RhdGEoZGF0YSkpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgIGZ1bmN0aW9uIHByb2Nlc3NEYXRhKGRhdGEpe1xuICAgICAgICAgICAgaWYoIWRhdGEubmF2aWdhdGlvbikgZGF0YS5uYXZpZ2F0aW9uID0ge307XG5cbiAgICAgICAgICAgIGRhdGEubmF2aWdhdGlvbi5pc0JhY2t3YXJkID0gZmFsc2U7XG4gICAgICAgICAgICBkYXRhLm5hdmlnYXRpb24uaXNGb3J3YXJkID0gZmFsc2U7XG5cbiAgICAgICAgICAgIGlmKHZtLnN0YXRlSWQgPCB2bS5zdGF0ZXMubGVuZ3RoIC0gMSkgZGF0YS5uYXZpZ2F0aW9uLmlzRm9yd2FyZCA9IHRydWU7XG4gICAgICAgICAgICBpZih2bS5zdGF0ZUlkID4gMCkgZGF0YS5uYXZpZ2F0aW9uLmlzQmFja3dhcmQgPSB0cnVlO1xuXG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZnVuY3Rpb24gaW5pdCh0YWcpIHtcbiAgICAgICAgICAgIHZtLnRhZyA9IHRhZy50YWdfaWQ7XG4gICAgICAgIH1cblxuXG4gICAgICAgIHZtLnVwZGF0ZVN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICAgICAgICB2bS5zdGF0ZXNbdm0uc3RhdGVJZF0gPSBzdGF0ZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdm0ucHVzaFN0YXRlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG5cbiAgICAgICAgICAgIHZhciB0ZW1wU3RhdGUgPSB2bS5zdGF0ZXNbdm0uc3RhdGVJZF07XG4gICAgICAgICAgICBpZih0ZW1wU3RhdGUpe1xuICAgICAgICAgICAgICAgIGlmKHRlbXBTdGF0ZS5mZXRjaCkgZGVsZXRlIHRlbXBTdGF0ZS5mZXRjaDtcbiAgICAgICAgICAgICAgICBpZighc3RhdGUuZ3JvdXAgJiYgdGVtcFN0YXRlLmdyb3VwKSBzdGF0ZS5ncm91cCA9IHRlbXBTdGF0ZS5ncm91cDtcbiAgICAgICAgICAgICAgICBpZighc3RhdGUudGFiICYmIHRlbXBTdGF0ZS50YWIpIHN0YXRlLnRhYiA9IHRlbXBTdGF0ZS50YWI7XG4gICAgICAgICAgICAgICAgLy8gaWYoIXN0YXRlLml0ZW0gJiYgdGVtcFN0YXRlLml0ZW0pIHN0YXRlLml0ZW0gPSB0ZW1wU3RhdGUuaXRlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdm0uc3RhdGVJZCsrO1xuICAgICAgICAgICAgdm0uc3RhdGVzLnNwbGljZSh2bS5zdGF0ZUlkKTtcbiAgICAgICAgICAgIHZtLnN0YXRlcy5wdXNoKHN0YXRlKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdm0uZ2V0U3RhdGUgPSBmdW5jdGlvbiAoZGlmZikge1xuICAgICAgICAgICAgdmFyIHRlbXBpbmRleCA9IHZtLnN0YXRlSWQgKyBkaWZmO1xuICAgICAgICAgICAgaWYodGVtcGluZGV4ID49IDAgJiYgdGVtcGluZGV4IDwgdm0uc3RhdGVzLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgdm0uc3RhdGVJZCA9IHRlbXBpbmRleDtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uc3RhdGVzW3ZtLnN0YXRlSWRdO1xuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cbn1cblxuXG52YXIgd2lkZ2V0Q29ubmVjdG9yID0ge1xuICAgIGNvbnRyb2xsZXI6IHdpZGdldENvbm5lY3RvckNvbnRyb2xsZXIsXG4gICAgbWV0aG9kczpbXG4gICAgICAgIHtpZDowLCBuYW1lOidzZXREYXRhJyxvdXRwdXQ6dHJ1ZSwgaW5wdXQ6dHJ1ZSwgcGFyYW1zIDogWydhc3NldCddfSxcbiAgICAgICAge2lkOjEsIG5hbWU6J3NldFN0YXRlJyxvdXRwdXQ6dHJ1ZSwgaW5wdXQ6dHJ1ZSwgcGFyYW1zIDogWydhc3NldCddfSxcbiAgICAgICAge2lkOjIsIG5hbWU6J3VwZGF0ZVN0YXRlJyxvdXRwdXQ6dHJ1ZSwgaW5wdXQ6dHJ1ZSwgcGFyYW1zIDogWydhc3NldCddfSxcbiAgICAgICAge2lkOjMsIG5hbWU6J25hdmlnYXRlQmFjaycsb3V0cHV0OnRydWUsIGlucHV0OnRydWUsIHBhcmFtcyA6IFsnYXNzZXQnXX0sXG4gICAgICAgIHtpZDo0LCBuYW1lOiduYXZpZ2F0ZUZvcndhcmQnLG91dHB1dDp0cnVlLCBpbnB1dDp0cnVlLCBwYXJhbXMgOiBbJ2Fzc2V0J119LFxuICAgICAgICB7aWQ6NSwgbmFtZToncHVzaFN0YXRlJyxvdXRwdXQ6dHJ1ZSwgcGFyYW1zIDogWydhc3NldCddfSxcbiAgICBdLFxuICAgIGNvbG9yOicjY2MyMjIyJyxcbiAgICBzZXR0aW5ncyA6IHt9LFxufVxuXG5cbmV4cG9ydCB7d2lkZ2V0Q29ubmVjdG9yfTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvd2lkZ2V0cy9jb21tb24vd2lkZ2V0Q29ubmVjdG9yL3dpZGdldC5jb25uZWN0b3IuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF9jcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7IGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHsgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTsgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlOyBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7IGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTsgfSB9IHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7IGlmIChwcm90b1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7IGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpOyByZXR1cm4gQ29uc3RydWN0b3I7IH07IH0oKTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDIvMi8yMDE3LlxuICovXG52YXIgZ3JpZFNlcnZpY2UgPSBleHBvcnRzLmdyaWRTZXJ2aWNlID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGdyaWRTZXJ2aWNlKCRsb2cpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgZ3JpZFNlcnZpY2UpO1xuXG4gICAgICAgICRsb2cubG9nKFwiZ3JpZFNlcnZpY2VcIik7XG4gICAgICAgIHZhciB2bSA9IHRoaXM7XG4gICAgICAgIHZhciBnZXREZWZhdWx0V2lkZ2V0cyA9IHRydWU7XG4gICAgICAgIHZhciByZXNldExvY2FsU3RvcmFnZSA9IGZhbHNlO1xuXG4gICAgICAgIHZtLmlzT3BlcmEgPSAhIXdpbmRvdy5vcHIgJiYgISFvcHIuYWRkb25zIHx8ICEhd2luZG93Lm9wZXJhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignIE9QUi8nKSA+PSAwO1xuICAgICAgICB2bS5pc0ZpcmVmb3ggPSB0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnO1xuICAgICAgICB2bS5pc1NhZmFyaSA9IC9jb25zdHJ1Y3Rvci9pLnRlc3Qod2luZG93LkhUTUxFbGVtZW50KSB8fCBmdW5jdGlvbiAocCkge1xuICAgICAgICAgICAgcmV0dXJuIHAudG9TdHJpbmcoKSA9PT0gXCJbb2JqZWN0IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbl1cIjtcbiAgICAgICAgfSghd2luZG93WydzYWZhcmknXSB8fCBzYWZhcmkucHVzaE5vdGlmaWNhdGlvbik7XG4gICAgICAgIHZtLmlzSUUgPSAvKkBjY19vbiFAKi9mYWxzZSB8fCAhIWRvY3VtZW50LmRvY3VtZW50TW9kZTtcbiAgICAgICAgdm0uaXNFZGdlID0gIXZtLmlzSUUgJiYgISF3aW5kb3cuU3R5bGVNZWRpYTtcbiAgICAgICAgdm0uaXNDaHJvbWUgPSAhIXdpbmRvdy5jaHJvbWUgJiYgISF3aW5kb3cuY2hyb21lLndlYnN0b3JlO1xuICAgICAgICB2bS5pc0JsaW5rID0gKHZtLmlzQ2hyb21lIHx8IHZtLmlzT3BlcmEpICYmICEhd2luZG93LkNTUztcblxuICAgICAgICB2bS5wYXJhbVR5cGVzID0ge1xuICAgICAgICAgICAgSU5UOiAnSU5UJyxcbiAgICAgICAgICAgIFNUUklORzogJ1NUUklORycsXG4gICAgICAgICAgICBCT09MRUFOOiAnQk9PTEVBTicsXG4gICAgICAgICAgICBGVU5DVElPTjogJ0ZVTkNUSU9OJyxcbiAgICAgICAgICAgIFRJTUVTVEFNUDogJ1RJTUVTVEFNUCdcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZ2V0RGVmYXVsdFdpZGdldHMpIHtcblxuICAgICAgICAgICAgLy93aWRnZXRDb25uZWN0b3I0XG4gICAgICAgICAgICAvL0NvbmZpZ1dpZGdldDNcbiAgICAgICAgICAgIC8vTmF2VHJlZTFcbiAgICAgICAgICAgIC8vU2VhcmNoMlxuXG4gICAgICAgICAgICB2YXIgdF9mbG93SlNPTiA9IHtcbiAgICAgICAgICAgICAgICB0aW1lbGluZTM6IHtcbiAgICAgICAgICAgICAgICAgICAgJzNkUGxheWVyMic6IFt7IGlkOiAwLCBmcm9tOiAncHVzaEZyYW1lJywgdG86ICdzZXRGcmFtZScgfV1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB0X2Zsb3dKU09OID0gSlNPTi5zdHJpbmdpZnkodF9mbG93SlNPTik7XG5cbiAgICAgICAgICAgIHZhciB0X2xheW91dE9yZGVyID0gJ1t7XCJwb3NpdGlvblwiOjczODc3fSx7XCJwb3NpdGlvblwiOjM2MDUxfSx7XCJwb3NpdGlvblwiOjc1NDM4fV0nO1xuICAgICAgICAgICAgLy8gdmFyIHRfd2lkZ2V0RGF0YSA9ICdbe1wibmFtZVwiOlwidmlkZW9QbGF5ZXJcIixcInR5cGVcIjpcImpzXCIsXCJ2aWV3XCI6XCJhcHAvd2lkZ2V0cy9jb21tb24vdmlkZW9QbGF5ZXIvdmlkZW8ucGxheWVyLmh0bWxcIixcIm1ldGhvZHNcIjpbXSxcImNvbG9yXCI6XCIjY2MyMjIyXCIsXCJzZXR0aW5nc1wiOntcInZoXCI6MjAsXCJ3XCI6OX0sXCJ0YWdcIjpcInZpZGVvUGxheWVyMVwiLFwiaWRcIjo5NTQzMSxcInJlY3RTZXR0aW5nc1wiOntcInlcIjo0NCxcInhcIjo2MX0sXCJyZWN0XCI6e1wiX2dyb3Vwc1wiOltbe31dXSxcIl9wYXJlbnRzXCI6W3t9XX19LHtcIm5hbWVcIjpcIjNkUGxheWVyXCIsXCJ0eXBlXCI6XCJqc1wiLFwidmlld1wiOlwiYXBwL3dpZGdldHMvY29tbW9uLzNkUGxheWVyLzNkLnBsYXllci5odG1sXCIsXCJtZXRob2RzXCI6W10sXCJjb2xvclwiOlwiI2NjMjIyMlwiLFwic2V0dGluZ3NcIjp7XCJ2aFwiOjIwLFwid1wiOjl9LFwidGFnXCI6XCIzZFBsYXllcjJcIixcImlkXCI6MzY4MjMsXCJyZWN0U2V0dGluZ3NcIjp7XCJ5XCI6MTA2LFwieFwiOjEyNH0sXCJyZWN0XCI6e1wiX2dyb3Vwc1wiOltbe31dXSxcIl9wYXJlbnRzXCI6W3t9XX19LHtcIm5hbWVcIjpcInRpbWVsaW5lXCIsXCJ0eXBlXCI6XCJqc1wiLFwidmlld1wiOlwiYXBwL3dpZGdldHMvY29tbW9uL3RpbWVsaW5lL3RpbWVsaW5lLmh0bWxcIixcIm1ldGhvZHNcIjpbXSxcImNvbG9yXCI6XCIjY2MyMjIyXCIsXCJzZXR0aW5nc1wiOntcInZoXCI6NCxcIndcIjoxOH0sXCJ0YWdcIjpcInRpbWVsaW5lM1wiLFwiaWRcIjo3Njc4MCxcInJlY3RTZXR0aW5nc1wiOntcInlcIjoxNzIsXCJ4XCI6MTk2fSxcInJlY3RcIjp7XCJfZ3JvdXBzXCI6W1t7fV1dLFwiX3BhcmVudHNcIjpbe31dfX0se1wibmFtZVwiOlwiY29uZmlnV2lkZ2V0XCIsXCJ0eXBlXCI6XCJqc1wiLFwidmlld1wiOlwiYXBwL3dpZGdldHMvY29tbW9uLzNkUGxheWVyL2NvbmZpZy53aWRnZXQuaHRtbFwiLFwibWV0aG9kc1wiOltdLFwiY29sb3JcIjpcIiNjYzIyMjJcIixcInNldHRpbmdzXCI6e1widmhcIjoyNCxcIndcIjo2fSxcInRhZ1wiOlwiY29uZmlnV2lkZ2V0NFwiLFwiaWRcIjo0OTUzNixcInJlY3RTZXR0aW5nc1wiOntcInlcIjoyNDYsXCJ4XCI6MzA2fX1dJ1xuICAgICAgICAgICAgdmFyIHRfd2lkZ2V0RGF0YSA9ICcnO1xuXG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZmxvd0pTT04nLCB0X2Zsb3dKU09OKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsYXlvdXRPcmRlcicsIHRfbGF5b3V0T3JkZXIpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3dpZGdldERhdGEnLCB0X3dpZGdldERhdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHdpZGdldFNldCA9IGZsb3dNYW5hZ2VyLmdldFdpZGdldFNldHRpbmdzKCk7XG5cbiAgICAgICAgdmFyIHdpZGdldERhdGEgPSBbXTtcblxuICAgICAgICBpZiAocmVzZXRMb2NhbFN0b3JhZ2UpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3aWRnZXREYXRhJywgSlNPTi5zdHJpbmdpZnkod2lkZ2V0RGF0YSkpO1xuICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dpZGdldERhdGEnKSkge1xuICAgICAgICAgICAgd2lkZ2V0RGF0YSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dpZGdldERhdGEnKSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBnZW5lcmF0ZVdpZGdldHMod2lkZ2V0SlNPTikge1xuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHdpZGdldEpTT04pIHtcbiAgICAgICAgICAgICAgICB2YXIgd2lkRGF0YSA9IHdpZGdldFNldFt3aWRnZXRKU09OW2lkeF0ubmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKCF3aWRnZXRKU09OW2lkeF0ubWV0aG9kcykgd2lkZ2V0SlNPTltpZHhdLm1ldGhvZHMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqZHggaW4gd2lkRGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoamR4ICE9ICdtZXRob2RzJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkZ2V0SlNPTltpZHhdW2pkeF0gPSB3aWREYXRhW2pkeF07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBrZHggaW4gd2lkRGF0YVtqZHhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgcWR4IGluIHdpZGdldEpTT05baWR4XVtqZHhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh3aWRnZXRKU09OW2lkeF1bamR4XVtxZHhdLm5hbWUgPT0gd2lkRGF0YVtqZHhdW2tkeF0ubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZm91bmQpIHdpZGdldEpTT05baWR4XVtqZHhdLnB1c2god2lkRGF0YVtqZHhdW2tkeF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHdpZGdldEpTT047XG4gICAgICAgIH1cblxuICAgICAgICB2bS5nZXRXaWRnZXRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlV2lkZ2V0cyh3aWRnZXREYXRhKTtcbiAgICAgICAgfTtcbiAgICAgICAgdm0uZ2V0V2lkZ2V0RGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBpbmRleEJ5VGFnID0ge307XG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gd2lkZ2V0RGF0YSkge1xuICAgICAgICAgICAgICAgIGluZGV4QnlUYWdbd2lkZ2V0RGF0YVtpZHhdLnRhZ10gPSBpZHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZGdldHM6IGdlbmVyYXRlV2lkZ2V0cyh3aWRnZXREYXRhKSxcbiAgICAgICAgICAgICAgICB3aWRnZXRTZXQ6IHdpZGdldFNldCxcbiAgICAgICAgICAgICAgICB3aWRnZXREYXRhOiB3aWRnZXREYXRhLFxuICAgICAgICAgICAgICAgIGluZGV4QnlUYWc6IGluZGV4QnlUYWdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0udXBkYXRlV2lkZ2V0RGF0YSA9IGZ1bmN0aW9uIChkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gd2lkZ2V0RGF0YSkge1xuICAgICAgICAgICAgICAgIGlmICh3aWRnZXREYXRhW2lkeF0udGFnID09IGRhdGEudGFnKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZGdldERhdGFbaWR4XSA9IGRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFmb3VuZCkge1xuICAgICAgICAgICAgICAgIHdpZGdldERhdGEucHVzaChkYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZtLnB1c2hUb0FQSSgnd2lkZ2V0RGF0YScsIHdpZGdldERhdGEsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKHZtLmdldFdpZGdldERhdGEoKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5wdXNoVG9BUEkgPSBmdW5jdGlvbiAodGFnLCBkYXRhLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGFnLCBKU09OLnN0cmluZ2lmeShhbmd1bGFyLmNvcHkoZGF0YSkpKTtcbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRMYXlvdXRPcmRlciA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIHdpZCA9IHZtLmdldFdpZGdldHMoKTtcbiAgICAgICAgICAgIHZhciB0ZW1wTGF5ID0gW107XG4gICAgICAgICAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xheW91dE9yZGVyJykgJiYgIXJlc2V0TG9jYWxTdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgdGVtcExheSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xheW91dE9yZGVyJykpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpZHggPSAwOyBpZHggPCB3aWQubGVuZ3RoOyBpZHgrKykge1xuICAgICAgICAgICAgICAgICAgICB0ZW1wTGF5LnB1c2goeyBwb3NpdGlvbjogaWR4IH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2sodGVtcExheSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0RmxvdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBmbG93ID0ge307XG4gICAgICAgICAgICBpZiAocmVzZXRMb2NhbFN0b3JhZ2UpIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdmbG93SlNPTicsICd7fScpO1xuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmbG93SlNPTicpKSB7XG4gICAgICAgICAgICAgICAgZmxvdyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2Zsb3dKU09OJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZsb3c7XG4gICAgICAgIH07XG5cbiAgICAgICAgZmxvd01hbmFnZXIuaW5pdEZsb3codm0uZ2V0RmxvdygpKTtcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoZ3JpZFNlcnZpY2UsIFt7XG4gICAgICAgIGtleTogJ2dldERhdGEnLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0RGF0YSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gZ3JpZFNlcnZpY2U7XG59KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9mbG93TWFuYWdlci9ncmlkLnNlcnZpY2UuanMiLCIvKipcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gMi8yLzIwMTcuXG4gKi9cbmV4cG9ydCBjbGFzcyBncmlkU2VydmljZSB7XG4gICAgY29uc3RydWN0b3IgKCRsb2cpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICAkbG9nLmxvZyhcImdyaWRTZXJ2aWNlXCIpO1xuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICB2YXIgZ2V0RGVmYXVsdFdpZGdldHMgPSB0cnVlO1xuICAgICAgICB2YXIgcmVzZXRMb2NhbFN0b3JhZ2UgPSBmYWxzZTtcblxuICAgICAgICB2bS5pc09wZXJhID0gKCEhd2luZG93Lm9wciAmJiAhIW9wci5hZGRvbnMpIHx8ICEhd2luZG93Lm9wZXJhIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZignIE9QUi8nKSA+PSAwO1xuICAgICAgICB2bS5pc0ZpcmVmb3ggPSB0eXBlb2YgSW5zdGFsbFRyaWdnZXIgIT09ICd1bmRlZmluZWQnO1xuICAgICAgICB2bS5pc1NhZmFyaSA9IC9jb25zdHJ1Y3Rvci9pLnRlc3Qod2luZG93LkhUTUxFbGVtZW50KSB8fCAoZnVuY3Rpb24gKHApIHsgcmV0dXJuIHAudG9TdHJpbmcoKSA9PT0gXCJbb2JqZWN0IFNhZmFyaVJlbW90ZU5vdGlmaWNhdGlvbl1cIjsgfSkoIXdpbmRvd1snc2FmYXJpJ10gfHwgc2FmYXJpLnB1c2hOb3RpZmljYXRpb24pO1xuICAgICAgICB2bS5pc0lFID0gLypAY2Nfb24hQCovZmFsc2UgfHwgISFkb2N1bWVudC5kb2N1bWVudE1vZGU7XG4gICAgICAgIHZtLmlzRWRnZSA9ICF2bS5pc0lFICYmICEhd2luZG93LlN0eWxlTWVkaWE7XG4gICAgICAgIHZtLmlzQ2hyb21lID0gISF3aW5kb3cuY2hyb21lICYmICEhd2luZG93LmNocm9tZS53ZWJzdG9yZTtcbiAgICAgICAgdm0uaXNCbGluayA9ICh2bS5pc0Nocm9tZSB8fCB2bS5pc09wZXJhKSAmJiAhIXdpbmRvdy5DU1M7XG5cbiAgICAgICAgdm0ucGFyYW1UeXBlcyA9IHtcbiAgICAgICAgICAgIElOVCA6ICdJTlQnLFxuICAgICAgICAgICAgU1RSSU5HIDogJ1NUUklORycsXG4gICAgICAgICAgICBCT09MRUFOIDogJ0JPT0xFQU4nLFxuICAgICAgICAgICAgRlVOQ1RJT04gOiAnRlVOQ1RJT04nLFxuICAgICAgICAgICAgVElNRVNUQU1QIDogJ1RJTUVTVEFNUCcsXG4gICAgICAgIH1cblxuXG4gICAgICAgIGlmKGdldERlZmF1bHRXaWRnZXRzKXtcblxuICAgICAgICAgICAgLy93aWRnZXRDb25uZWN0b3I0XG4gICAgICAgICAgICAvL0NvbmZpZ1dpZGdldDNcbiAgICAgICAgICAgIC8vTmF2VHJlZTFcbiAgICAgICAgICAgIC8vU2VhcmNoMlxuXG4gICAgICAgICAgICB2YXIgdF9mbG93SlNPTiA9IHtcbiAgICAgICAgICAgICAgICB0aW1lbGluZTMgOiB7XG4gICAgICAgICAgICAgICAgICAgICczZFBsYXllcjInIDogW1xuICAgICAgICAgICAgICAgICAgICAgICAge2lkOjAsIGZyb206J3B1c2hGcmFtZScsIHRvOidzZXRGcmFtZSd9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgdF9mbG93SlNPTiA9IEpTT04uc3RyaW5naWZ5KHRfZmxvd0pTT04pO1xuXG4gICAgICAgICAgICB2YXIgdF9sYXlvdXRPcmRlciA9ICdbe1wicG9zaXRpb25cIjo3Mzg3N30se1wicG9zaXRpb25cIjozNjA1MX0se1wicG9zaXRpb25cIjo3NTQzOH1dJztcbiAgICAgICAgICAgIC8vIHZhciB0X3dpZGdldERhdGEgPSAnW3tcIm5hbWVcIjpcInZpZGVvUGxheWVyXCIsXCJ0eXBlXCI6XCJqc1wiLFwidmlld1wiOlwiYXBwL3dpZGdldHMvY29tbW9uL3ZpZGVvUGxheWVyL3ZpZGVvLnBsYXllci5odG1sXCIsXCJtZXRob2RzXCI6W10sXCJjb2xvclwiOlwiI2NjMjIyMlwiLFwic2V0dGluZ3NcIjp7XCJ2aFwiOjIwLFwid1wiOjl9LFwidGFnXCI6XCJ2aWRlb1BsYXllcjFcIixcImlkXCI6OTU0MzEsXCJyZWN0U2V0dGluZ3NcIjp7XCJ5XCI6NDQsXCJ4XCI6NjF9LFwicmVjdFwiOntcIl9ncm91cHNcIjpbW3t9XV0sXCJfcGFyZW50c1wiOlt7fV19fSx7XCJuYW1lXCI6XCIzZFBsYXllclwiLFwidHlwZVwiOlwianNcIixcInZpZXdcIjpcImFwcC93aWRnZXRzL2NvbW1vbi8zZFBsYXllci8zZC5wbGF5ZXIuaHRtbFwiLFwibWV0aG9kc1wiOltdLFwiY29sb3JcIjpcIiNjYzIyMjJcIixcInNldHRpbmdzXCI6e1widmhcIjoyMCxcIndcIjo5fSxcInRhZ1wiOlwiM2RQbGF5ZXIyXCIsXCJpZFwiOjM2ODIzLFwicmVjdFNldHRpbmdzXCI6e1wieVwiOjEwNixcInhcIjoxMjR9LFwicmVjdFwiOntcIl9ncm91cHNcIjpbW3t9XV0sXCJfcGFyZW50c1wiOlt7fV19fSx7XCJuYW1lXCI6XCJ0aW1lbGluZVwiLFwidHlwZVwiOlwianNcIixcInZpZXdcIjpcImFwcC93aWRnZXRzL2NvbW1vbi90aW1lbGluZS90aW1lbGluZS5odG1sXCIsXCJtZXRob2RzXCI6W10sXCJjb2xvclwiOlwiI2NjMjIyMlwiLFwic2V0dGluZ3NcIjp7XCJ2aFwiOjQsXCJ3XCI6MTh9LFwidGFnXCI6XCJ0aW1lbGluZTNcIixcImlkXCI6NzY3ODAsXCJyZWN0U2V0dGluZ3NcIjp7XCJ5XCI6MTcyLFwieFwiOjE5Nn0sXCJyZWN0XCI6e1wiX2dyb3Vwc1wiOltbe31dXSxcIl9wYXJlbnRzXCI6W3t9XX19LHtcIm5hbWVcIjpcImNvbmZpZ1dpZGdldFwiLFwidHlwZVwiOlwianNcIixcInZpZXdcIjpcImFwcC93aWRnZXRzL2NvbW1vbi8zZFBsYXllci9jb25maWcud2lkZ2V0Lmh0bWxcIixcIm1ldGhvZHNcIjpbXSxcImNvbG9yXCI6XCIjY2MyMjIyXCIsXCJzZXR0aW5nc1wiOntcInZoXCI6MjQsXCJ3XCI6Nn0sXCJ0YWdcIjpcImNvbmZpZ1dpZGdldDRcIixcImlkXCI6NDk1MzYsXCJyZWN0U2V0dGluZ3NcIjp7XCJ5XCI6MjQ2LFwieFwiOjMwNn19XSdcbiAgICAgICAgICAgIHZhciB0X3dpZGdldERhdGEgPSAnJztcblxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zsb3dKU09OJywgdF9mbG93SlNPTik7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGF5b3V0T3JkZXInLCB0X2xheW91dE9yZGVyKTtcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd3aWRnZXREYXRhJywgdF93aWRnZXREYXRhKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHdpZGdldFNldCA9IGZsb3dNYW5hZ2VyLmdldFdpZGdldFNldHRpbmdzKCk7XG5cbiAgICAgICAgdmFyIHdpZGdldERhdGEgPSBbXVxuXG4gICAgICAgIGlmKHJlc2V0TG9jYWxTdG9yYWdlKSBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnd2lkZ2V0RGF0YScsIEpTT04uc3RyaW5naWZ5KHdpZGdldERhdGEpKTtcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3dpZGdldERhdGEnKSl7XG4gICAgICAgICAgICB3aWRnZXREYXRhID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnd2lkZ2V0RGF0YScpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIGdlbmVyYXRlV2lkZ2V0cyh3aWRnZXRKU09OKSB7XG4gICAgICAgICAgICBmb3IodmFyIGlkeCBpbiB3aWRnZXRKU09OKXtcbiAgICAgICAgICAgICAgICB2YXIgd2lkRGF0YSA9IHdpZGdldFNldFt3aWRnZXRKU09OW2lkeF0ubmFtZV07XG4gICAgICAgICAgICAgICAgaWYoIXdpZGdldEpTT05baWR4XS5tZXRob2RzKSB3aWRnZXRKU09OW2lkeF0ubWV0aG9kcyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvcih2YXIgamR4IGluIHdpZERhdGEpe1xuICAgICAgICAgICAgICAgICAgICBpZihqZHggIT0gJ21ldGhvZHMnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZGdldEpTT05baWR4XVtqZHhdID0gd2lkRGF0YVtqZHhdO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcih2YXIga2R4IGluIHdpZERhdGFbamR4XSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKHZhciBxZHggaW4gd2lkZ2V0SlNPTltpZHhdW2pkeF0pe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZih3aWRnZXRKU09OW2lkeF1bamR4XVtxZHhdLm5hbWUgPT0gd2lkRGF0YVtqZHhdW2tkeF0ubmFtZSl7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoIWZvdW5kKSB3aWRnZXRKU09OW2lkeF1bamR4XS5wdXNoKHdpZERhdGFbamR4XVtrZHhdKVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHdpZGdldEpTT047XG4gICAgICAgIH1cblxuICAgICAgICB2bS5nZXRXaWRnZXRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGdlbmVyYXRlV2lkZ2V0cyh3aWRnZXREYXRhKTtcbiAgICAgICAgfVxuICAgICAgICB2bS5nZXRXaWRnZXREYXRhID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGluZGV4QnlUYWcgPSB7fTtcbiAgICAgICAgICAgIGZvcih2YXIgaWR4IGluIHdpZGdldERhdGEpe1xuICAgICAgICAgICAgICAgIGluZGV4QnlUYWdbd2lkZ2V0RGF0YVtpZHhdLnRhZ10gPSBpZHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHdpZGdldHMgOiBnZW5lcmF0ZVdpZGdldHMod2lkZ2V0RGF0YSksXG4gICAgICAgICAgICAgICAgd2lkZ2V0U2V0IDogd2lkZ2V0U2V0LFxuICAgICAgICAgICAgICAgIHdpZGdldERhdGEgOiB3aWRnZXREYXRhLFxuICAgICAgICAgICAgICAgIGluZGV4QnlUYWc6IGluZGV4QnlUYWdcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cblxuICAgICAgICB2bS51cGRhdGVXaWRnZXREYXRhID0gZnVuY3Rpb24gKGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICB2YXIgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvcih2YXIgaWR4IGluIHdpZGdldERhdGEpe1xuICAgICAgICAgICAgICAgIGlmKHdpZGdldERhdGFbaWR4XS50YWcgPT0gZGF0YS50YWcpe1xuICAgICAgICAgICAgICAgICAgICB3aWRnZXREYXRhW2lkeF0gPSBkYXRhO1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKCFmb3VuZCl7XG4gICAgICAgICAgICAgICAgd2lkZ2V0RGF0YS5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdm0ucHVzaFRvQVBJKCd3aWRnZXREYXRhJywgd2lkZ2V0RGF0YSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjayh2bS5nZXRXaWRnZXREYXRhKCkpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuXG4gICAgICAgIHZtLnB1c2hUb0FQSSA9IGZ1bmN0aW9uICh0YWcsIGRhdGEsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSh0YWcsIEpTT04uc3RyaW5naWZ5KGFuZ3VsYXIuY29weShkYXRhKSkpO1xuICAgICAgICAgICAgaWYoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICB2bS5nZXRMYXlvdXRPcmRlciA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgdmFyIHdpZCA9IHZtLmdldFdpZGdldHMoKTtcbiAgICAgICAgICAgIHZhciB0ZW1wTGF5ID0gW107XG4gICAgICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbGF5b3V0T3JkZXInKSAmJiAhcmVzZXRMb2NhbFN0b3JhZ2Upe1xuICAgICAgICAgICAgICAgIHRlbXBMYXkgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsYXlvdXRPcmRlcicpKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGZvcih2YXIgaWR4ID0gMDsgaWR4IDwgd2lkLmxlbmd0aDsgaWR4Kyspe1xuICAgICAgICAgICAgICAgICAgICB0ZW1wTGF5LnB1c2goe3Bvc2l0aW9uOiBpZHh9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGNhbGxiYWNrKSBjYWxsYmFjayh0ZW1wTGF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHZtLmdldEZsb3cgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZmxvdyA9IHt9XG4gICAgICAgICAgICBpZihyZXNldExvY2FsU3RvcmFnZSkgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2Zsb3dKU09OJywgJ3t9JylcbiAgICAgICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdmbG93SlNPTicpKXtcbiAgICAgICAgICAgICAgICBmbG93ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZmxvd0pTT04nKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmxvdztcbiAgICAgICAgfVxuXG4gICAgICAgIGZsb3dNYW5hZ2VyLmluaXRGbG93KHZtLmdldEZsb3coKSk7XG5cblxuICAgIH1cblxuICAgIGdldERhdGEoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGE7XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9mbG93TWFuYWdlci9ncmlkLnNlcnZpY2UuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDIvMTEvMjAxNy5cbiAqL1xuXG52YXIgYXV0aFNlcnZpY2UgPSBleHBvcnRzLmF1dGhTZXJ2aWNlID0gZnVuY3Rpb24gYXV0aFNlcnZpY2UoJHdpbmRvdywgJGxvZywgVE9LRU5fS0VZKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBhdXRoU2VydmljZSk7XG5cbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgICRsb2cubG9nKFwiYXV0aFNlcnZpY2VcIik7XG5cbiAgICB2bS5wYXJzZUp3dCA9IGZ1bmN0aW9uICh0b2tlbikge1xuICAgICAgICAvLyRsb2cubG9nKHRva2VuKTtcbiAgICAgICAgdmFyIGJhc2U2NFVybCA9IHRva2VuLnNwbGl0KCcuJylbMV07XG4gICAgICAgIHZhciBiYXNlNjQgPSBiYXNlNjRVcmwucmVwbGFjZSgnLScsICcrJykucmVwbGFjZSgnXycsICcvJyk7XG4gICAgICAgIHJldHVybiBhbmd1bGFyLmZyb21Kc29uKCR3aW5kb3cuYXRvYihiYXNlNjQpKTtcbiAgICB9O1xuXG4gICAgdm0uc2F2ZVRva2VuID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICR3aW5kb3cubG9jYWxTdG9yYWdlW1RPS0VOX0tFWV0gPSB0b2tlbjtcbiAgICB9O1xuXG4gICAgdm0uZ2V0VG9rZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAkd2luZG93LmxvY2FsU3RvcmFnZVtUT0tFTl9LRVldO1xuICAgIH07XG5cbiAgICB2bS5pc0F1dGhlZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHRva2VuID0gdm0uZ2V0VG9rZW4oKTtcbiAgICAgICAgaWYgKHRva2VuICE9IG51bGwpIHtcbiAgICAgICAgICAgIHZhciBwYXJhbXMgPSB2bS5wYXJzZUp3dCh0b2tlbik7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZChuZXcgRGF0ZSgpLmdldFRpbWUoKSAvIDEwMDApIDw9IHBhcmFtcy5leHA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdm0ubG9nb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAkd2luZG93LmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFRPS0VOX0tFWSk7XG4gICAgfTtcbn07XG5cbnZhciBhdXRoSW50ZXJjZXB0b3IgPSBleHBvcnRzLmF1dGhJbnRlcmNlcHRvciA9IGZ1bmN0aW9uIGF1dGhJbnRlcmNlcHRvcigkbG9nLCBBUElfSE9TVCwgYXV0aFNlcnZpY2UpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIGF1dGhJbnRlcmNlcHRvcik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICAvLyBhdXRvbWF0aWNhbGx5IGF0dGFjaCBBdXRob3JpemF0aW9uIGhlYWRlclxuICAgICAgICByZXF1ZXN0OiBmdW5jdGlvbiByZXF1ZXN0KGNvbmZpZykge1xuICAgICAgICAgICAgLy8kbG9nLmxvZyhjb25maWcpO1xuICAgICAgICAgICAgaWYgKGNvbmZpZy51cmwuaW5kZXhPZihBUElfSE9TVCkgPT09IDApIHtcbiAgICAgICAgICAgICAgICBpZiAoY29uZmlnLm1ldGhvZCA9PSAnUE9TVCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoY29uZmlnLnVybC5pbmRleE9mKCdnZXR0b2tlbicpID4gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbmZpZy5kYXRhLnRva2VuID0gYXV0aFNlcnZpY2UuZ2V0VG9rZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoY29uZmlnLm1ldGhvZCA9PSAnR0VUJykge1xuICAgICAgICAgICAgICAgICAgICAvL2NvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmVhcmVyICcgKyBhdXRoU2VydmljZS5nZXRUb2tlbigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgfSxcblxuICAgICAgICAvLyBJZiBhIHRva2VuIHdhcyBzZW50IGJhY2ssIHNhdmUgaXRcbiAgICAgICAgcmVzcG9uc2U6IGZ1bmN0aW9uIHJlc3BvbnNlKHJlcykge1xuICAgICAgICAgICAgLy8kbG9nLmxvZyhyZXMpO1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhICYmIHJlcy5kYXRhLmRhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyRsb2cubG9nKHJlcy5kYXRhLmRhdGEudG9rZW4pO1xuICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlnLnVybC5pbmRleE9mKEFQSV9IT1NUKSA9PT0gMCAmJiByZXMuZGF0YS5kYXRhLnRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgIGF1dGhTZXJ2aWNlLnNhdmVUb2tlbihyZXMuZGF0YS5kYXRhLnRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZXNwb25zZUVycm9yOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgLy8gICAgICRsb2cubG9nKCdpbnRlcmNlcHRvcicpO1xuICAgICAgICAvLyAgICAgJGxvZy5sb2cocmVzKTtcbiAgICAgICAgLy8gfVxuICAgIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2VydmljZXMvYXV0aC5zZXJ2aWNlLmpzIiwiLyoqXG4gKiBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDIvMTEvMjAxNy5cbiAqL1xuXG5leHBvcnQgY2xhc3MgYXV0aFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yICgkd2luZG93LCAkbG9nLCBUT0tFTl9LRVkpIHtcbiAgICAgICAgJ25nSW5qZWN0J1xuXG4gICAgICAgIHZhciAgdm0gPSB0aGlzO1xuICAgICAgICAkbG9nLmxvZyhcImF1dGhTZXJ2aWNlXCIpO1xuXG4gICAgICAgIHZtLnBhcnNlSnd0ID0gZnVuY3Rpb24gKHRva2VuKSB7XG4gICAgICAgICAgICAvLyRsb2cubG9nKHRva2VuKTtcbiAgICAgICAgICAgIHZhciBiYXNlNjRVcmwgPSB0b2tlbi5zcGxpdCgnLicpWzFdO1xuICAgICAgICAgICAgdmFyIGJhc2U2NCA9IGJhc2U2NFVybC5yZXBsYWNlKCctJywgJysnKS5yZXBsYWNlKCdfJywgJy8nKTtcbiAgICAgICAgICAgIHJldHVybiBhbmd1bGFyLmZyb21Kc29uKCR3aW5kb3cuYXRvYihiYXNlNjQpKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5zYXZlVG9rZW4gPSBmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgICAgICR3aW5kb3cubG9jYWxTdG9yYWdlW1RPS0VOX0tFWV0gPSB0b2tlbjtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRUb2tlbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiAkd2luZG93LmxvY2FsU3RvcmFnZVtUT0tFTl9LRVldO1xuICAgICAgICB9O1xuXG5cbiAgICAgICAgdm0uaXNBdXRoZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB2bS5nZXRUb2tlbigpO1xuICAgICAgICAgICAgaWYgKHRva2VuICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1zID0gdm0ucGFyc2VKd3QodG9rZW4pO1xuICAgICAgICAgICAgICAgIHJldHVybiBNYXRoLnJvdW5kKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC8gMTAwMCkgPD0gcGFyYW1zLmV4cDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICR3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oVE9LRU5fS0VZKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgY2xhc3MgYXV0aEludGVyY2VwdG9yIHtcbiAgICBjb25zdHJ1Y3RvciAoJGxvZywgQVBJX0hPU1QsIGF1dGhTZXJ2aWNlKSB7XG4gICAgICAgICduZ0luamVjdCdcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgLy8gYXV0b21hdGljYWxseSBhdHRhY2ggQXV0aG9yaXphdGlvbiBoZWFkZXJcbiAgICAgICAgICAgIHJlcXVlc3Q6IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgICAgICAgICAgICAgIC8vJGxvZy5sb2coY29uZmlnKTtcbiAgICAgICAgICAgICAgICBpZihjb25maWcudXJsLmluZGV4T2YoQVBJX0hPU1QpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb25maWcubWV0aG9kID09ICdQT1NUJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCEoY29uZmlnLnVybC5pbmRleE9mKCdnZXR0b2tlbicpID4gMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25maWcuZGF0YS50b2tlbiA9IGF1dGhTZXJ2aWNlLmdldFRva2VuKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihjb25maWcubWV0aG9kID09ICdHRVQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbmZpZy5oZWFkZXJzLkF1dGhvcml6YXRpb24gPSAnQmVhcmVyICcgKyBhdXRoU2VydmljZS5nZXRUb2tlbigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcmV0dXJuIGNvbmZpZztcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIElmIGEgdG9rZW4gd2FzIHNlbnQgYmFjaywgc2F2ZSBpdFxuICAgICAgICAgICAgcmVzcG9uc2U6IGZ1bmN0aW9uKHJlcykge1xuICAgICAgICAgICAgICAgIC8vJGxvZy5sb2cocmVzKTtcbiAgICAgICAgICAgICAgICBpZihyZXMuZGF0YSAmJiByZXMuZGF0YS5kYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vJGxvZy5sb2cocmVzLmRhdGEuZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXMuY29uZmlnLnVybC5pbmRleE9mKEFQSV9IT1NUKSA9PT0gMCAmJiByZXMuZGF0YS5kYXRhLnRva2VuKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdXRoU2VydmljZS5zYXZlVG9rZW4ocmVzLmRhdGEuZGF0YS50b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyByZXNwb25zZUVycm9yOiBmdW5jdGlvbihyZXMpIHtcbiAgICAgICAgICAgIC8vICAgICAkbG9nLmxvZygnaW50ZXJjZXB0b3InKTtcbiAgICAgICAgICAgIC8vICAgICAkbG9nLmxvZyhyZXMpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHsgcmV0dXJuIHR5cGVvZiBvYmo7IH0gOiBmdW5jdGlvbiAob2JqKSB7IHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqOyB9O1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcclxuICogQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiAyLzExLzIwMTcuXHJcbiAqL1xuXG52YXIgaGVscGVyU2VydmljZSA9IGV4cG9ydHMuaGVscGVyU2VydmljZSA9IGZ1bmN0aW9uIGhlbHBlclNlcnZpY2UoJGxvZywgJHEsIGFwcENvbnN0YW50cykge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgaGVscGVyU2VydmljZSk7XG5cbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgICRsb2cubG9nKFwiaGVscGVyU2VydmljZVwiKTtcblxuICAgIHZhciBTTEFTSCA9ICcvJztcblxuICAgIC8vIHNob3VsZCBiZSBzYW1lIGFzIGRlZmluZWQgaW4gYmFja2VuZFxuICAgIHZtLmFzc2V0VHlwZUlkVG9Bc3NldFR5cGUgPSB7XG4gICAgICAgIDI6IGFwcENvbnN0YW50cy5HUk9VUCxcbiAgICAgICAgMzogYXBwQ29uc3RhbnRzLlVTRVIsXG4gICAgICAgIDQ6IGFwcENvbnN0YW50cy5ST0xFLFxuICAgICAgICA1OiBhcHBDb25zdGFudHMuTE9DQUxVU0VSLFxuICAgICAgICA0NTogYXBwQ29uc3RhbnRzLlZFSElDTEUsXG4gICAgICAgIDUyOiBhcHBDb25zdGFudHMuREVWSUNFXG4gICAgfTtcblxuICAgIC8vIGdlbmVyYXRpbmcgcmV2ZXJzZSBsb29rdXBcbiAgICB2bS5hc3NldFR5cGVUb0Fzc2V0VHlwZUlkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXNzZXRUeXBlVG9Bc3NldFR5cGVJZCA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpZHggaW4gdm0uYXNzZXRUeXBlSWRUb0Fzc2V0VHlwZSkge1xuICAgICAgICAgICAgYXNzZXRUeXBlVG9Bc3NldFR5cGVJZFt2bS5hc3NldFR5cGVJZFRvQXNzZXRUeXBlW2lkeF1dID0gaWR4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhc3NldFR5cGVUb0Fzc2V0VHlwZUlkO1xuICAgIH0oKTtcblxuICAgIHZtLmdldEFzc2V0SWQyID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgaWYgKHBhdGggPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgdmFyIHRva2VucyA9IHBhdGguc3BsaXQoU0xBU0gpO1xuXG4gICAgICAgIGlmICh0b2tlbnMubGVuZ3RoID4gMikgcmV0dXJuIHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gMl07XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHZtLmdldFBhcmVudFBhdGgyID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgaWYgKHBhdGggPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgdmFyIHNhdmVkaWR4ID0gMDtcbiAgICAgICAgdmFyIGNvdW50ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaWR4ID0gcGF0aC5sZW5ndGggLSAxOyBpZHggPj0gMDsgaWR4LS0pIHtcbiAgICAgICAgICAgIGlmIChwYXRoW2lkeF0gPT0gU0xBU0gpIGNvdW50Kys7XG5cbiAgICAgICAgICAgIGlmIChjb3VudCA9PSAyKSB7XG4gICAgICAgICAgICAgICAgc2F2ZWRpZHggPSBpZHg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb3VudCA9PSA1KSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY291bnQgPT0gNSkgcmV0dXJuIHBhdGguc3Vic3RyaW5nKDAsIHNhdmVkaWR4KTtcblxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xuXG4gICAgdm0uZ2V0UGFyZW50SWQyID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgaWYgKHBhdGggPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgcmV0dXJuIHZtLmdldEFzc2V0SWQyKHZtLmdldFBhcmVudFBhdGgyKHBhdGgpKTtcbiAgICB9O1xuXG4gICAgdm0uZ2V0QXNzZXRUeXBlSWQyID0gZnVuY3Rpb24gKHBhdGgpIHtcbiAgICAgICAgaWYgKHBhdGggPT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgdmFyIHRva2VucyA9IHBhdGguc3BsaXQoU0xBU0gpO1xuXG4gICAgICAgIGlmICh0b2tlbnMubGVuZ3RoID4gMykgcmV0dXJuIHRva2Vuc1t0b2tlbnMubGVuZ3RoIC0gM107XG5cbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfTtcblxuICAgIHZtLmdldEFzc2V0VHlwZTIgPSBmdW5jdGlvbiAocGF0aCkge1xuICAgICAgICBpZiAocGF0aCA9PSBudWxsKSByZXR1cm4gbnVsbDtcblxuICAgICAgICByZXR1cm4gdm0uYXNzZXRUeXBlSWRUb0Fzc2V0VHlwZVt2bS5nZXRBc3NldFR5cGVJZDIocGF0aCldO1xuICAgIH07XG5cbiAgICB2bS5nZXRBc3NldExldmVsMiA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgIGlmIChwYXRoID09IG51bGwpIHJldHVybiBudWxsO1xuXG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKChwYXRoLnNwbGl0KFNMQVNIKS5sZW5ndGggLSAxKSAvIDIpO1xuICAgIH07XG5cbiAgICB2bS5hZGRBc3NldEluZm8gPSBmdW5jdGlvbiAoYXNzZXQpIHtcbiAgICAgICAgaWYgKGFzc2V0ID09IG51bGwpIHJldHVybiBudWxsO1xuXG4gICAgICAgIGFzc2V0LmFzc2V0aWQgPSB2bS5nZXRBc3NldElkMihhc3NldC5hc3NldHBhdGgpO1xuICAgICAgICBhc3NldC5wZ3JvdXBwYXRoID0gdm0uZ2V0UGFyZW50UGF0aDIoYXNzZXQuYXNzZXRwYXRoKTtcbiAgICAgICAgYXNzZXQucGdyb3VwaWQgPSB2bS5nZXRQYXJlbnRJZDIoYXNzZXQuYXNzZXRwYXRoKTtcbiAgICAgICAgYXNzZXQudWlfYXNzZXRfdHlwZSA9IHZtLmdldEFzc2V0VHlwZTIoYXNzZXQuYXNzZXRwYXRoKTtcbiAgICAgICAgYXNzZXQuYXNzZXRsZXZlbCA9IHZtLmdldEFzc2V0TGV2ZWwyKGFzc2V0LmFzc2V0cGF0aCk7XG4gICAgfTtcblxuICAgIHZtLmZpbHRlckFzc2V0R3JvdXBzID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIGZpbHRlcmVkTGlzdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBpZHggaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGFbaWR4XS50YWcgPT0gJ1RFQU0nKSBmaWx0ZXJlZExpc3QucHVzaChkYXRhW2lkeF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICRxLnJlc29sdmUoZmlsdGVyZWRMaXN0KTtcbiAgICB9O1xuXG4gICAgLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG5cbiAgICB2bS5tZXJnZUFzc2V0UGVybWlzc2lvbnMgPSBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICB2YXIgZGF0YSA9IHJlc3AuZGF0YS5kYXRhO1xuICAgICAgICBmb3IgKHZhciBpZHggaW4gZGF0YS5hc3NldHMpIHtcbiAgICAgICAgICAgIHZhciBhc3NldCA9IGRhdGEuYXNzZXRzW2lkeF07XG4gICAgICAgICAgICB2bS5hZGRBc3NldEluZm8oYXNzZXQpO1xuICAgICAgICAgICAgZm9yICh2YXIgcGlkeCBpbiBkYXRhLnBlcm1pc3Npb25zKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBlcm1pc3Npb24gPSBkYXRhLnBlcm1pc3Npb25zW3BpZHhdO1xuICAgICAgICAgICAgICAgIGlmIChhc3NldC5hc3NldHBhdGggPT0gcGVybWlzc2lvbi5hc3NldHBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgYXNzZXQucGVybWlzc2lvbnMgPSBKU09OLnBhcnNlKHBlcm1pc3Npb24ucGVybWlkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShyZXNwKTtcbiAgICB9O1xuXG4gICAgdm0ubWVyZ2VVc2VyUGVybWlzc2lvbnMgPSBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAvLyAkbG9nLmxvZyhyZXNwKTtcbiAgICAgICAgdmFyIHVzZXJzTGlzdCA9IFtdO1xuICAgICAgICB2YXIgZGF0YSA9IHJlc3BbMF0uZGF0YS5kYXRhO1xuICAgICAgICBmb3IgKHZhciBpZHggaW4gZGF0YS5hc3NldHMpIHtcbiAgICAgICAgICAgIHZhciBhc3NldCA9IGRhdGEuYXNzZXRzW2lkeF07XG4gICAgICAgICAgICBmb3IgKHZhciBwZXJtIGluIGRhdGEucGVybWlzc2lvbnMpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGVybWlzc2lvbiA9IGRhdGEucGVybWlzc2lvbnNbcGVybV07XG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0LmFzc2V0cGF0aCA9PSBwZXJtaXNzaW9uLmFzc2V0cGF0aCkge1xuICAgICAgICAgICAgICAgICAgICB1c2Vyc0xpc3QucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldHBhdGg6IGFzc2V0LmFzc2V0cGF0aCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IGFzc2V0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBwbmFtZTogYXNzZXQucG5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3NldGlkOiBwZXJtaXNzaW9uLmFzc2V0aWQsXG4gICAgICAgICAgICAgICAgICAgICAgICBwZXJtaWQ6IHBlcm1pc3Npb24ucGVybWlkXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJHEucmVzb2x2ZSh1c2Vyc0xpc3QpO1xuICAgIH07XG5cbiAgICB2bS5tZXJnZUFzc2V0QXNzaWdubWVudHMgPSBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAvLyRsb2cubG9nKHJlc3ApO1xuICAgICAgICB2YXIgZGF0YSA9IHJlc3AuZGF0YS5kYXRhO1xuICAgICAgICB2YXIgYXNzZXQgPSBkYXRhLmFzc2V0WzBdO1xuICAgICAgICBhc3NldC5pbmZvID0gZGF0YS5pbmZvO1xuICAgICAgICBhc3NldC5hc3NnID0gZGF0YS5hc3NnO1xuICAgICAgICBhc3NldC5hc3NnaW5mbyA9IGRhdGEuYXNzZ2luZm87XG4gICAgICAgIGFzc2V0LnBlcm1pc3Npb25zID0gSlNPTi5wYXJzZShkYXRhLnBlcm1pc3Npb25zWzBdLnBlcm1pZCk7XG4gICAgICAgIC8vJGxvZy5sb2coYXNzZXQpO1xuICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShhc3NldCk7XG4gICAgfTtcblxuICAgIHZtLm1lcmdlRmVuY2VJbmZvID0gZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgdmFyIGRhdGEgPSByZXNwLmRhdGEuZGF0YTtcbiAgICAgICAgZm9yICh2YXIgaWR4IGluIGRhdGEuYXNzZXRzKSB7XG4gICAgICAgICAgICB2YXIgYXNzZXQgPSBkYXRhLmFzc2V0c1tpZHhdO1xuICAgICAgICAgICAgYXNzZXQuaW5mbyA9IFtdO1xuICAgICAgICAgICAgZm9yICh2YXIgcGlkeCBpbiBkYXRhLmluZm8pIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IGRhdGEuaW5mb1twaWR4XTtcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXQuYXNzZXRwYXRoID09IGl0ZW0uYXNzZXRwYXRoKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0LmluZm8ucHVzaChpdGVtKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShyZXNwKTtcbiAgICB9O1xuXG4gICAgdm0ubWFrZUFzc2V0TWFwID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIGFzc2V0cyA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpZHggaW4gZGF0YS5hc3NldHMpIHtcbiAgICAgICAgICAgIHZhciBhc3NldCA9IGRhdGEuYXNzZXRzW2lkeF07XG4gICAgICAgICAgICB2YXIga2V5ID0gZ2V0TXlQYXRoKGFzc2V0KTtcbiAgICAgICAgICAgIHZtLmFkZEFzc2V0SW5mbyhhc3NldCk7XG4gICAgICAgICAgICBhc3NldHNba2V5XSA9IGFzc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICRxLnJlc29sdmUoYXNzZXRzKTtcbiAgICB9O1xuXG4gICAgdm0ubWFrZVBlcm1pc3Npb25NYXAgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGVybWlzc2lvbnMgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgaWR4IGluIGRhdGEucGVybWlzc2lvbnMpIHtcbiAgICAgICAgICAgIHZhciBwZXJtaXNzaW9uID0gZGF0YS5wZXJtaXNzaW9uc1tpZHhdO1xuICAgICAgICAgICAgdmFyIGtleSA9IGdldE15UGF0aChwZXJtaXNzaW9uKTtcbiAgICAgICAgICAgIHBlcm1pc3Npb25zW2tleV0gPSBwZXJtaXNzaW9uO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICRxLnJlc29sdmUocGVybWlzc2lvbnMpO1xuICAgIH07XG5cbiAgICB2bS5tZXJnZU1hcCA9IGZ1bmN0aW9uIChtYXAxLCBtYXAyKSB7XG4gICAgICAgIGZvciAodmFyIGlkeCBpbiBtYXAxKSB7XG4gICAgICAgICAgICBpZiAoaWR4IGluIG1hcDIpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqZHggaW4gbWFwMltpZHhdKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcDFbaWR4XVtqZHhdID0gbWFwMltpZHhdW2pkeF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtYXAxO1xuICAgIH07XG5cbiAgICBmdW5jdGlvbiBnZXRNeVBhdGgoYXNzZXQpIHtcbiAgICAgICAgdmFyIHR5cGUgPSBhc3NldC5hc3NldHBhdGg7XG4gICAgICAgIGlmICghdHlwZSkgdHlwZSA9IGFzc2V0Lmdyb3VwcGF0aDtcbiAgICAgICAgaWYgKCF0eXBlKSB0eXBlID0gYXNzZXQucm9sZXBhdGg7XG4gICAgICAgIGlmICghdHlwZSkgdHlwZSA9IGFzc2V0LnVzZXJwYXRoO1xuICAgICAgICBpZiAoIXR5cGUpIHR5cGUgPSBhc3NldC52ZWhpY2xlcGF0aDtcbiAgICAgICAgaWYgKCF0eXBlKSB0eXBlID0gYXNzZXQuZGV2aWNlcGF0aDtcbiAgICAgICAgcmV0dXJuIHR5cGU7XG4gICAgfVxuXG4gICAgdm0udmFsaWRhdGVSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgIGlmIChyZXNwICYmIHJlc3AuZGF0YSAmJiByZXNwLmRhdGEuZGF0YSkge1xuICAgICAgICAgICAgcmV0dXJuICRxLnJlc29sdmUocmVzcC5kYXRhLmRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAkcS5yZWplY3QocmVzcCk7XG4gICAgfTtcblxuICAgIHZtLm1ha2VBc3NldExpc3QgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShkYXRhLmFzc2V0cyk7XG4gICAgfTtcblxuICAgIHZtLm1ha2VNYXBPbkFzc2V0UGF0aCA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIC8vIGRpZmYgd2l0aCBtYWtlQXNzZXRNYXAgaXMgdGhhdCB0aGlzIGZ1bmN0aW9uXG4gICAgICAgIC8vIGlzIGRpcmVjdGx5IHJlYWRpbmcgZnJvbSB0aGUgYXJyYXlcbiAgICAgICAgLy8gdmFyIGRhdGEgPSByZXNwLmRhdGEuZGF0YTtcbiAgICAgICAgdmFyIGFzc2V0cyA9IHt9O1xuICAgICAgICBmb3IgKHZhciBpZHggaW4gZGF0YSkge1xuICAgICAgICAgICAgdmFyIGFzc2V0ID0gZGF0YVtpZHhdO1xuICAgICAgICAgICAgLy8gdm0uYWRkQXNzZXRJbmZvKGFzc2V0KTtcbiAgICAgICAgICAgIGFzc2V0c1thc3NldC5hc3NldHBhdGhdID0gYXNzZXQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICRxLnJlc29sdmUoYXNzZXRzKTtcbiAgICB9O1xuXG4gICAgdm0uc2xhc2hDb3VudCA9IGZ1bmN0aW9uIChwYXRoKSB7XG4gICAgICAgIHZhciBjb3VudCA9IDA7XG4gICAgICAgIGZvciAodmFyIGlkeCBpbiBwYXRoKSB7XG4gICAgICAgICAgICBpZiAocGF0aFtpZHhdID09IFNMQVNIKSBjb3VudCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvdW50O1xuICAgIH07XG5cbiAgICB2bS5zb3J0T25Bc3NldExldmVsID0gZnVuY3Rpb24gKGhhc2hPYmopIHtcbiAgICAgICAgdmFyIGFycmF5T2JqID0gW107XG4gICAgICAgIGZvciAodmFyIGlkeCBpbiBoYXNoT2JqKSB7XG4gICAgICAgICAgICBhcnJheU9iai5wdXNoKGhhc2hPYmpbaWR4XSk7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiBhLmluZm8uYXNzZXRsZXZlbCAtIGIuaW5mby5hc3NldGxldmVsO1xuICAgICAgICB9XG5cbiAgICAgICAgYXJyYXlPYmouc29ydChjb21wYXJlKTtcblxuICAgICAgICByZXR1cm4gYXJyYXlPYmo7XG4gICAgfTtcblxuICAgIHZtLnNvcnRQYXRocyA9IGZ1bmN0aW9uIChhcnJheU9iaikge1xuICAgICAgICBmdW5jdGlvbiBjb21wYXJlKGEsIGIpIHtcbiAgICAgICAgICAgIHJldHVybiB2bS5zbGFzaENvdW50KGEpIC0gdm0uc2xhc2hDb3VudChiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFycmF5T2JqLnNvcnQoY29tcGFyZSk7XG5cbiAgICAgICAgcmV0dXJuIGFycmF5T2JqO1xuICAgIH07XG5cbiAgICB2bS5nZXROZXh0UGF0aEl0ZW1FbmQgPSBmdW5jdGlvbiAoc3RyLCBzdGFydCkge1xuICAgICAgICB2YXIgc2xhc2ggPSAnLyc7XG5cbiAgICAgICAgaWYgKHN0ciA9PT0gbnVsbCkgcmV0dXJuIC0xO1xuXG4gICAgICAgIGlmIChzdGFydCA9PT0gbnVsbCkgc3RhcnQgPSAwO1xuXG4gICAgICAgIGlmIChzdGFydCA8IDAgfHwgc3RhcnQgPj0gc3RyLmxlbmd0aCkgcmV0dXJuIC0xO1xuXG4gICAgICAgIGlmIChzdHIuY2hhckF0KHN0YXJ0KSAhPT0gc2xhc2gpIHJldHVybiAtMTtcblxuICAgICAgICBpZiAoc3RyLnN1YnN0cihzdGFydCwgc3RyLmxlbmd0aCkubGVuZ3RoIDwgNCkgcmV0dXJuIC0xO1xuXG4gICAgICAgIHZhciBmaXJzdFNsYXNoID0gc3RyLmluZGV4T2Yoc2xhc2gsIHN0YXJ0ICsgMSk7XG4gICAgICAgIGlmIChmaXJzdFNsYXNoICE9IC0xICYmIGZpcnN0U2xhc2ggPCBzdHIubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgdmFyIHNlY29uZFNsYXNoID0gc3RyLmluZGV4T2Yoc2xhc2gsIGZpcnN0U2xhc2ggKyAxKTtcbiAgICAgICAgICAgIGlmIChzZWNvbmRTbGFzaCAhPSAtMSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzZWNvbmRTbGFzaCAtIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHIubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuXG4gICAgdm0uZ2V0Tm9kZXNJblBhdGggPSBmdW5jdGlvbiAocGF0aCkge1xuICAgICAgICBpZiAoYW5ndWxhci5pc1VuZGVmaW5lZChwYXRoKSkgcmV0dXJuIFtdO1xuXG4gICAgICAgIHZhciBub2Rlc0luUGF0aCA9IFtdO1xuICAgICAgICB2YXIgc3RhcnRJbmRleCA9IDA7XG4gICAgICAgIHZhciBlbmRJbmRleCA9IDA7XG4gICAgICAgIHZhciBpdGVtU3RhcnRJbmRleCA9IDA7XG4gICAgICAgIC8vJGxvZy5sb2coXCI9PT09PT09PT09PT09PT09PT1cIiArIHBhdGgpO1xuICAgICAgICB3aGlsZSAoaXRlbVN0YXJ0SW5kZXggPCBwYXRoLmxlbmd0aCkge1xuICAgICAgICAgICAgZW5kSW5kZXggPSB2bS5nZXROZXh0UGF0aEl0ZW1FbmQocGF0aCwgaXRlbVN0YXJ0SW5kZXgpO1xuICAgICAgICAgICAgaWYgKGVuZEluZGV4ID09IC0xKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIC8vJGxvZy5sb2coXCJlbmRJbmRleCBcIiArIGVuZEluZGV4KTtcbiAgICAgICAgICAgIGlmIChlbmRJbmRleCA8IHBhdGgubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgbm9kZXNJblBhdGgucHVzaChwYXRoLnN1YnN0cmluZyhzdGFydEluZGV4LCBlbmRJbmRleCArIDEpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGl0ZW1TdGFydEluZGV4ID0gZW5kSW5kZXggKyAxO1xuICAgICAgICB9XG4gICAgICAgIC8vJGxvZy5sb2cobm9kZXNJblBhdGgpO1xuICAgICAgICByZXR1cm4gbm9kZXNJblBhdGg7XG4gICAgfTtcblxuICAgIEpTT04uZmxhdHRlbiA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSB7fTtcblxuICAgICAgICBmdW5jdGlvbiByZWN1cnNlKGN1ciwgcHJvcCkge1xuICAgICAgICAgICAgaWYgKE9iamVjdChjdXIpICE9PSBjdXIpIHtcbiAgICAgICAgICAgICAgICByZXN1bHRbcHJvcF0gPSBjdXI7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY3VyKSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gY3VyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICByZWN1cnNlKGN1cltpXSwgcHJvcCArIFwiW1wiICsgaSArIFwiXVwiKTtcbiAgICAgICAgICAgICAgICB9aWYgKGwgPT0gMCkgcmVzdWx0W3Byb3BdID0gW107XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBpc0VtcHR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIGN1cikge1xuICAgICAgICAgICAgICAgICAgICBpc0VtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHJlY3Vyc2UoY3VyW3BdLCBwcm9wID8gcHJvcCArIFwiLlwiICsgcCA6IHApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eSAmJiBwcm9wKSByZXN1bHRbcHJvcF0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJlY3Vyc2UoZGF0YSwgXCJcIik7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcblxuICAgIEpTT04uZmxhdHRlbjIgPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcmVzdWx0ID0ge307XG5cbiAgICAgICAgZnVuY3Rpb24gcmVjdXJzZShjdXIsIHByb3ApIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QoY3VyKSAhPT0gY3VyKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0W3Byb3BdID0gY3VyO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGN1cikpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGN1ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF90eXBlb2YoY3VyW2ldKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3Vyc2UoY3VyW2ldLCBwcm9wICsgXCJbXCIgKyBpICsgXCJdXCIpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtwcm9wXSA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W3Byb3BdLnB1c2goY3VyW2ldKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAobCA9PSAwKSByZXN1bHRbcHJvcF0gPSBbXTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIGlzRW1wdHkgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gY3VyKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzRW1wdHkgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgcmVjdXJzZShjdXJbcF0sIHByb3AgPyBwcm9wICsgXCIuXCIgKyBwIDogcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChpc0VtcHR5ICYmIHByb3ApIHJlc3VsdFtwcm9wXSA9IHt9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmVjdXJzZShkYXRhLCBcIlwiKTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgSlNPTi51bmZsYXR0ZW4gPSBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICBcInVzZSBzdHJpY3RcIjtcblxuICAgICAgICBpZiAoT2JqZWN0KGRhdGEpICE9PSBkYXRhIHx8IEFycmF5LmlzQXJyYXkoZGF0YSkpIHJldHVybiBkYXRhO1xuICAgICAgICB2YXIgcmVnZXggPSAvXFwuPyhbXi5cXFtcXF1dKyl8XFxbKFxcZCspXFxdL2csXG4gICAgICAgICAgICByZXN1bHRob2xkZXIgPSB7fTtcbiAgICAgICAgZm9yICh2YXIgcCBpbiBkYXRhKSB7XG4gICAgICAgICAgICB2YXIgY3VyID0gcmVzdWx0aG9sZGVyLFxuICAgICAgICAgICAgICAgIHByb3AgPSBcIlwiLFxuICAgICAgICAgICAgICAgIG07XG4gICAgICAgICAgICB3aGlsZSAobSA9IHJlZ2V4LmV4ZWMocCkpIHtcbiAgICAgICAgICAgICAgICBjdXIgPSBjdXJbcHJvcF0gfHwgKGN1cltwcm9wXSA9IG1bMl0gPyBbXSA6IHt9KTtcbiAgICAgICAgICAgICAgICBwcm9wID0gbVsyXSB8fCBtWzFdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VyW3Byb3BdID0gZGF0YVtwXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0aG9sZGVyW1wiXCJdIHx8IHJlc3VsdGhvbGRlcjtcbiAgICB9O1xuXG4gICAgdm0uc2V0SW5kaXJlY3QgPSBmdW5jdGlvbiAoYXJyKSB7XG4gICAgICAgIGZvciAodmFyIGlkeCBpbiBhcnIpIHtcbiAgICAgICAgICAgIGFycltpZHhdLmluZGlyZWN0ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYXJyO1xuICAgIH07XG5cbiAgICB2bS5zcGxpY2VSZWR1bmRhbnRPYmplY3RzID0gZnVuY3Rpb24gKGFyciwga2V5KSB7XG5cbiAgICAgICAgdmFyIGZpbHRlcmVkQnlLZXkgPSB7fTtcbiAgICAgICAgdmFyIGZpbHRlcmVkTWFwID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaWR4IGluIGFycikge1xuICAgICAgICAgICAgdmFyIHRlbXBLZXkgPSBhcnJbaWR4XVtrZXldO1xuICAgICAgICAgICAgaWYgKCEodGVtcEtleSBpbiBmaWx0ZXJlZEJ5S2V5KSkge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkQnlLZXlbdGVtcEtleV0gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZpbHRlcmVkQnlLZXlbdGVtcEtleV0ucHVzaChhcnJbaWR4XSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpZHggaW4gZmlsdGVyZWRCeUtleSkge1xuICAgICAgICAgICAgdmFyIGl0ZW1BcnJheSA9IGdldE15SXRlbShmaWx0ZXJlZEJ5S2V5W2lkeF0pO1xuICAgICAgICAgICAgZm9yICh2YXIgamR4IGluIGl0ZW1BcnJheSkge1xuICAgICAgICAgICAgICAgIGZpbHRlcmVkTWFwLnB1c2goaXRlbUFycmF5W2pkeF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gZ2V0TXlJdGVtKGxpc3QpIHtcbiAgICAgICAgICAgIHZhciBvYmogPSBudWxsO1xuICAgICAgICAgICAgdmFyIHRlbXBBcnJheSA9IFtdO1xuICAgICAgICAgICAgdmFyIGlkID0gbnVsbDtcblxuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIGxpc3QpIHtcbiAgICAgICAgICAgICAgICBpZiAodm0uZ2V0QXNzZXRUeXBlMihsaXN0W2lkeF0uZ3JvdXBwYXRoKSA9PSBhcHBDb25zdGFudHMuR1JPVVApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBJZCA9IHZtLmdldEFzc2V0SWQyKGxpc3RbaWR4XVtrZXldKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlkID09IG51bGwgfHwgdGVtcElkIDwgaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkID0gdGVtcElkO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqID0gbGlzdFtpZHhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmluZGlyZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxpc3RbaWR4XS5pbmRpcmVjdCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB0ZW1wQXJyYXkucHVzaChsaXN0W2lkeF0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvYmogIT0gbnVsbCkgdGVtcEFycmF5LnB1c2gob2JqKTtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wQXJyYXk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gZmlsdGVyZWRNYXA7XG4gICAgfTtcblxuICAgIHZtLmFycmF5RGlmZiA9IGZ1bmN0aW9uIChhcnJheTEsIGFycmF5Miwga2V5KSB7XG5cbiAgICAgICAgaWYgKCFhcnJheTEgfHwgYXJyYXkxICYmICFhcnJheTEubGVuZ3RoKSByZXR1cm4gYXJyYXkyO1xuXG4gICAgICAgIHZhciBmaWx0ZXJlZCA9IFtdO1xuICAgICAgICB2YXIgZm91bmQ7XG5cbiAgICAgICAgZm9yICh2YXIgaWR4IGluIGFycmF5Mikge1xuICAgICAgICAgICAgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZvciAodmFyIGpkeCBpbiBhcnJheTEpIHtcbiAgICAgICAgICAgICAgICBpZiAoYXJyYXkyW2lkeF1ba2V5XSA9PSBhcnJheTFbamR4XVtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWZvdW5kKSBmaWx0ZXJlZC5wdXNoKGFycmF5MltpZHhdKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBmaWx0ZXJlZDtcbiAgICB9O1xuXG4gICAgdm0ucmV0dXJuVmFsdWUgPSBmdW5jdGlvbiAoYmFzZSwgc3RyKSB7XG4gICAgICAgIHZhciBwYXRoID0gc3RyLnNwbGl0KCcuJyk7XG4gICAgICAgIHZhciB0ZW1wUGF0aCA9IFtdO1xuICAgICAgICB2YXIgcGF0aE9iaiA9IHt9O1xuICAgICAgICB2YXIgdGVtcEJhc2UgPSBhbmd1bGFyLmNvcHkoYmFzZSk7XG4gICAgICAgIHZhciBmb3VuZCA9IHRydWU7XG5cbiAgICAgICAgZm9yICh2YXIgaWR4IGluIHBhdGgpIHtcbiAgICAgICAgICAgIHBhdGhPYmpbcGF0aFtpZHhdXSA9IHBhdGhbaWR4XS5zcGxpdCgnWycpO1xuICAgICAgICAgICAgZm9yICh2YXIgamR4IGluIHBhdGhPYmpbcGF0aFtpZHhdXSkge1xuICAgICAgICAgICAgICAgIHRlbXBQYXRoLnB1c2gocGF0aE9ialtwYXRoW2lkeF1dW2pkeF0ucmVwbGFjZSgnXScsICcnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGVtcFBhdGguc2hpZnQoKTtcbiAgICAgICAgaWYgKHRlbXBCYXNlKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gdGVtcFBhdGgpIHtcbiAgICAgICAgICAgICAgICBpZiAoYW5ndWxhci5pc0RlZmluZWQodGVtcEJhc2VbdGVtcFBhdGhbaWR4XV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHRlbXBCYXNlID0gdGVtcEJhc2VbdGVtcFBhdGhbaWR4XV07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghZm91bmQpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHRlbXBCYXNlO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDIvMTEvMjAxNy5cclxuICovXHJcblxyXG5leHBvcnQgY2xhc3MgaGVscGVyU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoJGxvZywgJHEsIGFwcENvbnN0YW50cykge1xyXG4gICAgICAgICduZ0luamVjdCdcclxuXHJcbiAgICAgICAgdmFyIHZtID0gdGhpcztcclxuICAgICAgICAkbG9nLmxvZyhcImhlbHBlclNlcnZpY2VcIik7XHJcblxyXG4gICAgICAgIHZhciBTTEFTSCA9ICcvJztcclxuXHJcbiAgICAgICAgLy8gc2hvdWxkIGJlIHNhbWUgYXMgZGVmaW5lZCBpbiBiYWNrZW5kXHJcbiAgICAgICAgdm0uYXNzZXRUeXBlSWRUb0Fzc2V0VHlwZSA9IHtcclxuICAgICAgICAgICAgMjogYXBwQ29uc3RhbnRzLkdST1VQLFxyXG4gICAgICAgICAgICAzOiBhcHBDb25zdGFudHMuVVNFUixcclxuICAgICAgICAgICAgNDogYXBwQ29uc3RhbnRzLlJPTEUsXHJcbiAgICAgICAgICAgIDU6IGFwcENvbnN0YW50cy5MT0NBTFVTRVIsXHJcbiAgICAgICAgICAgIDQ1OiBhcHBDb25zdGFudHMuVkVISUNMRSxcclxuICAgICAgICAgICAgNTI6IGFwcENvbnN0YW50cy5ERVZJQ0UsXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8vIGdlbmVyYXRpbmcgcmV2ZXJzZSBsb29rdXBcclxuICAgICAgICB2bS5hc3NldFR5cGVUb0Fzc2V0VHlwZUlkID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgYXNzZXRUeXBlVG9Bc3NldFR5cGVJZCA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gdm0uYXNzZXRUeXBlSWRUb0Fzc2V0VHlwZSkge1xyXG4gICAgICAgICAgICAgICAgYXNzZXRUeXBlVG9Bc3NldFR5cGVJZFt2bS5hc3NldFR5cGVJZFRvQXNzZXRUeXBlW2lkeF1dID0gaWR4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhc3NldFR5cGVUb0Fzc2V0VHlwZUlkO1xyXG4gICAgICAgIH0oKTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldEFzc2V0SWQyID0gZnVuY3Rpb24gKHBhdGgpIHtcclxuICAgICAgICAgICAgaWYgKHBhdGggPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRva2VucyA9IHBhdGguc3BsaXQoU0xBU0gpO1xyXG5cclxuICAgICAgICAgICAgaWYodG9rZW5zLmxlbmd0aCA+IDIpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAyXTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRQYXJlbnRQYXRoMiA9IGZ1bmN0aW9uIChwYXRoKSB7XHJcbiAgICAgICAgICAgIGlmIChwYXRoID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIGxldCBzYXZlZGlkeCA9IDA7XHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaWR4ID0gcGF0aC5sZW5ndGggLSAxOyBpZHggPj0gMDsgaWR4LS0pIHtcclxuICAgICAgICAgICAgICAgIGlmKHBhdGhbaWR4XSA9PSBTTEFTSClcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKGNvdW50ID09IDIpIHtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlZGlkeCA9IGlkeDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZihjb3VudCA9PSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKGNvdW50ID09IDUpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcGF0aC5zdWJzdHJpbmcoMCwgc2F2ZWRpZHgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHBhdGg7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldFBhcmVudElkMiA9IGZ1bmN0aW9uIChwYXRoKSB7XHJcbiAgICAgICAgICAgIGlmKHBhdGggPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldEFzc2V0SWQyKHZtLmdldFBhcmVudFBhdGgyKHBhdGgpKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0QXNzZXRUeXBlSWQyID0gZnVuY3Rpb24gKHBhdGgpIHtcclxuICAgICAgICAgICAgaWYocGF0aCA9PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgICAgICAgICBsZXQgdG9rZW5zID0gcGF0aC5zcGxpdChTTEFTSCk7XHJcblxyXG4gICAgICAgICAgICBpZih0b2tlbnMubGVuZ3RoID4gMylcclxuICAgICAgICAgICAgICAgIHJldHVybiB0b2tlbnNbdG9rZW5zLmxlbmd0aCAtIDNdO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldEFzc2V0VHlwZTIgPSBmdW5jdGlvbiAocGF0aCkge1xyXG4gICAgICAgICAgICBpZihwYXRoID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB2bS5hc3NldFR5cGVJZFRvQXNzZXRUeXBlW3ZtLmdldEFzc2V0VHlwZUlkMihwYXRoKV07XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldEFzc2V0TGV2ZWwyID0gZnVuY3Rpb24gKHBhdGgpIHtcclxuICAgICAgICAgICAgaWYgKHBhdGggPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoKHBhdGguc3BsaXQoU0xBU0gpLmxlbmd0aCAtIDEpIC8gMik7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmFkZEFzc2V0SW5mbyA9IGZ1bmN0aW9uIChhc3NldCkge1xyXG4gICAgICAgICAgICBpZiAoYXNzZXQgPT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgYXNzZXQuYXNzZXRpZCA9IHZtLmdldEFzc2V0SWQyKGFzc2V0LmFzc2V0cGF0aCk7XHJcbiAgICAgICAgICAgIGFzc2V0LnBncm91cHBhdGggPSB2bS5nZXRQYXJlbnRQYXRoMihhc3NldC5hc3NldHBhdGgpO1xyXG4gICAgICAgICAgICBhc3NldC5wZ3JvdXBpZCA9IHZtLmdldFBhcmVudElkMihhc3NldC5hc3NldHBhdGgpO1xyXG4gICAgICAgICAgICBhc3NldC51aV9hc3NldF90eXBlID0gdm0uZ2V0QXNzZXRUeXBlMihhc3NldC5hc3NldHBhdGgpO1xyXG4gICAgICAgICAgICBhc3NldC5hc3NldGxldmVsID0gdm0uZ2V0QXNzZXRMZXZlbDIoYXNzZXQuYXNzZXRwYXRoKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZmlsdGVyQXNzZXRHcm91cHMgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBsZXQgZmlsdGVyZWRMaXN0ID0gW107XHJcbiAgICAgICAgICAgIGZvcihsZXQgaWR4IGluIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIGlmKGRhdGFbaWR4XS50YWcgPT0gJ1RFQU0nKVxyXG4gICAgICAgICAgICAgICAgICAgIGZpbHRlcmVkTGlzdC5wdXNoKGRhdGFbaWR4XSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAkcS5yZXNvbHZlKGZpbHRlcmVkTGlzdCk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICAvLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcclxuXHJcbiAgICAgICAgdm0ubWVyZ2VBc3NldFBlcm1pc3Npb25zID0gZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgdmFyIGRhdGEgPSByZXNwLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIGRhdGEuYXNzZXRzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXNzZXQgPSBkYXRhLmFzc2V0c1tpZHhdO1xyXG4gICAgICAgICAgICAgICAgdm0uYWRkQXNzZXRJbmZvKGFzc2V0KTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHBpZHggaW4gZGF0YS5wZXJtaXNzaW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwZXJtaXNzaW9uID0gZGF0YS5wZXJtaXNzaW9uc1twaWR4XTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXNzZXQuYXNzZXRwYXRoID09IHBlcm1pc3Npb24uYXNzZXRwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0LnBlcm1pc3Npb25zID0gSlNPTi5wYXJzZShwZXJtaXNzaW9uLnBlcm1pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShyZXNwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5tZXJnZVVzZXJQZXJtaXNzaW9ucyA9IGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKHJlc3ApO1xyXG4gICAgICAgICAgICB2YXIgdXNlcnNMaXN0ID0gW107XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcFswXS5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiBkYXRhLmFzc2V0cykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFzc2V0ID0gZGF0YS5hc3NldHNbaWR4XTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHBlcm0gaW4gZGF0YS5wZXJtaXNzaW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwZXJtaXNzaW9uID0gZGF0YS5wZXJtaXNzaW9uc1twZXJtXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoYXNzZXQuYXNzZXRwYXRoID09IHBlcm1pc3Npb24uYXNzZXRwYXRoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHVzZXJzTGlzdC5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0cGF0aDogYXNzZXQuYXNzZXRwYXRoLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogYXNzZXQubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBuYW1lOiBhc3NldC5wbmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFzc2V0aWQ6IHBlcm1pc3Npb24uYXNzZXRpZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcm1pZDogcGVybWlzc2lvbi5wZXJtaWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAkcS5yZXNvbHZlKHVzZXJzTGlzdCk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLm1lcmdlQXNzZXRBc3NpZ25tZW50cyA9IGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgIC8vJGxvZy5sb2cocmVzcCk7XHJcbiAgICAgICAgICAgIHZhciBkYXRhID0gcmVzcC5kYXRhLmRhdGE7XHJcbiAgICAgICAgICAgIHZhciBhc3NldCA9IGRhdGEuYXNzZXRbMF07XHJcbiAgICAgICAgICAgIGFzc2V0LmluZm8gPSBkYXRhLmluZm87XHJcbiAgICAgICAgICAgIGFzc2V0LmFzc2cgPSBkYXRhLmFzc2c7XHJcbiAgICAgICAgICAgIGFzc2V0LmFzc2dpbmZvID0gZGF0YS5hc3NnaW5mbztcclxuICAgICAgICAgICAgYXNzZXQucGVybWlzc2lvbnMgPSBKU09OLnBhcnNlKGRhdGEucGVybWlzc2lvbnNbMF0ucGVybWlkKTtcclxuICAgICAgICAgICAgLy8kbG9nLmxvZyhhc3NldCk7XHJcbiAgICAgICAgICAgIHJldHVybiAkcS5yZXNvbHZlKGFzc2V0KTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0ubWVyZ2VGZW5jZUluZm8gPSBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICB2YXIgZGF0YSA9IHJlc3AuZGF0YS5kYXRhO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gZGF0YS5hc3NldHMpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhc3NldCA9IGRhdGEuYXNzZXRzW2lkeF07XHJcbiAgICAgICAgICAgICAgICBhc3NldC5pbmZvID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBwaWR4IGluIGRhdGEuaW5mbykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpdGVtID0gZGF0YS5pbmZvW3BpZHhdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhc3NldC5hc3NldHBhdGggPT0gaXRlbS5hc3NldHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXNzZXQuaW5mby5wdXNoKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICRxLnJlc29sdmUocmVzcCk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLm1ha2VBc3NldE1hcCA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciBhc3NldHMgPSB7fTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIGRhdGEuYXNzZXRzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXNzZXQgPSBkYXRhLmFzc2V0c1tpZHhdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGtleSA9IGdldE15UGF0aChhc3NldCk7XHJcbiAgICAgICAgICAgICAgICB2bS5hZGRBc3NldEluZm8oYXNzZXQpO1xyXG4gICAgICAgICAgICAgICAgYXNzZXRzW2tleV0gPSBhc3NldDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuICRxLnJlc29sdmUoYXNzZXRzKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5tYWtlUGVybWlzc2lvbk1hcCA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciBwZXJtaXNzaW9ucyA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gZGF0YS5wZXJtaXNzaW9ucykge1xyXG4gICAgICAgICAgICAgICAgdmFyIHBlcm1pc3Npb24gPSBkYXRhLnBlcm1pc3Npb25zW2lkeF07XHJcbiAgICAgICAgICAgICAgICB2YXIga2V5ID0gZ2V0TXlQYXRoKHBlcm1pc3Npb24pO1xyXG4gICAgICAgICAgICAgICAgcGVybWlzc2lvbnNba2V5XSA9IHBlcm1pc3Npb247XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiAkcS5yZXNvbHZlKHBlcm1pc3Npb25zKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5tZXJnZU1hcCA9IGZ1bmN0aW9uKG1hcDEsIG1hcDIpe1xyXG4gICAgICAgICAgICBmb3IodmFyIGlkeCBpbiBtYXAxKXtcclxuICAgICAgICAgICAgICAgIGlmKGlkeCBpbiBtYXAyKXtcclxuICAgICAgICAgICAgICAgICAgICBmb3IodmFyIGpkeCBpbiBtYXAyW2lkeF0pe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXAxW2lkeF1bamR4XSA9IG1hcDJbaWR4XVtqZHhdO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbWFwMTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBmdW5jdGlvbiBnZXRNeVBhdGgoYXNzZXQpIHtcclxuICAgICAgICAgICAgdmFyIHR5cGUgPSBhc3NldC5hc3NldHBhdGg7XHJcbiAgICAgICAgICAgIGlmICghdHlwZSkgdHlwZSA9IGFzc2V0Lmdyb3VwcGF0aDtcclxuICAgICAgICAgICAgaWYgKCF0eXBlKSB0eXBlID0gYXNzZXQucm9sZXBhdGg7XHJcbiAgICAgICAgICAgIGlmICghdHlwZSkgdHlwZSA9IGFzc2V0LnVzZXJwYXRoO1xyXG4gICAgICAgICAgICBpZiAoIXR5cGUpIHR5cGUgPSBhc3NldC52ZWhpY2xlcGF0aDtcclxuICAgICAgICAgICAgaWYgKCF0eXBlKSB0eXBlID0gYXNzZXQuZGV2aWNlcGF0aDtcclxuICAgICAgICAgICAgcmV0dXJuIHR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgdm0udmFsaWRhdGVSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgIGlmIChyZXNwICYmIHJlc3AuZGF0YSAmJiByZXNwLmRhdGEuZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuICRxLnJlc29sdmUocmVzcC5kYXRhLmRhdGEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiAkcS5yZWplY3QocmVzcCk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLm1ha2VBc3NldExpc3QgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShkYXRhLmFzc2V0cyk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLm1ha2VNYXBPbkFzc2V0UGF0aCA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIC8vIGRpZmYgd2l0aCBtYWtlQXNzZXRNYXAgaXMgdGhhdCB0aGlzIGZ1bmN0aW9uXHJcbiAgICAgICAgICAgIC8vIGlzIGRpcmVjdGx5IHJlYWRpbmcgZnJvbSB0aGUgYXJyYXlcclxuICAgICAgICAgICAgLy8gdmFyIGRhdGEgPSByZXNwLmRhdGEuZGF0YTtcclxuICAgICAgICAgICAgdmFyIGFzc2V0cyA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFzc2V0ID0gZGF0YVtpZHhdO1xyXG4gICAgICAgICAgICAgICAgLy8gdm0uYWRkQXNzZXRJbmZvKGFzc2V0KTtcclxuICAgICAgICAgICAgICAgIGFzc2V0c1thc3NldC5hc3NldHBhdGhdID0gYXNzZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuICRxLnJlc29sdmUoYXNzZXRzKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uc2xhc2hDb3VudCA9IGZ1bmN0aW9uIChwYXRoKSB7XHJcbiAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaWR4IGluIHBhdGgpIHtcclxuICAgICAgICAgICAgICAgIGlmKHBhdGhbaWR4XSA9PSBTTEFTSClcclxuICAgICAgICAgICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gY291bnQ7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLnNvcnRPbkFzc2V0TGV2ZWwgPSBmdW5jdGlvbiAoaGFzaE9iaikge1xyXG4gICAgICAgICAgICB2YXIgYXJyYXlPYmogPSBbXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIGhhc2hPYmopIHtcclxuICAgICAgICAgICAgICAgIGFycmF5T2JqLnB1c2goaGFzaE9ialtpZHhdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY29tcGFyZShhLCBiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYS5pbmZvLmFzc2V0bGV2ZWwgLSBiLmluZm8uYXNzZXRsZXZlbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgYXJyYXlPYmouc29ydChjb21wYXJlKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiBhcnJheU9iajtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uc29ydFBhdGhzID0gZnVuY3Rpb24gKGFycmF5T2JqKSB7XHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNvbXBhcmUoYSwgYikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLnNsYXNoQ291bnQoYSkgLSB2bS5zbGFzaENvdW50KGIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBhcnJheU9iai5zb3J0KGNvbXBhcmUpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGFycmF5T2JqO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXROZXh0UGF0aEl0ZW1FbmQgPSBmdW5jdGlvbiAoc3RyLCBzdGFydCkge1xyXG4gICAgICAgICAgICB2YXIgc2xhc2ggPSAnLyc7XHJcblxyXG4gICAgICAgICAgICBpZiAoc3RyID09PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXJ0ID09PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgc3RhcnQgPSAwO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0YXJ0IDwgMCB8fCBzdGFydCA+PSBzdHIubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG5cclxuICAgICAgICAgICAgaWYgKHN0ci5jaGFyQXQoc3RhcnQpICE9PSBzbGFzaClcclxuICAgICAgICAgICAgICAgIHJldHVybiAtMTtcclxuXHJcbiAgICAgICAgICAgIGlmIChzdHIuc3Vic3RyKHN0YXJ0LCBzdHIubGVuZ3RoKS5sZW5ndGggPCA0KVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG5cclxuICAgICAgICAgICAgdmFyIGZpcnN0U2xhc2ggPSBzdHIuaW5kZXhPZihzbGFzaCwgc3RhcnQgKyAxKTtcclxuICAgICAgICAgICAgaWYgKGZpcnN0U2xhc2ggIT0gLTEgJiYgZmlyc3RTbGFzaCA8IHN0ci5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2Vjb25kU2xhc2ggPSBzdHIuaW5kZXhPZihzbGFzaCwgZmlyc3RTbGFzaCArIDEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNlY29uZFNsYXNoICE9IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNlY29uZFNsYXNoIC0gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ci5sZW5ndGggLSAxO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE5vZGVzSW5QYXRoID0gZnVuY3Rpb24gKHBhdGgpIHtcclxuICAgICAgICAgICAgaWYgKGFuZ3VsYXIuaXNVbmRlZmluZWQocGF0aCkpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XHJcblxyXG4gICAgICAgICAgICB2YXIgbm9kZXNJblBhdGggPSBbXTtcclxuICAgICAgICAgICAgdmFyIHN0YXJ0SW5kZXggPSAwO1xyXG4gICAgICAgICAgICB2YXIgZW5kSW5kZXggPSAwO1xyXG4gICAgICAgICAgICB2YXIgaXRlbVN0YXJ0SW5kZXggPSAwO1xyXG4gICAgICAgICAgICAvLyRsb2cubG9nKFwiPT09PT09PT09PT09PT09PT09XCIgKyBwYXRoKTtcclxuICAgICAgICAgICAgd2hpbGUgKGl0ZW1TdGFydEluZGV4IDwgcGF0aC5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGVuZEluZGV4ID0gdm0uZ2V0TmV4dFBhdGhJdGVtRW5kKHBhdGgsIGl0ZW1TdGFydEluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmIChlbmRJbmRleCA9PSAtMSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgICAgIC8vJGxvZy5sb2coXCJlbmRJbmRleCBcIiArIGVuZEluZGV4KTtcclxuICAgICAgICAgICAgICAgIGlmIChlbmRJbmRleCA8IHBhdGgubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbm9kZXNJblBhdGgucHVzaChwYXRoLnN1YnN0cmluZyhzdGFydEluZGV4LCBlbmRJbmRleCArIDEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGl0ZW1TdGFydEluZGV4ID0gZW5kSW5kZXggKyAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vJGxvZy5sb2cobm9kZXNJblBhdGgpO1xyXG4gICAgICAgICAgICByZXR1cm4gbm9kZXNJblBhdGg7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIEpTT04uZmxhdHRlbiA9IGZ1bmN0aW9uIChkYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIGZ1bmN0aW9uIHJlY3Vyc2UoY3VyLCBwcm9wKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoT2JqZWN0KGN1cikgIT09IGN1cikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdFtwcm9wXSA9IGN1cjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoQXJyYXkuaXNBcnJheShjdXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBjdXIubGVuZ3RoOyBpIDwgbDsgaSsrKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNlKGN1cltpXSwgcHJvcCArIFwiW1wiICsgaSArIFwiXVwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAobCA9PSAwKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbcHJvcF0gPSBbXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzRW1wdHkgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gY3VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRW1wdHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVjdXJzZShjdXJbcF0sIHByb3AgPyBwcm9wICsgXCIuXCIgKyBwIDogcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0VtcHR5ICYmIHByb3ApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtwcm9wXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZWN1cnNlKGRhdGEsIFwiXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICBKU09OLmZsYXR0ZW4yID0gZnVuY3Rpb24gKGRhdGEpIHtcclxuICAgICAgICAgICAgdmFyIHJlc3VsdCA9IHt9O1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gcmVjdXJzZShjdXIsIHByb3ApIHtcclxuICAgICAgICAgICAgICAgIGlmIChPYmplY3QoY3VyKSAhPT0gY3VyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0W3Byb3BdID0gY3VyO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KGN1cikpIHtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGN1ci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJbaV0gPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWN1cnNlKGN1cltpXSwgcHJvcCArIFwiW1wiICsgaSArIFwiXVwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpID09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbcHJvcF0gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtwcm9wXS5wdXNoKGN1cltpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGwgPT0gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0W3Byb3BdID0gW107XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpc0VtcHR5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBwIGluIGN1cikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0VtcHR5ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlY3Vyc2UoY3VyW3BdLCBwcm9wID8gcHJvcCArIFwiLlwiICsgcCA6IHApO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNFbXB0eSAmJiBwcm9wKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRbcHJvcF0gPSB7fTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmVjdXJzZShkYXRhLCBcIlwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgSlNPTi51bmZsYXR0ZW4gPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICBcInVzZSBzdHJpY3RcIjtcclxuICAgICAgICAgICAgaWYgKE9iamVjdChkYXRhKSAhPT0gZGF0YSB8fCBBcnJheS5pc0FycmF5KGRhdGEpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgICAgICAgIHZhciByZWdleCA9IC9cXC4/KFteLlxcW1xcXV0rKXxcXFsoXFxkKylcXF0vZyxcclxuICAgICAgICAgICAgICAgIHJlc3VsdGhvbGRlciA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIGRhdGEpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjdXIgPSByZXN1bHRob2xkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcCA9IFwiXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgbTtcclxuICAgICAgICAgICAgICAgIHdoaWxlIChtID0gcmVnZXguZXhlYyhwKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1ciA9IGN1cltwcm9wXSB8fCAoY3VyW3Byb3BdID0gKG1bMl0gPyBbXSA6IHt9KSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcCA9IG1bMl0gfHwgbVsxXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGN1cltwcm9wXSA9IGRhdGFbcF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdGhvbGRlcltcIlwiXSB8fCByZXN1bHRob2xkZXI7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLnNldEluZGlyZWN0ID0gZnVuY3Rpb24gKGFycikge1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gYXJyKSB7XHJcbiAgICAgICAgICAgICAgICBhcnJbaWR4XS5pbmRpcmVjdCA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFycjtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uc3BsaWNlUmVkdW5kYW50T2JqZWN0cyA9IGZ1bmN0aW9uIChhcnIsIGtleSkge1xyXG5cclxuICAgICAgICAgICAgdmFyIGZpbHRlcmVkQnlLZXkgPSB7fTtcclxuICAgICAgICAgICAgdmFyIGZpbHRlcmVkTWFwID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gYXJyKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgdGVtcEtleSA9IGFycltpZHhdW2tleV07XHJcbiAgICAgICAgICAgICAgICBpZiAoISh0ZW1wS2V5IGluIGZpbHRlcmVkQnlLZXkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmlsdGVyZWRCeUtleVt0ZW1wS2V5XSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZmlsdGVyZWRCeUtleVt0ZW1wS2V5XS5wdXNoKGFycltpZHhdKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIGZpbHRlcmVkQnlLZXkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBpdGVtQXJyYXkgPSBnZXRNeUl0ZW0oZmlsdGVyZWRCeUtleVtpZHhdKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGpkeCBpbiBpdGVtQXJyYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICBmaWx0ZXJlZE1hcC5wdXNoKGl0ZW1BcnJheVtqZHhdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0TXlJdGVtKGxpc3QpIHtcclxuICAgICAgICAgICAgICAgIHZhciBvYmogPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdmFyIHRlbXBBcnJheSA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdmFyIGlkID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gbGlzdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh2bS5nZXRBc3NldFR5cGUyKGxpc3RbaWR4XS5ncm91cHBhdGgpID09IGFwcENvbnN0YW50cy5HUk9VUCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcElkID0gdm0uZ2V0QXNzZXRJZDIobGlzdFtpZHhdW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaWQgPT0gbnVsbCB8fCB0ZW1wSWQgPCBpZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQgPSB0ZW1wSWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmogPSBsaXN0W2lkeF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouaW5kaXJlY3QgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGlzdFtpZHhdLmluZGlyZWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBBcnJheS5wdXNoKGxpc3RbaWR4XSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAob2JqICE9IG51bGwpIHRlbXBBcnJheS5wdXNoKG9iaik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVtcEFycmF5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWRNYXA7XHJcblxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5hcnJheURpZmYgPSBmdW5jdGlvbiAoYXJyYXkxLCBhcnJheTIsIGtleSkge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFhcnJheTEgfHwgYXJyYXkxICYmICFhcnJheTEubGVuZ3RoKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGFycmF5MjtcclxuXHJcbiAgICAgICAgICAgIHZhciBmaWx0ZXJlZCA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgZm91bmQ7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpZHggaW4gYXJyYXkyKSB7XHJcbiAgICAgICAgICAgICAgICBmb3VuZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgamR4IGluIGFycmF5MSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJheTJbaWR4XVtrZXldID09IGFycmF5MVtqZHhdW2tleV0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghZm91bmQpIGZpbHRlcmVkLnB1c2goYXJyYXkyW2lkeF0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gZmlsdGVyZWQ7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLnJldHVyblZhbHVlID0gZnVuY3Rpb24oYmFzZSwgc3RyKSB7XHJcbiAgICAgICAgICAgIHZhciBwYXRoID0gc3RyLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgIHZhciB0ZW1wUGF0aCA9IFtdO1xyXG4gICAgICAgICAgICB2YXIgcGF0aE9iaiA9IHt9O1xyXG4gICAgICAgICAgICB2YXIgdGVtcEJhc2UgPSBhbmd1bGFyLmNvcHkoYmFzZSk7XHJcbiAgICAgICAgICAgIHZhciBmb3VuZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBmb3IodmFyIGlkeCBpbiBwYXRoKXtcclxuICAgICAgICAgICAgICAgIHBhdGhPYmpbcGF0aFtpZHhdXSA9IHBhdGhbaWR4XS5zcGxpdCgnWycpXHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGpkeCBpbiBwYXRoT2JqW3BhdGhbaWR4XV0pe1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBQYXRoLnB1c2gocGF0aE9ialtwYXRoW2lkeF1dW2pkeF0ucmVwbGFjZSgnXScsJycpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0ZW1wUGF0aC5zaGlmdCgpO1xyXG4gICAgICAgICAgICBpZih0ZW1wQmFzZSl7XHJcbiAgICAgICAgICAgICAgICBmb3IodmFyIGlkeCBpbiB0ZW1wUGF0aCl7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQodGVtcEJhc2VbdGVtcFBhdGhbaWR4XV0pKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGVtcEJhc2UgPSB0ZW1wQmFzZVt0ZW1wUGF0aFtpZHhdXTtcclxuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKCFmb3VuZCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGVtcEJhc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy9oZWxwZXIuc2VydmljZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcclxuICogQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiAyLzExLzIwMTcuXHJcbiAqL1xuXG52YXIgdHJlZURhdGFTZXJ2aWNlID0gZXhwb3J0cy50cmVlRGF0YVNlcnZpY2UgPSBmdW5jdGlvbiB0cmVlRGF0YVNlcnZpY2UoJGxvZywgJHEsIGhlbHBlclNlcnZpY2UsIGdyb3VwQVBJU2VydmljZSkge1xuICAgICduZ0luamVjdCc7XG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgdHJlZURhdGFTZXJ2aWNlKTtcblxuICAgIHZhciB2bSA9IHRoaXM7XG4gICAgJGxvZy5sb2coXCJ0cmVlRGF0YVNlcnZpY2VcIik7XG5cbiAgICB2bS5jb2xsYXBzZWRTdGF0dXMgPSBmYWxzZTtcbiAgICB2bS5nbG9iYWxHZW5lcmljVHJlZSA9IG51bGw7XG5cbiAgICB2bS5nZXRHZW5lcmljVHJlZUluZGV4ID0gZnVuY3Rpb24gKGdlbmVyaWNUcmVlLCBhc3NldCkge1xuICAgICAgICBmb3IgKHZhciBpZHggaW4gZ2VuZXJpY1RyZWUpIHtcbiAgICAgICAgICAgIGlmIChnZW5lcmljVHJlZVtpZHhdLmluZm8uYXNzZXRwYXRoID09IGFzc2V0LmFzc2V0cGF0aCkgcmV0dXJuIGlkeDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2bS5idWlsZE1hbmFnZW1lbnRUcmVlID0gZnVuY3Rpb24gKGdlbmVyaWNUcmVlLCBrZXkpIHtcbiAgICAgICAgLy8kbG9nLmxvZyhcImJ1aWxkTWFuYWdlbWVudFRyZWUgXCIgKyBrZXkpO1xuXG4gICAgICAgIGlmIChnZW5lcmljVHJlZSA9PT0gbnVsbCkgcmV0dXJuIG51bGw7XG5cbiAgICAgICAgaWYgKCEoJ3Zpc2l0ZWQnIGluIGdlbmVyaWNUcmVlW2tleV0pKSB7XG4gICAgICAgICAgICBnZW5lcmljVHJlZVtrZXldLnZpc2l0ZWQgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKGdlbmVyaWNUcmVlW2tleV0udmlzaXRlZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAvLyRsb2cubG9nKFwiQWxyZWFkeSB2aXNpdGVkOiBcIiArIGtleSk7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBndE5vZGUgPSBnZW5lcmljVHJlZVtrZXldO1xuICAgICAgICBndE5vZGUudmlzaXRlZCA9IHRydWU7XG5cbiAgICAgICAgLy8kbG9nLmxvZyhndE5vZGUpO1xuICAgICAgICB2YXIgdXROb2RlID0ge307XG4gICAgICAgIHV0Tm9kZS5pZCA9IGdlbmVyaWNUcmVlW2tleV0uaW5mby5hc3NldHBhdGg7XG4gICAgICAgIHV0Tm9kZS50aXRsZSA9IGd0Tm9kZS5pbmZvLm5hbWU7XG4gICAgICAgIHV0Tm9kZS5pbmZvID0gZ3ROb2RlLmluZm87XG4gICAgICAgIHV0Tm9kZS5pdGVtcyA9IFtdO1xuICAgICAgICB1dE5vZGUuY2hlY2tTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgdXROb2RlLmNvbGxhcHNlZCA9IHZtLmNvbGxhcHNlZFN0YXR1cztcblxuICAgICAgICB2YXIgcmVzdWx0Tm9kZSA9IG51bGw7XG4gICAgICAgIHZhciBjaGlsZCA9IG51bGw7XG4gICAgICAgIGlmIChndE5vZGUuY2hpbGRyZW4gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiBndE5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICBjaGlsZCA9IGd0Tm9kZS5jaGlsZHJlbltpZHhdO1xuICAgICAgICAgICAgICAgIC8vJGxvZy5sb2coXCJwYXJlbnQ6IFwiICsga2V5ICsgXCIsIGNoaWxkID0gXCIgKyBpZHggKyBcIiwgdHlwZSA9IFwiICsgY2hpbGQudWlfYXNzZXRfdHlwZSk7XG4gICAgICAgICAgICAgICAgcmVzdWx0Tm9kZSA9IHZtLmJ1aWxkTWFuYWdlbWVudFRyZWUoZ2VuZXJpY1RyZWUsIHZtLmdldEdlbmVyaWNUcmVlSW5kZXgoZ2VuZXJpY1RyZWUsIGNoaWxkKSk7XG4gICAgICAgICAgICAgICAgLy8kbG9nLmxvZyhyZXN1bHROb2RlKTtcblxuICAgICAgICAgICAgICAgIGlmIChyZXN1bHROb2RlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHV0Tm9kZS5pdGVtcy5wdXNoKHJlc3VsdE5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB1dE5vZGU7XG4gICAgfTtcblxuICAgIHZtLmNyZWF0ZU1hbmFnZW1lbnRUcmVlID0gZnVuY3Rpb24gKHRlbXBUcmVlKSB7XG4gICAgICAgIC8vICRsb2cubG9nKFwiZ2VuZXJpY1RyZWVcIiwgZ2VuZXJpY1RyZWUpO1xuICAgICAgICB2YXIgZ2VuZXJpY1RyZWUgPSB0ZW1wVHJlZVswXTtcbiAgICAgICAgdmFyIGdyb3VwVHJlZSA9IHRlbXBUcmVlWzFdO1xuXG4gICAgICAgIHZhciB1aVRyZWUgPSBbXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGdlbmVyaWNUcmVlKSB7XG4gICAgICAgICAgICB2YXIgcmVzdWx0Tm9kZSA9IHZtLmJ1aWxkTWFuYWdlbWVudFRyZWUoZ2VuZXJpY1RyZWUsIGtleSk7XG4gICAgICAgICAgICBpZiAocmVzdWx0Tm9kZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHVpVHJlZS5wdXNoKHJlc3VsdE5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZtLmdsb2JhbEdlbmVyaWNUcmVlID09IG51bGwpIHtcbiAgICAgICAgICAgIHZtLmdsb2JhbEdlbmVyaWNUcmVlID0gdWlUcmVlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZtLmdsb2JhbEdlbmVyaWNUcmVlWzBdKSB2bS5nbG9iYWxHZW5lcmljVHJlZVswXS5jb2xsYXBzZWQgPSB0cnVlO1xuICAgICAgICBpZiAodm0uZ2xvYmFsR2VuZXJpY1RyZWVbMF0pIHZtLmdsb2JhbEdlbmVyaWNUcmVlWzBdLmxvYWRpbmcgPSBmYWxzZTtcblxuICAgICAgICAvLyAkbG9nLmxvZyhcImNyZWF0ZU1hbmFnZW1lbnRUcmVlXCIsIHVpVHJlZSk7XG4gICAgICAgIHJldHVybiAkcS5yZXNvbHZlKFt1aVRyZWUsIGdyb3VwVHJlZV0pO1xuICAgIH07XG5cbiAgICB2bS5jcmVhdGVHZW5lcmljVHJlZSA9IGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgIC8vICRsb2cubG9nKFwiY3JlYXRlR2VuZXJpY1RyZWVcIiwgcmVzcCk7XG4gICAgICAgIHZhciBncm91cHMgPSByZXNwWzBdO1xuICAgICAgICB2YXIgZ3JvdXBUcmVlID0ge307XG4gICAgICAgIC8vICRsb2cubG9nKFwibXlncm91cHNcIiwgZ3JvdXBzKTtcblxuICAgICAgICBmb3IgKHZhciByaWR4ID0gMDsgcmlkeCA8IHJlc3AubGVuZ3RoOyByaWR4KyspIHtcbiAgICAgICAgICAgIHZhciBhc3NldHMgPSByZXNwW3JpZHhdO1xuICAgICAgICAgICAgLy9hZGQgYWxsIHRoZSBhc3NldCdzIGFsbG93ZWQgcGFyZW50IGhpZXJhcmNoeSB0byBncm91cFRyZWVcbiAgICAgICAgICAgIGZvciAodmFyIGFpZHggaW4gYXNzZXRzKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFzc2V0ID0gYXNzZXRzW2FpZHhdO1xuICAgICAgICAgICAgICAgIC8vJGxvZy5sb2coYXNzZXQpO1xuICAgICAgICAgICAgICAgIHZhciBhc3NldHBhdGggPSBhc3NldC5hc3NldHBhdGg7XG4gICAgICAgICAgICAgICAgdmFyIHBncm91cHBhdGggPSBhc3NldC5wZ3JvdXBwYXRoO1xuXG4gICAgICAgICAgICAgICAgaWYgKCEoYXNzZXRwYXRoIGluIGdyb3VwVHJlZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBUcmVlW2Fzc2V0cGF0aF0gPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgZ3JvdXBUcmVlW2Fzc2V0cGF0aF0uaW5mbyA9IGFzc2V0O1xuICAgICAgICAgICAgICAgICAgICBncm91cFRyZWVbYXNzZXRwYXRoXS5jaGlsZHJlbiA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIC8vIGdyb3VwVHJlZVthc3NldHBhdGhdLmNvbGxhcHNlZCA9IHZtLmNvbGxhcHNlZFN0YXR1cztcblxuICAgICAgICAgICAgICAgICAgICBpZiAocGdyb3VwcGF0aCBpbiBncm91cHMgJiYgcGdyb3VwcGF0aCAhPSBhc3NldHBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHBncm91cHBhdGggaW4gZ3JvdXBUcmVlKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwVHJlZVtwZ3JvdXBwYXRoXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwVHJlZVtwZ3JvdXBwYXRoXS5pbmZvID0gZ3JvdXBzW3Bncm91cHBhdGhdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwVHJlZVtwZ3JvdXBwYXRoXS5jaGlsZHJlbiA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwVHJlZVtwZ3JvdXBwYXRoXS5jaGlsZHJlblthc3NldHBhdGhdID0gYXNzZXQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ3JvdXBUcmVlW3Bncm91cHBhdGhdLmNvbGxhcHNlZCA9IHZtLmNvbGxhcHNlZFN0YXR1cztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwVHJlZVtwZ3JvdXBwYXRoXS5jaGlsZHJlbiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwVHJlZVtwZ3JvdXBwYXRoXS5jaGlsZHJlbiA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cFRyZWVbcGdyb3VwcGF0aF0uY2hpbGRyZW5bYXNzZXRwYXRoXSA9IGFzc2V0O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjcmVhdGVHZW5lcmljVHJlZVwiLCBncm91cFRyZWUpO1xuICAgICAgICB2YXIgYXNzZXRBcnJheSA9IGhlbHBlclNlcnZpY2Uuc29ydE9uQXNzZXRMZXZlbChncm91cFRyZWUpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNyZWF0ZUdlbmVyaWNUcmVlXCIsIGFzc2V0QXJyYXkpO1xuICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShbYXNzZXRBcnJheSwgZ3JvdXBUcmVlXSk7XG4gICAgfTtcblxuICAgIHZtLmhhbmRsZVN1Y2Nlc3MgPSBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICBjb25zb2xlLmxvZygnaGFuZGxlIHN1Y2Nlc3MnKTtcbiAgICAgICAgY29uc29sZS5sb2cocmVzcCk7XG4gICAgICAgIHJldHVybiAkcS5yZXNvbHZlKHJlc3ApO1xuICAgIH07XG5cbiAgICB2bS5oYW5kbGVGYWlsdXJlID0gZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2hhbmRsZSBmYWlsdXJlJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3ApO1xuICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlc3ApO1xuICAgIH07XG5cbiAgICB2bS5nZXRNYW5hZ2VtZW50VHJlZSA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgIHJldHVybiBncm91cEFQSVNlcnZpY2UuZ2V0TXlEaXJlY3RBc3NldHNNYXAoYm9keSkudGhlbih2bS5jcmVhdGVHZW5lcmljVHJlZSwgdm0uaGFuZGxlRmFpbHVyZSkudGhlbih2bS5jcmVhdGVNYW5hZ2VtZW50VHJlZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy90cmVlZGF0YS5zZXJ2aWNlLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gMi8xMS8yMDE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyB0cmVlRGF0YVNlcnZpY2Uge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCRsb2csICRxLCBoZWxwZXJTZXJ2aWNlLCBncm91cEFQSVNlcnZpY2UpIHtcclxuICAgICAgICAnbmdJbmplY3QnXHJcblxyXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICAgICAgJGxvZy5sb2coXCJ0cmVlRGF0YVNlcnZpY2VcIik7XHJcblxyXG4gICAgICAgIHZtLmNvbGxhcHNlZFN0YXR1cyA9IGZhbHNlO1xyXG4gICAgICAgIHZtLmdsb2JhbEdlbmVyaWNUcmVlID0gbnVsbDtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldEdlbmVyaWNUcmVlSW5kZXggPSBmdW5jdGlvbiAoZ2VuZXJpY1RyZWUsIGFzc2V0KSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiBnZW5lcmljVHJlZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGdlbmVyaWNUcmVlW2lkeF0uaW5mby5hc3NldHBhdGggPT0gYXNzZXQuYXNzZXRwYXRoKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpZHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uYnVpbGRNYW5hZ2VtZW50VHJlZSA9IGZ1bmN0aW9uIChnZW5lcmljVHJlZSwga2V5KSB7XHJcbiAgICAgICAgICAgIC8vJGxvZy5sb2coXCJidWlsZE1hbmFnZW1lbnRUcmVlIFwiICsga2V5KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChnZW5lcmljVHJlZSA9PT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYgKCEoJ3Zpc2l0ZWQnIGluIGdlbmVyaWNUcmVlW2tleV0pKSB7XHJcbiAgICAgICAgICAgICAgICBnZW5lcmljVHJlZVtrZXldLnZpc2l0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKGdlbmVyaWNUcmVlW2tleV0udmlzaXRlZCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAvLyRsb2cubG9nKFwiQWxyZWFkeSB2aXNpdGVkOiBcIiArIGtleSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGd0Tm9kZSA9IGdlbmVyaWNUcmVlW2tleV07XHJcbiAgICAgICAgICAgIGd0Tm9kZS52aXNpdGVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIC8vJGxvZy5sb2coZ3ROb2RlKTtcclxuICAgICAgICAgICAgdmFyIHV0Tm9kZSA9IHt9O1xyXG4gICAgICAgICAgICB1dE5vZGUuaWQgPSBnZW5lcmljVHJlZVtrZXldLmluZm8uYXNzZXRwYXRoO1xyXG4gICAgICAgICAgICB1dE5vZGUudGl0bGUgPSBndE5vZGUuaW5mby5uYW1lO1xyXG4gICAgICAgICAgICB1dE5vZGUuaW5mbyA9IGd0Tm9kZS5pbmZvO1xyXG4gICAgICAgICAgICB1dE5vZGUuaXRlbXMgPSBbXTtcclxuICAgICAgICAgICAgdXROb2RlLmNoZWNrU3RhdHVzID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHV0Tm9kZS5jb2xsYXBzZWQgPSB2bS5jb2xsYXBzZWRTdGF0dXM7XHJcblxyXG4gICAgICAgICAgICB2YXIgcmVzdWx0Tm9kZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHZhciBjaGlsZCA9IG51bGw7XHJcbiAgICAgICAgICAgIGlmIChndE5vZGUuY2hpbGRyZW4gIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGlkeCBpbiBndE5vZGUuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBjaGlsZCA9IGd0Tm9kZS5jaGlsZHJlbltpZHhdO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vJGxvZy5sb2coXCJwYXJlbnQ6IFwiICsga2V5ICsgXCIsIGNoaWxkID0gXCIgKyBpZHggKyBcIiwgdHlwZSA9IFwiICsgY2hpbGQudWlfYXNzZXRfdHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0Tm9kZSA9IHZtLmJ1aWxkTWFuYWdlbWVudFRyZWUoZ2VuZXJpY1RyZWUsIHZtLmdldEdlbmVyaWNUcmVlSW5kZXgoZ2VuZXJpY1RyZWUsIGNoaWxkKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8kbG9nLmxvZyhyZXN1bHROb2RlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3VsdE5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdXROb2RlLml0ZW1zLnB1c2gocmVzdWx0Tm9kZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHV0Tm9kZTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uY3JlYXRlTWFuYWdlbWVudFRyZWUgPSBmdW5jdGlvbiAodGVtcFRyZWUpIHtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZW5lcmljVHJlZVwiLCBnZW5lcmljVHJlZSk7XHJcbiAgICAgICAgICAgIHZhciBnZW5lcmljVHJlZSA9IHRlbXBUcmVlWzBdO1xyXG4gICAgICAgICAgICB2YXIgZ3JvdXBUcmVlID0gdGVtcFRyZWVbMV07XHJcblxyXG4gICAgICAgICAgICB2YXIgdWlUcmVlID0gW107XHJcbiAgICAgICAgICAgIGZvciAodmFyIGtleSBpbiBnZW5lcmljVHJlZSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlc3VsdE5vZGUgPSB2bS5idWlsZE1hbmFnZW1lbnRUcmVlKGdlbmVyaWNUcmVlLCBrZXkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdE5vZGUgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB1aVRyZWUucHVzaChyZXN1bHROb2RlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodm0uZ2xvYmFsR2VuZXJpY1RyZWUgPT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgICB2bS5nbG9iYWxHZW5lcmljVHJlZSAgPSB1aVRyZWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHZtLmdsb2JhbEdlbmVyaWNUcmVlWzBdKSB2bS5nbG9iYWxHZW5lcmljVHJlZVswXS5jb2xsYXBzZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBpZih2bS5nbG9iYWxHZW5lcmljVHJlZVswXSkgdm0uZ2xvYmFsR2VuZXJpY1RyZWVbMF0ubG9hZGluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJjcmVhdGVNYW5hZ2VtZW50VHJlZVwiLCB1aVRyZWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShbdWlUcmVlLCBncm91cFRyZWVdKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB2bS5jcmVhdGVHZW5lcmljVHJlZSA9IGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwiY3JlYXRlR2VuZXJpY1RyZWVcIiwgcmVzcCk7XHJcbiAgICAgICAgICAgIHZhciBncm91cHMgPSByZXNwWzBdO1xyXG4gICAgICAgICAgICB2YXIgZ3JvdXBUcmVlID0ge307XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwibXlncm91cHNcIiwgZ3JvdXBzKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIHJpZHggPSAwOyByaWR4IDwgcmVzcC5sZW5ndGg7IHJpZHgrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGFzc2V0cyA9IHJlc3BbcmlkeF07XHJcbiAgICAgICAgICAgICAgICAvL2FkZCBhbGwgdGhlIGFzc2V0J3MgYWxsb3dlZCBwYXJlbnQgaGllcmFyY2h5IHRvIGdyb3VwVHJlZVxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgYWlkeCBpbiBhc3NldHMpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgYXNzZXQgPSBhc3NldHNbYWlkeF07XHJcbiAgICAgICAgICAgICAgICAgICAgLy8kbG9nLmxvZyhhc3NldCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFzc2V0cGF0aCA9IGFzc2V0LmFzc2V0cGF0aDtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGdyb3VwcGF0aCA9IGFzc2V0LnBncm91cHBhdGg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKGFzc2V0cGF0aCBpbiBncm91cFRyZWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwVHJlZVthc3NldHBhdGhdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwVHJlZVthc3NldHBhdGhdLmluZm8gPSBhc3NldDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ3JvdXBUcmVlW2Fzc2V0cGF0aF0uY2hpbGRyZW4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBncm91cFRyZWVbYXNzZXRwYXRoXS5jb2xsYXBzZWQgPSB2bS5jb2xsYXBzZWRTdGF0dXM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGdyb3VwcGF0aCBpbiBncm91cHMgJiYgcGdyb3VwcGF0aCAhPSBhc3NldHBhdGgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghKHBncm91cHBhdGggaW4gZ3JvdXBUcmVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwVHJlZVtwZ3JvdXBwYXRoXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwVHJlZVtwZ3JvdXBwYXRoXS5pbmZvID0gZ3JvdXBzW3Bncm91cHBhdGhdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwVHJlZVtwZ3JvdXBwYXRoXS5jaGlsZHJlbiA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwVHJlZVtwZ3JvdXBwYXRoXS5jaGlsZHJlblthc3NldHBhdGhdID0gYXNzZXQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gZ3JvdXBUcmVlW3Bncm91cHBhdGhdLmNvbGxhcHNlZCA9IHZtLmNvbGxhcHNlZFN0YXR1cztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdyb3VwVHJlZVtwZ3JvdXBwYXRoXS5jaGlsZHJlbiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwVHJlZVtwZ3JvdXBwYXRoXS5jaGlsZHJlbiA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cFRyZWVbcGdyb3VwcGF0aF0uY2hpbGRyZW5bYXNzZXRwYXRoXSA9IGFzc2V0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNyZWF0ZUdlbmVyaWNUcmVlXCIsIGdyb3VwVHJlZSk7XHJcbiAgICAgICAgICAgIHZhciBhc3NldEFycmF5ID0gaGVscGVyU2VydmljZS5zb3J0T25Bc3NldExldmVsKGdyb3VwVHJlZSk7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3JlYXRlR2VuZXJpY1RyZWVcIiwgYXNzZXRBcnJheSk7XHJcbiAgICAgICAgICAgIHJldHVybiAkcS5yZXNvbHZlKFthc3NldEFycmF5LCBncm91cFRyZWVdKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uaGFuZGxlU3VjY2VzcyA9IGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGUgc3VjY2VzcycpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwKTtcclxuICAgICAgICAgICAgcmV0dXJuICRxLnJlc29sdmUocmVzcCk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmhhbmRsZUZhaWx1cmUgPSBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaGFuZGxlIGZhaWx1cmUnKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcCk7XHJcbiAgICAgICAgICAgIHJldHVybiAkcS5yZWplY3QocmVzcCk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE1hbmFnZW1lbnRUcmVlID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdyb3VwQVBJU2VydmljZS5nZXRNeURpcmVjdEFzc2V0c01hcChib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uY3JlYXRlR2VuZXJpY1RyZWUsIHZtLmhhbmRsZUZhaWx1cmUpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5jcmVhdGVNYW5hZ2VtZW50VHJlZSwgdm0uaGFuZGxlRmFpbHVyZSlcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NlcnZpY2VzL3RyZWVkYXRhLnNlcnZpY2UuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXG4gKiBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDIvMTEvMjAxNy5cbiAqL1xudmFyIGxvZ2luU2VydmljZSA9IGV4cG9ydHMubG9naW5TZXJ2aWNlID0gZnVuY3Rpb24gbG9naW5TZXJ2aWNlKCRyb290U2NvcGUsICRsb2csIGF1dGhTZXJ2aWNlLCByZXF1ZXN0U2VydmljZSwgJGluRGlhbG9nKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBsb2dpblNlcnZpY2UpO1xuXG4gICAgJGxvZy5sb2coXCJsb2dpblNlcnZpY2VcIik7XG4gICAgdmFyIHZtID0gdGhpcztcbiAgICB2bS51c2VybmFtZSA9ICcnO1xuICAgIHZtLnBhc3N3b3JkID0gJyc7XG4gICAgdm0ubGlzdGVuZXJzID0ge307XG5cbiAgICB2bS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIChrZXksIGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICghKGtleSBpbiB2bS5saXN0ZW5lcnMpKSB7XG4gICAgICAgICAgICB2bS5saXN0ZW5lcnNba2V5XSA9IFtdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHZtLmxpc3RlbmVyc1trZXldLmluZGV4T2YobGlzdGVuZXIpID09PSAtMSkge1xuICAgICAgICAgICAgdm0ubGlzdGVuZXJzW2tleV0ucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdm0uY2FsbExpc3RlbmVycyA9IGZ1bmN0aW9uIChtc2csIGtleSkge1xuICAgICAgICBpZiAoa2V5IGluIHZtLmxpc3RlbmVycykge1xuICAgICAgICAgICAgZm9yICh2YXIgaWR4IGluIHZtLmxpc3RlbmVyc1trZXldKSB7XG4gICAgICAgICAgICAgICAgdm0ubGlzdGVuZXJzW2tleV1baWR4XShtc2csIGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdm0ubG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2F1dGhlbnRpY2F0ZScsIHtcbiAgICAgICAgICAgIFwidXNlclwiOiB7XG4gICAgICAgICAgICAgICAgZW1haWw6IHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZFxuICAgICAgICAgICAgfVxuICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhyZXNwKTtcbiAgICAgICAgICAgIHZtLnVzZXJuYW1lID0gdXNlcm5hbWU7XG4gICAgICAgICAgICB2bS5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgICAgICAgICAgdm0uY2FsbExpc3RlbmVycyhyZXNwLCAnbG9naW5TdWNjZXNzJyk7XG4gICAgICAgICAgICByZXR1cm4gcmVzcDtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZtLmxvZ291dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgYXV0aFNlcnZpY2UubG9nb3V0ICYmIGF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAkcm9vdFNjb3BlLnNob3dMb2dpbkRpYWxvZyA9IHRydWU7XG4gICAgICAgIHZtLmNoZWNrTG9naW4oKTtcbiAgICB9O1xuXG4gICAgdm0uaXNBdXRoZWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhdXRoU2VydmljZS5pc0F1dGhlZCA/IGF1dGhTZXJ2aWNlLmlzQXV0aGVkKCkgOiBmYWxzZTtcbiAgICB9O1xuXG4gICAgdm0uY2hlY2tMb2dpbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCRyb290U2NvcGUuc2hvd0xvZ2luRGlhbG9nKSB7XG4gICAgICAgICAgICAkaW5EaWFsb2cuc2hvdyh7XG4gICAgICAgICAgICAgICAgY29udHJvbGxlcjogJ0xvZ2luRGlhbG9nQ29udHJvbGxlcicsXG4gICAgICAgICAgICAgICAgdGVtcGxhdGVVcmw6ICdhcHAvbWFpbi9sb2dpbi9sb2dpbi5odG1sJyxcbiAgICAgICAgICAgICAgICBjbGlja091dHNpZGVUb0Nsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBlc2NhcGVUb0Nsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDMwMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogNDAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICByZXF1ZXN0U2VydmljZS5hZGRBdXRoTGlzdGVuZXIodm0uY2hlY2tMb2dpbik7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvc2VydmljZXMvbG9naW4uc2VydmljZS5qcyIsIi8qKlxuICogQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiAyLzExLzIwMTcuXG4gKi9cbmV4cG9ydCBjbGFzcyBsb2dpblNlcnZpY2V7XG5cbiAgICBjb25zdHJ1Y3RvciAoJHJvb3RTY29wZSwgJGxvZywgYXV0aFNlcnZpY2UsIHJlcXVlc3RTZXJ2aWNlLCAkaW5EaWFsb2cpIHtcbiAgICAgICAgJ25nSW5qZWN0J1xuXG4gICAgICAgICRsb2cubG9nKFwibG9naW5TZXJ2aWNlXCIpO1xuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuICAgICAgICB2bS51c2VybmFtZSA9ICcnO1xuICAgICAgICB2bS5wYXNzd29yZCA9ICcnO1xuICAgICAgICB2bS5saXN0ZW5lcnMgPSB7fTtcblxuXG4gICAgICAgIHZtLmFkZExpc3RlbmVyID0gZnVuY3Rpb24gKGtleSwgbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGlmICghKGtleSBpbiB2bS5saXN0ZW5lcnMpKSB7XG4gICAgICAgICAgICAgICAgdm0ubGlzdGVuZXJzW2tleV0gPSBbXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZtLmxpc3RlbmVyc1trZXldLmluZGV4T2YobGlzdGVuZXIpID09PSAtMSkge1xuICAgICAgICAgICAgICAgIHZtLmxpc3RlbmVyc1trZXldLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG5cbiAgICAgICAgdm0uY2FsbExpc3RlbmVycyA9IGZ1bmN0aW9uIChtc2csIGtleSkge1xuICAgICAgICAgICAgaWYgKGtleSBpbiB2bS5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpZHggaW4gdm0ubGlzdGVuZXJzW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdm0ubGlzdGVuZXJzW2tleV1baWR4XShtc2csIGtleSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG5cbiAgICAgICAgdm0ubG9naW4gPSBmdW5jdGlvbiAodXNlcm5hbWUsIHBhc3N3b3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hdXRoZW50aWNhdGUnLCB7XG4gICAgICAgICAgICAgICAgXCJ1c2VyXCI6IHtcbiAgICAgICAgICAgICAgICAgICAgZW1haWw6IHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2cocmVzcCk7XG4gICAgICAgICAgICAgICAgdm0udXNlcm5hbWUgPSB1c2VybmFtZTtcbiAgICAgICAgICAgICAgICB2bS5wYXNzd29yZCA9IHBhc3N3b3JkO1xuICAgICAgICAgICAgICAgIHZtLmNhbGxMaXN0ZW5lcnMocmVzcCwgJ2xvZ2luU3VjY2VzcycpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXNwO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0ubG9nb3V0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgYXV0aFNlcnZpY2UubG9nb3V0ICYmIGF1dGhTZXJ2aWNlLmxvZ291dCgpO1xuICAgICAgICAgICAgJHJvb3RTY29wZS5zaG93TG9naW5EaWFsb2cgPSB0cnVlO1xuICAgICAgICAgICAgdm0uY2hlY2tMb2dpbigpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmlzQXV0aGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIGF1dGhTZXJ2aWNlLmlzQXV0aGVkID8gYXV0aFNlcnZpY2UuaXNBdXRoZWQoKSA6IGZhbHNlO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmNoZWNrTG9naW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJHJvb3RTY29wZS5zaG93TG9naW5EaWFsb2cpIHtcbiAgICAgICAgICAgICAgICAkaW5EaWFsb2cuc2hvdyh7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRyb2xsZXIgOiAnTG9naW5EaWFsb2dDb250cm9sbGVyJyxcbiAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmwgOiAnYXBwL21haW4vbG9naW4vbG9naW4uaHRtbCcsXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrT3V0c2lkZVRvQ2xvc2U6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBlc2NhcGVUb0Nsb3NlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OjMwMCxcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDQwMCxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICByZXF1ZXN0U2VydmljZS5hZGRBdXRoTGlzdGVuZXIodm0uY2hlY2tMb2dpbik7XG4gICAgfVxuXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NlcnZpY2VzL2xvZ2luLnNlcnZpY2UuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gMi8xMS8yMDE3LlxyXG4gKi9cbnZhciBhcHBDb25zdGFudHMgPSBleHBvcnRzLmFwcENvbnN0YW50cyA9IGZ1bmN0aW9uIGFwcENvbnN0YW50cygpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgYXBwQ29uc3RhbnRzKTtcblxuICAgIHJldHVybiB7XG4gICAgICAgIEdST1VQOiAnaW4uaW50ZWxsaWNhci5hc3NldHMuZ3JvdXAnLFxuICAgICAgICBWRUhJQ0xFOiAnaW4uaW50ZWxsaWNhci5hc3NldHMudmVoaWNsZScsXG4gICAgICAgIFVTRVI6ICdpbi5pbnRlbGxpY2FyLmFzc2V0cy51c2VyJyxcbiAgICAgICAgTE9DQUxVU0VSOiAnaW4uaW50ZWxsaWNhci5hc3NldHMudXNlci5sb2NhbHVzZXInLFxuICAgICAgICBST0xFOiAnaW4uaW50ZWxsaWNhci5hc3NldHMucm9sZScsXG4gICAgICAgIERFVklDRTogJ2luLmludGVsbGljYXIuYXNzZXRzLmRldmljZScsXG4gICAgICAgIElORk86ICdpbi5pbnRlbGxpY2FyLmFzc2V0cy5ncm91cCcsXG4gICAgICAgIFBST0ZJTEU6ICdpbi5pbnRlbGxpY2FyLmFzc2V0cy5wcm9maWxlJyxcbiAgICAgICAgU0lNQ0FSRDogJ2luLmludGVsbGljYXIuYXNzZXRzLnNpbWNhcmRzJyxcbiAgICAgICAgUk9PVF9HUk9VUDogJy8yLzYvJ1xuICAgIH07XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvY29uc3RhbnRzL2FwcC5jb25zdGFudHMuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiAyLzExLzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgYXBwQ29uc3RhbnRze1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIEdST1VQOiAnaW4uaW50ZWxsaWNhci5hc3NldHMuZ3JvdXAnLFxyXG4gICAgICAgICAgICBWRUhJQ0xFOiAnaW4uaW50ZWxsaWNhci5hc3NldHMudmVoaWNsZScsXHJcbiAgICAgICAgICAgIFVTRVI6ICdpbi5pbnRlbGxpY2FyLmFzc2V0cy51c2VyJyxcclxuICAgICAgICAgICAgTE9DQUxVU0VSOiAnaW4uaW50ZWxsaWNhci5hc3NldHMudXNlci5sb2NhbHVzZXInLFxyXG4gICAgICAgICAgICBST0xFOiAnaW4uaW50ZWxsaWNhci5hc3NldHMucm9sZScsXHJcbiAgICAgICAgICAgIERFVklDRTogJ2luLmludGVsbGljYXIuYXNzZXRzLmRldmljZScsXHJcbiAgICAgICAgICAgIElORk86ICdpbi5pbnRlbGxpY2FyLmFzc2V0cy5ncm91cCcsXHJcbiAgICAgICAgICAgIFBST0ZJTEU6ICdpbi5pbnRlbGxpY2FyLmFzc2V0cy5wcm9maWxlJyxcclxuICAgICAgICAgICAgU0lNQ0FSRDogJ2luLmludGVsbGljYXIuYXNzZXRzLnNpbWNhcmRzJyxcclxuICAgICAgICAgICAgUk9PVF9HUk9VUDonLzIvNi8nXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9jb25zdGFudHMvYXBwLmNvbnN0YW50cy5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcclxuICogQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiAyLzExLzIwMTcuXHJcbiAqL1xudmFyIHJlcXVlc3RTZXJ2aWNlID0gZXhwb3J0cy5yZXF1ZXN0U2VydmljZSA9IGZ1bmN0aW9uIHJlcXVlc3RTZXJ2aWNlKCRsb2csICRodHRwLCAkcSwgQVBJX0hPU1QsIGF1dGhTZXJ2aWNlKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCByZXF1ZXN0U2VydmljZSk7XG5cbiAgICB2YXIgdm0gPSB0aGlzO1xuICAgIHZhciBhdXRoTGlzdGVuZXJzID0gW107XG4gICAgdmFyIGVycm9yU3RhdHVzQ29kZXMgPSBbNDAwLCA0MDEsIDQwM107XG5cbiAgICAkbG9nLmxvZyhcInJlcXVlc3RTZXJ2aWNlXCIpO1xuXG4gICAgdm0uZ2V0VG9rZW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBhdXRoU2VydmljZS5nZXRUb2tlbigpO1xuICAgIH07XG5cbiAgICB2bS5maXJlUG9zdCA9IGZ1bmN0aW9uIChhcGksIGJvZHksIGF1dGgpIHtcbiAgICAgICAgYXBpID0gQVBJX0hPU1QgKyBhcGk7XG5cbiAgICAgICAgaWYgKGJvZHkgPT09IG51bGwpIGJvZHkgPSB7fTtcblxuICAgICAgICBpZiAoYXV0aCA9PSBudWxsIHx8IGF1dGgpIGF1dGggPSB0cnVlO2Vsc2UgYXV0aCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghYXV0aCkgcmV0dXJuICRodHRwLnBvc3QoYXBpLCBib2R5KTtcblxuICAgICAgICBpZiAoYXV0aFNlcnZpY2UuaXNBdXRoZWQoKSB8fCBhcGkuaW5kZXhPZignZ2V0dG9rZW4nKSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KGFwaSwgYm9keSkuY2F0Y2godm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLmxvZyhcInVzZXIgbm90IGF1dGhlbnRpY2F0ZWRcIik7XG4gICAgICAgICAgICB2bS5jaGVja0xvZ2luKCk7XG4gICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHsgJ2F1dGgnOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2bS5maXJlR2V0ID0gZnVuY3Rpb24gKGFwaSwgYXV0aCkge1xuICAgICAgICBhcGkgPSBBUElfSE9TVCArIGFwaTtcblxuICAgICAgICBpZiAoYXV0aCA9PSBudWxsIHx8IGF1dGgpIGF1dGggPSB0cnVlO2Vsc2UgYXV0aCA9IGZhbHNlO1xuXG4gICAgICAgIGlmICghYXV0aCkgcmV0dXJuICRodHRwLnBvc3QoYXBpKTtcblxuICAgICAgICBpZiAoYXV0aFNlcnZpY2UuaXNBdXRoZWQoKSB8fCBhcGkuaW5kZXhPZignZ2V0dG9rZW4nKSA+IDApIHtcbiAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KGFwaSkuY2F0Y2godm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkbG9nLmxvZyhcInVzZXIgbm90IGF1dGhlbnRpY2F0ZWRcIik7XG4gICAgICAgICAgICB2bS5jaGVja0xvZ2luKCk7XG4gICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHsgJ2F1dGgnOiBmYWxzZSB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICB2bS5oYW5kbGVGYWlsdXJlID0gZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgLy8kbG9nLmxvZyhcIkFQSSByZXR1cm5lZCBlcnJvclwiKTtcbiAgICAgICAgLy8kbG9nLmxvZyhyZXNwKTtcbiAgICAgICAgaWYgKGVycm9yU3RhdHVzQ29kZXMuaW5kZXhPZihyZXNwLnN0YXR1cykgIT0gLTEpIHtcbiAgICAgICAgICAgIC8vJGxvZy5sb2coXCJmYWlsdXJlIHN0YXR1cyBjb2RlXCIpO1xuICAgICAgICAgICAgLy92bS5jaGVja0xvZ2luKHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICRxLnJlamVjdChyZXNwKTtcbiAgICB9O1xuXG4gICAgdm0uY2hlY2tMb2dpbiA9IGZ1bmN0aW9uIChmb3JjZSkge1xuICAgICAgICBpZiAoIWF1dGhTZXJ2aWNlLmlzQXV0aGVkKCkgfHwgZm9yY2UpIHtcbiAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChhdXRoTGlzdGVuZXJzLCBmdW5jdGlvbiAodmFsdWUsIGtleSkge1xuICAgICAgICAgICAgICAgIC8vIGNhbGxpbmcgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAvLyAkbG9nLmxvZyhcImNhbGxpbmcgc2hvdyBsb2dpblwiKTtcbiAgICAgICAgICAgICAgICB2YWx1ZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgdm0uYWRkQXV0aExpc3RlbmVyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIC8vICRsb2cubG9nKCdhZGRpbmcgbG9naW4gY2FsbGJhY2snKTtcbiAgICAgICAgYXV0aExpc3RlbmVycy5wdXNoKGNhbGxiYWNrKTtcbiAgICB9O1xuXG4gICAgLy8gSWYgcmVxdWlyZWQuIEl0IGlzIHBlcmlvZGljYWxseSBjYWxsZWQgZnJvbSBtYWluY29udHJvbGxlciB0byBjaGVjayBmb3IgdmFsaWQgdG9rZW5cbiAgICAvLyBjdXJyZW50bHkgZGlzYWJsZWQgaW4gbWFpbmNvbnRyb2xsZXJcbiAgICB2bS5pc0xvZ2luVG9rZW5WYWxpZCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8kbG9nLmxvZyhcImlzTG9naW5Ub2tlblZhaWxkXCIpO1xuICAgICAgICB2bS5jaGVja0xvZ2luKGZhbHNlKTtcbiAgICB9O1xufTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NlcnZpY2VzL3JlcXVlc3Quc2VydmljZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDIvMTEvMjAxNy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyByZXF1ZXN0U2VydmljZXtcclxuXHJcbiAgICBjb25zdHJ1Y3RvciAoJGxvZywgJGh0dHAsICRxLCBBUElfSE9TVCwgYXV0aFNlcnZpY2UpIHtcclxuICAgICAgICAnbmdJbmplY3QnXHJcblxyXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XHJcbiAgICAgICAgdmFyIGF1dGhMaXN0ZW5lcnMgPSBbXTtcclxuICAgICAgICB2YXIgZXJyb3JTdGF0dXNDb2RlcyA9IFs0MDAsIDQwMSwgNDAzXTtcclxuXHJcbiAgICAgICAgJGxvZy5sb2coXCJyZXF1ZXN0U2VydmljZVwiKTtcclxuXHJcbiAgICAgICAgdm0uZ2V0VG9rZW4gPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGF1dGhTZXJ2aWNlLmdldFRva2VuKCk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uZmlyZVBvc3QgPSBmdW5jdGlvbihhcGksIGJvZHksIGF1dGgpIHtcclxuICAgICAgICAgICAgYXBpID0gQVBJX0hPU1QgKyBhcGk7XHJcblxyXG4gICAgICAgICAgICBpZihib2R5ID09PSBudWxsKVxyXG4gICAgICAgICAgICAgICAgYm9keSA9IHt9O1xyXG5cclxuICAgICAgICAgICAgaWYoYXV0aCA9PSBudWxsIHx8IGF1dGgpXHJcbiAgICAgICAgICAgICAgICBhdXRoID0gdHJ1ZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgYXV0aCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYoIWF1dGgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdChhcGksIGJvZHkpO1xyXG5cclxuICAgICAgICAgICAgaWYoYXV0aFNlcnZpY2UuaXNBdXRoZWQoKSB8fCBhcGkuaW5kZXhPZignZ2V0dG9rZW4nKSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KGFwaSwgYm9keSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2godm0uaGFuZGxlRmFpbHVyZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRsb2cubG9nKFwidXNlciBub3QgYXV0aGVudGljYXRlZFwiKTtcclxuICAgICAgICAgICAgICAgIHZtLmNoZWNrTG9naW4oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkcS5yZWplY3QoeydhdXRoJzogZmFsc2V9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5maXJlR2V0ID0gZnVuY3Rpb24oYXBpLCBhdXRoKSB7XHJcbiAgICAgICAgICAgIGFwaSA9IEFQSV9IT1NUICsgYXBpO1xyXG5cclxuICAgICAgICAgICAgaWYoYXV0aCA9PSBudWxsIHx8IGF1dGgpXHJcbiAgICAgICAgICAgICAgICBhdXRoID0gdHJ1ZTtcclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgYXV0aCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgaWYoIWF1dGgpXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gJGh0dHAucG9zdChhcGkpO1xyXG5cclxuICAgICAgICAgICAgaWYoYXV0aFNlcnZpY2UuaXNBdXRoZWQoKSB8fCBhcGkuaW5kZXhPZignZ2V0dG9rZW4nKSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkaHR0cC5wb3N0KGFwaSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2godm0uaGFuZGxlRmFpbHVyZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRsb2cubG9nKFwidXNlciBub3QgYXV0aGVudGljYXRlZFwiKTtcclxuICAgICAgICAgICAgICAgIHZtLmNoZWNrTG9naW4oKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiAkcS5yZWplY3QoeydhdXRoJzogZmFsc2V9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZtLmhhbmRsZUZhaWx1cmUgPSBmdW5jdGlvbihyZXNwKSB7XHJcbiAgICAgICAgICAgIC8vJGxvZy5sb2coXCJBUEkgcmV0dXJuZWQgZXJyb3JcIik7XHJcbiAgICAgICAgICAgIC8vJGxvZy5sb2cocmVzcCk7XHJcbiAgICAgICAgICAgIGlmKGVycm9yU3RhdHVzQ29kZXMuaW5kZXhPZihyZXNwLnN0YXR1cykgIT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIC8vJGxvZy5sb2coXCJmYWlsdXJlIHN0YXR1cyBjb2RlXCIpO1xyXG4gICAgICAgICAgICAgICAgLy92bS5jaGVja0xvZ2luKHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlc3ApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZtLmNoZWNrTG9naW4gPSBmdW5jdGlvbihmb3JjZSkge1xyXG4gICAgICAgICAgICBpZighYXV0aFNlcnZpY2UuaXNBdXRoZWQoKSB8fCBmb3JjZSkge1xyXG4gICAgICAgICAgICAgICAgYW5ndWxhci5mb3JFYWNoKGF1dGhMaXN0ZW5lcnMsIGZ1bmN0aW9uKHZhbHVlLCBrZXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBjYWxsaW5nIGNhbGxiYWNrXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJjYWxsaW5nIHNob3cgbG9naW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUoKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uYWRkQXV0aExpc3RlbmVyID0gZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coJ2FkZGluZyBsb2dpbiBjYWxsYmFjaycpO1xyXG4gICAgICAgICAgICBhdXRoTGlzdGVuZXJzLnB1c2goY2FsbGJhY2spXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIC8vIElmIHJlcXVpcmVkLiBJdCBpcyBwZXJpb2RpY2FsbHkgY2FsbGVkIGZyb20gbWFpbmNvbnRyb2xsZXIgdG8gY2hlY2sgZm9yIHZhbGlkIHRva2VuXHJcbiAgICAgICAgLy8gY3VycmVudGx5IGRpc2FibGVkIGluIG1haW5jb250cm9sbGVyXHJcbiAgICAgICAgdm0uaXNMb2dpblRva2VuVmFsaWQgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgLy8kbG9nLmxvZyhcImlzTG9naW5Ub2tlblZhaWxkXCIpO1xyXG4gICAgICAgICAgICB2bS5jaGVja0xvZ2luKGZhbHNlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NlcnZpY2VzL3JlcXVlc3Quc2VydmljZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcclxuICogQ3JlYXRlZCBieSBzbWlkZGVsYSBvbiAyNS8wMi8xNy5cclxuICovXG5cbnZhciBhc3NldEFQSVNlcnZpY2UgPSBleHBvcnRzLmFzc2V0QVBJU2VydmljZSA9IGZ1bmN0aW9uIGFzc2V0QVBJU2VydmljZSgkbG9nLCAkcSwgcmVxdWVzdFNlcnZpY2UsIGhlbHBlclNlcnZpY2UsICRpbkVycm9yKSB7XG4gICAgJ25nSW5qZWN0JztcblxuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBhc3NldEFQSVNlcnZpY2UpO1xuXG4gICAgJGxvZy5sb2coXCJhc3NldEFQSVNlcnZpY2VcIik7XG4gICAgdmFyIHZtID0gdGhpcztcblxuICAgIHZtLmRlbGV0ZUFzc2V0ID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2Fzc2V0L2RlbGV0ZScsIGJvZHkpO1xuICAgIH07XG5cbiAgICB2bS5nZXRNeUNyZWF0ZUFzc2V0UGVybUluZm8gPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvYXNzZXQvZ2V0bXljcmVhdGVhc3NldHBlcm1pbmZvJywgYm9keSk7XG4gICAgfTtcblxuICAgIHZtLmdldE15RWRpdERlbGV0ZUFzc2V0UGVybUluZm8gPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvYXNzZXQvZ2V0bXllZGl0ZGVsZXRlYXNzZXRwZXJtaW5mbycsIGJvZHkpO1xuICAgIH07XG5cbiAgICB2bS52YWxpZGF0ZUFzc2V0TmFtZSA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9hc3NldC92YWxpZGF0ZWFzc2V0bmFtZScsIGJvZHkpO1xuICAgIH07XG5cbiAgICB2bS5oYW5kbGVSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgIC8vJGxvZy5sb2coXCJoYW5kbGVSZXNwb25zZVwiKTtcbiAgICAgICAgcmV0dXJuICRxLnJlc29sdmUocmVzcCk7XG4gICAgfTtcblxuICAgIHZtLmhhbmRsZUZhaWx1cmUgPSBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAkaW5FcnJvci5hZGQocmVzcCk7XG4gICAgICAgICRsb2cubG9nKFwiaGFuZGxlRmFpbHVyZSBcIiwgcmVzcCk7XG4gICAgICAgIHJldHVybiAkcS5yZWplY3QocmVzcCk7XG4gICAgfTtcblxuICAgIHZtLmdldE15RWRpdERlbGV0ZUFzc2V0UGVybUluZm9NYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICByZXR1cm4gdm0uZ2V0TXlFZGl0RGVsZXRlQXNzZXRQZXJtSW5mbyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VQZXJtaXNzaW9uTWFwKS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICB9O1xuXG4gICAgdm0uZ2V0TXlDcmVhdGVBc3NldFBlcm1JbmZvTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgcmV0dXJuIHZtLmdldE15Q3JlYXRlQXNzZXRQZXJtSW5mbyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy9hc3NldC5hcGkuc2VydmljZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHNtaWRkZWxhIG9uIDI1LzAyLzE3LlxyXG4gKi9cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgYXNzZXRBUElTZXJ2aWNle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgkbG9nLCAkcSwgcmVxdWVzdFNlcnZpY2UsIGhlbHBlclNlcnZpY2UsICRpbkVycm9yKSB7XHJcbiAgICAgICAgJ25nSW5qZWN0J1xyXG4gICAgICAgICRsb2cubG9nKFwiYXNzZXRBUElTZXJ2aWNlXCIpO1xyXG4gICAgICAgIHZhciB2bSA9IHRoaXM7XHJcblxyXG5cclxuICAgICAgICB2bS5kZWxldGVBc3NldCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9hc3NldC9kZWxldGUnLCBib2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5nZXRNeUNyZWF0ZUFzc2V0UGVybUluZm8gPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvYXNzZXQvZ2V0bXljcmVhdGVhc3NldHBlcm1pbmZvJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uZ2V0TXlFZGl0RGVsZXRlQXNzZXRQZXJtSW5mbyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9hc3NldC9nZXRteWVkaXRkZWxldGVhc3NldHBlcm1pbmZvJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0udmFsaWRhdGVBc3NldE5hbWUgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvYXNzZXQvdmFsaWRhdGVhc3NldG5hbWUnLCBib2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uaGFuZGxlUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAvLyRsb2cubG9nKFwiaGFuZGxlUmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIHJldHVybiAkcS5yZXNvbHZlKHJlc3ApO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5oYW5kbGVGYWlsdXJlID0gZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgJGluRXJyb3IuYWRkKHJlc3ApO1xyXG4gICAgICAgICAgICAkbG9nLmxvZyhcImhhbmRsZUZhaWx1cmUgXCIsIHJlc3ApO1xyXG4gICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlc3ApO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeUVkaXREZWxldGVBc3NldFBlcm1JbmZvTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15RWRpdERlbGV0ZUFzc2V0UGVybUluZm8oYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UubWFrZVBlcm1pc3Npb25NYXApXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uZ2V0TXlDcmVhdGVBc3NldFBlcm1JbmZvTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15Q3JlYXRlQXNzZXRQZXJtSW5mbyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NlcnZpY2VzL2Fzc2V0LmFwaS5zZXJ2aWNlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcclxuICogQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiAyLzExLzIwMTcuXHJcbiAqL1xudmFyIGdyb3VwQVBJU2VydmljZSA9IGV4cG9ydHMuZ3JvdXBBUElTZXJ2aWNlID0gZnVuY3Rpb24gZ3JvdXBBUElTZXJ2aWNlKCRsb2csICRxLCByZXF1ZXN0U2VydmljZSwgaGVscGVyU2VydmljZSwgYXBwQ29uc3RhbnRzLCAkaW5FcnJvcikge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBncm91cEFQSVNlcnZpY2UpO1xuXG4gICAgICAgICRsb2cubG9nKFwiZ3JvdXBBUElTZXJ2aWNlXCIpO1xuICAgICAgICB2YXIgdm0gPSB0aGlzO1xuXG4gICAgICAgIHZhciByb290X3Bncm91cHBhdGggPSAnLzIvNi8nO1xuXG4gICAgICAgIHZtLmVuY2xvc2VCb2R5ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgICAgICByZXR1cm4geyBncm91cDogZGF0YSB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldEFzc2V0VHlwZSA9IGZ1bmN0aW9uICh0eXBlLCBib2R5KSB7XG5cbiAgICAgICAgICAgICAgICBib2R5ID0gYW5ndWxhci5jb3B5KGJvZHkpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFib2R5LnBncm91cHBhdGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHkucGdyb3VwcGF0aCA9IHJvb3RfcGdyb3VwcGF0aDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFib2R5LmFzc2V0dHlwZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keS5hc3NldHR5cGUgPSB0eXBlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHJldHVybiBib2R5O1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmxpc3RBc3NldHMgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIC8vICRsb2cubG9nKFwibGlzdEFzc2V0c1wiKTtcbiAgICAgICAgICAgICAgICAvLyBib2R5ID0ge31cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvZ3JvdXAvbGlzdGFzc2V0cycsIGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15R3JvdXBzID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15R3JvdXBzXCIpO1xuICAgICAgICAgICAgICAgIGJvZHkgPSB2bS5nZXRBc3NldFR5cGUoYXBwQ29uc3RhbnRzLkdST1VQLCBib2R5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0ubGlzdEFzc2V0cyhib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeURpcmVjdEdyb3VwcyA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeUdyb3Vwc1wiKTtcbiAgICAgICAgICAgICAgICBib2R5ID0gdm0uZ2V0QXNzZXRUeXBlKGFwcENvbnN0YW50cy5HUk9VUCwgYm9keSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3VzZXIvZ2V0bXlncm91cHMnLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeVZlaGljbGVzID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15VmVoaWNsZXNcIik7XG4gICAgICAgICAgICAgICAgYm9keSA9IHZtLmdldEFzc2V0VHlwZShhcHBDb25zdGFudHMuVkVISUNMRSwgYm9keSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmxpc3RBc3NldHMoYm9keSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlVc2VycyA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeVVzZXJzXCIpO1xuICAgICAgICAgICAgICAgIGJvZHkgPSB2bS5nZXRBc3NldFR5cGUoYXBwQ29uc3RhbnRzLlVTRVIsIGJvZHkpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5saXN0QXNzZXRzKGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15Um9sZXMgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlSb2xlc1wiKTtcbiAgICAgICAgICAgICAgICBib2R5ID0gdm0uZ2V0QXNzZXRUeXBlKGFwcENvbnN0YW50cy5ST0xFLCBib2R5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0ubGlzdEFzc2V0cyhib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeURldmljZXMgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlEZXZpY2VzXCIpO1xuICAgICAgICAgICAgICAgIGJvZHkgPSB2bS5nZXRBc3NldFR5cGUoYXBwQ29uc3RhbnRzLkRFVklDRSwgYm9keSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmxpc3RBc3NldHMoYm9keSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uYXNzaWduVXNlciA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2dyb3VwL2Fzc2lnbnVzZXInLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5kZWFzc2lnblVzZXIgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9ncm91cC9kZWFzc2lnbnVzZXInLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5hc3NpZ25Sb2xlID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvZ3JvdXAvYXNzaWducm9sZScsIGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmRlYXNzaWduUm9sZSA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2dyb3VwL2RlYXNzaWducm9sZScsIGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldEFzc2lnbmVkVXNlcnMgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9ncm91cC9nZXRhc3NpZ25lZHVzZXJzJywgYm9keSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0QXNzaWduZWRSb2xlcyA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2dyb3VwL2dldGFzc2lnbmVkcm9sZXMnLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeUFzc2lnbmFibGVVc2VycyA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2dyb3VwL2dldG15YXNzaWduYWJsZXVzZXJzJywgYm9keSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlBc3NpZ25hYmxlUm9sZXMgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9ncm91cC9nZXRteWFzc2lnbmFibGVyb2xlcycsIGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmRlbGV0ZUFzc2V0ID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvYXNzZXQvZGVsZXRlJywgYm9keSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uY3JlYXRlR3JvdXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9ncm91cC9jcmVhdGUnLCBib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uaGFuZGxlUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgIC8vJGxvZy5sb2coXCJoYW5kbGVSZXNwb25zZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShyZXNwKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5oYW5kbGVGYWlsdXJlID0gZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICAkaW5FcnJvci5hZGQocmVzcCk7XG4gICAgICAgICAgICAgICAgJGxvZy5sb2coXCJoYW5kbGVGYWlsdXJlIFwiLCByZXNwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlc3ApO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmxpc3RBc3NldHNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5saXN0QXNzZXRzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKS50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TWFwKS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRBc3NpZ25lZFJvbGVzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0QXNzaWduZWRSb2xlcyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15QXNzaWduYWJsZVVzZXJzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlBc3NpZ25hYmxlVXNlcnMoYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0KS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeUFzc2lnbmFibGVSb2xlc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15QXNzaWduYWJsZVJvbGVzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKS50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TGlzdCkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0QXNzaWduZWRVc2Vyc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmdldEFzc2lnbmVkVXNlcnMoYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0KS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeUdyb3Vwc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeUdyb3Vwc01hcFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlHcm91cHMoYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXApLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15RGlyZWN0R3JvdXBzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15R3JvdXBzTWFwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeURpcmVjdEdyb3Vwcyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldE1hcCkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlWZWhpY2xlc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8kbG9nLmxvZyhcImdldE15VmVoaWNsZXNNYXBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15VmVoaWNsZXMoYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXApLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15VXNlcnNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIC8vJGxvZy5sb2coXCJnZXRNeVVzZXJzTWFwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeVVzZXJzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKS50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TWFwKS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeVVzZXJzTWFwTGlzdCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8kbG9nLmxvZyhcImdldE15VXNlcnNNYXBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15VXNlcnMoYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0KS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeVJvbGVzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15Um9sZXNNYXBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15Um9sZXMoYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXApLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15Um9sZXNMaXN0ID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15Um9sZXNNYXBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15Um9sZXMoYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0KS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeURldmljZXNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlEZXZpY2VzTWFwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeURldmljZXMoYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLm1lcmdlQXNzZXRQZXJtaXNzaW9ucykudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldE1hcCkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uaGFuZGxlRGlyZWN0QXNzZXRSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJncm91cEFQSVNlcnZpY2UgaGFuZGxlRGlyZWN0QXNzZXRSZXNwb25zZVwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShyZXNwKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeURpcmVjdEFzc2V0c01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8kbG9nLmxvZyhcImdyb3VwQVBJU2VydmljZSBnZXRNeURpcmVjdEFzc2V0c01hcFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgZ1Byb21pc2UgPSB2bS5nZXRNeURpcmVjdEdyb3Vwc01hcChib2R5KTtcbiAgICAgICAgICAgICAgICAvLyB2YXIgdlByb21pc2UgPSB2bS5nZXRNeVZlaGljbGVzTWFwKGJvZHkpO1xuICAgICAgICAgICAgICAgIC8vIHZhciB1UHJvbWlzZSA9IHZtLmdldE15VXNlcnNNYXAoYm9keSk7XG4gICAgICAgICAgICAgICAgLy8gdmFyIHJQcm9taXNlID0gdm0uZ2V0TXlSb2xlc01hcChib2R5KTtcbiAgICAgICAgICAgICAgICAvLyB2YXIgZFByb21pc2UgPSB2bS5nZXRNeURldmljZXNNYXAoYm9keSk7XG5cbiAgICAgICAgICAgICAgICAvLyByZXR1cm4gJHEuYWxsKFtnUHJvbWlzZSwgdlByb21pc2UsIHVQcm9taXNlLCByUHJvbWlzZSwgZFByb21pc2VdKVxuICAgICAgICAgICAgICAgIHJldHVybiAkcS5hbGwoW2dQcm9taXNlXSkudGhlbih2bS5oYW5kbGVEaXJlY3RBc3NldFJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy9ncm91cC5hcGkuc2VydmljZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDIvMTEvMjAxNy5cclxuICovXHJcbmV4cG9ydCBjbGFzcyBncm91cEFQSVNlcnZpY2V7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKCRsb2csICRxLCByZXF1ZXN0U2VydmljZSwgaGVscGVyU2VydmljZSwgYXBwQ29uc3RhbnRzLCAkaW5FcnJvcikge1xyXG4gICAgICAgICduZ0luamVjdCdcclxuICAgICAgICAkbG9nLmxvZyhcImdyb3VwQVBJU2VydmljZVwiKTtcclxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG5cclxuICAgICAgICB2YXIgcm9vdF9wZ3JvdXBwYXRoID0gJy8yLzYvJztcclxuXHJcbiAgICAgICAgdm0uZW5jbG9zZUJvZHkgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIHtncm91cDogZGF0YX07XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uZ2V0QXNzZXRUeXBlID0gZnVuY3Rpb24gKHR5cGUsIGJvZHkpIHtcclxuXHJcbiAgICAgICAgICAgIGJvZHkgPSBhbmd1bGFyLmNvcHkoYm9keSk7XHJcblxyXG4gICAgICAgICAgICBpZighYm9keS5wZ3JvdXBwYXRoKXtcclxuICAgICAgICAgICAgICAgIGJvZHkucGdyb3VwcGF0aCA9IHJvb3RfcGdyb3VwcGF0aDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZighYm9keS5hc3NldHR5cGUpe1xyXG4gICAgICAgICAgICAgICAgYm9keS5hc3NldHR5cGUgPSB0eXBlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gYm9keTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5saXN0QXNzZXRzID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJsaXN0QXNzZXRzXCIpO1xyXG4gICAgICAgICAgICAvLyBib2R5ID0ge31cclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2dyb3VwL2xpc3Rhc3NldHMnLCBib2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5nZXRNeUdyb3VwcyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlHcm91cHNcIik7XHJcbiAgICAgICAgICAgIGJvZHkgPSB2bS5nZXRBc3NldFR5cGUoYXBwQ29uc3RhbnRzLkdST1VQLCBib2R5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmxpc3RBc3NldHMoYm9keSlcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5nZXRNeURpcmVjdEdyb3VwcyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlHcm91cHNcIik7XHJcbiAgICAgICAgICAgIGJvZHkgPSB2bS5nZXRBc3NldFR5cGUoYXBwQ29uc3RhbnRzLkdST1VQLCBib2R5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3VzZXIvZ2V0bXlncm91cHMnLCBib2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5nZXRNeVZlaGljbGVzID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeVZlaGljbGVzXCIpO1xyXG4gICAgICAgICAgICBib2R5ID0gdm0uZ2V0QXNzZXRUeXBlKGFwcENvbnN0YW50cy5WRUhJQ0xFLCBib2R5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmxpc3RBc3NldHMoYm9keSlcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0TXlVc2VycyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlVc2Vyc1wiKTtcclxuICAgICAgICAgICAgYm9keSA9IHZtLmdldEFzc2V0VHlwZShhcHBDb25zdGFudHMuVVNFUiwgYm9keSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5saXN0QXNzZXRzKGJvZHkpXHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15Um9sZXMgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15Um9sZXNcIik7XHJcbiAgICAgICAgICAgIGJvZHkgPSB2bS5nZXRBc3NldFR5cGUoYXBwQ29uc3RhbnRzLlJPTEUsIGJvZHkpO1xyXG4gICAgICAgICAgICByZXR1cm4gdm0ubGlzdEFzc2V0cyhib2R5KVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeURldmljZXMgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15RGV2aWNlc1wiKTtcclxuICAgICAgICAgICAgYm9keSA9IHZtLmdldEFzc2V0VHlwZShhcHBDb25zdGFudHMuREVWSUNFLCBib2R5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmxpc3RBc3NldHMoYm9keSlcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uYXNzaWduVXNlciA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9ncm91cC9hc3NpZ251c2VyJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uZGVhc3NpZ25Vc2VyID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2dyb3VwL2RlYXNzaWdudXNlcicsIGJvZHkpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5hc3NpZ25Sb2xlID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2dyb3VwL2Fzc2lnbnJvbGUnLCBib2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZGVhc3NpZ25Sb2xlID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2dyb3VwL2RlYXNzaWducm9sZScsIGJvZHkpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRBc3NpZ25lZFVzZXJzID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2dyb3VwL2dldGFzc2lnbmVkdXNlcnMnLCBib2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0QXNzaWduZWRSb2xlcyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9ncm91cC9nZXRhc3NpZ25lZHJvbGVzJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15QXNzaWduYWJsZVVzZXJzID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2dyb3VwL2dldG15YXNzaWduYWJsZXVzZXJzJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15QXNzaWduYWJsZVJvbGVzID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2dyb3VwL2dldG15YXNzaWduYWJsZXJvbGVzJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmRlbGV0ZUFzc2V0ID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2Fzc2V0L2RlbGV0ZScsIGJvZHkpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZtLmNyZWF0ZUdyb3VwID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2dyb3VwL2NyZWF0ZScsIGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UgKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcblxyXG4gICAgICAgIHZtLmhhbmRsZVJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgLy8kbG9nLmxvZyhcImhhbmRsZVJlc3BvbnNlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShyZXNwKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uaGFuZGxlRmFpbHVyZSA9IGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgICRpbkVycm9yLmFkZChyZXNwKTtcclxuICAgICAgICAgICAgJGxvZy5sb2coXCJoYW5kbGVGYWlsdXJlIFwiLCByZXNwKTtcclxuICAgICAgICAgICAgcmV0dXJuICRxLnJlamVjdChyZXNwKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5saXN0QXNzZXRzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmxpc3RBc3NldHMoYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSApXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldE1hcClcclxuICAgICAgICAgICAgICAgIC50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5nZXRBc3NpZ25lZFJvbGVzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldEFzc2lnbmVkUm9sZXMoYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSApXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15QXNzaWduYWJsZVVzZXJzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15QXNzaWduYWJsZVVzZXJzKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15QXNzaWduYWJsZVJvbGVzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15QXNzaWduYWJsZVJvbGVzKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldEFzc2lnbmVkVXNlcnNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uZ2V0QXNzaWduZWRVc2Vycyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeUdyb3Vwc01hcCA9IGZ1bmN0aW9uKGJvZHkpIHtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeUdyb3Vwc01hcFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15R3JvdXBzKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldE1hcClcclxuICAgICAgICAgICAgICAgIC50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5nZXRNeURpcmVjdEdyb3Vwc01hcCA9IGZ1bmN0aW9uKGJvZHkpIHtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeUdyb3Vwc01hcFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15RGlyZWN0R3JvdXBzKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldE1hcClcclxuICAgICAgICAgICAgICAgIC50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5nZXRNeVZlaGljbGVzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgLy8kbG9nLmxvZyhcImdldE15VmVoaWNsZXNNYXBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeVZlaGljbGVzKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldE1hcClcclxuICAgICAgICAgICAgICAgIC50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0TXlVc2Vyc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIC8vJGxvZy5sb2coXCJnZXRNeVVzZXJzTWFwXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlVc2Vycyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXApXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uZ2V0TXlVc2Vyc01hcExpc3QgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICAvLyRsb2cubG9nKFwiZ2V0TXlVc2Vyc01hcFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15VXNlcnMoYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TGlzdClcclxuICAgICAgICAgICAgICAgIC50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeVJvbGVzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeVJvbGVzTWFwXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlSb2xlcyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXApXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdm0uZ2V0TXlSb2xlc0xpc3QgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15Um9sZXNNYXBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeVJvbGVzKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeURldmljZXNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15RGV2aWNlc01hcFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15RGV2aWNlcyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tZXJnZUFzc2V0UGVybWlzc2lvbnMpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldE1hcClcclxuICAgICAgICAgICAgICAgIC50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uaGFuZGxlRGlyZWN0QXNzZXRSZXNwb25zZSA9IGZ1bmN0aW9uKHJlc3ApIHtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJncm91cEFQSVNlcnZpY2UgaGFuZGxlRGlyZWN0QXNzZXRSZXNwb25zZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuICRxLnJlc29sdmUocmVzcCk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeURpcmVjdEFzc2V0c01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIC8vJGxvZy5sb2coXCJncm91cEFQSVNlcnZpY2UgZ2V0TXlEaXJlY3RBc3NldHNNYXBcIik7XHJcbiAgICAgICAgICAgIHZhciBnUHJvbWlzZSA9IHZtLmdldE15RGlyZWN0R3JvdXBzTWFwKGJvZHkpO1xyXG4gICAgICAgICAgICAvLyB2YXIgdlByb21pc2UgPSB2bS5nZXRNeVZlaGljbGVzTWFwKGJvZHkpO1xyXG4gICAgICAgICAgICAvLyB2YXIgdVByb21pc2UgPSB2bS5nZXRNeVVzZXJzTWFwKGJvZHkpO1xyXG4gICAgICAgICAgICAvLyB2YXIgclByb21pc2UgPSB2bS5nZXRNeVJvbGVzTWFwKGJvZHkpO1xyXG4gICAgICAgICAgICAvLyB2YXIgZFByb21pc2UgPSB2bS5nZXRNeURldmljZXNNYXAoYm9keSk7XHJcblxyXG4gICAgICAgICAgICAvLyByZXR1cm4gJHEuYWxsKFtnUHJvbWlzZSwgdlByb21pc2UsIHVQcm9taXNlLCByUHJvbWlzZSwgZFByb21pc2VdKVxyXG4gICAgICAgICAgICByZXR1cm4gJHEuYWxsKFtnUHJvbWlzZV0pXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVEaXJlY3RBc3NldFJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3NlcnZpY2VzL2dyb3VwLmFwaS5zZXJ2aWNlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcclxuICogQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiAyLzExLzIwMTcuXHJcbiAqL1xuXG52YXIgdXNlckFQSVNlcnZpY2UgPSBleHBvcnRzLnVzZXJBUElTZXJ2aWNlID0gZnVuY3Rpb24gdXNlckFQSVNlcnZpY2UoJGxvZywgJHEsIHJlcXVlc3RTZXJ2aWNlLCBoZWxwZXJTZXJ2aWNlLCAkaW5FcnJvcikge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCB1c2VyQVBJU2VydmljZSk7XG5cbiAgICAgICAgJGxvZy5sb2coXCJ1c2VyQVBJU2VydmljZVwiKTtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcblxuICAgICAgICB2bS5lbmNsb3NlQm9keSA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHsgdXNlcjogZGF0YSB9O1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15R3JvdXBzID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15R3JvdXBzXCIpO1xuICAgICAgICAgICAgICAgIC8vIGJvZHkgPSB2bS5lbmNsb3NlQm9keShib2R5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvZ3JvdXAvbGlzdGFzc2V0cycsIGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldEFzc2lnbmVkR3JvdXBzID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15R3JvdXBzXCIpO1xuICAgICAgICAgICAgICAgIC8vIGJvZHkgPSB2bS5lbmNsb3NlQm9keShib2R5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvdXNlci9nZXRhc3NpZ25lZGdyb3VwcycsIGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldEFzc2lnbmVkUm9sZXMgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlHcm91cHNcIik7XG4gICAgICAgICAgICAgICAgLy8gYm9keSA9IHZtLmVuY2xvc2VCb2R5KGJvZHkpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS91c2VyL2dldGFzc2lnbmVkcm9sZXMnLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeUFzc2lnbmFibGVHcm91cHMgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS91c2VyL2dldG15YXNzaWduYWJsZWdyb3VwcycsIGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15QXNzaWduYWJsZVJvbGVzID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvdXNlci9nZXRteWFzc2lnbmFibGVyb2xlcycsIGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmFzc2lnblJvbGUgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS91c2VyL2Fzc2lnbnJvbGUnLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5kZWFzc2lnblJvbGUgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS91c2VyL2RlYXNzaWducm9sZScsIGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmNyZWF0ZVVzZXIgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS91c2VyL2NyZWF0ZWxvY2FsdXNlcicsIGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5oYW5kbGVSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJoYW5kbGVSZXNwb25zZVwiKTtcbiAgICAgICAgICAgICAgICAvLyAkbG9nLmxvZyhyZXNwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShyZXNwKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5oYW5kbGVGYWlsdXJlID0gZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcImhhbmRsZUZhaWx1cmUgXCIpO1xuICAgICAgICAgICAgICAgICRpbkVycm9yLmFkZChyZXNwKTtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhyZXNwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlc3ApO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldEFzc2lnbmVkUm9sZXNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRBc3NpZ25lZFJvbGVzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKS50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TGlzdCkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlBc3NpZ25hYmxlUm9sZXNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeUFzc2lnbmFibGVSb2xlcyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15QXNzaWduYWJsZUdyb3Vwc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15QXNzaWduYWJsZUdyb3Vwcyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpLnRoZW4oaGVscGVyU2VydmljZS5maWx0ZXJBc3NldEdyb3VwcykudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0QXNzaWduZWRHcm91cHNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRBc3NpZ25lZEdyb3Vwcyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15R3JvdXBzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15R3JvdXBzTWFwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeUdyb3Vwcyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldE1hcCwgdm0uaGFuZGxlRmFpbHVyZSkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlBc3NpZ25lZEdyb3Vwc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeUdyb3Vwc01hcFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlBc3NpZ25lZEdyb3Vwcyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldE1hcCwgdm0uaGFuZGxlRmFpbHVyZSkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlBc3NldEdyb3Vwc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8kbG9nLmxvZyhcImdldE15QXNzZXRHcm91cHNNYXBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15QXNzZXRHcm91cHMoYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXAsIHZtLmhhbmRsZUZhaWx1cmUpLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15VmVoaWNsZXNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlWZWhpY2xlc01hcFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlWZWhpY2xlcyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldE1hcCwgdm0uaGFuZGxlRmFpbHVyZSkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlVc2Vyc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeVVzZXJzTWFwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeVVzZXJzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKS50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TWFwLCB2bS5oYW5kbGVGYWlsdXJlKS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeVVzZXJzTWFwTGlzdCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeVJvbGVzTWFwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeVVzZXJzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKS50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TGlzdCwgdm0uaGFuZGxlRmFpbHVyZSkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlSb2xlc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeVJvbGVzTWFwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeVJvbGVzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKS50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TWFwLCB2bS5oYW5kbGVGYWlsdXJlKS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeVJvbGVzTGlzdCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeVJvbGVzTWFwXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeVJvbGVzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKS50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TGlzdCwgdm0uaGFuZGxlRmFpbHVyZSkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlEZXZpY2VzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15RGV2aWNlc01hcFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlEZXZpY2VzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKS50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TWFwLCB2bS5oYW5kbGVGYWlsdXJlKS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5oYW5kbGVEaXJlY3RBc3NldFJlc3BvbnNlID0gZnVuY3Rpb24gKHJlc3ApIHtcbiAgICAgICAgICAgICAgICAvLyRsb2cubG9nKFwidXNlckFQSVNlcnZpY2UgaGFuZGxlRGlyZWN0QXNzZXRSZXNwb25zZVwiKTtcbiAgICAgICAgICAgICAgICAvLyAkbG9nLmxvZyhyZXNwKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShyZXNwKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeURpcmVjdEFzc2V0c01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJ1c2VyQVBJU2VydmljZSBnZXRNeURpcmVjdEFzc2V0c01hcFwiKTtcbiAgICAgICAgICAgICAgICB2YXIgZ1Byb21pc2UgPSB2bS5nZXRNeUdyb3Vwc01hcChib2R5KTtcbiAgICAgICAgICAgICAgICB2YXIgdlByb21pc2UgPSB2bS5nZXRNeVZlaGljbGVzTWFwKGJvZHkpO1xuICAgICAgICAgICAgICAgIHZhciB1UHJvbWlzZSA9IHZtLmdldE15VXNlcnNNYXAoYm9keSk7XG4gICAgICAgICAgICAgICAgdmFyIHJQcm9taXNlID0gdm0uZ2V0TXlSb2xlc01hcChib2R5KTtcbiAgICAgICAgICAgICAgICB2YXIgZFByb21pc2UgPSB2bS5nZXRNeURldmljZXNNYXAoYm9keSk7XG4gICAgICAgICAgICAgICAgdmFyIG15UHJvbWlzZSA9IHZtLmdldE15SW5mb01hcChib2R5KTtcblxuICAgICAgICAgICAgICAgIHJldHVybiAkcS5hbGwoW2dQcm9taXNlLCB2UHJvbWlzZSwgdVByb21pc2UsIHJQcm9taXNlLCBkUHJvbWlzZSwgbXlQcm9taXNlXSkudGhlbih2bS5oYW5kbGVEaXJlY3RBc3NldFJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy91c2VyLmFwaS5zZXJ2aWNlLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gMi8xMS8yMDE3LlxyXG4gKi9cclxuXHJcbmV4cG9ydCBjbGFzcyB1c2VyQVBJU2VydmljZXtcclxuICAgIGNvbnN0cnVjdG9yICgkbG9nLCAkcSwgcmVxdWVzdFNlcnZpY2UsIGhlbHBlclNlcnZpY2UsICRpbkVycm9yKSB7XHJcbiAgICAgICAgJ25nSW5qZWN0J1xyXG4gICAgICAgICRsb2cubG9nKFwidXNlckFQSVNlcnZpY2VcIik7XHJcbiAgICAgICAgdmFyIHZtID0gdGhpcztcclxuXHJcbiAgICAgICAgdm0uZW5jbG9zZUJvZHkgPSBmdW5jdGlvbiAoZGF0YSkge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gZGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIHt1c2VyOiBkYXRhfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5nZXRNeUdyb3VwcyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlHcm91cHNcIik7XHJcbiAgICAgICAgICAgIC8vIGJvZHkgPSB2bS5lbmNsb3NlQm9keShib2R5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL2dyb3VwL2xpc3Rhc3NldHMnLCBib2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0QXNzaWduZWRHcm91cHMgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15R3JvdXBzXCIpO1xyXG4gICAgICAgICAgICAvLyBib2R5ID0gdm0uZW5jbG9zZUJvZHkoYm9keSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS91c2VyL2dldGFzc2lnbmVkZ3JvdXBzJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldEFzc2lnbmVkUm9sZXMgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15R3JvdXBzXCIpO1xyXG4gICAgICAgICAgICAvLyBib2R5ID0gdm0uZW5jbG9zZUJvZHkoYm9keSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS91c2VyL2dldGFzc2lnbmVkcm9sZXMnLCBib2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0TXlBc3NpZ25hYmxlR3JvdXBzID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3VzZXIvZ2V0bXlhc3NpZ25hYmxlZ3JvdXBzJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15QXNzaWduYWJsZVJvbGVzID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3VzZXIvZ2V0bXlhc3NpZ25hYmxlcm9sZXMnLCBib2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uYXNzaWduUm9sZSA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS91c2VyL2Fzc2lnbnJvbGUnLCBib2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5kZWFzc2lnblJvbGUgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvdXNlci9kZWFzc2lnbnJvbGUnLCBib2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB2bS5jcmVhdGVVc2VyID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3VzZXIvY3JlYXRlbG9jYWx1c2VyJywgYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSApO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5oYW5kbGVSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwKSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwiaGFuZGxlUmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKHJlc3ApO1xyXG4gICAgICAgICAgICByZXR1cm4gJHEucmVzb2x2ZShyZXNwKVxyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5oYW5kbGVGYWlsdXJlID0gZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgJGxvZy5sb2coXCJoYW5kbGVGYWlsdXJlIFwiKTtcclxuICAgICAgICAgICAgJGluRXJyb3IuYWRkKHJlc3ApO1xyXG4gICAgICAgICAgICAkbG9nLmxvZyhyZXNwKTtcclxuICAgICAgICAgICAgcmV0dXJuICRxLnJlamVjdChyZXNwKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0QXNzaWduZWRSb2xlc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRBc3NpZ25lZFJvbGVzKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15QXNzaWduYWJsZVJvbGVzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15QXNzaWduYWJsZVJvbGVzKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15QXNzaWduYWJsZUdyb3Vwc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeUFzc2lnbmFibGVHcm91cHMoYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TGlzdClcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UuZmlsdGVyQXNzZXRHcm91cHMpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldEFzc2lnbmVkR3JvdXBzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldEFzc2lnbmVkR3JvdXBzKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15R3JvdXBzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeUdyb3Vwc01hcFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15R3JvdXBzKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldE1hcCwgdm0uaGFuZGxlRmFpbHVyZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0TXlBc3NpZ25lZEdyb3Vwc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlHcm91cHNNYXBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeUFzc2lnbmVkR3JvdXBzKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldE1hcCwgdm0uaGFuZGxlRmFpbHVyZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0TXlBc3NldEdyb3Vwc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIC8vJGxvZy5sb2coXCJnZXRNeUFzc2V0R3JvdXBzTWFwXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlBc3NldEdyb3Vwcyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXAsIHZtLmhhbmRsZUZhaWx1cmUpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15VmVoaWNsZXNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15VmVoaWNsZXNNYXBcIik7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeVZlaGljbGVzKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldE1hcCwgdm0uaGFuZGxlRmFpbHVyZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0TXlVc2Vyc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwiZ2V0TXlVc2Vyc01hcFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15VXNlcnMoYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TWFwLCB2bS5oYW5kbGVGYWlsdXJlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZtLmdldE15VXNlcnNNYXBMaXN0ID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeVJvbGVzTWFwXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlVc2Vycyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0LCB2bS5oYW5kbGVGYWlsdXJlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeVJvbGVzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeVJvbGVzTWFwXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlSb2xlcyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXAsIHZtLmhhbmRsZUZhaWx1cmUpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15Um9sZXNMaXN0ID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2coXCJnZXRNeVJvbGVzTWFwXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlSb2xlcyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRMaXN0LCB2bS5oYW5kbGVGYWlsdXJlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeURldmljZXNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICAvLyAkbG9nLmxvZyhcImdldE15RGV2aWNlc01hcFwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15RGV2aWNlcyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS5tYWtlQXNzZXRNYXAsIHZtLmhhbmRsZUZhaWx1cmUpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmhhbmRsZURpcmVjdEFzc2V0UmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAvLyRsb2cubG9nKFwidXNlckFQSVNlcnZpY2UgaGFuZGxlRGlyZWN0QXNzZXRSZXNwb25zZVwiKTtcclxuICAgICAgICAgICAgLy8gJGxvZy5sb2cocmVzcCk7XHJcbiAgICAgICAgICAgIHJldHVybiAkcS5yZXNvbHZlKHJlc3ApO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeURpcmVjdEFzc2V0c01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIC8vICRsb2cubG9nKFwidXNlckFQSVNlcnZpY2UgZ2V0TXlEaXJlY3RBc3NldHNNYXBcIik7XHJcbiAgICAgICAgICAgIHZhciBnUHJvbWlzZSA9IHZtLmdldE15R3JvdXBzTWFwKGJvZHkpO1xyXG4gICAgICAgICAgICB2YXIgdlByb21pc2UgPSB2bS5nZXRNeVZlaGljbGVzTWFwKGJvZHkpO1xyXG4gICAgICAgICAgICB2YXIgdVByb21pc2UgPSB2bS5nZXRNeVVzZXJzTWFwKGJvZHkpO1xyXG4gICAgICAgICAgICB2YXIgclByb21pc2UgPSB2bS5nZXRNeVJvbGVzTWFwKGJvZHkpO1xyXG4gICAgICAgICAgICB2YXIgZFByb21pc2UgPSB2bS5nZXRNeURldmljZXNNYXAoYm9keSk7XHJcbiAgICAgICAgICAgIHZhciBteVByb21pc2UgPSB2bS5nZXRNeUluZm9NYXAoYm9keSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gJHEuYWxsKFtnUHJvbWlzZSwgdlByb21pc2UsIHVQcm9taXNlLCByUHJvbWlzZSwgZFByb21pc2UsIG15UHJvbWlzZV0pXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVEaXJlY3RBc3NldFJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcclxuXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy91c2VyLmFwaS5zZXJ2aWNlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcclxuICogQ3JlYXRlZCBieSBzbWlkZGVsYSBvbiAwMi8wMy8xNy5cclxuICovXG5cbnZhciByb2xlQVBJU2VydmljZSA9IGV4cG9ydHMucm9sZUFQSVNlcnZpY2UgPSBmdW5jdGlvbiByb2xlQVBJU2VydmljZSgkbG9nLCAkcSwgcmVxdWVzdFNlcnZpY2UsIGhlbHBlclNlcnZpY2UsIGFwcENvbnN0YW50cywgJGluRXJyb3IpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgcm9sZUFQSVNlcnZpY2UpO1xuXG4gICAgICAgICRsb2cubG9nKFwicm9sZUFQSVNlcnZpY2VcIik7XG4gICAgICAgIHZhciB2bSA9IHRoaXM7XG5cbiAgICAgICAgdm0uZ2V0QXNzaWduZWRVc2VycyA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3JvbGUvZ2V0YXNzaWduZWR1c2VycycsIGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldEFzc2lnbmVkR3JvdXBzID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvcm9sZS9nZXRhc3NpZ25lZGdyb3VwcycsIGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15QXNzaWduYWJsZVVzZXJzID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvcm9sZS9nZXRteWFzc2lnbmFibGV1c2VycycsIGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldE15QXNzaWduYWJsZUdyb3VwcyA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3JvbGUvZ2V0bXlhc3NpZ25hYmxlZ3JvdXBzJywgYm9keSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlQZXJtaXNzaW9ucyA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3JvbGUvZ2V0bXlwZXJtaXNzaW9ucycsIGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldEFzc2lnbmVkUGVybWlzc2lvbnMgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9yb2xlL2dldGFzc2lnbmVkcGVybWlzc2lvbnMnLCBib2R5KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5hZGRQZXJtaXNzaW9uID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvcm9sZS9hZGRwZXJtaXNzaW9uJywgYm9keSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZGVsZXRlUGVybWlzc2lvbiA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3JvbGUvZGVsZXRlcGVybWlzc2lvbicsIGJvZHkpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmNyZWF0ZVJvbGUgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9yb2xlL2NyZWF0ZScsIGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5oYW5kbGVSZXNwb25zZSA9IGZ1bmN0aW9uIChyZXNwKSB7XG4gICAgICAgICAgICAgICAgLy8kbG9nLmxvZyhcImhhbmRsZVJlc3BvbnNlXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiAkcS5yZXNvbHZlKHJlc3ApO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmhhbmRsZUZhaWx1cmUgPSBmdW5jdGlvbiAocmVzcCkge1xuICAgICAgICAgICAgICAgICRpbkVycm9yLmFkZChyZXNwKTtcbiAgICAgICAgICAgICAgICAkbG9nLmxvZyhcImhhbmRsZUZhaWx1cmUgXCIsIHJlc3ApO1xuICAgICAgICAgICAgICAgIHJldHVybiAkcS5yZWplY3QocmVzcCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0QXNzaWduZWRHcm91cHNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRBc3NpZ25lZEdyb3Vwcyhib2R5KS50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSkudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldEFzc2lnbmVkVXNlcnNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRBc3NpZ25lZFVzZXJzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKS50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TGlzdCkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlBc3NpZ25hYmxlR3JvdXBzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlBc3NpZ25hYmxlR3JvdXBzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKS50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TGlzdCkudGhlbihoZWxwZXJTZXJ2aWNlLmZpbHRlckFzc2V0R3JvdXBzKS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5nZXRNeUFzc2lnbmFibGVVc2Vyc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15QXNzaWduYWJsZVVzZXJzKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKS50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TGlzdCkudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdm0uZ2V0TXlQZXJtaXNzaW9uc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15UGVybWlzc2lvbnMoYm9keSkudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLmdldEFzc2lnbmVkUGVybWlzc2lvbnNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB2bS5nZXRBc3NpZ25lZFBlcm1pc3Npb25zKGJvZHkpLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKS50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcbiAgICAgICAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy9yb2xlLmFwaS5zZXJ2aWNlLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgc21pZGRlbGEgb24gMDIvMDMvMTcuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIHJvbGVBUElTZXJ2aWNle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgkbG9nLCAkcSwgcmVxdWVzdFNlcnZpY2UsIGhlbHBlclNlcnZpY2UsIGFwcENvbnN0YW50cywgJGluRXJyb3IpIHtcclxuICAgICAgICAnbmdJbmplY3QnXHJcbiAgICAgICAgJGxvZy5sb2coXCJyb2xlQVBJU2VydmljZVwiKTtcclxuICAgICAgICB2YXIgdm0gPSB0aGlzO1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0QXNzaWduZWRVc2VycyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9yb2xlL2dldGFzc2lnbmVkdXNlcnMnLCBib2R5KTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0QXNzaWduZWRHcm91cHMgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvcm9sZS9nZXRhc3NpZ25lZGdyb3VwcycsIGJvZHkpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeUFzc2lnbmFibGVVc2VycyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9yb2xlL2dldG15YXNzaWduYWJsZXVzZXJzJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15QXNzaWduYWJsZUdyb3VwcyA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXF1ZXN0U2VydmljZS5maXJlUG9zdCgnL2FwaS9yb2xlL2dldG15YXNzaWduYWJsZWdyb3VwcycsIGJvZHkpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRNeVBlcm1pc3Npb25zID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3JvbGUvZ2V0bXlwZXJtaXNzaW9ucycsIGJvZHkpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRBc3NpZ25lZFBlcm1pc3Npb25zID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3JvbGUvZ2V0YXNzaWduZWRwZXJtaXNzaW9ucycsIGJvZHkpO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5hZGRQZXJtaXNzaW9uID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcXVlc3RTZXJ2aWNlLmZpcmVQb3N0KCcvYXBpL3JvbGUvYWRkcGVybWlzc2lvbicsIGJvZHkpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZtLmRlbGV0ZVBlcm1pc3Npb24gPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvcm9sZS9kZWxldGVwZXJtaXNzaW9uJywgYm9keSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmNyZWF0ZVJvbGUgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcmVxdWVzdFNlcnZpY2UuZmlyZVBvc3QoJy9hcGkvcm9sZS9jcmVhdGUnLCBib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uaGFuZGxlUmVzcG9uc2UgPSBmdW5jdGlvbiAocmVzcCkge1xyXG4gICAgICAgICAgICAvLyRsb2cubG9nKFwiaGFuZGxlUmVzcG9uc2VcIik7XHJcbiAgICAgICAgICAgIHJldHVybiAkcS5yZXNvbHZlKHJlc3ApO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5oYW5kbGVGYWlsdXJlID0gZnVuY3Rpb24gKHJlc3ApIHtcclxuICAgICAgICAgICAgJGluRXJyb3IuYWRkKHJlc3ApO1xyXG4gICAgICAgICAgICAkbG9nLmxvZyhcImhhbmRsZUZhaWx1cmUgXCIsIHJlc3ApO1xyXG4gICAgICAgICAgICByZXR1cm4gJHEucmVqZWN0KHJlc3ApO1xyXG4gICAgICAgIH07XHJcblxyXG5cclxuICAgICAgICB2bS5nZXRBc3NpZ25lZEdyb3Vwc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRBc3NpZ25lZEdyb3Vwcyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlIClcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TGlzdClcclxuICAgICAgICAgICAgICAgIC50aGVuKHZtLmhhbmRsZVJlc3BvbnNlLCB2bS5oYW5kbGVGYWlsdXJlKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0uZ2V0QXNzaWduZWRVc2Vyc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRBc3NpZ25lZFVzZXJzKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15QXNzaWduYWJsZUdyb3Vwc01hcCA9IGZ1bmN0aW9uIChib2R5KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB2bS5nZXRNeUFzc2lnbmFibGVHcm91cHMoYm9keSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UudmFsaWRhdGVSZXNwb25zZSlcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UubWFrZUFzc2V0TGlzdClcclxuICAgICAgICAgICAgICAgIC50aGVuKGhlbHBlclNlcnZpY2UuZmlsdGVyQXNzZXRHcm91cHMpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15QXNzaWduYWJsZVVzZXJzTWFwID0gZnVuY3Rpb24gKGJvZHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHZtLmdldE15QXNzaWduYWJsZVVzZXJzKGJvZHkpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLnZhbGlkYXRlUmVzcG9uc2UpXHJcbiAgICAgICAgICAgICAgICAudGhlbihoZWxwZXJTZXJ2aWNlLm1ha2VBc3NldExpc3QpXHJcbiAgICAgICAgICAgICAgICAudGhlbih2bS5oYW5kbGVSZXNwb25zZSwgdm0uaGFuZGxlRmFpbHVyZSk7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLmdldE15UGVybWlzc2lvbnNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uZ2V0TXlQZXJtaXNzaW9ucyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZtLmdldEFzc2lnbmVkUGVybWlzc2lvbnNNYXAgPSBmdW5jdGlvbiAoYm9keSkge1xyXG4gICAgICAgICAgICByZXR1cm4gdm0uZ2V0QXNzaWduZWRQZXJtaXNzaW9ucyhib2R5KVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oaGVscGVyU2VydmljZS52YWxpZGF0ZVJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4odm0uaGFuZGxlUmVzcG9uc2UsIHZtLmhhbmRsZUZhaWx1cmUpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9zZXJ2aWNlcy9yb2xlLmFwaS5zZXJ2aWNlLmpzIiwiJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICAgICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcclxuICogQ3JlYXRlZCBieSBzbWlkZGVsYSBvbiAwMS8wMy8xNy5cclxuICovXG5cbnZhciBoZWxwZXJUZXN0U2VydmljZSA9IGV4cG9ydHMuaGVscGVyVGVzdFNlcnZpY2UgPSBmdW5jdGlvbiBoZWxwZXJUZXN0U2VydmljZSgkbG9nLCAkcSwgaGVscGVyU2VydmljZSkge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBoZWxwZXJUZXN0U2VydmljZSk7XG5cbiAgICAgICAgJGxvZy5sb2coXCJoZWxwZXJUZXN0U2VydmljZVwiKTtcbiAgICAgICAgdmFyIHZtID0gdGhpcztcblxuICAgICAgICB2YXIgcGF0aCA9IHZvaWQgMDtcbiAgICAgICAgdmFyIEFTU0VUX0lEID0gdm9pZCAwO1xuICAgICAgICB2YXIgUEFSRU5UX1BBVEggPSB2b2lkIDA7XG4gICAgICAgIHZhciBQQVJFTlRfSUQgPSB2b2lkIDA7XG4gICAgICAgIHZhciBBU1NFVF9UWVBFX0lEID0gdm9pZCAwO1xuXG4gICAgICAgIHZtLnRlc3QxID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVEVTVDFcIik7XG4gICAgICAgICAgICAgICAgcGF0aCA9ICcvMi82Lyc7XG4gICAgICAgICAgICAgICAgQVNTRVRfSUQgPSA2O1xuICAgICAgICAgICAgICAgIFBBUkVOVF9QQVRIID0gJy8yLzYvJztcbiAgICAgICAgICAgICAgICBQQVJFTlRfSUQgPSA2O1xuICAgICAgICAgICAgICAgIEFTU0VUX1RZUEVfSUQgPSAyO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLnRlc3QyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVEVTVDJcIik7XG4gICAgICAgICAgICAgICAgcGF0aCA9ICcvMi82MS81LzcyLyc7XG4gICAgICAgICAgICAgICAgQVNTRVRfSUQgPSA3MjtcbiAgICAgICAgICAgICAgICBQQVJFTlRfUEFUSCA9ICcvMi82MS8nO1xuICAgICAgICAgICAgICAgIFBBUkVOVF9JRCA9IDYxO1xuICAgICAgICAgICAgICAgIEFTU0VUX1RZUEVfSUQgPSA1O1xuICAgICAgICB9O1xuXG4gICAgICAgIHZtLnRlc3QzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVEVTVDNcIik7XG4gICAgICAgICAgICAgICAgcGF0aCA9ICcvMi82LzIvMTQ0LzIvMTQ1LzIvMTQ4LzUvMTU2Lyc7XG4gICAgICAgICAgICAgICAgQVNTRVRfSUQgPSAxNTY7XG4gICAgICAgICAgICAgICAgUEFSRU5UX1BBVEggPSAnLzIvNi8yLzE0NC8yLzE0NS8yLzE0OC8nO1xuICAgICAgICAgICAgICAgIFBBUkVOVF9JRCA9IDE0ODtcbiAgICAgICAgICAgICAgICBBU1NFVF9UWVBFX0lEID0gNTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS5ydW5UZXN0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHZhciBhc3NldGlkID0gaGVscGVyU2VydmljZS5nZXRBc3NldElkMihwYXRoKTtcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXRpZCAhPSBBU1NFVF9JRCkgY29uc29sZS5sb2coXCJHRVRfQVNTRVRfSUQgZmFpbGVkXCIsIHBhdGgsIFwiY29tcHV0ZWRcIiwgYXNzZXRpZCwgXCJFeHBlY3RlZFwiLCBBU1NFVF9JRCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgcGFyZW50cGF0aCA9IGhlbHBlclNlcnZpY2UuZ2V0UGFyZW50UGF0aDIocGF0aCk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudHBhdGggIT0gUEFSRU5UX1BBVEgpIGNvbnNvbGUubG9nKFwiR0VUX1BBUkVOVF9QQVRIIGZhaWxlZFwiLCBwYXRoLCBcImNvbXB1dGVkXCIsIHBhcmVudHBhdGgsIFwiRXhwZWN0ZWRcIiwgUEFSRU5UX1BBVEgpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHBhcmVudGlkID0gaGVscGVyU2VydmljZS5nZXRQYXJlbnRJZDIocGF0aCk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudGlkICE9IFBBUkVOVF9JRCkgY29uc29sZS5sb2coXCJHRVRfUEFSRU5UX0lEIGZhaWxlZFwiLCBwYXRoLCBcImNvbXB1dGVkXCIsIHBhcmVudGlkLCBcIkV4cGVjdGVkXCIsIFBBUkVOVF9JRCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgYXNzZXR0eXBlaWQgPSBoZWxwZXJTZXJ2aWNlLmdldEFzc2V0VHlwZUlkMihwYXRoKTtcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXR0eXBlaWQgIT0gQVNTRVRfVFlQRV9JRCkgY29uc29sZS5sb2coXCJHRVRfQVNTRVRfVFlQRV9JRCBmYWlsZWRcIiwgcGF0aCwgXCJjb21wdXRlZFwiLCBhc3NldHR5cGVpZCwgXCJFeHBlY3RlZFwiLCBBU1NFVF9UWVBFX0lEKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2bS50ZXN0MSgpO1xuICAgICAgICB2bS5ydW5UZXN0KCk7XG5cbiAgICAgICAgdm0udGVzdDIoKTtcbiAgICAgICAgdm0ucnVuVGVzdCgpO1xuXG4gICAgICAgIHZtLnRlc3QzKCk7XG4gICAgICAgIHZtLnJ1blRlc3QoKTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC90ZXN0L2hlbHBlcnRlc3Quc2VydmljZS5qcyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHNtaWRkZWxhIG9uIDAxLzAzLzE3LlxyXG4gKi9cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgaGVscGVyVGVzdFNlcnZpY2V7XHJcbiAgICBjb25zdHJ1Y3RvciAoJGxvZywgJHEsIGhlbHBlclNlcnZpY2UpIHtcclxuICAgICAgICAnbmdJbmplY3QnXHJcbiAgICAgICAgJGxvZy5sb2coXCJoZWxwZXJUZXN0U2VydmljZVwiKTtcclxuICAgICAgICBsZXQgdm0gPSB0aGlzO1xyXG5cclxuICAgICAgICBsZXQgcGF0aDtcclxuICAgICAgICBsZXQgQVNTRVRfSUQ7XHJcbiAgICAgICAgbGV0IFBBUkVOVF9QQVRIO1xyXG4gICAgICAgIGxldCBQQVJFTlRfSUQ7XHJcbiAgICAgICAgbGV0IEFTU0VUX1RZUEVfSUQ7XHJcblxyXG5cclxuICAgICAgICB2bS50ZXN0MSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJURVNUMVwiKTtcclxuICAgICAgICAgICAgcGF0aCA9ICcvMi82Lyc7XHJcbiAgICAgICAgICAgIEFTU0VUX0lEID0gNjtcclxuICAgICAgICAgICAgUEFSRU5UX1BBVEggPSAnLzIvNi8nO1xyXG4gICAgICAgICAgICBQQVJFTlRfSUQgPSA2O1xyXG4gICAgICAgICAgICBBU1NFVF9UWVBFX0lEID0gMjtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0udGVzdDIgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiVEVTVDJcIik7XHJcbiAgICAgICAgICAgIHBhdGggPSAnLzIvNjEvNS83Mi8nO1xyXG4gICAgICAgICAgICBBU1NFVF9JRCA9IDcyO1xyXG4gICAgICAgICAgICBQQVJFTlRfUEFUSCA9ICcvMi82MS8nO1xyXG4gICAgICAgICAgICBQQVJFTlRfSUQgPSA2MTtcclxuICAgICAgICAgICAgQVNTRVRfVFlQRV9JRCA9IDU7XHJcbiAgICAgICAgfTtcclxuXHJcblxyXG4gICAgICAgIHZtLnRlc3QzID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlRFU1QzXCIpO1xyXG4gICAgICAgICAgICBwYXRoID0gJy8yLzYvMi8xNDQvMi8xNDUvMi8xNDgvNS8xNTYvJztcclxuICAgICAgICAgICAgQVNTRVRfSUQgPSAxNTY7XHJcbiAgICAgICAgICAgIFBBUkVOVF9QQVRIID0gJy8yLzYvMi8xNDQvMi8xNDUvMi8xNDgvJztcclxuICAgICAgICAgICAgUEFSRU5UX0lEID0gMTQ4O1xyXG4gICAgICAgICAgICBBU1NFVF9UWVBFX0lEID0gNTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0ucnVuVGVzdCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgbGV0IGFzc2V0aWQgPSBoZWxwZXJTZXJ2aWNlLmdldEFzc2V0SWQyKHBhdGgpO1xyXG4gICAgICAgICAgICBpZihhc3NldGlkICE9IEFTU0VUX0lEKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHRVRfQVNTRVRfSUQgZmFpbGVkXCIsIHBhdGgsIFwiY29tcHV0ZWRcIiwgYXNzZXRpZCwgXCJFeHBlY3RlZFwiLCBBU1NFVF9JRCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgcGFyZW50cGF0aCA9IGhlbHBlclNlcnZpY2UuZ2V0UGFyZW50UGF0aDIocGF0aCk7XHJcbiAgICAgICAgICAgIGlmKHBhcmVudHBhdGggIT0gUEFSRU5UX1BBVEgpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdFVF9QQVJFTlRfUEFUSCBmYWlsZWRcIiwgcGF0aCwgXCJjb21wdXRlZFwiLCBwYXJlbnRwYXRoLCBcIkV4cGVjdGVkXCIsIFBBUkVOVF9QQVRIKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBwYXJlbnRpZCA9IGhlbHBlclNlcnZpY2UuZ2V0UGFyZW50SWQyKHBhdGgpO1xyXG4gICAgICAgICAgICBpZihwYXJlbnRpZCAhPSBQQVJFTlRfSUQpXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkdFVF9QQVJFTlRfSUQgZmFpbGVkXCIsIHBhdGgsIFwiY29tcHV0ZWRcIiwgcGFyZW50aWQsIFwiRXhwZWN0ZWRcIiwgUEFSRU5UX0lEKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBhc3NldHR5cGVpZCA9IGhlbHBlclNlcnZpY2UuZ2V0QXNzZXRUeXBlSWQyKHBhdGgpO1xyXG4gICAgICAgICAgICBpZihhc3NldHR5cGVpZCAhPSBBU1NFVF9UWVBFX0lEKVxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJHRVRfQVNTRVRfVFlQRV9JRCBmYWlsZWRcIiwgcGF0aCwgXCJjb21wdXRlZFwiLCBhc3NldHR5cGVpZCwgXCJFeHBlY3RlZFwiLCBBU1NFVF9UWVBFX0lEKTtcclxuICAgICAgICB9O1xyXG5cclxuXHJcbiAgICAgICAgdm0udGVzdDEoKTtcclxuICAgICAgICB2bS5ydW5UZXN0KCk7XHJcblxyXG4gICAgICAgIHZtLnRlc3QyKCk7XHJcbiAgICAgICAgdm0ucnVuVGVzdCgpO1xyXG5cclxuICAgICAgICB2bS50ZXN0MygpO1xyXG4gICAgICAgIHZtLnJ1blRlc3QoKTtcclxuICAgIH1cclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC90ZXN0L2hlbHBlcnRlc3Quc2VydmljZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcclxuICogQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiA0LzI4LzIwMTcuXHJcbiAqL1xudmFyIHBvcnRhbExvZ2luU2VydmljZSA9IGV4cG9ydHMucG9ydGFsTG9naW5TZXJ2aWNlID0gZnVuY3Rpb24gcG9ydGFsTG9naW5TZXJ2aWNlKCRodHRwLCAkcm9vdFNjb3BlLCAkY29va2llU3RvcmUsIEFQSV9IT1NUKSB7XG4gICAgJ25nSW5qZWN0JztcbiAgICAvLyBTZXJ2aWNlIGxvZ2ljXG4gICAgLy8gLi4uXG5cbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgcG9ydGFsTG9naW5TZXJ2aWNlKTtcblxuICAgIHZhciB0b2tlbkhhbmRsZXIgPSB7fTtcbiAgICB2YXIgdG9rZW47XG4gICAgdmFyIHVzZXI7XG5cbiAgICAvLyB2YXIgcHJvamVjdHM7IC8vIHRlbXAgaW1wbGVtZW50YXRpb25cbiAgICB2YXIgdGVtcExvZ2dlZGluID0gZmFsc2U7XG5cbiAgICB2YXIgb2JzZXJ2ZXJDYWxsYmFja3MgPSBbXTtcblxuICAgIGlmIChhbmd1bGFyLmlzRGVmaW5lZCgkY29va2llU3RvcmUuZ2V0KCd1c2VyRGF0YScpKSkge1xuICAgICAgICAvLyB0ZW1wIGxvZ2luXG4gICAgICAgIHZhciBlID0gJGNvb2tpZVN0b3JlLmdldCgnZW1haWwnKTtcbiAgICAgICAgdmFyIHAgPSAkY29va2llU3RvcmUuZ2V0KCdwYXNzd29yZCcpO1xuXG4gICAgICAgICRodHRwLnBvc3QoQVBJX0hPU1QgKyAnL2F1dGhlbnRpY2F0ZScsIHsgZW1haWw6IGUsIHBhc3N3b3JkOiBwIH0pLnRoZW4oZnVuY3Rpb24gKHJlc3BvbnNlLCBzdGF0dXMsIGhlYWRlciwgY29uZmlnKSB7XG4gICAgICAgICAgICBzZXQocmVzcG9uc2UuZGF0YS50b2tlbik7XG4gICAgICAgICAgICB1c2VyID0gcmVzcG9uc2UuZGF0YS51c2VyO1xuICAgICAgICAgICAgJHJvb3RTY29wZS5hdXRoVXNlciA9IHJlc3BvbnNlLmRhdGEudXNlcjtcbiAgICAgICAgICAgIC8vIHByb2plY3RzID0gcmVzcG9uc2UuZGF0YS5wcm9qZWN0cztcbiAgICAgICAgICAgIHRlbXBMb2dnZWRpbiA9IHRydWU7XG4gICAgICAgICAgICBub3RpZnlPYnNlcnZlcnMoKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgaGVhZGVyLCBjb25maWcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2dpbiBlcnJvcicpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBlbmQgdGVtcCBsb2dpblxuICAgIH1cblxuICAgIC8vbG9naW5cbiAgICB2YXIgX2xvZ2luID0gZnVuY3Rpb24gX2xvZ2luKHVzZXJuYW1lLCBwYXNzd29yZCwgY2FsbGJhY2ssIGZhaWx1cmUpIHtcbiAgICAgICAgJGh0dHAucG9zdChBUElfSE9TVCArICcvYXV0aGVudGljYXRlJywgeyBlbWFpbDogdXNlcm5hbWUsIHBhc3N3b3JkOiBwYXNzd29yZCB9KS50aGVuKGZ1bmN0aW9uIChyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXIsIGNvbmZpZykge1xuICAgICAgICAgICAgc2V0KHJlc3BvbnNlLmRhdGEudG9rZW4pO1xuICAgICAgICAgICAgdXNlciA9IHJlc3BvbnNlLmRhdGEudXNlcjtcbiAgICAgICAgICAgICRyb290U2NvcGUuYXV0aFVzZXIgPSByZXNwb25zZS5kYXRhLnVzZXI7XG4gICAgICAgICAgICAvLyBwcm9qZWN0cyA9IHJlc3BvbnNlLmRhdGEucHJvamVjdHM7XG4gICAgICAgICAgICAkY29va2llU3RvcmUucHV0KCd0b2tlbicsIHRva2VuKTtcbiAgICAgICAgICAgICRjb29raWVTdG9yZS5wdXQoJ3VzZXJEYXRhJywgJHJvb3RTY29wZS5hdXRoVXNlcik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgICB0ZW1wTG9nZ2VkaW4gPSB0cnVlO1xuICAgICAgICAgICAgbm90aWZ5T2JzZXJ2ZXJzKCk7XG4gICAgICAgICAgICBjYWxsYmFjayhyZXNwb25zZSk7XG4gICAgICAgICAgICAkY29va2llU3RvcmUucHV0KCdlbWFpbCcsIHVzZXJuYW1lKTtcbiAgICAgICAgICAgICRjb29raWVTdG9yZS5wdXQoJ3Bhc3N3b3JkJywgcGFzc3dvcmQpO1xuICAgICAgICAgICAgJGNvb2tpZVN0b3JlLnB1dCgnbG9nZ2VkSW4nLCB0cnVlKTtcbiAgICAgICAgfSwgZnVuY3Rpb24gKGRhdGEsIHN0YXR1cywgaGVhZGVyLCBjb25maWcpIHtcbiAgICAgICAgICAgIGZhaWx1cmUoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgLy9lbmQgbG9naW5cbiAgICB2YXIgbm90aWZ5T2JzZXJ2ZXJzID0gZnVuY3Rpb24gbm90aWZ5T2JzZXJ2ZXJzKCkge1xuICAgICAgICBhbmd1bGFyLmZvckVhY2gob2JzZXJ2ZXJDYWxsYmFja3MsIGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICAgICAgY2FsbGJhY2soKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIHZhciBzZXQgPSBmdW5jdGlvbiBzZXQobmV3VG9rZW4pIHtcbiAgICAgICAgdG9rZW4gPSBuZXdUb2tlbjtcbiAgICB9O1xuXG4gICAgdG9rZW5IYW5kbGVyLmdldCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH07XG5cbiAgICB2YXIgd3JhcEFjdGlvbnMgPSBmdW5jdGlvbiB3cmFwQWN0aW9ucyhyZXNvdXJjZSwgYWN0aW9ucykge1xuICAgICAgICB2YXIgd3JhcHBlZFJlc291cmNlID0gcmVzb3VyY2U7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdG9rZW5XcmFwcGVyKHdyYXBwZWRSZXNvdXJjZSwgYWN0aW9uc1tpXSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcmV0dXJuIG1vZGlmaWVkIGNvcHkgb2YgcmVzb3VyY2VcbiAgICAgICAgcmV0dXJuIHdyYXBwZWRSZXNvdXJjZTtcbiAgICB9O1xuXG4gICAgLy8gd3JhcHMgcmVzb3VyY2UgYWN0aW9uIHRvIHNlbmQgcmVxdWVzdCB3aXRoIGF1dGggdG9rZW5cbiAgICB2YXIgdG9rZW5XcmFwcGVyID0gZnVuY3Rpb24gdG9rZW5XcmFwcGVyKHJlc291cmNlLCBhY3Rpb24pIHtcbiAgICAgICAgLy8gY29weSBvcmlnaW5hbCBhY3Rpb25cbiAgICAgICAgcmVzb3VyY2VbJ18nICsgYWN0aW9uXSA9IHJlc291cmNlW2FjdGlvbl07XG4gICAgICAgIHJlc291cmNlW2FjdGlvbl0gPSBmdW5jdGlvbiAoZGF0YSwgc3VjY2VzcywgZXJyb3IpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNvdXJjZVsnXycgKyBhY3Rpb25dKGFuZ3VsYXIuZXh0ZW5kKHt9LCBkYXRhIHx8IHt9LCB7IHRva2VuOiB0b2tlbkhhbmRsZXIuZ2V0KCkgfSksIHN1Y2Nlc3MsIGVycm9yKTtcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgZnVuY3Rpb24gcHV0Q29va2llcyhuYW1lLCBkYXRhKSB7XG4gICAgICAgIHZhciBzdHI7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBzdHIgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBzdHIgPSBkYXRhO1xuICAgICAgICB9XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKG5hbWUsIGRhdGEpO1xuICAgIH1cblxuICAgIC8vIFB1YmxpYyBBUEkgaGVyZVxuICAgIHJldHVybiB7XG4gICAgICAgIHdyYXBBY3Rpb25zOiB3cmFwQWN0aW9ucyxcbiAgICAgICAgZ2V0VXNlcjogZnVuY3Rpb24gZ2V0VXNlcigpIHtcbiAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICB9LFxuICAgICAgICBnZXRQcm9qZWN0czogZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvamVjdHM7XG4gICAgICAgIH0sXG4gICAgICAgIG9uVGVtcExvZ2luOiBmdW5jdGlvbiBvblRlbXBMb2dpbihjYWxsYmFjaykge1xuICAgICAgICAgICAgb2JzZXJ2ZXJDYWxsYmFja3MucHVzaChjYWxsYmFjayk7XG4gICAgICAgIH0sXG4gICAgICAgIGxvZ2luOiBmdW5jdGlvbiBsb2dpbih1LCBwLCBjLCBmKSB7XG4gICAgICAgICAgICByZXR1cm4gX2xvZ2luKHUsIHAsIGMsIGYpO1xuICAgICAgICB9LFxuICAgICAgICBpc1RlbXBMb2dnZWQ6IGZ1bmN0aW9uIGlzVGVtcExvZ2dlZCgpIHtcbiAgICAgICAgICAgIHJldHVybiB0ZW1wTG9nZ2VkaW47XG4gICAgICAgIH0sXG4gICAgICAgIGdldFRva2VuOiB0b2tlbkhhbmRsZXIuZ2V0XG4gICAgfTtcbn07XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wb3J0YWwvbG9naW4vcG9ydGFsLmxvZ2luLnNlcnZpY2UuanMiLCIvKipcclxuICogQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiA0LzI4LzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgcG9ydGFsTG9naW5TZXJ2aWNle1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgkaHR0cCwgJHJvb3RTY29wZSwkY29va2llU3RvcmUsIEFQSV9IT1NUKSB7XHJcbiAgICAgICAgJ25nSW5qZWN0J1xyXG4gICAgICAgIC8vIFNlcnZpY2UgbG9naWNcclxuICAgICAgICAvLyAuLi5cclxuXHJcbiAgICAgICAgdmFyIHRva2VuSGFuZGxlciA9IHt9O1xyXG4gICAgICAgIHZhciB0b2tlbjtcclxuICAgICAgICB2YXIgdXNlcjtcclxuXHJcbiAgICAgICAgLy8gdmFyIHByb2plY3RzOyAvLyB0ZW1wIGltcGxlbWVudGF0aW9uXHJcbiAgICAgICAgdmFyIHRlbXBMb2dnZWRpbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgb2JzZXJ2ZXJDYWxsYmFja3MgPSBbXTtcclxuXHJcbiAgICAgICAgaWYoYW5ndWxhci5pc0RlZmluZWQoJGNvb2tpZVN0b3JlLmdldCgndXNlckRhdGEnKSkpe1xyXG4gICAgICAgICAgICAvLyB0ZW1wIGxvZ2luXHJcbiAgICAgICAgICAgIHZhciBlID0gJGNvb2tpZVN0b3JlLmdldCgnZW1haWwnKTtcclxuICAgICAgICAgICAgdmFyIHAgPSAkY29va2llU3RvcmUuZ2V0KCdwYXNzd29yZCcpO1xyXG5cclxuICAgICAgICAgICAgJGh0dHAucG9zdChBUElfSE9TVCArICcvYXV0aGVudGljYXRlJywge2VtYWlsOmUscGFzc3dvcmQ6cH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXIsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldChyZXNwb25zZS5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyID0gcmVzcG9uc2UuZGF0YS51c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuYXV0aFVzZXIgPSByZXNwb25zZS5kYXRhLnVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvamVjdHMgPSByZXNwb25zZS5kYXRhLnByb2plY3RzO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBMb2dnZWRpbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgbm90aWZ5T2JzZXJ2ZXJzKCk7XHJcbiAgICAgICAgICAgICAgICB9LCBmdW5jdGlvbihkYXRhLCBzdGF0dXMsIGhlYWRlciwgY29uZmlnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvZ2luIGVycm9yJylcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gZW5kIHRlbXAgbG9naW5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vbG9naW5cclxuICAgICAgICB2YXIgbG9naW4gPSBmdW5jdGlvbih1c2VybmFtZSxwYXNzd29yZCxjYWxsYmFjaywgZmFpbHVyZSl7XHJcbiAgICAgICAgICAgICRodHRwLnBvc3QoQVBJX0hPU1QgKyAnL2F1dGhlbnRpY2F0ZScsIHtlbWFpbDp1c2VybmFtZSxwYXNzd29yZDpwYXNzd29yZH0pXHJcbiAgICAgICAgICAgICAgICAudGhlbihmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzLCBoZWFkZXIsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNldChyZXNwb25zZS5kYXRhLnRva2VuKTtcclxuICAgICAgICAgICAgICAgICAgICB1c2VyID0gcmVzcG9uc2UuZGF0YS51c2VyO1xyXG4gICAgICAgICAgICAgICAgICAgICRyb290U2NvcGUuYXV0aFVzZXIgPSByZXNwb25zZS5kYXRhLnVzZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gcHJvamVjdHMgPSByZXNwb25zZS5kYXRhLnByb2plY3RzO1xyXG4gICAgICAgICAgICAgICAgICAgICRjb29raWVTdG9yZS5wdXQoJ3Rva2VuJyx0b2tlbik7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNvb2tpZVN0b3JlLnB1dCgndXNlckRhdGEnLCRyb290U2NvcGUuYXV0aFVzZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wTG9nZ2VkaW4gPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIG5vdGlmeU9ic2VydmVycygpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICAkY29va2llU3RvcmUucHV0KCdlbWFpbCcsdXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICRjb29raWVTdG9yZS5wdXQoJ3Bhc3N3b3JkJyxwYXNzd29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgJGNvb2tpZVN0b3JlLnB1dCgnbG9nZ2VkSW4nLHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSwgZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCBoZWFkZXIsIGNvbmZpZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZhaWx1cmUoZGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy9lbmQgbG9naW5cclxuICAgICAgICB2YXIgbm90aWZ5T2JzZXJ2ZXJzID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGFuZ3VsYXIuZm9yRWFjaChvYnNlcnZlckNhbGxiYWNrcywgZnVuY3Rpb24oY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHZhciBzZXQgPSBmdW5jdGlvbihuZXdUb2tlbikge1xyXG4gICAgICAgICAgICB0b2tlbiA9IG5ld1Rva2VuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdG9rZW5IYW5kbGVyLmdldCA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdG9rZW47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB2YXIgd3JhcEFjdGlvbnMgPSBmdW5jdGlvbihyZXNvdXJjZSwgYWN0aW9ucykge1xyXG4gICAgICAgICAgICB2YXIgd3JhcHBlZFJlc291cmNlID0gcmVzb3VyY2U7XHJcbiAgICAgICAgICAgIGZvcih2YXIgaT0wOyBpIDwgYWN0aW9ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdG9rZW5XcmFwcGVyKHdyYXBwZWRSZXNvdXJjZSwgYWN0aW9uc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gcmV0dXJuIG1vZGlmaWVkIGNvcHkgb2YgcmVzb3VyY2VcclxuICAgICAgICAgICAgcmV0dXJuIHdyYXBwZWRSZXNvdXJjZTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyB3cmFwcyByZXNvdXJjZSBhY3Rpb24gdG8gc2VuZCByZXF1ZXN0IHdpdGggYXV0aCB0b2tlblxyXG4gICAgICAgIHZhciB0b2tlbldyYXBwZXIgPSBmdW5jdGlvbihyZXNvdXJjZSwgYWN0aW9uKSB7XHJcbiAgICAgICAgICAgIC8vIGNvcHkgb3JpZ2luYWwgYWN0aW9uXHJcbiAgICAgICAgICAgIHJlc291cmNlWydfJyArIGFjdGlvbl0gPSByZXNvdXJjZVthY3Rpb25dO1xyXG4gICAgICAgICAgICByZXNvdXJjZVthY3Rpb25dID0gZnVuY3Rpb24oZGF0YSwgc3VjY2VzcywgZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiByZXNvdXJjZVsnXycgKyBhY3Rpb25dKFxyXG4gICAgICAgICAgICAgICAgICAgIGFuZ3VsYXIuZXh0ZW5kKHt9LCBkYXRhIHx8IHt9LCB7dG9rZW46IHRva2VuSGFuZGxlci5nZXQoKX0pLFxyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3MsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcHV0Q29va2llcyhuYW1lLCBkYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciBzdHI7XHJcbiAgICAgICAgICAgIHRyeXtcclxuICAgICAgICAgICAgICAgIHN0ciA9IEpTT04ucGFyc2UoZGF0YSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgICAgIHN0ciA9IGRhdGE7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0obmFtZSwgZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBQdWJsaWMgQVBJIGhlcmVcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICB3cmFwQWN0aW9ucyA6IHdyYXBBY3Rpb25zLFxyXG4gICAgICAgICAgICBnZXRVc2VyIDogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdXNlcjtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0UHJvamVjdHMgOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwcm9qZWN0cztcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgb25UZW1wTG9naW46IGZ1bmN0aW9uKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBvYnNlcnZlckNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgbG9naW46IGZ1bmN0aW9uKHUscCxjLGYpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBsb2dpbih1LHAsYyxmKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgaXNUZW1wTG9nZ2VkOiBmdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0ZW1wTG9nZ2VkaW47XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldFRva2VuOiB0b2tlbkhhbmRsZXIuZ2V0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcblxyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9wb3J0YWwvbG9naW4vcG9ydGFsLmxvZ2luLnNlcnZpY2UuanMiLCIndXNlIHN0cmljdCc7XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcblxuZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3RvcikgeyBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpOyB9IH1cblxuLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gMi8xMS8yMDE3LlxyXG4gKi9cbnZhciAkaW5EaWFsb2cgPSBleHBvcnRzLiRpbkRpYWxvZyA9IGZ1bmN0aW9uICRpbkRpYWxvZygpIHtcbiAgICAnbmdJbmplY3QnO1xuXG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsICRpbkRpYWxvZyk7XG59O1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvd2lkZ2V0cy9kaXJlY3RpdmVzL2luRGlhbG9nL2luLmRpYWxvZy5zZXJ2aWNlLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gMi8xMS8yMDE3LlxyXG4gKi9cclxuZXhwb3J0IGNsYXNzICRpbkRpYWxvZ3tcclxuICAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgJ25nSW5qZWN0J1xyXG5cclxuXHJcbiAgICB9XHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL3dpZGdldHMvZGlyZWN0aXZlcy9pbkRpYWxvZy9pbi5kaWFsb2cuc2VydmljZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcbiAqICBDcmVhdGVkIGJ5IFJpbmFzIE11c3RoYWZhIG9uIDIvMTEvMjAxNy5cbiAqXG4gKiAgICBOT1RFIDogWW91IGhhdmUgdG8gaW5pdGlhbGl6ZSBpdCBvbmNlIGluIHRoZSBpbmRleC5odG1sIGZpbGUuXG4gKlxuICogIFBhcmFtc1xuICpcbiAqICAgICAgY29udHJvbGxlciA9IFsgc3RyaW5nIF0gbmdDb250cm9sbGVyIG5hbWVcbiAqICAgICAgdGVtcGxhdGVVcmwgPSBbIHN0cmluZyBdIHVybCBvZiB0aGUgSFRNTCB0ZW1wbGF0ZVxuICogICAgICBjbGlja091dHNpZGVUb0Nsb3NlID0gWyBib29sZWFuIF0gZW5hYmxlL2Rpc2FibGUgY2xvc2UgYWN0aW9uIHdoZW4gdXNlciBjbGljayBvdXRzaWRlIG9mIHRoZSBkaWFsb2cgLyBkZWZhdWx0ID0gdHJ1ZVxuICogICAgICBlc2NhcGVUb0Nsb3NlID0gWyBib29sZWFuIF0gZW5hYmxlL2Rpc2FibGUgY2xvc2UgYWN0b24gd2hlbiB1c2VyIHByZXNzIGVzY2FwZSBidXR0b24gLyBkZWZhdWx0ID0gdHJ1ZVxuICogICAgICBoZWlnaHQgPSBbIGludCBdIGRpYWxvZyBoZWlnaHRcbiAqICAgICAgd2lkdGggPSBbIGludCBdIGRpYWxvZyB3aWR0aFxuICpcbiAqL1xudmFyIGluRGlhbG9nID0gZXhwb3J0cy5pbkRpYWxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBpbkRpYWxvZygpIHtcbiAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgaW5EaWFsb2cpO1xuXG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnRSc7XG4gICAgICAgIHRoaXMuc2NvcGUgPSB7fTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVVybCA9ICdhcHAvd2lkZ2V0cy9kaXJlY3RpdmVzL2luRGlhbG9nL2luLmRpYWxvZy5odG1sJztcbiAgICB9XG5cbiAgICBfY3JlYXRlQ2xhc3MoaW5EaWFsb2csIFt7XG4gICAgICAgIGtleTogJ2NvbnRyb2xsZXInLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gY29udHJvbGxlcigkaW5EaWFsb2csICRzY29wZSkge1xuICAgICAgICAgICAgJ25nSW5qZWN0JztcblxuICAgICAgICAgICAgJHNjb3BlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgJHNjb3BlLmNsaWNrT3V0c2lkZVRvQ2xvc2UgPSB0cnVlO1xuICAgICAgICAgICAgJHNjb3BlLmVzY2FwZVRvQ2xvc2UgPSB0cnVlO1xuXG4gICAgICAgICAgICB2YXIgaGlkZSA9IGZ1bmN0aW9uIGhpZGUoYXBwbHkpIHtcbiAgICAgICAgICAgICAgICAkc2NvcGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKGFwcGx5KSB7XG4gICAgICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2YXIgc2hvdyA9IGZ1bmN0aW9uIHNob3coZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhICYmIGRhdGEuY29udHJvbGxlciAhPSBudWxsICYmIGRhdGEudGVtcGxhdGVVcmwgIT0gbnVsbCkge1xuXG4gICAgICAgICAgICAgICAgICAgICRzY29wZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3R5bGUgPSAnJztcblxuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZGF0YSA9IGFuZ3VsYXIuY29weShkYXRhKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRhdGEuaGVpZ2h0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3R5bGUgKz0gJ2hlaWdodDogJyArICRzY29wZS5kYXRhLmhlaWdodCArICdweDsgJztcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5zdHlsZSArPSAndG9wOiA1MCU7ICc7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3R5bGUgKz0gJ21hcmdpbi10b3A6ICcgKyAtMSAqICRzY29wZS5kYXRhLmhlaWdodCAvIDIgKyAncHg7ICc7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRzY29wZS5kYXRhLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3R5bGUgKz0gJ3dpZHRoOiAnICsgJHNjb3BlLmRhdGEud2lkdGggKyAncHg7ICc7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3R5bGUgKz0gJ2xlZnQ6IDUwJTsgJztcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5zdHlsZSArPSAnbWFyZ2luLWxlZnQ6ICcgKyAtMSAqICRzY29wZS5kYXRhLndpZHRoIC8gMiArICdweDsgJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmICgkc2NvcGUuZGF0YS5jbGlja091dHNpZGVUb0Nsb3NlICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICRzY29wZS5jbGlja091dHNpZGVUb0Nsb3NlID0gJHNjb3BlLmRhdGEuY2xpY2tPdXRzaWRlVG9DbG9zZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRhdGEuZXNjYXBlVG9DbG9zZSAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZXNjYXBlVG9DbG9zZSA9ICRzY29wZS5kYXRhLmVzY2FwZVRvQ2xvc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAkc2NvcGUuYmFja0Ryb3BDbG9zZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmRhdGEuY2xpY2tPdXRzaWRlVG9DbG9zZSkge1xuICAgICAgICAgICAgICAgICAgICBoaWRlKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgJCh3aW5kb3cpLmtleWRvd24oZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgICAgIGlmICgkZXZlbnQua2V5Q29kZSA9PSAyNykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoJHNjb3BlLmVzY2FwZVRvQ2xvc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGUodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJGluRGlhbG9nLmhpZGUgPSBoaWRlO1xuXG4gICAgICAgICAgICAkaW5EaWFsb2cuc2hvdyA9IHNob3c7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gaW5EaWFsb2c7XG59KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC93aWRnZXRzL2RpcmVjdGl2ZXMvaW5EaWFsb2cvaW4uZGlhbG9nLmpzIiwiLyoqXG4gKiAgQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiAyLzExLzIwMTcuXG4gKlxuICogICAgTk9URSA6IFlvdSBoYXZlIHRvIGluaXRpYWxpemUgaXQgb25jZSBpbiB0aGUgaW5kZXguaHRtbCBmaWxlLlxuICpcbiAqICBQYXJhbXNcbiAqXG4gKiAgICAgIGNvbnRyb2xsZXIgPSBbIHN0cmluZyBdIG5nQ29udHJvbGxlciBuYW1lXG4gKiAgICAgIHRlbXBsYXRlVXJsID0gWyBzdHJpbmcgXSB1cmwgb2YgdGhlIEhUTUwgdGVtcGxhdGVcbiAqICAgICAgY2xpY2tPdXRzaWRlVG9DbG9zZSA9IFsgYm9vbGVhbiBdIGVuYWJsZS9kaXNhYmxlIGNsb3NlIGFjdGlvbiB3aGVuIHVzZXIgY2xpY2sgb3V0c2lkZSBvZiB0aGUgZGlhbG9nIC8gZGVmYXVsdCA9IHRydWVcbiAqICAgICAgZXNjYXBlVG9DbG9zZSA9IFsgYm9vbGVhbiBdIGVuYWJsZS9kaXNhYmxlIGNsb3NlIGFjdG9uIHdoZW4gdXNlciBwcmVzcyBlc2NhcGUgYnV0dG9uIC8gZGVmYXVsdCA9IHRydWVcbiAqICAgICAgaGVpZ2h0ID0gWyBpbnQgXSBkaWFsb2cgaGVpZ2h0XG4gKiAgICAgIHdpZHRoID0gWyBpbnQgXSBkaWFsb2cgd2lkdGhcbiAqXG4gKi9cbmV4cG9ydCBjbGFzcyBpbkRpYWxvZyB7XG4gICAgY29uc3RydWN0b3IoKXtcbiAgICAgICAgJ25nSW5qZWN0J1xuXG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnRSc7XG4gICAgICAgIHRoaXMuc2NvcGUgPSB7fTtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZVVybCA9ICdhcHAvd2lkZ2V0cy9kaXJlY3RpdmVzL2luRGlhbG9nL2luLmRpYWxvZy5odG1sJztcblxuICAgIH1cblxuICAgIGNvbnRyb2xsZXIoJGluRGlhbG9nLCAkc2NvcGUpe1xuICAgICAgICAnbmdJbmplY3QnXG5cbiAgICAgICAgJHNjb3BlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAkc2NvcGUuY2xpY2tPdXRzaWRlVG9DbG9zZSA9IHRydWU7XG4gICAgICAgICRzY29wZS5lc2NhcGVUb0Nsb3NlID0gdHJ1ZTtcblxuICAgICAgICB2YXIgaGlkZSA9IGZ1bmN0aW9uIChhcHBseSkge1xuICAgICAgICAgICAgJHNjb3BlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYoYXBwbHkpe1xuICAgICAgICAgICAgICAgICRzY29wZS4kYXBwbHkoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBzaG93ID0gZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGlmKGRhdGEgJiYgZGF0YS5jb250cm9sbGVyICE9IG51bGwgJiYgZGF0YS50ZW1wbGF0ZVVybCAhPSBudWxsKXtcblxuICAgICAgICAgICAgICAgICRzY29wZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICRzY29wZS5zdHlsZSA9ICcnO1xuXG4gICAgICAgICAgICAgICAgJHNjb3BlLmRhdGEgPSBhbmd1bGFyLmNvcHkoZGF0YSk7XG5cbiAgICAgICAgICAgICAgICBpZigkc2NvcGUuZGF0YS5oZWlnaHQpe1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3R5bGUgKz0gJ2hlaWdodDogJyArICRzY29wZS5kYXRhLmhlaWdodCArICdweDsgJztcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0eWxlICs9ICd0b3A6IDUwJTsgJztcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0eWxlICs9ICdtYXJnaW4tdG9wOiAnICsgKC0xICogJHNjb3BlLmRhdGEuaGVpZ2h0IC8gMikgKyAncHg7ICc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCRzY29wZS5kYXRhLndpZHRoKXtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0eWxlICs9ICd3aWR0aDogJyArICRzY29wZS5kYXRhLndpZHRoICsgJ3B4OyAnO1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuc3R5bGUgKz0gJ2xlZnQ6IDUwJTsgJztcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLnN0eWxlICs9ICdtYXJnaW4tbGVmdDogJyArICgtMSAqICRzY29wZS5kYXRhLndpZHRoIC8gMikgKyAncHg7ICc7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYoJHNjb3BlLmRhdGEuY2xpY2tPdXRzaWRlVG9DbG9zZSAhPSBudWxsKXtcbiAgICAgICAgICAgICAgICAgICAgJHNjb3BlLmNsaWNrT3V0c2lkZVRvQ2xvc2UgPSAkc2NvcGUuZGF0YS5jbGlja091dHNpZGVUb0Nsb3NlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZigkc2NvcGUuZGF0YS5lc2NhcGVUb0Nsb3NlICE9IG51bGwpe1xuICAgICAgICAgICAgICAgICAgICAkc2NvcGUuZXNjYXBlVG9DbG9zZSA9ICRzY29wZS5kYXRhLmVzY2FwZVRvQ2xvc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuXG4gICAgICAgICRzY29wZS5iYWNrRHJvcENsb3NlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgaWYoJHNjb3BlLmRhdGEuY2xpY2tPdXRzaWRlVG9DbG9zZSl7XG4gICAgICAgICAgICAgICAgaGlkZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLmtleWRvd24oZnVuY3Rpb24gKCRldmVudCkge1xuICAgICAgICAgICAgaWYoJGV2ZW50LmtleUNvZGUgPT0gMjcpe1xuICAgICAgICAgICAgICAgIGlmKCRzY29wZS5lc2NhcGVUb0Nsb3NlKXtcbiAgICAgICAgICAgICAgICAgICAgaGlkZSh0cnVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgJGluRGlhbG9nLmhpZGUgPSBoaWRlO1xuXG4gICAgICAgICRpbkRpYWxvZy5zaG93ID0gc2hvdztcblxuICAgIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvd2lkZ2V0cy9kaXJlY3RpdmVzL2luRGlhbG9nL2luLmRpYWxvZy5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcclxuICogQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiAyLzkvMjAxNy5cclxuICovXG52YXIgZHluYW1pY0NvbnRyb2xsZXIgPSBleHBvcnRzLmR5bmFtaWNDb250cm9sbGVyID0gZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIGR5bmFtaWNDb250cm9sbGVyKCkge1xuICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBkeW5hbWljQ29udHJvbGxlcik7XG5cbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy50ZXJtaW5hbCA9IHRydWU7XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSAxMDAwMDA7XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKGR5bmFtaWNDb250cm9sbGVyLCBbe1xuICAgICAgICBrZXk6ICdjb250cm9sbGVyJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGNvbnRyb2xsZXIoJHNjb3BlLCAkY29tcGlsZSwgJHBhcnNlKSB7XG4gICAgICAgICAgICAnbmdJbmplY3QnO1xuXG4gICAgICAgICAgICAkc2NvcGUuY29tcGlsZSA9ICRjb21waWxlO1xuICAgICAgICAgICAgJHNjb3BlLnBhcnNlID0gJHBhcnNlO1xuICAgICAgICB9XG4gICAgfSwge1xuICAgICAgICBrZXk6ICdsaW5rJyxcbiAgICAgICAgdmFsdWU6IGZ1bmN0aW9uIGxpbmsoc2NvcGUsIGVsZW0pIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gc2NvcGUucGFyc2UoZWxlbS5hdHRyKCdkeW5hbWljLWNvbnRyb2xsZXInKSkoc2NvcGUpO1xuICAgICAgICAgICAgZWxlbS5yZW1vdmVBdHRyKCdkeW5hbWljLWNvbnRyb2xsZXInKTtcbiAgICAgICAgICAgIGVsZW0uYXR0cignbmctY29udHJvbGxlcicsIG5hbWUpO1xuICAgICAgICAgICAgc2NvcGUuY29tcGlsZShlbGVtKShzY29wZSk7XG4gICAgICAgIH1cbiAgICB9XSk7XG5cbiAgICByZXR1cm4gZHluYW1pY0NvbnRyb2xsZXI7XG59KCk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2FwcC9mbG93TWFuYWdlci9keW5hbWljLmNvbnRyb2xsZXIuZGlyZWN0aXZlLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gMi85LzIwMTcuXHJcbiAqL1xyXG5leHBvcnQgY2xhc3MgZHluYW1pY0NvbnRyb2xsZXIge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICAnbmdJbmplY3QnO1xyXG5cclxuICAgICAgICB0aGlzLnJlc3RyaWN0ID0gJ0EnO1xyXG4gICAgICAgIHRoaXMudGVybWluYWwgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSAxMDAwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgY29udHJvbGxlcigkc2NvcGUsICRjb21waWxlLCAkcGFyc2Upe1xyXG4gICAgICAgICduZ0luamVjdCc7XHJcblxyXG4gICAgICAgICRzY29wZS5jb21waWxlID0gJGNvbXBpbGU7XHJcbiAgICAgICAgJHNjb3BlLnBhcnNlID0gJHBhcnNlO1xyXG4gICAgfVxyXG5cclxuICAgIGxpbmsoc2NvcGUsIGVsZW0pIHtcclxuICAgICAgICB2YXIgbmFtZSA9IHNjb3BlLnBhcnNlKGVsZW0uYXR0cignZHluYW1pYy1jb250cm9sbGVyJykpKHNjb3BlKTtcclxuICAgICAgICBlbGVtLnJlbW92ZUF0dHIoJ2R5bmFtaWMtY29udHJvbGxlcicpO1xyXG4gICAgICAgIGVsZW0uYXR0cignbmctY29udHJvbGxlcicsIG5hbWUpO1xyXG4gICAgICAgIHNjb3BlLmNvbXBpbGUoZWxlbSkoc2NvcGUpO1xyXG4gICAgfVxyXG5cclxufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9hcHAvZmxvd01hbmFnZXIvZHluYW1pYy5jb250cm9sbGVyLmRpcmVjdGl2ZS5qcyIsIid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuXG52YXIgX2NyZWF0ZUNsYXNzID0gZnVuY3Rpb24gKCkgeyBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHsgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykgeyB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldOyBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7IGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTsgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTsgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpOyB9IH0gcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHsgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTsgaWYgKHN0YXRpY1Byb3BzKSBkZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7IHJldHVybiBDb25zdHJ1Y3RvcjsgfTsgfSgpO1xuXG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG4vKipcclxuICogQ3JlYXRlZCBieSBSaW5hcyBNdXN0aGFmYSBvbiAyLzkvMjAxNy5cclxuICovXG5cbnZhciBzZXREb20gPSBleHBvcnRzLnNldERvbSA9IGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBzZXREb20oKSB7XG4gICAgICAgICduZ0luamVjdCc7XG5cbiAgICAgICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIHNldERvbSk7XG5cbiAgICAgICAgdGhpcy5yZXN0cmljdCA9ICdBJztcbiAgICAgICAgdGhpcy5zY29wZSA9IHtcbiAgICAgICAgICAgICd3aWRnZXREYXRhJzogJz0nXG4gICAgICAgIH07XG4gICAgfVxuXG4gICAgX2NyZWF0ZUNsYXNzKHNldERvbSwgW3tcbiAgICAgICAga2V5OiAnbGluaycsXG4gICAgICAgIHZhbHVlOiBmdW5jdGlvbiBsaW5rKHNjb3BlLCBlbG0sIGF0dHIpIHtcbiAgICAgICAgICAgIHZhciB3aWRnZXQgPSBzY29wZS53aWRnZXREYXRhO1xuICAgICAgICAgICAgZmxvd01hbmFnZXIud2lkZ2V0RGF0YVt3aWRnZXQudGFnXSA9IHsgRE9NOiBlbG0sIHdpZGdldDogd2lkZ2V0IH07XG4gICAgICAgICAgICBmbG93TWFuYWdlci5zZXRTY29wZSh3aWRnZXQpO1xuICAgICAgICB9XG4gICAgfV0pO1xuXG4gICAgcmV0dXJuIHNldERvbTtcbn0oKTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2Zsb3dNYW5hZ2VyL3NldC5kb20uZGlyZWN0aXZlLmpzIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgUmluYXMgTXVzdGhhZmEgb24gMi85LzIwMTcuXHJcbiAqL1xyXG5cclxuZXhwb3J0IGNsYXNzIHNldERvbSB7XHJcblxyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgICduZ0luamVjdCc7XHJcblxyXG4gICAgICAgIHRoaXMucmVzdHJpY3QgPSAnQSc7XHJcbiAgICAgICAgdGhpcy5zY29wZSA9IHtcclxuICAgICAgICAgICAgJ3dpZGdldERhdGEnIDogJz0nXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBsaW5rKHNjb3BlLCBlbG0sIGF0dHIpe1xyXG4gICAgICAgIHZhciB3aWRnZXQgPSBzY29wZS53aWRnZXREYXRhO1xyXG4gICAgICAgIGZsb3dNYW5hZ2VyLndpZGdldERhdGFbd2lkZ2V0LnRhZ10gPSB7IERPTTplbG0sIHdpZGdldDp3aWRnZXQgfTtcclxuICAgICAgICBmbG93TWFuYWdlci5zZXRTY29wZSh3aWRnZXQpO1xyXG4gICAgfVxyXG5cclxufVxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvYXBwL2Zsb3dNYW5hZ2VyL3NldC5kb20uZGlyZWN0aXZlLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==