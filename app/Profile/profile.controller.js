(function() {
    'use strict';

    angular
        .module('app')
        .controller('profileController', profileController);

    profileController.$inject = ['dependencies'];
    
    /* @ngInject */
    function profileController(dependencies) {
        var vm = this;
        vm.title = 'profileController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();