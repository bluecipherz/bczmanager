
class $3dPlayerController{

    constructor (tag, $scope) {
        var vm = this;

        /*
        *
        * Flow Manager Functions
        *
        * */

        vm.processInput = function (tag, data) {
            if(tag == 'setFrame'){
                updateFrame(data);
            }
        }

        vm.frameData = {};

        function updateFrame(data) {
            if('cameraPosition' in data){
                vm.frameData.cameraPosition = data.cameraPosition;
            }
        }

        /*
        *
        * Variable Initialization
        *
        * */

        vm.modes = {
            'MANUAL' : 'MANUAL',
            'AUTO' : 'AUTO'
        }

        vm.tools = {
            'MOVE' : 'MOVE',
            'CUTVIEW' : 'CUTVIEW'
        };

        vm.axes = {
            X : 'X',
            Y : 'Y',
            Z : 'Z'
        };

        vm.controls = {
            mode : vm.modes.AUTO,
            tool : {
                enabled : false,
                current : vm.tools['MOVE']
            },
            cutview : {
                planes : [],
                axis : vm.axes['X']
            }
        };


        /*
        *
        *  ThreeJS
        *
        * */

        var renderer,
            camera,
            loader,
            viewportHeight,
            viewportWidth,
            scene,
            viewportId = '3dPlayer',
            geoMesh,
            cameraControls,
            stats;

        function initThree(){
            var threeInter = setInterval(function () {
                if($('#'+viewportId).length > 0 && $('#'+viewportId).height() > 150){
                    viewportHeight = $('#'+viewportId).height();
                    viewportWidth = $('#'+viewportId).width();
                    if(viewportHeight > 0 && viewportWidth > 0){
                        init3();
                        clearInterval(threeInter);
                    }
                }
            },20)
        }

        function init3() {
            renderer = new THREE.WebGLRenderer({antialias: false, alpha: true});
            renderer.setSize(viewportWidth, viewportHeight);
            // renderer.setClearColor( 0x777777, 0 ); // the default
            document.getElementById(viewportId).appendChild(renderer.domElement);

            camera = new THREE.PerspectiveCamera(45, viewportWidth / viewportHeight, 0.1, 500);
            camera.position.set(2.5, 2.5, 2.5);

            loader = new THREE.JSONLoader();
            scene = new THREE.Scene();

            cameraControls = new THREE.OrbitControls( camera, renderer.domElement );
            cameraControls.addEventListener( 'change', render ); // remove when using animation loop
            cameraControls.enabled = false;



            // enable animation loop when using damping or autorotation
            // cameraControls.enableDamping = true;
            // cameraControls.dampingFactor = 0.25;
            // cameraControls.enableZoom = false;

            var material = new THREE.MeshPhongMaterial({
                // map : texture,
                color : 0x883333,
                vertexColors : THREE.VertexColors,
                specular: 0x555555,
                side: THREE.DoubleSide,
                shininess: 100,
            });

            loader.load('app/models/neuron.js', function (geo, mat){
                mat[0].side = THREE.DoubleSide;
                console.log(mat);
                geoMesh = new THREE.Mesh(geo, material);
                vm.servoBody = geoMesh;
                camera.lookAt(geoMesh.position);
                animate();
                scene.add(geoMesh);
            });


            var light = new THREE.AmbientLight('#fff'); // soft white light
            scene.add(light);
            var directionalLight = new THREE.DirectionalLight(0xffffff);
            directionalLight.position.set(-3, 20, 100).normalize();
            scene.add(directionalLight);


            stats = new Stats();
            document.getElementById('configWidget').appendChild( stats.dom );

            renderer.render(scene, camera)

            vm.controls.cutview.plane = new THREE.Plane( new THREE.Vector3( 0, 0, 0 ), 0.1 );
            vm.controls.cutview.plane.normal.x = -1;
            renderer.clippingPlanes = vm.controls.cutview.planes;



            vm.controls.cutview.markerMaterial = new THREE.MeshBasicMaterial( { transparent:true, wireframe: true, color:0xff0000, opacity:0 } );
            vm.controls.cutview.marker = new THREE.Mesh(new THREE.PlaneBufferGeometry( 3, 3, 2, 2 ),vm.controls.cutview.markerMaterial);


            var control = new THREE.TransformControls( camera, renderer.domElement );
            control.addEventListener( 'change', render );
            control.attach( vm.controls.cutview.marker );

            scene.add(vm.controls.cutview.marker);
            // scene.add( control );


            vm.changeMode('MANUAL');
            vm.changeTool('MOVE');
            vm.changeCutViewAxis('X')
            applyScope();
        }

        function animate() {
            vm.servoAnimId = requestAnimationFrame( animate );
            render();
        }

        function render() {
            processFrame();
            renderer.render(scene, camera);
        }

        function processFrame() {
            if(vm.controls.mode == vm.modes.AUTO){
                animateVectors(camera.position, vm.frameData.cameraPosition, 0.2);
                camera.lookAt(geoMesh.position);
            }else{

            }
            stats.update();
        }

        var dimensions = ['x','y','z'];
        var diDiff = 0;

        function animateVectors(v1, v2, max) {
            if(!v1 || !v2) return;
            for(var axis in dimensions){
                diDiff = v1[dimensions[axis]] - v2[dimensions[axis]];
                if(diDiff > 0){
                    v1[dimensions[axis]] -= Math.min(max, diDiff / 10)
                }else if(diDiff < 0){
                    v1[dimensions[axis]] += Math.min(max, -1 * diDiff / 10);
                }
            }
        }


        /*
        *
        *  Controller Functions
        *
        * */


        vm.changeMode = function (mode) {
            vm.controls.mode = vm.modes[mode];
            if(vm.modes[mode] == vm.modes['AUTO']){
                disableTool();
            }else{
                enableTool();
            }
        }

        vm.changeTool = function (tool) {
            if(vm.controls.tool.enabled){
                vm.controls.tool.current = vm.tools[tool];
                if(vm.tools[tool] == vm.tools['MOVE']){
                    cameraControls.enabled = true;
                }else{
                    cameraControls.enabled = false;
                }
            }
        };

        vm.changeCutViewAxis = function (axis) {
            vm.controls.cutview.axis = axis;
            vm.controls.cutview.plane.normal.x = 0;
            vm.controls.cutview.plane.normal.y = 0;
            vm.controls.cutview.plane.normal.z = 0;
            vm.controls.cutview.plane.constant = 0.0;
            vm.controls.cutview.marker.rotation.x = 0;
            vm.controls.cutview.marker.rotation.y = 0;
            vm.controls.cutview.marker.rotation.z = 0;
            vm.controls.cutview.marker.position.x = -0.02;
            vm.controls.cutview.marker.position.y = -0.02;
            vm.controls.cutview.marker.position.z = -0.02;

            if(vm.axes[axis] == vm.axes['X']){
                vm.controls.cutview.plane.normal.x = -1;
                vm.controls.cutview.marker.rotation.y = Math.PI / 2;
            }else if(vm.axes[axis] == vm.axes['Y']){
                vm.controls.cutview.plane.normal.y = -1;
                vm.controls.cutview.marker.rotation.x = Math.PI / 2;
            }else{
                vm.controls.cutview.plane.normal.z = -1;
                vm.controls.cutview.marker.rotation.z = Math.PI / 2;
            }
        };

        vm.toggleCutView = function () {
            if(vm.controls.cutview.enabled){
                vm.controls.cutview.enabled = false;
                disableCutView();
            }else{
                vm.controls.cutview.enabled = true;
                enableCutView();
            }
        };
        
        vm.changeCutViewVal = function (val) {
            vm.controls.cutview.plane.constant += val;
            if(vm.controls.cutview.axis == vm.axes['X']){
                vm.controls.cutview.marker.position.x += val;
            }else if(vm.controls.cutview.axis == vm.axes['X']){
                vm.controls.cutview.marker.position.y += val;
            }else{
                vm.controls.cutview.marker.position.z += val;
            }
        }



        function disableTool() {
            vm.changeTool('');
            vm.controls.tool.enabled = false;
        }

        function enableTool() {
            vm.controls.tool.enabled = true;
            vm.changeTool('MOVE');
        }

        function enableCutView() {
            vm.controls.cutview.enabled = true;
            renderer.clippingPlanes = [vm.controls.cutview.plane];
            vm.controls.cutview.markerMaterial.opacity = 1;

        }

        function disableCutView() {
            vm.controls.cutview.enabled = false;
            renderer.clippingPlanes = [];
            vm.controls.cutview.markerMaterial.opacity = 0;
        }


        /*
        *
        *  Init Function
        *
        * */

        function initBClick() {
            vm.bclickEls = {};
            vm.bclickDomEls = vm.DOM.find('[b-click]');
            vm.bclickDomEls.each(function (key, el) {
                $(el).click(function () {
                    eval($(el).attr('b-click'));
                    applyScope();
                })
            })
        }

        var tempArrObj;
        var tempArr;

        function applyBClass() {
            vm.bclickEls = {};
            vm.bclickDomEls = vm.DOM.find('[b-class]');
            vm.bclickDomEls.each(function (key, el) {
                tempArr = $(el).attr('b-class').split(',');
                for(var idx in tempArr){
                    tempArrObj = tempArr[idx].split(':');
                    if(eval(tempArrObj[1]))
                        $(el).addClass(tempArrObj[0])
                    else
                        $(el).removeClass(tempArrObj[0])
                }
            })
        }

        function applyScope() {
            setTimeout(function () {
                applyBClass();
            });
        }

        function initScope() {
            initBClick()
            applyScope();
        }


        function init(tag) {

            /*
            *   Basic Settings
            * */

            vm.tag = tag.tag_id;
            vm.widgetData = flowManager.getData(vm.tag);
            vm.DOM = vm.widgetData.DOM;
            initThree();
            initScope();

            /*
            * Initial Setup
            * */

        }


        flowManager.initWidget(tag, function (tag) {
            init(tag)
        });
    }
}


var $3dPlayer = {
    controller: $3dPlayerController,
    view:'app/widgets/common/3dPlayer/3d.player.html',
    methods:[
        {id:0, name:'setFrame',output:false, input:true, params : ['frame']},
    ],
    color:'#cc2222',
    settings : {vh:20, w:9},
}


export {$3dPlayer};
