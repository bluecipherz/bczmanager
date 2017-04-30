
class videoPlayerController{

    constructor (tag) {
        var vm = this;

        flowManager.initWidget(tag, function (tag) {
            init(tag)
        });

        vm.processInput = function (tag, data) {

        }

        function init(tag) {
            vm.tag = tag.tag_id;
        }
    }
}


var videoPlayer = {
    controller: videoPlayerController,
    view:'app/widgets/common/videoPlayer/video.player.html',
    methods:[
        // {id:0, name:'setData',output:true, input:true, params : ['asset']},
    ],
    color:'#cc2222',
    settings : {vh:20, w:9},
}


export {videoPlayer};
