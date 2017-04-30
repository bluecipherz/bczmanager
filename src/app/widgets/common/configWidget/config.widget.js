
class configWidgetController{

    constructor (tag) {
        var vm = this;

        vm.processInput = function (tag, data) {

        }



        function init(tag) {
            vm.tag = tag.tag_id;
        }


        flowManager.initWidget(tag, function (tag) {
            init(tag)
        });
    }
}


var configWidget = {
    controller: configWidgetController,
    view:'app/widgets/common/configWidget/config.widget.html',
    methods:[
        // {id:0, name:'setData',output:true, input:true, params : ['asset']},
    ],
    color:'#cc2222',
    settings : {vh:24, w:6},
}


export {configWidget};
