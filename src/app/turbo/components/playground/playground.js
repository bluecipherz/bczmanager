/**
 * Created by intellicar-rinas on 30/5/17.
 */
export class $playground{

    constructor ($player) {
        "ngInject"

        /*
        *
        *   Private variables
        *
        * */


        let vm = this;
        let svgNS = "http://www.w3.org/2000/svg";
        let objectStack = [];
        let myInfo;
        let screenSVG;
        let minigunB;
        let clientW = {};


        $("#turboId").mousemove(function (event) {
            if(minigunB){
                let tempAngle = getAngleBetweenPoints({
                    x: event.pageX,
                    y: event.pageY
                }, minigunB.getPosition());

                minigunB.changeAngle(tempAngle);
                throwEvent("gunAngle", tempAngle);
            }
        });


        $("#turboId").click(function (event) {
            minigunB.fire();
            throwEvent("gunFire");
        });


        function setPosition(id, x, y) {
            $('#player-'+id).css({
                left:x,
                top:y
            });
        }


        function throwEvent(eventName, data) {
            if(vm.game){
                vm.game.events("gameEvent", {
                    event: eventName,
                    data: data
                })
            }
        }


        /*
        *
        *   Public Methods
        *
        * */

        vm.events = function (msg) {

            if(msg.msg.event === "gameStarted"){
                addClient(msg);
                throwEvent("clientInfo", myInfo);
            }else if(msg.msg.event === "clientInfo"){
                addClient(msg);
            }else if(msg.msg.event === "gunAngle"){
                setClientGunAngle(msg);
            }else if(msg.msg.event === "gunFire"){
                fireClientGunGun(msg);
            }

        };

        vm.startGame = function (game, config) {
            vm.game = game;
            myInfo = config;
            init();
            throwEvent("gameStarted", config);
        };



        /*
        *
        *   Components
        *
        * */


        function setClientGunAngle(data) {
            if(!vm.game)
                return;
            if(data.user in clientW && clientW[data.user].gun){
                clientW[data.user].gun.changeAngle(data.msg.data);
            }
        }

        function fireClientGunGun(data) {
            if(!vm.game)
                return;
            if(data.user in clientW && clientW[data.user].gun){
                clientW[data.user].gun.fire();
            }
        }


        function addClient(data) {

            if(vm.game){

                if(!clientW[data.user]){
                    clientW[data.user] = {};
                }

                clientW[data.user].gun = new MiniGun(data.msg.data, true);
                clientW[data.user].gun.setPosition();
            }

        }

        function startKillers() {
            let killTimer =3000;
            setInterval(function () {
                new KillerBomber(myInfo);
                killTimer = 1500 + (Math.random() * 5000);
            }, killTimer);
        }
        
        
        function KillerBomber(conf) {
            console.log("Killlah Coming!!!");

            let kb = this;


            kb.missile = document.createElementNS(svgNS,'rect');
            kb.missile.setAttribute('width',20);
            kb.missile.setAttribute('height',3);
            kb.missile.setAttribute('fill','#27d72c');



            kb.x = gunPos.x;
            kb.y = gunPos.y;

            mg_m.update = function(){
                mg_m.missile.setAttribute('x',mg_m.x);
                mg_m.missile.setAttribute('y',mg_m.y);
                mg_m.missile.setAttribute('transform', "rotate(" + mg_m.angle + "," + mg_m.x + "," + mg_m.y + ")");
            };

            mg_m.destroy = function () {
                for(let idx in objectStack){
                    if(objectStack[idx].id === mg_m.id){
                        delete objectStack[idx];
                        objectStack.splice(idx, 1);
                    }
                }
                $(mg_m.missile).remove();
            };

            mg_m.update();
            screenSVG.svg.append(mg_m.missile);


        }


        /*
        *
        *   Mini Gun
        *
        * */


        function MiniGun(config, client) {

            let mg = this;
            let gun;
            let conf = config;
            let gunPos;
            let angleDeg;
            let missileCounter = 0;

            mg.getPosition = function () {
                return gunPos;
            };

            mg.setPosition = function () {
                if(conf.side === 1){
                    gunPos = {
                        x: (screenSVG.width / 2) - 3,
                        y: 10,
                    };
                }else{
                    gunPos = {
                        x: (screenSVG.width / 2) - 3,
                        y: screenSVG.height - 10,
                    };
                }

                gun.attr("x", gunPos.x - 50)
                    .attr("y", gunPos.y)
            };

            mg.changeAngle = function (angle) {
                angleDeg = angle;
                changeGunAngle(angleDeg);
            };

            mg.fire = function () {
                objectStack.push(new Missile(angleDeg))
            };


            /*Private Methods*/

            function setGun() {
                if(client){
                    gun = $("#tminigun-c");
                }else{
                    gun = $("#tminigun-b");
                }
            }

            function changeGunAngle(deg) {
                gun.attr("transform", "rotate(" + deg + "," + gunPos.x + "," + (gunPos.y + 3) + ")");
            }

            function Missile(angle) {

                let mg_m = this;

                mg_m.side = -1;
                mg_m.angle = angle;
                mg_m.id = getMissileId(missileCounter);
                missileCounter++;

                mg_m.missile = document.createElementNS(svgNS,'rect');
                mg_m.missile.setAttribute('width',20);
                mg_m.missile.setAttribute('height',3);
                mg_m.missile.setAttribute('fill','#27d72c');

                mg_m.x = gunPos.x;
                mg_m.y = gunPos.y;

                mg_m.update = function(){
                    mg_m.missile.setAttribute('x',mg_m.x);
                    mg_m.missile.setAttribute('y',mg_m.y);
                    mg_m.missile.setAttribute('transform', "rotate(" + mg_m.angle + "," + mg_m.x + "," + mg_m.y + ")");
                };

                mg_m.destroy = function () {
                    for(let idx in objectStack){
                        if(objectStack[idx].id === mg_m.id){
                            delete objectStack[idx];
                            objectStack.splice(idx, 1);
                        }
                    }
                    $(mg_m.missile).remove();
                };

                mg_m.update();
                screenSVG.svg.append(mg_m.missile);

                mg_m.engine = new MissileEngineV1(mg_m);

            }

            function getMissileId(id) {
                return "minigun-missile-"+ conf.user + "-" + id;
            }

            setGun();
        }


        function MissileEngineV1(body) {
            let tev1 = this;
            let radians = (Math.PI/180)*body.angle;
            let speed = 0;
            let acc = 0.2;
            let missileProp = {
                width: 20,
                height: 3,
            };

            let screenProp = {
                width: screenSVG.width,
                height: screenSVG.height,
                x:0,
                y:0,
            };

            tev1.engine = setInterval(function () {
                body.x+= body.side * speed * Math.cos(radians);
                body.y+= body.side * speed * Math.sin(radians);
                body.update();

                missileProp.x = body.x;
                missileProp.y = body.y;

                if(speed <= 30){
                    speed+= acc;
                }

                if(acc <= 3){
                    acc += 0.04;
                }

                if(!isIntersecting(screenProp, missileProp)){
                    destroy();
                }

            }, 20);

            function destroy() {
                clearInterval(tev1.engine);
                body.destroy();
            }
        }

        function init() {
            screenSVG = getSVGProp();
            minigunB = new MiniGun(myInfo);
            minigunB.setPosition();
            startKillers();
        }


        /*
        *
        *   Common Functions
        *
        * */

        function getSVGProp() {
            let svg = $("#turboId");
            return{
                width: svg.width(),
                height: svg.height(),
                svg: svg
            }
        }

        function getAngleBetweenPoints(pos1, pos2) {
            return Math.atan2(pos2.y - pos1.y, pos2.x - pos1.x) * 180 / Math.PI;
        }


        function isIntersecting(rect1, rect2) {
            return  rect1.x < rect2.x + rect2.width &&
                    rect1.x + rect1.width > rect2.x &&
                    rect1.y < rect2.y + rect2.height &&
                    rect1.height + rect1.y > rect2.y
        }

    }

}