(function() {
    'use strict';

    angular
        .module('app')
        .controller('profileController', profileController);

    profileController.$inject = ['toastr', 'storageFactory', 'EventsFactory'];
    
    /* @ngInject */
    function profileController(toastr, storageFactory, EventsFactory) {
        var vm = this;
        vm.title = 'profileController';

        activate();

        ////////////////

        function activate() {
            vm.email = storageFactory.getLocalStorage('userInfo').email;
            vm.password = storageFactory.getLocalStorage('userInfo').password;
            vm.number = storageFactory.getLocalStorage('userInfo').number;
            vm.name = storageFactory.getLocalStorage('userInfo').name;
            vm.id = storageFactory.getLocalStorage('userInfo')._id;
            vm.token = storageFactory.getLocalStorage('token');

            EventsFactory.getEventsByProfile(vm.id, vm.token).then(
                function(response) {
                    vm.events = response;
                    console.log(vm.events);
                },
                function(error) {
                    toastr.error("Something went wrong in the profile controller.")
                })
        }
    }

})();