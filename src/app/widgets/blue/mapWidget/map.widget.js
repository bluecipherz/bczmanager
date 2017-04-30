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

    controller (){
        'ngInject'

        // wm-map
        function myMap() {
            var mapProp= {
                center:new google.maps.LatLng(51.508742,-0.120850),
                zoom:5,
            };
            var map= new google.maps.Map(document.getElementById("mw-map"),mapProp);
        }

    }

}