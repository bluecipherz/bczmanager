
class timelineController{

    constructor (tag) {
        var vm = this;
        vm.FPS = 30;

        flowManager.initWidget(tag, function (tag) {
            init(tag)
        });

        vm.processInput = function (tag, data) {

        }


        /*-------------------------*/

        function init(tag) {

            vm.tag = tag.tag_id;
            vm.widgetData = flowManager.getData(vm.tag);
            vm.DOM = vm.widgetData.DOM;
            initBClick();

            vm.player = {
                playing : false,
                currentIndex : 0
            };

            vm.player.togglePlay = function () {
                if(vm.player.playing){
                    vm.player.playing = false;
                    // console.log('im paused');
                    pause();
                }else{
                    // console.log('im playing')
                    vm.player.playing = true;
                    play();
                }
            }


            vm.player.data = generateTempData();

            var d3Data = {
                svg : '#timelineSVG',
                container : '#timeline',
                data : vm.player.data,
            }

            initD3(d3Data);
        }

        var cameraPosition = {x:4, y:-1, z:3};
        var randCounter = 0;
        function generateTempData() {
            var tempArray = [];
            for(var idx =0; idx < 1000; idx++){
                randCounter++;
                if(randCounter >= 60){
                    randCounter = 0;
                    cameraPosition = getRandomVector(-5, 5);
                }
                tempArray.push({x : moment().seconds(idx).unix() * 1000, y : idx, cameraPosition : cameraPosition})
            }
            return tempArray;
        }

        function getRandomVector(min, max) {
            return {
                x : getRandomAxis(min, max),
                y : getRandomAxis(min, max),
                z : getRandomAxis(min, max),
            }
        }

        function getRandomAxis(min, max) {
            var axis =  min + ( Math.random() * (max - min) );
            if(axis > 0){
                axis = Math.max(1, axis)
            }else{
                axis = Math.min(-1, axis)
            }
            return axis;
        }


        function initBClick() {
            vm.bclickEls = {};
            vm.bclickDomEls = vm.DOM.find('[b-click]');
            vm.bclickDomEls.each(function (key, el) {
              $(el).click(function () {
                  eval('vm.'+$(el).attr('b-click'));
              })
            })
        }


        function initD3(data) {
            if($(data.container) && $(data.container).length && $(data.container).width() > 300){
                vm.d3 = new D3Timeline(data);
            }else{
                setTimeout(function () {
                    initD3(data);
                },20)
            }
        }


        function D3Timeline(data) {

            var self = this;
                self.container = angular.element(data.container);
                self.width = self.container.width();
                self.height = self.container.height();
                self.svg = data.svg;
                self.data = data.data;

            self.visP = d3.select(data.svg)
                .attr("preserveAspectRatio", "xMinYMin meet")
                .attr("viewBox", "0 0 " + self.width + " " + (Math.max(0, self.height)))
                .classed("svg-content-responsive", true)
                .on("contextmenu", function(d) { d3.event.preventDefault(); })
                .on("mousemove", mouseHoverEvent)
                .on("mousedown", mouseDownEvent)
                .on("mouseup", mouseUpEvent)

            getAxisScale();
            draw();

            function draw() {
                d3.selectAll(self.svg+" > *").remove();

                self.clipRect = self.visP.append("clipPath")    // define a clip path
                    .attr('x',0)
                    .attr('y',0)
                    .attr("id", "main-clip") // give the clipPath an ID
                    .append("rect")
                    .attr("width",  self.width)
                    .attr("height", self.height)

                self.vis = self.visP
                    .append("svg:g")
                    .attr('class', 'visTrans')
                    .attr('x',0)
                    .attr('y',0)
                    .attr("clip-path", "url(#main-clip)") // clip the rectangle
                    .attr("transform", "translate(0,0)");

                self.marker = self.vis.append('g')
                    .attr('class', 'tl-marker')
                    .append('rect')
                        .attr('x',0)
                        .attr('y',0)
                        .attr('width',1)
                        .attr('height',self.height)
                        .attr('fill','#f00')


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
                if(self.mouseClicked){
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
            }
            
            function updateMarker() {
                self.marker.attr('transform','translate('+self.mouseX+',0)');
            }

        }

        function play() {
            vm.player.interval = setInterval(function () {
                if(vm.player.currentIndex + 1 >= vm.player.data.length){
                    clearInterval(vm.player.interval);
                    updateFrame(vm.player.currentIndex);
                    vm.player.currentIndex = 0;
                    vm.player.playing = false;
                }else{
                    vm.player.currentIndex = getCurrentIndex(1);
                    updateFrame(vm.player.currentIndex);
                }
            }, 1000 / vm.FPS);
        }

        function pause() {
            clearInterval(vm.player.interval);
        }

        function getCurrentIndex(offset) {
            if(vm.player.currentIndex == null)
                vm.player.currentIndex = 0;
            if(offset == null)
                offset = 0;
            return vm.player.currentIndex + offset;
        }

        function getFrameIndex(x, diff, data) {
            var found = false;
            var startingIndex = 0;
            var endingIndex = data.length;
            var index;
            var eq;
            var counter = 0;
            while(!found){
                index = parseInt((endingIndex - startingIndex) / 2) + startingIndex;
                // console.log(startingIndex,index, endingIndex)
                eq = getRound(x, data[index].x, diff);
                if(eq == 0){ // found
                    found = true;
                }else if(eq == -1){ // greater than
                    startingIndex += (index - startingIndex);
                }else{ // less than
                    endingIndex -= (index - startingIndex);
                }
                if(startingIndex - endingIndex <= 1 && endingIndex - startingIndex <= 1){
                    counter++;
                    diff += diff;
                    if(counter > 10){
                        break;
                    }
                }
            }

            function getRound(x1, x2, diff) {
                var diff1 = x1 + diff - x2;
                // var diff2 = x1 - diff - x2;
                if(diff1  < 0){
                    // console.log(diff1, diff2, '++')
                    return 1
                }else if( diff1  > 0){
                    // console.log(diff1, diff2, '--')
                    return -1;
                }else{
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
    }
}


var timeline = {
    controller: timelineController,
    view:'app/widgets/common/timeline/timeline.html',
    methods:[
        {id:0, name:'pushFrame', output:true, input:false, params : ['frame']},
    ],
    color:'#cc2222',
    settings : {vh:4, w:18},
}


export {timeline};
