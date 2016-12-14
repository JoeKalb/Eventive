(function() {
    'use strict';

    angular
        .module('app')
        .controller('upcomingEventsController', upcomingEventsController);

    upcomingEventsController.$inject = ['toastr', 'EventsFactory', 'storageFactory'];
    
    /* @ngInject */
    function upcomingEventsController(toastr, EventsFactory, storageFactory) {
        var vm = this;
        vm.title = 'upcomingEventsController';
        vm.events;
        vm.map = { center: { latitude: 32.716851, longitude:  -117.165237 }, zoom: 15 };
        activate();

        ////////////////

        function activate() {
            EventsFactory.getAllEvents().then(
                function(response){
                    console.log(response);

                    vm.events = response;
                });

            vm.id = storageFactory.getLocalStorage('userInfo')._id;
            vm.name = storageFactory.getLocalStorage('userInfo').name;
            vm.number = storageFactory.getLocalStorage('userInfo').number;
            vm.token = storageFactory.getLocalStorage('token');
            console.log(vm.token);


        }

        vm.alreadyInEvent = function(userId, attendees) {
            var len = attendees.length;
            for (var i = 0; i < len; i++) {
                if (userId === attendees[i].attendeeid) {
                    console.log("user attending this event");
                    return true
                }
            }
            return false;
        }

        vm.addToEvent = function(eventId) {
            console.log(eventId);
            EventsFactory.addToEvent(eventId, vm.id, vm.name, vm.number, vm.token).then(
                function(response){
                    console.log(response);

                    vm.updatedEvent = response;
                })
        }

        vm.sendUserReminder = function(eventId, eventName, address, date) {
            EventsFactory.sendUserMessage(vm.name, vm.number, eventName, address, date, vm.token, eventId).then(
                function(response) {
                    console.log(response);
                }, 
                function(error) {
                    toastr.error(error);
                });
        }

        
    }
})();