/**
 * Created by intellicar-rinas on 29/5/17.
 */
export class $game{

    constructor ($player, $playground){
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

            let myConf = {
                username: $player.getUser(),
                side: host.hostid === $player.getUser() ? -1 : 1
            };

            game = {
                host: host,
                events: events,
                players: [myConf],
            };

            $playground.startGame(game, myConf);
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
                $player.setPlayerList(game.players);
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


    }

}