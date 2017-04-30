/*!
 * Packery PACKAGED v2.1.1
 * Gapless, draggable grid layouts
 *
 * Licensed GPLv3 for open source use
 * or Packery Commercial License for commercial use
 *
 * http://packery.metafizzy.co
 * Copyright 2016 Metafizzy
 */

!function(t,e){"use strict";"function"==typeof define&&define.amd?define("jquery-bridget/jquery-bridget",["jquery"],function(i){e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("jquery")):t.jQueryBridget=e(t,t.jQuery)}(window,function(t,e){"use strict";function i(i,s,a){function h(t,e,n){var o,s="$()."+i+'("'+e+'")';return t.each(function(t,h){var u=a.data(h,i);if(!u)return void r(i+" not initialized. Cannot call methods, i.e. "+s);var c=u[e];if(!c||"_"==e.charAt(0))return void r(s+" is not a valid method");var d=c.apply(u,n);o=void 0===o?d:o}),void 0!==o?o:t}function u(t,e){t.each(function(t,n){var o=a.data(n,i);o?(o.option(e),o._init()):(o=new s(n,e),a.data(n,i,o))})}a=a||e||t.jQuery,a&&(s.prototype.option||(s.prototype.option=function(t){a.isPlainObject(t)&&(this.options=a.extend(!0,this.options,t))}),a.fn[i]=function(t){if("string"==typeof t){var e=o.call(arguments,1);return h(this,t,e)}return u(this,t),this},n(a))}function n(t){!t||t&&t.bridget||(t.bridget=i)}var o=Array.prototype.slice,s=t.console,r="undefined"==typeof s?function(){}:function(t){s.error(t)};return n(e||t.jQuery),i}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("get-size/get-size",[],function(){return e()}):"object"==typeof module&&module.exports?module.exports=e():t.getSize=e()}(window,function(){"use strict";function t(t){var e=parseFloat(t),i=-1==t.indexOf("%")&&!isNaN(e);return i&&e}function e(){}function i(){for(var t={width:0,height:0,innerWidth:0,innerHeight:0,outerWidth:0,outerHeight:0},e=0;u>e;e++){var i=h[e];t[i]=0}return t}function n(t){var e=getComputedStyle(t);return e||a("Style returned "+e+". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"),e}function o(){if(!c){c=!0;var e=document.createElement("div");e.style.width="200px",e.style.padding="1px 2px 3px 4px",e.style.borderStyle="solid",e.style.borderWidth="1px 2px 3px 4px",e.style.boxSizing="border-box";var i=document.body||document.documentElement;i.appendChild(e);var o=n(e);s.isBoxSizeOuter=r=200==t(o.width),i.removeChild(e)}}function s(e){if(o(),"string"==typeof e&&(e=document.querySelector(e)),e&&"object"==typeof e&&e.nodeType){var s=n(e);if("none"==s.display)return i();var a={};a.width=e.offsetWidth,a.height=e.offsetHeight;for(var c=a.isBorderBox="border-box"==s.boxSizing,d=0;u>d;d++){var f=h[d],l=s[f],p=parseFloat(l);a[f]=isNaN(p)?0:p}var g=a.paddingLeft+a.paddingRight,m=a.paddingTop+a.paddingBottom,y=a.marginLeft+a.marginRight,v=a.marginTop+a.marginBottom,_=a.borderLeftWidth+a.borderRightWidth,x=a.borderTopWidth+a.borderBottomWidth,b=c&&r,E=t(s.width);E!==!1&&(a.width=E+(b?0:g+_));var T=t(s.height);return T!==!1&&(a.height=T+(b?0:m+x)),a.innerWidth=a.width-(g+_),a.innerHeight=a.height-(m+x),a.outerWidth=a.width+y,a.outerHeight=a.height+v,a}}var r,a="undefined"==typeof console?e:function(t){console.error(t)},h=["paddingLeft","paddingRight","paddingTop","paddingBottom","marginLeft","marginRight","marginTop","marginBottom","borderLeftWidth","borderRightWidth","borderTopWidth","borderBottomWidth"],u=h.length,c=!1;return s}),function(t,e){"function"==typeof define&&define.amd?define("ev-emitter/ev-emitter",e):"object"==typeof module&&module.exports?module.exports=e():t.EvEmitter=e()}(this,function(){function t(){}var e=t.prototype;return e.on=function(t,e){if(t&&e){var i=this._events=this._events||{},n=i[t]=i[t]||[];return-1==n.indexOf(e)&&n.push(e),this}},e.once=function(t,e){if(t&&e){this.on(t,e);var i=this._onceEvents=this._onceEvents||{},n=i[t]=i[t]||{};return n[e]=!0,this}},e.off=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=i.indexOf(e);return-1!=n&&i.splice(n,1),this}},e.emitEvent=function(t,e){var i=this._events&&this._events[t];if(i&&i.length){var n=0,o=i[n];e=e||[];for(var s=this._onceEvents&&this._onceEvents[t];o;){var r=s&&s[o];r&&(this.off(t,o),delete s[o]),o.apply(this,e),n+=r?0:1,o=i[n]}return this}},t}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("desandro-matches-selector/matches-selector",e):"object"==typeof module&&module.exports?module.exports=e():t.matchesSelector=e()}(window,function(){"use strict";var t=function(){var t=Element.prototype;if(t.matches)return"matches";if(t.matchesSelector)return"matchesSelector";for(var e=["webkit","moz","ms","o"],i=0;i<e.length;i++){var n=e[i],o=n+"MatchesSelector";if(t[o])return o}}();return function(e,i){return e[t](i)}}),function(t,e){"function"==typeof define&&define.amd?define("fizzy-ui-utils/utils",["desandro-matches-selector/matches-selector"],function(i){return e(t,i)}):"object"==typeof module&&module.exports?module.exports=e(t,require("desandro-matches-selector")):t.fizzyUIUtils=e(t,t.matchesSelector)}(window,function(t,e){var i={};i.extend=function(t,e){for(var i in e)t[i]=e[i];return t},i.modulo=function(t,e){return(t%e+e)%e},i.makeArray=function(t){var e=[];if(Array.isArray(t))e=t;else if(t&&"number"==typeof t.length)for(var i=0;i<t.length;i++)e.push(t[i]);else e.push(t);return e},i.removeFrom=function(t,e){var i=t.indexOf(e);-1!=i&&t.splice(i,1)},i.getParent=function(t,i){for(;t!=document.body;)if(t=t.parentNode,e(t,i))return t},i.getQueryElement=function(t){return"string"==typeof t?document.querySelector(t):t},i.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},i.filterFindElements=function(t,n){t=i.makeArray(t);var o=[];return t.forEach(function(t){if(t instanceof HTMLElement){if(!n)return void o.push(t);e(t,n)&&o.push(t);for(var i=t.querySelectorAll(n),s=0;s<i.length;s++)o.push(i[s])}}),o},i.debounceMethod=function(t,e,i){var n=t.prototype[e],o=e+"Timeout";t.prototype[e]=function(){var t=this[o];t&&clearTimeout(t);var e=arguments,s=this;this[o]=setTimeout(function(){n.apply(s,e),delete s[o]},i||100)}},i.docReady=function(t){"complete"==document.readyState?t():document.addEventListener("DOMContentLoaded",t)},i.toDashed=function(t){return t.replace(/(.)([A-Z])/g,function(t,e,i){return e+"-"+i}).toLowerCase()};var n=t.console;return i.htmlInit=function(e,o){i.docReady(function(){var s=i.toDashed(o),r="data-"+s,a=document.querySelectorAll("["+r+"]"),h=document.querySelectorAll(".js-"+s),u=i.makeArray(a).concat(i.makeArray(h)),c=r+"-options",d=t.jQuery;u.forEach(function(t){var i,s=t.getAttribute(r)||t.getAttribute(c);try{i=s&&JSON.parse(s)}catch(a){return void(n&&n.error("Error parsing "+r+" on "+t.className+": "+a))}var h=new e(t,i);d&&d.data(t,o,h)})})},i}),function(t,e){"function"==typeof define&&define.amd?define("outlayer/item",["ev-emitter/ev-emitter","get-size/get-size"],e):"object"==typeof module&&module.exports?module.exports=e(require("ev-emitter"),require("get-size")):(t.Outlayer={},t.Outlayer.Item=e(t.EvEmitter,t.getSize))}(window,function(t,e){"use strict";function i(t){for(var e in t)return!1;return e=null,!0}function n(t,e){t&&(this.element=t,this.layout=e,this.position={x:0,y:0},this._create())}function o(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}var s=document.documentElement.style,r="string"==typeof s.transition?"transition":"WebkitTransition",a="string"==typeof s.transform?"transform":"WebkitTransform",h={WebkitTransition:"webkitTransitionEnd",transition:"transitionend"}[r],u={transform:a,transition:r,transitionDuration:r+"Duration",transitionProperty:r+"Property",transitionDelay:r+"Delay"},c=n.prototype=Object.create(t.prototype);c.constructor=n,c._create=function(){this._transn={ingProperties:{},clean:{},onEnd:{}},this.css({position:"absolute"})},c.handleEvent=function(t){var e="on"+t.type;this[e]&&this[e](t)},c.getSize=function(){this.size=e(this.element)},c.css=function(t){var e=this.element.style;for(var i in t){var n=u[i]||i;e[n]=t[i]}},c.getPosition=function(){var t=getComputedStyle(this.element),e=this.layout._getOption("originLeft"),i=this.layout._getOption("originTop"),n=t[e?"left":"right"],o=t[i?"top":"bottom"],s=this.layout.size,r=-1!=n.indexOf("%")?parseFloat(n)/100*s.width:parseInt(n,10),a=-1!=o.indexOf("%")?parseFloat(o)/100*s.height:parseInt(o,10);r=isNaN(r)?0:r,a=isNaN(a)?0:a,r-=e?s.paddingLeft:s.paddingRight,a-=i?s.paddingTop:s.paddingBottom,this.position.x=r,this.position.y=a},c.layoutPosition=function(){var t=this.layout.size,e={},i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop"),o=i?"paddingLeft":"paddingRight",s=i?"left":"right",r=i?"right":"left",a=this.position.x+t[o];e[s]=this.getXValue(a),e[r]="";var h=n?"paddingTop":"paddingBottom",u=n?"top":"bottom",c=n?"bottom":"top",d=this.position.y+t[h];e[u]=this.getYValue(d),e[c]="",this.css(e),this.emitEvent("layout",[this])},c.getXValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&!e?t/this.layout.size.width*100+"%":t+"px"},c.getYValue=function(t){var e=this.layout._getOption("horizontal");return this.layout.options.percentPosition&&e?t/this.layout.size.height*100+"%":t+"px"},c._transitionTo=function(t,e){this.getPosition();var i=this.position.x,n=this.position.y,o=parseInt(t,10),s=parseInt(e,10),r=o===this.position.x&&s===this.position.y;if(this.setPosition(t,e),r&&!this.isTransitioning)return void this.layoutPosition();var a=t-i,h=e-n,u={};u.transform=this.getTranslate(a,h),this.transition({to:u,onTransitionEnd:{transform:this.layoutPosition},isCleaning:!0})},c.getTranslate=function(t,e){var i=this.layout._getOption("originLeft"),n=this.layout._getOption("originTop");return t=i?t:-t,e=n?e:-e,"translate3d("+t+"px, "+e+"px, 0)"},c.goTo=function(t,e){this.setPosition(t,e),this.layoutPosition()},c.moveTo=c._transitionTo,c.setPosition=function(t,e){this.position.x=parseInt(t,10),this.position.y=parseInt(e,10)},c._nonTransition=function(t){this.css(t.to),t.isCleaning&&this._removeStyles(t.to);for(var e in t.onTransitionEnd)t.onTransitionEnd[e].call(this)},c.transition=function(t){if(!parseFloat(this.layout.options.transitionDuration))return void this._nonTransition(t);var e=this._transn;for(var i in t.onTransitionEnd)e.onEnd[i]=t.onTransitionEnd[i];for(i in t.to)e.ingProperties[i]=!0,t.isCleaning&&(e.clean[i]=!0);if(t.from){this.css(t.from);var n=this.element.offsetHeight;n=null}this.enableTransition(t.to),this.css(t.to),this.isTransitioning=!0};var d="opacity,"+o(a);c.enableTransition=function(){if(!this.isTransitioning){var t=this.layout.options.transitionDuration;t="number"==typeof t?t+"ms":t,this.css({transitionProperty:d,transitionDuration:t,transitionDelay:this.staggerDelay||0}),this.element.addEventListener(h,this,!1)}},c.onwebkitTransitionEnd=function(t){this.ontransitionend(t)},c.onotransitionend=function(t){this.ontransitionend(t)};var f={"-webkit-transform":"transform"};c.ontransitionend=function(t){if(t.target===this.element){var e=this._transn,n=f[t.propertyName]||t.propertyName;if(delete e.ingProperties[n],i(e.ingProperties)&&this.disableTransition(),n in e.clean&&(this.element.style[t.propertyName]="",delete e.clean[n]),n in e.onEnd){var o=e.onEnd[n];o.call(this),delete e.onEnd[n]}this.emitEvent("transitionEnd",[this])}},c.disableTransition=function(){this.removeTransitionStyles(),this.element.removeEventListener(h,this,!1),this.isTransitioning=!1},c._removeStyles=function(t){var e={};for(var i in t)e[i]="";this.css(e)};var l={transitionProperty:"",transitionDuration:"",transitionDelay:""};return c.removeTransitionStyles=function(){this.css(l)},c.stagger=function(t){t=isNaN(t)?0:t,this.staggerDelay=t+"ms"},c.removeElem=function(){this.element.parentNode.removeChild(this.element),this.css({display:""}),this.emitEvent("remove",[this])},c.remove=function(){return r&&parseFloat(this.layout.options.transitionDuration)?(this.once("transitionEnd",function(){this.removeElem()}),void this.hide()):void this.removeElem()},c.reveal=function(){delete this.isHidden,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("visibleStyle");e[i]=this.onRevealTransitionEnd,this.transition({from:t.hiddenStyle,to:t.visibleStyle,isCleaning:!0,onTransitionEnd:e})},c.onRevealTransitionEnd=function(){this.isHidden||this.emitEvent("reveal")},c.getHideRevealTransitionEndProperty=function(t){var e=this.layout.options[t];if(e.opacity)return"opacity";for(var i in e)return i},c.hide=function(){this.isHidden=!0,this.css({display:""});var t=this.layout.options,e={},i=this.getHideRevealTransitionEndProperty("hiddenStyle");e[i]=this.onHideTransitionEnd,this.transition({from:t.visibleStyle,to:t.hiddenStyle,isCleaning:!0,onTransitionEnd:e})},c.onHideTransitionEnd=function(){this.isHidden&&(this.css({display:"none"}),this.emitEvent("hide"))},c.destroy=function(){this.css({position:"",left:"",right:"",top:"",bottom:"",transition:"",transform:""})},n}),function(t,e){"use strict";"function"==typeof define&&define.amd?define("outlayer/outlayer",["ev-emitter/ev-emitter","get-size/get-size","fizzy-ui-utils/utils","./item"],function(i,n,o,s){return e(t,i,n,o,s)}):"object"==typeof module&&module.exports?module.exports=e(t,require("ev-emitter"),require("get-size"),require("fizzy-ui-utils"),require("./item")):t.Outlayer=e(t,t.EvEmitter,t.getSize,t.fizzyUIUtils,t.Outlayer.Item)}(window,function(t,e,i,n,o){"use strict";function s(t,e){var i=n.getQueryElement(t);if(!i)return void(h&&h.error("Bad element for "+this.constructor.namespace+": "+(i||t)));this.element=i,u&&(this.$element=u(this.element)),this.options=n.extend({},this.constructor.defaults),this.option(e);var o=++d;this.element.outlayerGUID=o,f[o]=this,this._create();var s=this._getOption("initLayout");s&&this.layout()}function r(t){function e(){t.apply(this,arguments)}return e.prototype=Object.create(t.prototype),e.prototype.constructor=e,e}function a(t){if("number"==typeof t)return t;var e=t.match(/(^\d*\.?\d*)(\w*)/),i=e&&e[1],n=e&&e[2];if(!i.length)return 0;i=parseFloat(i);var o=p[n]||1;return i*o}var h=t.console,u=t.jQuery,c=function(){},d=0,f={};s.namespace="outlayer",s.Item=o,s.defaults={containerStyle:{position:"relative"},initLayout:!0,originLeft:!0,originTop:!0,resize:!0,resizeContainer:!0,transitionDuration:"0.4s",hiddenStyle:{opacity:0,transform:"scale(0.001)"},visibleStyle:{opacity:1,transform:"scale(1)"}};var l=s.prototype;n.extend(l,e.prototype),l.option=function(t){n.extend(this.options,t)},l._getOption=function(t){var e=this.constructor.compatOptions[t];return e&&void 0!==this.options[e]?this.options[e]:this.options[t]},s.compatOptions={initLayout:"isInitLayout",horizontal:"isHorizontal",layoutInstant:"isLayoutInstant",originLeft:"isOriginLeft",originTop:"isOriginTop",resize:"isResizeBound",resizeContainer:"isResizingContainer"},l._create=function(){this.reloadItems(),this.stamps=[],this.stamp(this.options.stamp),n.extend(this.element.style,this.options.containerStyle);var t=this._getOption("resize");t&&this.bindResize()},l.reloadItems=function(){this.items=this._itemize(this.element.children)},l._itemize=function(t){for(var e=this._filterFindItemElements(t),i=this.constructor.Item,n=[],o=0;o<e.length;o++){var s=e[o],r=new i(s,this);n.push(r)}return n},l._filterFindItemElements=function(t){return n.filterFindElements(t,this.options.itemSelector)},l.getItemElements=function(){return this.items.map(function(t){return t.element})},l.layout=function(){this._resetLayout(),this._manageStamps();var t=this._getOption("layoutInstant"),e=void 0!==t?t:!this._isLayoutInited;this.layoutItems(this.items,e),this._isLayoutInited=!0},l._init=l.layout,l._resetLayout=function(){this.getSize()},l.getSize=function(){this.size=i(this.element)},l._getMeasurement=function(t,e){var n,o=this.options[t];o?("string"==typeof o?n=this.element.querySelector(o):o instanceof HTMLElement&&(n=o),this[t]=n?i(n)[e]:o):this[t]=0},l.layoutItems=function(t,e){t=this._getItemsForLayout(t),this._layoutItems(t,e),this._postLayout()},l._getItemsForLayout=function(t){return t.filter(function(t){return!t.isIgnored})},l._layoutItems=function(t,e){if(this._emitCompleteOnItems("layout",t),t&&t.length){var i=[];t.forEach(function(t){var n=this._getItemLayoutPosition(t);n.item=t,n.isInstant=e||t.isLayoutInstant,i.push(n)},this),this._processLayoutQueue(i)}},l._getItemLayoutPosition=function(){return{x:0,y:0}},l._processLayoutQueue=function(t){this.updateStagger(),t.forEach(function(t,e){this._positionItem(t.item,t.x,t.y,t.isInstant,e)},this)},l.updateStagger=function(){var t=this.options.stagger;return null===t||void 0===t?void(this.stagger=0):(this.stagger=a(t),this.stagger)},l._positionItem=function(t,e,i,n,o){n?t.goTo(e,i):(t.stagger(o*this.stagger),t.moveTo(e,i))},l._postLayout=function(){this.resizeContainer()},l.resizeContainer=function(){var t=this._getOption("resizeContainer");if(t){var e=this._getContainerSize();e&&(this._setContainerMeasure(e.width,!0),this._setContainerMeasure(e.height,!1))}},l._getContainerSize=c,l._setContainerMeasure=function(t,e){if(void 0!==t){var i=this.size;i.isBorderBox&&(t+=e?i.paddingLeft+i.paddingRight+i.borderLeftWidth+i.borderRightWidth:i.paddingBottom+i.paddingTop+i.borderTopWidth+i.borderBottomWidth),t=Math.max(t,0),this.element.style[e?"width":"height"]=t+"px"}},l._emitCompleteOnItems=function(t,e){function i(){o.dispatchEvent(t+"Complete",null,[e])}function n(){r++,r==s&&i()}var o=this,s=e.length;if(!e||!s)return void i();var r=0;e.forEach(function(e){e.once(t,n)})},l.dispatchEvent=function(t,e,i){var n=e?[e].concat(i):i;if(this.emitEvent(t,n),u)if(this.$element=this.$element||u(this.element),e){var o=u.Event(e);o.type=t,this.$element.trigger(o,i)}else this.$element.trigger(t,i)},l.ignore=function(t){var e=this.getItem(t);e&&(e.isIgnored=!0)},l.unignore=function(t){var e=this.getItem(t);e&&delete e.isIgnored},l.stamp=function(t){t=this._find(t),t&&(this.stamps=this.stamps.concat(t),t.forEach(this.ignore,this))},l.unstamp=function(t){t=this._find(t),t&&t.forEach(function(t){n.removeFrom(this.stamps,t),this.unignore(t)},this)},l._find=function(t){return t?("string"==typeof t&&(t=this.element.querySelectorAll(t)),t=n.makeArray(t)):void 0},l._manageStamps=function(){this.stamps&&this.stamps.length&&(this._getBoundingRect(),this.stamps.forEach(this._manageStamp,this))},l._getBoundingRect=function(){var t=this.element.getBoundingClientRect(),e=this.size;this._boundingRect={left:t.left+e.paddingLeft+e.borderLeftWidth,top:t.top+e.paddingTop+e.borderTopWidth,right:t.right-(e.paddingRight+e.borderRightWidth),bottom:t.bottom-(e.paddingBottom+e.borderBottomWidth)}},l._manageStamp=c,l._getElementOffset=function(t){var e=t.getBoundingClientRect(),n=this._boundingRect,o=i(t),s={left:e.left-n.left-o.marginLeft,top:e.top-n.top-o.marginTop,right:n.right-e.right-o.marginRight,bottom:n.bottom-e.bottom-o.marginBottom};return s},l.handleEvent=n.handleEvent,l.bindResize=function(){t.addEventListener("resize",this),this.isResizeBound=!0},l.unbindResize=function(){t.removeEventListener("resize",this),this.isResizeBound=!1},l.onresize=function(){this.resize()},n.debounceMethod(s,"onresize",100),l.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&this.layout()},l.needsResizeLayout=function(){var t=i(this.element),e=this.size&&t;return e&&t.innerWidth!==this.size.innerWidth},l.addItems=function(t){var e=this._itemize(t);return e.length&&(this.items=this.items.concat(e)),e},l.appended=function(t){var e=this.addItems(t);e.length&&(this.layoutItems(e,!0),this.reveal(e))},l.prepended=function(t){var e=this._itemize(t);if(e.length){var i=this.items.slice(0);this.items=e.concat(i),this._resetLayout(),this._manageStamps(),this.layoutItems(e,!0),this.reveal(e),this.layoutItems(i)}},l.reveal=function(t){if(this._emitCompleteOnItems("reveal",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.reveal()})}},l.hide=function(t){if(this._emitCompleteOnItems("hide",t),t&&t.length){var e=this.updateStagger();t.forEach(function(t,i){t.stagger(i*e),t.hide()})}},l.revealItemElements=function(t){var e=this.getItems(t);this.reveal(e)},l.hideItemElements=function(t){var e=this.getItems(t);this.hide(e)},l.getItem=function(t){for(var e=0;e<this.items.length;e++){var i=this.items[e];if(i.element==t)return i}},l.getItems=function(t){t=n.makeArray(t);var e=[];return t.forEach(function(t){var i=this.getItem(t);i&&e.push(i)},this),e},l.remove=function(t){var e=this.getItems(t);this._emitCompleteOnItems("remove",e),e&&e.length&&e.forEach(function(t){t.remove(),n.removeFrom(this.items,t)},this)},l.destroy=function(){var t=this.element.style;t.height="",t.position="",t.width="",this.items.forEach(function(t){t.destroy()}),this.unbindResize();var e=this.element.outlayerGUID;delete f[e],delete this.element.outlayerGUID,u&&u.removeData(this.element,this.constructor.namespace)},s.data=function(t){t=n.getQueryElement(t);var e=t&&t.outlayerGUID;return e&&f[e]},s.create=function(t,e){var i=r(s);return i.defaults=n.extend({},s.defaults),n.extend(i.defaults,e),i.compatOptions=n.extend({},s.compatOptions),i.namespace=t,i.data=s.data,i.Item=r(o),n.htmlInit(i,t),u&&u.bridget&&u.bridget(t,i),i};var p={ms:1,s:1e3};return s.Item=o,s}),function(t,e){"function"==typeof define&&define.amd?define("packery/js/rect",e):"object"==typeof module&&module.exports?module.exports=e():(t.Packery=t.Packery||{},t.Packery.Rect=e())}(window,function(){"use strict";function t(e){for(var i in t.defaults)this[i]=t.defaults[i];for(i in e)this[i]=e[i]}t.defaults={x:0,y:0,width:0,height:0};var e=t.prototype;return e.contains=function(t){var e=t.width||0,i=t.height||0;return this.x<=t.x&&this.y<=t.y&&this.x+this.width>=t.x+e&&this.y+this.height>=t.y+i},e.overlaps=function(t){var e=this.x+this.width,i=this.y+this.height,n=t.x+t.width,o=t.y+t.height;return this.x<n&&e>t.x&&this.y<o&&i>t.y},e.getMaximalFreeRects=function(e){if(!this.overlaps(e))return!1;var i,n=[],o=this.x+this.width,s=this.y+this.height,r=e.x+e.width,a=e.y+e.height;return this.y<e.y&&(i=new t({x:this.x,y:this.y,width:this.width,height:e.y-this.y}),n.push(i)),o>r&&(i=new t({x:r,y:this.y,width:o-r,height:this.height}),n.push(i)),s>a&&(i=new t({x:this.x,y:a,width:this.width,height:s-a}),n.push(i)),this.x<e.x&&(i=new t({x:this.x,y:this.y,width:e.x-this.x,height:this.height}),n.push(i)),n},e.canFit=function(t){return this.width>=t.width&&this.height>=t.height},t}),function(t,e){if("function"==typeof define&&define.amd)define("packery/js/packer",["./rect"],e);else if("object"==typeof module&&module.exports)module.exports=e(require("./rect"));else{var i=t.Packery=t.Packery||{};i.Packer=e(i.Rect)}}(window,function(t){"use strict";function e(t,e,i){this.width=t||0,this.height=e||0,this.sortDirection=i||"downwardLeftToRight",this.reset()}var i=e.prototype;i.reset=function(){this.spaces=[];var e=new t({x:0,y:0,width:this.width,height:this.height});this.spaces.push(e),this.sorter=n[this.sortDirection]||n.downwardLeftToRight},i.pack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e];if(i.canFit(t)){this.placeInSpace(t,i);break}}},i.columnPack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e],n=i.x<=t.x&&i.x+i.width>=t.x+t.width&&i.height>=t.height-.01;if(n){t.y=i.y,this.placed(t);break}}},i.rowPack=function(t){for(var e=0;e<this.spaces.length;e++){var i=this.spaces[e],n=i.y<=t.y&&i.y+i.height>=t.y+t.height&&i.width>=t.width-.01;if(n){t.x=i.x,this.placed(t);break}}},i.placeInSpace=function(t,e){t.x=e.x,t.y=e.y,this.placed(t)},i.placed=function(t){for(var e=[],i=0;i<this.spaces.length;i++){var n=this.spaces[i],o=n.getMaximalFreeRects(t);o?e.push.apply(e,o):e.push(n)}this.spaces=e,this.mergeSortSpaces()},i.mergeSortSpaces=function(){e.mergeRects(this.spaces),this.spaces.sort(this.sorter)},i.addSpace=function(t){this.spaces.push(t),this.mergeSortSpaces()},e.mergeRects=function(t){var e=0,i=t[e];t:for(;i;){for(var n=0,o=t[e+n];o;){if(o==i)n++;else{if(o.contains(i)){t.splice(e,1),i=t[e];continue t}i.contains(o)?t.splice(e+n,1):n++}o=t[e+n]}e++,i=t[e]}return t};var n={downwardLeftToRight:function(t,e){return t.y-e.y||t.x-e.x},rightwardTopToBottom:function(t,e){return t.x-e.x||t.y-e.y}};return e}),function(t,e){"function"==typeof define&&define.amd?define("packery/js/item",["outlayer/outlayer","./rect"],e):"object"==typeof module&&module.exports?module.exports=e(require("outlayer"),require("./rect")):t.Packery.Item=e(t.Outlayer,t.Packery.Rect)}(window,function(t,e){"use strict";var i=document.documentElement.style,n="string"==typeof i.transform?"transform":"WebkitTransform",o=function(){t.Item.apply(this,arguments)},s=o.prototype=Object.create(t.Item.prototype),r=s._create;s._create=function(){r.call(this),this.rect=new e};var a=s.moveTo;return s.moveTo=function(t,e){var i=Math.abs(this.position.x-t),n=Math.abs(this.position.y-e),o=this.layout.dragItemCount&&!this.isPlacing&&!this.isTransitioning&&1>i&&1>n;return o?void this.goTo(t,e):void a.apply(this,arguments)},s.enablePlacing=function(){this.removeTransitionStyles(),this.isTransitioning&&n&&(this.element.style[n]="none"),this.isTransitioning=!1,this.getSize(),this.layout._setRectSize(this.element,this.rect),this.isPlacing=!0},s.disablePlacing=function(){this.isPlacing=!1},s.removeElem=function(){this.element.parentNode.removeChild(this.element),this.layout.packer.addSpace(this.rect),this.emitEvent("remove",[this])},s.showDropPlaceholder=function(){var t=this.dropPlaceholder;t||(t=this.dropPlaceholder=document.createElement("div"),t.className="packery-drop-placeholder",t.style.position="absolute"),t.style.width=this.size.width+"px",t.style.height=this.size.height+"px",this.positionDropPlaceholder(),this.layout.element.appendChild(t)},s.positionDropPlaceholder=function(){this.dropPlaceholder.style[n]="translate("+this.rect.x+"px, "+this.rect.y+"px)"},s.hideDropPlaceholder=function(){var t=this.dropPlaceholder.parentNode;t&&t.removeChild(this.dropPlaceholder)},o}),function(t,e){"function"==typeof define&&define.amd?define(["get-size/get-size","outlayer/outlayer","packery/js/rect","packery/js/packer","packery/js/item"],e):"object"==typeof module&&module.exports?module.exports=e(require("get-size"),require("outlayer"),require("./rect"),require("./packer"),require("./item")):t.Packery=e(t.getSize,t.Outlayer,t.Packery.Rect,t.Packery.Packer,t.Packery.Item)}(window,function(t,e,i,n,o){"use strict";function s(t,e){return t.position.y-e.position.y||t.position.x-e.position.x}function r(t,e){return t.position.x-e.position.x||t.position.y-e.position.y}function a(t,e){var i=e.x-t.x,n=e.y-t.y;return Math.sqrt(i*i+n*n)}i.prototype.canFit=function(t){return this.width>=t.width-1&&this.height>=t.height-1};var h=e.create("packery");h.Item=o;var u=h.prototype;u._create=function(){e.prototype._create.call(this),this.packer=new n,this.shiftPacker=new n,this.isEnabled=!0,this.dragItemCount=0;var t=this;this.handleDraggabilly={dragStart:function(){t.itemDragStart(this.element)},dragMove:function(){t.itemDragMove(this.element,this.position.x,this.position.y)},dragEnd:function(){t.itemDragEnd(this.element)}},this.handleUIDraggable={start:function(e,i){i&&t.itemDragStart(e.currentTarget)},drag:function(e,i){i&&t.itemDragMove(e.currentTarget,i.position.left,i.position.top)},stop:function(e,i){i&&t.itemDragEnd(e.currentTarget)}}},u._resetLayout=function(){this.getSize(),this._getMeasurements();var t,e,i;this._getOption("horizontal")?(t=1/0,e=this.size.innerHeight+this.gutter,i="rightwardTopToBottom"):(t=this.size.innerWidth+this.gutter,e=1/0,i="downwardLeftToRight"),this.packer.width=this.shiftPacker.width=t,this.packer.height=this.shiftPacker.height=e,this.packer.sortDirection=this.shiftPacker.sortDirection=i,this.packer.reset(),this.maxY=0,this.maxX=0},u._getMeasurements=function(){this._getMeasurement("columnWidth","width"),this._getMeasurement("rowHeight","height"),this._getMeasurement("gutter","width")},u._getItemLayoutPosition=function(t){if(this._setRectSize(t.element,t.rect),this.isShifting||this.dragItemCount>0){var e=this._getPackMethod();this.packer[e](t.rect)}else this.packer.pack(t.rect);return this._setMaxXY(t.rect),t.rect},u.shiftLayout=function(){this.isShifting=!0,this.layout(),delete this.isShifting},u._getPackMethod=function(){return this._getOption("horizontal")?"rowPack":"columnPack"},u._setMaxXY=function(t){this.maxX=Math.max(t.x+t.width,this.maxX),this.maxY=Math.max(t.y+t.height,this.maxY)},u._setRectSize=function(e,i){var n=t(e),o=n.outerWidth,s=n.outerHeight;(o||s)&&(o=this._applyGridGutter(o,this.columnWidth),s=this._applyGridGutter(s,this.rowHeight)),i.width=Math.min(o,this.packer.width),i.height=Math.min(s,this.packer.height)},u._applyGridGutter=function(t,e){if(!e)return t+this.gutter;e+=this.gutter;var i=t%e,n=i&&1>i?"round":"ceil";return t=Math[n](t/e)*e},u._getContainerSize=function(){return this._getOption("horizontal")?{width:this.maxX-this.gutter}:{height:this.maxY-this.gutter}},u._manageStamp=function(t){var e,n=this.getItem(t);if(n&&n.isPlacing)e=n.rect;else{var o=this._getElementOffset(t);e=new i({x:this._getOption("originLeft")?o.left:o.right,y:this._getOption("originTop")?o.top:o.bottom})}this._setRectSize(t,e),this.packer.placed(e),this._setMaxXY(e)},u.sortItemsByPosition=function(){var t=this._getOption("horizontal")?r:s;this.items.sort(t)},u.fit=function(t,e,i){var n=this.getItem(t);n&&(this.stamp(n.element),n.enablePlacing(),this.updateShiftTargets(n),e=void 0===e?n.rect.x:e,i=void 0===i?n.rect.y:i,this.shift(n,e,i),this._bindFitEvents(n),n.moveTo(n.rect.x,n.rect.y),this.shiftLayout(),this.unstamp(n.element),this.sortItemsByPosition(),n.disablePlacing())},u._bindFitEvents=function(t){function e(){n++,2==n&&i.dispatchEvent("fitComplete",null,[t])}var i=this,n=0;t.once("layout",e),this.once("layoutComplete",e)},u.resize=function(){this.isResizeBound&&this.needsResizeLayout()&&(this.options.shiftPercentResize?this.resizeShiftPercentLayout():this.layout())},u.needsResizeLayout=function(){var e=t(this.element),i=this._getOption("horizontal")?"innerHeight":"innerWidth";return e[i]!=this.size[i]},u.resizeShiftPercentLayout=function(){var e=this._getItemsForLayout(this.items),i=this._getOption("horizontal"),n=i?"y":"x",o=i?"height":"width",s=i?"rowHeight":"columnWidth",r=i?"innerHeight":"innerWidth",a=this[s];if(a=a&&a+this.gutter){this._getMeasurements();var h=this[s]+this.gutter;e.forEach(function(t){var e=Math.round(t.rect[n]/a);t.rect[n]=e*h})}else{var u=t(this.element)[r]+this.gutter,c=this.packer[o];e.forEach(function(t){t.rect[n]=t.rect[n]/c*u})}this.shiftLayout()},u.itemDragStart=function(t){if(this.isEnabled){this.stamp(t);var e=this.getItem(t);e&&(e.enablePlacing(),e.showDropPlaceholder(),this.dragItemCount++,this.updateShiftTargets(e))}},u.updateShiftTargets=function(t){this.shiftPacker.reset(),this._getBoundingRect();var e=this._getOption("originLeft"),n=this._getOption("originTop");this.stamps.forEach(function(t){var o=this.getItem(t);if(!o||!o.isPlacing){var s=this._getElementOffset(t),r=new i({x:e?s.left:s.right,y:n?s.top:s.bottom});this._setRectSize(t,r),this.shiftPacker.placed(r)}},this);var o=this._getOption("horizontal"),s=o?"rowHeight":"columnWidth",r=o?"height":"width";this.shiftTargetKeys=[],this.shiftTargets=[];var a,h=this[s];if(h=h&&h+this.gutter){var u=Math.ceil(t.rect[r]/h),c=Math.floor((this.shiftPacker[r]+this.gutter)/h);a=(c-u)*h;for(var d=0;c>d;d++){var f=o?0:d*h,l=o?d*h:0;this._addShiftTarget(f,l,a)}}else a=this.shiftPacker[r]+this.gutter-t.rect[r],this._addShiftTarget(0,0,a);var p=this._getItemsForLayout(this.items),g=this._getPackMethod();p.forEach(function(t){var e=t.rect;this._setRectSize(t.element,e),this.shiftPacker[g](e),this._addShiftTarget(e.x,e.y,a);var i=o?e.x+e.width:e.x,n=o?e.y:e.y+e.height;if(this._addShiftTarget(i,n,a),h)for(var s=Math.round(e[r]/h),u=1;s>u;u++){var c=o?i:e.x+h*u,d=o?e.y+h*u:n;this._addShiftTarget(c,d,a)}},this)},u._addShiftTarget=function(t,e,i){var n=this._getOption("horizontal")?e:t;if(!(0!==n&&n>i)){var o=t+","+e,s=-1!=this.shiftTargetKeys.indexOf(o);s||(this.shiftTargetKeys.push(o),this.shiftTargets.push({x:t,y:e}))}},u.shift=function(t,e,i){var n,o=1/0,s={x:e,y:i};this.shiftTargets.forEach(function(t){var e=a(t,s);o>e&&(n=t,o=e)}),t.rect.x=n.x,t.rect.y=n.y};var c=120;u.itemDragMove=function(t,e,i){
    function n(){s.shift(o,e,i),o.positionDropPlaceholder(),s.layout()}var o=this.isEnabled&&this.getItem(t);if(o){e-=this.size.paddingLeft,i-=this.size.paddingTop;var s=this,r=new Date;this._itemDragTime&&r-this._itemDragTime<c?(clearTimeout(this.dragTimeout),this.dragTimeout=setTimeout(n,c)):(n(),this._itemDragTime=r)}},u.itemDragEnd=function(t){function e(){n++,2==n&&(i.element.classList.remove("is-positioning-post-drag"),i.hideDropPlaceholder(),o.dispatchEvent("dragItemPositioned",null,[i]))}var i=this.isEnabled&&this.getItem(t);if(i){clearTimeout(this.dragTimeout),i.element.classList.add("is-positioning-post-drag");var n=0,o=this;i.once("layout",e),this.once("layoutComplete",e),i.moveTo(i.rect.x,i.rect.y),this.layout(),this.dragItemCount=Math.max(0,this.dragItemCount-1),this.sortItemsByPosition(),i.disablePlacing(),this.unstamp(i.element)}},u.bindDraggabillyEvents=function(t){this._bindDraggabillyEvents(t,"on")},u.unbindDraggabillyEvents=function(t){this._bindDraggabillyEvents(t,"off")},u._bindDraggabillyEvents=function(t,e){var i=this.handleDraggabilly;t[e]("dragStart",i.dragStart),t[e]("dragMove",i.dragMove),t[e]("dragEnd",i.dragEnd)},u.bindUIDraggableEvents=function(t){this._bindUIDraggableEvents(t,"on")},u.unbindUIDraggableEvents=function(t){this._bindUIDraggableEvents(t,"off")},u._bindUIDraggableEvents=function(t,e){var i=this.handleUIDraggable;t[e]("dragstart",i.start)[e]("drag",i.drag)[e]("dragstop",i.stop)};var d=u.destroy;return u.destroy=function(){d.apply(this,arguments),this.isEnabled=!1},h.Rect=i,h.Packer=n,h});/**
 * Created by Rinas Musthafa on 2/8/2017.
 */



/**
 * Created by Rinas Musthafa on 1/5/2017.
 */


/*!
 * Draggabilly PACKAGED v2.1.1
 * Make that shiz draggable
 * http://draggabilly.desandro.com
 * MIT license
 */

/**
 * Bridget makes jQuery widgets
 * v2.0.0
 * MIT license
 */

/* jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {

    /* globals define: false, module: false, require: false */

    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( 'jquery-bridget/jquery-bridget',[ 'jquery' ], function( jQuery ) {
            factory( window, jQuery );
        });
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS
        module.exports = factory(
            window,
            require('jquery')
        );
    } else {
        // browser global
        window.jQueryBridget = factory(
            window,
            window.jQuery
        );
    }

}( window, function factory( window, jQuery ) {


// ----- utils ----- //

    var arraySlice = Array.prototype.slice;

// helper function for logging errors
// $.error breaks jQuery chaining
    var console = window.console;
    var logError = typeof console == 'undefined' ? function() {} :
        function( message ) {
            console.error( message );
        };

// ----- jQueryBridget ----- //

    function jQueryBridget( namespace, PluginClass, $ ) {
        $ = $ || jQuery || window.jQuery;
        if ( !$ ) {
            return;
        }

        // add option method -> $().plugin('option', {...})
        if ( !PluginClass.prototype.option ) {
            // option setter
            PluginClass.prototype.option = function( opts ) {
                // bail out if not an object
                if ( !$.isPlainObject( opts ) ){
                    return;
                }
                this.options = $.extend( true, this.options, opts );
            };
        }

        // make jQuery plugin
        $.fn[ namespace ] = function( arg0 /*, arg1 */ ) {
            if ( typeof arg0 == 'string' ) {
                // method call $().plugin( 'methodName', { options } )
                // shift arguments by 1
                var args = arraySlice.call( arguments, 1 );
                return methodCall( this, arg0, args );
            }
            // just $().plugin({ options })
            plainCall( this, arg0 );
            return this;
        };

        // $().plugin('methodName')
        function methodCall( $elems, methodName, args ) {
            var returnValue;
            var pluginMethodStr = '$().' + namespace + '("' + methodName + '")';

            $elems.each( function( i, elem ) {
                // get instance
                var instance = $.data( elem, namespace );
                if ( !instance ) {
                    logError( namespace + ' not initialized. Cannot call methods, i.e. ' +
                        pluginMethodStr );
                    return;
                }

                var method = instance[ methodName ];
                if ( !method || methodName.charAt(0) == '_' ) {
                    logError( pluginMethodStr + ' is not a valid method' );
                    return;
                }

                // apply method, get return value
                var value = method.apply( instance, args );
                // set return value if value is returned, use only first value
                returnValue = returnValue === undefined ? value : returnValue;
            });

            return returnValue !== undefined ? returnValue : $elems;
        }

        function plainCall( $elems, options ) {
            $elems.each( function( i, elem ) {
                var instance = $.data( elem, namespace );
                if ( instance ) {
                    // set options & init
                    instance.option( options );
                    instance._init();
                } else {
                    // initialize new instance
                    instance = new PluginClass( elem, options );
                    $.data( elem, namespace, instance );
                }
            });
        }

        updateJQuery( $ );

    }

// ----- updateJQuery ----- //

// set $.bridget for v1 backwards compatibility
    function updateJQuery( $ ) {
        if ( !$ || ( $ && $.bridget ) ) {
            return;
        }
        $.bridget = jQueryBridget;
    }

    updateJQuery( jQuery || window.jQuery );

// -----  ----- //

    return jQueryBridget;

}));

/*!
 * getSize v2.0.2
 * measure size of elements
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */
/*global define: false, module: false, console: false */

( function( window, factory ) {


    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( 'get-size/get-size',[],function() {
            return factory();
        });
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS
        module.exports = factory();
    } else {
        // browser global
        window.getSize = factory();
    }

})( window, function factory() {


// -------------------------- helpers -------------------------- //

// get a number from a string, not a percentage
    function getStyleSize( value ) {
        var num = parseFloat( value );
        // not a percent like '100%', and a number
        var isValid = value.indexOf('%') == -1 && !isNaN( num );
        return isValid && num;
    }

    function noop() {}

    var logError = typeof console == 'undefined' ? noop :
        function( message ) {
            console.error( message );
        };

// -------------------------- measurements -------------------------- //

    var measurements = [
        'paddingLeft',
        'paddingRight',
        'paddingTop',
        'paddingBottom',
        'marginLeft',
        'marginRight',
        'marginTop',
        'marginBottom',
        'borderLeftWidth',
        'borderRightWidth',
        'borderTopWidth',
        'borderBottomWidth'
    ];

    var measurementsLength = measurements.length;

    function getZeroSize() {
        var size = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        };
        for ( var i=0; i < measurementsLength; i++ ) {
            var measurement = measurements[i];
            size[ measurement ] = 0;
        }
        return size;
    }

// -------------------------- getStyle -------------------------- //

    /**
     * getStyle, get style of element, check for Firefox bug
     * https://bugzilla.mozilla.org/show_bug.cgi?id=548397
     */
    function getStyle( elem ) {
        var style = getComputedStyle( elem );
        if ( !style ) {
            logError( 'Style returned ' + style +
                '. Are you running this code in a hidden iframe on Firefox? ' +
                'See http://bit.ly/getsizebug1' );
        }
        return style;
    }

// -------------------------- setup -------------------------- //

    var isSetup = false;

    var isBoxSizeOuter;

    /**
     * setup
     * check isBoxSizerOuter
     * do on first getSize() rather than on page load for Firefox bug
     */
    function setup() {
        // setup once
        if ( isSetup ) {
            return;
        }
        isSetup = true;

        // -------------------------- box sizing -------------------------- //

        /**
         * WebKit measures the outer-width on style.width on border-box elems
         * IE & Firefox<29 measures the inner-width
         */
        var div = document.createElement('div');
        div.style.width = '200px';
        div.style.padding = '1px 2px 3px 4px';
        div.style.borderStyle = 'solid';
        div.style.borderWidth = '1px 2px 3px 4px';
        div.style.boxSizing = 'border-box';

        var body = document.body || document.documentElement;
        body.appendChild( div );
        var style = getStyle( div );

        getSize.isBoxSizeOuter = isBoxSizeOuter = getStyleSize( style.width ) == 200;
        body.removeChild( div );

    }

// -------------------------- getSize -------------------------- //

    function getSize( elem ) {
        setup();

        // use querySeletor if elem is string
        if ( typeof elem == 'string' ) {
            elem = document.querySelector( elem );
        }

        // do not proceed on non-objects
        if ( !elem || typeof elem != 'object' || !elem.nodeType ) {
            return;
        }

        var style = getStyle( elem );

        // if hidden, everything is 0
        if ( style.display == 'none' ) {
            return getZeroSize();
        }

        var size = {};
        size.width = elem.offsetWidth;
        size.height = elem.offsetHeight;

        var isBorderBox = size.isBorderBox = style.boxSizing == 'border-box';

        // get all measurements
        for ( var i=0; i < measurementsLength; i++ ) {
            var measurement = measurements[i];
            var value = style[ measurement ];
            var num = parseFloat( value );
            // any 'auto', 'medium' value will be 0
            size[ measurement ] = !isNaN( num ) ? num : 0;
        }

        var paddingWidth = size.paddingLeft + size.paddingRight;
        var paddingHeight = size.paddingTop + size.paddingBottom;
        var marginWidth = size.marginLeft + size.marginRight;
        var marginHeight = size.marginTop + size.marginBottom;
        var borderWidth = size.borderLeftWidth + size.borderRightWidth;
        var borderHeight = size.borderTopWidth + size.borderBottomWidth;

        var isBorderBoxSizeOuter = isBorderBox && isBoxSizeOuter;

        // overwrite width and height if we can get it from style
        var styleWidth = getStyleSize( style.width );
        if ( styleWidth !== false ) {
            size.width = styleWidth +
                // add padding and border unless it's already including it
                ( isBorderBoxSizeOuter ? 0 : paddingWidth + borderWidth );
        }

        var styleHeight = getStyleSize( style.height );
        if ( styleHeight !== false ) {
            size.height = styleHeight +
                // add padding and border unless it's already including it
                ( isBorderBoxSizeOuter ? 0 : paddingHeight + borderHeight );
        }

        size.innerWidth = size.width - ( paddingWidth + borderWidth );
        size.innerHeight = size.height - ( paddingHeight + borderHeight );

        size.outerWidth = size.width + marginWidth;
        size.outerHeight = size.height + marginHeight;

        return size;
    }

    return getSize;

});

/**
 * EvEmitter v1.0.3
 * Lil' event emitter
 * MIT License
 */

/* jshint unused: true, undef: true, strict: true */

( function( global, factory ) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, window */
    if ( typeof define == 'function' && define.amd ) {
        // AMD - RequireJS
        define( 'ev-emitter/ev-emitter',factory );
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS - Browserify, Webpack
        module.exports = factory();
    } else {
        // Browser globals
        global.EvEmitter = factory();
    }

}( typeof window != 'undefined' ? window : this, function() {



    function EvEmitter() {}

    var proto = EvEmitter.prototype;

    proto.on = function( eventName, listener ) {
        if ( !eventName || !listener ) {
            return;
        }
        // set events hash
        var events = this._events = this._events || {};
        // set listeners array
        var listeners = events[ eventName ] = events[ eventName ] || [];
        // only add once
        if ( listeners.indexOf( listener ) == -1 ) {
            listeners.push( listener );
        }

        return this;
    };

    proto.once = function( eventName, listener ) {
        if ( !eventName || !listener ) {
            return;
        }
        // add event
        this.on( eventName, listener );
        // set once flag
        // set onceEvents hash
        var onceEvents = this._onceEvents = this._onceEvents || {};
        // set onceListeners object
        var onceListeners = onceEvents[ eventName ] = onceEvents[ eventName ] || {};
        // set flag
        onceListeners[ listener ] = true;

        return this;
    };

    proto.off = function( eventName, listener ) {
        var listeners = this._events && this._events[ eventName ];
        if ( !listeners || !listeners.length ) {
            return;
        }
        var index = listeners.indexOf( listener );
        if ( index != -1 ) {
            listeners.splice( index, 1 );
        }

        return this;
    };

    proto.emitEvent = function( eventName, args ) {
        var listeners = this._events && this._events[ eventName ];
        if ( !listeners || !listeners.length ) {
            return;
        }
        var i = 0;
        var listener = listeners[i];
        args = args || [];
        // once stuff
        var onceListeners = this._onceEvents && this._onceEvents[ eventName ];

        while ( listener ) {
            var isOnce = onceListeners && onceListeners[ listener ];
            if ( isOnce ) {
                // remove listener
                // remove before trigger to prevent recursion
                this.off( eventName, listener );
                // unset once flag
                delete onceListeners[ listener ];
            }
            // trigger listener
            listener.apply( this, args );
            // get next listener
            i += isOnce ? 0 : 1;
            listener = listeners[i];
        }

        return this;
    };

    return EvEmitter;

}));

/*!
 * Unipointer v2.1.0
 * base class for doing one thing with pointer event
 * MIT license
 */

/*jshint browser: true, undef: true, unused: true, strict: true */

( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /*global define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( 'unipointer/unipointer',[
            'ev-emitter/ev-emitter'
        ], function( EvEmitter ) {
            return factory( window, EvEmitter );
        });
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS
        module.exports = factory(
            window,
            require('ev-emitter')
        );
    } else {
        // browser global
        window.Unipointer = factory(
            window,
            window.EvEmitter
        );
    }

}( window, function factory( window, EvEmitter ) {



    function noop() {}

    function Unipointer() {}

// inherit EvEmitter
    var proto = Unipointer.prototype = Object.create( EvEmitter.prototype );

    proto.bindStartEvent = function( elem ) {
        this._bindStartEvent( elem, true );
    };

    proto.unbindStartEvent = function( elem ) {
        this._bindStartEvent( elem, false );
    };

    /**
     * works as unbinder, as you can ._bindStart( false ) to unbind
     * @param {Boolean} isBind - will unbind if falsey
     */
    proto._bindStartEvent = function( elem, isBind ) {
        // munge isBind, default to true
        isBind = isBind === undefined ? true : !!isBind;
        var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';

        if ( window.navigator.pointerEnabled ) {
            // W3C Pointer Events, IE11. See https://coderwall.com/p/mfreca
            elem[ bindMethod ]( 'pointerdown', this );
        } else if ( window.navigator.msPointerEnabled ) {
            // IE10 Pointer Events
            elem[ bindMethod ]( 'MSPointerDown', this );
        } else {
            // listen for both, for devices like Chrome Pixel
            elem[ bindMethod ]( 'mousedown', this );
            elem[ bindMethod ]( 'touchstart', this );
        }
    };

// trigger handler methods for events
    proto.handleEvent = function( event ) {
        var method = 'on' + event.type;
        if ( this[ method ] ) {
            this[ method ]( event );
        }
    };

// returns the touch that we're keeping track of
    proto.getTouch = function( touches ) {
        for ( var i=0; i < touches.length; i++ ) {
            var touch = touches[i];
            if ( touch.identifier == this.pointerIdentifier ) {
                return touch;
            }
        }
    };

// ----- start event ----- //

    proto.onmousedown = function( event ) {
        // dismiss clicks from right or middle buttons
        var button = event.button;
        if ( button && ( button !== 0 && button !== 1 ) ) {
            return;
        }
        this._pointerDown( event, event );
    };

    proto.ontouchstart = function( event ) {
        this._pointerDown( event, event.changedTouches[0] );
    };

    proto.onMSPointerDown =
        proto.onpointerdown = function( event ) {
            this._pointerDown( event, event );
        };

    /**
     * pointer start
     * @param {Event} event
     * @param {Event or Touch} pointer
     */
    proto._pointerDown = function( event, pointer ) {
        // dismiss other pointers
        if ( this.isPointerDown ) {
            return;
        }

        this.isPointerDown = true;
        // save pointer identifier to match up touch events
        this.pointerIdentifier = pointer.pointerId !== undefined ?
            // pointerId for pointer events, touch.indentifier for touch events
            pointer.pointerId : pointer.identifier;

        this.pointerDown( event, pointer );
    };

    proto.pointerDown = function( event, pointer ) {
        this._bindPostStartEvents( event );
        this.emitEvent( 'pointerDown', [ event, pointer ] );
    };

// hash of events to be bound after start event
    var postStartEvents = {
        mousedown: [ 'mousemove', 'mouseup' ],
        touchstart: [ 'touchmove', 'touchend', 'touchcancel' ],
        pointerdown: [ 'pointermove', 'pointerup', 'pointercancel' ],
        MSPointerDown: [ 'MSPointerMove', 'MSPointerUp', 'MSPointerCancel' ]
    };

    proto._bindPostStartEvents = function( event ) {
        if ( !event ) {
            return;
        }
        // get proper events to match start event
        var events = postStartEvents[ event.type ];
        // bind events to node
        events.forEach( function( eventName ) {
            window.addEventListener( eventName, this );
        }, this );
        // save these arguments
        this._boundPointerEvents = events;
    };

    proto._unbindPostStartEvents = function() {
        // check for _boundEvents, in case dragEnd triggered twice (old IE8 bug)
        if ( !this._boundPointerEvents ) {
            return;
        }
        this._boundPointerEvents.forEach( function( eventName ) {
            window.removeEventListener( eventName, this );
        }, this );

        delete this._boundPointerEvents;
    };

// ----- move event ----- //

    proto.onmousemove = function( event ) {
        this._pointerMove( event, event );
    };

    proto.onMSPointerMove =
        proto.onpointermove = function( event ) {
            if ( event.pointerId == this.pointerIdentifier ) {
                this._pointerMove( event, event );
            }
        };

    proto.ontouchmove = function( event ) {
        var touch = this.getTouch( event.changedTouches );
        if ( touch ) {
            this._pointerMove( event, touch );
        }
    };

    /**
     * pointer move
     * @param {Event} event
     * @param {Event or Touch} pointer
     * @private
     */
    proto._pointerMove = function( event, pointer ) {
        this.pointerMove( event, pointer );
    };

// public
    proto.pointerMove = function( event, pointer ) {
        this.emitEvent( 'pointerMove', [ event, pointer ] );
    };

// ----- end event ----- //


    proto.onmouseup = function( event ) {
        this._pointerUp( event, event );
    };

    proto.onMSPointerUp =
        proto.onpointerup = function( event ) {
            if ( event.pointerId == this.pointerIdentifier ) {
                this._pointerUp( event, event );
            }
        };

    proto.ontouchend = function( event ) {
        var touch = this.getTouch( event.changedTouches );
        if ( touch ) {
            this._pointerUp( event, touch );
        }
    };

    /**
     * pointer up
     * @param {Event} event
     * @param {Event or Touch} pointer
     * @private
     */
    proto._pointerUp = function( event, pointer ) {
        this._pointerDone();
        this.pointerUp( event, pointer );
    };

// public
    proto.pointerUp = function( event, pointer ) {
        this.emitEvent( 'pointerUp', [ event, pointer ] );
    };

// ----- pointer done ----- //

// triggered on pointer up & pointer cancel
    proto._pointerDone = function() {
        // reset properties
        this.isPointerDown = false;
        delete this.pointerIdentifier;
        // remove events
        this._unbindPostStartEvents();
        this.pointerDone();
    };

    proto.pointerDone = noop;

// ----- pointer cancel ----- //

    proto.onMSPointerCancel =
        proto.onpointercancel = function( event ) {
            if ( event.pointerId == this.pointerIdentifier ) {
                this._pointerCancel( event, event );
            }
        };

    proto.ontouchcancel = function( event ) {
        var touch = this.getTouch( event.changedTouches );
        if ( touch ) {
            this._pointerCancel( event, touch );
        }
    };

    /**
     * pointer cancel
     * @param {Event} event
     * @param {Event or Touch} pointer
     * @private
     */
    proto._pointerCancel = function( event, pointer ) {
        this._pointerDone();
        this.pointerCancel( event, pointer );
    };

// public
    proto.pointerCancel = function( event, pointer ) {
        this.emitEvent( 'pointerCancel', [ event, pointer ] );
    };

// -----  ----- //

// utility function for getting x/y coords from event
    Unipointer.getPointerPoint = function( pointer ) {
        return {
            x: pointer.pageX,
            y: pointer.pageY
        };
    };

// -----  ----- //

    return Unipointer;

}));

/*!
 * Unidragger v2.1.0
 * Draggable base class
 * MIT license
 */

/*jshint browser: true, unused: true, undef: true, strict: true */

( function( window, factory ) {
    // universal module definition
    /*jshint strict: false */ /*globals define, module, require */

    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( 'unidragger/unidragger',[
            'unipointer/unipointer'
        ], function( Unipointer ) {
            return factory( window, Unipointer );
        });
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS
        module.exports = factory(
            window,
            require('unipointer')
        );
    } else {
        // browser global
        window.Unidragger = factory(
            window,
            window.Unipointer
        );
    }

}( window, function factory( window, Unipointer ) {



// -----  ----- //

    function noop() {}

// -------------------------- Unidragger -------------------------- //

    function Unidragger() {}

// inherit Unipointer & EvEmitter
    var proto = Unidragger.prototype = Object.create( Unipointer.prototype );

// ----- bind start ----- //

    proto.bindHandles = function() {
        this._bindHandles( true );
    };

    proto.unbindHandles = function() {
        this._bindHandles( false );
    };

    var navigator = window.navigator;
    /**
     * works as unbinder, as you can .bindHandles( false ) to unbind
     * @param {Boolean} isBind - will unbind if falsey
     */
    proto._bindHandles = function( isBind ) {
        // munge isBind, default to true
        isBind = isBind === undefined ? true : !!isBind;
        // extra bind logic
        var binderExtra;
        if ( navigator.pointerEnabled ) {
            binderExtra = function( handle ) {
                // disable scrolling on the element
                handle.style.touchAction = isBind ? 'none' : '';
            };
        } else if ( navigator.msPointerEnabled ) {
            binderExtra = function( handle ) {
                // disable scrolling on the element
                handle.style.msTouchAction = isBind ? 'none' : '';
            };
        } else {
            binderExtra = noop;
        }
        // bind each handle
        var bindMethod = isBind ? 'addEventListener' : 'removeEventListener';
        for ( var i=0; i < this.handles.length; i++ ) {
            var handle = this.handles[i];
            this._bindStartEvent( handle, isBind );
            binderExtra( handle );
            handle[ bindMethod ]( 'click', this );
        }
    };

// ----- start event ----- //

    /**
     * pointer start
     * @param {Event} event
     * @param {Event or Touch} pointer
     */
    proto.pointerDown = function( event, pointer ) {
        // dismiss range sliders
        if ( event.target.nodeName == 'INPUT' && event.target.type == 'range' ) {
            // reset pointerDown logic
            this.isPointerDown = false;
            delete this.pointerIdentifier;
            return;
        }

        this._dragPointerDown( event, pointer );
        // kludge to blur focused inputs in dragger
        var focused = document.activeElement;
        if ( focused && focused.blur ) {
            focused.blur();
        }
        // bind move and end events
        this._bindPostStartEvents( event );
        this.emitEvent( 'pointerDown', [ event, pointer ] );
    };

// base pointer down logic
    proto._dragPointerDown = function( event, pointer ) {
        // track to see when dragging starts
        this.pointerDownPoint = Unipointer.getPointerPoint( pointer );

        var canPreventDefault = this.canPreventDefaultOnPointerDown( event, pointer );
        if ( canPreventDefault ) {
            event.preventDefault();
        }
    };

// overwriteable method so Flickity can prevent for scrolling
    proto.canPreventDefaultOnPointerDown = function( event ) {
        // prevent default, unless touchstart or <select>
        return event.target.nodeName != 'SELECT';
    };

// ----- move event ----- //

    /**
     * drag move
     * @param {Event} event
     * @param {Event or Touch} pointer
     */
    proto.pointerMove = function( event, pointer ) {
        var moveVector = this._dragPointerMove( event, pointer );
        this.emitEvent( 'pointerMove', [ event, pointer, moveVector ] );
        this._dragMove( event, pointer, moveVector );
    };

// base pointer move logic
    proto._dragPointerMove = function( event, pointer ) {
        var movePoint = Unipointer.getPointerPoint( pointer );
        var moveVector = {
            x: movePoint.x - this.pointerDownPoint.x,
            y: movePoint.y - this.pointerDownPoint.y
        };
        // start drag if pointer has moved far enough to start drag
        if ( !this.isDragging && this.hasDragStarted( moveVector ) ) {
            this._dragStart( event, pointer );
        }
        return moveVector;
    };

// condition if pointer has moved far enough to start drag
    proto.hasDragStarted = function( moveVector ) {
        return Math.abs( moveVector.x ) > 3 || Math.abs( moveVector.y ) > 3;
    };


// ----- end event ----- //

    /**
     * pointer up
     * @param {Event} event
     * @param {Event or Touch} pointer
     */
    proto.pointerUp = function( event, pointer ) {
        this.emitEvent( 'pointerUp', [ event, pointer ] );
        this._dragPointerUp( event, pointer );
    };

    proto._dragPointerUp = function( event, pointer ) {
        if ( this.isDragging ) {
            this._dragEnd( event, pointer );
        } else {
            // pointer didn't move enough for drag to start
            this._staticClick( event, pointer );
        }
    };

// -------------------------- drag -------------------------- //

// dragStart
    proto._dragStart = function( event, pointer ) {
        this.isDragging = true;
        this.dragStartPoint = Unipointer.getPointerPoint( pointer );
        // prevent clicks
        this.isPreventingClicks = true;

        this.dragStart( event, pointer );
    };

    proto.dragStart = function( event, pointer ) {
        this.emitEvent( 'dragStart', [ event, pointer ] );
    };

// dragMove
    proto._dragMove = function( event, pointer, moveVector ) {
        // do not drag if not dragging yet
        if ( !this.isDragging ) {
            return;
        }

        this.dragMove( event, pointer, moveVector );
    };

    proto.dragMove = function( event, pointer, moveVector ) {
        event.preventDefault();
        this.emitEvent( 'dragMove', [ event, pointer, moveVector ] );
    };

// dragEnd
    proto._dragEnd = function( event, pointer ) {
        // set flags
        this.isDragging = false;
        // re-enable clicking async
        setTimeout( function() {
            delete this.isPreventingClicks;
        }.bind( this ) );

        this.dragEnd( event, pointer );
    };

    proto.dragEnd = function( event, pointer ) {
        this.emitEvent( 'dragEnd', [ event, pointer ] );
    };

// ----- onclick ----- //

// handle all clicks and prevent clicks when dragging
    proto.onclick = function( event ) {
        if ( this.isPreventingClicks ) {
            event.preventDefault();
        }
    };

// ----- staticClick ----- //

// triggered after pointer down & up with no/tiny movement
    proto._staticClick = function( event, pointer ) {
        // ignore emulated mouse up clicks
        if ( this.isIgnoringMouseUp && event.type == 'mouseup' ) {
            return;
        }

        // allow click in <input>s and <textarea>s
        var nodeName = event.target.nodeName;
        if ( nodeName == 'INPUT' || nodeName == 'TEXTAREA' ) {
            event.target.focus();
        }
        this.staticClick( event, pointer );

        // set flag for emulated clicks 300ms after touchend
        if ( event.type != 'mouseup' ) {
            this.isIgnoringMouseUp = true;
            // reset flag after 300ms
            setTimeout( function() {
                delete this.isIgnoringMouseUp;
            }.bind( this ), 400 );
        }
    };

    proto.staticClick = function( event, pointer ) {
        this.emitEvent( 'staticClick', [ event, pointer ] );
    };

// ----- utils ----- //

    Unidragger.getPointerPoint = Unipointer.getPointerPoint;

// -----  ----- //

    return Unidragger;

}));

/*!
 * Draggabilly v2.1.1
 * Make that shiz draggable
 * http://draggabilly.desandro.com
 * MIT license
 */

/*jshint browser: true, strict: true, undef: true, unused: true */

( function( window, factory ) {
    // universal module definition
    /* jshint strict: false */ /*globals define, module, require */
    if ( typeof define == 'function' && define.amd ) {
        // AMD
        define( [
                'get-size/get-size',
                'unidragger/unidragger'
            ],
            function( getSize, Unidragger ) {
                return factory( window, getSize, Unidragger );
            });
    } else if ( typeof module == 'object' && module.exports ) {
        // CommonJS
        module.exports = factory(
            window,
            require('get-size'),
            require('unidragger')
        );
    } else {
        // browser global
        window.Draggabilly = factory(
            window,
            window.getSize,
            window.Unidragger
        );
    }

}( window, function factory( window, getSize, Unidragger ) {



// vars
    var document = window.document;

    function noop() {}

// -------------------------- helpers -------------------------- //

// extend objects
    function extend( a, b ) {
        for ( var prop in b ) {
            a[ prop ] = b[ prop ];
        }
        return a;
    }

    function isElement( obj ) {
        return obj instanceof HTMLElement;
    }

// -------------------------- requestAnimationFrame -------------------------- //

// get rAF, prefixed, if present
    var requestAnimationFrame = window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame;

// fallback to setTimeout
    var lastTime = 0;
    if ( !requestAnimationFrame )  {
        requestAnimationFrame = function( callback ) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max( 0, 16 - ( currTime - lastTime ) );
            var id = setTimeout( callback, timeToCall );
            lastTime = currTime + timeToCall;
            return id;
        };
    }

// -------------------------- support -------------------------- //

    var docElem = document.documentElement;
    var transformProperty = typeof docElem.style.transform == 'string' ?
        'transform' : 'WebkitTransform';

    var jQuery = window.jQuery;

// --------------------------  -------------------------- //

    function Draggabilly( element, options ) {
        // querySelector if string
        this.element = typeof element == 'string' ?
            document.querySelector( element ) : element;

        if ( jQuery ) {
            this.$element = jQuery( this.element );
        }

        // options
        this.options = extend( {}, this.constructor.defaults );
        this.option( options );

        this._create();
    }

// inherit Unidragger methods
    var proto = Draggabilly.prototype = Object.create( Unidragger.prototype );

    Draggabilly.defaults = {
    };

    /**
     * set options
     * @param {Object} opts
     */
    proto.option = function( opts ) {
        extend( this.options, opts );
    };

// css position values that don't need to be set
    var positionValues = {
        relative: true,
        absolute: true,
        fixed: true
    };

    proto._create = function() {

        // properties
        this.position = {};
        this._getPosition();

        this.startPoint = { x: 0, y: 0 };
        this.dragPoint = { x: 0, y: 0 };

        this.startPosition = extend( {}, this.position );

        // set relative positioning
        var style = getComputedStyle( this.element );
        if ( !positionValues[ style.position ] ) {
            this.element.style.position = 'relative';
        }

        this.enable();
        this.setHandles();

    };

    /**
     * set this.handles and bind start events to 'em
     */
    proto.setHandles = function() {
        this.handles = this.options.handle ?
            this.element.querySelectorAll( this.options.handle ) : [ this.element ];

        this.bindHandles();
    };

    /**
     * emits events via EvEmitter and jQuery events
     * @param {String} type - name of event
     * @param {Event} event - original event
     * @param {Array} args - extra arguments
     */
    proto.dispatchEvent = function( type, event, args ) {
        var emitArgs = [ event ].concat( args );
        this.emitEvent( type, emitArgs );
        var jQuery = window.jQuery;
        // trigger jQuery event
        if ( jQuery && this.$element ) {
            if ( event ) {
                // create jQuery event
                var $event = jQuery.Event( event );
                $event.type = type;
                this.$element.trigger( $event, args );
            } else {
                // just trigger with type if no event available
                this.$element.trigger( type, args );
            }
        }
    };

// -------------------------- position -------------------------- //

// get x/y position from style
    proto._getPosition = function() {
        var style = getComputedStyle( this.element );
        var x = this._getPositionCoord( style.left, 'width' );
        var y = this._getPositionCoord( style.top, 'height' );
        // clean up 'auto' or other non-integer values
        this.position.x = isNaN( x ) ? 0 : x;
        this.position.y = isNaN( y ) ? 0 : y;

        this._addTransformPosition( style );
    };

    proto._getPositionCoord = function( styleSide, measure ) {
        if ( styleSide.indexOf('%') != -1 ) {
            // convert percent into pixel for Safari, #75
            var parentSize = getSize( this.element.parentNode );
            // prevent not-in-DOM element throwing bug, #131
            return !parentSize ? 0 :
            ( parseFloat( styleSide ) / 100 ) * parentSize[ measure ];
        }
        return parseInt( styleSide, 10 );
    };

// add transform: translate( x, y ) to position
    proto._addTransformPosition = function( style ) {
        var transform = style[ transformProperty ];
        // bail out if value is 'none'
        if ( transform.indexOf('matrix') !== 0 ) {
            return;
        }
        // split matrix(1, 0, 0, 1, x, y)
        var matrixValues = transform.split(',');
        // translate X value is in 12th or 4th position
        var xIndex = transform.indexOf('matrix3d') === 0 ? 12 : 4;
        var translateX = parseInt( matrixValues[ xIndex ], 10 );
        // translate Y value is in 13th or 5th position
        var translateY = parseInt( matrixValues[ xIndex + 1 ], 10 );
        this.position.x += translateX;
        this.position.y += translateY;
    };

// -------------------------- events -------------------------- //

    /**
     * pointer start
     * @param {Event} event
     * @param {Event or Touch} pointer
     */
    proto.pointerDown = function( event, pointer ) {
        this._dragPointerDown( event, pointer );
        // kludge to blur focused inputs in dragger
        var focused = document.activeElement;
        // do not blur body for IE10, metafizzy/flickity#117
        if ( focused && focused.blur && focused != document.body ) {
            focused.blur();
        }
        // bind move and end events
        this._bindPostStartEvents( event );
        this.element.classList.add('is-pointer-down');
        this.dispatchEvent( 'pointerDown', event, [ pointer ] );
    };

    /**
     * drag move
     * @param {Event} event
     * @param {Event or Touch} pointer
     */
    proto.pointerMove = function( event, pointer ) {
        var moveVector = this._dragPointerMove( event, pointer );
        this.dispatchEvent( 'pointerMove', event, [ pointer, moveVector ] );
        this._dragMove( event, pointer, moveVector );
    };

    /**
     * drag start
     * @param {Event} event
     * @param {Event or Touch} pointer
     */

    proto.dragStart = function( event, pointer ) {
        if ( !this.isEnabled ) {
            return;
        }
        this._getPosition();
        this.measureContainment();
        // position _when_ drag began
        this.startPosition.x = this.position.x;
        this.startPosition.y = this.position.y;
        // reset left/top style
        this.setLeftTop();

        this.dragPoint.x = 0;
        this.dragPoint.y = 0;

        this.element.classList.add('is-dragging');
        this.dispatchEvent( 'dragStart', event, [ pointer ] );
        // start animation
        this.animate();
    };

    proto.measureContainment = function() {
        var containment = this.options.containment;
        if ( !containment ) {
            return;
        }

        // use element if element
        var container = isElement( containment ) ? containment :
            // fallback to querySelector if string
            typeof containment == 'string' ? document.querySelector( containment ) :
                // otherwise just `true`, use the parent
                this.element.parentNode;

        var elemSize = getSize( this.element );
        var containerSize = getSize( container );
        var elemRect = this.element.getBoundingClientRect();
        var containerRect = container.getBoundingClientRect();

        var borderSizeX = containerSize.borderLeftWidth + containerSize.borderRightWidth;
        var borderSizeY = containerSize.borderTopWidth + containerSize.borderBottomWidth;

        var position = this.relativeStartPosition = {
            x: elemRect.left - ( containerRect.left + containerSize.borderLeftWidth ),
            y: elemRect.top - ( containerRect.top + containerSize.borderTopWidth )
        };

        this.containSize = {
            width: ( containerSize.width - borderSizeX ) - position.x - elemSize.width,
            height: ( containerSize.height - borderSizeY ) - position.y - elemSize.height
        };
    };

// ----- move event ----- //

    /**
     * drag move
     * @param {Event} event
     * @param {Event or Touch} pointer
     */
    proto.dragMove = function( event, pointer, moveVector ) {
        if ( !this.isEnabled ) {
            return;
        }
        var dragX = moveVector.x;
        var dragY = moveVector.y;

        var grid = this.options.grid;
        var gridX = grid && grid[0];
        var gridY = grid && grid[1];

        dragX = applyGrid( dragX, gridX );
        dragY = applyGrid( dragY, gridY );

        dragX = this.containDrag( 'x', dragX, gridX );
        dragY = this.containDrag( 'y', dragY, gridY );

        // constrain to axis
        dragX = this.options.axis == 'y' ? 0 : dragX;
        dragY = this.options.axis == 'x' ? 0 : dragY;

        this.position.x = this.startPosition.x + dragX;
        this.position.y = this.startPosition.y + dragY;
        // set dragPoint properties
        this.dragPoint.x = dragX;
        this.dragPoint.y = dragY;

        this.dispatchEvent( 'dragMove', event, [ pointer, moveVector ] );
    };

    function applyGrid( value, grid, method ) {
        method = method || 'round';
        return grid ? Math[ method ]( value / grid ) * grid : value;
    }

    proto.containDrag = function( axis, drag, grid ) {
        if ( !this.options.containment ) {
            return drag;
        }
        var measure = axis == 'x' ? 'width' : 'height';

        var rel = this.relativeStartPosition[ axis ];
        var min = applyGrid( -rel, grid, 'ceil' );
        var max = this.containSize[ measure ];
        max = applyGrid( max, grid, 'floor' );
        return  Math.min( max, Math.max( min, drag ) );
    };

// ----- end event ----- //

    /**
     * pointer up
     * @param {Event} event
     * @param {Event or Touch} pointer
     */
    proto.pointerUp = function( event, pointer ) {
        this.element.classList.remove('is-pointer-down');
        this.dispatchEvent( 'pointerUp', event, [ pointer ] );
        this._dragPointerUp( event, pointer );
    };

    /**
     * drag end
     * @param {Event} event
     * @param {Event or Touch} pointer
     */
    proto.dragEnd = function( event, pointer ) {
        if ( !this.isEnabled ) {
            return;
        }
        // use top left position when complete
        if ( transformProperty ) {
            this.element.style[ transformProperty ] = '';
            this.setLeftTop();
        }
        this.element.classList.remove('is-dragging');
        this.dispatchEvent( 'dragEnd', event, [ pointer ] );
    };

// -------------------------- animation -------------------------- //

    proto.animate = function() {
        // only render and animate if dragging
        if ( !this.isDragging ) {
            return;
        }

        this.positionDrag();

        var _this = this;
        requestAnimationFrame( function animateFrame() {
            _this.animate();
        });

    };

// left/top positioning
    proto.setLeftTop = function() {
        this.element.style.left = this.position.x + 'px';
        this.element.style.top  = this.position.y + 'px';
    };

    proto.positionDrag = function() {
        this.element.style[ transformProperty ] = 'translate3d( ' + this.dragPoint.x +
            'px, ' + this.dragPoint.y + 'px, 0)';
    };

// ----- staticClick ----- //

    proto.staticClick = function( event, pointer ) {
        this.dispatchEvent( 'staticClick', event, [ pointer ] );
    };

// ----- methods ----- //

    proto.enable = function() {
        this.isEnabled = true;
    };

    proto.disable = function() {
        this.isEnabled = false;
        if ( this.isDragging ) {
            this.dragEnd();
        }
    };

    proto.destroy = function() {
        this.disable();
        // reset styles
        this.element.style[ transformProperty ] = '';
        this.element.style.left = '';
        this.element.style.top = '';
        this.element.style.position = '';
        // unbind handles
        this.unbindHandles();
        // remove jQuery data
        if ( this.$element ) {
            this.$element.removeData('draggabilly');
        }
    };

// ----- jQuery bridget ----- //

// required for jQuery bridget
    proto._init = noop;

    if ( jQuery && jQuery.bridget ) {
        jQuery.bridget( 'draggabilly', Draggabilly );
    }

// -----  ----- //

    return Draggabilly;

}));

