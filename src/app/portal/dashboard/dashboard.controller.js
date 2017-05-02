/**
 * Created by Rinas Musthafa on 4/28/2017.
 */
export class DashboardController{

    constructor (loginService,domHelperService, requestService, $scope){
        'ngInject'

        var vm = this;

        requestService.firePost('/getapplist')
            .then(function (resp) {
                // console.log(resp);
            }, function (resp) {
                // console.log("failure");
            })



        /*
        *
        *   Private Methods
        *
        * */
        

        function setCSSClass(cols, u, v) {
            var styleString = '';
            for(var idx=1; idx <= cols; idx++){
                styleString +=  '.db-w-'+idx+'{ width: '+(u * idx)+'px } ' +
                    '.db-vh-'+idx+'{ height: '+(v * idx)+'px } ' +
                    '.db-h-'+idx+'{ height: '+(u * idx)+'px } '
            }
            var style = document.createElement('style');
            style.type = 'text/css';
            style.innerHTML =  styleString;
            document.getElementsByTagName('head')[0].appendChild(style);
        }


        function output(inp) {
            $('.dbmcd-container pre').html(inp);
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



        function setCSS() {

            domHelperService.getElement('.db-container', function (el) {

                var cols = 12;
                var wheight = el.height() /cols;
                var wwidth = el.width() /cols;

                setCSSClass(cols, wwidth, wheight);

            });

        }

        /*
        *
        *   Widget Datas
        *
        * */

        $scope.logWidgetData = {
            wrapper: {
                vheight: 6,
                width: 4,
                name: 'Logs',
            },
            wid: "logWidget1",
        };


        $scope.mapWidgetData = {
            wrapper: {
                vheight: 6,
                width: 8,
                name: 'Assets',
            },
            wid: "logWidget1",
        };


        /*
        *
        *   Init Method
        *
        * */

        function init() {

            setCSS();

            window.addEventListener('resize', setCSS);

        }

        init();
    }

}