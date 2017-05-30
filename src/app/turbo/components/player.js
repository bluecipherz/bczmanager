/**
 * Created by intellicar-rinas on 29/5/17.
 */
export class $player{

    constructor ($window){
        "ngInject"

        /*
        *
        *   Private Variables
        *
        * */

        let vm = this;
        let username = null;
        let playerList = [];

        /*
        *
        *   Public Methods
        *
        * */

        vm.isAuthed = function () {
            return username ? true : false;
        };

        vm.setUser = function (uname) {
            username = uname;
            $window.localStorage.setItem("turbouname", uname);
        };

        vm.getUser = function () {
            return username;
        };

        vm.getMyInfo = function () {
            for(let idx in playerList){
                if(playerList[idx].username === vm.getUser()){
                    return playerList[idx];
                }
            }
            return null;
        };

        vm.setPlayerList = function (list) {
            playerList = list;
        };


        /*
        *
        *   Private Methods
        *
        * */


        function isUserLoggedIn() {
            let tempuname = $window.localStorage.getItem("turbouname");
            if(tempuname){
                vm.setUser(tempuname);
            }
        }


        function init() {
            isUserLoggedIn();
        }


        init();

    }

}