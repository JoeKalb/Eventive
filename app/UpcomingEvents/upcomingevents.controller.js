(function() {
    'use strict';

    angular
        .module('app')
        .controller('upcomingEventsController', upcomingEventsController);

    upcomingEventsController.$inject = ['toastr'];
    
    /* @ngInject */
    function upcomingEventsController(toastr) {
        var vm = this;
        vm.title = 'upcomingEventsController';

        activate();

        ////////////////

        function activate() {
        }
    }
})();