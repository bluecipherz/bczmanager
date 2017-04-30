export function routerConfig ($stateProvider, $urlRouterProvider) {
    'ngInject';
    $stateProvider
        .state('dashboard', {
            url: '/',
            templateUrl: 'app/portal/dashboard/dashboard.html',
            controller: 'DashboardController',
            controllerAs: 'vm'
        })
        .state('portalLogin', {
            url: '/portal-login',
            templateUrl: 'app/portal/login/portal.login.html',
            controller: 'PortalLoginController',
            controllerAs: 'vm'
        });


    $urlRouterProvider.otherwise('/');
}
