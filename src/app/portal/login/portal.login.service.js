/**
 * Created by Rinas Musthafa on 4/28/2017.
 */
export class portalLoginService{

    constructor ($http, $rootScope,$cookieStore, API_HOST) {
        'ngInject'
        // Service logic
        // ...

        var tokenHandler = {};
        var token;
        var user;

        // var projects; // temp implementation
        var tempLoggedin = false;

        var observerCallbacks = [];

        if(angular.isDefined($cookieStore.get('userData'))){
            // temp login
            var e = $cookieStore.get('email');
            var p = $cookieStore.get('password');

            $http.post(API_HOST + '/authenticate', {email:e,password:p})
                .then(function(response, status, header, config) {
                    set(response.data.token);
                    user = response.data.user;
                    $rootScope.authUser = response.data.user;
                    // projects = response.data.projects;
                    tempLoggedin = true;
                    notifyObservers();
                }, function(data, status, header, config) {
                    console.log('login error')
                });

            // end temp login
        }

        //login
        var login = function(username,password,callback, failure){
            $http.post(API_HOST + '/authenticate', {email:username,password:password})
                .then(function(response, status, header, config) {
                    set(response.data.token);
                    user = response.data.user;
                    $rootScope.authUser = response.data.user;
                    // projects = response.data.projects;
                    $cookieStore.put('token',token);
                    $cookieStore.put('userData',$rootScope.authUser);
                    console.log(response);
                    tempLoggedin = true;
                    notifyObservers();
                    callback(response);
                    $cookieStore.put('email',username);
                    $cookieStore.put('password',password);
                    $cookieStore.put('loggedIn',true);
                }, function(data, status, header, config) {
                    failure(data);
                });
        }
        //end login
        var notifyObservers = function() {
            angular.forEach(observerCallbacks, function(callback) {
                callback();
            });
        };

        var set = function(newToken) {
            token = newToken;
        }

        tokenHandler.get = function() {
            return token;
        }

        var wrapActions = function(resource, actions) {
            var wrappedResource = resource;
            for(var i=0; i < actions.length; i++) {
                tokenWrapper(wrappedResource, actions[i]);
            }
            // return modified copy of resource
            return wrappedResource;
        };

        // wraps resource action to send request with auth token
        var tokenWrapper = function(resource, action) {
            // copy original action
            resource['_' + action] = resource[action];
            resource[action] = function(data, success, error) {
                return resource['_' + action](
                    angular.extend({}, data || {}, {token: tokenHandler.get()}),
                    success,
                    error
                );
            };
        };

        function putCookies(name, data) {
            var str;
            try{
                str = JSON.parse(data);
            } catch (e) {
                str = data;
            }
            localStorage.setItem(name, data);
        }

        // Public API here
        return {
            wrapActions : wrapActions,
            getUser : function() {
                return user;
            },
            getProjects : function() {
                return projects;
            },
            onTempLogin: function(callback) {
                observerCallbacks.push(callback);
            },
            login: function(u,p,c,f) {
                return login(u,p,c,f);
            },
            isTempLogged: function() {
                return tempLoggedin;
            },
            getToken: tokenHandler.get
        };
    }


}