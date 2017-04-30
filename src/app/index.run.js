export function runBlock ($rootScope, $log, $state, $cookieStore)  {
    'ngInject';


    $log.log("runBlock");
    $rootScope.showLoginDialog = true;
    //$rootScope.$emit('getData', {'login': true});

    // $window.ga('create', 'UA-86820286-2', 'auto');
    //
    // // track pageview on state change
    // $rootScope.$on('$stateChangeSuccess', function (event) {
    //   $window.ga('send', 'pageview', $location.path());
    // });


    $rootScope.$on( '$stateChangeStart', function(e, toState  , toParams
        , fromState, fromParams) {
        //
        // var isLogin = toState.name === "portalLogin";
        // if(isLogin){
        //     return; // no need to redirect
        // }
        //
        // // now, redirect only not authenticated
        //
        // var userInfo = isAuthed();
        //
        // if(userInfo === false) {
        //     e.preventDefault(); // stop current execution
        //     $state.go('portalLogin'); // go to login
        // }
    });

    function isAuthed() {
        if($cookieStore.get('userData')){
            return true;
        }else{
            return false;
        }
    }
}
