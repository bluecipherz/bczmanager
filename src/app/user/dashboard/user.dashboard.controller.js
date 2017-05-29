/**
 * Created by intellicar-rinas on 3/5/17.
 */
export class UserDashboardController{

    constructor (userDashboardService, appConstants, leftNavService, $scope, $s) {
        'ngInject'

        var vm = this;

        vm.stateID = leftNavService.stateID;
        $scope.leftNavService = leftNavService;
        $scope.appConstants = appConstants;

        $s.initInstance(vm.stateID);
        $s.on(vm.stateID, 'stateChange', onStateChange);

        leftNavService.selectNav(leftNavService.navs[0]);

        /*
        *
        *   Private Methods
        *
        * */


        function onStateChange(state) {
            $scope.state = state;
            /* DASHBOARD */
            if($scope.state.nav.navState == appConstants.navState.DASHBOARD){

            }


            /*
            *
            *   Product
            *
            * */

        }


        /*
        *
        *   Public Variables
        *
        * */

        $scope.products = [
            {id:1, name: "StarCool"},
            {id:2, name: "DoctorSpot"},
        ];

        $scope.productInfo = [
            {
                name: "Product Health",
                description: "This is the overall product health. this inlcudes API failure, product performance, etc.",
                progress: 50,
            },
            {
                name: "Error Reported",
                description: "This is the Total API failure of the product",
                progress: 9,
            },
            {
                name: "Backend Status",
                description: "This Matrix is calculated based on How backend is responding to the Product",
                progress: 80,
            },
        ];


        // vm.socket = io.connect("http://kafka5.intellicar.in:10105");
        // vm.socket.emit('authtoken', "");
        // vm.socket.on('authsuccess', function (resp) {
        //     console.log("Success");
        // });
        // vm.socket.on('authfailure', function (resp) {
        //     console.log("Failure");
        // });

        /*
        *
        *   Public Methods
        *
        * */

        $scope.setProduct = function (product) {
            $s.pushState(vm.stateID, {product: product})
        }
    }

}