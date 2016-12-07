(function() {
    'use strict';

    angular
        .module('app')
        .controller('organizerController', organizerController);

    organizerController.$inject = ['toastr', 'storageFactory', 'EventsFactory', '$state', '$stateParams'];
    
    /* @ngInject */
    function organizerController(toastr, storageFactory, EventsFactory, $state, $stateParams) {
        var vm = this;
        vm.title = 'organizerController';

        activate();

        ////////////////

        function activate() {
        	vm.email = storageFactory.getLocalStorage('userInfo').email;
            vm.password = storageFactory.getLocalStorage('userInfo').password;
            vm.number = storageFactory.getLocalStorage('userInfo').number;
            vm.name = storageFactory.getLocalStorage('userInfo').name;
            vm.id = storageFactory.getLocalStorage('userInfo')._id;
            vm.token = storageFactory.getLocalStorage('token');

            EventsFactory.getEventsCompany(vm.id, vm.token).then(
                function(response) {
                    vm.events = response;
                    console.log(vm.events);
                },
                function(error) {
                    toastr.error("Something went wrong in the profile controller.")
                })
        }

        vm.postNewEvent = function(eventName, companyName, companyid, datetime, address, token) {
            EventsFactory.addEvent(eventName, companyName, companyid, datetime, address, token).then(
                function(response) {
                    console.log('New Event Posted: ' + response);
                },
                function(error) {
                    toastr.error('Problem posting the event');
                })
        }
    }
})();