(function() {
    'use strict';

    angular
        .module('app')
        .controller('profileController', profileController);

    profileController.$inject = ['toastr'];
    
    /* @ngInject */
    function profileController(toastr) {
        var vm = this;
        vm.title = 'profileController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();