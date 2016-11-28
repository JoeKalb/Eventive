(function() {
    'use strict';

    angular
        .module('app')
        .controller('registerController', registerController);

    registerController.$inject = ['dependencies'];
    
    /* @ngInject */
    function registerController(dependencies) {
        var vm = this;
        vm.title = 'registerController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();