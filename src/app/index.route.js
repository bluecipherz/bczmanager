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
        })
        .state('user', {
            url: '/user/:id',
            templateUrl: 'app/user/dashboard/dashboard.html',
            controller: 'UserDashboardController',
            controllerAs: 'vm'
        })
        .state('turbo', {
            url: '/turbo',
            templateUrl: 'app/turbo/turbo.html',
            controller: 'TurboController',
            controllerAs: 'vm'
        });


    $urlRouterProvider.otherwise('/');
}
