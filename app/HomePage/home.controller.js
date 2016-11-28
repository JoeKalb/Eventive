(function() {
    'use strict';

    angular
        .module('app')
        .controller('homeController', homeController);

    homeController.$inject = ['dependencies'];
    
    /* @ngInject */
    function homeController(dependencies) {
        var vm = this;
        vm.title = 'homeController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();