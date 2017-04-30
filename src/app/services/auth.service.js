/**
 * Created by Rinas Musthafa on 2/11/2017.
 */

export class authService {
    constructor ($window, $log, TOKEN_KEY) {
        'ngInject'

        var  vm = this;
        $log.log("authService");

        vm.parseJwt = function (token) {
            //$log.log(token);
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace('-', '+').replace('_', '/');
            return angular.fromJson($window.atob(base64));
        };

        vm.saveToken = function (token) {
            $window.localStorage[TOKEN_KEY] = token;
        };

        vm.getToken = function () {
            return $window.localStorage[TOKEN_KEY];
        };


        vm.isAuthed = function () {
            var token = vm.getToken();
            if (token != null) {
                // var params = vm.parseJwt(token);
                // return Math.round(new Date().getTime() / 1000) <= params.exp;
                return true;
            } else {
                return false;
            }
        };

        vm.logout = function () {
            $window.localStorage.removeItem(TOKEN_KEY);
        }
    }
}


export class authInterceptor {
    constructor ($log, API_HOST, authService) {
        'ngInject'

        return {
            // automatically attach Authorization header
            request: function(config) {
                //$log.log(config);
                if(config.url.indexOf(API_HOST) === 0) {
                    if (config.method == 'POST') {
                        if (!(config.url.indexOf('authenticate') > 0)) {
                            config.token = authService.getToken();
                        }
                    } else if(config.method == 'GET') {
                        //config.headers.Authorization = 'Bearer ' + authService.getToken();
                    }
                }

                return config;
            },

            // If a token was sent back, save it
            response: function(res) {
                //$log.log(res);
                if(res.data) {
                    // $log.log(res.data.token);
                    if (res.config.url.indexOf(API_HOST) === 0 && res.data.token) {
                        authService.saveToken(res.token);
                    }
                }

                return res;
            }

            // responseError: function(res) {
            //     $log.log('interceptor');
            //     $log.log(res);
            // }
        }
    }
}
