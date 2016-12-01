(function() {
    'use strict';

    angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['toastr', 'AuthFactory', '$q'];
    
    /* @ngInject */
    function loginController(toastr, AuthFactory, $q) {
        var vm = this;
        vm.title = 'loginController';
        var token;
        activate();

        ////////////////

        function activate() {
        }
        // passes email and password to grab token, and then passes token to grab user info
        vm.login = function() {
            var defer = $q.defer();

            console.log('passing values');
            AuthFactory.verify(vm.email, vm.password, 0, 0, 'login').then(
                function(response){
                    token = response.token; // grabs token
                    console.log(token);
                    AuthFactory.getProfile(token).then(
                        function(response){
                            console.log(response); // grabs profile
                        })
                }
            )
        }
    }
})();