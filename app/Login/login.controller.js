(function() {
    'use strict';

    angular
        .module('app')
        .controller('loginController', loginController);

    loginController.$inject = ['dependencies'];
    
    /* @ngInject */
    function loginController(dependencies) {
        var vm = this;
        vm.title = 'loginController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();