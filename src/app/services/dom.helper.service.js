/**
 * Created by Rinas Musthafa on 4/30/2017.
 */
export class domHelperService{

    constructor () {
        'ngInject'

        var vm = this;

        /*
        *
        *   Private Method
        *
        * */

        vm.getElement = function (selector, callback) {
            var el = $(selector);
            if(el.length){
                callback(el);
            }else{
                setTimeout(function () {
                    vm.getElement(selector, callback);
                }, 20)
            }
        }

    }

}