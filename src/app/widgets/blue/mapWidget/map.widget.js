/**
 * Created by Rinas Musthafa on 4/30/2017.
 */
export class mapWidget {

    constructor () {
        'ngInject'

        this.restrict = 'E';
        this.scope = {data: '=', event: '='};
        this.templateUrl = 'app/widgets/blue/mapWidget/map.widget.html';

    }

    // AIzaSyBfVixw2S8PZxiiSwZYKU3jv2xFDmIhjgo

    controller ($timeout, $mapWidget, $scope){
        'ngInject'

        var vm = this;


        /*
        *
        *   Private Methods
        *
        * */

        function initMap() {
            $timeout(function () {

                var isGoogle = false;
                try{
                    if(google){
                        isGoogle = true;
                    }
                } catch (e) {
                    isGoogle = false;
                }


                if(isGoogle){
                    vm.mapProp= {
                        center:new google.maps.LatLng(12.455709, 76.573352),
                        zoom:8,
                        styles:[
                            {
                                "stylers": [
                                    {
                                        "hue": "#ff1a00"
                                    },
                                    {
                                        "invert_lightness": true
                                    },
                                    {
                                        "saturation": -100
                                    },
                                    {
                                        "lightness": 33
                                    },
                                    {
                                        "gamma": 0.5
                                    }
                                ]
                            },
                            {
                                "featureType": "water",
                                "elementType": "geometry",
                                "stylers": [
                                    {
                                        "color": "#2D333C"
                                    }
                                ]
                            }
                        ]
                    };
                    vm.map= new google.maps.Map(document.getElementById("mw-map"), vm.mapProp);
                }else{
                    $timeout(function () {
                        initMap();
                    }, 1000)
                }
            }, 300)
        }




        /*
        *
        *   Get Locations
        *
        * */

        $mapWidget.getLocations(function (resp) {
            vm.locations = resp;
            markAssets();
        }, function (resp) {
            console.log("Get Location Failed", resp);
        });


        function markAssets() {

            let loc;

            for(var idx in vm.locations){

                try{
                    loc = JSON.parse(vm.locations[idx].coords);
                } catch(e) {
                    loc = null;
                }

                if(loc && loc.coords){
                    let latLng = new google.maps.LatLng(loc.coords.latitude, loc.coords.longitude);
                    $mapWidget.customMarker(latLng, vm.map, {});
                }
            }
        }


        /*
        *
        *   Init method
        *
        * */

        function init() {
            initMap();
        }

        init();

    }

}