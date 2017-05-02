/**
 * Created by intellicar-rinas on 2/5/17.
 */
export class $mapWidget{

    constructor (mapAPIService) {
        'ngInject'

        let vm = this;

        /*
        *
        *   Public Methods
        *
        * */

        vm.getLocations = function (success, failure) {
            mapAPIService.getLocations({})
                .then(handleSuccess, handleFailure);

            function handleSuccess(resp) {
                vm.locations = resp.data.location;
                success(vm.locations);
            }

            function handleFailure(resp) {
                failure(resp);
            }
        };

        vm.customMarker = function(latlng, map, args){

            let cmarker = new CustomMarker(latlng, map, args);
            return cmarker;

        };


        /*
        *
        *   Custom Marker
        *
        **/

        function CustomMarker(latlng, map, args) {
            this.latlng = latlng;
            this.args = args;
            this.setMap(map);
        }

        initProto();

        function initProto() {

            var isGoogle = false;
            try{
                if(google){
                    isGoogle = true;
                }
            } catch (e) {
                isGoogle = false;
            }

            if(isGoogle){

                CustomMarker.prototype = new google.maps.OverlayView();

                CustomMarker.prototype.draw = function() {

                    let self = this;

                    let div = this.div;
                    let highlighter;

                    if (!div) {

                        div = this.div = document.createElement('div');
                        div.className = 'customMarker';

                        //
                        // div.style.position = 'absolute';
                        // div.style.cursor = 'pointer';
                        // div.style.width = '20px';
                        // div.style.height = '20px';
                        // div.style.background = 'blue';

                        if (typeof(self.args.marker_id) !== 'undefined') {
                            div.dataset.marker_id = self.args.marker_id;
                        }

                        google.maps.event.addDomListener(div, "click", function(event) {
                            google.maps.event.trigger(self, "click");
                        });

                        /*
                         *
                         * highlighter
                         *
                         * */


                        highlighter = document.createElement('div');
                        highlighter.className = "cm-highlighter";

                        let panes = this.getPanes();
                        div.appendChild(highlighter);
                        panes.overlayImage.appendChild(div);
                    }

                    let point = this.getProjection().fromLatLngToDivPixel(this.latlng);

                    if (point) {
                        div.style.left = point.x + 'px';
                        div.style.top = point.y + 'px';
                    }
                };

                CustomMarker.prototype.remove = function() {
                    if (this.div) {
                        this.div.parentNode.removeChild(this.div);
                        this.div = null;
                    }
                };

                CustomMarker.prototype.getPosition = function() {
                    return this.latlng;
                };

            }else{
                setTimeout(function () {
                    initProto();
                },1000);
            }
        }

    }

}