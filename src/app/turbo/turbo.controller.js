/**
 * Created by intellicar-rinas on 28/5/17.
 */

export class TurboController{

    constructor ($game, $player, $scope, $timeout, $playground) {
        "ngInject"

        console.log("TurboController");

        /*
        *
        *   Private Variables
        *
        * */


        let vm = this;
        let hosts = null;
        let selfHost = false;


        /*
        *
        *   Private Methods
        *
        * */


        function connectToMQTT() {
            vm.connected = true;
            vm.socket = io.connect("http://13.228.24.181:3100");
            vm.socket.on("msg", onMessage);
        }


        function onMessage(msg) {
            let msgBody = JSON.parse(msg);

            if(msgBody.user !== $player.getUser()){

                if(msgBody.topic === "gameEvent"){
                    $playground.events(msgBody);

                }else if(msgBody.topic === "requestHosts"){
                    sendHosts();

                }else if(msgBody.topic === "hostList"){
                    setHosts(msgBody.msg);

                }else if(msgBody.topic === "gameStarted"){
                    sendMessage("gameObject", $game.getGame())

                }else if(msgBody.topic === "gameObject"){
                    syncPlayers(msgBody.msg);
                    sendMessage("gameObjectReply", $game.getGame())

                }else if(msgBody.topic === "gameObjectReply"){
                    syncPlayers(msgBody.msg);

                }

            }
        }


        function init() {
            connectToMQTT();
            requestHost();
            // vm.createHost();
        }

        function sendMessage(topic, msg) {
            let msgBody = {
                user: $player.getUser(),
                topic: topic,
                msg: msg,
            };
            vm.socket.emit("msg", JSON.stringify(msgBody));
        }




        function requestHost() {
            sendMessage("requestHosts");
        }

        function sendHosts() {
            if(hosts){
                sendMessage("hostList", hosts);
            }
        }

        function setHosts(msg) {

            if(!hosts)
                hosts = [];

            let found;
            for(let idx in msg){
                found = false;
                for(let jdx in hosts){
                    if(hosts[jdx].hostid === msg[idx].hostid){
                        found = true;
                    }
                }
                if(!found){
                    hosts.push(msg[idx])
                }
            }

            for(let idx in hosts){
                if(hosts[idx].hostid === $player.getUser()){
                    selfHost = true;
                }
            }

            $timeout(function () {
                $scope.$apply()
            });

        }

        function createHost() {

            if(!hosts)
                hosts = [];

            hosts.push({
                hostid: $player.getUser(),
            });
            startGame(hosts[hosts.length-1]);
            sendHosts();
        }


        function startGame(host) {
            $game.start(host, eventHandler);
        }


        function eventHandler(tag, data) {

            if(tag === "gameEvent"){
                sendMessage("gameEvent", data);

            }else if(tag === "gameStarted"){
                sendMessage("gameStarted");

            }else if(tag === "scopeApply"){
                $timeout(function () {
                    $scope.$apply();
                })
            }
        }


        function setPosition(msg) {
            $game.setPosition(msg.user, msg.msg)
        }


        function syncPlayers(game) {
            if(game && game.players){

                $game.appendPlayer(game.players);

            }
        }


        /*
        *
        *   Public Methods
        *
        * */


        vm.isAuthed = function () {
            return $game.isAuthed();
        };


        vm.isJoinable = function () {
            return vm.username && vm.username.length > 4;
        };


        vm.join = function () {
            if(vm.isJoinable()){
                $player.setUser(vm.username);
            }
        };


        vm.getHosts = function () {
            return hosts;
        };


        vm.createHost = function () {
            createHost();
            selfHost = true;
        };


        vm.amIHost = function () {
            return !selfHost;
        };


        vm.startGame = function (host) {
            startGame(host);
        };


        vm.isGameStarted = function () {
            return $game.isStarted();
        };


        vm.getGame = function () {
            return $game.getGame();
        };


        vm.getUser = function () {
            return $player.getUser();
        };





        init();



    }

}