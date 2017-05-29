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
                events: events,
                players: [{username: $player.getUser()}]
            };

            game.events("gameStarted")
        };


        vm.isStarted = function () {
            return game ? true : false;
        };


        vm.getGame = function () {
            return game;
        };


        vm.appendPlayer = function (players) {
            if(game){
                let found;
                for(let idx in players){
                    found = false;
                        for(let jdx in game.players){
                            if(players[idx].username == game.players[jdx].username){
                                found = true;
                            }
                        }

                    if(!found){
                        game.players.push(players[idx]);
                    }
                }
                game.events("scopeApply");
            }
        };

        vm.setPosition = function (id, pos) {
            setPosition(id, pos.x, pos.y);
        };


        /*
        *
        *   Private Methods
        *
        * */


        $(".gameScene").click(function (event) {
            setPosition($player.getUser(), event.pageX, event.pageY)
            game.events("positionChanged", {x:event.pageX, y:event.pageY})
        });

        function setPosition(id, x, y) {
           $('#player-'+id).css({
               left:x,
               top:y
           });
        }

    }

}