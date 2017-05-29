/**
 * Created by intellicar-rinas on 29/5/17.
 */
export class $game{

    constructor ($player){
        "ngInject"


        /*
        *
        *   Private Variables
        *
        * */

        let vm = this;
        let game = null;
        let host = false;
        let connected = false;

        /*
        *
        *   Public methods
        *
        * */


        vm.isAuthed = function () {
            return $player.isAuthed();
        };


        vm.startHost = function () {

        };


        vm.isConnected = function () {
            return connected;
        };


        vm.start = function (host, events) {
            game = {
                host: host,
                events: events
            }

            game.events("gameStarted")
        };


        vm.isStarted = function () {
            return game ? true : false;
        }


        /*
        *
        *   Private Methods
        *
        * */

    }

}