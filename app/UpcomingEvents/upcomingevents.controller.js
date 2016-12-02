(function() {
    'use strict';

    angular
        .module('app')
        .controller('upcomingEventsController', upcomingEventsController);

    upcomingEventsController.$inject = ['toastr', 'EventsFactory'];
    
    /* @ngInject */
    function upcomingEventsController(toastr, EventsFactory) {
        var vm = this;
        vm.title = 'upcomingEventsController';

        activate();

        ////////////////

        function activate() {
            EventsFactory.getAllEvents().then(
                function(response){
                    console.log(response);

                    vm.events = response;
                })
        }
    }
})();